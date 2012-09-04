//paperの高さ
halook.arrowChart.paperHeight = 1500;
// paperの幅
halook.arrowChart.paperWidth = 725;
// 矢印絵画領域の始まるオフセット分
halook.arrowChart.startLineX = 100;
// ひとつのセルの高さの設定
halook.arrowChart.cellHeight = 40;
// アローチャート部分の長さ
halook.arrowChart.arrowChartWidth = halook.arrowChart.paperWidth
		- halook.arrowChart.startLineX;

// string offset
halook.arrowChart.stringHeightOffset = -10;

// IDと登場回数を記憶する辞書
halook.arrowChart.idCounter = {};

// //////////////////////////////////////アロー関数群////////////////////////////////////////////////////////////

// アローチャート座標をチャート全体座標系に直す。
function getChartPosition(x, y) {
	return {
		posX : x + halook.arrowChart.startLineX,
		posY : y
	};
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ArrowChartView = wgp.AbstractView
		.extend({
			initialize : function() {
				this.viewType = wgp.constants.VIEW_TYPE.VIEW;
				this.collection = new arrowModelCollection();
				this.attributes = {};
				this.registerCollectionEvent();
				this.paper = new Raphael(document.getElementById(this.$el
						.attr("id")), this.width, this.height);
				this.paper.setSize(halook.arrowChart.paperWidth,
						halook.arrowChart.paperHeight);
				var sd = new Date();
				var fd = new Date();
				var subd = new Date();
				sd.setTime(sampleDatasJob.StartTime);
				fd.setTime(sampleDatasJob.FinishTime);
				subd.setTime(sampleDatasJob.SubmitTime);
				var jobColor;
				if (sampleDatasJob.Status == wgp.constants.JOB_STATE.SUCCESS) {
					jobColor = "#00FF00"
				} else if (sampleDatasJob.Status == wgp.constants.JOB_STATE.ERROR) {
					jobColor = "#FF0000"
				} else if (sampleDatasJob.Status == wgp.constants.JOB_STATE.RUNNING) {
					jobColor = "#0000FF"
				}

				$("#jobInfoSpace").html(
						"<font size='6'><b>" + sampleDatasJob.JobID
								+ " : </b></font>" + "<font size='6' color='"
								+ jobColor + "'><b>" + sampleDatasJob.Status
								+ "</b></font></br> " + "<font size='5'>("
								+ sampleDatasJob.JobName + ")</font></br>"
								+ "  " + sd.toLocaleString() + "  -  "
								+ fd.toLocaleString() + "( SUBMIT_TIME:"
								+ subd.toLocaleString() + " )</br>");

				
				// /複数会登場するIDの記憶と番号登録
				for ( var i = 0; i < sampleDatas.length; i++) {
					var idstring = sampleDatas[i].TaskAttemptID;
					var idArray = idstring.split('_');
					var rowCounter = 0;
					idArray[5] = idArray[5].replace(/0/g, '');
					if (idArray[5] != 0) {
						if (halook.arrowChart.idCounter[(idArray[3] + "_" + idArray[4])] == undefined)
							halook.arrowChart.idCounter[(idArray[3] + "_" + idArray[4])] = idArray[5];
						else if (halook.arrowChart.idCounter[(idArray[3] + "_" + idArray[4])] < idArray[5])
							halook.arrowChart.idCounter[(idArray[3] + "_" + idArray[4])] = idArray[5];
					}
				}
				
				//基本となるテーブルの線を描く
				this._drawTableLines();
				
				// 矢印たちと×印の絵画の作成
				this._drawArrowAndError();

				// textAreaの描画を行う。
				this._drawCellTitle();

				// /////グラフのtaskのカウントを実行

				this.maxId = 0;

				var realTag = $("#" + this.$el.attr("id"));
				if (this.width == null) {
					this.width = realTag.width();
				}
				if (this.height == null) {
					this.height = realTag.height();
				}

				console.log('called initialize');
			},
			render : function() {
				console.log('call render');
			},
			onAdd : function(element) {
				console.log('call onAdd');
			},
			onChange : function(element) {
				console.log('called changeModel');
			},
			onRemove : function(element) {
				console.log('called removeModel');
			},
			_drawArrowAndError : function(element) {
				var rowCounter = 0;

				for ( var i = 0; i < sampleDatas.length; i++) {
					var data = sampleDatas[i];
					var modelInfo;
					var indexInCell = 1;
					var totalInCell = 1;
					var modelInfoArray = [];
					var stateString;

					if (DisplayMode == "task") {
						if (halook.parentView.taskAttemptInfoDictionary[data.Mapreduce
								+ "_" + data.SimpleID].maxTime > 1)
							totalInCell = 2;
						if (0 == data.attemptTime % 2) {
							indexInCell = 2;
						} else {
							indexInCell = 1;
						}
						modelInfo = this._calcArrowLengthAndStartPos(
								data.StartTime, data.FinishTime, indexInCell,
								totalInCell, rowCounter);
						console.log("index info : " + totalInCell + " "
								+ indexInCell + " " + data.Mapreduce
								+ data.SimpleID + " counter " + rowCounter
								+ "  " + data.attemptTime + " status "
								+ data.Status);
					} else if (DisplayMode == "node") {
						modelInfo = this._calcArrowLengthAndStartPos(
								data.StartTime, data.FinishTime, 1, 1,
								rowCounter);
					}

					var modelDataForArrow = new wgp.MapElement({
						objectId : 30000 + i,
						objectName : null,
						height : 0,
						width : modelInfo.length,
						pointX : modelInfo.posX,
						pointY : modelInfo.posY
					});

					// ///statusがエラーの場合の処理はこれも行う
					console.log(data.Mapreduce
									+ "_"
									+ data.SimpleID
									+ "  attempt "
									+ data.attemptTime
									+ " "
									+ halook.parentView.taskAttemptInfoDictionary[data.Mapreduce
											+ "_" + data.SimpleID]);
					if (data.Status == "ERROR") {
						var errorInfo;
						if (DisplayMode == "task") {
							errorInfo = this._calcErrorLengthAndStartPos(
									data.FinishTime, indexInCell, totalInCell,
									rowCounter);
						} else if (DisplayMode == "node") {
							errorInfo = this._calcErrorLengthAndStartPos(
									data.FinishTime, 1, 1, rowCounter);
						}

						var modelDataForError = new wgp.MapElement({
							objectId : 15,
							objectName : null,
							height : 50,
							width : 50,
							pointX : errorInfo.posX,
							pointY : errorInfo.posY
						});
						if (data.Mapreduce == 'm') {
							stateString = "merror";
						} else if (data.Mapreduce == 'r') {
							stateString = "rerror";
						}
						var errorStateString = "error";
						new wgp.ErrorStateElementView({
							model : modelDataForError,
							paper : this.paper,
							state : errorStateString,
							info : data
						});

					} else if (data.Status == "RUNNING") {
						console.log("these are running");
						if (data.Mapreduce == "m") {
							stateString = "mrun";
						} else if (data.Mapreduce == "r") {
							stateString = "rrun";
						}
					} else {
						if (data.Mapreduce == 'm') {

							stateString = "mnormal";
						} else if (data.Mapreduce == 'r') {
							stateString = "rnormal";
						}
					}
					console.log("state " + stateString + " " + data.Mapreduce
							+ data.SimpleID + " " + (data.attemptTime - 1));
					new wgp.ArrowStateElementView({
						model : modelDataForArrow,
						paper : this.paper,
						state : stateString,
						info : data
					});

					rowCounter++;
					if (DisplayMode == "task"
							&& (i != sampleDatas.length - 1 && sampleDatas[i + 1].attemptTime != 1)) {
						rowCounter--;
					}

				}

			},
			_calcErrorLengthAndStartPos : function(eventTime, trialTime,
					allTrialTime, rowNum) {
				// /////////ここで長さとスタート位置の計算
				var x = 0, y = 0;
				x = halook.arrowChart.startLineX
						+ halook.arrowChart.arrowChartWidth
						* (eventTime - halook.parentView.minGraphTime) * 1.0
						/ halook.parentView.intervalTime;
				// スタートy位置
				y = halook.arrowChart.cellHeight * trialTime * 1.0
						/ (1 + allTrialTime) + rowNum
						* halook.arrowChart.cellHeight;
				// console.log("x = " + x + " y = " + y);

				return {
					posX : x,
					posY : y
				};
			},
			_calcArrowLengthAndStartPos : function(startTime, finishTime,
					trialTime, allTrialTime, rowNum) {
				var x = 0, y = 0, width = 0;
				// 幅
				width = halook.arrowChart.arrowChartWidth
						* (finishTime - startTime) * 1.0
						/ halook.parentView.intervalTime;
				// スタートx位置
				x = halook.arrowChart.startLineX
						+ halook.arrowChart.arrowChartWidth
						* (startTime - halook.parentView.minGraphTime) * 1.0
						/ halook.parentView.intervalTime;
				// console.log("startLineX: " + startLineX + " arrowwidth " +
				// halook.arrowChart.arrowChartWidth
				// + " intervalTime " + intervalTime + " startTime " + startTime
				// + " finishTime " + finishTime + " halook.parentView.mingraph
				// " +
				// halook.parentView.minGraphTime);
				// スタートy位置
				y = halook.arrowChart.cellHeight * trialTime
						/ (1 + allTrialTime) + rowNum
						* halook.arrowChart.cellHeight;
				// console.log("x = " + x + " y = " + y + " width = " + width);
				return {
					posX : x,
					posY : y,
					length : width
				};
			},
			_drawCellTitle : function() {
				if (DisplayMode == "task") {
					var textRowCounter = 0;
					for ( var i = 0; i < sampleDatas.length; i++) {
						var data = sampleDatas[i];
						console.log("now i am " + data.attemptTime + " "
								+ data.Mapreduce + "_" + data.SimpleID);
						//samokeDatasがソートされていることを前提に、ひとつ前のものと名前が同じなら、パスする。
						if (textRowCounter != 0
								&& sampleDatas[i - 1].Mapreduce == data.Mapreduce
								&& sampleDatas[i - 1].SimpleID == data.SimpleID) {
							// rowCounter--;
							continue;
						} else {
							var modelData5 = new wgp.MapElement({
								objectId : 40000 + i,
								objectName : null,
								height : 0,
								width : 90,
								pointX : 5,
								pointY : halook.arrowChart.cellHeight * 1.0 / 2
										+ textRowCounter
										* halook.arrowChart.cellHeight, // +
								// stringHeightOffset,
								text : data.Mapreduce + "_" + data.SimpleID,
								fontSize : 20
							});
							console.log("-----------" + data.Mapreduce + "_"
									+ data.SimpleID);
							new wgp.TextAreaStateElementView({
								model : modelData5,
								paper : this.paper,
								state : "merror"
							});
							textRowCounter++;
						}
					}
				} else if (DisplayMode == "node") {

					for ( var i = 0; i < sampleDatas.length; i++) {
						var labelString = sampleDatas[i].Hostname;
						var tmpLabelArray = labelString.split('/');
						labelString = tmpLabelArray.join('\n');
						console.log(labelString);
						var modelData5 = new wgp.MapElement({
							objectId : 40000 + i,
							objectName : null,
							height : 0,
							width : 90,
							pointX : 5,
							pointY : halook.arrowChart.cellHeight * 1.0 / 2 + i
									* halook.arrowChart.cellHeight,// +
							text : labelString,
							fontSize : 15
						});
						new wgp.TextAreaStateElementView({
							model : modelData5,
							paper : this.paper,
							state : "merror"
						});
					}
				}
				;
			},_drawTableLines:function(){
				// 縦線の表示 端から100px
				var modelData5 = new wgp.MapElement({
					objectId : 0,
					objectName : null,
					height : halook.arrowChart.paperHeight,
					width : 0,
					pointX : halook.arrowChart.startLineX,
					pointY : 0,
					color : "#777777"
				});
				new wgp.LineStateElementView({
					model : modelData5,
					paper : this.paper,
					state : "rerror"
				});
				
				// /セルの線引きの作成
				var cellCounter = Math.floor(halook.arrowChart.paperHeight
						/ halook.arrowChart.cellHeight);
				// console.log(cellCounter + "aaa");
				for ( var k = 0; k < cellCounter + 1; k++) {
					// console.log(i *halook.arrowChart.cellHeight + " cell
					// height");

					var modelData6 = new wgp.MapElement({
						objectId : k + 10000,
						objectName : null,
						height : 0,
						width : halook.arrowChart.paperWidth,
						pointX : 0,
						pointY : k * halook.arrowChart.cellHeight,
						color : "black",
						strokeWidth : 2
					});
					new wgp.LineStateElementView({
						model : modelData6,
						paper : this.paper,
						state : "rerror"
					});
				}


			},
			
			redraw:function(mode){
				this.paper.clear();
				DisplayMode = mode;
				//基本となるテーブルの線を描く
				this._drawTableLines();
				
				// 矢印たちと×印の絵画の作成
				this._drawArrowAndError();

				// textAreaの描画を行う。
				this._drawCellTitle();
			}
			

		});
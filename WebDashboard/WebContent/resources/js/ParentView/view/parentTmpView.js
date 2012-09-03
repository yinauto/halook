////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

DisplayMode = wgp.constants.SORT_MODE.NODE;// "task";

halook = {};
halook.jobInfoSpace = {};

halook.jobInfoSpace.width = "800px";
halook.jobInfoSpace.height = "90px";
halook.jobInfoSpace.marginTop = "10px";
halook.jobInfoSpace.marginRight = "10px";
halook.jobInfoSpace.float = "left";

halook.clearSpace = {};
halook.clearSpace.height = "5px";
halook.clearSpace.clear = "both";

halook.buttons = {};
halook.buttons.marginLeft = "10px";
halook.buttons.float = "left";

halook.taskButton = {};
halook.taskButton.width = "100px";
halook.taskButton.height = "40px";

halook.nodeButton = {};
halook.nodeButton.width = "100px";
halook.nodeButton.height = "40px";

halook.taskInfoSpace = {};
halook.taskInfoSpace.width = "110px";
halook.taskInfoSpace.height = "400px";
halook.taskInfoSpace.marginTop = "5px";
halook.taskInfoSpace.marginRight = "5px";
halook.taskInfoSpace.float = "left";

halook.arrowChart = {};
halook.arrowChart.width = "750px";
halook.arrowChart.height = "350px";
halook.arrowChart.overflow = "scroll";
halook.arrowChart.overflowX = "hidden";
halook.arrowChart.backgroundColor = "#EEEEEE";
halook.arrowChart.float = "right";

halook.dygraphChart = {};
halook.dygraphChart.width = "700px";
halook.dygraphChart.height = "200px";
halook.dygraphChart.backgroundColor = "#EEEEEE";
halook.dygraphChart.float = "right";

halook.parentView = {};
halook.parentView.taskSortFunctionTable = {
	wgp.constants.SORT_MODE.TASK : _taskIDSort,
	wgp.constants.SORT_MODE.NODE : _nodeSort
};

//グラフ最小の時間
halook.parentView.minGraphTime = 1346160591446;
// グラフ最大の時間
halook.parentView.maxGraphTime = 1346160592319;
// グラフのインターバルの時間
halook.parentView.intervalTime = halook.parentView.maxGraphTime - halook.parentView.minGraphTime;


//halook.arrowChart = {};



// /taskAttemptInfoArrayの情報。試行回数が複数のもののみ保持
// maxTime: 同じタスクの試行回数の最大値
// failNum : 同じタスクの失敗数
// runnningNum:同じタスクの動作数
// (successNum:同じタスクの成功数の最大値・・・イランとおもうけど)
// 同じIDの表に複数の行が入るときの lineNumももつ
halook.parentView.taskAttemptInfoDictionary = {};

var sampleDatasJob = {
	StartTime : 1346160591456,
	FinishTime : 1346160991946,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	JobName : "PiEstimator",
	Status : "ERROR",
};
var sampleDatas = [ {
	StartTime : 1346160591456,
	FinishTime : 1346160591946,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_m_000004_1",
	Hostname : "/abcfield/raoh",
	Status : "SUCCESS",
}, {
	StartTime : 1346160591856,
	FinishTime : 1346160592046,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_r_000033_1",
	Hostname : "/default-rack/raoh02",
	Status : "ERROR",
}, {
	StartTime : 1346160591556,
	FinishTime : 1346160591846,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_m_000004_2",
	Hostname : "/default-rack/kenma",
	Status : "ERROR",
}, {
	StartTime : 1346160591956,
	FinishTime : 1346160592319,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_m_000004_0",
	Hostname : "/default-rack/raoh05",
	Status : "RUNNING",
}, {
	StartTime : 1346160591446,
	FinishTime : 1346160592246,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_r_000013_0",
	Hostname : "/abcfield/raoh",
	Status : "SUCCESS",
}, {
	StartTime : 1346160591756,
	FinishTime : 1346160592046,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_r_000083_0",
	Hostname : "/default-rack/raoh02",
	Status : "ERROR",
}, {
	StartTime : 1346160592156,
	FinishTime : 1346160592280,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_r_000033_2",
	Hostname : "/oioioi/raoh",
	Status : "SUCCESS",
}, {
	StartTime : 1346160591556,
	FinishTime : 1346160591646,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_r_000039_0",
	Hostname : "/default-rack/raoh02",
	Status : "ERROR",
}, {
	StartTime : 1346160591446,
	FinishTime : 1346160592319,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_m_000028_0",
	Hostname : "/abcfield/raoh",
	Status : "RUNNING",
}, {
	StartTime : 1346160591756,
	FinishTime : 1346160591956,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_r_000033_0",
	Hostname : "/default-rack02/menma02",
	Status : "RUNNING",
}, {
	StartTime : 1346160591746,
	FinishTime : 1346160592300,
	SubmitTime : 1346160591446,
	JobID : "job_201208281744_0012",
	TaskAttemptID : "attempt_201306281744_0012_m_000028_1",
	Hostname : "/abcfield/raoh",
	Status : "ERROR",
}, ];

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////データの整理をするところ
// givenDatasはsampleDatasの形を入れることを想定
// attemptIDは１はじまりです。

// //////////ソートの関数の実装///////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ソートのモードを設定///
var sortString = "default";
// ソートのモードとソート用関数の対応付け辞書
// 新しくソートを追加するときは、ここにその名前と、比較関数の定義を対応付ける。
// デフォルトは、taskID順に表示

// ソートを実際に行う関数

// 以下ソート関数群
function _taskIDSort(first, second) {
	var firstNumID = first.SimpleID;
	var secondNumID = second.SimpleID;
	var firstAttemptTime = first.attemptTime;
	var secondAttemptTime = second.attemptTime;

	firstNumID = firstNumID.replace(/0/g, '');
	if (firstNumID == "")
		firstNumID = "0";

	secondNumID = secondNumID.replace(/0/g, '');
	if (secondNumID == "")
		secondNumID = "0";

	if (parseInt(firstNumID) > parseInt(secondNumID)) {
		// console.log(parseInt(firstNumID), parseInt(secondNumID));
		return 1;
	} else if (parseInt(firstNumID) == parseInt(secondNumID)) {
		// console.log(parseInt(firstNumID), parseInt(secondNumID));
		if (firstAttemptTime > secondAttemptTime) {
			// console.log(firstAttemptTime, secondAttemptTime);
			return 1;
		}
	}
	return -1;
}

function _nodeSort(first, second) {
	// そのまんま
	if (first.Hostname < second.Hostname)
		return -1;
	// 並び替え
	if (first.Hostname > second.Hostname)
		return 1;
	// 等しいときは、時間順
	if (first.StartTime > second.StartTime)
		return 1;
	return -1;
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ParentTmpView = wgp.AbstractView
		.extend({
			initialize : function() {
				this.viewType = wgp.constants.VIEW_TYPE.VIEW;
				this.collection = new parentTmpModelCollection();
				this.attributes = {};
				this.registerCollectionEvent();
				this.maxId = 0;
				var realTag = $("#" + this.$el.attr("id"));

				// //////////////////最初のデータの処理を行う。//////////////////////////////////////////////////////////////////////

				this._rearrangeDatas(sampleDatas);

				// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
				// /sortを実施
				this._executeTaskSort(sampleDatas, DisplayMode);
				// for ( var i = 0; i < sampleDatas.length; i++) {
				// console.log("HostName :" + sampleDatas[i].Hostname + " "
				// + sampleDatas[i].StartTime);
				// }
				// for ( var i = 0; i < sampleDatas.length; i++) {
				// console.log("taskName :" + sampleDatas[i].TaskAttemptID);
				// }
				//必要なhtml群を追加する。
				this._insertInitHtml();

				
				if (this.width == null) {
					this.width = realTag.width();
				}
				if (this.height == null) {
					this.height = realTag.height();
				}

				// console.log('called initialize parent view');
			},
			render : function() {
				// console.log('call render');
			},
			onAdd : function(element) {
				// console.log('call onAdd');
			},
			onChange : function(element) {
				// console.log('called changeModel');
			},
			onRemove : function(element) {
				// console.log('called removeModel');
			},
			_rearrangeDatas : function(givenDatas) {
				var pcounter = 0;
				for ( var i = 0; i < givenDatas.length; i++) {
					pcounter++;
					// IDを＿で区分けする
					var stringArray = (givenDatas[i].TaskAttemptID).split('_');
					// 試行回数を表す
					var attemptTime;
					// m_000033のようなキーの形を作る。
					var keyName = stringArray[3] + "_" + stringArray[4];
					var status = givenDatas[i].Status;

					// とりあえず新しく変数を追加
					givenDatas[i].Mapreduce = stringArray[3];
					givenDatas[i].SimpleID = stringArray[4];
					// セルの中における列情報も保持arrowChartViewで値を更新
					givenDatas[i].indexInCell = 0;

					// attemptTimeの計算
					stringArray[5] = stringArray[5].replace(/0/g, '');
					if (stringArray[5] != "") {
						attemptTime = parseInt(stringArray[5]) + 1;
					} else
						attemptTime = 1;
					givenDatas[i].attemptTime = attemptTime;

					// 同じtaskIDで最大回数を保存する
					if (halook.parentView.taskAttemptInfoDictionary[keyName] != undefined
							&& halook.parentView.taskAttemptInfoDictionary[keyName].maxTime < attemptTime) {
						(halook.parentView.taskAttemptInfoDictionary[keyName]).maxTime = attemptTime;
					} else if (halook.parentView.taskAttemptInfoDictionary[keyName] == undefined) {
						(halook.parentView.taskAttemptInfoDictionary[keyName]) = {
							maxTime : attemptTime,
							successNum : 0,
							failNum : 0,
							runningNum : 0,
							lineNum : 1
						};
					}
					// 自分の状況を保存する。
					// failNum : 同じタスクの失敗数
					// runningNum:同じタスクの動作数
					// (successNum:同じタスクの成功数の最大値・・・イランとおもうけど)
					if (status == wgp.constants.JOB_STATE.SUCCESS) {
						(halook.parentView.taskAttemptInfoDictionary[keyName]).successNum = 1;
					} else if (status == wgp.constants.JOB_STATE.ERROR) {
						(halook.parentView.taskAttemptInfoDictionary[keyName]).failNum++;
					} else if (status == wgp.constants.JOB_STATE.RUNNING) {
						(halook.parentView.taskAttemptInfoDictionary[keyName]).runningNum++;
					}

					// console.log("now taskAttemp " + pcounter + " "
					// + taskAttemptInfoDictionary[keyName].maxTime + " name: "
					// + keyName + "time:" + attemptTime + " status "
					// + (taskAttemptInfoDictionary[keyName]).failNum
					// + (taskAttemptInfoDictionary[keyName]).successNum
					// + (taskAttemptInfoDictionary[keyName]).runningNum);
				}
			},
			_executeTaskSort : function(array, mode) {
				if (halook.parentView.taskSortFunctionTable[mode] != null) {
					console.log("execute sort");
					array.sort(halook.parentView.taskSortFunctionTable[mode]);
				} else
					console.log("didn't execute sort");
			},
			_insertInitHtml : function(){
				$("#" + this.$el.attr("id"))
				.append(
						'<div id="jobInfoSpace" style="border:solid;border-color:green;border-width:4px;"></div>'
								+ '<div class="clearSpace"></div>');
		$("#jobInfoSpace").css({
			width : halook.jobInfoSpace.width,
			height : halook.jobInfoSpace.height,
			marginTop : halook.jobInfoSpace.marginTop,
			marginRight : halook.jobInfoSpace.marginRight,
			float : halook.jobInfoSpace.float,
		});
		$(".clearSpace").css({
			height : halook.clearSpace.height,
			clear : halook.clearSpace.clear
		});
		// ///////////////////////////////////////////////////////////
		// ボタンたちの追加を行う。////////////////////////////////////////////
		$("#" + this.$el.attr("id"))
				.append(
						'<div id="buttons"><input type="button" id="taskButton" value="task"></input></br><input type="button" id="nodeButton" value="node"></input></br><div id="taskInfoSpace" style="border:solid;border-color:red;border-width:4px;"></div>');
		$("#buttons").css({
			marginLeft : halook.buttons.marginLeft,
			float : halook.buttons.float,
		});
		$("#taskButton").css({
			width : halook.taskButton.width,
			height : halook.taskButton.height,
		});
		$("#nodeButton").css({
			// marginLeft:"10px",
			width : halook.nodeButton.width,
			height : halook.nodeButton.height,
		});
		$("#taskInfoSpace").css({
			width : halook.taskInfoSpace.width,
			height : halook.taskInfoSpace.height,
			marginTop : halook.taskInfoSpace.marginTop,
			marginRight : halook.taskInfoSpace.marginRight,
			float : halook.taskInfoSpace.float,
		});
		// ///////////////////////////////////////////////////////////
		// arrow用のdiv Tagの作成を行う。////////////////////////////////////
		$("#" + this.$el.attr("id")).append(
				'<div id="arrowChart"></div>');
		$("#arrowChart").css({
			width : halook.arrowChart.width,
			height : halook.arrowChart.height,
			overflow : halook.arrowChart.overflow,
			overflowX : halook.arrowChart.overflowX,
			float : halook.arrowChart.float,
			backgroundColor : halook.arrowChart.backgroundColor
		});
		var arrowView = new ArrowChartView({
			id : "arrowChart",
			rootView : this
		});
		// /////////////////////////////////////////////////////////////////
		// graph用のdiv Tagの作成を行う。//////////////////////////////////////
		$("#" + this.$el.attr("id")).append(
				'<div id="dygraphChart"></div>');
		$("#dygraphChart").css({
			width : halook.dygraphChart.width,
			height : halook.dygraphChart.height,
			backgroundColor : halook.dygraphChart.backgroundColor,
			float : halook.dygraphChart.float,
		});

		var dygraphView = new DygraphChartView({
			id : "dygraphChart",
			rootView : this
		});

		// /////////////////////////////////////////////////////////////////
		// ////arrow detail view
		// $("#" + this.$el.attr("id")).append('<div id="arrowInfoView"
		// style="padding:10px; color:white; position:absolute;
		// border:white 2px dotted; display:none">detail info is
		// here</div>');
		// console.log($("#arrowInfoView") + " arrowInfoView");
		// $("#arrowInfoView").css({
		// "width":"200",
		// "height":"200",
		// "top":"0",
		// "left":"0"
		// });

		// ////////////////////////////////////////////////////////////////////////

			}
			

		}

		);
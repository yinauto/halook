function plusMinus(num) {
	if (num > 0)
		return 1;
	else if (num < 0)
		return -1;
	else
		return 1;

}

var arrowMinLength = 10;
var arrowMaxLength = 20;

var makeID = 0;

wgp.ArrowStateElementView = Backbone.View.extend({
	// /stateを渡す。NORMAL or ERROR or WARN
	initialize : function(argument) {
		_.bindAll();
		this.model.set({
			state : argument.state
		});
		console.log(argument.state);
		this.taskInfo = argument.info;

		this._paper = argument.paper;
		if (this._paper == null) {
			alert("paper is not exist");
			return;
		}
		this.id = this.model.get("objectId");
		this.render();
	},
	render : function() {
		var color = this.getStateColor();
		this.model.set({
			"attributes" : {
				fill : color,
				stroke : color,
				"stroke-width" : 15
			}
		}, {
			silent : true
		});

		var lengthOfArrow = Math.sqrt(this.model.attributes.width
				* this.model.attributes.width + this.model.attributes.height
				* this.model.attributes.height);

		var arrowLength = lengthOfArrow * 0.12;
		if (arrowLength <= arrowMinLength)
			arrowLength = arrowMinLength;
		if (arrowLength >= arrowMaxLength)
			arrowLength = arrowMaxLength;
		var overModelData = new wgp.MapElement({
			objectId : 2,
			objectName : null,
			height : arrowLength * plusMinus(this.model.attributes.height),
			width : -arrowLength * plusMinus(this.model.attributes.width),
			pointX : this.model.attributes.pointX + this.model.attributes.width
					+ 2.5,
			pointY : this.model.attributes.pointY
					+ this.model.attributes.height - 2.5
		});
		var underModelData = new wgp.MapElement({
			objectId : 3,
			objectName : null,
			height : -arrowLength * plusMinus(this.model.attributes.height),
			width : -arrowLength * plusMinus(this.model.attributes.width),
			pointX : this.model.attributes.pointX + this.model.attributes.width
					+ 2.5,
			pointY : this.model.attributes.pointY
					+ this.model.attributes.height + 2.5
		});
		overModelData.set({
			"attributes" : {
				fill : color,
				stroke : color,
				"stroke-width" : 7
			}
		}, {
			silent : true
		});
		underModelData.set({
			"attributes" : {
				fill : color,
				stroke : color,
				"stroke-width" : 7,

			}
		}, {
			silent : true
		});
		this.element = [];
		this.element[0] = new line(this.model.attributes, this._paper);
		this.element[1] = new line(overModelData.attributes, this._paper);
		this.element[2] = new line(underModelData.attributes, this._paper);
		this.element[0].object.taskInfo = this.taskInfo;
		this.element[1].object.taskInfo = this.taskInfo;
		this.element[2].object.taskInfo = this.taskInfo;
		var instance = this;
		if ($.isArray(this.element)) {
			for ( var i = 0; i < this.element.length; i++) {
				(this.element)[i].object.mouseover(function(event) {
					instance.addMouseoverArrow(event);
				});
			}
		}
		if ($.isArray(this.element)) {
			for ( var i = 0; i < this.element.length; i++) {
				(this.element)[i].object.mouseout(function(event) {
					instance.addMouseoutArrow(event);
				});
			}
		}

	},
	update : function(model) {
		var instance = this;
		var color = this.getStateColor();
		this.model.set({
			"fill" : color
		}, {
			silent : true
		});
		this.element[0].setAttributes(model);
		this.element[1].setAttributes(model);
		this.element[2].setAttributes(model);
	},
	remove : function(property) {
		this.element[0].hide();
		this.element[1].hide();
		this.element[2].hide();
	},
	getStateColor : function() {
		var state = this.model.get("state");
		console.log(" getStateColor: " + state);
		var color = wgp.constants.STATE_COLOR[state];
		if (color == null) {
			color = wgp.constants.STATE_COLOR[wgp.constants.STATE.NORMAL];
		}
		return color;
	},
	addMouseoutArrow : function() {
		// var targetInfo = this.arrowInfo;
		$("#arrowInfoView").css("display", "none");
		// console.log("mouseout "+targetInfo+ " " + targetInfo.element.object);
		// targetInfo.element.object.hide();
		// targetInfo.remove();
		// targetInfo.hide();

	},
	addMouseoverArrow : function(event) {
		arrowElement = this.element;
		makeID++;
		if ($.isArray(arrowElement)) {
			// $("#arrowInfoView").css("display","block");
			$("#arrowInfoView").css("top", event.screenY - 40);
			$("#arrowInfoView").css("left", event.screenX - 150);
			$("#arrowInfoView")
					.css("background-color", "rgba(255,255,255,0.9)");
			$("#arrowInfoView").css("color", "#222222");
			$("#arrowInfoView").css("z-index", 100);
			var arrow = this.taskInfo
			var startd = new Date();
			startd.setTime(arrow.StartTime);
			var find = new Date();
			find.setTime(arrow.FinishTime);
			console
					.log("mousex, mousey, " + event.layerX + ", "
							+ event.layerY);
			// view を追加
			var modelData5 = new wgp.MapElement({
				objectId : 50000 + makeID,
				objectName : null,
				height : 0,
				width : 90,
				pointX : event.layerX,
				pointY : event.layerY, // +
				// stringHeightOffset,
				text : "testTextArea",
				fontSize : 20
			});
			// var arrowInfoElement = new wgp.ArrowInfoStateElementView({
			// model : modelData5,
			// paper : this._paper,
			// state : "merror"
			// });
			// this.arrowInfo = arrowInfoElement;
			console.log("this is : ", this);
			var attemptIDArray = arrow.TaskAttemptID.split("_");
			var infoString = " ID:</br>" + attemptIDArray[0] + "</br>" + "_"
					+ attemptIDArray[1] + "</br>" + "_" + attemptIDArray[2]
					+ "_" + attemptIDArray[3] + "_" + attemptIDArray[4]
					+ "</br>" + "_" + attemptIDArray[5] + "</br>" + "</br>"
					+ "Status:</br>" + arrow.Status + "</br>" + "</br>"
					+ startd + " - </br>" + find + "</br>" + "</br>"
					+ "Hostname:</br>" + arrow.Hostname + "</br>";
			$("#taskInfoSpace").html("<p>" + infoString + "</p>");
			$("p").css({
				"margin-left" : "3px"
			});
		} else {
			var arrow = this.taskInfo
			var startd = new Date();
			startd.setTime(arrow.StartTime);
			var find = new Date();
			find.setTime(arrow.FinishTime);
			var infoString = "JobId:</br>" + arrow.JobID + "</br>"
					+ "TaskAttemptID:</br>" + arrow.TaskAttemptID + "</br>"
					+ "Status:</br>" + arrow.Status + "</br>"
					+ "StartTime:</br>" + startd + "</br>" + "FinishTime:</br>"
					+ find + "</br>" + "Hostname:</br>" + arrow.Hostname
					+ "</br>";
			$("#taskInfoSpace").html(infoString);
		}

	}
});
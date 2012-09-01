var osMemoryGraphViewElement = {
	viewClassName : "ResourceGraphElementView",
	viewAttribute : {
		width : 250,
		height : 150,
		graphId : "osMemory",
		attributes : {
			xlabel : "Time",
			ylabel : "OS Memory",
			title : "Os memory",
			labels : [ "time", "PC1", "PC2" ]
		}
	}
};

var osCpuGraphViewElement = {
	viewClassName : "ResourceGraphElementView",
	viewAttribute : {
		title : "Os CPU",
		width : 250,
		height : 150,
		graphId : "osCPU",
		attributes : {
			xlabel : "Time",
			ylabel : "OS CPU ",
			labels : [ "time", "PC1", "PC2", "PC3" ]
		}
	}
};

var nnCpuGraphViewElement = {
	viewClassName : "ResourceGraphElementView",
	viewAttribute : {
		width : 250,
		height : 150,
		graphId : "nnCPU",
		title : "NameNode CPU",

		attributes : {
			xlabel : "Time",
			ylabel : "nn CPU",
			labels : [ "time", "PC1", "PC2" ]
		}
	}
};

var memoryGraphViewElement = {
	viewClassName : "ResourceGraphElementView",
	viewAttribute : {
		width : 250,
		height : 150,
		title : "Memory",
		graphId : "Memory",
		attributes : {
			xlabel : "Time",
			ylabel : "Memory",
			labels : [ "time", "PC1", "PC2", "PC3" ]
		}
	}
};

var nnMemoryGraphViewElement = {
	viewClassName : "ResourceGraphElementView",
	viewAttribute : {
		width : 250,
		height : 150,
		graphId : "nnMemory",
		attributes : {
			title : "NameNode memory",
			xlabel : "Time",
			ylabel : "NN Memory",
			labels : [ "time", "PC1" ]
		}
	}
};
var cpuGraphViewElement = {
	viewClassName : "ResourceGraphElementView",
	viewAttribute : {
		width : 250,
		height : 150,
		graphId : "CPUs",
		attributes : {
			xlabel : "Time",
			ylabel : "CPU ",
			valueRange : [ 0, 100 ],
			labels : [ "time", "PC1", "PC2", "PC3" ]
		}
	}
};

var separaterElement = {
	viewClassName : "SeparaterElementView"
};

var mapTabElement = {
	viewClassName : "wgp.MapView",
	tabTitle : "Map",
};

var sliderViewElement = {
	viewClassName : "SliderView"
};

var graphAreaTabElement = {
	viewClassName : "wgp.MultiAreaView",
	rootView : appView,
	tabTitle : "Graph",
	collection : [ sliderViewElement, separaterElement, memoryGraphViewElement,
			cpuGraphViewElement, osCpuGraphViewElement, separaterElement,
			nnCpuGraphViewElement ]
};

var tabViewElement = {
	viewClassName : "wgp.TabView",
	rootView : appView,
	collection : [ mapTabElement, graphAreaTabElement ]
};

var nodeInfomationViewElement = {
	viewClassName : "NodeInfomationView",
};

var nodeInfomationMultiElement = {
	viewClassName : "wgp.MultiAreaView",
	rootView : appView,
	tabTitle : "nodeInfo",
	collection : [ nodeInfomationViewElement ]
};

wgp.constants.VIEW_SETTINGS = {
	"default" : graphAreaTabElement,
	"/graph/" : tabViewElement,
	"/nodeInfomation/" : nodeInfomationMultiElement
};
/*
 WGP  0.1  - Web Graphical Platform
 Copyright (c) 2012, WGP.LICENSES.COM
 Dual licensed under the MIT and GPL licenses
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl-2.0.html
 Date: 12/07/29
 */
var wgp = {};

wgp.constants = {};

wgp.constants.BACKBONE_EVENT = {};
wgp.constants.BACKBONE_EVENT.SILENT = {silent: true};

wgp.constants.RENDER_TYPE = {};
wgp.constants.RENDER_TYPE.ALL = "all";
wgp.constants.RENDER_TYPE.ADD = "add";
wgp.constants.RENDER_TYPE.DELETE = "delete";
wgp.constants.RENDER_TYPE.UPDATE = "update";

wgp.constants.VIEW_TYPE = {};
wgp.constants.VIEW_TYPE.CONTROL = "control";
wgp.constants.VIEW_TYPE.TAB = "tab";
wgp.constants.VIEW_TYPE.AREA = "area";
wgp.constants.VIEW_TYPE.VIEW = "view";

wgp.constants.CHANGE_TYPE = {};
wgp.constants.CHANGE_TYPE.ADD = 2;
wgp.constants.CHANGE_TYPE.DELETE = 1;
wgp.constants.CHANGE_TYPE.UPDATE = 0;

wgp.constants.STATE = {};
wgp.constants.STATE.NORMAL = "normal";
wgp.constants.STATE.SUCCESS = "success";
wgp.constants.STATE.RUNNING = "running";
wgp.constants.STATE.WARN = "warn";
wgp.constants.STATE.FAIL = "fail";
wgp.constants.STATE.FAILED = "fail";
wgp.constants.STATE.KILLED = "killed";
wgp.constants.STATE.MNORMAL = "mnormal";
wgp.constants.STATE.MRUNNING = "mrun";
wgp.constants.STATE.MFAIL = "mfail";
wgp.constants.STATE.MKILLED = "mkilled";
wgp.constants.STATE.RNORMAL = "rnormal";
wgp.constants.STATE.RRUNNING = "rrun";
wgp.constants.STATE.RFAIL = "rfail";
wgp.constants.STATE.RKILLED = "rkilled";
wgp.constants.STATE.TASKKILLED = "killed";
wgp.constants.STATE.TASKFAIL = "fail";


wgp.constants.JOB_STATE = {};
wgp.constants.JOB_STATE.NORMAL = "NORMAL";
wgp.constants.JOB_STATE.RUNNING = "RUNNING";
wgp.constants.JOB_STATE.FAIL = "FAILED";
wgp.constants.JOB_STATE.FAILED = "FAILED";
wgp.constants.JOB_STATE.KILLED = "KILLED";
wgp.constants.JOB_STATE.SUCCESS = "SUCCESS";

wgp.constants.JOB_STATE_COLOR = {};
wgp.constants.JOB_STATE_COLOR.NORMAL = "#00FF00";
wgp.constants.JOB_STATE_COLOR.RUNNING = "#007700";
wgp.constants.JOB_STATE_COLOR.FAIL = "#FF0000";
wgp.constants.JOB_STATE_COLOR.KILLED = "#888800";
wgp.constants.JOB_STATE_COLOR.SUCCESS = "#0000FF";





//wgp.constants.STATE_COLOR = {};
//wgp.constants.STATE_COLOR[wgp.constants.STATE.NORMAL]="#00FF00";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.SUCCESS]="#00FF00";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.RUNNING]="#0000FF";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.KILLED]="#FFFF00";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.FAIL]="#FF0000";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.MNORMAL]="#007700";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.MRUNNING]="#00FF00";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.MFAIL]="#FF7700";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.MKILLED]="#777700";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.RNORMAL]="#000077";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.RRUNNING]="#0000FF";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.RFAIL]="#FF0077";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.RKILLED]="#770077";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.TASKEFAIL]="#FF0000";
//wgp.constants.STATE_COLOR[wgp.constants.STATE.TASKKILLED]="#FF7700";

wgp.constants.STATE_COLOR = {};

wgp.constants.STATE_COLOR[wgp.constants.STATE.NORMAL]="#00FF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.SUCCESS]="#00FF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RUNNING]="#0000FF";
wgp.constants.STATE_COLOR[wgp.constants.STATE.KILLED]="#FF6600";
wgp.constants.STATE_COLOR[wgp.constants.STATE.FAIL]="#FF6600";
wgp.constants.STATE_COLOR[wgp.constants.STATE.FAILED]="#FF6600";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MNORMAL]="#008000";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MRUNNING]="#00FF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MFAIL]="#FF0000";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MKILLED]="#777777";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RNORMAL]="#0000FF";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RRUNNING]="#0000FF";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RFAIL]="#C400C4";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RKILLED]="#777777";
wgp.constants.STATE_COLOR[wgp.constants.STATE.TASKEFAIL]="#FF6600";
wgp.constants.STATE_COLOR[wgp.constants.STATE.TASKKILLED]="#FF6600";

wgp.constants.IS_CHANGE = {};
wgp.constants.IS_CHANGE.SIZE = {"pointX":true, "pointY":true, "width":true, "height":true};
wgp.constants.IS_CHANGE.STATE = {"state":true};

// url
wgp.constants.URL = {};
wgp.constants.URL.TERM_DATA_URL = "/termData";
wgp.constants.URL.GET_TERM_DATA = wgp.constants.URL.TERM_DATA_URL + "/get";

// tree configuration
wgp.constants.TREE = {};
wgp.constants.TREE.DATA_ID = "tree";
wgp.constants.TREE.CENTER_NODE_ICON = "center";
wgp.constants.TREE.LEAF_NODE_ICON = "leaf";
wgp.constants.TREE.INITAL_OPEN = true;
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

wgp.constants.VIEW_TYPE = {};
wgp.constants.VIEW_TYPE.CONTROL = "control";
wgp.constants.VIEW_TYPE.TAB = "tab";
wgp.constants.VIEW_TYPE.AREA = "area";
wgp.constants.VIEW_TYPE.VIEW = "view";

wgp.constants.CHANGE_TYPE = {};
wgp.constants.CHANGE_TYPE.ADD = "add";
wgp.constants.CHANGE_TYPE.DELETE = "delete";
wgp.constants.CHANGE_TYPE.UPDATE = "update";

wgp.constants.STATE = {};
wgp.constants.STATE.NORMAL = "normal";
wgp.constants.STATE.SUCCESS = "success";
wgp.constants.STATE.RUNNING = "running";
wgp.constants.STATE.WARN = "warn";
wgp.constants.STATE.ERROR = "error";
wgp.constants.STATE.MNORMAL = "mnormal";
wgp.constants.STATE.MRUNNING = "mrun";
wgp.constants.STATE.MERROR = "merror";
wgp.constants.STATE.RNORMAL = "rnormal";
wgp.constants.STATE.RRUNNING = "rrun";
wgp.constants.STATE.RERROR = "rerror";
wgp.constants.STATE.TASKKILLED = "killed";
wgp.constants.STATE.TASKERROR = "error";


wgp.constants.JOB_STATE = {};
wgp.constants.JOB_STATE.NORMAL = "NORMAL";
wgp.constants.JOB_STATE.RUNNING = "RUNNING";
wgp.constants.JOB_STATE.ERROR = "ERROR";
wgp.constants.JOB_STATE.SUCCESS = "SUCCESS";

wgp.constants.SORT_MODE = {};
wgp.constants.SORT_MODE.TASK = "task";
wgp.constants.SORT_MODE.NODE = "node";


wgp.constants.STATE_COLOR = {};
wgp.constants.STATE_COLOR[wgp.constants.STATE.NORMAL]="#00FF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.SUCCESS]="#00FF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RUNNING]="#0000FF";
wgp.constants.STATE_COLOR[wgp.constants.STATE.WARN]="#FFFF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.ERROR]="#FF0000";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MNORMAL]="#007700";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MRUNNING]="#00FF00";
wgp.constants.STATE_COLOR[wgp.constants.STATE.MERROR]="#FF7700";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RNORMAL]="#000077";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RRUNNING]="#0000FF";
wgp.constants.STATE_COLOR[wgp.constants.STATE.RERROR]="#FF0077";
wgp.constants.STATE_COLOR[wgp.constants.STATE.TASKERROR]="#FF0000";
wgp.constants.STATE_COLOR[wgp.constants.STATE.TASKKILLED]="#FF7700";




wgp.constants.IS_CHANGE = {};
wgp.constants.IS_CHANGE.SIZE = {"pointX":true, "pointY":true, "width":true, "height":true};
wgp.constants.IS_CHANGE.STATE = {"state":true};

wgp.constants.VIEW_SETTINGS = {};
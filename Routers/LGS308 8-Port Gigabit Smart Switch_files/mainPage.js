var TKN_CONST=1
var TKN_DICT_ITEM=2
var TKN_DATE_TIME=3
var TKN_DATE=4
var TKN_TIME=5
var TKN_NUMBER=6
var TKN_CALLBACK=7
var TKN_DATE_SHORT_TIME=8
var TKN_SHORT_TIME=9
function PageTokens(id,page)
{
this.id = id;
this.page = page;
this.error = null;
var pageTokenArr = new Array();
var localization = getTopApp().localization;
localization.addPage(this);
this.init = function(LangSelector)
{
var ret=true;
localization.fun="pageTokens.init";
if (localization.ENABLED){
translatePage();
if (LangSelector){
if (!LangSelector.placeHolderId||!document.getElementById(LangSelector.placeHolderId)) {
this.error = localization.trc.setError("LngSelParamErr");
return false;
}
ret=localization.createLangSelector(document.getElementById(LangSelector.placeHolderId),LangSelector);
this.error=(!ret)? localization.error : null;
}
}
return ret;
};
var Token = function (domId, dictId, dictObj, paramList)
{
this.id = domId;
this.dictId = dictId;
this.domObj = null;
this.dictObj = dictObj;
this.paramList = paramList;
this.attrList = null;
};
Token.prototype.translate = function()
{
var attrName="";
try {
localization.fun="Token.translate"+((this.id)?" ["+this.id+"]":"");
if (!this.domObj)
this.domObj=document.getElementById(this.id);
if ((!this.domObj)&&(!this.dictId)&&(this.paramList)) {
var tmp=localization.lngMg.getText(this.dictId,this.paramList);
return;
}
if (this.domObj){
if ((this.dictId)||(this.paramList))
updateDomObj(this.domObj,localization.lngMg.getText(this.dictId,this.paramList))
if (this.attrList) {
for (var attrName in this.attrList) {
localization.fun="Token.translate"+" ["+this.id+"."+attrName+"]";
var attrValue = localization.lngMg.getText(this.attrList[attrName].attrDictId, this.attrList[attrName].attrParamList);
this.domObj[attrName]=attrValue;
}
}
}
}
catch(err){
var errObj = localization.trc.setError("TknTransErr",[this.id+"."+attrName]);
}
};
Token.prototype.write = function() {
if (this.dictId!=null)
document.write(dictionaries.gettext(this.dictId,this.paramList));
};
this.setToken = function(domId, dictId, paramList)
{
var mess="";
var dictObj;
localization.page=this.page;
localization.fun="setToken ["+domId+"]";
if (!localization.ENABLED) return;
if (dictId) {
if (!localization.lngMg.isDictItemExist(dictId)) {
this.error = localization.trc.setError("DINotFound",[dictId]);
return false;
}
}
if (paramList) {
mess=CheckParamList(paramList);
if (mess!="") {
this.error = localization.trc.setError("TknParErr",[mess]);
return false;
}
}
var token = new Token(domId, dictId, dictObj, paramList);
pageTokenArr[domId]=token;
token.translate();
return true;
};
this.setServerMessageToken = function(domId,dictId,text,paramList)
{
var mess="";
var dictObj;
var patt0 = new RegExp("\\b\\d+[.,]?\\d*","g");
localization.page=this.page;
localization.fun="setServerMessageToken ["+domId+"]";
if (!localization.ENABLED) return;
if (!localization.lngMg.addDefaultDictionaryItem(dictId, text)) {
this.error = localization.error;
return false;
}
if (paramList) {
var paramType;
var tokenParamList = new Array();
for (var i=0; i<paramList.length; i++) {
paramType = TKN_CONST;
if (!isNaN(paramList[i]))
if (patt0.test(paramList[i]))
paramType = TKN_NUMBER;
var newParam = new Array();
newParam[0]= paramType;
newParam[1]=paramList[i];
tokenParamList[i]=newParam;
}
mess=CheckParamList(tokenParamList);
if (mess!="") {
this.error = localization.trc.setError("TknParErr",[mess]);
alert("mess="+mess);
return false;
}
}
else {
this.error = localization.trc.setError("TknParMiss");
return false;
}
var token = new Token(domId, dictId, dictObj, tokenParamList);
pageTokenArr[domId]=token;
token.translate();
return true;
};
this.setTokenAttribute = function(domId, attrName, dictId, paramList)
{
if (!localization.ENABLED) return;
localization.page=this.page;
localization.fun="setTokenAttribute ["+domId+"."+attrName+"]";
if (!pageTokenArr[domId]) {
this.error = localization.trc.setError("TknNotExist",[domId]);
return false;
}
if (dictId&&(!localization.lngMg.isDictItemExist(dictId))) {
this.error = localization.trc.setError("DINotFound",[dictId]);
return false;
}
if (paramList) {
mess=CheckParamList(paramList);
if (mess!="") {
this.error = localization.trc.setError("TknParErr",mess);
return false;
}
}
var token = pageTokenArr[domId];
if (!token.attrList)
token.attrList = new Array();
token.attrList[attrName]= new TokenAttribute(attrName, dictId, paramList);
if (token.domObj) {
try {
var attrValue = localization.lngMg.getText(dictId, paramList);
token.domObj[attrName]=attrValue;
}
catch(err){
this.error = localization.trc.setError("TknAttrTransErr");
return false;
}
}
return true;
};
var TokenAttribute = function (attrName, attrDictId, attrParamList)
{
this.attrName = attrName;
this.attrDictId = attrDictId;
this.attrParamList = attrParamList;
};
this.removeTokenAttribute = function(domId, attrName)
{
if (!localization.ENABLED) return;
localization.page=this.page;
localization.fun="removeTokenAttribute ["+domId+"."+attrName+"]";
if (!pageTokenArr[domId]) {
this.error = localization.trc.setError("TknNotExist",[domId]);
return false;
}
else {
var token = pageTokenArr[domId];
token.attrList[attrName]= null;
}
return true;
};
this.removeToken = function(domId) {
if (!localization.ENABLED) return;
pageTokenArr[domId]=null
};
this.translate = function(lngSelContainer) {
translatePage()
};
this.getDictItemSeverity = function(hashKey) {
return localization.lngMg.getDictItemSeverity(hashKey)
}
this.getActiveDateFormat = function() {
return localization.lngMg.getActiveDateFormat();
};
this.getActiveTimeFormat = function() {
return localization.lngMg.getActiveTimeFormat();
};
this.getActiveDateTimeFormat = function() {
return localization.lngMg.getActiveDateFormat()+" "+localization.lngMg.getActiveTimeFormat();
};
this.getActiveNumberFormat = function() {
return localization.lngMg.getActiveNumberFormat();
};
this.getLocalLangSysName = function() {
return localization.lngMg.getLocalLangSysName();
};
this.getActiveLangCode = function() {
return localization.lngMg.getActiveLangCode();
};
this.getActiveDecimalDelim = function() {
return localization.lngMg.getActiveDecimalDelim();
}
this.getActiveDigitGroupDelim = function() {
return localization.lngMg.getActiveDigitGroupDelim();
}
this.getActiveShortBtnPercentage = function() {
return localization.lngMg.getActiveShortBtnPercentage();
}
this.getActiveLongBtnPercentage = function() {
return localization.lngMg.getActiveLongBtnPercentage();
}
this.createDateObject = function(dateStr, dateFormat) {
return localization.lngMg.createDateObject(dateStr, dateFormat)
};
this.createNumberObject = function(paramValue) {
var ret=localization.lngMg.createNumberObject(paramValue)
if (!ret) this.error = localization.error;
return ret;
};
this.addDefaultDictionaryItem = function(itemId, itemText) {
localization.lngMg.addDefaultDictionaryItem(itemId, itemText);
};
this.langReload = function() {
localization.langReload();
};
this.getText = function(dictId, paramList) {
return localization.lngMg.getText(dictId, paramList);
};
this.destroy = function() {
if (!localization.ENABLED) return;
try {localization.removePage(this.id);}
catch(err){}
};
function CheckParamList(paramList) {
var arrTypes = new Array("","TKN_CONST","TKN_DICT_ITEM","TKN_DATE_TIME","TKN_DATE","TKN_TIME","TKN_NUMBER","TKN_CALLBACK","TKN_DATE_SHORT_TIME","TKN_SHORT_TIME");
var ok=true;
var mess="";
for (var i=0; i<paramList.length; i++) {
if (typeof(paramList[i][1])=='string')
paramList[i][1]=paramList[i][1].replace(/&nbsp;/g," ");
switch (paramList[i][0]) {
case TKN_CONST: {ok=(paramList[i][1]); break;}
case TKN_DICT_ITEM: {ok=(localization.lngMg.isDictItemExist(paramList[i][1])); break;}
case TKN_DATE_SHORT_TIME:
case TKN_SHORT_TIME:
case TKN_DATE_TIME:
case TKN_DATE:
case TKN_TIME: {
if (!(null!=paramList[i][1] && 'object'==typeof(paramList[i][1])))
paramList[i][1]=localization.lngMg.createDateObject(paramList[i][1],paramList[i][2]);
ok =((paramList[i][1])&&(!isNaN(paramList[i][1].getFullYear()))); break;
}
case TKN_NUMBER: {ok=(!isNaN(paramList[i][1])); break;}
case TKN_CALLBACK: {ok=('function'==typeof(paramList[i][1])||'object'==typeof(paramList[i][1]));break;}
default: {mess="Unknown parameter type"; break;}
}
if (!ok) {
mess="Invalid token parameter. Type: "+arrTypes[paramList[i][0]]+ ".Value: "+paramList[i][1]+ ".Type: "+typeof(paramList[i][1]);
break;
}
}
return mess;
}
function translatePage() {
for (var i in pageTokenArr)
if (pageTokenArr[i])
try {pageTokenArr[i].translate();}
catch(err){pageTokenArr[i]=null;};
}
function getTopApp() {
var _top = top;
if (_top.localization){
return _top;
}
if (opener) {
if (opener.top)
if (opener.top.localization)
return opener.top;
if (opener.opener) {
if (opener.opener.top)
if (opener.opener.top.localization)
return opener.opener.top;
if (opener.opener.opener) {
if (opener.opener.opener.top)
if (opener.opener.opener.top.localization)
return opener.opener.opener.top;
}
}
};
if (!(_top.localization)) {
for (var i=0; i<_top.frames.length; i++) {
if (_top.frames[i].localization){
_top = _top.frames[i];
break;
}
}
};
return _top;
}
function updateDomObj(domObj, tranStr)
{
if (domObj) {
domObj.innerHTML=tranStr;
}
}
};
function projTknObj(id, page)
{
this.tknObj = new PageTokens(id,page);
this.btnColl = new Array();
this.initButtonResize();
}
projTknObj.prototype.initButtonResize = function()
{
var tokenObj = this;
this.setTokenWithError("btnResizer",null,[[TKN_CALLBACK,function(){setButtonsSizeGeneral(tokenObj)}]]);
}
projTknObj.prototype.destroy = function()
{
this.tknObj.destroy();
}
projTknObj.prototype.langReload = function()
{
this.tknObj.langReload();
}
projTknObj.prototype.getLocalLangSysName = function()
{
return this.tknObj.getLocalLangSysName();
}
projTknObj.prototype.setServerMessageToken = function(domId,dictId,text,paramList)
{
return this.tknObj.setServerMessageToken(domId,dictId,text,paramList);
}
projTknObj.prototype.setToken = function(domId, dictId, paramList)
{
return this.tknObj.setToken(domId, dictId, paramList);
}
projTknObj.prototype.setTokenAttribute = function(domId, attrName, dictId, paramList)
{
this.tknObj.setTokenAttribute(domId, attrName, dictId, paramList);
}
projTknObj.prototype.getText = function(dictId, paramList)
{
return this.tknObj.getText(dictId, paramList);
}
projTknObj.prototype.init = function(lngSelContainer)
{
this.tknObj.init(lngSelContainer);
}
projTknObj.prototype.removeToken = function(domId)
{
this.tknObj.removeToken(domId);
}
projTknObj.prototype.removeTokenAttribute = function(domId, attrName)
{
this.tknObj.removeTokenAttribute(domId, attrName);
}
projTknObj.prototype.translate = function(lngSelContainer)
{
this.tknObj.translate(lngSelContainer);
}
projTknObj.prototype.getActiveDateFormat = function()
{
return this.tknObj.getActiveDateFormat();
}
projTknObj.prototype.getActiveTimeFormat = function()
{
return this.tknObj.getActiveTimeFormat();
}
projTknObj.prototype.getActiveDateTimeFormat = function()
{
return this.tknObj.getActiveDateTimeFormat();
}
projTknObj.prototype.getActiveNumberFormat = function()
{
return this.tknObj.getActiveNumberFormat();
}
projTknObj.prototype.getActiveDecimalDelim = function()
{
return this.tknObj.getActiveDecimalDelim();
}
projTknObj.prototype.getActiveDigitGroupDelim = function()
{
return this.tknObj.getActiveDigitGroupDelim();
}
projTknObj.prototype.getDictItemSeverity = function(hashKey)
{
return this.tknObj.getDictItemSeverity(hashKey);
}
projTknObj.prototype.createDateObject = function(dateStr, dateFormat)
{
return this.tknObj.createDateObject(dateStr, dateFormat);
}
projTknObj.prototype.createNumberObject = function(paramValue)
{
return this.tknObj.createNumberObject(paramValue);
}
var LEGAL_INTEGER_CHARS = "1234567890";
var LEGAL_IPv4_CHARS = "1234567890.";
var LEGAL_MAC_CHARS = "1234567890abcdefABCDEF:";
var LEGAL_HEX_CHARS = "1234567890abcdefABCDEF";
var LEGAL_IPv6_CHARS = "1234567890abcdefABCDEF:.";
var LEGAL_DOMAINNAME_CHARS = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-_";
var LEGAL_ALPHANUMERIC_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var LEGAL_SPECIAL_CHAR_VAR = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|} " + "\xA0";
var LEGAL_SPECIAL_CHAR = ":,./_-=;";
var LEGAL_SPECIAL_CHAR_DNS = ".-";
var ILLEGAL_ACL_NAME_CHARS = "#";
var DYN_LENGTH_DATE = 1;
var DYN_LENGTH_TIME = 2;
var DYN_LENGTH_DATETIME = 3;
var DYN_LENGTH_TIME_SHORT = 4;
var IS_ILLEGAL_CHARS = 5;
projTknObj.prototype.getShortButtonWidth = function()
{
return localization.lngMg.getActiveShortBtnPercentage() / 100 *
STYLING.buttons.getShortWidth() - STYLING.buttons.getMinWidth();
}
projTknObj.prototype.getLongButtonWidth = function()
{
return localization.lngMg.getActiveLongBtnPercentage() / 100 *
STYLING.buttons.getLongWidth() - STYLING.buttons.getMinWidth();
}
projTknObj.prototype.setButtonsSize = function()
{
for(var i = 0; i < this.btnColl.length; i++)
{
if(this.btnColl[i][1]=="long")
this.setTokenAttribute(this.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getLongButtonWidth().toString()]]);
else
this.setTokenAttribute(this.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getShortButtonWidth().toString()]]);
}
}
function setButtonsSizeGeneral(tokenObj)
{
for(var i = 0; i < tokenObj.btnColl.length; i++)
{
if(tokenObj.btnColl[i][1]=="long")
tokenObj.setTokenAttribute(tokenObj.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getLongButtonWidth().toString()]]);
else
tokenObj.setTokenAttribute(tokenObj.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getShortButtonWidth().toString()]]);
}
}
projTknObj.prototype.createLocalizedLabel = function(txt, className, htmlFor, id, isRequired, tokenID, paramList, parentId)
{
if(CreateLabel(txt, className, htmlFor, id, isRequired,parentId))
this.setTokenWithError(id+"_separator","10999");
this.setTokenWithError(id, tokenID, paramList);
if(isRequired)
{
this.setTokenWithError(id+"_img");
this.setTokenAttribute(id+"_img","title","10997");
}
}
projTknObj.prototype.createLocalizedRangeLabel = function(fromVal, toVal, lblId, dictId, parentId)
{
this.createLocalizedLabel("", "hint", "", lblId, false, dictId, [[TKN_NUMBER, fromVal],[TKN_NUMBER, toVal]], parentId);
}
projTknObj.prototype.createLocalizedRangeLabel2 = function(arrRange , lblId, dictId, parentId)
{
if (arrRange.length > 1)
{
if (!dictId)
dictId = "10720"
this.createLocalizedLabel("", "hint", "", lblId, false, dictId, [[TKN_NUMBER, arrRange[0][0]],[TKN_NUMBER, arrRange[0][1]],[TKN_NUMBER, arrRange[1][0]],[TKN_NUMBER, arrRange[1][1]]], parentId);
}
else
{
if (!dictId)
dictId = "10714"
this.createLocalizedLabel("", "hint", "", lblId, false, dictId, [[TKN_NUMBER, arrRange[0][0]],[TKN_NUMBER, arrRange[0][1]]], parentId);
}
}
projTknObj.prototype.CreateLocalizedButtonApply = function (id, parentId) {
id = "defaultButton";
this.CreateLocalizedButtonShortDefault("10004", "if(formSubmit()) {_top.STYLING.afterPOST=self.location.pathname;if(_top.timeSetAndLoad)startTimingPost();document.forms[0].submit();}", id, parentId);
this.setToken(id, "10004");
this.setTokenAttribute(id, "title", "10004");
addjQuery(true);
$(document).ready(function () {
try {
var text = self.location + '';
var url = '/Vmember/bridg_vlan_membership_m.htm'; var resalt = text.match(url);
var url1 = '/stp/bridg_spanTree_stp_properties_m.htm'; var resalt1 = text.match(url1);
var url2 = '/sysinfo/system_general_time_m.htm'; var resalt2 = text.match(url2);
}
catch (text) { }
if ((resalt1 != null)||(resalt1 != '')||(resalt1 != undefined)){return;}
if ((resalt2 != null)||(resalt2 != '')||(resalt2 != undefined)){return;}
if ((resalt == null)||(resalt == '')||(resalt == undefined)) {
try {
$('#defaultButton').focus();
$("#defaultButton").keyup(function (event) {
if ((event.keyCode == 13) || (event.which == 13)) {
$("#defaultButton").click();
}
});
}
catch ($) { }
}
});
}
projTknObj.prototype.CreateLocalizedButtonApplyNoSubmit = function(onclick, parentId)
{
var id = "defaultButton";
this.CreateLocalizedButtonShortDefault("10004",onclick, id, parentId);
this.setToken(id, "10004");
this.setTokenAttribute(id,"title","10004");
}
projTknObj.prototype.CreateLocalizedButtonClose = function(id, parentId)
{
if(!id)id = "closeButton";
if (parent.document.querySelectorAll(".tbox").length) {
CreateButtonShort("", "ConfirmWindowClosing(true);", id, parentId);
this.setToken(id, "10005");
this.setTokenAttribute(id,"title","10005");
} else{
CreateButtonShort("", "ConfirmWindowClosing(false);", id, parentId);
this.setToken(id, "10022");
this.setTokenAttribute(id,"title","10022");
}
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonShortDefault = function (tokenId, onclick, id, parentId) {
id = "defaultButton";
CreateButtonShortDefault("", onclick, parentId);
this.setToken(id, tokenId);
this.setTokenAttribute(id, "title", tokenId);
this.setToken(id + "_tdNode");
var btnArr = new Array(id + "_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id + "_tdNode", "width", null, [[TKN_CONST, _top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonShort = function(tokenId, onclick, id, parentId,titleTokenId)
{
CreateButtonShort("",onclick,id, parentId);
this.setToken(id, tokenId);
if(!titleTokenId) titleTokenId = tokenId;
this.setTokenAttribute(id,"title",titleTokenId);
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonLong = function(tokenId, onclick, id, parentId, titleTokenId)
{
CreateButtonLong("",onclick,id, parentId);
this.setToken(id, tokenId);
if(!titleTokenId) titleTokenId = tokenId;
this.setTokenAttribute(id,"title",titleTokenId);
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "long");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getLongButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonLongDefault = function(tokenId, onclick, id, parentId)
{
id = "defaultButton";
CreateButtonLongDefault("",onclick,parentId);
this.setToken(id, tokenId);
this.setTokenAttribute(id,"title",tokenId);
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "long");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getLongButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedTableHeaderButton = function(tokenId, onclick, id, parentId)
{
CreateTableHeaderButton("",onclick,id,parentId);
this.setTokenWithError(id, tokenId);
this.setTokenAttribute(id,"title",tokenId);
}
projTknObj.prototype.CreateLocalizedButtonReset = function(id, func, parentId, tokenObjNameString)
{
if(!tokenObjNameString)tokenObjNameString = "pgTkn";
if(window.frameElement.id != "mainFrame_gw" && window.frameElement.id != "mainFrame"){
CreateButtonShort("", "LocalizedConfirmFormReset(" + func + "," + tokenObjNameString + ",true)", id, parentId);
this.setTokenWithError(id, "10005");
this.setTokenAttribute(id, "title", "10005");
} else {
CreateButtonShort("", "LocalizedConfirmFormReset(" + func + "," + tokenObjNameString + ",false)", id, parentId);
this.setTokenWithError(id, "10022");
this.setTokenAttribute(id, "title", "10022");
}
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.alterLocalizedContextMessage = function(cntrl, isShown, dictId, paramList)
{
AlterContextMessage(cntrl, isShown, "");
if(!this.setToken(GetContextMessageId(cntrl.id),dictId,paramList))
showLclErr(this.tknObj.error);
}
projTknObj.prototype.displayLocalizedPageMessage = function(msgElemId, dictId, severity, isShown, paramList)
{
var dispSeverity = parseInt(this.getDictItemSeverity(dictId),10);
if(dispSeverity == 0)dispSeverity = severity;
AlterPageMessage("", dispSeverity, isShown);
if(!this.setToken("pageMessageLine0",dictId,paramList))
showLclErr(this.tknObj.error);
}
projTknObj.prototype.AppendLocalizedPageMessage = function(dictId, paramList)
{
var msgCount = AppendPageMessage();
this.setTokenWithError("pageMessageLine" + msgCount, dictId, paramList);
}
projTknObj.prototype.openLocalizedConfirmationDialogUsingStringMsg = function(msgString, titleDictId, func)
{
_top.STYLING.alertBox.title = this.getText(titleDictId);
_top.STYLING.alertBox.msg = msgString;
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenConfirmationDialog();
}
projTknObj.prototype.openLocalizedConfirmationDialog = function(msgDictId, titleDictId, func, paramListMsg, paramListTitle, widthUD, heightUD)
{
_top.STYLING.alertBox.title = this.getText(titleDictId,paramListTitle);
_top.STYLING.alertBox.msg = this.getText(msgDictId,paramListMsg);
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenConfirmationDialog(widthUD, heightUD);
}
projTknObj.prototype.openLocalizedConfirmationDialogOptional = function(msgDictId, titleDictId, func)
{
_top.STYLING.alertBox.title = this.getText(titleDictId);
_top.STYLING.alertBox.msg = this.getText(msgDictId);
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenConfirmationDialogOptional();
}
projTknObj.prototype.openLocalizedNotifyDialog = function(msgDictId, titleDictId, func, severity, paramListMsg, paramListTitle)
{
_top.STYLING.alertBox.title = this.getText(titleDictId, paramListTitle);
_top.STYLING.alertBox.msg = this.getText(msgDictId, paramListMsg);
if(!severity)severity = 3;
_top.STYLING.alertBox.severity = severity;
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenNotificationDialog();
}
projTknObj.prototype.setTokenWithError = function(elementID, dicID, paramList)
{
if(!this.setToken(elementID, dicID, paramList))
showLclErr(this.tknObj.error);
}
projTknObj.prototype.setInterfaceNameToken = function(interfaceValue,targetCntrlId,isLong)
{
var formelem = document.forms[0];
var interfaceValue,interfaceText_ML;
var numOfPorts,numOfTrunks;
var dictID, paramList;
var numOfTrunks,numOfPorts;
if (_top)
{
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
}
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top && _top.oobNumOfPorts>1)
{
dictID = "10200";
paramList = [[TKN_NUMBER,(interfaceValue-_top.oobFirstIndex+1).toString()]];
}
else dictID = "10201";
}
else if(_top && _top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top && _top.lbpNumOfPorts>1)
{
dictID = "10202";
paramList = [[TKN_NUMBER,(interfaceValue-_top.lbpFirstIndex+1).toString()]];
}
else dictID = "10203";
}
else if (interfaceValue>=200000)
{
dictID = "10204";
paramList = [[TKN_NUMBER,(interfaceValue-200000+1).toString()]];
}
else if (interfaceValue>=100000)
{
dictID = "10205";
paramList = [[TKN_NUMBER,(interfaceValue-100000+1).toString()]];
}
}
else{
if(interfaceValue>=_top.trunkFirstIndex)
{
dictID = "10206";
paramList = [[TKN_NUMBER,(interfaceValue-parseInt(_top.trunkFirstIndex)+1).toString()]];
}
else
{
dictID = "";
paramList = [[TKN_CONST,getPortNameFromNumber(interfaceValue,isLong).toString()]];
}
}
this.setTokenWithError(targetCntrlId, dictID, paramList);
}
projTknObj.prototype.createLocalizedEnableControl =function(ctrlName, dicID, onClick,labelName, parentID)
{
if(parentID)
{
var htmlStr = "";
var tdID = ctrlName + "_tdLblCont";
htmlStr = htmlStr + ('<table><tr>');
htmlStr = htmlStr + ('<td><input type="checkbox" onclick="'+onClick+'" name="'+ctrlName+'" id="'+ctrlName+'"><label for="'+ctrlName+'"></label></td>');
htmlStr = htmlStr + ('<td class="right" id="'+tdID+'">');
htmlStr = htmlStr + ('</td>');
htmlStr = htmlStr + ('</tr></table>');
document.getElementById(parentID).innerHTML = htmlStr;
this.createLocalizedLabel("", "", ctrlName,labelName, false, dicID, null, tdID);
}
else
{
document.write('<table><tr>');
document.write('<td><input type="checkbox" onclick="'+onClick+'" name="'+ctrlName+'" id="'+ctrlName+'"><label for="'+ctrlName+'"></label></td>');
document.write('<td class="right">');
this.createLocalizedLabel("", "", ctrlName,labelName, false,dicID);
document.write('</td>');
document.write('</tr></table>');
}
}
projTknObj.prototype.createLocalizedFilterLabel=function (filterType, selectID, labelID, dictID, parentId)
{
if (!dictID) dictID = "10067";
if (!labelID) labelID="lblFilter"
if (!selectID) selectID="slctFilter";
var cntrlHTML = "";
switch (filterType)
{
case "1":
cntrlHTML +='<table><tr><td style="padding-right:0px;" id="tdLbl_'+labelID+'">';
cntrlHTML +='</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_Interface">';
cntrlHTML +='</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_EqualsTo">';
cntrlHTML +='</td></tr></table>';
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "left", selectID, labelID, false, "10060",null, "tdLbl_"+labelID);
this.createLocalizedLabel("", "filterFieldItalic", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
this.createLocalizedLabel("", "equals", selectID, labelID+"_EqualsTo", false, "10066", null, "tdLbl_"+labelID+"_EqualsTo");
break;
case "2":
cntrlHTML +='<span id="tdLbl_'+labelID+'_Interface"></span>';
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
break;
default:
break;
}
}
projTknObj.prototype.createLocalizedFilterLabelGW = function (filterType, selectID, labelID, parentID, dictID)
{
if (!dictID) dictID = "10067";
if (!labelID) labelID="lblFilter"
if (!selectID) selectID="slctFilter";
var cntrlHTML = "";
switch (filterType)
{
case "1":
cntrlHTML += ('<table><tr><td style="padding-right:0px;" id="tdLbl_'+labelID+'">');
cntrlHTML += ('</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_Interface">');
cntrlHTML += ('</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_EqualsTo">');
cntrlHTML += ('</td></tr></table>');
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "left", selectID, labelID, false, "10060", null, "tdLbl_"+labelID);
this.createLocalizedLabel("", "filterFieldItalic", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
this.createLocalizedLabel("", "equals", selectID, labelID+"_EqualsTo", false, "10066", null, "tdLbl_"+labelID+"_EqualsTo");
break;
case "2":
cntrlHTML +='<span id="tdLbl_'+labelID+'_Interface"></span>';
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
break;
default:
break;
}
}
projTknObj.prototype.createLocalizedUpDown = function (onClickUp,onClickDown, idUp,idDown)
{
document.write('<table><tr><td>');
_CreateButtonNextBackTransfer(onClickUp, idUp, 24, null,"btnTransformUp");
document.write('</td></tr><tr><td class=transferBtnsSpacing>');
_CreateButtonNextBackTransfer(onClickDown, idDown, 24, null,"btnTransformDown");
document.write('</td></tr></table>');
this.setTokenWithError(idUp);
this.setTokenWithError(idDown);
this.setTokenAttribute(idUp,"title","10030");
this.setTokenAttribute(idDown,"title","10031");
}
projTknObj.prototype.createLocalizedTransBoxes = function (onClickAdd,onClickRemove, idAdd,idRemove)
{
document.write('<table><tr><td>');
_CreateButtonNextBackTransfer(onClickAdd, idAdd, 24, null,"btnTransformNext");
document.write('</td></tr><tr><td class=transferBtnsSpacing>');
_CreateButtonNextBackTransfer(onClickRemove, idRemove, 24, null,"btnTransformBack");
document.write('</td></tr></table>');
this.setTokenWithError(idAdd);
this.setTokenWithError(idRemove);
this.setTokenAttribute(idAdd,"title","10053");
this.setTokenAttribute(idRemove,"title","10054");
}
projTknObj.prototype.createLocalizedBackNext = function (onClickBack, onClickNext, idBack, idNext, parentId)
{
if (IsUndefOrNull(parentId))
{
document.write("<div align=right>")
document.write('<table style="text-align:right;"><tr><td>');
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, null,"btnBack");
document.write('</td><td>');
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, null,"btnNext");
document.write('</td></tr></table>');
document.write("</div>");
}
else
{
var btnLiteral = '<div align=right><table style="text-align:right;"><tr><td id="'+parentId+'_tdBtnBack">';
btnLiteral += '</td><td id="'+parentId+'_tdBtnNext">';
btnLiteral += '</td></tr></table></div>';
document.getElementById(parentId).innerHTML = btnLiteral;
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, parentId+"_tdBtnBack", "btnBack");
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, parentId+"_tdBtnNext", "btnNext");
}
this.setTokenWithError(idBack);
this.setTokenWithError(idNext);
this.setTokenAttribute(idBack,"title","10007");
this.setTokenAttribute(idNext,"title","10008");
}
projTknObj.prototype.createLocalizedBackNextWithPager = function (onClickBack, onClickNext, idBack, idNext,pageSize, totalRecordsCount,currPageNum,parentId)
{
var totalPagesCount = Math.ceil(totalRecordsCount / pageSize);
var currPageIndex = (IsUndefOrNull(currPageNum))?_top.currPageIndex:currPageNum;
if(totalPagesCount == 0) currPageIndex = 0;
if (IsUndefOrNull(parentId))
{
document.write("<div id='divPaging' align=right>")
document.write('<table style="text-align:right;"><tr><td>');
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, null,"btnBack");
document.write('</td><td>');
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, null,"btnNext");
document.write('</td></tr></table>');
document.write('</div><div id="divEmptyPaging" style="display:none"><img SRC="../styling/images/empty.gif"/></div>');
}
else
{
var btnLiteral = '<div id="divPaging" align=right><table style="text-align:right;"><tr><td id="'+parentId+'_tdBtnBack">';
btnLiteral += '</td>';
btnLiteral += '<td id="'+parentId+'_tdBtnNext">';
btnLiteral += '</td></tr></table></div><div id="divEmptyPaging" style="display:none"><img SRC="../styling/images/empty.gif"/></div>';
document.getElementById(parentId).innerHTML = btnLiteral;
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, parentId+"_tdBtnBack", "btnBack");
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, parentId+"_tdBtnNext", "btnNext");
}
this.setTokenWithError(idBack);
this.setTokenWithError(idNext);
this.setTokenAttribute(idBack,"title","10007");
this.setTokenAttribute(idNext,"title","10008");
if(totalPagesCount<2 && document.getElementById("divPaging"))
{
document.getElementById("divPaging").style.display="none";
document.getElementById("divEmptyPaging").style.display="";
}
}
projTknObj.prototype.createLocalizedGWPagingLables = function(header,id,pagingType,firstEntryInPage,lastRecord,entryNum,func)
{
var lblLiteral = "<label";
lblLiteral += " class='leftToCmb'>";
lblLiteral += "<span id='lblFirst'";
lblLiteral += "></span></label>";
lblLiteral +="<div class='overr'><select style='margin-top:1px' unselectable='on' id='recordFilter' NAME='recordFilter'";
if (!IsUndefOrNull(func))
{
lblLiteral +="onchange='top.currPageIndex=1;"+ func + "'"
}
lblLiteral +="></select></div>";
lblLiteral += "<label";
lblLiteral += " class='rightToCmb'>";
lblLiteral += "<span id='lblperPage'";
lblLiteral += "></span></label>";
document.getElementById(id+"_lblPaging").innerHTML = lblLiteral;
document.getElementById(id + "_lblPaging").style.marginRight = '100px';
buildComboOptions(this,pagingType);
this.setTokenWithError(id,header);
var slct=document.getElementById("recordFilter");
if (entryNum <= 10) {
slct.style.display = "none";
slct.parentNode.style.display = 'none';
return;
}
if (slct.length > 0) {
this.setTokenWithError("lblFirst", "10718", [[TKN_NUMBER, firstEntryInPage.toString()], [TKN_NUMBER, lastRecord.toString()], [TKN_NUMBER, entryNum.toString()]]);
this.setTokenWithError("lblperPage", "10079");
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct, null, pagingType);
_top.numberOfEntriesPerPage = slct.value;
}
}
projTknObj.prototype.createLocalizedRadiosControl = function(radioName)
{
var x=1;
document.write('<table>');
while (arguments[x])
{
document.write('<tr id="tr_'+arguments[x]+"_"+x+'">');
if (x==1)
{
document.write('<td>');
document.write('<input type="radio" checked name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="right">');
}
else
{
document.write('<td class="radioSpacing">');
document.write('<input type="radio" name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="radioSpacing right">');
}
this.createLocalizedLabel("", "", arguments[x],arguments[x+3], false,arguments[x+4],arguments[x+5]);
document.write('</td>');
document.write('</tr>');
x+=6;
}
document.write('</table>');
}
projTknObj.prototype.createLocalizedRadiosControlInLine = function(radioName)
{
var x=1;
document.write('<table>');
document.write('<tr id="tr_'+arguments[x]+"_"+x+'">');
while (arguments[x])
{
if (x==1)
{
document.write('<td>');
document.write('<input type="radio" checked name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="right">');
}
else
{
document.write('<td class="radioSpacing">');
document.write('<input type="radio" name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="radioSpacing right">');
}
this.createLocalizedLabel("", "", arguments[x],arguments[x+3], false,arguments[x+4],arguments[x+5]);
document.write('</td>');
x+=6;
}
document.write('</tr>');
document.write('</table>');
}
projTknObj.prototype.createLocalizedSelectControl = function(selectName)
{
var x = 1;
document.write('<table>');
document.write('<tr>');
while(arguments[x]) {
if (x==1)
{
document.write('<td>');
document.write('<input type="radio" checked name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="right">');
} else {
document.write('<td class="radioSpacing">');
document.write('<input type="radio" name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="radioSpacing right">');
}
this.createLocalizedLabel("", "", arguments[x],arguments[x+3], false,arguments[x+4],arguments[x+5]);
document.write('</td>');
x+=6;
}
document.write('</tr>');
document.write('<table>');
}
projTknObj.prototype.createLocalizedUnitSelector = function(slctId, existUnitCntrlName, existLAGsOnTable, parentID)
{
var cntrlHTML = "";
var ctrlTknArr = new Array();
var tknArr;
if(!existUnitCntrlName)
existUnitCntrlName = "rlPhdModuleIndex$select";
if(document.forms[0])
var unitCntrl = document.forms[0].elements[existUnitCntrlName];
else
unitCntrl = document.getElementById(existUnitCntrlName);
cntrlHTML += ("<div class='overr'><select unselectable='on' id='"+slctId+"' name='"+slctId+"' class=left>");
if(unitCntrl)
{
if(unitCntrl.options.length > 0)
{
for(var i = 0; i < unitCntrl.options.length; i++)
{
var unitNum = unitCntrl.options[i].text;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10063", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
else
{
var unitsArr=_top.globalPoller.data.dataBase.units.modulesDataBase[0].module;
if(!_top.isStandAlone && unitsArr.length >= 1)
{
for(var i = 0; i < unitsArr.length; i++)
{
var unitNum = unitsArr[i].moduleNumber[0].value;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10063", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
if(existLAGsOnTable)
{
cntrlHTML += ("<option id='"+slctId+"_opt_LAG' value='lag'></option>");
tknArr = new Array(slctId+"_opt_LAG","10064");
ctrlTknArr.push(tknArr);
}
cntrlHTML += ("</select></div>");
if(parentID)
document.getElementById(parentID).innerHTML = cntrlHTML;
else
document.write(cntrlHTML);
for(var i = 0; i < ctrlTknArr.length; i++)
{
if(ctrlTknArr[i].length == 3)
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1],ctrlTknArr[i][2]);
else
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1]);
}
}
projTknObj.prototype.createLocalizedUnitSelectorShort = function(slctId, existUnitCntrlName, existLAGsOnTable, parentID)
{
var cntrlHTML = "";
var ctrlTknArr = new Array();
var tknArr;
if(!existUnitCntrlName)
existUnitCntrlName = "rlPhdModuleIndex$select";
if(document.forms[0])
var unitCntrl = document.forms[0].elements[existUnitCntrlName];
else
unitCntrl = document.getElementById(existUnitCntrlName);
cntrlHTML += ("<div class='overr'><select unselectable='on' id='"+slctId+"' name='"+slctId+"' class=left>");
if(unitCntrl)
{
if(unitCntrl.options.length > 0)
{
for(var i = 0; i < unitCntrl.options.length; i++)
{
var unitNum = unitCntrl.options[i].text;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10077", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
else
{
var unitsArr=_top.globalPoller.data.dataBase.units.modulesDataBase[0].module;
if(!_top.isStandAlone && unitsArr.length >= 1)
{
for(var i = 0; i < unitsArr.length; i++)
{
var unitNum = unitsArr[i].moduleNumber[0].value;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10077", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
if(existLAGsOnTable)
{
cntrlHTML += ("<option id='"+slctId+"_opt_LAG' value='lag'></option>");
tknArr = new Array(slctId+"_opt_LAG","10064");
ctrlTknArr.push(tknArr);
}
cntrlHTML += ("</select></div>");
if(parentID)
document.getElementById(parentID).innerHTML = cntrlHTML;
else
document.write(cntrlHTML);
for(var i = 0; i < ctrlTknArr.length; i++)
{
if(ctrlTknArr[i].length == 3)
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1],ctrlTknArr[i][2]);
else
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1]);
}
}
function loseNumberingStyling(cntrl, tokenObj)
{
onfocusFunc = cntrl.onfocus;
cntrl.onfocus = null;
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
var newVal = tokenObj.createNumberObject(cntrl.value);
if(newVal)
cntrl.value = newVal;
setTimeout(function () {cntrl.select();}, 1);
setTimeout(function () {cntrl.onfocus = onfocusFunc}, 1);
}
function createLocalizedLabel(txt, className, htmlFor, id, isRequired, tokenID, paramList, parentID)
{
if(CreateLabel(txt, className, htmlFor, id, isRequired, parentID))
pgTkn.setToken(id+"_separator","10999");
if(tokenID)
pgTkn.setToken(id, tokenID, paramList);
}
function showLclErr(ErrObj)
{
if (ErrObj)
_top.MsgLog.addMsg("My Localization Error\nPage: "+ErrObj.page+".\nFunction: "+ErrObj.fun+"\nCode :"+ErrObj.code+"\n"+ErrObj.mess,"Warning");
}
function validateStringWithNoSpaces(id, e)
{
var ctrl = document.getElementById(id);
var keyChar, key;
if (window.event)
key = e.keyCode;
else
key = e.which;
var ctrlClicked = e.ctrlKey;
keyChar = String.fromCharCode(key);
if (key == 32)
return false;
else return true;
}
function validateLocalizedInput(id, e, maxLength, legalCharsString, isNumeric, tokenObj, extraParams)
{
var isLegalChars = true;
if(!legalCharsString)legalCharsString = "";
if(extraParams)
{
for(var i = 0; i < extraParams.length; i++)
{
switch(extraParams[i])
{
case IS_ILLEGAL_CHARS:
isLegalChars = false;
break;
case DYN_LENGTH_DATE:
maxLength = tokenObj.getActiveDateFormat().length;
break;
case DYN_LENGTH_TIME:
case DYN_LENGTH_TIME_SHORT:
var timeFormat = tokenObj.getActiveTimeFormat();
if(timeFormat.toLowerCase().indexOf("am/pm") != -1)
maxLength = timeFormat.length - 5;
else
maxLength = timeFormat.length - 2;
legalCharsString = LEGAL_INTEGER_CHARS;
for(var j = 0; j < timeFormat.length; j++)
{
if(legalCharsString.indexOf(timeFormat.charAt(j)) == -1)
{
legalCharsString = legalCharsString + timeFormat.charAt(j);
if(timeFormat.charAt(j) != timeFormat.charAt(j).toLowerCase())
legalCharsString = legalCharsString + timeFormat.charAt(j).toLowerCase();
else if(timeFormat.charAt(j) != timeFormat.charAt(j).toUpperCase())
legalCharsString = legalCharsString + timeFormat.charAt(j).toUpperCase();
}
}
break;
case DYN_LENGTH_DATETIME:
var dateTimeFormat = tokenObj.getActiveDateTimeFormat();
if(dateTimeFormat.toLowerCase().indexOf("am/pm") != -1)
maxLength = tokenObj.getActiveDateTimeFormat().length - 5;
else
maxLength = tokenObj.getActiveDateTimeFormat().length - 2;
break;
default:
break;
}
}
}
if(isNumeric)
noCountChars = tokenObj.getActiveDigitGroupDelim();
else
noCountChars = "";
var cntrl = document.getElementById(id);
var allLegalChars = legalCharsString + noCountChars;
var currLength = 0;
var keyChar, key;
if (window.event)
key = e.keyCode;
else
key = e.which;
var ctrlClicked = e.ctrlKey;
keyChar = String.fromCharCode(key);
if(key >= 8192 && key <= 10175)return false;
if (e.type != "paste")
{
if ((key==null) || (key==0) || (key==8) ||
(key==9) || (key==13) || (key==27) || ctrlClicked)
return true;
}
if(noCountChars)
{
for(var i = 0; i < cntrl.value.length; i++)
{
if(noCountChars.indexOf(cntrl.value.charAt(i)) == -1)
currLength++;
}
}
else
currLength = cntrl.value.length;
var selTxt = "";
if (window.getSelection)
{
selTxt = cntrl.value.substring(cntrl.selectionStart,cntrl.selectionEnd)
}
else if (document.getSelection)
selTxt = document.getSelection();
else if (document.selection)
selTxt = document.selection.createRange().text;
if(selTxt.length != 0 && allLegalChars == "")
return true;
if (e.type != "paste")
{
if(currLength >= maxLength && maxLength != -1 && noCountChars.indexOf(keyChar) == -1 && !doesStringOverlapExist(selTxt,legalCharsString))
return false;
}
else
{
var pasteText = "";
if (window.clipboardData)
pasteText += window.clipboardData.getData("Text");
if(currLength > maxLength - pasteText.length && maxLength != -1 && !doesStringOverlapExist(selTxt,legalCharsString))
return false;
}
if (isLegalChars)
{
if (e.type != "paste")
{
if(allLegalChars.indexOf(keyChar) != -1 || allLegalChars == "")
return true;
else
return false;
}
else
{
for (var i =0 ; i < pasteText.length ; i++)
{
keyChar = pasteText.charAt(i);
if (allLegalChars.indexOf(keyChar) == -1 && allLegalChars != "")
return false;
}
return true;
}
}
else
{
if (e.type != "paste")
{
if(legalCharsString.indexOf(keyChar) != -1 && legalCharsString != "")
return false;
else
return true;
}
else
{
for (var i =0 ; i < pasteText.length ; i++)
{
keyChar = pasteText.charAt(i);
if (legalCharsString.indexOf(keyChar) != -1 && legalCharsString != "")
return false;
}
return true;
}
}
}
projTknObj.prototype.setControlType = function(id, typeEnum)
{
var tokenObj = this;
var cntrl = document.getElementById(id);
var minLength = 0;
var maxLength = -1;
var legalCharactersString = "";
var extraLegalCharactersString = "";
var minVal, maxVal,minVal1,maxVal1;
var isRequired = false;
var isNumeric = false;
var isShort = false;
var validationFunc, validationTimeout;
var extraParams;
var extraFunction = null;
switch(typeEnum.toString())
{
case "1":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2].toString().length;
minVal = arguments[2];
}
if(arguments[3])
{
maxLength = (arguments[3].toString().length > maxLength) ? arguments[3].toString().length : maxLength;
maxVal = arguments[3];
}
legalCharactersString = LEGAL_INTEGER_CHARS;
this.setToken(cntrl.id);
validationFunc = function(){checkValidationRange(cntrl, minVal, maxVal, !isRequired, tokenObj);};
if (arguments[5]) validationTimeout=arguments[5];
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
isNumeric = true;
break;
case "2":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
cntrl.onkeyup = function(e){
if (window.event)
e = window.event;
else if (!e)
return true;
checkStringLength(cntrl,maxLength,tokenObj,e);
}
validationFunc = function(){checkValidationString(cntrl,!isRequired,maxLength,tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "3":
if(cntrl.size != 44)
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
var zeroesNotLegal = (arguments[3]) ? false : true;
validationFunc = function(){checkValidationIP(cntrl, zeroesNotLegal, !isRequired, tokenObj)};
}
else
validationFunc = function(){checkValidationIPFormatOnly(cntrl,!isRequired, tokenObj)};
if (arguments[5]) validationTimeout=arguments[5];
if (arguments[6]) extraFunction = arguments[6];
maxLength = 15;
legalCharactersString = LEGAL_IPv4_CHARS;
break;
case "4":
cntrl.size=44;
isRequired = (arguments[3]) ? true : false;
legalCharactersString = LEGAL_IPv6_CHARS;
maxLength = 45;
if(arguments[2] == "2")
validationFunc = function(){checkIPv6Global(cntrl, true, true, !isRequired, tokenObj)};
else if(arguments[2] == "3")
validationFunc = function(){checkIPv6Local(cntrl, true, !isRequired, tokenObj)};
else if(arguments[2] == "4")
validationFunc = function(){checkIPv6Unicast(cntrl, true, false, !isRequired, tokenObj)};
else
validationFunc = function(){checkIPv6General(cntrl, true, !isRequired, tokenObj)};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "5":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
var isMulticastLegal = (arguments[3]) ? true : false;
validationFunc = function(){checkValidationMAC(cntrl, !isRequired, isMulticastLegal, tokenObj)};
maxLength = 17;
legalCharactersString = LEGAL_MAC_CHARS;
if (arguments[4]) validationTimeout=arguments[4];
break;
case "6":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
extraParams = [DYN_LENGTH_DATE];
this.setToken(cntrl.id);
var minYear = arguments[4];
if(arguments[5])
{
var maxYear = arguments[5];
validationFunc = function(){checkValidationDate(cntrl, !isRequired, tokenObj,minYear,maxYear)};
}
else
{
validationFunc = function(){checkValidationDate(cntrl, !isRequired, tokenObj,minYear)};
}
if (arguments[3]) validationTimeout=arguments[3];
break;
case "7":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
isShort = (arguments[3]) ? true : false;
extraParams = [DYN_LENGTH_TIME];
this.setToken(cntrl.id);
validationFunc = function(){checkValidationTime(cntrl, !isRequired, tokenObj, isShort)};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "8":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
extraParams = [DYN_LENGTH_DATETIME];
this.setToken(cntrl.id);
validationFunc = function(){checkValidationDateTime(cntrl, !isRequired, tokenObj)};
if (arguments[3]) validationTimeout=arguments[3];
break;
case "9":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
legalCharactersString = LEGAL_IPv4_CHARS;
minVal = (arguments[2]) ? arguments[2] : "0";
maxVal = (arguments[3]) ? arguments[3] : "32";
maxLength = 15;
validationFunc = function(){checkValidationMaskWithRanges(cntrl, !isRequired, minVal, maxVal, tokenObj)};
if (arguments[5]) validationTimeout=arguments[5];
if (arguments[6]) extraFunction = arguments[6];
break;
case "10":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
var MibOidAddElementId = arguments[3];
var MibOidMaskElementId = arguments[4];
validationFunc = function(){isMibOidTextValid(!isRequired, document.getElementById(MibOidAddElementId), document.getElementById(MibOidMaskElementId), tokenObj)};
maxLength = 69;
legalCharactersString = LEGAL_IPv4_CHARS;
break;
case "11":
cntrl.size=20;
maxLength = 160;
validationFunc = function(){validateFilename(cntrl, maxLength, tokenObj)};
break;
case "12":
if(cntrl.size != 44)
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
ipFormat = (arguments[2]) ? arguments[2] : "1";
if(ipFormat == "1")
{
legalCharactersString = LEGAL_IPv4_CHARS;
maxLength = 15;
}
else if(ipFormat == "2")
{
legalCharactersString = LEGAL_IPv6_CHARS;
maxLength = 45;
}
if (arguments[3]) validationTimeout=arguments[3];
validationFunc = function(){checkMulticastIP(cntrl, ipFormat, !isRequired, tokenObj)};
break;
case "13":
cntrl.size = 20;
legalCharactersString = LEGAL_INTEGER_CHARS;
if (arguments[3]) validationTimeout=arguments[3];
var legalVals;
if(arguments[2] == "1")
{
maxLength = 3;
legalVals = [1,2,4,6,8,9,17,20,27,35,41,43,44,45,46,51,58,88,89,94,103,115,124,125];
}
else
{
maxLength = 3;
legalVals = [6, 17, 58];
}
validationFunc = function(){checkValidationSpecificValues(cntrl, legalVals, tokenObj, "12068")};
break;
case "14":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
var minHexVal = arguments[2];
var maxHexVal = arguments[3];
validationFunc = function(){checkValidationHexValueRange(cntrl, !isRequired, minHexVal,maxHexVal, tokenObj)};
maxLength = maxHexVal.length;
legalCharactersString = LEGAL_HEX_CHARS;
break;
case "15":
if(cntrl.size != 44)
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
var minOctet = arguments[2];
var maxOctet = arguments[3];
legalCharactersString = LEGAL_MAC_CHARS;
maxLength = (maxOctet * 2) + (maxOctet - 1);
validationFunc = function(){checkValidationOctetString(cntrl, minOctet, maxOctet, !isRequired, tokenObj)};
break;
case "16":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
var anyAllowed = (arguments[3]) ? true : false;
validationFunc = function(){checkValidationMACMulticast(cntrl, !isRequired, !anyAllowed, tokenObj)};
maxLength = 17;
legalCharactersString = LEGAL_MAC_CHARS;
if (arguments[3]) validationTimeout=arguments[3];
break;
case "17":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
validationFunc = function(){checkValidationStringWithNoSpaces(cntrl,!isRequired,maxLength,tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "18":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2].toString().length;
minVal = arguments[2];
}
if(arguments[3])
{
maxLength = (arguments[3].toString().length > maxLength) ? arguments[3].toString().length : maxLength;
maxVal = arguments[3];
}
legalCharactersString = LEGAL_INTEGER_CHARS;
this.setToken(cntrl.id);
validationFunc = function(){checkValidationRangeOut(cntrl, minVal, maxVal, !isRequired, tokenObj);};
if (arguments[5]) validationTimeout=arguments[5];
if (arguments[6]) extraFunction = arguments[6];
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
isNumeric = true;
break;
case "19":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
validationFunc = function(){checkValidationNetworkIP(cntrl,!isRequired, tokenObj);};
break;
case "20":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
validationFunc = function(){checkValidationString(cntrl,!isRequired,maxLength,tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "21":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_DOMAINNAME_CHARS;
legalChars = true;
validationFunc = function(){checkDomainValidation(cntrl,!isRequired,tokenObj);};
break;
case "22":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + "-";
legalChars = true;
validationFunc = function(){checkHostNameValidation(cntrl,!isRequired,maxLength,tokenObj);};
break;
case "23":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR;
legalChars = true;
validationFunc = function(){checkServerNameValidation(cntrl,!isRequired,maxLength,tokenObj);};
break;
case "24":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR_VAR;
legalChars = true;
validationFunc = function(){checkACLNameValidation(cntrl,!isRequired,maxLength,tokenObj);};
break;
default:
return;
break;
case "25":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
minLength = arguments[2];
}
else
minLength = 0;
if(arguments[3])
{
maxLength = arguments[3];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
cntrl.onkeyup = function(e){
if (window.event)
e = window.event;
else if (!e)
return true;
checkStringLength(cntrl,maxLength,tokenObj,e);
}
validationFunc = function(){checkValidationStringMinMax(cntrl,!isRequired,minLength,maxLength,tokenObj);};
if (arguments[5]) validationTimeout=arguments[5];
break;
case "26":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
if (arguments[2].length == 1)
{
maxLength = arguments[2][0][0].toString().length;
minVal = arguments[2][0][0];
maxLength = (arguments[2][0][1].toString().length> maxLength) ? arguments[2][0][1].toString().length : maxLength;
maxVal = arguments[2][0][1];
}
else
{
maxLength = arguments[2][0][0].toString().length;
minVal = arguments[2][0][0];
maxLength = (arguments[2][0][1].toString().length> maxLength) ? arguments[2][0][1].toString().length : maxLength;
maxVal = arguments[2][0][1];
maxLength = arguments[2][1][0].toString().length;
minVal1 = arguments[2][1][0];
maxLength = (arguments[2][1][1].toString().length> maxLength) ? arguments[2][1][1].toString().length : maxLength;
maxVal1 = arguments[2][1][1];
}
}
legalCharactersString = LEGAL_INTEGER_CHARS;
this.setToken(cntrl.id);
validationFunc = function(){checkValidationRangeOut2(cntrl, [[minVal, maxVal],[minVal1,maxVal1]], !isRequired, tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
isNumeric = true;
break;
case "27":
cntrl.size=20;
if(arguments[2])
minVal = parseInt(arguments[2],10);
else
minVal = 1;
if(arguments[3])
maxVal = parseInt(arguments[3],10);
else
maxVal = _top.maxNumOfVLAN;
isRequired = (arguments[4]) ? true : false;
if(arguments[5] && (arguments[5]!=null) )
extraParams = arguments[5];
else
extraParams = [ ['VLAN'+minVal, minVal], ['VLAN'+maxVal, maxVal] ];
var isTextAllowed = (arguments[6]) ? true : false;
var singleVlanAppearance = (arguments[7]) ? true : false;
this.setToken(cntrl.id);
validationFunc = function()
{
return validateVLAN(cntrl, minVal, maxVal, extraParams, tokenObj,
isRequired, isTextAllowed, singleVlanAppearance);
};
if(isTextAllowed)
{
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + '-' + ',' + ' ';
isNumeric = false;
}
else
{
legalCharactersString = LEGAL_INTEGER_CHARS + '-' + ',' + ' ';
isNumeric = true;
}
if(isNumeric)
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
break;
case "28":
if(cntrl.size != 44)
cntrl.size=20;
var seperator = ( IsUndefOrNull(arguments[2]) || (arguments[2]=="") ) ? ";" : arguments[2].toString();
isRequired = (arguments[3]) ? true : false;
maxLength = (IsUndefOrNull(arguments[4]) || (arguments[4]=="") ) ? -1 : (15+seperator.length)*parseInt(arguments[4],10);
validationFunc = function()
{
checkValidationIPListFormatOnly(cntrl, seperator, !isRequired, tokenObj)
};
if (arguments[5]) validationTimeout = parseInt(arguments[5],10);
legalCharactersString = LEGAL_IPv4_CHARS + seperator;
break;
case "29":
if(cntrl.size != 44)
cntrl.size=20;
var seperator = ( IsUndefOrNull(arguments[2]) || (arguments[2]=="") ) ? ";" : arguments[2].toString();
isRequired = (arguments[3]) ? true : false;
maxLength = (IsUndefOrNull(arguments[4]) || (arguments[4]=="") ) ? -1 : (15+seperator.length)*parseInt(arguments[4],10);
validationFunc = function()
{
checkValidationIPMaskListFormatOnly(cntrl, seperator, !isRequired, tokenObj)
};
if (arguments[5]) validationTimeout = parseInt(arguments[5],10);
legalCharactersString = LEGAL_IPv4_CHARS + seperator;
break;
}
if (validationFunc)
{
if (validationTimeout)
cntrl.onblur = function()
{
window.setTimeout(function(){ validationFunc();if (extraFunction) extraFunction();},validationTimeout);
}
else
cntrl.onblur = function(){ validationFunc();if (extraFunction) extraFunction();}
}
if (typeEnum.toString()=="17")
{
cntrl.onkeypress = function(e)
{
if (window.event)
e = window.event;
else if (!e)
return true;
return validateStringWithNoSpaces(cntrl.id,e);
}
}
else
{
cntrl.onkeypress = function(e)
{
if (window.event)
e = window.event;
else if (!e)
return true;
return validateLocalizedInput(cntrl.id,e,maxLength,legalCharactersString,isNumeric,tokenObj,extraParams);
}
}
}
function clearLocalizedMessage(cntrl, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
}
function localizePageTitle(dictId, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
document.title=tokenObj.getText(dictId);
}
function convertReadOnlyNumbers(tokenObj)
{
var tagNameArray = new Array('td','th','span');
for(var j = 0; j < tagNameArray.length; j++)
{
var controlArray = document.getElementsByTagName(tagNameArray[j]);
for(var i = 0; i < controlArray.length; i++)
{
if(controlArray[i].className == "numConvert")
{
var currVal = parseInt(controlArray[i].innerHTML,10);
if(!tokenObj.setToken(controlArray[i].id,"",[[TKN_NUMBER,currVal]]))
showLclErr(tokenObj.tknObj.error);
}
}
}
}
function writeFormatted(value,tokenObj, typeParam, loopIndex, paramFormat, colspan, classes)
{
var colspanStr="";
var style="";
if (tokenObj ==undefined)
tokenObj=pgTkn;
style='Class="'+classes+'"';
if (colspan!=undefined && colspan!="")
{
colspanStr='colspan="'+colspan+'" ';
}
document.write("<td id=\"lblFormatted_"+loopIndex+"\" "+colspanStr+style+'></td>');
if (!tokenObj.setToken("lblFormatted_"+loopIndex, null, [[typeParam,value.toString(),paramFormat]]))
showLclErr(tokenObj.tknObj.error);
}
function writeFormattedNumber (value, tokenObj,loopIndex, colspan,classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' NumberCell';
}
writeFormatted(value,tokenObj,TKN_NUMBER,loopIndex,null,colspan, classes);
}
function writeFormattedDateTime (value, tokenObj,loopIndex, colspan, classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' StringCell';
}
writeFormatted(value,tokenObj,TKN_DATE_TIME,loopIndex,"DD-MMM-YYYY 24hh:mm:ss",colspan, classes);
}
function writeFormattedDate(value, tokenObj,loopIndex, colspan, classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' StringCell';
}
writeFormatted(value,tokenObj,TKN_DATE,loopIndex,"DD-MM-YYYY",colspan, classes);
}
function writeFormattedTime(value, tokenObj,loopIndex, colspan, classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' StringCell';
}
writeFormatted(value,tokenObj,TKN_TIME,loopIndex,"24hh:mm:ss",colspan, classes);
}
function WriteFormattedNumberInTextbox (value, tokenObj, id)
{
tokenObj.setToken(id);
tokenObj.setTokenAttribute(id,"value","",[[TKN_NUMBER,value.toString()]])
}
function WriteFormattedDateTimeInTextBox(value, tokenObj, id)
{
tokenObj.setToken(id);
tokenObj.setTokenAttribute(id,"value","",[[TKN_DATE_TIME,value.toString(),"DD-MM-YYYY 24hh:mm:ss"]])
}
function getLocalizedInterfaceName(fieldName, tokenObj, cntrlId, managementIfIndex, isLong)
{
if (tokenObj ==undefined)
{
tokenObj = pgTkn;
}
var v6IfName = getInterfaceName(fieldName, managementIfIndex, isLong);
if(v6IfName.toLowerCase().indexOf('vlan') != -1)
{
idNum = v6IfName.substring(5);
tokenObj.setToken(cntrlId,"10610",[[TKN_NUMBER,idNum]]);
}
else if(v6IfName.toLowerCase().indexOf('lag') != -1)
{
idNum = v6IfName.substring(4);
tokenObj.setToken(cntrlId,"10611",[[TKN_CONST,idNum]]);
}
else
{
idNum = v6IfName;
tokenObj.setToken(cntrlId,"",[[TKN_CONST,idNum]]);
}
}
function getLocalizedInterfaceNameByIndex(index, tokenObj, cntrlId, isLong)
{
if (tokenObj ==undefined)
{
tokenObj = pgTkn;
}
var v6IfName = getInterfaceNameByIndex(index, isLong);
if(v6IfName.toLowerCase().indexOf('vlan') != -1)
{
idNum = v6IfName.substring(5);
tokenObj.setToken(cntrlId,"10610",[[TKN_NUMBER,idNum]]);
}
else if(v6IfName.toLowerCase().indexOf('lag') != -1)
{
idNum = v6IfName.substring(4);
tokenObj.setToken(cntrlId,"10611",[[TKN_CONST,idNum]]);
}
else
{
idNum = v6IfName;
tokenObj.setToken(cntrlId,"",[[TKN_CONST,idNum]]);
}
}
function LocalizedConfirmFormReset(func, tokenObj, popOrNot) {
if (popOrNot) {
if (typeof parent.document.querySelectorAll(".tmask")[0] != "undefined" && parent.document.querySelectorAll(".tmask")[0] != null) {
var m = parent.document.querySelectorAll(".tmask")[0];
m.parentElement.removeChild(m);
}
if (typeof parent.document.querySelectorAll(".tbox")[0] != "undefined" && parent.document.querySelectorAll(".tbox")[0] != null) {
var j = parent.document.querySelectorAll(".tbox")[0];
j.parentElement.removeChild(j);
}
} else {
var iframe = parent.document.getElementById("mainFrame");
iframe.src = iframe.src;
}
if (window.isSomeControlChanged) {
try {
Page.reload();
} catch (Page) {
ResetCloseForm(func);
}
}
}
function ResetCloseForm(func)
{
AlterPageMessage(null, null, false);
for (var i = 0, iMax = document.forms.length; i < iMax; i ++)
document.forms[i].reset();
if (iMax == 0)
{
if (!IsUndefOrNull(window.Page))
Page.load_complete();
else if (!IsUndefOrNull(window.tmpl))
{
showPageContent();
StylingInit();
}
return;
}
var selectCtrl;
for (var i in selectCtrlTableHash)
{
for (var j in selectCtrlTableHash[i].selectCtrlHash)
{
selectCtrl = selectCtrlTableHash[i].selectCtrlHash[j].selectNode;
selectCtrl.checked = false;
selectCtrl.onclick();
}
}
if (!IsUndefOrNull(func))
func();
for (var i in ctrlLblHash)
AlterContextMessage(ctrlLblHash[i].obj);
DsblEnblCtrlsLbls();
window.isSomeControlChanged = false;
}
function resizeWindowAfterLangChange(win)
{
var frame = win.frames.mainFrame;
ResizeWindow(frame);
}
function calculateLocalizedStrLength(str)
{
var length=0;
var charCode;
for(var i=0;i<str.length;i++)
{
charCode=str.charCodeAt(i);
if ((charCode & 0xFC00) == 0xD800)
{
if ((str.charCodeAt(i+1) & 0xFC00) == 0xDC00)
charCode = ((charCode - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
}
if((charCode<=127)||(charCode==160))
length++;
else if(charCode<=2047)
length+=2;
else if(charCode<=65535)
length+=3;
else if(charCode<=1114111)
length+=4;
}
return length;
}
function _CreateButtonNextBackTransfer(onclick, id, width, parentId,btnClass)
{
var btnLiteral = "<table id='"+id+"_tbl' onmousedown='SetPressedClass(this)' onmouseup='SetHoverClass(this)'";
btnLiteral += " onmouseover='SetHoverClass(this)'";
btnLiteral += " onmouseout='SetNormalClass(this)'";
btnLiteral += " class='btn_normal'";
if (!IsUndefOrNull(onclick))
btnLiteral += " onclick=\"if(this.className!='btn_disabled'){"+onclick+"}\"";
if (IsUndefOrNull(width) || !Consists(typeof(width), "number") || width < 24)
width = 24;
btnLiteral += " width='"+width+"'";
btnLiteral += "><tbody><tr>";
btnLiteral += "<td class="+btnClass+" width='"+width+"' ";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"'>";
btnLiteral +="</td>";
btnLiteral += "</td>";
btnLiteral += "</tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(btnLiteral);
else
document.getElementById(parentId).innerHTML = btnLiteral;
function CheckKeyPress(ev)
{
if (GetEventKeyCode(ev) == 13)
{
var target = GetEventTarget(ev);
if (IsUndefOrNull(target.tagName))
return false;
switch (target.tagName.toLowerCase())
{
case "a":
case "area":
case "button":
case "textarea":
break;
case "input":
if (IsUndefOrNull(target.type))
return false;
switch (target.type.toLowerCase())
{
case "button":
case "file":
case "image":
case "reset":
case "submit":
break;
default:
PressDefaultButton();
}
break;
default:
PressDefaultButton();
}
}
return true;
}
}
projTknObj.prototype.AlterButtonBackNextTransDisabling= function (btnId, isDisabled, tooltip)
{
if (IsUndefOrNull(document.getElementById(btnId)))
return;
if (IsUndefOrNull(isDisabled))
isDisabled = true;
var btn = document.getElementById(btnId);
btn.parentNode.parentNode.parentNode.className = (isDisabled) ? "btn_disabled" : "btn_normal";
if (isDisabled && !IsUndefOrNull(btn.href))
RemoveAttribute(btn, "href");
else
btn.href = "javascript:void(0)";
}
projTknObj.prototype.successMsgLink = "<a href=\"javascript:NavigateFromSuccessMessageLocalized()\" class=\"onLight\"></a>";
function NavigateFromSuccessMessageLocalized(pgTknObj)
{
if (!pgTknObj) {
if(!IsUndefOrNull(window.pgTkn) && (!IsUndefOrNull(pgTkn.constructor)) && (pgTkn.constructor === projTknObj))
pgTknObj = pgTkn;
else {
for (var i in window)
if (!IsUndefOrNull(i.constructor) && (i.constructor === projTknObj)) {
pgTknObj = i;
break;
}
if (!pgTknObj) {
NavigateFromSuccessMessage();
return;
}
}
}
if (IsUndefOrNull(_top.modalWindow) || _top.modalWindow.closed)
_top.STYLING.successMsgNS.linkFunc();
else
pgTknObj.openLocalizedConfirmationDialog("15075", "15074", function(){_top.modalWindow.close();_top.STYLING.successMsgNS.linkFunc();})
}
var SharedResourcePath = "../";
AddEvent(window, "load", LoadInit);
var isStylingFinished = false;
function LoadInit()
{
if (!window.tmpl)
StylingInit();
}
function StylingInit()
{
HandleTables();
HandleLabels();
HandleControls();
HandleDialog(self);
FinalizeStyling();
}
function FinalizeStyling()
{
document.body.style.cursor = "auto";
for (var i = 0, iMax = document.forms.length; i < iMax; i ++)
document.forms[i].style.cursor = "auto";
isStylingFinished = true;
}
function AddEvent(object, event, handler, capturing)
{
if (IsUndefOrNull(object))
return false;
if (IsUndefOrNull(capturing))
capturing = false;
if (object.attachEvent)
return object.attachEvent("on" + event, handler);
else if (object.addEventListener)
return object.addEventListener(event, handler, capturing);
else
return false;
}
function RemoveEvent(object, event, handler, capturing)
{
if (IsUndefOrNull(object))
return false;
if (IsUndefOrNull(capturing))
capturing = false;
if (object.detachEvent)
return object.detachEvent("on" + event, handler);
else if (object.removeEventListener)
return object.removeEventListener(event, handler, capturing);
else
return false;
}
function GetEvent(ev) {return (ev ? ev : window.event);}
function GetEventTarget(ev)
{
var e = GetEvent(ev);
if (e.target)
return e.target;
else if (e.srcElement)
return e.srcElement;
else
return null;
}
function GetEventKeyCode(ev)
{
var e = GetEvent(ev);
if (e.keyCode)
return e.keyCode;
else if (e.which)
return e.which;
else
return null;
}
function AppendAttribute(node, attrName, attrVal)
{
var attr = document.createAttribute(attrName);
attr.nodeValue = attrVal;
return node.setAttributeNode(attr);
}
function RemoveAttribute(node, attrName)
{
var attr = node.getAttributeNode(attrName);
if (IsUndefOrNull(attr))
return true;
else
return node.removeAttributeNode(attr);
}
function IsUndefOrNull(arg) {return (typeof(arg) == "undefined" || arg == null);}
function HasWord(str,word) {return (str.search(new RegExp("\\b"+word+"\\b")) != -1);}
function Consists(str,word) {return (str.search(new RegExp("^"+word+"$", "i")) != -1);}
function EncodeWindowName(str) {return (str + _top.STYLING.sessionId);}
function DecodeWindowName(str) {return (str.replace(_top.STYLING.sessionId, ""));}
function SetNormalClass(node) {if (node.className != "btn_disabled") node.className = "btn_normal";}
function SetHoverClass(node) {if (node.className != "btn_disabled") node.className = "btn_hover";}
function SetPressedClass(node) {if (node.className != "btn_disabled") node.className = "btn_pressed";}
function SetDefaultClass(node) {if (node.className != "btn_disabled") node.className = "btn_default";}
function AlterButtonDisabling(btnId, isDisabled, tooltip)
{
if (IsUndefOrNull(document.getElementById(btnId)))
return;
if (IsUndefOrNull(isDisabled))
isDisabled = true;
var btn = document.getElementById(btnId);
btn.parentNode.parentNode.parentNode.parentNode.className = (isDisabled) ? "btn_disabled" : "btn_normal";
if (isDisabled && !IsUndefOrNull(btn.href))
RemoveAttribute(btn, "href");
else
btn.href = "javascript:void(0)";
btn.title = IsUndefOrNull(tooltip) ? btn.innerHTML.replace(/\.{3}$/, "") : tooltip;
}
function _CreateButton(txt, onclick, id, width, isDefault, parentId)
{
if (IsUndefOrNull(isDefault))
isDefault = false;
var btnLiteral = "<table onmousedown='SetPressedClass(this)' onmouseup='SetHoverClass(this)'";
btnLiteral += " onmouseover='SetHoverClass(this)'";
if (!isDefault)
{
btnLiteral += " onmouseout='SetNormalClass(this)'";
btnLiteral += " class='btn_normal'";
}
else
{
btnLiteral += " onmouseout='SetDefaultClass(this)' class='btn_default'";
id = "defaultButton";
}
if (!IsUndefOrNull(onclick))
btnLiteral += " onclick=\"if(this.className!='btn_disabled' && isStylingFinished){"+onclick+"}; return false;\"";
var minWidth = _top.STYLING.buttons.getMinWidth();
if (IsUndefOrNull(width) || !Consists(typeof(width), "number") || width < minWidth)
width = minWidth;
btnLiteral += "><tbody><tr><td class='btnTD1' width='9'><img alt='' src='" + SharedResourcePath +"/styling/images/empty.gif' width='9' height='1' /></td>";
btnLiteral += "<td class='btnTD2' width='"+(width-minWidth)+"'";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"_tdNode'";
btnLiteral += "'><a href='javascript:void(0)'";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"'";
if (IsUndefOrNull(txt))
txt = "";
btnLiteral += " title='"+txt.replace(/\.{3}$/, "")+"'>"+txt+"</a></td>";
btnLiteral += "<td class='btnTD3' width='9'><img alt='' src='" + SharedResourcePath + "/styling/images/empty.gif' width='9' height='1' /></td></tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(btnLiteral);
else
document.getElementById(parentId).innerHTML = btnLiteral;
if (isDefault)
document.onkeydown = CheckKeyPress;
return;
function CheckKeyPress(ev)
{
if (GetEventKeyCode(ev) == 13)
{
var target = GetEventTarget(ev);
if (IsUndefOrNull(target.tagName))
return false;
switch (target.tagName.toLowerCase())
{
case "a":
case "area":
case "button":
case "textarea":
break;
case "input":
if (IsUndefOrNull(target.type))
return false;
switch (target.type.toLowerCase())
{
case "button":
case "file":
case "image":
case "reset":
case "submit":
break;
default:
PressDefaultButton();
}
break;
default:
PressDefaultButton();
}
}
return true;
function PressDefaultButton()
{
var defBtn = document.getElementById("defaultButton");
if (defBtn)
defBtn.parentNode.parentNode.parentNode.parentNode.onclick();
}
}
}
function CreateButtonShort(txt, onclick, id, parentId)
{
var btnWidth = _top.STYLING.buttons.getShortWidth();
_CreateButton(txt, onclick, id, btnWidth, false, parentId);
}
function CreateButtonLong (txt, onclick, id, parentId) {
var btnWidth = _top.STYLING.buttons.getLongWidth();
_CreateButton(txt, onclick, id, btnWidth, false, parentId);
}
function CreateButtonShortDefault(txt, onclick, parentId)
{
var btnWidth = _top.STYLING.buttons.getShortWidth();
_CreateButton(txt, onclick, null, btnWidth, true, parentId);
}
function CreateButtonLongDefault (txt, onclick, parentId)
{
var btnWidth = _top.STYLING.buttons.getLongWidth();
_CreateButton(txt, onclick, null, btnWidth, true, parentId);
}
function CreateButtonApply(parentId)
{
CreateButtonShortDefault("Apply", "if(formSubmit()) {_top.STYLING.afterPOST=self.location.pathname; document.forms[0].submit();}", parentId);
}
function CreateButtonClose(id, parentId)
{
CreateButtonShort("Close", "ConfirmWindowClosing();", id, parentId);
}
function CreateButtonReset(id, func, parentId)
{
if (IsUndefOrNull(func))
func = "";
CreateButtonShort("Reset", "ConfirmFormReset(" + func + ")", id, parentId);
}
function ConfirmWindowClosing()
{
popOrNot = true;
if(popOrNot){
if (typeof parent.document.getElementsByClassName("tmask")[0] != "undefined" && parent.document.getElementsByClassName("tmask")[0] != null){
var m = parent.document.getElementsByClassName("tmask")[0];
m.parentElement.removeChild(m);
}
if (typeof parent.document.getElementsByClassName("tbox")[0] != "undefined" && parent.document.getElementsByClassName("tbox")[0] != null){
var j = parent.document.getElementsByClassName("tbox")[0];
j.parentElement.removeChild(j);
}
} else {
var iframe = parent.document.getElementById("mainFrame");
iframe.src = iframe.src;
}
}
function ConfirmFormReset(func)
{
if (window.isSomeControlChanged)
{
_top.STYLING.alertBox.title = "Confirm Reset";
_top.STYLING.alertBox.msg = "Are you sure you want to reset all changes done on the page?";
_top.STYLING.alertBox.func = function(){ResetForm(func);};
OpenConfirmationDialog();
}
}
function ResetForm(func)
{
AlterPageMessage(null, null, false);
for (var i = 0, iMax = document.forms.length; i < iMax; i ++)
document.forms[i].reset();
if (iMax == 0)
{
if (!IsUndefOrNull(window.Page))
Page.load_complete();
else if (!IsUndefOrNull(window.tmpl))
{
showPageContent();
StylingInit();
}
return;
}
var selectCtrl;
for (var i in selectCtrlTableHash)
{
for (var j in selectCtrlTableHash[i].selectCtrlHash)
{
selectCtrl = selectCtrlTableHash[i].selectCtrlHash[j].selectNode;
selectCtrl.checked = false;
selectCtrl.onclick();
}
}
if (!IsUndefOrNull(func))
func();
for (var i in ctrlLblHash)
AlterContextMessage(ctrlLblHash[i].obj);
DsblEnblCtrlsLbls();
window.isSomeControlChanged = false;
}
function CreateLabel(txt, className, htmlFor, id, isRequired, parentId)
{
var lblLiteral = "<label";
if (!IsUndefOrNull(className) && className != "")
lblLiteral += " class='"+className+"'";
if (!IsUndefOrNull(htmlFor) && htmlFor != "")
lblLiteral += " for='"+htmlFor+"'";
lblLiteral += ">";
if (!IsUndefOrNull(isRequired) && isRequired == true)
{
lblLiteral += "<img alt='' src='" + SharedResourcePath + "/styling/images/empty.gif' width='15' height='10'";
if (!IsUndefOrNull(_top.STYLING.reqTooltip))
{
lblLiteral += " title='" + _top.STYLING.reqTooltip + "'";
if (!IsUndefOrNull(id) && id != "")
lblLiteral += " id='"+id+"_img'";
}
lblLiteral += " />";
}
lblLiteral += "<span";
if (!IsUndefOrNull(id) && id != "")
lblLiteral += " id='"+id+"'";
if (IsUndefOrNull(txt))
txt = "";
lblLiteral += ">"+txt+"</span>";
var execStatus = 0;
if (!IsUndefOrNull(className) && !IsUndefOrNull(_top.STYLING.separator) &&
(HasWord(className, "left") || HasWord(className, "topSingle") || HasWord(className, "topMulti")))
{
lblLiteral += "<span";
if (!IsUndefOrNull(id) && id != "")
lblLiteral += " id='"+id+"_separator'";
lblLiteral += ">"+_top.STYLING.separator+"</span>";
execStatus = 1;
}
lblLiteral += "</label>";
if (IsUndefOrNull(parentId))
document.write(lblLiteral);
else
document.getElementById(parentId).innerHTML = lblLiteral;
return execStatus;
}
function CtrlElem(obj)
{
this.obj = (IsUndefOrNull(obj)) ? null : obj;
this.lblArr = new Array();
this.msgNode = null;
this.msgContainer = null;
}
CtrlElem.prototype.AddLabel = function(lblObj)
{
if (!Consists(typeof(lblObj), "object"))
return null;
return this.lblArr.push(lblObj);
}
CtrlElem.prototype.GetLblArrLen = function()
{
return this.lblArr.length;
}
CtrlElem.prototype.RepeatForEachLbl = function(callback)
{
for (var i = 0; i < this.lblArr.length; i ++)
callback(this.lblArr[i]);
}
CtrlElem.prototype.GetMsgNodeId = function()
{
return this.msgNode.id;
}
function GetContextMessageId(ctrlId)
{
return ctrlLblHash[ctrlId].GetMsgNodeId();
}
function HandleLabels()
{
ctrlLblHash = {};
var lblArr = document.getElementsByTagName("label");
var lblArrLen = lblArr.length;
var id, msgContainer;
var ctrlBlackList = new Array();
for (var i = 0; i < lblArrLen; i ++)
{
id = lblArr[i].htmlFor;
if (id == "" || !IsUndefOrNull(ctrlBlackList[id]))
continue;
if (!ctrlLblHash[id])
{
if (IsUndefOrNull(document.getElementById(id)))
{
ctrlBlackList[id] = true;
continue;
}
ctrlLblHash[id] = new CtrlElem(document.getElementById(id));
AddLblEventsHandler(ctrlLblHash[id].obj);
}
msgContainer = SearchContextMessagePlaceholder(lblArr[i]);
if (msgContainer != null)
{
ctrlLblHash[id].msgContainer = msgContainer;
ctrlLblHash[id].msgNode = lblArr[i];
}
else
{
ctrlLblHash[id].AddLabel(lblArr[i]);
}
}
return;
function SearchContextMessagePlaceholder(obj)
{
var tableNode = obj;
while (!Consists(tableNode.tagName, "table") && !Consists(tableNode.tagName, "html"))
tableNode = tableNode.parentNode;
if (Consists(tableNode.tagName, "table") && (HasWord(tableNode.className, "contextMessageRight") ||
HasWord(tableNode.className, "contextMessageTop")))
return tableNode;
else
return null;
}
function CheckRequired(ev)
{
var target = GetEventTarget(ev);
if (IsUndefOrNull(target.value))
return false;
if (target.value == "")
{
var msg = IsUndefOrNull(_top.STYLING.reqEmptyMsg) ? "" : _top.STYLING.reqEmptyMsg;
AlterContextMessage(target, true, msg);
}
else if (IsUndefOrNull(target.onblur))
AlterContextMessage(target);
return true;
}
}
function AddLblEventsHandler(obj)
{
var eventArr = ["blur", "change", "click", "dblclick", "focus", "keydown", "keypress", "keyup",
"mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "select"];
for (var i = 0; i < eventArr.length; i ++)
if (obj["on"+eventArr[i]] != undefined)
AddEvent(obj, eventArr[i], DsblEnblCtrlsLbls);
}
function DsblEnblCtrlsLbls()
{
for (var i in ctrlLblHash)
{
ctrlLblHash[i].RepeatForEachLbl(function(obj){obj.className = obj.className.replace(/\s*\bdisabled\b/g, "")});
ctrlLblHash[i].obj.className = ctrlLblHash[i].obj.className.replace(/\s*\bdisabled\b/g, "");
if (ctrlLblHash[i].obj.disabled || ctrlLblHash[i].obj.readonly)
{
ctrlLblHash[i].RepeatForEachLbl(function(obj){obj.className += " disabled"});
ctrlLblHash[i].obj.className += " disabled";
if (ctrlLblHash[i].msgNode != null)
AlterContextMessage(ctrlLblHash[i].obj);
}
}
var ctrlArrLen = ctrlArray.length;
for (var i = 0; i < ctrlArrLen; i++)
{
ctrlArray[i].className = ctrlArray[i].className.replace(/\s*\bdisabled\b/g, "");
if (ctrlArray[i].disabled || ctrlArray[i].readonly)
ctrlArray[i].className += " disabled";
}
}
function HandleTables()
{
if (HasWord(navigator.userAgent, "Safari") && !HasWord(navigator.userAgent, "Chrome"))
{
var captionArr = document.getElementsByTagName("caption");
for (var i = 0; i < captionArr.length; i++)
if (HasWord(captionArr[i].parentNode.className, "dataTable"))
{
captionArr[i].className += " safari";
if (captionArr[i].children[0])
captionArr[i].children[0].className += " safari";
}
}
var trArr = new Array();
var thArr = new Array();
var theadArr = document.getElementsByTagName("thead");
var rowSpanFirst = 1;
var rowSpanLast = 1;
for (var i = 0; i < theadArr.length; i ++)
if (HasWord(theadArr[i].parentNode.className, "dataTable"))
{
trArr = theadArr[i].getElementsByTagName("tr");
for (var j = 0; j < trArr.length; j ++)
{
thArr = trArr[j].getElementsByTagName("th");
for (var k = 0; k < thArr.length; k ++)
{
if (j == 0)
thArr[k].style.borderTopWidth = "0px";
if (k == 0)
{
if (rowSpanFirst == 1)
{
rowSpanFirst = thArr[k].rowSpan;
}
else
rowSpanFirst --;
}
if (k == thArr.length - 1)
{
if (rowSpanLast == 1)
{
thArr[k].style.borderRightWidth = "0px";
rowSpanLast = thArr[k].rowSpan;
}
else
rowSpanLast --;
}
}
}
}
var tbodyArr = document.getElementsByTagName("tbody");
var txtNode, tdNode, trNode;
var emptyTblTxt = IsUndefOrNull(_top.STYLING.emptyTbl) ? "" : _top.STYLING.emptyTbl;
var tableId;
for (var i = 0; i < tbodyArr.length; i ++)
if (HasWord(tbodyArr[i].parentNode.className, "dataTable"))
{
tableId = tbodyArr[i].parentNode.id;
trArr = tbodyArr[i].getElementsByTagName("tr");
if (trArr.length == 0)
{
txtNode = document.createTextNode(emptyTblTxt);
tdNode = document.createElement("td");
AppendAttribute(tdNode, "colspan", "100");
AppendAttribute(tdNode, "id", tableId + "_emptyCell");
tdNode.appendChild(txtNode);
trNode = document.createElement("tr");
trNode.appendChild(tdNode);
tbodyArr[i].appendChild(trNode);
if (document.getElementById(tableId + "_emptyCell"))
document.getElementById(tableId + "_emptyCell").setAttribute('colspan', '100');
}
else
for (var j = 0; j < trArr.length; j ++)
if (j % 2 != 0)
trArr[j].className += " evenTR";
}
}
function RowSelectCtrlColl(isMultiselect)
{
this.isMultiselect = (IsUndefOrNull(isMultiselect)) ? false : isMultiselect;
this.selectAllCtrl = null;
this.selectCtrlHash = {};
this.selectCtrlHashLength = 0;
this.selectedCount = 0;
this.disabledCount = 0;
this.isDisabledCounted = false;
this.selectedId = "";
}
RowSelectCtrlColl.prototype.AddCtrl = function(obj)
{
if (IsUndefOrNull(obj.tagName) || IsUndefOrNull(obj.id) || IsUndefOrNull(obj.parentNode))
return null;
var id = obj.id;
var rowSelCtrl = new RowSelectCtrl(obj);
if (id == "")
{
if (rowSelCtrl.rowNode.id == "")
return null;
else
id = obj.id = rowSelCtrl.rowNode.id + "_select";
}
this.selectCtrlHash[id] = rowSelCtrl;
this.selectCtrlHashLength ++;
if (obj.disabled || obj.style.display == "none")
{
obj.checked = false;
this.disabledCount ++;
}
else if (obj.checked)
{
this.selectedCount ++;
rowSelCtrl.rowNode.className += " selected";
}
return id;
}
RowSelectCtrlColl.prototype.GetRowNode = function(obj)
{
if (IsUndefOrNull(obj.id) || IsUndefOrNull(this.selectCtrlHash[obj.id]))
return null;
return this.selectCtrlHash[obj.id].rowNode;
}
RowSelectCtrlColl.prototype.AlterRowSelection = function(obj)
{
var rowSelCtrl = this.selectCtrlHash[obj.id];
var node = rowSelCtrl.selectNode;
var rowNode = rowSelCtrl.rowNode;
var wasChecked = rowSelCtrl.wasChecked;
if (this.isMultiselect)
{
if (node.checked && !wasChecked)
{
this.selectedCount ++;
rowSelCtrl.wasChecked = true;
rowNode.className += " selected";
}
else if (!node.checked && wasChecked)
{
this.selectedCount --;
rowSelCtrl.wasChecked = false;
rowNode.className = rowNode.className.replace(/\s*\bselected\b/g, "");
}
}
else if (node.checked)
{
if (this.selectedId != "")
{
var wasCheckedRow = this.selectCtrlHash[this.selectedId].rowNode;
wasCheckedRow.className = wasCheckedRow.className.replace(/\s*\bselected\b/g, "");
}
rowNode.className += " selected";
this.selectedId = node.id;
this.selectedCount = 1;
}
if (!this.isMultiselect || this.selectAllCtrl == null)
return;
if (this.selectCtrlHashLength == this.selectedCount + this.disabledCount)
{
if (this.selectCtrlHashLength != this.disabledCount)
this.selectAllCtrl.checked = true;
}
else
this.selectAllCtrl.checked = false;
}
RowSelectCtrlColl.prototype.AlterAllRowsSelection = function()
{
var node;
var selection = this.selectAllCtrl.checked;
if (!this.isDisabledCounted)
this.CountDisabledItems();
for (var i in this.selectCtrlHash)
{
node = this.selectCtrlHash[i].selectNode;
if (!node.disabled && node.style.display != "none")
{
node.checked = selection;
node.onclick();
}
}
}
RowSelectCtrlColl.prototype.CountDisabledItems = function()
{
this.disabledCount = 0;
for (var i in this.selectCtrlHash)
{
node = this.selectCtrlHash[i].selectNode;
if (node.disabled || node.style.display == "none")
this.disabledCount ++;
}
this.isDisabledCounted = true;
}
RowSelectCtrlColl.prototype.GetSelectedCtrlId = function()
{
for (var i in this.selectCtrlHash)
{
node = this.selectCtrlHash[i].selectNode;
if (node.checked && !node.disabled && node.style.display != "none")
return i;
}
return null;
}
function GetSelectedCtrlId(ctrlName)
{
return selectCtrlTableHash[ctrlName].GetSelectedCtrlId();
}
function GetSelectedCtrl(ctrlName)
{
return document.getElementById(selectCtrlTableHash[ctrlName].GetSelectedCtrlId());
}
function HideSelectedRows(ctrlName)
{
var rowHash = selectCtrlTableHash[ctrlName].selectCtrlHash;
for (var id in rowHash)
if (rowHash[id].selectNode.checked)
rowHash[id].rowNode.style.display = "none";
}
function RowSelectCtrl(selectNode)
{
this.selectNode = selectNode;
var trNode = selectNode;
while (!Consists(trNode.tagName, "tr") && !Consists(trNode.tagName, "html"))
trNode = trNode.parentNode;
this.rowNode = trNode;
this.wasChecked = selectNode.checked;
}
function HandleControls()
{
isSomeControlChanged = false;
selectCtrlTableHash = {};
ctrlArray = [];
var ctrlArr = document.getElementsByTagName("input");
var ctrlNameArr = new Array();
var ctrlName, ctrlOnclick, isMultiselect;
var isMSIE = HasWord(navigator.userAgent, "MSIE");
var isStandardMode = (document.compatMode == "CSS1Compat");
var chkClass = " checkbox";
var rdoClass = " radio";
var txtClass = " text";
if (isStandardMode)
{
document.body.style.overflow = "visible";
if (document.getElementsByTagName("html").length)
document.getElementsByTagName("html")[0].style.overflow = "auto";
chkClass = " checkboxStd";
rdoClass = " radioStd";
txtClass = " textStd";
}
for (var i = 0; i < ctrlArr.length; i ++)
{
if (ctrlArr[i].type == "hidden")
continue;
AddEvent(ctrlArr[i], "change", RegisterCtrlChange);
if (IsUndefOrNull(ctrlArr[i].id) || ctrlArr[i].id == "" || IsUndefOrNull(ctrlLblHash[ctrlArr[i].id]))
{
ctrlArray.push(ctrlArr[i]);
AddLblEventsHandler(ctrlArr[i]);
}
switch (ctrlArr[i].type)
{
case "checkbox":
ctrlArr[i].className += chkClass;
if (isMSIE & isStandardMode)
ctrlArr[i].style.marginBottom = "0px";
break;
case "radio":
ctrlArr[i].className += rdoClass;
if (isMSIE)
{
ctrlArr[i].style.width = "13px";
ctrlArr[i].style.height = "14px";
ctrlArr[i].style.marginLeft = "-1px";
if (isStandardMode)
{
ctrlArr[i].style.marginBottom = "0px";
ctrlArr[i].style.marginTop = "1px";
}
}
break;
case "file":
case "password":
case "text":
ctrlArr[i].className += txtClass;
if (isMSIE)
ctrlArr[i].style.margin = "-1px 0px";
break;
}
ctrlOnclick = (IsUndefOrNull(ctrlArr[i].onclick)) ? "" : ctrlArr[i].onclick.toString();
if (ctrlArr[i].name && (HasWord(ctrlOnclick, "AlterRowSelection") || HasWord(ctrlOnclick, "AlterAllRowsSelection")))
{
ctrlName = ctrlArr[i].name;
if (!HasWord(ctrlNameArr.join(" "), ctrlName))
{
ctrlNameArr.push(ctrlName);
isMultiselect = Consists(ctrlArr[i].getAttribute("type"), "checkbox");
selectCtrlTableHash[ctrlName] = new RowSelectCtrlColl(isMultiselect);
}
if (isMultiselect && HasWord(ctrlOnclick, "AlterAllRowsSelection"))
selectCtrlTableHash[ctrlName].selectAllCtrl = ctrlArr[i];
else
{
selectCtrlTableHash[ctrlName].AddCtrl(ctrlArr[i]);
ctrlArr[i].onclick();
}
}
}
var tblHash;
for (ctrlName in selectCtrlTableHash)
{
tblHash = selectCtrlTableHash[ctrlName];
if (tblHash.selectAllCtrl)
tblHash.selectAllCtrl.disabled = !(tblHash.selectCtrlHashLength - tblHash.disabledCount);
}
var tagNameArr = ["select", "textarea"];
var corrTextarea;
for (var i = 0; i < tagNameArr.length; i ++)
{
corrTextarea = (isMSIE && tagNameArr[i] == "textarea");
ctrlArr = document.getElementsByTagName(tagNameArr[i]);
for (var j = 0; j < ctrlArr.length; j ++)
{
AddEvent(ctrlArr[j], "change", RegisterCtrlChange);
if (IsUndefOrNull(ctrlArr[j].id) || ctrlArr[j].id == "" || IsUndefOrNull(ctrlLblHash[ctrlArr[j].id]))
{
ctrlArray.push(ctrlArr[j]);
AddLblEventsHandler(ctrlArr[j]);
}
if (corrTextarea)
ctrlArr[j].style.margin = "-1px 0px";
}
}
DsblEnblCtrlsLbls();
return;
function RegisterCtrlChange() {window.isSomeControlChanged = true;}
}
function AlterAllRowsSelection(selectNode)
{
selectCtrlTableHash[selectNode.name].AlterAllRowsSelection();
}
function AlterRowSelection(selectNode, btnDelId, btnEdtId)
{
var selectCtrlTable = selectCtrlTableHash[selectNode.name];
if (selectCtrlTable.selectAllCtrl && !selectCtrlTable.isDisabledCounted)
selectCtrlTable.CountDisabledItems();
selectCtrlTable.AlterRowSelection(selectNode);
AlterTableButtons(selectCtrlTable.selectedCount, btnDelId, btnEdtId);
}
function AlterTableButtons(selectedCount, btnDelId, btnEdtId)
{
var delDsbl = true;
var edtDsbl = true;
var delTooltip = null;
var edtTooltip = null;
if (selectedCount == 0)
{
delTooltip = IsUndefOrNull(_top.STYLING.delBtnNotSelect) ? null : _top.STYLING.delBtnNotSelect;
edtTooltip = IsUndefOrNull(_top.STYLING.edtBtnNotSelect) ? null : _top.STYLING.edtBtnNotSelect;
}
else if (selectedCount > 1)
{
delDsbl = false;
edtTooltip = IsUndefOrNull(_top.STYLING.edtBtnNotSingle) ? null : _top.STYLING.edtBtnNotSingle;
}
else
{
delDsbl = edtDsbl = false;
}
if(!IsUndefOrNull(btnDelId))
AlterButtonDisabling(btnDelId, delDsbl, delTooltip);
if(!IsUndefOrNull(btnEdtId))
AlterButtonDisabling(btnEdtId, edtDsbl, edtTooltip);
}
function OpenModalDialog(url)
{
_top.modalWindow = window.open(url, EncodeWindowName("modal"), "width=160,height=100,left=50,top=50,scrollbars=yes,resizable=yes,location=no,status=yes,menubar=no,toolbar=no");
}
function OpenConfirmationDialog()
{
defaultModalWindowOpener(SharedResourcePath + "/styling/confirmBox.html");
}
function OpenConfirmationDialogOptional()
{
if (_top.STYLING.alertBox.noConfirmFuncHash[_top.STYLING.alertBox.func.toString()])
_top.STYLING.alertBox.func();
else
defaultModalWindowOpener(SharedResourcePath + "/styling/confirmBoxOpt.html");
}
function OpenNotificationDialog()
{
defaultModalWindowOpener(SharedResourcePath + "/styling/notifyBox.html");
}
function CloseModalDialog()
{
RemoveEvent(_top, "focus", MakeDialogOnTop);
RemoveEvent(_top.document.body, "click", MakeDialogOnTop);
if (typeof(opener.document) == "object")
RemoveEvent(opener.document, "keydown", ForbidKeyPressing);
RemoveEvent(_top.modalWindow, "unload", CloseModalDialog);
_top.document.getElementById("veil").style.display = "none";
}
function CloseAlertBox()
{
var err;
if (opener == opener.parent)
var anchor = opener;
else
var anchor = _top;
try
{
RemoveEvent(anchor, "focus", MakeAlertBoxOnTop);
RemoveEvent(anchor.document.body, "click", MakeAlertBoxOnTop);
RemoveEvent(opener.document, "keydown", ForbidKeyPressing);
anchor.document.getElementById("veil").style.display = "none";
}
catch(err)
{
if (!IsUndefOrNull(_top.MsgLog))
_top.MsgLog.addMsg("Exception is caught in CloseAlertBox(). Type: " + err.name +
". Message: " + err.message, "Warning", "Styling");
}
}
function MakeDialogOnTop()
{
if (typeof(_top.modalWindow) != "undefined" && !_top.modalWindow.closed)
_top.modalWindow.focus();
}
function ForbidKeyPressing(ev)
{
var e = GetEvent(ev);
if (e.stopPropagation)
e.stopPropagation();
else
e.cancelBubble = true;
if (e.preventDefault)
e.preventDefault();
else
e.returnValue = false;
return false;
}
function MakeAlertBoxOnTop()
{
if (typeof(_top) != "undefined" && typeof(_top.alertBox) != "undefined" && !_top.alertBox.closed)
_top.alertBox.focus();
}
function CloseAlertAndDialogBox()
{
if (!IsUndefOrNull(_top))
{
if (!IsUndefOrNull(_top.alertBox) && !_top.alertBox.closed)
_top.alertBox.close();
if (!IsUndefOrNull(_top.modalWindow) && !_top.modalWindow.closed)
_top.modalWindow.close();
}
}
function HandleDialog(win)
{
if (DecodeWindowName(win.name) != "modal" && DecodeWindowName(win.name) != "alertBox")
return;
if (DecodeWindowName(win.name) == "modal")
{
_top.document.getElementById("veil").style.display = "block";
AddEvent(_top, "focus", MakeDialogOnTop);
AddEvent(_top.document.body, "click", MakeDialogOnTop);
AddEvent(win, "unload", CloseModalDialog);
var veilNode = win.document.createElement("div");
AppendAttribute(veilNode, "id", "veil");
AppendAttribute(veilNode, "class", "veil");
win.document.body.appendChild(veilNode);
if (_top.STYLING.alertBox.closeDialog)
{
_top.STYLING.alertBox.closeDialog = false;
if ((IsUndefOrNull(_top.oGW) || !_top.oGW.isGWShown) && IsUndefOrNull(_top.mainFrame.tmpl))
_top.setTimeout("_top.mainFrame.location.reload(true)", 100);
win.close();
}
}
else if (DecodeWindowName(win.name) == "alertBox")
{
if (opener == opener.parent)
var anchor = opener;
else
var anchor = _top;
anchor.document.getElementById("veil").style.display = "block";
AddEvent(anchor, "focus", MakeAlertBoxOnTop);
AddEvent(anchor.document.body, "click", MakeAlertBoxOnTop);
AddEvent(win, "unload", CloseAlertBox);
}
try {
AddEvent(opener.document, "keydown", ForbidKeyPressing);
}
catch(err)
{
if (!IsUndefOrNull(_top.MsgLog))
_top.MsgLog.addMsg("Exception is caught in HandleDialog(). Type: " + err.name +
". Message: " + err.message, "Warning", "Styling");
}
ResizeWindow(win);
}
function ResizeWindow(win)
{
var maxWidth = Math.max(win.screen.availWidth - 100, 160);
var maxHeight = Math.max(win.screen.availHeight - 100, 100);
var minWidth = 0;
var minHeight = 0;
var formArr = win.document.forms;
var nodeArr = [];
var children, className;
if (formArr.length)
for (var i = 0; i < formArr.length; i ++)
AppendChildren(formArr[i]);
else if (!IsUndefOrNull(win.document.getElementById("popUpMainDiv")))
AppendChildren(win.document.getElementById("popUpMainDiv"));
else
return;
for (var i = 0; i < nodeArr.length; i ++)
{
if (nodeArr[i].clientWidth > minWidth)
minWidth = nodeArr[i].clientWidth;
minHeight += nodeArr[i].clientHeight;
className = nodeArr[i].className;
if (HasWord(className, "pageMessage") && nodeArr[i].clientHeight > 0)
minHeight += 30 - 8;
if (HasWord(className, "dialogButtons"))
minHeight += 10;
}
if (DecodeWindowName(win.name) == "alertBox")
{
minWidth += 30;
minHeight += 30;
}
else
{
minWidth += 16;
minHeight += 16;
}
minWidth += 16 + 2;
minHeight += 23 + 22 + 25 + 9 + 7 + 2 + 2 + 8;
var sizeRatio = 1.6;
if (minWidth / minHeight > sizeRatio)
minHeight = minWidth / sizeRatio;
else
minWidth = minHeight * sizeRatio;
win.resizeTo(Math.min(minWidth, maxWidth), Math.min(minHeight, maxHeight));
function AppendChildren(node)
{
children = node.childNodes;
for (var i = 0; i < children.length; i ++)
if (children[i].nodeType == 1 && Consists(children[i].nodeName, "table"))
nodeArr.push(children[i]);
}
}
function CreateContextMessage(htmlFor, id, isRight, parentId)
{
if (IsUndefOrNull(htmlFor))
return false;
if (IsUndefOrNull(isRight))
isRight = true;
var className = (isRight) ? "contextMessageRight" : "contextMessageTop";
var msgLiteral = "<table class='"+className+"'><tbody><tr>";
if (isRight)
{
msgLiteral += "<td><img src='" + SharedResourcePath + "/styling/images/red3angle_left.gif' width='18' height='16' /></td>";
msgLiteral += "<td><label for='"+htmlFor+"'"+AddId(id)+"></label></td>";
}
else
{
msgLiteral += "<td><label for='"+htmlFor+"'"+AddId(id)+"></label></td>";
msgLiteral += "</tr><tr>";
msgLiteral += "<td><img src='" + SharedResourcePath + "/styling/images/red3angle_down.gif' width='15' height='18' /></td>";
}
msgLiteral += "</tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(msgLiteral);
else
document.getElementById(parentId).innerHTML = msgLiteral;
return true;
function AddId(id)
{
if(!IsUndefOrNull(id) && id != "")
return " id='"+id+"'"
else
return "";
}
}
function AlterContextMessage(obj, isShown, msg)
{
if (IsUndefOrNull(obj) || IsUndefOrNull(obj.id) || obj.id == "")
return false;
if (IsUndefOrNull(isShown))
isShown = false;
if (IsUndefOrNull(msg))
msg = null;
if (IsUndefOrNull(ctrlLblHash[obj.id]) || ctrlLblHash[obj.id].msgNode == null)
return false;
var elem = ctrlLblHash[obj.id];
if (msg != null)
{
if (!IsUndefOrNull(elem.msgNode.textContent))
elem.msgNode.textContent = msg;
else if (!IsUndefOrNull(elem.msgNode.innerText))
elem.msgNode.innerText = msg;
}
elem.msgContainer.style.display = (isShown && !obj.disabled) ? "block" : "none";
if (isShown)
_top.STYLING.alertBox.closeDialog = false;
return true;
}
function CreatePageMessage(id, parentId)
{
if (IsUndefOrNull(id))
id = "";
var pgMsgLiteral = "<table class='pageMessage'><tbody><tr><td><img alt='' /></td><td";
if (id != "")
pgMsgLiteral += " id='"+id+"'";
pgMsgLiteral += "></td></tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(pgMsgLiteral);
else
document.getElementById(parentId).innerHTML = pgMsgLiteral;
var msgContainer = null;
if (id != "")
msgContainer = document.getElementById(id).parentNode.parentNode.parentNode;
else
{
var tblArr = document.getElementsByTagName("table");
for (var i = 0; i < tblArr.length; i ++)
if (tblArr[i].className == "pageMessage")
{
msgContainer = tblArr[i];
break;
}
}
pageMessage = new PageMessage(msgContainer);
var execStatus = 0;
if (_top.STYLING.afterPOST == self.location.pathname)
{
var errArr = GetErrors();
var severity = 1;
var msg = "";
if (errArr.length)
{
msg = [];
for (i = 0; i < errArr.length; i ++)
msg[i] = errArr[i];
severity = 4;
execStatus = 1;
}
else
{
switch (_top.STYLING.successMsgNS.msgType)
{
case 0:
msg = _top.STYLING.successMsg;
break;
case 1:
msg = _top.STYLING.successMsgNS.msgText.replace(/(?=<\/a>)/i, _top.STYLING.successMsgNS.linkText);
break;
}
execStatus = 2;
}
pageMessage.ShowMessage(msg, severity);
}
_top.STYLING.afterPOST = "";
_top.STYLING.successMsgNS.msgType = 1;
if (execStatus == 1 && DecodeWindowName(name) == "modal")
_top.STYLING.alertBox.closeDialog = false;
return execStatus;
}
function AlterPageMessage(msg, severity, isShown)
{
if (IsUndefOrNull(pageMessage))
return;
if (IsUndefOrNull(isShown) || isShown)
{
pageMessage.ShowMessage(msg, severity);
if (severity != 1)
_top.STYLING.alertBox.closeDialog = false;
}
else
pageMessage.HideMessage();
}
function AppendPageMessage(msg)
{
if (IsUndefOrNull(pageMessage))
return;
return pageMessage.AppendMessage(msg);
}
function PageMessage(msgContainer)
{
if (IsUndefOrNull(msgContainer) || IsUndefOrNull(msgContainer.getElementsByTagName))
return;
this.msgContainer = msgContainer;
if (IsUndefOrNull(msgContainer.getElementsByTagName("img")[0]))
return;
this.imgNode = msgContainer.getElementsByTagName("img")[0];
if (IsUndefOrNull(msgContainer.getElementsByTagName("td")[1]))
return;
this.msgNode = msgContainer.getElementsByTagName("td")[1];
this.msgLineCount = 0;
}
PageMessage.prototype.ShowMessage = function(msg, severity)
{
severity = IsUndefOrNull(severity) ? 4 : severity;
var src = "", className = "", innerHtml = "";
var height = "32", width = "32";
switch (severity)
{
case 1:
src = "success";
break;
case 2:
src = "information";
break;
case 3:
src = "warning";
break;
case 4:
src = "criticalerror";
className = "critical";
break;
}
if (severity != 0)
src = SharedResourcePath + "/styling/images/Status_" + src + "_icon.png";
else
src = SharedResourcePath + "/styling/images/empty.gif";
this.imgNode.src = src;
this.imgNode.height = height;
this.imgNode.width = width;
this.msgNode.className = className;
DisplayTranslucentPNGInIE6(this.imgNode, src);
if (!IsUndefOrNull(msg))
{
if (!(msg instanceof Array))
msg = [msg];
for (var i = 0, iMax = msg.length; i < iMax; i ++)
innerHtml += "<div id='pageMessageLine" + i + "'>" + msg[i] + "</div>"
this.msgNode.innerHTML = innerHtml;
this.msgLineCount = iMax;
}
this.msgContainer.style.display = "block";
this.msgContainer.scrollIntoView(true);
}
PageMessage.prototype.HideMessage = function()
{
this.msgContainer.style.display = "none";
}
PageMessage.prototype.AppendMessage = function(msg)
{
var wrapNode = document.createElement("div");
var txtNode = document.createTextNode(msg || "");
wrapNode.setAttribute("id", "pageMessageLine" + this.msgLineCount);
wrapNode.appendChild(txtNode);
this.msgNode.appendChild(wrapNode);
this.msgContainer.scrollIntoView(true);
return this.msgLineCount ++;
}
function GetErrors()
{
var idx = 1;
var errArr = new Array();
var errTxt = "";
while (!IsUndefOrNull(document.getElementsByName("mibError?"+idx)[0]))
{
errTxt = document.getElementsByName("mibError?"+idx)[0].value;
errTxt = errTxt.replace(/.*?Diag=/, "");
errTxt = errTxt.replace(/'(localMsg.*)?$/, "");
errTxt = errTxt.replace(/<.*?>/g, "");
errTxt = errTxt.replace(/\s/g, " ");
var re = new RegExp(String.fromCharCode(160), "g");
errTxt = errTxt.replace(re, " ");
errArr.push(errTxt);
idx ++;
}
return errArr;
}
function AlterAfterPostGW(isSet)
{
if (IsUndefOrNull(isSet))
isSet = false;
var url = "";
if (isSet)
{
if (IsUndefOrNull(oNavigator) || IsUndefOrNull(_top.modalWindow) || _top.modalWindow.closed || !_top.modalWindow.pageMessage) {
if ((agent() == "IE 10" || agent() == "IE 9") && typeof _top[1].oNavigator == "undefined") {
if (!!_top[2].oNavigator) {
oNavigator = _top[2].oNavigator;
}
else { oNavigator = top.mainFrame_gw.oNavigator; };
}
url = oNavigator.get_Url(oNavigator.selectedTab);
var urlMatchArr = url.match(/{file=(.*?)}/);
if (urlMatchArr && urlMatchArr.length >= 2)
url = urlMatchArr[1];
}
else
url = _top.modalWindow.location.pathname;
}
_top.STYLING.afterPOST = url;
isSomeControlChanged = false;
if (!IsUndefOrNull(_top.modalWindow) && !_top.modalWindow.closed)
_top.modalWindow.isSomeControlChanged = false;
}
function DisplayTranslucentPNGInIE6(imgNode, src)
{
if (/MSIE 6\.0/.test(navigator.userAgent))
{
if (typeof imgNode == "string")
imgNode = document.getElementById(imgNode);
imgNode.src = SharedResourcePath + "/styling/images/empty.gif";
imgNode.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
}
}
function NavigateFromSuccessMessage()
{
if (IsUndefOrNull(_top.modalWindow) || _top.modalWindow.closed)
_top.STYLING.successMsgNS.linkFunc();
else
{
_top.STYLING.alertBox.func = function(){
_top.modalWindow.close();
_top.STYLING.successMsgNS.linkFunc();
};
_top.STYLING.alertBox.title = "Confirm Dialog Box Closing";
_top.STYLING.alertBox.msg = "The dialog box will be closed in order to navigate by the link. Do you want to continue?";
OpenConfirmationDialog();
}
}

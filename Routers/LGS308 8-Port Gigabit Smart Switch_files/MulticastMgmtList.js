var mml = null;
Class(MulticastMgmtList);
function MulticastMgmtList()
{
this.konstructor= function(masterNodeId)
{
this.dataSectionName = "MulticastMgmtList";
this.masterNode = Page.findNodeByUniqID(masterNodeId);
this.fltrStatusCtrlId = this.masterNode.getAttribute("FILTER_STATUS");
this.fltrDataCtrlId = this.masterNode.getAttribute("FILTER_DATA");
this.rbFwdV6MAC = this.masterNode.getAttribute("RB_FWD_V6_MAC");
this.rbFwdV6IP = this.masterNode.getAttribute("RB_FWD_V6_IP");
this.rbFwdV6IP_S = this.masterNode.getAttribute("RB_FWD_V6_IPS");
this.rbFwdV4MAC = this.masterNode.getAttribute("RB_FWD_V4_MAC");
this.rbFwdV4IP = this.masterNode.getAttribute("RB_FWD_V4_IP");
this.rbFwdV4IP_S = this.masterNode.getAttribute("RB_FWD_V4_IPS");
this.responseDataXml = Page.dataXml.selectSingleNode(".//MulticastMgmtList");
this.enableNode = Page.dataXml.selectSingleNode(".//MulticastGlobalSetting/multicastFilterEnbl");
this.vlanSlctObject = new vlanCreator(this, 1);
this.vlanSlctObject.setVLANArray();
this.vlanSlctObject.setVLANCombobox("tdcmbVID", "cmbVID", "if (mml) mml.get()");
this.VLANID_ctr = (this.masterNode.getAttribute("VLANID_CTR") && this.masterNode.getAttribute("VLANID_CTR") != "") ? getElement(this.masterNode.getAttribute("VLANID_CTR")) : null;
document.getElementById("tableFwdV6").style.display = "";
this.localizeInit();
if(oNavigator.prev_selectedTab==oNavigator.selectedTab)
{
if (MulticastMgmtList.selectedVlan>0)
this.VLANID_ctr.value = MulticastMgmtList.selectedVlan;
}
this.get();
}
this.localizeInit = function()
{
this.pgTkn = new projTknObj('2390','MulticastProp');
this.pgTkn.setTokenWithError("lblGlobalSettings","2390021");
this.pgTkn.setTokenWithError("lblVLANSettings","2390022");
this.pgTkn.createLocalizedLabel("", "left", this.fltrStatusCtrlId, "lblStatus", false, "2390001", null, "tdLblStatus");
this.pgTkn.createLocalizedLabel("", "left", this.VLANID_ctr.id, "lblVID", false, "2390003", null, "tdLblVID");
this.pgTkn.createLocalizedLabel("", "left", this.rbFwdV6MAC, "lblFwdV6", false, "2390004", null, "tdLblFwdV6");
this.pgTkn.createLocalizedLabel("", "left", this.rbFwdV4MAC, "lblFwdV4", false, "2390008", null, "tdLblFwdV4");
this.pgTkn.createLocalizedLabel("", "", this.fltrStatusCtrlId, "lblStatusCb", false, "2390002", null, "chkFilterStatus_lblWrapper");
this.pgTkn.createLocalizedLabel("", "", this.rbFwdV6MAC, "lblRbFwdV6MAC", false, "2390005", null, "tdLblRbFwdV6MAC");
this.pgTkn.createLocalizedLabel("", "", this.rbFwdV6IP, "lblRbFwdV6IP", false, "2390006", null, "tdLblRbFwdV6IP");
this.pgTkn.createLocalizedLabel("", "", this.rbFwdV6IP_S, "lblRbFwdV6IP_S", false, "2390007", null, "tdLblRbFwdV6IP_S");
this.pgTkn.createLocalizedLabel("", "", this.rbFwdV4MAC, "lblRbFwdV4MAC", false, "2390009", null, "tdLblRbFwdV4MAC");
this.pgTkn.createLocalizedLabel("", "", this.rbFwdV4IP, "lblRbFwdV4IP", false, "2390010", null, "tdLblRbFwdV4IP");
this.pgTkn.createLocalizedLabel("", "", this.rbFwdV4IP_S, "lblRbFwdV4IP_S", false, "2390011", null, "tdLblRbFwdV4IP_S");
_top.popapForOpen = "MulticastProp";
this.pgTkn.CreateLocalizedButtonShortDefault('10004', 'Page.save();Page.send();', 'defaultButton', 'tdApply');
this.pgTkn.CreateLocalizedButtonReset('btnCancel', 'MulticastMgmtList.MultCastListReset()', 'tdCancel', 'mml.pgTkn');
this.pgTkn.setTokenWithError("pageHeader", _top.document.getElementById("caption").innerHTML);
this.pgTkn.setTokenWithError("Multicast_M_CB", "", [[TKN_CALLBACK, function () { Page.localize() } ]]);
/*@cc_on@if(@_jscript){ checkStyleWidth('cmbVID') } @end@*/
if (navigator.userAgent.toLowerCase().indexOf("msie") > -1) {
document.getElementById("gwBody").className += " settingPage multicastProperty";
} else {
document.getElementById("gwBody").setAttribute("class","settingPage multicastProperty");
}
}
this.dispose = function()
{
this.pgTkn.destroy();
}
this.renderVlans=function()
{
if (!this.VLANID_ctr ) return;
var opt;
var data = this.responseDataXml.selectNodes(".//MulticastMgmtEntry[addrType/text()='1']/VID/text()");
for (var i=0;i<data.length;i++)
{
opt = new Option();
opt.text = data[i].nodeValue;
opt.value= data[i].nodeValue;
this.VLANID_ctr.options.add(opt);
}
if(oNavigator.prev_selectedTab==oNavigator.selectedTab)
{
if (MulticastMgmtList.selectedVlan>0)
this.VLANID_ctr.value = MulticastMgmtList.selectedVlan;
}
}
this.setSelectedVLAN = function()
{
MulticastMgmtList.selectedVlan = parseInt(this.pgTkn.createNumberObject(this.VLANID_ctr.value),10);
}
this.get=function(url,callback,sender)
{
this.setSelectedVLAN();
Page.wait(true)
var cbo = new CallBackObject(this);
var url = "wcd?{MulticastMgmtList&VID=" + MulticastMgmtList.selectedVlan + "}"
this.OnComplete = this.CompleteGet;
cbo.DoCallBack(null,url,true,"GET");
};
this.CompleteGet = function(responseText,responseXML)
{
Page.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText)){
var xml = IXML.getDomDocument();
if(document.evaluate || navigator.userAgent.toLowerCase().indexOf("msie") == -1){
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
} else{
xml.loadXML(responseText);
}
if(null==IXML.getChildElement(xml,1))return;
if(!Page.checkValidResponse(xml)) return false;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if (sectionNode==null)
{
}
if(sectionNode) {
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
}
else
{
IXML.appendChild(xml.documentElement.selectSingleNode("//" + this.dataSectionName) ,Page.dataXml.selectSingleNode("//" + DATAROOT));
}
this.responseDataXml = Page.dataXml.selectSingleNode("//" + this.dataSectionName);
}
this.render();
}
}
}
this.render=function()
{
var filterVal = Util.getInputData([this.fltrDataCtrlId])[0];
getElement(this.fltrStatusCtrlId).checked = (filterVal == "1");
if (!this.VLANID_ctr ) return;
var vlanId = parseInt(this.pgTkn.createNumberObject(Util.getInputData([this.VLANID_ctr.id])[0]),10);
MulticastMgmtList.selectedVlan = vlanId;
var ipv4AdminMode = this.responseDataXml.selectSingleNode(".//MulticastMgmtEntry[VID/text()='" + vlanId + "' and addrType/text()='1']/adminMode/text()").nodeValue;
var ipv6AdminMode = this.responseDataXml.selectSingleNode(".//MulticastMgmtEntry[VID/text()='" + vlanId + "' and addrType/text()='2']/adminMode/text()").nodeValue;
if(ipv4AdminMode == "1")
getElement(this.rbFwdV4MAC).checked = true;
else if(ipv4AdminMode == "2")
getElement(this.rbFwdV4IP).checked = true;
else
getElement(this.rbFwdV4IP_S).checked = true;
if(ipv6AdminMode == "1")
getElement(this.rbFwdV6MAC).checked = true;
else if(ipv6AdminMode == "2")
getElement(this.rbFwdV6IP).checked = true;
else
getElement(this.rbFwdV6IP_S).checked = true;
}
this.save=function()
{
var filterVal = (getElement(this.fltrStatusCtrlId).checked) ? "1" : "2";
IXML.setText(this.enableNode, filterVal);
Page.setAlteredDataNodes(this.enableNode,"set");
var vlanId = parseInt(this.pgTkn.createNumberObject(Util.getInputData([this.VLANID_ctr.id])[0]),10);
var ipv4AdminModeNode = this.responseDataXml.selectSingleNode(".//MulticastMgmtEntry[VID/text()='" + vlanId + "' and addrType/text()='1']/adminMode")
var ipv4AdminMode = IXML.getText(ipv4AdminModeNode);
var ipv4CntrlVal;
if(getElement(this.rbFwdV4MAC).checked)
ipv4CntrlVal = "1";
else if(getElement(this.rbFwdV4IP).checked)
ipv4CntrlVal = "2";
else
ipv4CntrlVal = "3";
if (ipv4AdminMode != ipv4CntrlVal)
{
IXML.setText(ipv4AdminModeNode, ipv4CntrlVal);
Page.setAlteredDataNodes(ipv4AdminModeNode,"set");
}
var ipv6AdminModeNode = this.responseDataXml.selectSingleNode(".//MulticastMgmtEntry[VID/text()='" + vlanId + "' and addrType/text()='2']/adminMode");
var ipv6AdminMode = IXML.getText(ipv6AdminModeNode);
var ipv6CntrlVal;
if(getElement(this.rbFwdV6MAC).checked)
ipv6CntrlVal = "1";
else if(getElement(this.rbFwdV6IP).checked)
ipv6CntrlVal = "2";
else
ipv6CntrlVal = "3";
if (ipv6AdminMode != ipv6CntrlVal)
{
IXML.setText(ipv6AdminModeNode, ipv6CntrlVal);
Page.setAlteredDataNodes(ipv6AdminModeNode,"set");
}
}
}
MulticastMgmtList.selectedVlan = 0;
MulticastMgmtList.create = function(id)
{
mml = new MulticastMgmtList(id);
Page.subscribe("mml");
}
MulticastMgmtList.MultCastListReset = function () {
document.getElementById("pageMessageID").style.display = "none";
}

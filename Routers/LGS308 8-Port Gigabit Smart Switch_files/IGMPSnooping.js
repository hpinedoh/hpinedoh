Class(IGMPSnooping).Extends(RT_BP);
function IGMPSnooping(){
this.konstructor = function (master) {
this.superclass(master);
this.addrType = 1;
this.VID = "";
this.vlanArr = new Array();
this.dataNodes = new Array();
this.selectedRow = 0;
this.modPopupCntrl = Page.masterXml.selectSingleNode("//popup[@ID='Edit']");
if (!this.modPopupURL)
this.modPopupURL = "wcd?{file=/GW/Multicast/IGMPSnoopingMod.xml}{VLANCurrentStatus}{IPv4InterfaceList&filter=(IPAddr>0.255.255.255)}{IGMPMLDSnoopVLANList&addrType=1&VLANID=#VLAN_ID#}";
this.groupTable = new RT(Page.findNodeByUniqID("IGMPSnooping"));
this.total = IXML.getText(Page.dataXml.selectSingleNode("//IGMPMLDSnoopVLANList/entryCount"));
this.pgTkn = new projTknObj('1690', 'IGMPSnooping');
this.pgTkn.createLocalizedLabel("", "left", "chkIGMPStatus", "lblIGMPStatus", false, "1690001", null, "tdStatus");
this.pgTkn.createLocalizedLabel("", "", "chkIGMPStatus", "lblStatusCb", false, "1670029", null, "tdLblIGMPStatusCB");
this.pgTkn.CreateLocalizedButtonReset('btnCancel', 'gwReset', 'tdCancel', 'oIGMPS.pgTkn');
this.pgTkn.CreateLocalizedButtonShortDefault('10004', 'IGMPSnooping.apply()', 'defaultButton', 'tdApply');
this.pgTkn.setToken("pageHeader", _top.document.getElementById("caption").innerHTML);
};
this.initPage = function()
{
var rows = this.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
for (var i = 0; i < rows.length; i ++)
{
row_id = rows[i].getAttribute("ID");
html_row = document.getElementById(row_id);
targetCell = html_row.getElementsByTagName("td")[1];
currRowNum = i + 1;
targetCell.innerHTML = currRowNum;
}
}
this.displayFamilyFields = function()
{
if(_top.productFamily == 1 || _top.productFamily == 2)
{
document.getElementById("btnCopy").style.display = "none";
document.getElementById("tdBtnCopy").style.display = "none";
document.getElementById("tdHdrNum").style.display = "none";
document.getElementById("lblQueryRobust").style.display = "none";
document.getElementById("lblQueryInterval").style.display = "none";
document.getElementById("lblQueryMaxRespInt").style.display = "none";
document.getElementById("lblLastMemberQCount").style.display = "none";
document.getElementById("lblLastMemberQInt").style.display = "none";
var x_path= "//tr[@BIND and contains(@ID,'r')]";
var collRows = this.xmlData.selectNodes(x_path);
for(var i=0;i<collRows.length;i++)
{
htmlRow = document.getElementById(collRows[i].getAttribute("ID"));
htmlRow.cells[1].style.display = "none";
htmlRow.cells[6].style.display = "none";
htmlRow.cells[7].style.display = "none";
htmlRow.cells[8].style.display = "none";
htmlRow.cells[9].style.display = "none";
htmlRow.cells[10].style.display = "none";
}
}
else
{
var x_path= "//tr[@BIND and contains(@ID,'r')]";
var collRows = this.xmlData.selectNodes(x_path);
var htmlRow, querStatus;
for(var i = 0; i < collRows.length; i++)
{
htmlRow = document.getElementById(collRows[i].getAttribute("ID"));
querStatus = htmlRow.cells[21].innerHTML;
if(querStatus != "1")
htmlRow.cells[14].innerHTML = "";
}
}
}
this.buildVLANArray = function () {
var x_path = "//tr[@BIND and contains(@ID,'r')]";
var collRowsVlan = this.xmlData.selectNodes(x_path);
var vlanId;
if (!(this.vlanArr.length > 0)) {
for (var i = 0; i < collRowsVlan.length; i++) {
htmlRow = document.getElementById(collRowsVlan[i].getAttribute("ID"));
vlanId = htmlRow.cells[2].innerHTML;
this.vlanArr.push(new Array("VLAN" + vlanId, i + 1));
}
}
}
this.localizeInit = function()
{
_top.popapForOpen = "oIGMPS";
var lastRecord=oIGMPPaging.getLastRecord(this.total);
this.pgTkn.createLocalizedGWPagingLables("1690003", "lblCaption", oIGMPPaging.type, oIGMPPaging.firstEntryInPage, lastRecord, this.total, "oIGMPPaging.pagingFilter()");
this.pgTkn.setTokenWithError("lblCaption", "1690003");
this.pgTkn.setTokenWithError("tdHdrNum", "10800");
this.pgTkn.setTokenWithError('lblVlanId', '1690004');
this.pgTkn.setTokenWithError('lblStatus', '1690005');
this.pgTkn.setTokenWithError('lblVersion', '1690006');
this.pgTkn.setTokenWithError('lblLearn', '1690007');
this.pgTkn.setTokenWithError("lblQueryRobust","1690008");
this.pgTkn.setTokenWithError('lblQueryInterval', '1690009');
this.pgTkn.setTokenWithError('lblQueryMaxRespInt', '1690010');
this.pgTkn.setTokenWithError('lblLastMemberQCount', '1690011');
this.pgTkn.setTokenWithError('lblLastMemberQInt', '1690012');
this.pgTkn.setTokenWithError('lblQuerStat', '1690013');
this.pgTkn.setTokenWithError('lblQuerVer', '1690014');
this.pgTkn.setTokenWithError('lblQuerAdd', '1690015');
this.pgTkn.setTokenWithError('lblImmediateLeave', '1690030');
this.pgTkn.CreateLocalizedButtonShort('10002',"oIGMPS.openMod()",'btnEdit','tdBtnEdit');
AlterButtonDisabling("btnEdit",true,"");
this.pgTkn.CreateLocalizedButtonLong("10503", "oIGMPS.openCopySettings()", "btnCopy" ,"tdBtnCopy","10506");
AlterButtonDisabling("btnCopy",true,"");
this.pgTkn.createLocalizedBackNextWithPager("oIGMPPaging.getPrev()","oIGMPPaging.getNext()","btnBack","btnNext",(oIGMPPaging.pageSize-1),this.total,oIGMPPaging.urlCache.length,"tdBtnPaging");
this.AlterPagingButtonsDisabling();
this.buildVLANArray();
this.pgTkn.setTokenWithError('IGMPSnooping_emptyCell', '10998');
this.pgTkn.setToken("IGMPSnooping_M_CB", "", [[TKN_CALLBACK, function () { oIGMPS.LocalizeTableData() }]]);
/*@cc_on@if(@_jscript){ checkStyleWidth('recordFilter') } @end@*/
}
this.dispose = function()
{
this.pgTkn.destroy();
}
this.LocalizeTableData = function()
{
Page.localize();
RT.localize("IGMPSnooping", "span_2_");
RT.localize("IGMPSnooping", "span_3_");
RT.localize("IGMPSnooping", "span_4_");
RT.localize("IGMPSnooping", "span_10_");
RT.localize("IGMPSnooping", "span_11_");
RT.localize("IGMPSnooping", "span_12_");
this.initPage();
}
this.AlterPagingButtonsDisabling = function()
{
if(oIGMPPaging.urlCache.length==1)
{
this.pgTkn.AlterButtonBackNextTransDisabling("btnBack", true, "");
this.pgTkn.setTokenAttribute("btnBack","title","11014");
}
if(Page.dataXml.selectNodes("//IGMPMLDSnoopVLANList/VLANEntry[addrType='" + this.addrType + "']").length<oIGMPPaging.pageSize)
{
this.pgTkn.AlterButtonBackNextTransDisabling("btnNext", true, "");
this.pgTkn.setTokenAttribute("btnNext","title","11015");
}
else
{
var id=this.groupTable.xmlData.selectSingleNode("//tr[position()="+oIGMPPaging.pageSize+"]").getAttribute("ID");
document.getElementById(id).style.display="none";
}
_top.AlterPagingButtonsDisablingForSnoopingBtnBack = this.pgTkn.AlterButtonBackNextTransDisabling;
}
this.openMod = function()
{
_top.popapForOpen = "oIGMPS";
var popupSrc = Page.masterXml.selectSingleNode("//popup[@ID='Edit']");
this.modPopupURLStore = this.modPopupURL;
this.setText(popupSrc,this.modPopupURL);
this.setText(popupSrc, this.getText(popupSrc).replace("#VLAN_ID#", this.VID));
_top.urlForPopup = this.modPopupURL;
OpenModalDialog('../GW/PopUp.htm?Edit', 768);
}
this.setText=function(html_control,text)
{
var hasInnerText = (document.getElementsByTagName("body")[0].innerText)?true:false;
if(hasInnerText && !_top.isChrome &&!_top.isSafari)
html_control.text=text;
else
html_control.textContent=text;
}
this.getText=function(html_control)
{
var hasInnerText = (document.getElementsByTagName("body")[0].innerText)?true:false;
if(hasInnerText && !_top.isChrome &&!_top.isSafari)
return html_control.text;
else if(html_control.textContent)
return html_control.textContent;
else
return "";
}
this.disableIfOne = function()
{
if (this.vlanArr.length < 2)
AlterButtonDisabling("btnCopy",true,"");
}
this.storeVLAN = function (rad) {
if (rad.checked) {
var id = rad.id;
var loc = id.indexOf("r");
var second = id.indexOf("_", loc);
id = id.substring((loc + 1), second);
this.VID = this.vlanArr[id][0].substring(4);
_top.VLANIDforPOPUP = this.VID
this.selectedRow = id;
}
}
this.unselectRow=function(){
if(this.isMultiSelect)this.superclass();
};
this.getRowData=function(obj){
this.superclass(obj);
var row = IXML.getContainer(obj,"tr");
IGMPSnooping.row_id=row.id;
}
this.enableGlobalSnooping=function(isChecked){
var val=(isChecked)?1:2;
getElement("hIGMPStatus").value=val;
Page.save();Page.send();
};
this.openCopySettings = function()
{
var url = "../config/copyDialogGen.htm";
_top.CopySettings_Src = parseInt(this.selectedRow,10)+1;
_top.CopySettings_Func = IGMPSnooping.preCopy;
_top.CopySettings_nameToNumArr = this.vlanArr;
OpenModalDialog(url);
}
this.getIndexByVLAN = function(vId)
{
for (var i = 0; i < this.vlanArr.length; i++)
{
if (this.vlanArr[i][1] == vId)
return this.vlanArr[i][0].substring(4);
}
}
this.doCopy = function()
{
var currIfName, entryNode, srcNode, currNode;
var srcSnoop, srcInterval, srcMaxResponse, srcQueryCount, srcQueryInterval, srcQuerierEnable, srcLearn;
var srcQuerierIP, srcQuerierVersion, srcRobust;
srcNode = IXML.getParentElement(Page.dataXml.selectSingleNode(".//IGMPMLDSnoopVLANList/VLANEntry/VLANID[text()='"+ this.VID +"']"));
srcSnoop = IXML.getText(srcNode.selectSingleNode(".//adminSnoopEnbl"));
srcLearn = IXML.getText(srcNode.selectSingleNode(".//MRouterLearnEnbl"));
srcInterval = IXML.getText(srcNode.selectSingleNode(".//queryIntervalAdmin"));
srcMaxResponse = IXML.getText(srcNode.selectSingleNode(".//queryMaxResponseTimeAdmin"));
srcQueryCount = IXML.getText(srcNode.selectSingleNode(".//lastMemberQueryCountAdmin"));
srcQueryInterval = IXML.getText(srcNode.selectSingleNode(".//lastMemberQueryIntervalAdmin"));
srcQuerierEnable = IXML.getText(srcNode.selectSingleNode(".//querierAdminEnable"));
srcQuerierIP = IXML.getText(srcNode.selectSingleNode(".//querierAdminIPAddress"));
srcQuerierVersion = IXML.getText(srcNode.selectSingleNode(".//querierAdminVersion"));
srcRobust = IXML.getText(srcNode.selectSingleNode(".//robustnessAdmin"));
srcImmediateLeave = IXML.getText(srcNode.selectSingleNode(".//immediateLeaveEnbl"));
var templateNode = srcNode.cloneNode(true);
entryNode = templateNode.cloneNode(true);
var dstArr = _top.CopySettings_DstStr.split(",");
for (var i = 0; i < dstArr.length; i++)
{
currIfName = dstArr[i];
if(currIfName != "")
{
if (currIfName.toLowerCase().indexOf("vlan") != -1)
currIfName = currIfName.substring(4);
else
currIfName = this.getIndexByVLAN(currIfName);
entryNode = IXML.getParentElement(Page.dataXml.selectSingleNode(".//IGMPMLDSnoopVLANList/VLANEntry/VLANID[text()='"+ currIfName +"']"));
currNode = entryNode.selectSingleNode(".//VLANID");
IXML.setText(currNode, currIfName);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//adminSnoopEnbl");
IXML.setText(currNode, srcSnoop);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//MRouterLearnEnbl");
IXML.setText(currNode, srcLearn);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//queryIntervalAdmin");
IXML.setText(currNode, srcInterval);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//queryMaxResponseTimeAdmin");
IXML.setText(currNode, srcMaxResponse);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//lastMemberQueryCountAdmin");
IXML.setText(currNode, srcQueryCount);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//lastMemberQueryIntervalAdmin");
IXML.setText(currNode, srcQueryInterval);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//querierAdminEnable");
IXML.setText(currNode, srcQuerierEnable);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//querierAdminIPAddress");
IXML.setText(currNode, srcQuerierIP);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//immediateLeaveEnbl");
IXML.setText(currNode, srcImmediateLeave);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//querierAdminVersion");
IXML.setText(currNode, srcQuerierVersion);
Page.setAlteredDataNodes(currNode,ACTION_SET);
currNode = entryNode.selectSingleNode(".//robustnessAdmin");
IXML.setText(currNode, srcRobust);
Page.setAlteredDataNodes(currNode,ACTION_SET);
Page.setAlteredDataNodes(entryNode,ACTION_SET);
}
}
Page.save();
Page.send();
}
};
IGMPSnooping.row_id;
var oIGMPS;
IGMPSnooping.create=function(id){
oIGMPS=new IGMPSnooping(Page.findNodeByUniqID(id));
if(oIGMPS.masterNode.attributes.getNamedItem("PAGING_ID")){
if (oIGMPPaging && top.savePagingObj) {
oIGMPS.url=oIGMPPaging.urlCache[oIGMPPaging.urlCache.length-1]
oIGMPS.get();
}
else {
oIGMPPaging = new IGMPPaging(oIGMPS.masterNode.getAttribute("PAGING_ID"),oIGMPS);
oIGMPPaging.init();
oIGMPPaging.getPrev();
}
top.savePagingObj=false;
}
Page.subscribe('oIGMPS',"RT");
Page.subscribe('oIGMPPaging');
};
IGMPSnooping.apply=function(){
Page.save();Page.send();
};
IGMPSnooping.preCopy = function()
{
oIGMPS.doCopy();
}
var oIGMPPaging;
Class(IGMPPaging).Extends(PrevNextPaging);
function IGMPPaging(){
this.konstructor=function(id,scope){
this.superclass(id,scope);
};
this.getNext = function () {
if (this.scope.xmlData && this.scope.cntRows && this.scope.cntRows >= this.pageSize) {
_top.AlterPagingButtonsDisablingForSnoopingBtnBack("btnNext", true, "");
var vid = this.scope.xmlData.selectSingleNode("//tr[position()=" + this.pageSize + "]").selectSingleNode(".//*[@BIND='VLANID']").getAttribute("VALUE");
if (!new Validator().isInteger(vid)) return;
this.createUrl(vid.toString());
this.scope.url = this.urlCache[this.urlCache.length - 1];
this.scope.get();
}
};
this.createUrl=function(vid){
var url="";
if(vid=="" || !vid)
url = "wcd?{IGMPMLDSnoopVLANList&addrType=" + this.scope.addrType + "&entryCount=en&Count=" + this.pageSize + "}";
else
{
url = this.urlTemplate.replace("#addrType#",this.scope.addrType).replace("#VLANID#",vid).replace("#COUNT#",this.pageSize);
this.firstEntryInPage=((this.urlCache.length)*(this.pageSize-1))+1;
}
if (this.scope.total==0)
this.firstEntryInPage=0;
this.urlCache.push(url);
};
};

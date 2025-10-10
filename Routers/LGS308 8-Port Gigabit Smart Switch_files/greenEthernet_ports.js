Class(greenEthernetPorts).Extends(RT);
function greenEthernetPorts()
{
this.konstructor = function(id)
{
this.superclass(id);
this.attrNode = Page.masterXml.selectSingleNode("//*[@OBJECT='greenEthernetPortsNode']");
this.cmbUnitID = this.attrNode.getAttribute("CMB_UNIT");
this.fltrRow = this.attrNode.getAttribute("FLTR_CONTAINER");
this.portId;
this.eeeStatus=false;
this.nameToNumArr = [];
this.selectedRowId = null;
this.ifName = "";
this.SR;
this.RD;
this.win = self;
this.pgTkn;
this.total=_top.NumberOfPortPerModuleArr[oPolling.currentUnit];
this.selectedRowNum = 0;
this.relevantPortCounter = 0;
this.data = [];
_top.urlForPopup = null;
this.initLocalization()
}
this.initLocalization = function()
{
this.pgTkn = new projTknObj("2310001", "Settings");
this.pgTkn.setToken("pageHeader", _top.document.getElementById("caption").innerHTML);
this.applyLocalizationTokens();
}
this.initMainPage = function()
{
this.applyLocalizationTokens(true);
}
this.stopProg = function ()
{
_top.homeShowProg(false);
}
this.showProg = function ()
{
_top.abortProg = function(){
oGEG.stopProg();
}
_top.homeShowProg(true);
}
this.getIfNameByEntryNum = function(entry)
{
for(var i = 0; i < this.nameToNumArr.length; i++)
{
if (this.nameToNumArr[i][1] == entry)
return this.nameToNumArr[i][2];
}
return "";
}
this.get = function(unitID)
{
var url = Navigation.getGreenEthernetURL(unitID);
this.superclass(url);
}
this.IndexNodes = function(node,nodeIndex,newIndex)
{
for (var i = 0 ; i < node.childNodes.length; i++)
{
var currNode = node.childNodes[i];
var nodeID = null;
if (currNode.attributes)
nodeID = currNode.getAttribute("ID");
if ((nodeID) && (nodeID != ""))
{
if (nodeIndex != "")
{
var IndexPos = nodeID.indexOf(nodeIndex);
var newId= nodeID.substring(0,IndexPos)+ newIndex + nodeID.substring(IndexPos+nodeIndex.length);
currNode.setAttribute('ID',newId);
}
}
this.IndexNodes(currNode,nodeIndex,newIndex);
}
}
this.bindTag = function()
{
var rowset = this.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
var ifName, ifID;
var currRowNum, currIfName, realName, targetCell;
this.nameToNumArr = [];
this.relevantPortCounter = 0;
this.data = [];
for (var i = 0; i < rowset.length; i ++)
{
ifName = IXML.getText(rowset[i].childNodes[15]);
ifID = oPolling.getIfIndexByName(ifName);
var htmlRow = document.getElementById(rowset[i].getAttribute("ID"));
var parent = htmlRow.parentNode;
var transType = IXML.getText(oPolling.portsDataXml.selectSingleNode("//port[portName='"+ifName+"']/transType"));
if (transType == "2")
{
{
parent.removeChild(htmlRow);
continue;
}
}
this.relevantPortCounter++;
targetCell = rowset[i].childNodes[2];
currIfName = _top.getPortName(ifName,true);
htmlRow.cells[1].innerHTML = currIfName;
var locTknId;
var adminSREnabled;
locTknId = copyDataToRT("//GreenEthSavingTypeList/Entry[interfaceName='ifName' and savingType='2']", "adminState", 2);
this.pgTkn.setTokenWithError("adminState_"+i, locTknId);
adminSREnabled = (locTknId == "2310014") ? true : false;
locTknId = copyDataToRT("//GreenEthSavingTypeList/Entry[interfaceName='ifName' and savingType='2']", "operState", 3);
this.pgTkn.setTokenWithError("operState_"+i, locTknId);
locTknId = copyDataToRT("//GreenEthSavingTypeList/Entry[interfaceName='ifName' and savingType='2']", "reason", 4);
this.pgTkn.setTokenWithError("reason_"+i, locTknId);
if(adminSREnabled)
{
locTknId = copyDataToRT("//CableTestPortList/Entry[interfaceName='ifName']", "resultVal", 5);
this.pgTkn.setTokenWithError("resultVal_"+i, locTknId);
}
if(_top.eeeSupported)
{
locTknId = copyDataToRT("//EEEInterfaceList/Entry[interfaceName='ifName']", "EEEAdminStatus", 6);
this.pgTkn.setTokenWithError("EEEAdminStatus_"+i, locTknId);
locTknId = copyDataToRT("//EEEInterfaceList/Entry[interfaceName='ifName']", "EEEOperStatus", 7);
this.pgTkn.setTokenWithError("EEEOperStatus_"+i, locTknId);
locTknId = copyDataToRT("//EEELLDPInterfaceList/Entry[interfaceName='ifName']", "EEELLDPAdminStatus", 8);
this.pgTkn.setTokenWithError("EEELLDPAdminStatus_"+i, locTknId);
locTknId = copyDataToRT("//EEELLDPInterfaceList/Entry[interfaceName='ifName']", "EEELLDPOperStatus", 9);
this.pgTkn.setTokenWithError("EEELLDPOperStatus_"+i, locTknId);
locTknId = copyDataToRT("//EEEInterfaceList/Entry[interfaceName='ifName']", "EEERemoteStatus", 10);
this.pgTkn.setTokenWithError("EEERemoteStatus_"+i, locTknId);
}
this.nameToNumArr.push(new Array(currIfName, this.relevantPortCounter, ifName));
this.data.push(htmlRow);
}
var rowCounter = 0;
for (var i = 0; i < this.data.length; i ++)
{
var htmlRow = this.data[i];
if (htmlRow)
{
var rowID = htmlRow.id;
var rowIndex = rowID.replace(/\D/g,'');
if (parseInt(rowIndex,10) != rowCounter)
{
var IndexPos = rowID.indexOf(rowIndex);
var newId= rowID.substring(0,IndexPos)+ (rowCounter).toString() + rowID.substring(IndexPos+rowIndex.length);
htmlRow.setAttribute('ID',newId);
this.IndexNodes(htmlRow,rowIndex,(rowCounter).toString());
}
rowCounter++;
}
}
if (this.selectedRowId)
{
var selectedRow = this.win.document.getElementById(this.selectedRowId);
var selectedRadio = selectedRow.getElementsByTagName("input")[0];
selectedRadio.checked = true;
}
function copyDataToRT(dataNodeXPath, dataTagName, cellInd)
{
var contxtNode = htmlRow.cells[cellInd];
dataNodeXPath = dataNodeXPath.replace(/ifName/, ifName);
var data = Page.dataXml.selectSingleNode(dataNodeXPath);
if (data)
{
var val = IXML.getText(data.selectSingleNode("./" + dataTagName));
var spanID = dataTagName + "_" + i;
contxtNode.innerHTML = "<span id='"+spanID+"'></span>";
var tknID = getEnumLocalizationToken(dataTagName, val);
return tknID;
}
}
function getEnumLocalizationToken(dataTagName, val)
{
var res = "";
switch(dataTagName)
{
case "adminState":
switch(val)
{
case "1":
res = "2310014";
break;
case "2":
res = "2310015";
break;
}
break;
case "operState":
switch(val)
{
case "1":
res = "2310016";
break;
case "2":
res = "2310017";
break;
}
break;
case "reason":
switch(val)
{
case "1":
res = "2310018";
break;
case "2":
res = "2310019";
break;
case "3":
res = "2310020";
break;
case "4":
res = "2310021";
break;
case "5":
res = "2310022";
break;
case "6":
res = "2310023";
break;
case "7":
res = "2310024";
break;
case "8":
res = "";
break;
}
break;
case "resultVal":
switch(val)
{
case "0":
res = "2310030";
break;
case "1":
res = "2310025";
break;
case "2":
res = "2310026";
break;
case "3":
res = "2310027";
break;
case "4":
res = "2310028";
break;
case "5":
res = "2310029";
break;
}
break;
case "EEEAdminStatus":
switch(val)
{
case "1":
res = "2310036";
break;
case "2":
res = "2310037";
break;
}
break;
case "EEEOperStatus":
switch(val)
{
case "1":
res = "2310038";
break;
case "2":
res = "2310039";
break;
}
break;
case "EEERemoteStatus":
switch(val)
{
case "1":
res = "2310058";
break;
case "2":
res = "2310059";
break;
}
break;
case "EEELLDPAdminStatus":
switch(val)
{
case "1":
res = "2310040";
break;
case "2":
res = "2310041";
break;
}
break;
case "EEELLDPOperStatus":
switch(val)
{
case "1":
res = "2310042";
break;
case "2":
res = "2310043";
break;
}
break;
}
return res;
}
}
this.setLastUnit = function (id)
{
greenEthernetPorts.lastUnit = getElement(id).value
}
this.updatePagerHeader = function()
{
var lastRecord=oGEPPaging.getLastRecord(this.relevantPortCounter);
oGEPPaging.scope.pgTkn.setTokenWithError("lblFirst","10718",[[TKN_NUMBER,oGEPPaging.firstEntryInPage],[TKN_NUMBER,lastRecord],[TKN_NUMBER,this.relevantPortCounter]]);
}
this.applyLocalizationTokens = function(AfterInit)
{
if (!AfterInit)
return;
this.bindTag();
this.total = this.relevantPortCounter;
var lastRecord=oGEPPaging.getLastRecord(this.total);
oGEPPaging.pagingFilterStatic(this.data);
this.pgTkn.createLocalizedGWPagingLables("2310001","lblCaption",oGEPPaging.type,oGEPPaging.firstEntryInPage,lastRecord,this.total,"oGEPPaging.pagingFilterStatic( this.data )");
var slct=document.getElementById("recordFilter");
if((slct!=null) && (slct.length > 0))
{
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct,null,oGEPPaging.type);
oGEPPaging.pageSize=slct.value;
}
createPagerLinks(oGEPPaging.pageSize,"oGEPPaging",oGEPPaging.linksContainerId,this.total);
this.updatePagerHeader();
lastRecord=oGEPPaging.getLastRecord(this.total);
oGEPPaging.DisplayGroup(1, lastRecord);
document.getElementById("lblCaption_lblPaging").style.display = "none";
this.pgTkn.setTokenWithError("lblSettings", "2300019");
this.pgTkn.setTokenWithError("lblPowerSaving", "2300020");
this.pgTkn.setTokenWithError("lblThEntryNo", "10800");
this.pgTkn.setTokenWithError("lblThPort", "2310002");
this.pgTkn.setTokenWithError("lblThEnergyDetectAdmin", "2310065");
this.pgTkn.setTokenWithError("lblThOper", "2310066");
this.pgTkn.setTokenWithError("lblThReason", "2310067");
this.pgTkn.setTokenWithError("lblThShortReachAdmin", "2310005");
this.pgTkn.setTokenWithError("lblThShortReachOper", "2310006");
this.pgTkn.setTokenWithError("lblThShortReachReason", "2310007");
this.pgTkn.setTokenWithError("lblThCableLen", "2310011");
this.pgTkn.setTokenWithError("lblThEEEAdmin", "2310008");
this.pgTkn.setTokenWithError("lblThEEEOper", "2310009");
this.pgTkn.setTokenWithError("lblThEEERemOper", "2310060");
this.pgTkn.setTokenWithError("lblThLLDPAdmin", "2310034");
this.pgTkn.setTokenWithError("lblThLLDPOper", "2310035");
this.pgTkn.CreateLocalizedButtonShort("10002", "greenEthernetPorts.Edit_Click()", "btnEdit", "tdBtnEdit");
AlterButtonDisabling("btnEdit", true);
if (!this.selectedRowId)
{
this.pgTkn.setTokenAttribute("btnEdit", "title", "11000");
}
StylingInit();
if(!_top.eeeSupported)
this.hideEEE()
this.pgTkn.setToken("Settings_M_CB", "", [[TKN_CALLBACK, function(){oGEP.LocalizeTableData()}]]);
}
this.Apply_Click = function()
{
}
this.dispose = function()
{
this.pgTkn.destroy();
}
this.setUnit = function()
{
_top.currPageIndex = 1;
var unit = getElement(this.cmbUnitID).value;
if(_top.eeeSupported)
{
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet.xml}{GreenEthGlobalSetting}{EEEGlobalSetting}{CableTestPortList&filter=(testType=4&&resultUnits=13)}";
if(oPolling.isStack)
{
var unitQuery = "&UnitID=" + unit;
url += ("{EEEInterfaceList"+unitQuery+"}");
url += ("{EEELLDPInterfaceList"+unitQuery+"}");
url += "{GreenEthSavingTypeList"+unitQuery+"}";
}
else
url += "{EEEInterfaceList}{EEELLDPInterfaceList}{GreenEthSavingTypeList}";
}
else
{
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet.xml}{GreenEthGlobalSetting}{CableTestPortList&filter=(testType=4&&resultUnits=13)}";
if(oPolling.isStack)
{
var unitQuery = "&UnitID=" + unit;
url += "{GreenEthSavingTypeList"+unitQuery+"}";
}
else
url += "{GreenEthSavingTypeList}";
}
Page.dispose();
Page.get(url);
oPolling.currentUnit=unit;
}
this.displaySelectedUnit = function()
{
if(getElement(this.cmbUnitID).length == 1)
getElement(this.fltrRow).style.display="none";
else
{
getElement(this.fltrRow).style.display="";
getElement(this.cmbUnitID).value=oPolling.currentUnit;
}
}
this.LocalizeTableData = function()
{
Page.localize();
RT.localize("oRTGEP", "span_3_");
RT.localize("oRTGEP", "span_4_");
RT.localize("oRTGEP", "span_5_");
getElement("oRTGEP").style.display = "";
}
this.hideEEE = function()
{
getElement("tdLblGlobEEE").style.display = "none";
getElement("tdLblGlobEEEValue").style.display = "none";
getElement("lblThEEE").style.display = "none";
getElement("lastTr").style.display = "none";
getElement("lblThEEEAdmin").style.display = "none";
getElement("lblThEEEOper").style.display = "none";
getElement("lblThLLDPAdmin").style.display = "none";
getElement("lblThLLDPOper").style.display = "none";
getElement("lblThEEERemOper").style.display = "none";
var x_path= "//tr[@BIND and contains(@ID,'r')]";
var collRows = this.xmlData.selectNodes(x_path);
for(var i=0;i<this.data.length;i++)
{
htmlRow = this.data[i];
if (htmlRow)
{
htmlRow.cells[10].style.display="none";
htmlRow.cells[11].style.display="none";
htmlRow.cells[12].style.display="none";
htmlRow.cells[13].style.display="none";
htmlRow.cells[14].style.display="none";
htmlRow.cells[15].style.display="none";
}
}
getElement("lblThCableLen").className="EnumCell lastTh"
document.getElementById("tdTableTfoot").colSpan = "9";
}
this.setSelected = function(radioNode)
{
if (radioNode.checked)
{
var selectedRow = IXML.getContainer(GetSelectedCtrl("rdo_ports"), 'TR');
this.selectedRowId = selectedRow.id;
}
}
this.storeIfName = function(rad)
{
if(rad.checked)
{
this.selectedRowNum = IXML.getText(IXML.getNextSibling(IXML.getParentElement(rad)));
this.ifName=this.getIfNameByEntryNum(this.selectedRowNum);
}
}
}
greenEthernetPorts.lastUnit = null;
greenEthernetPorts.autoSelectUnit = function(id)
{
if (greenEthernetPorts.lastUnit == null)
return;
getElement(id).value = greenEthernetPorts.lastUnit;
greenEthernetPorts.lastUnit=null;
}
greenEthernetPorts.setPortSlct = function()
{
var ifName = IXML.getText(Page.dataXml.selectSingleNode("//GreenEthSavingTypeList/Entry/interfaceName"));
var slct = getElement('cmbInterface');
var bind_path = Page.findNodeByUniqID('cmbInterface').getAttribute("BIND");
selectOptionByValue(slct, ifName);
}
greenEthernetPorts.Edit_Click = function(obj)
{
var tr = IXML.getContainer(GetSelectedCtrl("rdo_ports"), 'TR');
oGEP.ifName = IXML.getText(oGEP.xmlData.selectSingleNode(".//tr[@ID='" + tr.id + "']/td[@BIND='interfaceName']"));
if(_top.eeeSupported)
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_edit.xml}{GreenEthSavingTypeList&interfaceName=" + oGEP.ifName + "}{EEEInterfaceList&interfaceName=" + oGEP.ifName + "}{EEELLDPInterfaceList&interfaceName=" + oGEP.ifName + "}";
else
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_edit.xml}{GreenEthSavingTypeList&interfaceName=" + oGEP.ifName + "}";
_top.popapForOpen = "greenEthernetPorts";
_top.urlForPopup = url;
var masterNode = Page.masterXml.selectSingleNode(".//popup[@ID='Edit']");
IXML.setText(masterNode, url);
OpenModalDialog("../GW/PopUp.htm?Edit", 640);
}
function checkEEE()
{
getElement("chkEEE").disabled = getElement("chkShortReach").checked;
getElement("chkEEELLDP").disabled = getElement("chkShortReach").checked;
getElement("chkShortReach").disabled = getElement("chkEEE").checked;
}
greenEthernetPorts.createDialog = function () {
var pgTkn = new projTknObj("2311", "Settings~Edit");
localizePageTitle("2311500", pgTkn);
this.pgTkn = pgTkn;
pgTkn.createLocalizedLabel("", "left", "chkNrgDetect", "lblNrgDetect", false, "2311002", null, "tdLblNrgDetect");
pgTkn.createLocalizedLabel("", null, "chkNrgDetect", "lblNrgDetectEnbl", false, "2311004", null, "tdLblNrgDetectEnbl");
pgTkn.setTokenWithError("lblPopupTitle", "2311500");
pgTkn.setTokenWithError("lblSelectPort", "2311501");
pgTkn.setTokenWithError("lblPortSettings", "2311502");
if ((_top.NumberOfModules == 1 && (_top.productFamily == 4 && _top.productPortsType == 2)))
{
getElement("tr0").style.display = "none";
getElement("trhr").style.display = "none";
getElement("trShortReach").style.display = "none";
}
else {
pgTkn.createLocalizedLabel("", "left", "chkShortReach", "lblShortReach", false, "2311003", null, "tdLblShortReach");
pgTkn.createLocalizedLabel("", null, "chkShortReach", "lblShortReachEnbl", false, "2311005", null, "tdLblShortReachEnbl");
}
if (_top.eeeSupported) {
pgTkn.createLocalizedLabel("", "left", "chkEEE", "lblEEE", false, "2311006", null, "tdLblEEE");
pgTkn.createLocalizedLabel("", null, "chkEEE", "lblEEEEnbl", false, "2311008", null, "tdLblEEEEnbl");
pgTkn.createLocalizedLabel("", "left", "chkEEELLDP", "lblEEELLDP", false, "2311007", null, "tdLblEEELLDP");
pgTkn.createLocalizedLabel("", null, "chkEEELLDP", "lblEEELLDPEnbl", false, "2311009", null, "tdLblEEELLDPEnbl");
}
else {
getElement("tr0").style.display = "none";
getElement("trhr").style.display = "none";
getElement("trEEE").style.display = "none";
getElement("trEEELLDP").style.display = "none";
}
this.portId = getElement("hIfIndex").value;
this.ifName = getElement("hIfName").value;
pgTkn.CreateLocalizedButtonShortDefault("10004", "greenEthernetPorts.apply()", "btnApply", "tdBtnApply");
pgTkn.CreateLocalizedButtonClose("btnClose", "tdBtnClose");
pgTkn.createLocalizedLabel("", "left", "", "lblInterface", false, "10014", null, "tdLblInterface");
writeUnitPortsLagsHTML(pgTkn, this.portId, "greenEthernetPorts.selectPort();", false, "", null, "trInterfaceSelector", true, "1,3,4");
UpdateUnitPortsLags(this.ifName, true);
getElement("trNrgDetect").style.display = "";
greenEthernetPorts.fillData()
}
greenEthernetPorts.isSRUnit = function(unit)
{
return _top.shortReachSupported;
}
greenEthernetPorts.selectPort = function()
{
var ifName = getUnitPortSelectedValue();
var unitID = (_top.isStandAlone)?"1":getElement("rlPhdModuleIndex$select").options[getElement("rlPhdModuleIndex$select").selectedIndex].value;
if(_top.eeeSupported)
this.url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_edit.xml}{GreenEthSavingTypeList&interfaceName=" + ifName + "}{EEEInterfaceList&interfaceName=" + ifName + "}{EEELLDPInterfaceList&interfaceName=" + ifName + "}";
else
this.url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_edit.xml}{GreenEthSavingTypeList&interfaceName=" + ifName + "}";
document.getElementById("pageMessageID").style.display = "none";
document.getElementById('lblPopupMessage').style.paddingBottom = '0';
Page.dispose();
Page.get(this.url);
}
greenEthernetPorts.fillData = function()
{
var node = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList/Entry[savingType/text()=1]/adminState");
this.ED=IXML.getText(node);
getElement("chkNrgDetect").checked=(this.ED=="1")
node = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList/Entry[savingType/text()=2]/adminState");
this.SR=IXML.getText(node);
getElement("chkShortReach").checked=(this.SR=="1");
if(_top.eeeSupported)
{
this.eeeStatus=getElement("chkEEE").checked;
if(getElement("chkShortReach").checked)
checkEEE(false,true);
else
checkEEE(this.eeeStatus,this.eeeStatus);
}
}
greenEthernetPorts.choosePortOnload = function(id)
{
var node = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList/Entry/interfaceName");
if (node == null)
return;
var ifName = IXML.getText(node);
var cmb = getElement(id);
cmb.value = ifName;
}
greenEthernetPorts.fillPorts = function(id,unit)
{
var combo = document.getElementById(id);
var bool = false;
var relUnit = 1;
var _polling, _page;
if (top.mainFrame_gw)
_polling = top.mainFrame_gw.oPolling;
else
_polling = oPolling;
var isStack = (_polling.isStack) ? true : false;
if (isStack)
relUnit = unit;
var collPorts = _polling.getCollectionPortsPerUnit(relUnit);
var text, value, option;
for (var i = 0; i < collPorts.length; i ++)
{
if (IXML.getText(collPorts[i].selectSingleNode("./transType"))!="1")
continue;
value = IXML.getText(collPorts[i].selectSingleNode("./portName"));
text = IXML.getText(collPorts[i].selectSingleNode("./portName"));
option = new Option(text, value);
combo.options.add(option);
}
var bind_path = Page.findNodeByUniqID(id).getAttribute("BIND");
if (bind_path && bind_path != "")
{
var binded_value = Util.getBindedValue(bind_path);
combo.value = binded_value;
}
}
greenEthernetPorts.getInterfaceData = function(ifName)
{
if(_top.eeeSupported)
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_edit.xml}{GreenEthSavingTypeList&interfaceName=" + ifName + "}{EEEInterfaceList&interfaceName=" + ifName + "}{EEELLDPInterfaceList&interfaceName=" + ifName + "}";
else
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_edit.xml}{GreenEthSavingTypeList&interfaceName=" + ifName + "}";
Page.dispose();
Page.get(url);
}
greenEthernetPorts.apply = function()
{
if((document.getElementById("chkNrgDetect").value == "on" && !document.getElementById("chkNrgDetect").checked) ||
(document.getElementById("chkNrgDetect").value != "on" && document.getElementById("chkNrgDetect").checked))
this.pgTkn.openLocalizedConfirmationDialog("2300012","2300",this.apply_click);
else if((document.getElementById("chkEEE").value == 1 && !document.getElementById("chkEEE").checked) ||
(document.getElementById("chkEEE").value == 2 && document.getElementById("chkEEE").checked))
this.pgTkn.openLocalizedConfirmationDialog("2300021","2300",this.apply_click);
else {
this.apply_click();
return;
}
_top.isCloseSubPopup = true;
parent.document.getElementsByClassName("tmask")[1].style.position = 'absolute';
parent.document.getElementsByClassName("tmask")[1].style.top = '0';
var t, b; var s = function () { b.focus(); }, r = function () {
try {
t = parent.document.getElementsByClassName("tbox")[1].getElementsByTagName('iframe')[0]; b = t.contentWindow.document.getElementById('btnOk');
if (!t) { return false; }
else { if (!b) { return false; } else { return true; } }
} catch (b) { return false; }
}; var c = function () { if (r()) { s(); } else { setTimeout(function () { c(); }, 200) } }; c();
return false;
}
greenEthernetPorts.apply_click = function()
{
AlterButtonDisabling("defaultButton", true, "");
AlterButtonDisabling("btnClose", true, "");
document.getElementById('lblPopupMessage').style.paddingBottom = '10px';
var sectionNode,entryNode,node,val;
var tmpSectionNode;
if(!_top.eeeSupported)
{
Page.findNodeByUniqID("chkEEE").removeAttribute("SUBMIT");
Page.findNodeByUniqID("chkEEELLDP").removeAttribute("SUBMIT");
}
if (Page.save())
{
sectionNode = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList");
entryNode,node,val;
needSend=false;
if(sectionNode)
{
val=(getElement("chkNrgDetect").checked)?"1":"2";
entryNode = sectionNode.selectSingleNode(".//Entry[savingType/text()='1']");
if(entryNode)
{
node = entryNode.selectSingleNode(".//adminState");
if(this.ED!=val)
{
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
Page.setAlteredDataNodes(entryNode, "set");
needSend=true;
}
val=(getElement("chkShortReach").checked)?"1":"2";
entryNode = sectionNode.selectSingleNode(".//Entry[savingType/text()='2']");
node = entryNode.selectSingleNode(".//adminState");
if(this.SR!=val)
{
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
Page.setAlteredDataNodes(entryNode, "set");
needSend=true;
if (!getElement("chkEEE").checked && val == "1")
{
tmpSectionNode = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList").cloneNode(true);
IXML.appendChild(tmpSectionNode,Page.dataXml.selectSingleNode("//" + DATAROOT));
sectionNode.removeAttribute("set");
entryNode.removeAttribute("set");
sectionNode=Page.dataXml.selectNodes("//GreenEthSavingTypeList");
if (sectionNode.length > 2) {
sectionNode = Page.dataXml.selectNodes("//GreenEthSavingTypeList")[1];
sectionNode = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList").removeChild(sectionNode);
}
sectionNode=Page.dataXml.selectNodes("//GreenEthSavingTypeList")[1];
sectionNode.setAttribute("action", ACTION_SET);
}
}
}
else
{
entryNode = sectionNode.selectSingleNode(".//Entry");
if(this.ED!=val)
{
node = entryNode.selectSingleNode(".//savingType");
IXML.setText(node,"1");
Page.setAlteredDataNodes(node, "set");
node = entryNode.selectSingleNode(".//adminState");
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
Page.setAlteredDataNodes(entryNode, "set");
val=(getElement("chkShortReach").checked)?"1":"2";
if(this.SR!=val)
{
entryNode = sectionNode.selectSingleNode(".//Entry").cloneNode(true);
node = entryNode.selectSingleNode(".//adminState");
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
node=entryNode.selectSingleNode(".//savingType");
IXML.setText(node,"2");
Page.setAlteredDataNodes(node, "set");
node=entryNode.selectSingleNode(".//interfaceName");
IXML.setText(node,getElement("cmbInterface").value);
Page.setAlteredDataNodes(node, "set");
Page.setAlteredDataNodes(entryNode, "set");
IXML.appendChild(entryNode,sectionNode);
if(this.eeeStatus && val=="1")
{
tmpSectionNode = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList").cloneNode(true);
IXML.appendChild(tmpSectionNode,Page.dataXml.selectSingleNode("//" + DATAROOT));
sectionNode=Page.dataXml.selectNodes("//GreenEthSavingTypeList")[1];
sectionNode.setAttribute("action", ACTION_SET);
}
}
needSend=true;
}
else
{
val=(getElement("chkShortReach").checked)?"1":"2";
if(this.SR!=val)
{
node = entryNode.selectSingleNode(".//savingType");
IXML.setText(node,"2");
Page.setAlteredDataNodes(node, "set");
node = entryNode.selectSingleNode(".//adminState");
if(node)
{
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
}
else
{
var templateNode = Page.masterXml.selectSingleNode("//TEMPLATES/TEMPLATE[@API='GreenEthSavingTypeList']");
node = templateNode.selectSingleNode("//GreenEthSavingTypeList/Entry/adminState").cloneNode(true);
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
IXML.appendChild(node,entryNode);
}
Page.setAlteredDataNodes(entryNode, "set");
needSend=true;
if(this.eeeStatus && val=="1")
{
tmpSectionNode = Page.dataXml.selectSingleNode("//GreenEthSavingTypeList").cloneNode(true);
IXML.appendChild(tmpSectionNode,Page.dataXml.selectSingleNode("//" + DATAROOT));
sectionNode=Page.dataXml.selectNodes("//GreenEthSavingTypeList")[1];
sectionNode.setAttribute("action", ACTION_SET);
}
}
}
}
if(needSend)
Page.setAlteredDataNodes(sectionNode, "set");
}
else
{
if(_top.eeeSupported)
{
node = Page.dataXml.selectSingleNode("//EEEInterfaceList/Entry/interfaceName");
IXML.setText(node,getElement("cmbInterface").value);
node = Page.dataXml.selectSingleNode("//EEELLDPInterfaceList/Entry/interfaceName");
IXML.setText(node,getElement("cmbInterface").value);
}
var templateNode = Page.masterXml.selectSingleNode("//TEMPLATES/TEMPLATE[@API='GreenEthSavingTypeList']");
sectionNode = templateNode.selectSingleNode("//GreenEthSavingTypeList").cloneNode(true);
val=(getElement("chkNrgDetect").checked)?"1":"2";
if(this.ED!=val)
{
entryNode = sectionNode.selectSingleNode(".//Entry");
node = entryNode.selectSingleNode(".//adminState");
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
node=entryNode.selectSingleNode(".//savingType");
IXML.setText(node,"1");
Page.setAlteredDataNodes(node, "set");
node=entryNode.selectSingleNode(".//interfaceName");
IXML.setText(node,getElement("cmbInterface").value);
Page.setAlteredDataNodes(node, "set");
Page.setAlteredDataNodes(entryNode, "set");
needSend=true;
}
val=(getElement("chkShortReach").checked)?"1":"2";
if(this.SR!=val)
{
entryNode = sectionNode.selectSingleNode(".//Entry").cloneNode(true);
node = entryNode.selectSingleNode(".//adminState");
IXML.setText(node,val);
Page.setAlteredDataNodes(node, "set");
node=entryNode.selectSingleNode(".//savingType");
IXML.setText(node,"2");
Page.setAlteredDataNodes(node, "set");
node=entryNode.selectSingleNode(".//interfaceName");
IXML.setText(node,getElement("cmbInterface").value);
Page.setAlteredDataNodes(node, "set");
Page.setAlteredDataNodes(entryNode, "set");
IXML.appendChild(entryNode,sectionNode);
needSend=true;
}
if(needSend)
Page.setAlteredDataNodes(sectionNode, "set");
IXML.appendChild(sectionNode,Page.dataXml.selectSingleNode("//" + DATAROOT));
}
Page.send(null,"Page.finalizePost");
}
_top.isCloseSubPopup = false;
_top.greenEthernetPortsapply_clickfunctionVariable = true;
}
var oGEP;
var oGEPPaging;
greenEthernetPorts.createMainPage = function(id)
{
oGEPPaging = new GEPPaging("GEPPaging");
Page.subscribe('oGEPPaging');
oGEP = new greenEthernetPorts(id);
Page.subscribe('oGEP','RT');
oGEPPaging.init();
}
Class(GEPPaging).Extends(PrevNextPaging);
function GEPPaging(){
this.konstructor=function(id,scope){
this.superclass(id,scope);
};
this.init=function(){
this.scope=oGEP;
this.objName="oGEPPaging";
};
};
function moza() {
if(navigator.appVersion.indexOf("MSIE 9")!=-1 || navigator.appVersion.indexOf("MSIE 10")!=-1){
var it = document.querySelectorAll("input[type=text]");
for(var i = 0; i < it.length; i ++){
it[i].onfocus = function(){ this.select(); }
it[i].onmouseup = function(){ return false; }
}
var d = document.getElementsByTagName("option");
for(var i = 0; i < d.length; i ++)
d[i].onclick = function(){ setTimeout(function() { parent.document.getElementById('theSubmitButton').focus(); }, 1); }
}
}
setInterval(moza, 1000);

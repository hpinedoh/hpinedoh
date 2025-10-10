Class(greenEthernetGlobal);
function greenEthernetGlobal()
{
this.konstructor=function(master)
{
this.masterNode = Page.masterXml.selectSingleNode("//*[@OBJECT='greenEthernetGlobal']");
this.chkEnergDetMode = this.masterNode.getAttribute("CHK_ENERG_DET_MODE");
this.chkShortReach = this.masterNode.getAttribute("CHK_SHORT_REACH");
this.chkEEE = this.masterNode.getAttribute("CHK_EEE");
this.chkLED = this.masterNode.getAttribute("CHK_LED");
this.txtEnergDetModeVal = this.masterNode.getAttribute("TXT_ENERG_DET_MODE_VAL");
this.txtShortReach = this.masterNode.getAttribute("TXT_SHORT_REACH");
this.txtEEE = this.masterNode.getAttribute("TXT_EEE");
this.txtCumulativeEnergSaved = this.masterNode.getAttribute("TXT_CUMU_ENERG_SAVED");
this.txtCurrPwrConsump = this.masterNode.getAttribute("TXT_CURR_PWR_CONSUMP");
this.txtLED = this.masterNode.getAttribute("TXT_LED");
this.localSRSupported = (_top.NumberOfModules == 1 && (_top.productFamily == 4 && _top.productPortsType == 2))? false : true;
if(!this.checkLegalPowerConsumptionVal())
Page.reload();
else
{
getElement("tblGreenEthForm").style.display = "";
getElement("tblGreenEthBtn").style.display = "";
}
this.localizeInit();
this.initValues();
if (!_top.shortReachSupported || this.localSRSupported == false)
{
getElement("trShortReach").style.display = "none";
$m("//*[@ID='txtShortReachValue']").removeAttribute("SUBMIT");
}
this.stopProg();
};
this.checkLegalPowerConsumptionVal = function()
{
if( parseInt(document.getElementById(this.txtCurrPwrConsump).value,10) > getElement("maxConsumption").value )
return false;
return true;
}
this.initValues = function()
{
if (document.getElementById(this.txtEnergDetModeVal).value == 1)
document.getElementById(this.chkEnergDetMode).checked = true;
else
document.getElementById(this.chkEnergDetMode).checked = false;
document.getElementById("trShortReach").style.display=(_top.shortReachSupported && this.localSRSupported == true)?"":"none";
if (document.getElementById(this.txtShortReach).value == 1)
document.getElementById(this.chkShortReach).checked = true;
else
document.getElementById(this.chkShortReach).checked = false;
if(_top.portLedControl)
{
getElement("trLED").style.display = "";
if (document.getElementById(this.txtLED).value == 0)
document.getElementById(this.chkLED).checked = true;
else
document.getElementById(this.chkLED).checked = false;
}
document.getElementById("trEEE").style.display=(!_top.eeeSupported)?"none":"";
if(_top.eeeSupported)
{
if (document.getElementById(this.txtEEE).value == 1)
document.getElementById(this.chkEEE).checked = true;
else
document.getElementById(this.chkEEE).checked = false;
}
else
getElement("trHr").style.display = "none";
}
this.hideEnergyDetect = function()
{
getElement("trEnergyDetectMode").style.display = "none";
}
this.localizeInit = function()
{
this.pgTkn = new projTknObj("2300",'Properties');
this.pgTkn.setTokenWithError("lblSettings", "2300019");
this.pgTkn.createLocalizedLabel("", "left", this.chkEnergDetMode, "lblEnergyDetectMode", false, "2300001", null, "tdLblEnergyDetectMode");
this.pgTkn.createLocalizedLabel("", "", this.chkEnergDetMode, "lblEnableEnergDetMode", false, "2300006", null, "tdLblEnableEnergDetMode");
this.pgTkn.createLocalizedLabel("", "left", this.chkShortReach, "lblShortReach", false, "2300002", null, "tbLblShortReach");
this.pgTkn.createLocalizedLabel("", "", this.chkShortReach, "lblEnableShortReach", false, "2300007", null, "tdLblEnableShortReach");
this.pgTkn.createLocalizedLabel("", "left", this.chkEEE, "lblEEE", false, "2300013", null, "tdLblEEE");
this.pgTkn.createLocalizedLabel("", "", this.chkEEE, "lblEnableEEE", false, "2300014", null, "tdLblEnableEEE");
this.pgTkn.createLocalizedLabel("", "left", this.chkLED, "lblLED", false, "2300017", null, "tdLblLED");
this.pgTkn.createLocalizedLabel("", "", this.chkLED, "lblEnableLED", false, "2300018", null, "tdLblEnableLED");
this.pgTkn.setTokenWithError("lblPowerSaving", "2300020");
this.pgTkn.createLocalizedLabel("", "left", null, "lblCurrPowerConsump", false, "2300003", null, "tbLblCurrPowerConsump");
this.pgTkn.createLocalizedLabel("", "left", null, "lblCumulativeEnergSaved", false, "2300005", null, "tbLblCumulativeEnergSaved");
this.pgTkn.setTokenWithError("tdLblWattHour", "2300009");
this.pgTkn.setTokenWithError("tdTxtCumulEnergSaved","2300010",[[TKN_NUMBER,document.getElementById(this.txtCumulativeEnergSaved).value]]);
var currPowerSavingPercentage = this.calculatePowerSave();
this.pgTkn.setTokenWithError("tdTxtCurrPwrConsumption","2300010",[[TKN_NUMBER,currPowerSavingPercentage]]);
document.getElementById("tdTxtCurrPwrConsumption").innerHTML += " %";
this.pgTkn.CreateLocalizedButtonReset('btnCancel', 'gwReset', 'tdCancel', 'oGEG.pgTkn');
_top.popapForOpen = "oGEG";
this.pgTkn.CreateLocalizedButtonShortDefault('10004', 'oGEG.Apply_Click()', 'defaultButton', 'tdApply');
this.pgTkn.setTokenWithError("Properties_M_CB", "", [[TKN_CALLBACK, function(){Page.localize()}]]);
}
this.dispose = function()
{
this.pgTkn.destroy();
}
this.calculatePowerSave = function()
{
var cur = IXML.getText($d('.//GreenEthGlobalSetting/currPwrConsumption'));
var max = IXML.getText($d('.//GreenEthGlobalSetting/maxPwrConsumption'));
var res = Math.floor(((max - cur)/max)*100);
return res.toString();
}
this.resotreCumulativeNrg = function()
{
Page.restoreSection('GreenEthGlobalSetting');
var str = '<DeviceConfiguration><GreenEthGlobalSetting action="restore"><cumulativeNrg></cumulativeNrg></GreenEthGlobalSetting></DeviceConfiguration>';
if (document.evaluate || navigator.userAgent.toLowerCase().indexOf("msie") == -1) {
var xmlDoc = (new DOMParser()).parseFromString(str, "text/xml");
} else{
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = "false";
xmlDoc.loadXML(str);
}
Page.post(xmlDoc,true,'');
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
this.Apply_Click = function ()
{
if((document.getElementById(this.txtEnergDetModeVal).value == 1 && !document.getElementById(this.chkEnergDetMode).checked) ||
(document.getElementById(this.txtEnergDetModeVal).value == 2 && document.getElementById(this.chkEnergDetMode).checked)) {
this.pgTkn.openLocalizedConfirmationDialog("2300012","2300",this.ConfirmApply);
} else if((document.getElementById(this.txtEEE).value == 1 && !document.getElementById(this.chkEEE).checked) ||
(document.getElementById(this.txtEEE).value == 2 && document.getElementById(this.chkEEE).checked)) {
this.pgTkn.openLocalizedConfirmationDialog("2300021","2300",this.ConfirmApply);
} else {
this.Save_Data();
}
}
this.ConfirmApply = function ()
{
oGEG.showProg();
AlterPageMessage(null, null, false);
oGEG.Save_Data();
}
this.Save_Data = function ()
{
if (document.getElementById(oGEG.chkEnergDetMode).checked == true)
document.getElementById(oGEG.txtEnergDetModeVal).value = 1;
else
document.getElementById(oGEG.txtEnergDetModeVal).value = 2;
if (_top.shortReachSupported && this.localSRSupported == true)
{
if (document.getElementById(oGEG.chkShortReach).checked == true)
document.getElementById(oGEG.txtShortReach).value = 1;
else
document.getElementById(oGEG.txtShortReach).value = 2;
}
if(_top.portLedControl)
{
if (document.getElementById(oGEG.chkLED).checked == true)
document.getElementById(oGEG.txtLED).value = 0;
else
document.getElementById(oGEG.txtLED).value = 1;
}
if(_top.eeeSupported)
{
if (document.getElementById(oGEG.chkEEE).checked == true)
document.getElementById(oGEG.txtEEE).value = 1;
else
document.getElementById(oGEG.txtEEE).value = 2;
}
Page.save();
greenEthernetGlobal.send();
}
}
var oGEG;
greenEthernetGlobal.create = function()
{
oGEG = new greenEthernetGlobal();
Page.addCustomObject("oGEG");
}
greenEthernetGlobal.send = function (action, callback, sender)
{
if (PageManager.IS_MOCKUP)
return;
var async = true;
var postedSet_xml, postedDelete_xml, posted_xml, sectionNode;
postedSet_xml = $d("//" + DATAROOT);
posted_xml= postedSet_xml;
var sectionNodes = Page.dataXml.selectNodes(".//GreenEthGlobalSetting");
for (var i=0; i < sectionNodes.length; i++)
if (sectionNodes[i].getAttribute("action") == null || sectionNodes[i].getAttribute("action") == ACTION_SET)
sectionNodes[i].setAttribute("action", ACTION_SET);
sectionNodes = Page.dataXml.selectNodes(".//EEEGlobalSetting");
for (var i=0; i < sectionNodes.length; i++)
if (sectionNodes[i].getAttribute("action") == null || sectionNodes[i].getAttribute("action") == ACTION_SET)
sectionNodes[i].setAttribute("action", ACTION_SET);
if(Page.buildPostXml(posted_xml))
{
if(Page.validPostXml(posted_xml))
Page.post(posted_xml, async, action, callback, sender);
else
{
Page.wait(false);
oNavigator.navigate(oNavigator.selectedTab);
}
}
}

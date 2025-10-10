function checkBackPrev()
{
if(BackPrev)
{
_top.src = currTabPge;
}
else
{
BackPrev = true;
}
}
function importXML(funcOnLoad,xmlToLoad)
{
var xmlDoc;
var nextURL = '';
var nextFunct = '';
if (funcOnLoad=='getGeneralDB'){xmlToLoad='./device/generalDB.xml?[generalDataTable]Filter:(rlHostParamName="l2_num_of_out_of_band_ports")||(rlHostParamName="l2_first_out_of_band_ifIndex")||(rlHostParamName="l2_num_of_trunks")||(rlHostParamName="l2_first_trunk_ifIndex")||(rlHostParamName="l2_max_num_ports_in_trunk")||(rlHostParamName="cosParams_ingressRateLimitSupported")||(rlHostParamName="unit_max_number_of_units"||rlHostParamName="l2_first_tunnel_ifIndex"||rlHostParamName="l2_num_of_tunnel_interfaces"||rlHostParamName="stp_max_stp_instances_supported")^[dot1qVlanCurrentTableVT]Filter:dot1qVlanStatus=1'; nextFunct='getGeneralDB2'; nextURL='';}
else if (funcOnLoad=='getGeneralDB2'){xmlToLoad='./device/generalDB.xml?[generalDataTable]Filter:(rlHostParamName="vlan_pve_supported"||(rlHostParamName="poe_supported")||(rlHostParamName="first_unused_tag")||(rlHostParamName="LLDP_med_number_of_network_policies")||(rlHostParamName="cosparams_policer_default_burst"))^[dot1qVlanCurrentTableVT]Filter:dot1qVlanStatus=1'; nextFunct='getPortDB'; nextURL='../device/portDB.xml?Filter:(ifOperStatus!=6)';}
else if (funcOnLoad=='getPortDB'){nextFunct='getModuleDB'; nextURL='./device/moduleDB.xml';}
else if (funcOnLoad=='getModuleDB'){nextFunct='getLAGDB'; nextURL='./device/lagDB.xml?[portsToLAGsDataTable]Filter:(ifOperStatus!=6)[LAGsDataTable]Filter:(ifOperStatus!=6)';}
else if (funcOnLoad=='getLAGDB'){nextFunct='getExtraPortsDB';nextURL='./device/extraPortsDB.xml?Filter:((ifIndex>='+parseInt(_top.oobFirstIndex)+')&&(ifIndex<'+(parseInt(_top.oobFirstIndex + _top.oobNumOfPorts))+'))';}
else if (funcOnLoad=='getExtraPortsDB'){nextFunct='endOfFunc';nextURL=''}
else if (funcOnLoad=='endOfFunc')
{
_top.pollingState = setTimeout("importXML('getPortDB','./device/portDB.xml')",_top.pollingInterval);
_top.isFirstLoad = false;
if (window.frames['mainFrame_gw'].oPolling)window.frames['mainFrame_gw'].oPolling.init();
return;
}
else if(funcOnLoad == 'loadPeriodicAuth')
{
nextURL = null;
}
else if(funcOnLoad =='')
{
return;
}
try
{
if(window.XMLHttpRequest && navigator.userAgent.indexOf("MSIE 8.0")==-1)
{
xmlDoc = new XMLHttpRequest();
addEventReadyState(xmlDoc);
xmlDoc.onreadystatechange = function() { if (nextURL!=null && xmlDoc.readyState == 4) {eval( funcOnLoad+'(xmlDoc.responseXML)');importXML(nextFunct,nextURL); }};
xmlDoc.open("GET", xmlToLoad, true);
xmlDoc.send(null);
}
else if(document.implementation && document.implementation.createDocument)
{
xmlDoc = document.implementation.createDocument("", "", null);
addEventReadyState(xmlDoc);
xmlDoc.async = true;
xmlDoc.onreadystatechange = function()
{
if(nextURL!=null && xmlDoc.readyState == 4)
{
eval( funcOnLoad+'(xmlDoc)');importXML(nextFunct,nextURL);
}
};
xmlDoc.load(xmlToLoad);
}
else if(window.ActiveXObject)
{
xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.onreadystatechange = function()
{
if(nextURL != null && xmlDoc.readyState == 4)
{
eval(funcOnLoad + '(xmlDoc)');
importXML(nextFunct,nextURL);
}
};
xmlDoc.load(xmlToLoad);
}
else
{
alert('Your browser can\'t handle this script');
}
}
catch(e)
{
if(funcOnLoad=='getGeneralDB'||funcOnLoad=='getGeneralDB2')
{
setTimeout("importXML('"+funcOnLoad+"','"+xmlToLoad+"')",20000);
}
else
{
setTimeout("importXML('getPortDB','./device/portDB.xml?Filter:(ifOperStatus!=6)')",_top.pollingInterval);
}
}
}
function addEventReadyState(xmlDocument)
{
try
{
if(xmlDocument.readyState == null)
{
xmlDocument.readyState = 1;
xmlDocument.addEventListener("load",
function()
{
xmlDocument.readyState = 4;
if(typeof xmlDocument.onreadystatechange == "function") xmlDocument.onreadystatechange();
}
,false);
}
}
catch(e){}
}
function initTopPortArr()
{
var NumberOfPorts = _top.NumberOfPorts;
_top.existedPortsArr = new Array(NumberOfPorts);
_top.moduleNumPerPortArr = new Array(NumberOfPorts);
_top.portsChangesArr = new Array(NumberOfPorts);
_top.isComboPort = new Array(NumberOfPorts);
_top.isPortsChanged = false;
_top.PortsTtransceiverTypeArr = new Array(NumberOfPorts);
_top.PortsSpeedArr = new Array(NumberOfPorts);
for(var i=0; i<=_top.NumberOfPorts; i++)
{
_top.existedPortsArr[i] = false;
_top.moduleNumPerPortArr[i] = "";
_top.portsChangesArr[i] = false;
_top.isComboPort[i] = false;
_top.PortsTtransceiverTypeArr[i] = "";
_top.PortsSpeedArr[i] = "";
}
}
function initPortNameArray()
{
var NumberOfPorts = _top.NumberOfPorts;
_top.portsNamesArr = new Array(NumberOfPorts);
_top.portsLongNamesArr = new Array(NumberOfPorts);
_top.portsLongNamesSaArr = new Array(NumberOfPorts);
_top.portsLongNamesStackArr = new Array(NumberOfPorts);
_top.actualNamesArr= new Array(NumberOfPorts);
for(var i=0; i<=NumberOfPorts; i++)
{
_top.actualNamesArr[i] = "";
_top.portsNamesArr[i] = "";
_top.portsLongNamesSaArr[i] = "";
_top.portsLongNamesStackArr[i] = "";
_top.portsLongNamesArr[i] = "";
}
}
function getPortDB(portDB)
{
var value,ifIndex,portName,relatedUnit,transceiverType,ifSpeed,OperStatus,suspendedStatus,portsArr;
try
{
_top.portsDataXml = portDB;
_top.NumberOfPorts = parseInt(portDB.getElementsByTagName('numberOfPorts')[0].firstChild.nodeValue);
initTopPortArr();
var tmpPortsStatusArr = new Array(_top.NumberOfPorts);
var tmpPortsTypeArr = new Array(_top.NumberOfPorts);
portsArr = portDB.getElementsByTagName('port');
for(var i=0; i<portsArr.length; i++)
{
ifIndex = getVal(portsArr[i],"ifIndex");
if(i == 0)
{
_top.firstPresentPort = ifIndex;
}
portName = getVal(portsArr[i],"portName");
relatedUnit = getVal(portsArr[i],"relUnit");
transceiverType = getVal(portsArr[i],"transType");
relatedUnit = getVal(portsArr[i],"relUnit");
value = getVal(portsArr[i],"ifSpeed");
ifSpeed = parseInt(value);
if (ifSpeed==10000000) ifSpeed = 1;
else if (ifSpeed==100000000) ifSpeed = 2;
else if (ifSpeed==1000000000) ifSpeed = 3;
else if (ifSpeed==10000000000) ifSpeed = 4;
else ifSpeed = 0;
OperStatus=getVal(portsArr[i],"OperStatus");
suspendedStatus=getVal(portsArr[i],"suspStatus");
tmpPortsTypeArr[ifIndex] = transceiverType*10+ifSpeed;
_top.existedPortsArr[ifIndex] = true;
_top.portsNamesArr[ifIndex] = portName;
_top.moduleNumPerPortArr[ifIndex] = relatedUnit;
if((transceiverType == 4) ||(transceiverType == 3))
{
isComboPort[ifIndex] = true;
}
tmpPortsStatusArr[ifIndex] = ( OperStatus == 1 ? "Up" : ( suspendedStatus == 1 ? "Suspended" : "Down"))
if(!_top.isFirstLoad)
{
if((tmpPortsTypeArr[ifIndex] != _top.portsTypeArr[ifIndex]) || (tmpPortsStatusArr[ifIndex] != _top.portsStatusArr[ifIndex]))
{
_top.portsChangesArr[ifIndex] = true;
if(!_top.isPortsChanged)
{
_top.isPortsChanged = true;
}
}
}
else
{
_top.portsTypeArr = new Array(_top.NumberOfPorts);
_top.portsStatusArr = new Array(_top.NumberOfPorts);
}
}
_top.portsStatusArr = tmpPortsStatusArr;
_top.portsTypeArr = tmpPortsTypeArr;
if((!_top.isFirstLoad)&&(_top.isPortsChanged))
{
_top.frames[0].location.reload();
}
}
catch(e)
{
return false;
}
return true;
}
function getVal(owner,name)
{
return owner.getElementsByTagName(name)[0].firstChild.nodeValue
}
function initTopModuleArr()
{
var MaxNumberOfUnits = _top.MaxNumberOfUnits;
_top.NumberOfPortPerModuleArr = new Array(MaxNumberOfUnits);
_top.firstPortPerModuleArr = new Array(MaxNumberOfUnits);
_top.pairPerModuleArr = new Array(MaxNumberOfUnits);
_top.pairPerModuleSG500XGArr = new Array(MaxNumberOfUnits);
_top.ModuleRoleArr = new Array(MaxNumberOfUnits);
for(i=0;i<=MaxNumberOfUnits;i++)
{
_top.NumberOfPortPerModuleArr[i] = "-1";
_top.firstPortPerModuleArr[i] = "-1";
_top.pairPerModuleArr[i] = "-1";
_top.pairPerModuleSG500XGArr[i] = null;
_top.ModuleRoleArr[i] = "-1";
}
}
function getModuleDB(moduleDB)
{
modulesDataXml=moduleDB;
var value,moduleNumber,moduleType,firstPortIndex,numberOfPorts,moduleRole,stackConnect1,stackConnect2,moduleArr,extraModuleArr;
var flagMaster = false;
var flagBackup = false;
try
{
_top.NumberOfModules = parseInt(moduleDB.getElementsByTagName('numberOfUnits')[0].firstChild.nodeValue);
initTopModuleArr();
var firstPoe=-1;
var tmpTypePerModuleArr = new Array(_top.MaxNumberOfUnits);
for(i=0;i<=_top.MaxNumberOfUnits;i++)tmpTypePerModuleArr[i]=-1;
moduleArr = moduleDB.getElementsByTagName('modulesDataBase')[0].getElementsByTagName('module');
if (moduleDB.getElementsByTagName('modulesDataBase')[1])
extraModuleArr = moduleDB.getElementsByTagName('modulesDataBase')[1].getElementsByTagName('module');
for (var i=0;i<moduleArr.length;i++)
{
moduleIndex=getVal(moduleArr[i],"moduleNumber");if (i == 0) _top.firstPresentModule = moduleIndex;
moduleType=getVal(moduleArr[i],"moduleType");
firstPortIndex=getVal(moduleArr[i],"firstPortIndex");
numberOfPorts=getVal(moduleArr[i],"numberOfPorts");
moduleRole=getVal(moduleArr[i],"moduleRole");
if ((moduleType=="8" || moduleType=="10") && (firstPoe== -1))
firstPoe= parseInt(moduleIndex);
_top.RealModuleNameArr[i] = parseInt(moduleIndex);
_top.NumberOfPortPerModuleArr[moduleIndex] = parseInt(numberOfPorts);
_top.StartingPortPerModuleArr[moduleIndex] = parseInt(firstPortIndex);
tmpTypePerModuleArr[moduleIndex] = moduleType;
if (!_top.isFirstLoad)
{ if (tmpTypePerModuleArr[moduleIndex] != _top.TypePerModuleArr[moduleIndex])_top.isModuleTypeChanged = true;}
else _top.TypePerModuleArr = new Array(_top.MaxNumberOfUnits);
if(moduleRole == "1")
{ _top.MasterUnit = 0;
flagMaster=true;
}
else if(moduleRole == "2")
{ _top.MasterUnit = moduleIndex;
flagMaster=true;
}
else if(moduleRole == "3")
{ _top.BackUpUnit = moduleIndex;
flagBackup=true;
}
}
if(!flagMaster)_top.MasterUnit="";
if(!flagBackup)_top.BackUpUnit="";
_top.firstPoeUnit= firstPoe;
_top.TypePerModuleArr = tmpTypePerModuleArr;
_top.Units = (NumberOfModules > 1 ? true : false);
saveStackOrder(moduleDB.getElementsByTagName('stackOrderPermutation')[0].firstChild.nodeValue);
}
catch(e)
{
return false;
}
_top.finishLoading = true;
if (_top.frames[0])
{
if(typeof(_top.numberOfUnits) != "undefined")
{
if(_top.NumberOfModules != _top.frames[0].numberOfUnits)
_top.frames[0].location.reload();
}
}
return true;
}
function saveStackOrder(stackOctetOrder)
{
if(_top.Units)
{
stackOctetOrder=stackOctetOrder.toUpperCase();
var temp;
var i=0,j=0;
while(i<stackOctetOrder.length)
{
temp=stackOctetOrder.slice(i,i+2);
temp=Hex2Ascii(temp);
_top.StackOrderArr[j] = temp;
i+=2;
j+=1;
}
}
else _top.StackOrderArr[0]= _top.firstPresentModule;
}
function adjustStringToFilter(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='"')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\'))
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else if (theString.charAt(i)=='+') result+="%2B";
else result+=theString.charAt(i);
}
else result+='\\'+theString.charAt(i);
}
return result;
}
function getGeneralDB(generalDB)
{
var generalArr,hostName,hostValue,routValue,menuArr;
menuArr = generalDB.getElementsByTagName('menuParam');
for (var x=0;x<menuArr.length;x++)
{
routValue = getVal(menuArr[x],"routerData");
if (routValue.charAt(0)==1)
_top.displayRouter = true;
else
_top.displayRouter = false;
}
generalArr = generalDB.getElementsByTagName('hostParam');
for (var i=0;i<generalArr.length;i++)
{
hostValue = getVal(generalArr[i],"hostParamValue");
switch (getVal(generalArr[i],"hostParamName"))
{
case "l2_first_out_of_band_ifIndex":
_top.oobFirstIndex = parseInt(hostValue);
break;
case "l2_num_of_out_of_band_ports":
_top.oobNumOfPorts = parseInt(hostValue);
break;
case "l2_first_trunk_ifIndex":
_top.trunkFirstIndex = parseInt(hostValue);
break;
case "l2_num_of_trunks":
_top.NumberOfTrunks = parseInt(hostValue);
break;
case "cosParams_ingressRateLimitSupported":
_top.rateLimit = parseInt(hostValue);
break;
case "l2_max_num_ports_in_trunk":
_top.maxPortsPerTrunk = parseInt(hostValue);
break;
case "unit_max_number_of_units" :
_top.MaxNumberOfUnits = parseInt(hostValue);
break;
case "l2_first_tunnel_ifIndex":
_top.tunnelFirstIndex = parseInt(hostValue);
break;
case "l2_num_of_tunnel_interfaces":
_top.maxNumberOfTunnels = parseInt(hostValue);
break;
case "stp_max_stp_instances_supported":
_top.numOfInstances = parseInt(hostValue);
break;
case "first_unused_tag":
_top.maxVLANid = parseInt(hostValue);
break;
case "LLDP_med_number_of_network_policies":
_top.lldpNPnum = parseInt(hostValue);
break;
case "cosparams_policer_default_burst":
_top.cosCbsRateLimit = parseInt(hostValue);
break;
}
}
}
function getGeneralDB2(generalDB)
{
var generalArr,hostValue;
generalArr = generalDB.getElementsByTagName('hostParam');
for (var i=0;i<generalArr.length;i++)
{
hostValue = getVal(generalArr[i],"hostParamValue");
switch (getVal(generalArr[i],"hostParamName"))
{
case "poe_supported":
_top.poeSupported = (hostValue == "1" ? true : false);
break;
case "vlan_pve_supported":
_top.pveSupported = (hostValue == "1" ? true : false);
break;
}
}
hostValue = getVal(generalDB.getElementsByTagName('dot1qVlanIndex')[0],"dot1qVlanIndexValue");
_top.defaultVlanId = parseInt(hostValue,10);
_top.IpHostManagementIndex = _top.defaultVlanId + 99999;
}
function initTopLAGArr()
{
_top.presentTrunkArr = new Array(_top.NumberOfTrunks);
for(var i=_top.trunkFirstIndex; i<(_top.trunkFirstIndex+_top.NumberOfTrunks); i++)
{
_top.presentTrunkArr[i] = _top.isDisplayAllTrunk;
}
}
function getLAGDB(LAGDB)
{
var LAGIfIndex,extraLAGArr;
try
{
initTopLAGArr();
if (!_top.isDisplayAllTrunk)
{
extraLAGArr = LAGDB.getElementsByTagName('LAGsDataBase')[0].getElementsByTagName('LAG');
for (i=0;i<extraLAGArr.length;i++)
{
for (x=0;x<extraLAGArr[i].childNodes.length;x++)
{
if ((extraLAGArr[i].childNodes[x].nodeType !=1)||(extraLAGArr[i].childNodes[x].nodeName == "INPUT")) continue;
if (extraLAGArr[i].childNodes[x].nodeName == "LAGIfIndex")
LAGIfIndex = extraLAGArr[i].childNodes[x].firstChild.nodeValue;
}
_top.presentTrunkArr[parseInt(LAGIfIndex)] = true;
}
}
}
catch(e)
{
return false;
}
}
function initTopOOBArr()
{
var oobNumOfPorts = _top.oobNumOfPorts;
_top.oobPortsStatusArr=new Array(oobNumOfPorts);
_top.oobPortsIndexArray=new Array(oobNumOfPorts);
_top.oobExistedPortsArr=new Array(oobNumOfPorts);
_top.oobPortsNamesArr=new Array(oobNumOfPorts);
for(var i=0;i<=_top.oobNumOfPorts;i++)
{
_top.oobPortsStatusArr[i] = "notPresent";
_top.oobPortsIndexArray[i] = "-1";
_top.oobExistedPortsArr[i] = false;
_top.oobPortsNamesArr[i] = "";
}
}
function getExtraPortsDB(ExtraPortsDB)
{ try
{
var oobArr,oobOperStatus,oobIfIndex;
initTopOOBArr();
oobArr = ExtraPortsDB.getElementsByTagName('extraPortsDataBase')[0].getElementsByTagName('OOB');
for (var i=0;i<oobArr.length;i++)
{
oobOperStatus = getVal(oobArr[i],"oobOperStatus")
_top.oobExistedPortsArr[i] = ( oobOperStatus=="6" ? false : true);
_top.oobPortsIndexArray[i] = getVal(oobArr[i],"oobIfIndex");
_top.oobPortsNamesArr[i]=( _top.oobNumOfPorts>1 ? "OOB " + parseInt(i+1):"OOB");
_top.oobPortsStatusArr[i] = ( oobOperStatus=="1" ? "UP" : "Down");
}
}
catch(e)
{
return false;
}
}
function checkLogoutTimeout(advanceTime)
{
if (typeof setLastInteractionTime == "undefined" ||
typeof globalPoller != "object" ||
typeof globalPoller.data.dataBase.noStamp != "object")
return;
if (!advanceTime)
lastInteractionTime += interactionTime;
var timeout;
timeout = (location.protocol == "http:") ?
globalPoller.data.dataBase.noStamp.rlEmWebMaxIdleTimeout[0].value :
globalPoller.data.dataBase.noStamp.rlEmWebMaxHttpsIdleTimeout[0].value;
if (lastInteractionTime > timeout && timeout != 0)
gracefulLogout("TimeOut");
else if (advanceTime)
lastInteractionTime = 0;
}
var _top;
var DEF_PROG_TIMEOUT = 60000;
var standalone_Product = false;
var testFlag = false;
var masterModuleType = -1;
var lastUrlArray = new Array();
lastUrlArray[0] = "Filter:";
var lastUrlIndex=0;
var timeLoading = false;
var timeSetAndLoad = false;
var postStartTimer;
var loadStartTimer;
var endTimer;
var firstEntryInPage = 1;
var numberOfEntriesPerPage = 10;
var dynamicPagingOptions = [50,30,20,10];
var firstUrl = 0;
var validTO = null;
var pollingState;
var generalVar = new Array();
var generalPagingArr = new Array();
var generalFirstPageFromPaging = false;
var generalVarMulticast = "";
var numOfQueue = 4;
var prsntPorts = 46;
var refreshOpener;
var queryArr = new Array();
var SubmitType = 0;
var BackPrev = true;
var currTabPge = '../device/blank.html';
var pollingInterval = 25000;
var isFirstLoad = true;
var havePortData = false;
var haveUnitData = false;
var interfaceIndex = -1;
var maxNumOfVLAN = 4094;
var rateLimit = 0;
var StormRateThreshold = 0;
var poeSupported = false;
var pveSupported = false;
var eeeSupported = false;
var poePowerLimit = 30000;
var vlanRateLimitSupported = true;
var macBasedVLANSupported = false;
var protocolBasedVLANSupported = false;
var accessMTVSupported = false;
var customerMTVSupported = false;
var RVASupported = false;
var shortReachSupported = false;
var queryNA = " ";
var displayRouter;
var polBasedVLANActive;
var userDefinedSystMode = true;
var IpHostManagementIndex;
var sharedIPAndQosResources = true;
var vrrpSupported = false;
var ripSupported = false;
var WBASupported = false;
var WBAMaxLanguages = 1;
var cosqosAdvancedNewPolicyName = "";
var defaultVlanId = 100;
var cookieFlag = false;
var sessionTimeOut = 10;
var isBlinkingTimoutSet = false;
var alertBlinkStatus = true;
var saveBlinkStatus = true;
var safeBlinkStatus = false;
var isStackableDevice;
var isFirstWelcomeBanner = false;
var finishLoading = false;
var firstLoadTimeOut = null;
var portsDataXml =null;
var NumberOfPorts;
var firstPresentPort;
var firstPresentGigaPort = null;
var isPortsChanged;
var isComboPort;
var portsTypeArr;
var portsPoeSupported;
var swIfTypeArr;
var portsStatusArr;
var existedPortsArr;
var portsNamesArr;
var portsLongNamesArr;
var portsLongNamesSaArr;
var portsLongNamesStackArr;
var actualNamesArr;
var moduleNumPerPortArr;
var portsChangesArr;
var moduleName = new Array();
var modulesDataXml =null;
var NumberOfModules;
var isStandAlone = true;
var firstPresentModule = 1;
var Units;
var MasterUnit = "";
var BackUpUnit = "";
var MaxNumberOfUnits = 1;
var lastPortPerModuleArr = new Array();
var RealModuleNameArr;
var NumberOfPortPerModuleArr;
var StartingPortPerModuleArr;
var firstPortPerModuleArr;
var TypePerModuleArr;
var slotPerModuleArr;
var pairPerModuleArr;
var pairPerModuleSG500XGArr;
var ModuleRoleArr;
var PortsTtransceiverTypeArr;
var PortsSpeedArr;
var firstPresentPortPair = -1;
var firstPoeUnit = -1;
var StackOrderArr = new Array();
var productFamily;
var productPortsType,masterPortType;
var isXModel = false;
var isXGModel = false;
var isXModelArr = new Array();
var stackingMode;
var isHybridMode;
var l2_max_port_speed;
var oobFirstIndex = 0;
var oobNumOfPorts = 0;
var oobPortsStatusArr;
var oobPortsIndexArray;
var oobExistedPortsArr;
var oobPortsNamesArr;
var trunkFirstIndex = 0;
var NumberOfTrunks = 0;
var isDisplayAllTrunk = true;
var maxPortsPerTrunk = 2;
var relatedTrunksArr;
var presentTrunkArr;
var lbpNumOfPorts=0;
var lbpFirstIndex=0;
var lbpPortsStatusArr=new Array(lbpNumOfPorts);
var lbpPortsIndexArray=new Array(lbpNumOfPorts);
var lbpExistedPortsArr=new Array(lbpNumOfPorts);
var lbpPortsNamesArr=new Array(lbpNumOfPorts);
var statEtherLikeRefreshRate=0;
var statGvrpRefreshRate=0;
var GVRPIfName = "";
var statGvrpErrRefreshRate=0;
var statInterfaceRefreshRate=0;
var statRmonRefreshRate=0;
var statEapRefreshRate=0;
var statCdpRefreshRate = 0;
var cpuUtilRefreshRate=0;
var statQueuesStatRefreshRate=0;
var historyIndex = -1;
var operationType = "NON";
var BACKUP_FILE_NAME = "flash://backup-config";
var helpOpen = false;
var viewName = "";
var viewTypeSelectedIndex = 0;
var notifAddV3 = false;
var notifEditV3 = false;
var notificFilterName ="";
var arrayNotifFilterTableBackUrls = new Array();
var notifFilterFirstPageFromPaging = 1;
var afterDeleteAcion = false;
var getNumReqiured = false;
var afterAdd = false;
var arrayAlarmsTableBackUrls = new Array();
var tunnelFirstIndex;
var maxNumberOfTunnels;
var maxTunnelsId = (displayRouter || isXModel && !isHybridMode) ? "16" : "2";
var numPortsOnPage = -1;
var maxVLANid=4095;
var untaggedFrameSupported = false;
var portMultiMemberVlanDisplay = 0;
var configurationChangeInfo = null;
var numberOfRefreshsCounter = 4;
var numberOfRefreshsValue = 4;
var waitingForCopperResults = false;
var vlanStartingIndexToContinuePartialPostFrom = null;
var maxNumberOfVlansEntriesToSend = 45;
var currentPVID = -1;
var pagingEntryCount = 0;
var arrayStaticAddressesTableBackUrls = new Array();
var arrayDynamicAddressesTableBackUrls = new Array();
var dynamicMACFirstPageFromPaging = false;
var arrayIGMPVlansTableBackUrls = new Array();
var arrayVlanAuthenticationUrls = new Array();
var synRateProtectionUrls = new Array();
var isWaitingForDHCP = false;
var ipInterfacePollFlag = false;
var isDefOption = false;
var cookiePreffix=null;
var treeArray=new Array();
var xmlNavigator = {selectedTab: ""};
var isSmart = false;
var isPoE = false;
var isStackable = false;
var displayHealth = false;
var numOfInstances = 0;
var arrayInstanceToVLANTableBackUrls = new Array();
var minTableWidth=0;
var prevBodyWidth=0;
var minTdWidth=0;
var prevTdWidth=0;
var CopySettings_Func;
var CopySettings_Src;
var CopySettings_CurrIndex;
var CopySettings_DstStr;
var CopySettings_nameToNumArr;
var CopySettings_pageType;
var aclType;
var qosCIRmin;
var qosCIRmax;
var qosCBSmin;
var qosCBSmax;
var qosCBSDefault;
var lldpNPnum;
var locInfoUrl=null;
var lldpneighborQuery=null;
var cosCbsRateLimit;
var cosIngressRateLimitMin;
var cosIngressRateLimitMax;
var currMapName = 0;
var currIpv6AceName = "";
var isPasswordInitial = false;
var isPasswordExpired = false;
var isPasswordSimple = false;
var passwordChangeAfterSubmit;
var passwordExpirationDaysLeft = -1;
var currPageIndex;
var pageSize = 50;
var savePagingObj=false;
var currIf=null;
var PolicyClassMapsCirMin;
var PolicyClassMapsCirMax;
var PolicyClassMapsCbsMin;
var PolicyClassMapsCbsMax;
var routersIPforward = false;
var OUIRestored = false;
var isLangUpgrade = false;
var actClientLang;
var actLangCode = "en";
var arrayArpTableBackUrls = new Array();
var arrayPolicyTableBackUrls = new Array();
var arrayAggTableBackUrls = new Array();
var arrayAuthTableBackUrls = new Array();
var NotificationfirstTimeEditPageOpen = 0;
var isFirstTimeConfig = new Array(false,"");
var ManagementInterfaceLogicalifIndex=-1;
var ManagementInterfaceSupport=-1;
var ManagementInterfaceDefaultVlanifIndex=-1;
var smartportAfterApplyFlag = false;
var smartportType=0;
var smartportLastFilterUrl='';
var lastPortType=-1;
var isIE = (!document.evaluate || navigator.appName.indexOf("Microsoft") != -1);
var isSafari = (navigator.vendor && (navigator.vendor.toLowerCase().indexOf('apple') != -1) ) ? true : false;
var isFF = (navigator.userAgent && (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) ) ? true : false;
var isChrome = (navigator.userAgent && (navigator.userAgent.toLowerCase().indexOf('chrome') != -1) ) ? true : false;
var isIE7 = (isIE && navigator.userAgent.toLowerCase().indexOf("msie 7") > -1) ? true : false;
var defaultMaxIPv4RoutingEntries;
var defaultMaxIPv6RoutingEntries;
var maxNonIPRoutingEntries;
var Auto_Config_scp_supported = false;
var portLedControl = false;
var ipv6PopupType;
var unq_module_type;
var is_bpdu_guard_supported=false;
var udld_supported=false;
var fhs_supported = false;
var loopbackFirstIndex = 0;
var loopbackNumOfPorts = 0;
var pageMessageAfterReload = false;
var globalNotAMasterChecked = false;
var selectedId;
var selectedDrw;
var RootS = 1
var handResetPolling;
var menuDataLoadTimer;
var blankCounter = 1;
resetPolling();
function addUnitFilter(filter,field)
{
filter += "(";
for (var i=0; i<=(_top.RealModuleNameArr.length - 1);i++)
{
filter += (field + "=" + _top.RealModuleNameArr[i]) ;
if (i!= (_top.RealModuleNameArr.length - 1))
filter += "||";
}
filter += ")";
return filter;
}
function resetPolling()
{
clearTimeout(handResetPolling);
handResetPolling = setTimeout('clearTimeout(_top.pollingState)',1320000);
}
function inLink(ths)
{
_top.status = _top.defaultStatus;
}
function checkUpDownStatus()
{
if(_top.operationType != "NON")
{
alert('Navigation is not allowed during file download / upload.');
return true;
}
return false;
}
function NavLoop() {
if (NavigateToLastPage()==false)
setTimeout('NavLoop()',500);
}
function NavigateToLastPage()
{
var Last_Page = get_cookie("Last_Page");
if ((Last_Page==null)||(Last_Page.indexOf("~/~Root~/~")>=0)||(Last_Page==""))
return true;
var myPageLoad = window.frames[1].Page.loading;
if (myPageLoad==true)
return false;
if(window.frames[1].oNavigator.siteMapXml.documentElement==null)
return false;
var arr = Last_Page.split("~")
var path = "";
var root;
for(var i=0;i<arr.length;i++) {
if (i==0)
path=path+arr[i];
else
path=path+"~"+arr[i];
root=document.getElementById(path)
if (root!=null) {
if (i==arr.length-1){
getItem(root.childNodes[0].childNodes[3]);
}
else {
getItem(root.childNodes[0].childNodes[1]);
}
}
}
set_cookie("Last_Page","","","/");
set_cookie("LogOff_Reason","","","/");
return true;
}
function firstLoad (first) {
if (_top.firstLoadTimeOut != null)
window.clearTimeout(_top.firstLoadTimeOut);
if(!_top.finishLoading)
{
_top.firstLoadTimeOut = window.setTimeout("firstLoad(" +first + ")",500);
}
else
{
var root = document.getElementById("~/~Root~/~");
if (first) {
selectedDrw="";
selectedId="";
getNodes(root);
clickFirstDoc(root);
}
else {
setTimeout(clickOnXmlNode, 20);
}
}
}
function clickOnXmlNode() {
if (mainFrame_gw.oNavigator.siteMapXml.documentElement && !mainFrame_gw.Page.loading && document.getElementById(xmlNavigator.selectedTab))
getItem(document.getElementById(xmlNavigator.selectedTab));
else
setTimeout(clickOnXmlNode, 20);
}
function ExpandAll(bound)
{
var flag = true;
var j = 0;
var ths = document.getElementsByName("close");
for(var i=0;i<ths.length-1;i++)
{
if(ths[i].lang == 'close')
{
ths[i].onclick();
flag = false;
if(j++ > 10)
{
break;
}
}
}
if(flag == false)
{
setTimeout("ExpandAll()",1);
}
}
function removeNodes(ths)
{
var prnt = ths.parentNode
var nxtNode=ths.nextSibling;
if(!nxtNode)
{
return;
}
var level = ths.lang;
while(nxtNode.lang>level)
{
delObj = prnt.removeChild(nxtNode);
delete delObj;
nxtNode = ths.nextSibling;
if(!nxtNode)
{
return;
}
}
}
function clickFirstDoc(root)
{
var nxtNode = root.nextSibling;
var level = root.lang;
var expdate = new Date();
var queryUrl = document.location.search.toLowerCase();
if ((queryUrl == '?cstelnet') && (_top.productFamily == 1))
{
nxtNode = document.getElementById("3930");
nxtNode.childNodes[0].childNodes[0].onclick();
}
else if (get_cookie(_top.cookiePreffix+"ShowGettingStarted")== null || get_cookie(_top.cookiePreffix+"ShowGettingStarted")==true)
nxtNode.childNodes[0].childNodes[0].onclick();
else
{
nxtNode.childNodes[0].childNodes[0].onclick();
}
}
function changeFolder(ths,order)
{
var newImg = document.getElementById("~hidden~").childNodes[order].cloneNode(true);
delObjct = ths.replaceChild(newImg,ths.firstChild);
delete delObjct;
}
function addNodes(ths,nodes)
{
var tblElement = ths.parentNode;
var newNode;
var nxtNode;
var newBdo;
var depot = document.getElementById("~hidden~");
if (ths.getElementsByTagName("BDO")[0].id == "lstFldr")
{
depot = document.getElementById("~hidden2~");
ths.getElementsByTagName("BDO")[0].id="lstFldrOpen";
}
var nxtNode=ths.nextSibling;
var prntBdo=ths.getElementsByTagName("BDO")[0];
var currType;
for(var i=0;i<nodes.length;i++)
{
newNode=document.getElementById(nodes[i][1]).cloneNode(true);
newNode.lang=parseInt(ths.lang,10)+1;
if(ths.lang<"0" && !nodes[i][2])
{
newNode.id=nodes[i][0];
}
else
{
newNode.id=ths.id + "~" + nodes[i][0];
if(nodes[i][2])
{
if(nodes[i][3])
{
newNode.lastChild.lastChild.id=nodes[i][2];
newNode.lastChild.lastChild.progReq = nodes[i][3];
}
else
{
newNode.lastChild.lastChild.id=nodes[i][2];
newNode.lastChild.lastChild.progReq = -1;
}
if(nodes[i][4])
newNode.lastChild.lastChild.dynamicTableId = nodes[i][4];
else
newNode.lastChild.lastChild.dynamicTableId = "";
}
else
newNode.lastChild.lastChild.id="a_"+nodes[i][0];
newBdo=prntBdo.cloneNode(true);
if(nodes[i][1]!="docum_first")
{
newBdo.insertBefore(depot.childNodes[2].cloneNode(true),null);
delObjct=newNode.firstChild.replaceChild(newBdo, newNode.firstChild.firstChild);delete delObjct;
}
}
if(ths.lang=="0" && i==0)
newNode.childNodes[0].style.paddingTop="0";
tblElement.insertBefore(newNode,nxtNode);
treeTkn.setToken(newNode.lastChild.lastChild.id,nodes[i][0]);
}
}
function addDrawers(ths,nodes)
{
var tblElement = ths.parentNode;
var newNode;
var nxtNode;
var newBdo;
var depot = document.getElementById("~hidden~");
if (ths.firstChild.firstChild.id == "lstFldr")
{
depot = document.getElementById("~hidden2~");
ths.firstChild.firstChild.id="lstFldrOpen";
}
var nxtNode=ths.nextSibling;
var prntBdo=ths.firstChild.firstChild;
var currType;
for(var i=0;i<nodes.length;i++)
{
newNode=document.getElementById(nodes[i][1]).cloneNode(true);
newNode.lang=parseInt(ths.lang,10)+1;
newNode.getElementsByTagName("span")[1].id="span_"+nodes[i][0];
if(nodes[i][1]=="docum_first")
{
newNode.getElementsByTagName("span")[0].id=nodes[i][2];
if(nodes[i][3])
newNode.getElementsByTagName("span")[0].progReq = nodes[i][3];
if(nodes[i][4])
newNode.getElementsByTagName("span")[0].dynamicTableId = nodes[i][4];
else
newNode.getElementsByTagName("span")[0].dynamicTableId = "";
}
newNode.id=nodes[i][0];
if (newNode.id == "3930")
newNode.style.display = "none";
tblElement.insertBefore(newNode,nxtNode);
treeTkn.setToken("span_"+nodes[i][0],nodes[i][0]);
}
}
function clearMenu() {
var bodyTree = document.getElementById("bodyTree").childNodes[0].childNodes;
var length = bodyTree.length;
for(var i; i < length; i++) {
if(bodyTree[i].style.display != "none")
bodyTree[i].className = "";
}
}
function getItem(ths)
{
_top.statEtherLikeRefreshRate = 0;
_top.statGvrpRefreshRate = 0;
_top.statCdpRefreshRate = 0;
_top.statGvrpErrRefreshRate = 0;
_top.statInterfaceRefreshRate = 0;
_top.statRmonRefreshRate = 0;
_top.statEapRefreshRate = 0;
_top.cpuUtilRefreshRate = 0;
_top.statQueuesStatRefreshRate = 0;
if(ths.className == "openUp")
{
return false;
}
var isGWLoading = window.frames["mainFrame_gw"].Page.loading;
if (isGWLoading == true)
{
return false;
}
if(ths.id.indexOf("NAV_") != -1) {
document.getElementById('mainFrame').src = "./device/blank.html";
}
var isNew=true;
var tempArr;
var tdThs = ths.parentNode;
var selItm;
var selDrw;
var trThs = tdThs.parentNode;
switch(tdThs.lang)
{
case "fldr_close":
getNodes(trThs);
ths.lang = "open";
ths.name = "open";
tdThs.lang = "fldr_open";
break;
case "fldr_open" :
removeNodes(trThs);
ths.lang = "close";
ths.name = "close";
tdThs.lang = "fldr_close";
break;
case "docum_first" :
selectedId = trThs.id;
if(checkUpDownStatus())
{
return false;
}
if (oGW.loaded)
{
return false;
}
selItm = document.getElementById(selectedId);
selDrw = document.getElementById(selectedDrw);
if(selectedDrw!=trThs.id)
{
if(selDrw)
{
var selDrwTd=selDrw.firstChild.firstChild.getElementsByTagName("td")[0];
selDrwTd.className = 'drwTD2';
var image=selDrwTd.getElementsByTagName("img")[0];
}
}
selectedDrw =trThs.id;
selectDrw(trThs);
isNew=true;
if(isNew)
{
tempArr=new Array(selectedDrw,trThs.id);
treeArray.push(tempArr);
}
BackPrev = false;
resetPolling();
var isGW = oGW.isGWPage(ths.id);
if (!isGW)
{
oGW.clearContent();
oGW.loaded=true;
document.body.style.cursor='wait';
if(trThs.firstChild.firstChild.getElementsByTagName("span")[0].progReq != -1)
{
_top.homeShowProg(true, trThs.firstChild.firstChild.getElementsByTagName("span")[0].progReq);
}
if(trThs.firstChild.firstChild.getElementsByTagName("span")[0].dynamicTableId != "")
updateNumberOfEntriesPerPage(trThs.firstChild.firstChild.getElementsByTagName("span")[0].dynamicTableId)
document.getElementById('mainFrame').src=trThs.firstChild.firstChild.getElementsByTagName("span")[0].id.replace(/#numOfEntries#/g,parseInt(_top.numberOfEntriesPerPage,10)+1);
}
else
{
oGW.loaded=false;
mainFrame_gw.AlterAfterPostGW(false);
mainFrame_gw.AlterPageMessage(null, null, false);
oGW.navigate(ths.id);
}
document.getElementById("caption").innerHTML = trThs.id;
_top.currTabPge = ths.id;
break;
default :
selectedId = trThs.id;
var drw = getDrawer(ths.id);
var isGW = oGW.isGWPage(ths.id);
if(checkUpDownStatus())
{
_top.changeImg(drw.getElementsByTagName("img")[0]);
return false;
}
if (oGW.loaded)
{
if(isGW)_top.changeImg(drw.getElementsByTagName("img")[0]);
return false;
}
selItm = document.getElementById(selectedId);
if(_top.isDefOption && selectedId==ths.id)
{
selectDrw(drw);
return false;
}
selDrw = document.getElementById(selectedDrw);
if(selectedDrw!=drw.id)
{
if(selDrw)
{
var selDrwTd=selDrw.firstChild.firstChild.getElementsByTagName("td")[0];
selDrwTd.className = 'drwTD2';
var image=selDrwTd.getElementsByTagName("img")[0];
}
}
selectedDrw =drw.id;
selectDrw(drw);
selectLink(ths);
isNew=true;
if(isNew)
{
tempArr=new Array(selectedDrw,ths.parentNode.parentNode.id);
treeArray.push(tempArr);
}
BackPrev = false;
resetPolling();
if(ths.progReq != -1)
{
_top.homeShowProg(true, ths.progReq);
}
if(ths.dynamicTableId != "")
updateNumberOfEntriesPerPage(ths.dynamicTableId)
_top.generalVar.length = 0;
_top.currPageIndex = 1;
if (!isGW)
{
oGW.clearContent();
document.body.style.cursor='wait';
if (isLinkItem(ths) == true) return;
oGW.loaded=true;
document.getElementById('mainFrame').src = ths.id.replace(/#numOfEntries#/g,parseInt(_top.numberOfEntriesPerPage,10)+1);
document.getElementById('mainFrame').style.display = "";
document.getElementById('mainFrame_gw').style.display = "none";
}
else
{
oGW.loaded=false;
mainFrame_gw.AlterAfterPostGW(false);
mainFrame_gw.AlterPageMessage(null, null, false);
oGW.navigate(ths.id);
document.getElementById('mainFrame').style.display = "none";
document.getElementById('mainFrame_gw').style.display = "";
}
var linkId=ths.parentNode.parentNode.id.split("~");
document.getElementById("caption").innerHTML = linkId[linkId.length-1];
_top.currTabPge = ths.id;
rainbow("bodyTree","tr","openUp","1050");
}
if(document.getElementById("mainFrame").style.display == "none" && document.getElementById("mainFrame_gw").style.display == "")
progressBar(3000);
if(["1010", "1010~1480", "1010~1840~5270", "1010~1840~5280", "1020~1090", "1200~4580~3210", "1410~1470", "1680~2450", "1200~4570~5410", "1200~4570~2490"].indexOf(trThs.id) != -1)
progressBar(3000);
}
function getDrawer(ths)
{
var selTr=document.getElementById(ths).parentNode.parentNode;
while(selTr.lang!=0)
selTr=selTr.previousSibling;
return selTr;
}
function getNextDrawer(ths)
{
var selTr=ths.nextSibling;
while(selTr && selTr.lang!=0)
selTr=selTr.nextSibling;
return selTr;
}
function selectDrw(ths)
{
var selDrwTd=ths.firstChild.firstChild.getElementsByTagName("td")[0];
selDrwTd.className = 'selectedDrw';
var img=selDrwTd.getElementsByTagName("img")[0];
if(img)
{
img.lang=2;
}
}
function selectLink(ths)
{
}
function setBorder(trThs,addBorder)
{
}
function getFolderFirst(itemName)
{
return new Array(itemName,"fldr_close");
}
function getFolderFirstlst(itemName)
{
return new Array(itemName,"fldr_closelst");
}
function getFolder(itemName)
{
return new Array(itemName,"fldr_closeSec");
}
function getLastFolder(itemName)
{
return new Array(itemName,"fldr_closeSeclst");
}
function getDocum(itemName,addr,pagingTblName,progReqParams)
{
if(addr == "")addr = "./device/blank.html?"+(blankCounter++);
var progReq = getProgReqFromParams(progReqParams);
return new Array(itemName, "docum", addr, progReq, pagingTblName);
}
function getProgReqFromParams(progReqParams)
{
var progReq;
if(progReqParams == null || typeof(progReqParams) == "undefined")
progReq = -1;
else if(typeof(progReqParams) == "boolean")
progReq = (progReqParams) ? DEF_PROG_TIMEOUT : -1;
else if(typeof(progReqParams) == "object")
{
if(!progReqParams[0])
progReq = -1;
else if(progReqParams[1])
progReq = progReqParams[1];
else
progReq = DEF_PROG_TIMEOUT;
}
else
progReq = -1;
return progReq;
}
function getDocumFirst(itemName,addr,pagingTblName,progReqParams)
{
var progReq = getProgReqFromParams(progReqParams);
return new Array(itemName,"docum_first",addr,progReq, pagingTblName);
}
function getLastDocum(itemName,addr,pagingTblName,progReqParams)
{
if(addr == "")addr = "./device/blank.html?"+(blankCounter++);
var progReq = getProgReqFromParams(progReqParams);
return new Array(itemName,"documlst",addr,progReq, pagingTblName);
}
function getLastFold(itemName,addr)
{
return new Array(itemName,"fldr_closelast",addr);
}
function updateNumberOfEntriesPerPage(pagingTblName)
{
var tableCookieVal = parseInt(_top.getTableBits(_top.tableHash[pagingTblName]),2);
_top.numberOfEntriesPerPage = _top.dynamicPagingOptions[tableCookieVal];
}
function createQueryUserName(userName)
{
var result = "";
for (var i=0;i<userName.length;i++)
{
var ch = userName.charAt(i);
if (ch == '@' || ch == '^' || ch=='[' || ch == ']')
result+="\\"+ch;
else if (ch=='"' || ch=="'" || ch == '\\')
result+="\\"+ch;
else if (ch=='#')
result+='%23';
else if ( ch=='+')
result +='%2b';
else if (ch=='%')
result+='%25';
else result+=ch;
}
return result;
}
function rebuildTreeArr(srcArr)
{
var resArr = new Array();
for(var i = 0; i < srcArr.length; i++)
{
if(srcArr[i])
resArr.push(srcArr[i]);
}
return resArr;
}
function hideMenuBySubMenu(hideArr) {
var markClass, arrowO,
bodyTree = document.getElementById("bodyTree").childNodes[0].childNodes;
var length = bodyTree.length;
if(hideArr == "*") {
for(var i = 0; i < length; i++){
bodyTree[i].style.display = "none";
}
} else {
var subElMenu = hideArr.pop();
document.getElementById("mainFrame").src = "./device/blank.html";
for(var i = 0; i < length; i++){
bodyTree[i].style.display = "none";
if(hideArr.indexOf(bodyTree[i].id) != -1) {
bodyTree[i].setAttribute("class", "");
bodyTree[i].children[0].setAttribute("lang", "fldr_close");
bodyTree[i].children[0].children[0].setAttribute("lang", "close");
if(typeof bodyTree[i].getElementsByTagName("img")[0] !== 'undefined')
bodyTree[i].getElementsByTagName("img")[0].src = "./images/navarrow_wht_collapsed.png";
bodyTree[i].style.display = "block";
}
if(bodyTree[i].id.indexOf("~") != -1)
bodyTree[i].setAttribute("lang", "1");
if(bodyTree[i].id == "1050" || bodyTree[i].id == "1261" || bodyTree[i].id == "1630" || bodyTree[i].id == "5390")
bodyTree[i].childNodes[0].lang = "docum_first";
}
markClass = "openUp";
var ths = document.getElementById(hideArr[0]).children[0].children[0];
setTimeout(function(){
getDrwItem(ths);
if(document.getElementById("5220") != null) {
document.getElementById("5220").className = "openUp";
document.getElementById("5220").children[0].children[0].children[0].children[0].children[0].children[2].src = "./images/navarrow_wht_expanded.png";
}
if(document.getElementById("5220~5230") != null)
document.getElementById("5220~5230").className = "openUp";
if(hideArr[0] != subElMenu)
hideArr[0] += "~"+subElMenu;
rainbow("bodyTree","tr",markClass,hideArr[0]);
},2000);
rainbowClassDeletor(markClass);
try {
delete window.rainbowId;
}catch(e){}
}
}
function disableAllsubMenu(objMenu) {
var length = objMenu.parentNode.childElementCount;
for(var i = 0; i < length; i++) {
objMenu.parentNode.children[i].className = "";
}
}
function closeAllDrwItem(levelDoc) {
var doc = (levelDoc == "page") ? parent && parent.document : document;
var bodyTree = doc.getElementById("bodyTree") && doc.getElementById("bodyTree").childNodes[0].childNodes;
var length = bodyTree && bodyTree.length;
for(var i = 0; i < length; i++) {
if(typeof(bodyTree[i]) == "object") {
if(bodyTree[i].children[0].lang != "docum_first" && bodyTree[i].children[0].lang == "fldr_open") {
getDrwItem(doc.getElementById(bodyTree[i].id).children[0].children[0]);
bodyTree[i].className = "";
}
}
}
}
function progressBar(time) {
_top.homeShowProg(true);
setTimeout(function() {_top.homeShowProg(false);}, time);
}
function manipulationMenu(obj) {
var id = obj.id;
switch(id){
case "systemStatusPage":
progressBar(3000);
closeAllDrwItem("topDoc");
document.getElementById('mainFrame').style.display = '';
hideMenuBySubMenu(["1050", "1300", "1261", "1050"]);
disableAllsubMenu(obj);
_top.hideMenu = true;
document.getElementById("bodyTree").style.width = "";
break;
case "quickStartPage":
document.getElementById("dvProgVeil").style.display = "";
document.getElementById("dvProgBar").style.display = "";
document.getElementById("lblProgPrcnt").style.display = "none";
document.getElementById("trProgBtn").style.display = "none";
document.getElementById("imgProgVeil").style.width = "270px";
closeAllDrwItem("topDoc");
disableAllsubMenu(obj);
qsLoaded = setInterval(function(){
document.getElementById('mainFrame').style.display = '';
hideMenuBySubMenu('*');
getItem(document.getElementById("5350").children[0].children[0]);
_top.hideMenu = false;
}, 100);
break;
case "configPage" :
progressBar(3000);
closeAllDrwItem("topDoc");
if(_top.productFamily == 1)
hideMenuBySubMenu(["5220", "1010", "1020", "1200", "5310", "1410", "1660", "2380", "1030", "1680", "1040", "5230"]);
else
hideMenuBySubMenu(["5220", "1010", "1020", "1200", "5310", "1410", "1660", "2380", "1030", "1680", "1040", "5230"]);
disableAllsubMenu(obj);
_top.hideMenu = true;
document.getElementById("bodyTree").style.width = "";
if(navigator.userAgent.toLowerCase().indexOf("msie 10") != -1) {
document.getElementById("5220~2020").children[0].children[3].style.cssText = "letter-spacing: -0.1px; font-size:11.5px;";
}
break;
case "maintenancePage" :
progressBar(3000);
closeAllDrwItem("topDoc");
document.getElementById('mainFrame').style.display = '';
if(_top.productFamily == 1)
hideMenuBySubMenu(["1630", "2070", "2080", "2160", "1630"]);
else
hideMenuBySubMenu(["5390", "2070", "2080", "2160", "5390"]);
disableAllsubMenu(obj);
_top.hideMenu = true;
document.getElementById("bodyTree").style.width = "";
document.getElementById("mainFrame_gw").style.display = "none";
break;
case "supportPage":
progressBar(3000);
closeAllDrwItem("topDoc");
disableAllsubMenu(obj);
document.getElementById('mainFrame').style.display = '';
qsLoaded = setInterval(function(){
hideMenuBySubMenu('*');
getItem(document.getElementById("5360").children[0].children[0]);
},100);
_top.hideMenu = false;
break;
}
}
if (!Array.prototype.indexOf) {
Array.prototype.indexOf = function(searchElement , fromIndex){
var i,
length,
pivot = (fromIndex) ? fromIndex : 0;
if (!this) {
throw new TypeError();
}
length = this.length;
if (length === 0 || pivot >= length) {
return -1;
}
if (pivot < 0) {
pivot = length - Math.abs(pivot);
}
for (i = pivot; i < length; i++) {
if (this[i] === searchElement) {
return i;
}
}
return -1;
};
}
function cutMenu(cutArr) {
var bodyTree = document.getElementById("bodyTree").childNodes[0].childNodes;
var length = bodyTree.length;
for(var i = 0; i < length; i++) {
if(cutArr.indexOf(bodyTree[i].id) == -1)
bodyTree[i].style.display = "none";
}
rainbow("bodyTree","tr","openUp", "1050");
}
function getNodes(ths)
{
var dataArr;
switch(ths.id)
{
case "~/~Root~/~":
if (!_top.isPasswordExpired)
{
if(_top.productFamily == 1)
{
dataArr = new Array(getDocumFirst("1050","./sysinfo/system_general_description_m.htm?[petVT]Filter:(ifOperStatus!=6)&&(rlPethPsePortSupportPoe != 2)"),
getFolderFirst("1300"),
getDocumFirst("1261","./IfStats/statist_interfaceStat_interface_m.htm?[statInterface]Query:ifIndex=" + _top.firstPresentPort),
getFolderFirst("5220"),
getFolderFirst("1010"),
getFolderFirst("1410"),
getFolderFirst("1020"),
getFolderFirst("1030"),
getFolderFirst("1680"),
getFolderFirst("1200"),
getFolderFirst("5310"),
getFolderFirst("1660"),
getFolderFirst("2380"),
getFolderFirst("1040"),
getDocumFirst("1630", "./sysinfo/system_general_reset_m.htm"),
getFolderFirst("2070"),
getFolderFirst("2080"),
getDocumFirst("3930","../password/support.htm"),
getDocumFirst("5350","./QuickStart/quick_start_m.htm"),
getDocumFirst("2010","./password/security_manage_localUsers_m.htm"),
getDocumFirst("5360", "./Support/support_m.htm")
);
}
else
{
dataArr = new Array(getDocumFirst("1050","./sysinfo/system_general_description_m.htm?[petVT]Filter:(ifOperStatus!=6)&&(rlPethPsePortSupportPoe != 2)"),
getFolderFirst("1300"),
getDocumFirst("1261","./IfStats/statist_interfaceStat_interface_m.htm?[statInterface]Query:ifIndex=" + _top.firstPresentPort),
getFolderFirst("5220"),
getFolderFirst("1010"),
getFolderFirst("1410"),
getFolderFirst("1020"),
getFolderFirst("1030"),
getFolderFirst("1680"),
getFolderFirst("1200"),
getFolderFirst("5310"),
getFolderFirst("1660"),
getFolderFirst("2380"),
getFolderFirst("1040"),
getDocumFirst("5390", "./sysinfo/system_general_reset_m.htm"),
getFolderFirst("2070"),
getFolderFirst("2080"),
getDocumFirst("5350","./QuickStart/quick_start_m.htm"),
getDocumFirst("5360", "./Support/support_m.htm")
);
}
break;
}
else
{
dataArr = new Array(getDocumFirst("3190","./password/new_password.htm?[LocalUserTable]Query:rlAAALocalUserNameString=[LocalUserTableName]Query:rlAAALocalUserName="+createQueryUserName(get_cookie("usernme"))));
break;
}
case "1300":
if (_top.productFamily == 1)
{
dataArr = new Array(getDocum("1430","./rmonStats/statist_rmon_rmonStatistics_m.htm?[rmonStats]Query:etherStatsIndex=" + _top.firstPresentPort),
getDocum("1310","./rmonHistory/statist_rmon_historyControl_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=historyControlTable[His_Control_Tab]partialKey:-Counter-#numOfEntries#","statiHistoryConTable"),
getDocum("1320","./rmonEvents/statist_rmon_eventsControl_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=eventTable[eventsTable]partialKey:-Counter-#numOfEntries#","tblEvents"),
getLastDocum("1330","./rmonAlarms/statist_rmon_rmonAlarm_m.htm?[AlarmCount]Query:rlMibTableInstancesInfoTableName=alarmTable[alarmsTable]partialKey:-Counter-#numOfEntries#","tblAlarms")
);
break;
}
else
{
dataArr = new Array(getDocum("1430","./rmonStats/statist_rmon_rmonStatistics_m.htm?[rmonStats]Query:etherStatsIndex=" + _top.firstPresentPort),
getDocum("1310","./rmonHistory/statist_rmon_historyControl_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=historyControlTable[His_Control_Tab]partialKey:-Counter-#numOfEntries#","statiHistoryConTable"),
getDocum("1320","./rmonEvents/statist_rmon_eventsControl_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=eventTable[eventsTable]partialKey:-Counter-#numOfEntries#","tblEvents"),
getLastDocum("1330","./rmonAlarms/statist_rmon_rmonAlarm_m.htm?[AlarmCount]Query:rlMibTableInstancesInfoTableName=alarmTable[alarmsTable]partialKey:-Counter-#numOfEntries#","tblAlarms")
);
break;
}
case "5220" :
dataArr = new Array(getDocum("5230", "./sysinfo/system_general_settings_m.htm?[PortConfigTable]Filter:(ifIndex>=" + _top.firstPresentPort+")&&(ifIndex<=" + (_top.trunkFirstIndex-1) + ")&&(ifOperStatus!=6)"),
(_top.displayRouter) ? getDocum("3300","./tcam/Routing_Resources.htm") : null,
getDocum("2020","./Stack_manage/SessionTimeout.htm"),
getFolder("1220"),
getFolder("2920"),
getFolder("2040")
);
break;
case "5220~1220" :
if(_top.displayRouter) {
dataArr = new Array(getDocum("1360", "./sysinfo/system_general_time_m.htm"),
getDocum("2030", "./sntp/system_sntp_servers_m.htm?[sntp_interface_table]Query:rlSntpBroadcastInetIfIndex="+_top.ManagementInterfaceLogicalifIndex + "^[SourceAddressSelectionTable]Query:rlSourceAddressSelectionApp=sntp"),
getLastDocum("4340", "./sntp/system_sntp_interface_m.htm?[sntpConfigInetTable]Query:rlSntpBroadcastInetIfIndex=300000^[SNTPCount]Query:rlMibTableInstancesInfoTableName=rlSntpConfigBroadcastTable^[TblSntpInterface]partialKey:-Counter-#numOfEntries#","SystemSntpInterfaceSettingsTable")
);
} else {
dataArr = new Array(getDocum("1360", "./sysinfo/system_general_time_m.htm"),
getLastDocum("2030", "./sntp/system_sntp_servers_m.htm?[sntp_interface_table]Query:rlSntpBroadcastInetIfIndex="+_top.ManagementInterfaceLogicalifIndex + "^[SourceAddressSelectionTable]Query:rlSourceAddressSelectionApp=sntp")
);
}
break;
case "5220~2920" :
dataArr = new Array(getDocum("5250", "./snmpSecur/snmp_secur_globParameters_m_jq.htm"),
getDocum("2940", "./snmpSecur/snmp_secur_views_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=vacmViewTreeFamilyTable[vacmTable]partialKey:-Counter-#numOfEntries#","tblSnmpSecurViewsM"),
getDocum("2960", "./snmpSecur/snmp_secur_groupProfile_m.htm"+getSNMPGroupFilter()+ "^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","tblSnmpSecurGroupProfile"),
getDocum("2950", "./snmpSecur/snmp_secur_groupMembership_m_jq.htm","tblUsers"),
getDocum("2970", "./snmpSecur/snmp_secur_communities_m.htm","tblCommunities"),
getDocum("3000", "./snmpNote/snmp_notification_filter_m.htm?[snmpFilterCount]Query:rlMibTableInstancesInfoTableName=snmpNotifyFilterTable[snmpFilterTable]partialKey:-Counter-#numOfEntries#","snmpNotificationTable"),
getDocum("2990", "./snmpNote/snmp_notification_receiver_m.htm"+getSNMPNotifRecipV12Filter()+ "^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","tblSMNP_notification_receiver"),
getLastDocum("2991", "./snmpNote/snmp_notification_receiver_m_V3.htm"+getSNMPNotifRecipV3Filter()+ "^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","tblSMNP_notification_receiver_m_V3")
);
break;
case "5220~2040" :
dataArr = new Array(getDocum("2050", "./syslog/system_syslog_logparams_m.htm"),
getDocum("2060", "./syslog/system_syslog_servers_m.htm?[SourceAddressSelectionTable]Query:rlSourceAddressSelectionApp=syslog"),
getDocum("5260", "./syslog/system_syslog_memory_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlSyslogLogCacheTable[LogCacheVT]partialKey:-Counter-#numOfEntries#","systemLogMemTable"),
getLastDocum("1910", "./syslog/system_syslog_flash_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlSyslogLogTable[LogFileVT]partialKey:-Counter-#numOfEntries#","systemLogFlashTable")
);
break;
case "5310" :
if(_top.productFamily == 1) {
dataArr = new Array(getFolder("1370"),
getFolder("4070"),
getDocum("5320", "./dhcp/Binding_Database_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIpDhcpSnoopTable[dhcpBindingTable]partialKey:-Counter-#numOfEntries#", "DhcpSnoopingBindingDatabaseTable"),
getLastDocum("5330", "./dhcp/Trusted_Interfaces_smart_m.htm")
);
} else {
dataArr = new Array(getFolder("1370"),
getFolder("4070"),
getFolder("2600"),
getDocum("5320", "./dhcp/Binding_Database_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIpDhcpSnoopTable[dhcpBindingTable]partialKey:-Counter-#numOfEntries#", "DhcpSnoopingBindingDatabaseTable"),
getFolder("2740"),
getLastDocum("5330", "./dhcp/Trusted_Interfaces_m.htm")
);
}
break;
case "5310~1370":
dataArr = new Array(getDocum("1380","./DNS/system_ipconf_dnsServer_m.htm?[DomainName_Table]Filter:rlDnsClv2DomainNameSource = 1"));
break;
case "5310~2600" :
dataArr = new Array(
getLastDocum("2700", "./dhcp/Trusted_Interfaces_IPSG_m.htm")
);
break;
case "5310~4070" :
if(_top.productFamily == 1) {
dataArr = new Array(getDocum("4600","./dhcp/dhcp_server_m.htm"),
getDocum("4120","./dhcp/Interface_Settings_m.htm"),
getLastDocum("2670", "./dhcp/Trusted_Interfaces_smart_m.htm")
);
} else {
dataArr = new Array(getDocum("4601","./dhcp/dhcp_server_m.htm"),
getDocum("4120","./dhcp/Interface_Settings_m.htm"),
getLastDocum("2670", "./dhcp/Trusted_Interfaces_DHCP_m.htm")
);
}
break;
case "5310~2740" :
dataArr = new Array (getDocum("3950","./arp/Arp_properties.htm"),
getDocum("3960", "./dhcp/Trusted_Interfaces_ARP_m.htm"),
getDocum("3970", "./arp/AccessControl.htm"),
getDocum("3980", "./arp/Inspection_List_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIpArpInspectListTable^[ArpInterfaceTableVT]partialKey:-Counter-#numOfEntries#","inspectionListTable"),
getLastDocum("3990","./arp/VLAN_Settings_m.htm")
);
break;
case "1040" :
if(_top.productFamily == 1) {
var bandwidthFilter = "[IfVT]FixedKey:rlIfType=2^Filter:((rlPhdPortsModuleNumber="+_top.firstPresentModule+")&&(ifOperStatus!=6)&&(ifIndex<="+(trunkFirstIndex-1)+"))^[IfPolicyVT]Filter:((rlIfType=2)&&(rlPhdPortsModuleNumber="+_top.firstPresentModule+"))";
dataArr = new Array(getDocum("3100","./QosGlobal/qos_glob_general_cos_m.htm?[portPriorityTable]Filter:((rlPhdPortsModuleNumber="+_top.firstPresentModule+")&&(ifOperStatus!=6)&&(dot1dBasePort\<=" + (_top.trunkFirstIndex-1) + "))"),
getDocum("1140","./QosGlobal/qos_glob_general_queue_GE.htm"),
getDocum("1150","./QosQueue/qos_glob_queueMap_cosToQueue_m.htm?[HostParamTable]Filter:rlHostParamName='bridge_numOfTCPerPort'"),
getDocum("1160","./QosQueue/qos_glob_queueMap_dscpToQueue_m.htm"),
getDocum("1870","./QosGlobal/qos_glob_general_bandwidth_m.htm?"+bandwidthFilter),
getDocum("3120","./QosGlobal/qos_glob_egress_per_queue_m.htm?[IfPolicyVT]Filter:((rlIfType=2)&&(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(rlIfIndex<" + trunkFirstIndex + "))"),
getDocum("1120","./QosBasic/qos_basic_interfaceSettings_m.htm?Filter:rlIfType=2&&(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&((rlIfIndex>="+_top.StartingPortPerModuleArr[_top.firstPresentModule]+")&&(rlIfIndex<"+(_top.StartingPortPerModuleArr[_top.firstPresentModule]+52)+"))"),
getLastFolder("2810")
);
} else {
var bandwidthFilter = "[IfVT]FixedKey:rlIfType=2^Filter:((rlPhdPortsModuleNumber="+_top.firstPresentModule+")&&(ifOperStatus!=6)&&(ifIndex<="+(trunkFirstIndex-1)+"))^[IfPolicyVT]Filter:((rlIfType=2)&&(rlPhdPortsModuleNumber="+_top.firstPresentModule+"))";
dataArr = new Array(getDocum("3100","./QosGlobal/qos_glob_general_cos_m.htm?[portPriorityTable]Filter:((rlPhdPortsModuleNumber="+_top.firstPresentModule+")&&(ifOperStatus!=6)&&(dot1dBasePort\<=" + (_top.trunkFirstIndex-1) + "))"),
getDocum("1140","./QosGlobal/qos_glob_general_queue_GE.htm"),
getDocum("1150","./QosQueue/qos_glob_queueMap_cosToQueue_m.htm?[HostParamTable]Filter:rlHostParamName='bridge_numOfTCPerPort'"),
getDocum("1160","./QosQueue/qos_glob_queueMap_dscpToQueue_m.htm"),
getDocum("1870","./QosGlobal/qos_glob_general_bandwidth_m.htm?"+bandwidthFilter),
getDocum("3120","./QosGlobal/qos_glob_egress_per_queue_m.htm?[IfPolicyVT]Filter:((rlIfType=2)&&(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(rlIfIndex<" + trunkFirstIndex + "))"),
getDocum("1120","./QosBasic/qos_basic_interfaceSettings_m.htm?Filter:rlIfType=2&&(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&((rlIfIndex>="+_top.StartingPortPerModuleArr[_top.firstPresentModule]+")&&(rlIfIndex<"+(_top.StartingPortPerModuleArr[_top.firstPresentModule]+52)+"))"),
getFolder("5370"),
getLastFolder("2810")
);
}
break;
case "1040~2810":
if (_top.productFamily == 1)
{
dataArr = new Array (getLastDocum("2910","./QoSStatistics/Queues_Statistics.htm"));
}
else
{
dataArr = new Array ((!_top.displayRouter) ? getDocum("2890","./QoSStatistics/PolicerStatistics.htm") : null,
(!_top.displayRouter) ? getDocum("2900","./QoSStatistics/Aggregate_Policer.htm") : null,
getLastDocum("2910","./QoSStatistics/Queues_Statistics.htm"));
}
break;
case "1040~5370" :
dataArr = new Array(getDocum("3230","./QosAdvanced/qos_advanced_generSettings_m.htm"),
getDocum("2840","./QosPolicy/qos_advance_polPropert_DscpMapping_m.htm"),
getDocum("2850","./QosPolicy/qos_advance_polPropert_classMap_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlQosClassMapTable[QosClassMapTable1]partialKey:-Counter-#numOfEntries#","tblClassMapping"),
(!_top.displayRouter) ? getDocum("2860","./QosPolicy/qos_advance_polPropert_aggregatePolicer_m.htm?[PolicerCount]Query:rlMibTableInstancesInfoTableName=rlQosPolicerTable[PolicerVT]partialKey:-Counter-#numOfEntries#","qosAdvanAggPolTable") : null,
getDocum("2870","./QosProfile/qos_advance_polProfile_policy_m.htm?[PolicyCount]Query:rlMibTableInstancesInfoTableName=rlQosPolicyMapTable[PolicyMapTable]partialKey:-Counter-#numOfEntries#","qosAdvanProfileTable"),
getDocum("3170","./QosProfile/PolicyClassMap_MIB.htm"),
getDocum("2880","./QosProfile/qos_advance_polProfile_policyBinding_m.htm?[IfPolicyVT]Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ")&&(ifOperStatus!=6)&&(rlIfIndex<=" + (_top.trunkFirstIndex-1) + "))^policyName"),
getLastDocum("5380", "./QosProfile/qos_advance_polProfile_policyBinding_Table_m.htm??[IfPolicyVT]Filter:(rlIfType=2)&&((rlPhdPortsModuleNumber=1)&&(ifOperStatus!=6)&&(rlIfIndex<=" + (_top.trunkFirstIndex-1) + "))")
);
break;
case "2080":
var firstPortIndex = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) - 1;
var lastPortIndex = parseInt(_top.lastPortPerModuleArr[_top.firstPresentModule]);
if (_top.moduleType == "1" || _top.moduleType == "2") {
dataArr = new Array(
getDocum("3240", "./diagnostics/maintenance_diagnos_copperCable_test_m.htm?[PortInfo]Query:((ifOperStatus!=6)&&(swIfIndex=" + (firstPortIndex + 1) + "))[PhyTestGet]partialKey:From-(ifIndex=" + firstPortIndex + "@rlPhyTestGetType=24)-To-(ifIndex=" + (firstPortIndex + 1) + "@rlPhyTestGetType=24)[PhyTestSet]Query:(ifIndex=" + (firstPortIndex + 1) + ")[GreenEthPortTable]partialKey:From-(ifIndex=" + firstPortIndex + "@rlGreenEthPortSavingTypeValue=2)-To-(ifIndex=" + (firstPortIndex + 1) + "@rlGreenEthPortSavingTypeValue=2)"),
getDocum("3220", "./sysinfo/ping.htm"),
getDocum("3400", "./sysinfo/Traceroute_m.htm"),
getLastDocum("2110", "./diagnostics/maintenance_diagnos_portMirroring_m.htm")
);
} else {
dataArr = new Array(
getDocum("3240", "./diagnostics/maintenance_diagnos_copperCable_test_m.htm?[PortInfo]Query:((ifOperStatus!=6)&&(swIfIndex=" + (firstPortIndex + 1) + "))[PhyTestGet]partialKey:From-(ifIndex=" + firstPortIndex + "@rlPhyTestGetType=24)-To-(ifIndex=" + (firstPortIndex + 1) + "@rlPhyTestGetType=24)[PhyTestSet]Query:(ifIndex=" + (firstPortIndex + 1) + ")[GreenEthPortTable]partialKey:From-(ifIndex=" + firstPortIndex + "@rlGreenEthPortSavingTypeValue=2)-To-(ifIndex=" + (firstPortIndex + 1) + "@rlGreenEthPortSavingTypeValue=2)"),
getDocum("2100", "./diagnostics/maintenance_diagnos_opticTrans_m.htm?[PhyTestGet]partialKey:From-(ifIndex=0@rlPhyTestGetType=0)-To-(ifIndex=0@rlPhyTestGetType=0)[PortInfo]partialKey:From-(swIfIndex=0)-To-(swIfIndex=0)[Inventory]Filter:(rlInventoryEntUnitOrIfindex=1)"),
getDocum("3220", "./sysinfo/ping.htm"),
getDocum("3400", "./sysinfo/Traceroute_m.htm"),
getLastDocum("2110", "./diagnostics/maintenance_diagnos_portMirroring_m.htm")
);
}
break;
case "1620~1220":
dataArr = new Array(getDocum("1360","./sysinfo/system_general_time_m.htm"),
getDocum("2030","./sntp/system_sntp_servers_m.htm?[sntp_interface_table]Query:rlSntpBroadcastInetIfIndex="+_top.ManagementInterfaceLogicalifIndex + "^[SourceAddressSelectionTable]Query:rlSourceAddressSelectionApp=sntp"),
getDocum("4340","./sntp/system_sntp_interface_m.htm?[sntpConfigInetTable]Query:rlSntpBroadcastInetIfIndex=300000^[SNTPCount]Query:rlMibTableInstancesInfoTableName=rlSntpConfigBroadcastTable^[TblSntpInterface]partialKey:-Counter-#numOfEntries#","SystemSntpInterfaceSettingsTable"),
getDocum("1230","./sntp/system_sntp_authen_m_jq.htm"),
(_top.productFamily == 1)?null:getDocum("2640","./netauthen/security_time_range_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlTBITimeRangeTable[time_table]partialKey:-Counter-#numOfEntries#","tblTimeRange"),
(_top.productFamily == 1)?null:getLastDocum("3160","./netauthen/security_recurring_range_m.htm"));
break;
case "1620~2040":
dataArr = new Array(getDocum("2050","./syslog/system_syslog_logparams_m.htm"),
getLastDocum("2060","./syslog/system_syslog_servers_m.htm?[SourceAddressSelectionTable]Query:rlSourceAddressSelectionApp=syslog"));
break;
case "2070":
if(_top.productFamily == 1)
{
dataArr = new Array(getDocum("2160","./FileMgmt/maintenance_file_fileDownload_m.htm"),
getDocum("2170","./FileMgmt/maintenance_file_activeImage_m.htm"),
getDocum("2180","./FileMgmt/maintenance_file_fileUpload_m.htm"),
getLastDocum("2200","./FileMgmt/maintenance_file_copyFiles_m.htm")
);
}
else
{
dataArr = new Array(getDocum("2160","./FileMgmt/maintenance_file_fileDownload_m.htm"),
getDocum("2170","./FileMgmt/maintenance_file_activeImage_m.htm"),
getDocum("2180","./FileMgmt/maintenance_file_fileUpload_m.htm"),
getDocum("2200","./FileMgmt/maintenance_file_copyFiles_m.htm"),
getLastDocum("2210","./FileMgmt/DHCPAutoConfig_jq.htm")
);
}
break;
case "1620~2080":
var firstPortIndex = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) - 1;
var lastPortIndex = parseInt(_top.lastPortPerModuleArr[_top.firstPresentModule]);
dataArr = new Array(getDocum("3240", "./diagnostics/maintenance_diagnos_copperCable_test_m.htm?[PortInfo]Query:((ifOperStatus!=6)&&(swIfIndex=" + (firstPortIndex + 1) + "))[PhyTestGet]partialKey:From-(ifIndex=" + firstPortIndex + "@rlPhyTestGetType=24)-To-(ifIndex=" + (firstPortIndex + 1) + "@rlPhyTestGetType=24)[PhyTestSet]Query:(ifIndex=" + (firstPortIndex + 1) + ")[GreenEthPortTable]partialKey:From-(ifIndex=" + firstPortIndex + "@rlGreenEthPortSavingTypeValue=2)-To-(ifIndex=" + (firstPortIndex + 1) + "@rlGreenEthPortSavingTypeValue=2)"),
getDocum("2100","./diagnostics/maintenance_diagnos_opticTrans_m.htm?[PhyTestGet]partialKey:From-(ifIndex=0@rlPhyTestGetType=0)-To-(ifIndex=0@rlPhyTestGetType=0)[PortInfo]partialKey:From-(swIfIndex=0)-To-(swIfIndex=0)[Inventory]Filter:(rlInventoryEntUnitOrIfindex=1)"),
getDocum("2110","./diagnostics/maintenance_diagnos_portMirroring_m.htm"),
getLastDocum("2120","./diagnostics/maintenance_diagnos_cpuUtil_m.htm"));
break;
case "1010~4790":
dataArr = new Array(getDocum("4810","./UDLD/udld_global_m_jq.htm"),
getDocum("4811","./UDLD/udld_interface_settings_m_jq.htm"),
getLastDocum("4813","./UDLD/udld_neighbors_jq.htm"));
break;
case "1620~2140":
dataArr = new Array(getDocum("2220","NAV_31"),
getDocum("2230","NAV_32","oLLDPPortSet"),
getDocum("2240","NAV_33","oLLDPMedNWPol"),
getDocum("2250","NAV_34","oLLDPMEDPrtSet"),
getDocum("3140","NAV_35","oLocalInformation"),
getDocum("3150","NAV_36"),
getDocum("2260","NAV_37","oNeighborInformation"),
getDocum("2270","NAV_39","oLLDPStatistics"),
getLastDocum("2280","NAV_40","oLLDPOverloading"));
break;
case "1620~3270":
dataArr = new Array(getDocum("3280", "./cdp/cdp_properties_m.htm"),
getDocum("3310", "./cdp/cdp_interface_settings_m.htm?Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +") && (cdpInterfaceIfIndex<=" + (_top.trunkFirstIndex-1) + ")&&(ifOperStatus!=6))"),
getDocum("3390", "./cdp/CDPLocalInformation_m.htm?[CdpTlvVT]Query:(rlCdpTlvIfIndex="+(_top.firstPresentPort)+")"),
getDocum("3260", "./cdp/cdp_neighbor_m.htm?[neighborCount]Query:rlMibTableInstancesInfoTableName=cdpCacheTable[cdpCacheVT]partialKey:-Counter-#numOfEntries#","cdpNeighborMTable"),
getLastDocum("4330", "./cdp/cdp_statistics_Table_m.htm?[InterfaceCountersTable]Filter:((ifOperStatus!=6)&&(rlPhdPortsModuleNumber="+ _top.firstPresentModule +"))^[InterfaceCountersTable]partialKey:"+_top.StartingPortPerModuleArr[_top.firstPresentModule]+"-Counter-"+_top.NumberOfPortPerModuleArr[_top.firstPresentModule]));
break;
case "1010":
var firstPortIndex = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) -1;
var lastPortIndex = parseInt(_top.lastPortPerModuleArr[_top.firstPresentModule]);
if (_top.isPoE == true)
{
dataArr = new Array(getDocum("1480","./BridgeIf/bridg_interface_PortConfig_Router_m.htm?[TimeBasedPortVT]Filter:( (ifIndex>=" + firstPortIndex+")&&(ifIndex<=" + lastPortIndex+") )[PortConfigTable]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +") && (ifOperStatus!=6)&&(ifIndex<=" + (_top.trunkFirstIndex-1) + "))",null,[_top.Units]),
getFolder("1060"),
getDocum("2290", "NAV_46", "oRTGEP"),
getFolder("1840"),
getLastFolder("2140")
);
}
else
{
if(_top.eeeSupported == true)
{
dataArr = new Array(getDocum("1480","./BridgeIf/bridg_interface_PortConfig_Router_m.htm?[TimeBasedPortVT]Filter:( (ifIndex>=" + firstPortIndex+")&&(ifIndex<=" + lastPortIndex+") )[PortConfigTable]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +") && (ifOperStatus!=6)&&(ifIndex<=" + (_top.trunkFirstIndex-1) + "))",null,[_top.Units]),
getFolder("1060"),
getDocum("2290", "NAV_46", "oRTGEP"),
getLastFolder("2140")
);
} else {
dataArr = new Array(getDocum("1480","./BridgeIf/bridg_interface_PortConfig_Router_m.htm?[TimeBasedPortVT]Filter:( (ifIndex>=" + firstPortIndex+")&&(ifIndex<=" + lastPortIndex+") )[PortConfigTable]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +") && (ifOperStatus!=6)&&(ifIndex<=" + (_top.trunkFirstIndex-1) + "))",null,[_top.Units]),
getLastFolder("1060")
);
}
}
break;
case "1010~1060":
dataArr = new Array(getDocum("1340","./BridgeIf/bridg_interface_lagMembership_m.htm?[Agg_Port_Tab]Filter:(dot3adAggPortActorAdminKey!=0)^[lag_Data_Tbl]partialKey:From-(ifIndex=" + (_top.trunkFirstIndex - 1) + ")-To-(ifIndex=" + parseInt(_top.trunkFirstIndex + _top.NumberOfTrunks,10) + ")")
);
break;
case "1010~1840":
dataArr = new Array(getDocum("1860","./poe/system_poe_properties_m.htm"),
getDocum("5270","./poe/system_poe_interface_m.htm?[pethPsePortTableVT]Filter:(pethPsePortGroupIndex=" + _top.firstPoeUnit + ")&&(ifOperStatus!=6)&&(rlPethPsePortSupportPoe!=2)"),
getLastDocum("5280","./poe/system_poe_interfacetwo_m.htm?[pethPsePortTableVT]Filter:(pethPsePortGroupIndex=" + _top.firstPoeUnit + ")&&(ifOperStatus!=6)&&(rlPethPsePortSupportPoe!=2)")
);
break;
case "1010~2290":
dataArr = new Array(getDocum("2300","NAV_12"),
getLastDocum("2310","NAV_13","oRTGEP"));
break;
case "1010~2140":
dataArr = new Array(
getDocum("2230", "NAV_32", "oLLDPPortSet"),
getDocum("2250", "NAV_34", "oLLDPMEDPrtSet"),
getDocum("3150", "NAV_36", ""),
getDocum("2260", "NAV_37", "oNeighborInformation"),
getLastDocum("2240", "NAV_33", "oLLDPMedNWPol")
);
break;
case "1410":
var firstPortIndex = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) -1;
var lastPortIndex = parseInt(_top.lastPortPerModuleArr[_top.firstPresentModule]);
var firstPort = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]);
var lastPort = firstPort + _top.prsntPorts;
var currSearchPart = "Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6)&&(dot1dBasePort<=" + (_top.trunkFirstIndex-1) + "))";
var currSearchPartWithoutLags = "[portVlanVT]Filter:(((rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6))||(dot1dBasePort<" + (_top.trunkFirstIndex) + "))";
if(_top.productFamily == 1)
{
dataArr = new Array(
getDocum("1420", "./Vmember/bridg_vlan_properties_m.htm?[VlansCount]Query:rlMibTableInstancesInfoTableName=rldot1qVlanMembershipTypeTable[VlanInfo]partialKey:-Counter-#numOfEntries#[VlanName]partialKey:-Counter-#numOfEntries#[SNMP]partialKey:From-(ifIndex=99999)-Counter-#numOfEntries#","bridgVlanProTable"),
getDocum("1450", "./Vmember/bridg_vlan_interfaceStngs_m.htm?[VlanInterface]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6)&&(dot1dBasePort<=" + (_top.trunkFirstIndex-1) + "))^[VlanModeTable]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule + ")&&(ifOperStatus!=6))"),
getDocum("1470","./Vmember/bridg_vlan_membership_m.htm?[VlanStatic]Query:dot1qVlanIndex="+_top.defaultVlanId+"[VlanCurrent]Query:dot1qVlanTimeMark=0@dot1qVlanIndex="+_top.defaultVlanId+"[PortMode]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")[MulticastVlan]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")[CustomerMulticastVlan]Query:vlanTriplePlayMulticastTvMulticastTvVID="+_top.defaultVlanId+"[vlanVoicePortTable]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")[rldot1qPortVlanStaticTable]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")"),
getFolder("2330"),
getLastFolder("1760")
);
}
else
{
dataArr = new Array(
getDocum("1420", "./Vmember/bridg_vlan_properties_m.htm?[VlansCount]Query:rlMibTableInstancesInfoTableName=rldot1qVlanMembershipTypeTable[VlanInfo]partialKey:-Counter-#numOfEntries#[VlanName]partialKey:-Counter-#numOfEntries#[SNMP]partialKey:From-(ifIndex=99999)-Counter-#numOfEntries#","bridgVlanProTable"),
getDocum("1450", "./Vmember/bridg_vlan_interfaceStngs_m.htm?[VlanInterface]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6)&&(dot1dBasePort<=" + (_top.trunkFirstIndex-1) + "))^[VlanModeTable]Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule + ")&&(ifOperStatus!=6))",null,[_top.Units]),
getDocum("1470","./Vmember/bridg_vlan_membership_m.htm?[VlanStatic]Query:dot1qVlanIndex="+_top.defaultVlanId+"[VlanCurrent]Query:dot1qVlanTimeMark=0@dot1qVlanIndex="+_top.defaultVlanId+"[PortMode]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")[MulticastVlan]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")[CustomerMulticastVlan]Query:vlanTriplePlayMulticastTvMulticastTvVID="+_top.defaultVlanId+"[vlanVoicePortTable]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")[rldot1qPortVlanStaticTable]partialKey:From-(ifIndex=" + firstPortIndex + ")-To-(ifIndex=" + lastPortIndex + ")"),
getDocum("1440", "./gvrp/bridg_vlan_gvrpParam_m.htm?"+ currSearchPart),
getFolder("2330"),
getLastFolder("1760")
);
}
break;
case "1410~2330":
if(_top.isSmart) {
dataArr = new Array (getDocum("2340","./vlanGroups/macBasedGroups.htm?[Counter]Query:rlMibTableInstancesInfoTableName=vlanMacBaseVlanGroupTable[mac_Group]partialKey:-Counter-#numOfEntries#","macBasedGroupsTable"),
getLastDocum("2360","./vlanGroups/mappingGroupsToVlan.htm?[Counter]Query:rlMibTableInstancesInfoTableName=vlanMacBaseVlanPortTable[mac_Group_Vlan]partialKey:-Counter-#numOfEntries#","MBGroupsVlanTable"));
} else {
if(!_top.displayRouter) {
dataArr = new Array (getDocum("2340","./vlanGroups/macBasedGroups.htm?[Counter]Query:rlMibTableInstancesInfoTableName=vlanMacBaseVlanGroupTable[mac_Group]partialKey:-Counter-#numOfEntries#","macBasedGroupsTable"),
getDocum("2360","./vlanGroups/mappingGroupsToVlan.htm?[Counter]Query:rlMibTableInstancesInfoTableName=vlanMacBaseVlanPortTable[mac_Group_Vlan]partialKey:-Counter-#numOfEntries#","MBGroupsVlanTable"),
getDocum("2350","./vlanGroups/bridg_vlan_protocolGroup_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=dot1vProtocolGroupTable[Proto_Group]partialKey:-Counter-#numOfEntries#","protocolBasedGroupsTable"),
getLastDocum("4130","./vlanGroups/PBGroupsToVlan.htm?[Counter]Query:rlMibTableInstancesInfoTableName=dot1vProtocolPortTable[protocol_Group_Vlan]partialKey:-Counter-#numOfEntries#","PBGroupsVlanTable"));
} else {
dataArr = new Array(getDocum("2350","./vlanGroups/bridg_vlan_protocolGroup_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=dot1vProtocolGroupTable[Proto_Group]partialKey:-Counter-#numOfEntries#","protocolBasedGroupsTable"),
getLastDocum("4130","./vlanGroups/PBGroupsToVlan.htm?[Counter]Query:rlMibTableInstancesInfoTableName=dot1vProtocolPortTable[protocol_Group_Vlan]partialKey:-Counter-#numOfEntries#","PBGroupsVlanTable"));
}
}
break;
case "1410~1760":
dataArr = new Array(
getDocum("1820","./VoiceVlan/voice_OUI.htm?[CounterVoice]Query:rlMibTableInstancesInfoTableName=vlanVoiceOUIBasedTable[voiceOUITable]partialKey:-Counter-#numOfEntries#","tblOUI"),
getLastDocum("3320","./VoiceVlan/voice_OUI_int.htm?Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +") && (ifOperStatus!=6)&&(ifIndex<=" + (_top.trunkFirstIndex-1) + "))"));
break;
case "1410~4000":
dataArr = new Array(getDocum("4010","./multiBridge/CPE_VLAN_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=vlanTriplePlayTable[CPETable]partialKey:-Counter-#numOfEntries#","CPEVlanTable"),
getLastDocum("4020","./multiBridge/port_MVM.htm?[PortModeTable]Filter:(vlanPortModeState=7)"));
break;
case "1410~4140":
dataArr = new Array(getDocum("4150","./multiBridge/multi_group_to_vlan_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIgmpSnoopMulticastTvTable[igmpMultiTv]partialKey:-Counter-#numOfEntries#","multiGroupTvTable"),
getLastDocum("4160","./multiBridge/port_multi_membership.htm?[PortModeTable]Filter:(vlanPortModeState=2)"));
break;
case "1020":
var firstPort = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) - 1;
if (_top.productFamily == 1) {
dataArr = new Array(
getDocum("1080", "./stp/bridg_spanTree_stp_properties_m.htm"),
getDocum("1090", "./stp/bridg_spanTree_stp_interfaceStngs_Port_m.htm?[STPPortTable]Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ")&&(ifOperStatus!=6))"),
getDocum("1100", "./rstp/bridg_spanTree_rstp_m.htm?Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ") && (ifOperStatus!=6)&&(dot1dStpPort<=" + (_top.trunkFirstIndex - 1) + "))"),
getDocum("1550", "./mstp/bridg_spanTree_mstp_properties_m.htm?Filter:(rldot1sMstpInstanceVlanId>0)"),
getDocum("1610", "./mstp/bridg_spanTree_mstp_instanceStngs_m.htm?[mstpInstTable]Query:rldot1sMstpInstanceId=1[mstpVlanTable]Query:rldot1sMstpInstanceVlanId=1"),
getLastDocum("1650", "./mstp/bridg_spanTree_mstp_interfaceStngs_m.htm?[mstpInstPortTable]Filter:(rlPhdPortsModuleNumber=" + _top.firstPresentModule + ")^partialKey:From-(rldot1sMstpInstancePortMstiId=1@rldot1sMstpInstancePortPort=" + firstPort + ")-Counter-" + _top.NumberOfPortPerModuleArr[_top.firstPresentModule], [true])
);
} else {
dataArr = new Array(
getDocum("1080", "./stp/bridg_spanTree_stp_properties_m.htm"),
getDocum("1090", "./stp/bridg_spanTree_stp_interfaceStngs_Port_m.htm?[STPPortTable]Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ")&&(ifOperStatus!=6))"),
getDocum("1100", "./rstp/bridg_spanTree_rstp_m.htm?Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ") && (ifOperStatus!=6)&&(dot1dStpPort<=" + (_top.trunkFirstIndex - 1) + "))"),
getDocum("1550", "./mstp/bridg_spanTree_mstp_properties_m.htm?Filter:(rldot1sMstpInstanceVlanId>0)"),
getDocum("1610", "./mstp/bridg_spanTree_mstp_instanceStngs_m.htm?[mstpInstTable]Query:rldot1sMstpInstanceId=1[mstpVlanTable]Query:rldot1sMstpInstanceVlanId=1"),
getLastDocum("1650", "./mstp/bridg_spanTree_mstp_interfaceStngs_m.htm?[mstpInstPortTable]Filter:(rlPhdPortsModuleNumber=" + _top.firstPresentModule + ")^partialKey:From-(rldot1sMstpInstancePortMstiId=1@rldot1sMstpInstancePortPort=" + firstPort + ")-Counter-" + _top.NumberOfPortPerModuleArr[_top.firstPresentModule], [true])
);
}
break;
case "1030":
if(_top.productFamily == 1)
{
dataArr = new Array(
getDocum("1180","./Adrs_tbl/bridg_frdData_dynamicAddress_m.htm?[c1]Query:rlMibTableInstancesInfoTableName=dot1qStaticUnicastTable[c2]Query:rlMibTableInstancesInfoTableName=dot1qTpFdbTable[AddressDynamicVT]Filter:((dot1qTpFdbStatus!=1)&&(dot1qTpFdbStatus!=5))&&((ifOperStatus!=6)||(dot1qTpFdbPort>"+parseInt(_top.NumberOfPorts)+"))^partialKey:-Counter-#numOfEntries#","dynamicAddTable"),
getDocum("1170","./Adrs_tbl/bridg_frdData_staticAddress_m.htm?[AddressStaticCount]Query:rlMibTableInstancesInfoTableName=dot1qStaticUnicastTable[AddressStaticVT]partialKey:-Counter-#numOfEntries#","staticAddTable"),
getLastDocum("2370","./Adrs_tbl/reservedMacAddress_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlSpecialBpduTable[ReservedMACAddTable]partialKey:-Counter-#numOfEntries#","resMacAddTable")
);
}
else
{
dataArr = new Array(
getDocum("1180","./Adrs_tbl/bridg_frdData_dynamicAddress_m.htm?[c1]Query:rlMibTableInstancesInfoTableName=dot1qStaticUnicastTable[c2]Query:rlMibTableInstancesInfoTableName=dot1qTpFdbTable[AddressDynamicVT]Filter:((dot1qTpFdbStatus!=1)&&(dot1qTpFdbStatus!=5))&&((ifOperStatus!=6)||(dot1qTpFdbPort>"+parseInt(_top.NumberOfPorts)+"))^partialKey:-Counter-#numOfEntries#","dynamicAddTable"),
getDocum("1170","./Adrs_tbl/bridg_frdData_staticAddress_m.htm?[AddressStaticCount]Query:rlMibTableInstancesInfoTableName=dot1qStaticUnicastTable[AddressStaticVT]partialKey:-Counter-#numOfEntries#","staticAddTable"),
getLastDocum("2370","./Adrs_tbl/reservedMacAddress_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlSpecialBpduTable[ReservedMACAddTable]partialKey:-Counter-#numOfEntries#","resMacAddTable")
);
}
break;
case "1680":
if (_top.displayRouter || _top.productFamily == 1)
{
dataArr = new Array(getDocum("2390","NAV_21"),
getDocum("1690","NAV_27","IGMPSnooping"),
getDocum("2420","NAV_22","MLDSnooping"),
getDocum("2440","NAV_26"),
getDocum("2450","./multiBridge/bridg_multicast_forwardAll_m.htm"),
getDocum("2460","./multiBridge/bridg_multicast_unregistered_m.htm?unit="+ _top.firstPresentModule+"@port"),
getDocum("2430","NAV_25","RTIGMPMLDSnoopGroupList"),
getDocum("5290","NAV_23","RTMulticastGroup"),
getLastDocum("5300","NAV_24","RTIPMulticastGroup")
);
}
else
{
dataArr = new Array(getDocum("2390","NAV_21"),
getDocum("1690","NAV_27","IGMPSnooping"),
getDocum("2420","NAV_22","MLDSnooping"),
getDocum("2440","NAV_26"),
getDocum("2450","./multiBridge/bridg_multicast_forwardAll_m.htm"),
getDocum("2460","./multiBridge/bridg_multicast_unregistered_m.htm?unit="+ _top.firstPresentModule+"@port"),
getDocum("2430","NAV_25","RTIGMPMLDSnoopGroupList"),
getDocum("5290","NAV_23","RTMulticastGroup"),
getLastDocum("5300", "NAV_24","RTIPMulticastGroup")
);
}
break;
case "1200":
if(_top.productFamily == 1 || !_top.displayRouter)
{
dataArr = new Array(getFolder("4570"),
getLastFolder("4580")
);
}
else
{
dataArr = new Array(getFolder("4570"),
getLastFolder("4580")
);
}
break;
case "1200~4570":
if(_top.isSmart)
{
dataArr = new Array(getDocum("2500","./MgmtInterface/Ipv4_interface.htm?[VlanVT]Filter:((ifIndex>=100000)&&(ifIndex<300000)&&(ifOperStatus==1))[IP]Filter:(rsIpAdEntOwner=2)||((rsIpAdEntOwner!=3)&&(ipAdEntAddr>1.0.0.0)||((ipAdEntIfIndex>"+parseInt(top.NumberOfPorts)+")&&(ifOperStatus!=6)&&(ipAdEntAddr>1.0.0.0)))[IPLoopBack]Filter:((ipAdEntIfIndex>="+parseInt(_top.loopbackFirstIndex)+")&&(ipAdEntIfIndex<"+(parseInt(_top.loopbackFirstIndex)+parseInt(_top.loopbackNumOfPorts))+")&&(ifOperStatus!=6))"),
getLastDocum("1240","./ipaddr/system_ipconf_arp_m.htm?[ArpCount]Query:rlMibTableInstancesInfoTableName=ipNetToMediaTable[ARP_table]partialKey:-Counter-#numOfEntries#","systemIpArpTable")
);
}
else
{
if (_top.displayRouter)
{
dataArr = new Array(getDocum("5410","./ipaddr/system_ipconf_ipInterface_m.htm?[IP_Interface_Tab]Filter:(rsIpAdEntOwner!=3)^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","SystemIpConfInterfaceTable"),
getDocum("2490","./routing/ip_rout.htm?[RoutingDistance]Query:rlInetRoutingDistanceType=1[Counter]Query:rlMibTableInstancesInfoTableName=rlIpStaticRouteTable[IP_Route_Table]partialKey:-Counter-#numOfEntries#","staticRoutesTable"),
getLastDocum("1240","./ipaddr/system_ipconf_arp_m.htm?[ArpCount]Query:rlMibTableInstancesInfoTableName=ipNetToMediaTable[ARP_table]partialKey:-Counter-#numOfEntries#","systemIpArpTable")
);
} else {
dataArr = new Array(getDocum("2500", "./MgmtInterface/Ipv4_interface.htm?[VlanVT]Filter:((ifIndex>=100000)&&(ifIndex<300000)&&(ifOperStatus==1))[IP]Filter:(rsIpAdEntOwner=2)||((rsIpAdEntOwner!=3)&&(ipAdEntAddr>1.0.0.0)||((ipAdEntIfIndex>" + parseInt(top.NumberOfPorts) + ")&&(ifOperStatus!=6)&&(ipAdEntAddr>1.0.0.0)))[IPLoopBack]Filter:((ipAdEntIfIndex>=" + parseInt(_top.loopbackFirstIndex) + ")&&(ipAdEntIfIndex<" + (parseInt(_top.loopbackFirstIndex) + parseInt(_top.loopbackNumOfPorts)) + ")&&(ifOperStatus!=6))"),
getLastDocum("1240","./ipaddr/system_ipconf_arp_m.htm?[ArpCount]Query:rlMibTableInstancesInfoTableName=ipNetToMediaTable[ARP_table]partialKey:-Counter-#numOfEntries#","systemIpArpTable")
);
}
}
break;
case "1200~4580":
if((_top.isXModel) && (!_top.isHybridMode) && (_top.productFamily == 4))
{
dataArr = new Array(
getDocum("2520","./ipaddr/ipconf_IPv6Interface_m_jq.htm"),
getDocum("3210","./ipaddr/IPv6Address_jq.htm"),
getLastDocum("2530","NAV_4","oDefaultGateway")
);
}
else if(_top.productFamily == 4)
{
dataArr = new Array(
getDocum("2520","./ipaddr/ipconf_IPv6Interface_m_jq.htm"),
getDocum("3210","./ipaddr/IPv6Address_jq.htm"),
(_top.displayRouter) ? getLastDocum("2530","./routing/DefaultGateway_m_jq.htm") : getLastDocum("2530","NAV_4","oDefaultGateway")
);
}
else
{
dataArr = new Array(
getDocum("2520","./ipaddr/ipconf_IPv6Interface_m_jq.htm"),
(_top.productFamily == 2) ? getDocum("2540","./ipaddr/IPv6Tunnel_jq.htm") : null,
getDocum("3210","./ipaddr/IPv6Address_jq.htm"),
(_top.displayRouter) ? getDocum("2530","./routing/DefaultGateway_m_jq.htm") : getDocum("2530","NAV_4","oDefaultGateway"),
getDocum("2560","./routing/IPv6_routes_m_jq.htm"),
getDocum("2550","NAV_6","oIPv6Neighbors")
);
}
break;
case "1200~4570~4600":
dataArr = new Array (getDocum("2650","./dhcp/dhcp_server_m.htm"),
getDocum("4120","./Dhcp/Interface_Settings_m.htm"),
getDocum("2670","./dhcp/Trusted_Interfaces_DHCP_m.htm"),
getLastDocum("2680","./dhcp/Binding_Database_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIpDhcpSnoopTable[dhcpBindingTable]partialKey:-Counter-#numOfEntries#","DhcpSnoopingBindingDatabaseTable"));
break;
case "1200~4570~4200":
dataArr = new Array(getDocum("4210","./RIPv2/properties.htm"),
getDocum("4220","./RIPv2/settings.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rip2IfConfTable^[ripTable]partialKey:-Counter-#numOfEntries#","tblRIP"),
getDocum("4230","./RIPv2/rip_stats.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rip2IfStatTable[ripIfStatTable]partialKey:-Counter-#numOfEntries#","ripStatsTable"),
getLastDocum("4240","./RIPv2/peer_rout.htm"));
break;
case "1200~4570~4300":
dataArr = new Array(getDocum("4310","./RIPv2/ripv2_IP_Access_List_m.htm"),
getLastDocum("4320","./RIPv2/ripv2_IP_Address_List_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIpStdAclTable[rlIpStdAclTableVT]partialKey:-Counter-#numOfEntries#","SourceIPV4AddressListTable"));
break;
case "1200~4570~5050":
dataArr = new Array(getDocum("4290","./routing/vrrp_setting_m.htm"),
getLastDocum("5070","./routing/vrrp_statistics_m_jq.htm"));
break;
case "1200~1510":
if (_top.displayRouter)
{
dataArr = new Array (getDocum("1520","./ipaddr/dhcp_server.htm"),
getLastDocum("1530","./ipaddr/dhcp_interfaces_router.htm?[Counter]Query:rlMibTableInstancesInfoTableName=ipAddrTable[IP_Interface_Tab]partialKey:-Counter-#numOfEntries#","tblDhcpInterRouter"));
break;
}
else
{
dataArr = new Array (getDocum("1520","./ipaddr/dhcp_server.htm"),
getLastDocum("3090","./ipaddr/dhcp_interfaces.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlDhcpRelayInterfaceTable[rlDhcpRelayInterfaceTableVT]partialKey:-Counter-#numOfEntries#","tblDhcpInter"));
break;
}
case "1200~1370":
dataArr = new Array(getDocum("1380","./DNS/system_ipconf_dnsServer_m.htm?[DomainName_Table]Filter:rlDnsClv2DomainNameSource = 1"),
getDocum("4630","./DNS/dns_search_list_m_jq.htm"),
getLastDocum("1390","./DNS/system_ipconf_hostMapping_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlDnsClv2UnifiedCacheTable[CacheTable]partialKey:-Counter-#numOfEntries#","hostMapTable"));
break;
case "1200~4570~4480":
dataArr = new Array(getDocum("4490","./dhcpServer/dhcp_server_properties_m_jq.htm"),
getDocum("4500","../dhcpServer/dhcp_server_Network_Pool_m_jq.htm"),
getDocum("4510","./dhcpServer/dhcp_server_excluded_Addresses_m_jq.htm"),
getDocum("4520","../dhcpServer/dhcp_server_Static_Hosts_m_jq.htm"),
getDocum("4550","../dhcpServer/dhcp_server_DHCP_Options_m_jq.htm"),
getLastDocum("4530","./dhcpServer/dhcp_server_Address_Binding_m_jq.htm"));
break;
case "1200~4580~4610":
dataArr = new Array(getDocum("4640","./Dhcp/dhcpv6_global_m_jq.htm"),
getLastDocum("4650","./Dhcp/dhcpv6_int_m_jq.htm"));
break;
case "1200~4580~4670":
dataArr = new Array(getDocum("4680","./routing/routerAdvertisement_m_jq.htm"),
getLastDocum("4690","./routing/IPv6_Prefixes_m_jq.htm"));
break;
case "1660":
var firstPortIndex = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) -1;
var lastPortIndex = parseInt(_top.lastPortPerModuleArr[_top.firstPresentModule]);
if(_top.productFamily==1)
{
dataArr = new Array(getFolder("5400"),
getDocum("1890","./mgmtauthen/security_authen_radius_m.htm"),
getFolder("5030"),
getDocum("1830","./traffic/security_network_portSecurity_m.htm?[swIfVT]partialKey:From-(swIfIndex=" + firstPortIndex + ")" + "-To-(swIfIndex=" + lastPortIndex + ")[swIfVT2]partialKey:From-(swIfIndex=" + firstPortIndex + ")" + "-To-(swIfIndex=" + lastPortIndex + ")"),
getLastDocum("1810","./traffic/security_network_stormControl_m.htm?Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ") && (ifOperStatus!=6)&&(dot1dBasePort\<=" + (_top.trunkFirstIndex-1) + "))")
);
}
else
{
dataArr = new Array(getFolder("5400"),
getDocum("1890","./mgmtauthen/security_authen_radius_m.htm"),
getFolder("5030"),
getDocum("1830","./traffic/security_network_portSecurity_m.htm?[swIfVT]partialKey:From-(swIfIndex=" + firstPortIndex + ")" + "-To-(swIfIndex=" + lastPortIndex + ")[swIfVT2]partialKey:From-(swIfIndex=" + firstPortIndex + ")" + "-To-(swIfIndex=" + lastPortIndex + ")"),
getLastDocum("1810","./traffic/security_network_stormControl_m.htm?Filter:((rlPhdPortsModuleNumber=" + _top.firstPresentModule + ") && (ifOperStatus!=6)&&(dot1dBasePort\<=" + (_top.trunkFirstIndex-1) + "))")
);
}
break;
case "1660~5400" :
dataArr = new Array(getDocum("2010","./password/security_manage_localUsers_m.htm"),
getDocum("3200","./mgmtauthen/security_authen_authenlogin.htm?[methodListTable]Query:rlAAAMethodListName=login_Console"),
getDocum("1790","./mgmtauthen/security_authen_accProfiles_m.htm?[MngInfListInetTable]partialKey:-Counter-#numOfEntries#","tblAccessProfile"),
getLastDocum("1800","./mgmtauthen/security_authen_profileRules_m.htm?Filter:(rlMngInfListInetName!='console-only')[ProfileCount]Query:rlMibTableInstancesInfoTableName=rlMngInfListInetTable[MngInfListInetTable]partialKey:-Counter-#numOfEntries#","securityProfileRulTable")
);
break;
case "2380":
dataArr = new Array (getDocum("2760","./acl/ACL_m.htm?[AclVT]Filter:rlQosAclType=1^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","tblACLMAC"),
getDocum("3070","./acl/security_accCtrl_macBaseAcl_GE_m.htm?[AclVT]Filter:rlQosAclType=1[AceVT]partialKey:From-(rlQosAceTidxAclIndex=0@rlQosAceTidxIndex=2147483648)-To-(rlQosAceTidxAclIndex=0@rlQosAceTidxIndex=2147483648)"),
getDocum("2770","./acl/ACL_m.htm?[AclVT]Filter:rlQosAclType=2^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","tblACLipv4"),
getDocum("3060","./acl/security_accCtrl_ipBaseAcl_m.htm?[AclVT]Filter:rlQosAclType=2[AceVT]partialKey:From-(rlQosAceTidxAclIndex=0@rlQosAceTidxIndex=2147483648)-To-(rlQosAceTidxAclIndex=0@rlQosAceTidxIndex=2147483648)"),
getDocum("2780","./acl/ACL_m.htm?[AclVT]Filter:rlQosAclType=3^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","tblACLipv6"),
getDocum("3080","NAV_11","oIPv6BasedACL"),
getLastDocum("2790","./acl/security_accCtrl_aclMapping_m.htm?Filter:rlQosIfAclIn!=0[IV]FixedKey:rlIfType=2^Filter:((rlPhdPortsModuleNumber="+ _top.firstPresentModule +") && (ifIndex<=" + (_top.trunkFirstIndex-1) + ") && (ifOperStatus!=6))",null,[_top.Units]));
break;
case "1660~1780":
if(_top.productFamily != 1)
{
dataArr = new Array(getDocum("1790","./mgmtauthen/security_authen_accProfiles_m.htm?[AccessProfiles]Query:rlMibTableInstancesInfoTableName=rlMngInfListInetTable[MngInfListInetTable]partialKey:-Counter-#numOfEntries#","tblAccessProfile"),
getLastDocum("1800","./mgmtauthen/security_authen_profileRules_m.htm?[ProfileCount]Query:rlMibTableInstancesInfoTableName=rlMngInfListInetTable[MngInfListInetTable]partialKey:-Counter-#numOfEntries#","securityProfileRulTable"));
}
else
{
dataArr = new Array(getDocum("1790","./mgmtauthen/security_authen_accProfiles_m.htm?[MngInfListInetTable]partialKey:-Counter-#numOfEntries#","tblAccessProfile"),
getLastDocum("1800","./mgmtauthen/security_authen_profileRules_m.htm?Filter:(rlMngInfListInetName!='console-only')[ProfileCount]Query:rlMibTableInstancesInfoTableName=rlMngInfListInetTable[MngInfListInetTable]partialKey:-Counter-#numOfEntries#","securityProfileRulTable"));
}
break;
case "1660~4350":
dataArr = new Array(getDocum("4360","./SSD/SSD_Properties_jq.htm"),
getLastDocum("4370","./SSD/SSD_Rules_m_jq.htm"));
break;
case "1660~4380":
dataArr = new Array(getLastDocum("4390","./SSL/SSL_ServerAuth_m_jq.htm"));
break;
case "1660~4400":
dataArr = new Array(getDocum("4410","./SSHServer/SSHS_UserAuth_m_jq.htm"),
getLastDocum("4420","./SSHServer/SSHS_ServerAuth_m_jq.htm"));
break;
case "1660~4430":
dataArr = new Array(getDocum("4440","./SSHClient/SSHC_UserAuth_m_jq.htm"),
getDocum("4450","./SSHClient/SSHC_ServerAuth_m_jq.htm"),
getLastDocum("4460","./SSHClient/SSHC_ChangePass_jq.htm"));
break;
case "1660~5030":
case "1660~1750":
var firstPortIndex = parseInt(_top.StartingPortPerModuleArr[_top.firstPresentModule]) -1;
var lastPortIndex = parseInt(_top.lastPortPerModuleArr[_top.firstPresentModule]);
if(_top.productFamily == 1)
{
dataArr = new Array(
getDocum("1880","./netauthen/security_network_properties_m.htm?[dot1qVlanStaticTableCount]Query:rlMibTableInstancesInfoTableName=dot1qVlanStaticTable[VlanName]partialKey:-Counter-#numOfEntries#","securityNetProTable"),
getDocum("1740","./netauthen/security_network_portAuthen_m.htm?[AuthenTable]partialKey:From-(dot1xPaePortNumber=" + firstPortIndex + ")" + "-To-(dot1xPaePortNumber=" + lastPortIndex + ")"),
getDocum("2630","./netauthen/security_network_authenHost_m.htm?[AuthCount]Query:rlMibTableInstancesInfoTableName=rldot1xAuthMultiSessionStatsTable[authSessionTable]Filter:rldot1xAuthMultiControlledPortStatus=1^partialKey:-Counter-#numOfEntries#","securityNetworkHostTable"));
}
else
{
dataArr = new Array(
getDocum("1880","./netauthen/security_network_properties_m.htm?[dot1qVlanStaticTableCount]Query:rlMibTableInstancesInfoTableName=dot1qVlanStaticTable[VlanName]partialKey:-Counter-#numOfEntries#","securityNetProTable"),
getDocum("1740","./netauthen/security_network_portAuthen_m.htm?[AuthenTable]partialKey:From-(dot1xPaePortNumber=" + firstPortIndex + ")" + "-To-(dot1xPaePortNumber=" + lastPortIndex + ")"),
getDocum("2630","./netauthen/security_network_authenHost_m.htm?[AuthCount]Query:rlMibTableInstancesInfoTableName=rldot1xAuthMultiSessionStatsTable[authSessionTable]Filter:rldot1xAuthMultiControlledPortStatus=1^partialKey:-Counter-#numOfEntries#","securityNetworkHostTable")
);
}
break;
case "1660~4740":
dataArr = new Array(
getDocum("5110","./FHS/FHS_Settings_m_jq.htm"),
getDocum("5090","./FHS/RA_Guard_Settings_m_jq.htm"),
getDocum("5120","./FHS/DHCPv6_Guard_Settings_m_jq.htm"),
getDocum("5130","./FHS/ND_Inspection_Settings_m_jq.htm"),
getDocum("5140","./FHS/Neighbor_Binding_Settings_m_jq.htm"),
getDocum("5150","./FHS/Policy_Attachment_Vlan_m.htm"),
getDocum("5100","./FHS/Policy_Attachment_Port_m.htm"),
getDocum("5170","./FHS/Neighbor_Binding_Table_m_jq.htm"),
getDocum("5180","./FHS/FHS_Status_jq.htm"),
getLastDocum("5160","./FHS/FHS_Statistics_m_jq.htm"));
break;
case "1660~1580":
if(_top.productFamily == 1)
dataArr = new Array(getDocum("1590","./Security/GlobalSet200.htm"),
getLastDocum("4540","./dosFilter/SYN_Protection_m.htm?[ProtectionPortTable]Filter:(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6)"));
else if ((_top.displayRouter) && ((!_top.isXModel) || (_top.isHybridMode)))
{
dataArr = new Array (getDocum("1590","./Security/GlobalSet.htm"),
getDocum("4540","./dosFilter/SYN_Protection_m.htm?[ProtectionPortTable]Filter:(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6)"),
getDocum("1600","./Security/martianAdd.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlSecuritySuiteMartianAddrAllTable[MartianDoSAttack]partialKey:-Counter-#numOfEntries#","martianAddTable"),
getDocum("3020","./dosFilter/SYN_Filtering.htm?Filter:rlSecuritySuiteDenyAttackType=1[Counter]Filter:rlSecuritySuiteDenyAttackType=1[SynAttackTableVT]Filter:rlSecuritySuiteDenyAttackType=1^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","synFiltTable"),
getDocum("3040","./dosFilter/ICMP_Filtering.htm?Filter:rlSecuritySuiteDenyAttackType=2[Counter]Filter:rlSecuritySuiteDenyAttackType=2[ICMPFilteringTableVT]Filter:rlSecuritySuiteDenyAttackType=2^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","icmpFiltTable"),
getLastDocum("3050", "./dosFilter/IP_Fragmented.htm?Filter:rlSecuritySuiteDenyAttackType=3[Counter]Filter:rlSecuritySuiteDenyAttackType=3[IPFragmentedTableVT]Filter:rlSecuritySuiteDenyAttackType=3^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","ipFragTable"));
}
else
{
dataArr = new Array (getDocum("1590","./Security/GlobalSet.htm"),
getDocum("4540","./dosFilter/SYN_Protection_m.htm?[ProtectionPortTable]Filter:(rlPhdPortsModuleNumber="+ _top.firstPresentModule +")&&(ifOperStatus!=6)"),
getDocum("1600","./Security/martianAdd.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlSecuritySuiteMartianAddrAllTable[MartianDoSAttack]partialKey:-Counter-#numOfEntries#","martianAddTable"),
getDocum("3020","./dosFilter/SYN_Filtering.htm?Filter:rlSecuritySuiteDenyAttackType=1[Counter]Filter:rlSecuritySuiteDenyAttackType=1[SynAttackTableVT]Filter:rlSecuritySuiteDenyAttackType=1^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","synFiltTable"),
getDocum("3030","./dosFilter/SYN_Rate_Protection.htm?[DoSSynAttackCount]Query:rlMibTableInstancesInfoTableName=rlSecuritySuiteDoSSynAttackTable[SynTable]partialKey:-Counter-#numOfEntries#","synRateProTable"),
getDocum("3040","./dosFilter/ICMP_Filtering.htm?Filter:rlSecuritySuiteDenyAttackType=2[Counter]Filter:rlSecuritySuiteDenyAttackType=2[ICMPFilteringTableVT]Filter:rlSecuritySuiteDenyAttackType=2^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","icmpFiltTable"),
getLastDocum("3050", "./dosFilter/IP_Fragmented.htm?Filter:rlSecuritySuiteDenyAttackType=3[Counter]Filter:rlSecuritySuiteDenyAttackType=3[IPFragmentedTableVT]Filter:rlSecuritySuiteDenyAttackType=3^getNumberOfEntries^partialKey:-Counter-#numOfEntries#","ipFragTable"));
}
break;
case "1660~3940":
dataArr = new Array (getDocum("3950","./arp/Arp_properties.htm"),
getDocum("3970", "./arp/AccessControl.htm"),
getDocum("3980", "./arp/Inspection_List_m.htm?[Counter]Query:rlMibTableInstancesInfoTableName=rlIpArpInspectListTable^[ArpInterfaceTableVT]partialKey:-Counter-#numOfEntries#","inspectionListTable"),
getLastDocum("3990","./arp/VLAN_Settings_m.htm"));
break;
case "1660~4280":
dataArr = new Array(getDocum("4250","../RIPv2/ripv2_Authentication_Keys_m_jq.htm"),
getLastDocum("4260","../RIPv2/ripv2_Keys_List_m_jq.htm"));
break;
default:
return;
}
dataArr = rebuildTreeArr(dataArr);
if(ths.id=="~/~Root~/~") {
addDrawers(ths,dataArr);
cutMenu(["1050", "1300", "1261"]);
} else {
addNodes(ths,dataArr);
}
var selItm;
if ((selectedId != '') || (selectedId !=undefined) || (selectedId !=null) || (selectedId !=' ')) {
selItm = document.getElementById(selectedId);
if (selItm)
{
selectLink(selItm);
}
}
}
function getSNMPGroupFilter()
{
var prefix = Str2OctetReturn("G_");
var maxStr = Str2OctetReturn("H_");
prefix = prefix.toLowerCase();
maxStr = maxStr.toLowerCase();
var filterStr = "?";
filterStr+="[showAccessVT]Filter:((vacmGroupName>=0x'";
filterStr+= prefix + "')";
filterStr+="&&(vacmGroupName<=0x'";
filterStr+= maxStr + "'))";
return filterStr;
}
function getSNMPNotifRecipV12Filter()
{
var prefix;
var maxStr;
var maxComStr = "7f";
maxComStr = maxComStr.toLowerCase();
var maxIpStr = "ffffffff";
var filterStr = "?";
prefix = Str2OctetReturn("TO");
prefix = prefix.toLowerCase();
maxStr = (Str2OctetReturn("tv6r-")).toLowerCase() + maxIpStr;
filterStr+="[T1]Filter:((snmpTargetAddrName>=0x'";
filterStr+= prefix + "')";
filterStr+="&&(snmpTargetAddrName<=0x'";
filterStr+= maxStr + "'))||";
prefix = Str2OctetReturn("IO");
prefix = prefix.toLowerCase();
maxStr = (Str2OctetReturn("IV6R-")).toLowerCase() + maxIpStr;
filterStr+="((snmpTargetAddrName>=0x'";
filterStr+= prefix + "')";
filterStr+="&&(snmpTargetAddrName<=0x'";
filterStr+= maxStr + "'))";
return filterStr;
}
function getSNMPNotifRecipV3Filter()
{
var prefix;
var maxStr;
var maxComStr = "7f";
maxComStr = maxComStr.toLowerCase();
var maxIpStr = "ffffffff";
var filterStr = "?";
prefix = Str2OctetReturn("T3");
prefix = prefix.toLowerCase();
maxStr = (Str2OctetReturn("T3V6R-")).toLowerCase() + maxIpStr + maxComStr;
filterStr+="[T2]Filter:((snmpTargetAddrName>=0x'";
filterStr+= prefix + "')";
filterStr+="&&(snmpTargetAddrName<0x'";
filterStr+= maxStr + "'))||";
prefix = Str2OctetReturn("I3");
prefix = prefix.toLowerCase();
maxStr = (Str2OctetReturn("I3V6R-")).toLowerCase() + maxIpStr + maxComStr;
filterStr+="((snmpTargetAddrName>=0x'";
filterStr+= prefix + "')";
filterStr+="&&(snmpTargetAddrName<0x'";
filterStr+= maxStr + "'))";
return filterStr;
}
function isLinkItem(ths)
{
var res = false;
var strArr = ths.id.split("openLink:");
if (strArr.length > 1)
{
openLocalLink(strArr[1]);
var linkId=strArr[1].split("~");
document.getElementById("caption").innerHTML = linkId[linkId.length-1];
_top.currTabPge = ths.id;
res = true;
}
return res;
}
function openLocalLink(url)
{
var urlArr = url.split("~");
var rootFolder = _top.document.getElementById(urlArr[0]);
var rootFolderImage = rootFolder.getElementsByTagName("img")[0];
if (rootFolderImage.lang=="1")
{
try
{
rootFolderImage.click();
}
catch(ex)
{
rootFolderImage.onclick(rootFolderImage.onclick);
}
}
for (i=1;i<urlArr.length;i++)
{
openLocalLinkRecursive(urlArr,i);
}
}
function openLocalLinkRecursive(urlArr, index)
{
var id = "";
for (j=0;j<=index;j++)
{
id+=urlArr[j];
if (j<index)
id+="~";
}
var ele = _top.document.getElementById(id);
if (ele.childNodes[0].lang.indexOf("docum")!=-1 )
{
try
{
ele.childNodes[0].childNodes[3].click();
}
catch(ex)
{
ele.childNodes[0].childNodes[3].onclick(ele.childNodes[0].childNodes[3].onclick);
}
ele.childNodes[0].childNodes[3].focus();
}
else
{
if (ele.childNodes[0].childNodes[1].childNodes[0].lang=="1")
{
try
{
ele.childNodes[0].childNodes[2].click();
}
catch(ex)
{
ele.childNodes[0].childNodes[2].onclick();
}
ele.childNodes[0].childNodes[2].focus();
}
}
}
function GW(main_frame_name,gw_frame_name)
{
this.gw_frame=gw_frame_name;
this.reg_frame=main_frame_name;
this.loaded=true;
this.initialized = false;
this.target;
this.isGWShown = false;
}
GW.prototype.navigate = function(target)
{
this.target = target;
this.clearContent();
if(this.target.toLowerCase().indexOf("nav_")!=0) return;
this.restore_size(false);
top.window.frames[this.gw_frame].oNavigator.selectedTab = this.target;
top.window.frames[this.gw_frame].oNavigator.navigate(this.target);
}
GW.prototype.clearContent = function()
{
window.frames[this.gw_frame].IXML.clearChildNodes(window.frames[this.gw_frame].Page.placeHolder);
}
GW.prototype.onreadystatechange = function()
{
document.body.style.cursor='default'
this.restore_size(true)
if(this.initialized)
this.loaded = false;
}
GW.prototype.restore_size=function(bool)
{
}
GW.prototype.isActive = function(name)
{
return(document.getElementById(name).style.width!="0%")
}
GW.prototype.isGWPage = function(src)
{
if(src.toLowerCase().indexOf("nav_")==0) return true;
return false;
}
GW.prototype.getHelpUrl= function(lang, langCode, filename)
{
return false;
}
GW.prototype.getHelpTopic = function()
{
switch(this.target)
{
case "NAV_3_0": return "IPv6_Global_Configuration.html";
case "NAV_3": return "define_ipv6_interf.html";
case "NAV_4": return "IPv6_Default_Routers.html";
case "NAV_5": return "IPv6_Tunnels.html";
case "NAV_6": return "IPv6_Neighbors.html";
case "NAV_7": return "IPv6_Routes.html";
case "NAV_9": return "ipv6_addr.html";
case "NAV_11": return "ipv6_rule.html";
case "NAV_12": return "green_properties.html";
case "NAV_13": return "green_ports.html";
case "NAV_21": return "Multicast_Properties.html";
case "NAV_23": return "MAC_Group_Addr.html";
case "NAV_24": return "IP_Multicast_Grps.html";
case "NAV_22": return "mdl_snooping.html";
case "NAV_25": return "Multicast_IGMP_MLD_IP_GRP.html";
case "NAV_26": return "Multi_Router_Port.html";
case "NAV_27": return "IGMP_Snooping.html";
case "NAV_31": return "llpd_properties.html";
case "NAV_32": return "llpd_port_settings.html";
case "NAV_33": return "LLDP_MED_Net_Policy.html";
case "NAV_34": return "LLDP_MED_Ports.html";
case "NAV_35": return "lldp_port_status.html";
case "NAV_36": return "LLDP_local.html";
case "NAV_37": return "LLDP_Neighbors_Info.html";
case "NAV_39": return "LLDP_Statistics.html";
case "NAV_40": return "lldp_overloading.html";
case "NAV_41": return "smart_properties.html";
case "NAV_42": return "smart_port_settings.html";
case "NAV_43": return "Port_Type_Settings.html";
case "NAV_44": return "GVRP_Stats.html";
case "NAV_45": return "vlan_to_port.html";
default: return "index.html";
}
}
function Task (owner, method)
{
Task.prototype.execute = function ()
{
try
{
return method.apply(owner, arguments);
}
catch (err)
{
return function(){};
}
}
}
function MIBData(fileName, onLoadFunction, onSubmitFunction,iframeInnerPath)
{
if (!fileName)
{
alert("MIBData error: MIB file path is not defined!");
return;
}
var _src;
if (/:/.test(location.hostname))
_src = location.protocol + "//[" + location.hostname + "]" + ":" +location.port + fileName;
else
_src = location.protocol + "//" + location.hostname + ":" +location.port + fileName;
_src = fileName;
var _file_name = fileName.split("/")[fileName.split("/").length-1];
var _onLoadFinished = onLoadFunction ? onLoadFunction : function() { alert ("MIBData error: onLoadFinished handler is not defined!");};
var _onSubmitFinished = onSubmitFunction ? onSubmitFunction : function() { alert ("MIBData error: onSubmitFinished handler is not defined!");};
var _onError = function() { alert("Connection to server has been lost!"); };
var _onLoadContext = window;
var _onSubmitContext = window;
var _onErrorContext = window;
var _actionType = "none";
this._initializeIFrame = function ()
{
this._iframe = document.createElement("iframe");
if ( document.all )
{
if (iframeInnerPath)
this._iframe.src = "../device/blank.html";
else
this._iframe.src = "./device/blank.html";
}
this._iframe.border = 0;
this._iframe.frameBorder = 0;
this._iframe.scrolling = "no";
this._iframe.style.cssText = "position:absolute; visibility:hidden; height:1px; width:1px";
document.body.insertBefore(this._iframe, document.body.firstChild);
return true;
}
function _getTopWindow ()
{
var topWindow = window;
while (topWindow.opener)
{
topWindow = topWindow.opener;
}
return topWindow.top;
}
function _closeAllButTopWindow ()
{
var topWindow = window;
while (topWindow.opener)
{
var tmp = topWindow;
topWindow = topWindow.opener;
tmp.close();
}
return true;
}
this._launchOnLoadFinished = function ()
{
_onLoadFinished.apply (_onLoadContext);
return true;
};
this._launchOnSubmitFinished = function ()
{
_onSubmitFinished.apply (_onSubmitContext);
return true;
};
this._launchOnError = function ()
{
if ( !top.connectionLost )
{
top.connectionLost = true;
_onError.apply (_onErrorContext);
}
return true;
};
this._getSrc = function ()
{
return _src;
};
this._getDocument = function ()
{
if(this._iframe.contentWindow)
{
return this._iframe.contentWindow.document;
}
return null;
};
this._setActionType = function (type)
{
_actionType = type;
return true;
};
this._checkPath = function ()
{
var docForm = this._iframe.contentWindow.document.forms[0];
var action_file = "---";
if ( docForm )
{
var tmp = docForm.action.split("/");
action_file = tmp[tmp.length-1];
if (action_file != _file_name)
{
switch ( action_file )
{
case "error_collector.htm" :
window.location.href = "../config/error_collector.htm";
break;
case "log_off_page.htm" :
_closeAllButTopWindow();
_getTopWindow().location.href = "../config/log_off_page.htm";
break;
}
return false;
}
}
else
{
window.document.body.innerHTML = this._iframe.contentWindow.document.body.innerHTML;
return false;
}
return true;
};
this._createXMLHttpRequest = function()
{
try
{
return new XMLHttpRequest();
}
catch (ex)
{
}
try
{
return new ActiveXObject("Msxml2.XMLHTTP");
}
catch (ex)
{
}
try
{
return new ActiveXObject("Microsoft.XMLHTTP");
}
catch (ex)
{
}
return null;
};
this._notifyStateChanged = function ()
{
if (this._req.readyState != 4)
{
return true;
}
if ((typeof(this._iframe.contentWindow) == "undefined") ||
(typeof(this._iframe.contentWindow) == "unknown" ))
{
return false;
}
if (typeof(this._iframe.contentWindow.document) != "unknown" && this._iframe.contentWindow.document.body)
{
this._failCounter = 0;
if (this._req.status == 200)
{
top.connectionLost = false;
this._iframe.contentWindow.document.body.innerHTML = this._req.responseText;
if (!this._checkPath())
{
return false;
}
switch (_actionType)
{
case "load" :
this._launchOnLoadFinished();
break;
case "submit" :
this._launchOnSubmitFinished();
break;
}
}
else
{
this._launchOnError();
return false;
}
}
else
{
if ( this._failCounter++ > 100 )
{
this._launchOnError();
return false;
}
var tsk = new top.Task(this, this._notifyStateChanged);
window.setTimeout(tsk.execute, 1000);
}
return true;
};
this._escape = function (val)
{
var chars = "*@-_+./";
var result = escape (val);
for (var i = 0; i < chars.length; i++)
result = result.split(chars.charAt(i)).join("%" + Number(chars.charCodeAt(i)).toString(16).toUpperCase());
return result;
}
this._getPOSTParams = function()
{
var container = this._iframe.contentWindow.document.forms[0];
var fieldTypes = ["input", "select"];
var paramsArray = new Array();
if (container == null)
{
return "";
}
var fields;
for (var j = 0; j < fieldTypes.length; ++j)
{
fields = container.getElementsByTagName(fieldTypes[j]);
for (var k = 0; k < fields.length; k++)
{
if ( !fields[k].disabled )
{
paramsArray[paramsArray.length] = fields[k].name+"="+this._escape(fields[k].value);
}
}
}
return paramsArray.join("&");
};
this._showData = function()
{
var controls = this._iframe.contentWindow.document.getElementsByTagName("input");
var str = "";
for (var i = 0; i < controls.length; i++)
{
str += controls[i].name + "&nbsp;=&nbsp;<font color='red'>" + controls[i].value + "</font><br/>";
}
var wnd = window.open("", "", "width=600, height=300, left=50, top=50, scrollbars=yes, resizable=yes, menubar=yes");
wnd.document.writeln("<html><body>" + str + "</body></html>");
}
this._showPostData = function(postData)
{
var postParams = unescape(this._getPOSTParams());
if (typeof(postData) != "undefined")
postParams += unescape('&' + postData);
var arrPostParams = postParams.split('&');
var str = "";
for (var i = 0; i < arrPostParams.length; i++)
{
var splitIndex = arrPostParams[i].indexOf('=');
var param = arrPostParams[i].substr(0, splitIndex);
var value = arrPostParams[i].substr(splitIndex + 1);
str += param + "&nbsp;=&nbsp;<font color='red'>" + value + "</font><br/>";
}
var wnd = window.open("", "", "width=600, height=300, left=50, top=50, scrollbars=yes, resizable=yes");
wnd.document.writeln("<html><body>" + str + "</body></html>");
}
this._iframe = null;
this._failCounter = 0;
this._req = null;
this._lastQuery = "";
this._clonedItems = 0;
this._loadedData = "";
this.setOnLoadFunction = function (func)
{
_onLoadFinished = func;
return true;
};
this.setOnSubmitFunction = function (func)
{
_onSubmitFinished = func;
return true;
};
this.setOnErrorFunction = function (func)
{
_onError = func;
return true;
};
this.setOnLoadContext = function (context)
{
_onLoadContext = context;
return true;
};
this.setOnSubmitContext = function (context)
{
_onSubmitContext = context;
return true;
};
this.setOnErrorContext = function (context)
{
_onErrorContext = context;
return true;
};
this._initializeIFrame();
}
MIBData.prototype.load = function(queryString)
{
this._setActionType("load");
var tsk = new Task(this, this._notifyStateChanged);
if ( !queryString )
{
queryString = this._lastQuery;
}
else
{
queryString = (queryString == "" ? queryString : "?" + queryString);
}
this._lastQuery = queryString;
this._req = this._createXMLHttpRequest();
if ( this._req )
{
this._req.onreadystatechange = tsk.execute;
this._req.open("GET", this._getSrc() + queryString, true);
this._req.send(null);
return true;
}
return false;
};
MIBData.prototype.submit = function(queryString, optParams)
{
this._setActionType("submit");
var tsk = new Task(this, this._notifyStateChanged)
queryString = (!queryString) ? "" : (queryString=="" ? "" : "?" + queryString);
this._iframe.contentWindow.document.getElementsByName("restoreUrl")[0].value = queryString;
this._req = this._createXMLHttpRequest();
if ( this._req )
{
this._req.open("POST", this._getSrc() + queryString, true);
this._req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
this._req.onreadystatechange = tsk.execute;
var postParams = this._getPOSTParams();
if ((typeof(optParams) != "undefined") && (optParams != ""))
postParams = postParams + '&' + optParams;
this._req.send(postParams);
}
};
MIBData.prototype.getValue = function(name)
{
if ( this._iframe.contentWindow.document.getElementsByName(name)[0] )
{
return this._iframe.contentWindow.document.getElementsByName(name)[0].value;
}
return null;
};
MIBData.prototype.getRepeatValues = function(name)
{
var repeatArray = new Array();
var counter = 1;
while (this._iframe.contentWindow.document.getElementsByName(name + "?" + counter)[0])
{
repeatArray[counter] = this._iframe.contentWindow.document.getElementsByName(name+"?"+counter)[0].value;
counter++;
}
return repeatArray;
};
MIBData.prototype.setValue = function(name, value, suffix)
{
if ( !this._iframe.contentWindow.document.getElementsByName(name)[0] )
{
return false;
}
this._iframe.contentWindow.document.getElementsByName(name)[0].value = value.toString().replace(/[\s]{1}/g, String.fromCharCode(160));
this.setControlDisableStatus(name, false);
var VT = name.split("$");
this.setControlDisableStatus(VT[0]+(!suffix ? "$VT" : "$"+suffix), false);
return true;
};
MIBData.prototype.setControlDisableStatus = function(name, status)
{
var control = this._iframe.contentWindow.document.getElementsByName(name)[0];
if ( control )
{
control.disabled = status;
}
};
MIBData.prototype.setContainerDisableStatus = function(id, status)
{
var container = this._iframe.contentWindow.document.getElementById(id);
var fieldTypes = ["input", "select"];
if (container != null)
{
var fields;
var i;
for (var j = 0; j < fieldTypes.length; ++j)
{
fields = container.getElementsByTagName(fieldTypes[j]);
i = fields.length;
while (i-- > 0)
{
fields[i].disabled = status;
}
}
}
return true;
};
MIBData.prototype.setBlockDisableStatus = function(id, status)
{
this.setContainerDisableStatus(id + "Start", status);
this.setContainerDisableStatus(id + "End", status);
return true;
};
MIBData.prototype.getElement = function(name)
{
return this._iframe.contentWindow.document.getElementsByName(name)[0];
};
MIBData.prototype.getContainerHTML = function(id)
{
if ( this._iframe.contentWindow.document.getElementById(id) )
return this._iframe.contentWindow.document.getElementById(id).innerHTML;
};
MIBData.prototype.cloneContainer = function(container, appendContainer, values)
{
var newRow = this._iframe.contentWindow.document.getElementById(container).cloneNode(true);
var clearRow = newRow.cloneNode(false);
getChildItems(newRow, clearRow);
this._clonedItems++;
for ( var i = 0; i < values.length; i++ )
{
clearRow.childNodes[i].disabled = false;
clearRow.childNodes[i].name += "?" + this._clonedItems.toString();
if ( clearRow.childNodes[i].value != "OK" )
clearRow.childNodes[i].value = values[i];
}
this._iframe.contentWindow.document.getElementById(appendContainer).appendChild(clearRow);
}
function getChildItems(oldNode, newNode)
{
var childOldNodes = oldNode.childNodes;
var currNewNode, currOldNode;
for (var i = 0; i < childOldNodes.length; ++i)
{
if (childOldNodes[i].nodeType == 1)
{
currOldNode = childOldNodes[i];
currNewNode = currOldNode.cloneNode(false);
newNode.appendChild(currNewNode);
getChildItems(currOldNode, currNewNode);
}
}
}
function PostParams(fields)
{
if ((typeof(fields) != "object") || (fields.length == 0))
{
throw ("Invalid argument.");
}
this._params = new Array();
this._params.names = fields;
this._params.values = new Array();
}
PostParams.prototype.addParams = function()
{
var args = this.addParams.arguments;
var fieldCount = this._params.names.length;
if (args.length != fieldCount)
{
throw ("Invalid argument. Number of values doesn't match the number of fields.");
}
var len = this._params.values.length;
this._params.values[len] = new Array();
for (var i = 0; i < fieldCount; i++)
{
this._params.values[len][i] = args[i];
}
return true;
}
PostParams.prototype.toString = function()
{
var params = new Array();
var suffix, val;
for (var i = 0; i < this._params.values.length; i++)
{
for (var j = 0; j < this._params.names.length; j++)
{
if (this._params.values[i][j] == null)
continue;
suffix = "$repeat?" + (i + 1).toString();
val = this._params.values[i][j].toString().replace(/[\s]{1}/g, String.fromCharCode(160));
params.push(this._params.names[j] + suffix + "=" + escape(val));
}
}
return params.join("&");
}
var NO_EVENT_OID = "-1";
var LINK_DOWN_OID = "1.3.6.1.6.3.1.1.5.3";
var LINK_UP_OID = "1.3.6.1.6.3.1.1.5.4";
var ENT_CONFIG_OID = "1.3.6.1.2.1.47.2.0.1";
var GENERAL_PATH = "./wcd?{general}";
var UNITS_PATH = "./wcd?{units}{fullInterfaceList}";
var UNITS_PATH_NONSTACKABLE = UNITS_PATH;
var PORTS_PATH = "./wcd?{ports}";
var OTHER_PATH = "./device/noStamp.xml";
var AUTH_PATH = "./device/authenticate_user.xml";
var INFO_SEVER = 1;
var WARN_SEVER = 2;
var CRIT_SEVER = 3;
var NOT_EXISTS = -1;
var SRC_FILE = 0;
var SRC_WCD = 1;
var MSG_1_INST = "Only single instance is permitted"
var INTERVAL_DEF = 25;
var INTERVAL_MIN = 1;
var INTERVAL_MAX = 655;
var MULTIPLIER = 100;
isStackableDevice = ( (_top.get_cookie("isStackableDevice")) == "true" );
if(!isStackableDevice)
UNITS_PATH = UNITS_PATH_NONSTACKABLE
function GlobalPoller()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("GlobalPoller", MSG_1_INST, WARN_SEVER);
thisG = this;
this.messageLog = new MessageLog();
this.eventArr = new Array();
this.eventArr.push(new SNMPEvent(NO_EVENT_OID, "noEvent"));
this.eventArr.push(new SNMPEvent(LINK_DOWN_OID, "linkDown"));
this.eventArr.push(new SNMPEvent(LINK_UP_OID, "linkUp"));
this.eventArr.push(new SNMPEvent(ENT_CONFIG_OID, "entConfigChange"));
this.dataFileArr = new Array();
this.dataFileArr.push(new DataFile(GENERAL_PATH, NOT_EXISTS, SRC_WCD));
isStackableDevice = ( (_top.get_cookie("isStackableDevice")) == "true" );
if(!isStackableDevice)
UNITS_PATH = UNITS_PATH_NONSTACKABLE
this.dataFileArr.push(new DataFile(UNITS_PATH, NOT_EXISTS, SRC_WCD));
this.dataFileArr.push(new DataFile(PORTS_PATH, NOT_EXISTS, SRC_WCD));
this.dataFileArr.push(new DataFile(OTHER_PATH, NOT_EXISTS, SRC_FILE));
this.dataFileArr.push(new DataFile(AUTH_PATH, NOT_EXISTS, SRC_FILE));
this.fileVsEventHashMatrix = new Array();
for (var i =0; i < this.dataFileArr.length; i ++)
{
this.fileVsEventHashMatrix[this.dataFileArr[i].getPath()] = new Array();
this.fileVsEventHashMatrix[this.dataFileArr[i].getPath()].id = i;
}
this.fileVsEventHashMatrix[UNITS_PATH][ENT_CONFIG_OID] = true;
this.fileVsEventHashMatrix[PORTS_PATH][ENT_CONFIG_OID] = true;
this.fileVsEventHashMatrix[PORTS_PATH][LINK_DOWN_OID] = true;
this.fileVsEventHashMatrix[PORTS_PATH][LINK_UP_OID] = true;
this.fileVsEventHashMatrix[OTHER_PATH][NOT_EXISTS] = true;
this.fileVsEventHashMatrix[AUTH_PATH][NOT_EXISTS] = true;
this.subscription = new Subscription();
this.subscription.getXmlClientId();
this.timestamp = new Timestamp();
this.interval = new TimerInterval();
this.data = new DataHandler();
this.dispatcher = new Dispatcher();
this.initiator = new PollInitiator();
this.errorHandler = new ErrorHandlerXmlGoAhead()
}
GlobalPoller.count = 0;
GlobalPoller.prototype.addDataQuery = function(inDataQueryArr)
{
this.dataQueryArr = inDataQueryArr;
if (thisS.getClientId() != NOT_EXISTS)
thisD.addDataQuery(inDataQueryArr);
else
thisS.timerIdClient = self.setInterval('thisS.CheckClientId(thisD.addDataQuery, thisG.dataQueryArr)', 100);
}
GlobalPoller.prototype.removePoller = function(poller)
{
thisD.removePoller(poller);
}
function Subscription()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("Subscription", MSG_1_INST, WARN_SEVER);
thisS = this;
var clientId = NOT_EXISTS;
this.eventsSubscribed = false;
this.getClientId=function(){return clientId}
this.getEventsSubscribed=function(){return this.eventsSubscribed}
this.setClientId=function(inClientId)
{
if (typeof(inClientId)!="undefined" && !isNaN(parseInt(inClientId, 10)))
clientId=parseInt(inClientId, 10);
else
thisML.addMessage("setClientId", "Input variable is empty or NaN", WARN_SEVER);
}
this.timerIdClient;
this.timerIdSubscr;
this.checkClientIdCount = 0;
this.checkSubscriptionCount = 0;
this.SubscriptionXml();
}
Subscription.count = 0;
Subscription.prototype.Subscribe = function(inEventArr)
{
if (typeof(inEventArr) == "undefined")
return thisML.addMessage("Subscribe", "Input array is empty", WARN_SEVER);
for (var i = 0; i < inEventArr.length; i ++)
if (typeof(inEventArr[i]) != "undefined")
{
for (var j = 0; j < thisG.eventArr.length; j ++)
if (thisG.eventArr[j].getOID() == String(inEventArr[i]) && thisG.eventArr[j].getTimestampId() == NOT_EXISTS)
{
thisG.eventArr[j].setToSubscribe(true);
break;
}
}
else
thisML.addMessage("Subscribe", "Element of input array is empty", WARN_SEVER);
if (this.getClientId() != NOT_EXISTS)
this.getXmlSubscription();
else
this.timerIdClient = self.setInterval('thisS.CheckClientId(this.getXmlSubscription)', 100);
}
Subscription.prototype.CheckClientId = function(func, arg)
{
if (this.getClientId() != NOT_EXISTS)
{
self.clearInterval(this.timerIdClient);
this.checkClientIdCount = 0;
if (typeof(arg)=="undefined")
func();
else
func(arg);
}
else
{
if (this.checkClientIdCount > 100)
{
thisML.addMessage("CheckClientId", "Client ID is still undefined after "+this.checkClientIdCount+" cycles", CRIT_SEVER)
this.checkClientIdCount = 0;
return;
}
this.checkClientIdCount++;
}
}
Subscription.prototype.CheckSubscription = function(func, arg)
{
if (this.getEventsSubscribed())
{
self.clearInterval(this.timerIdSubscr);
this.checkSubscriptionCount = 0;
if (typeof(arg)=="undefined")
func();
else
func(arg);
}
else
{
if (this.checkSubscriptionCount > 300)
{
thisML.addMessage("CheckSubscription", "Subscription is still not applied after "+this.checkSubscriptionCount+" cycles", CRIT_SEVER)
this.checkSubscriptionCount = 0;
return;
}
this.checkSubscriptionCount++;
}
}
Subscription.prototype.SubscriptionXml = SubscriptionXmlGoAhead;
function SubscriptionXmlGoAhead()
{
var mibClientId = new MIBDataXML("./Polling/Client_ID_MIB.xml", onClientIdLoaded, onClientIdSubmitted);
var mibSubscription = new MIBDataXML("./Polling/Subscription_MIB.xml", onSubscriptionLoaded, onSubscriptionLoaded);
var onlyGetSubscription = false;
var subscrLoadsCount = 0;
this.getXmlClientId = function()
{
mibClientId.load("");
}
this.postXmlUnsubscribeClient = function()
{
mibClientId.setValue("rlEventsDeleteEvents", thisS.getClientId());
mibClientId.submit();
thisS.setClientId(NOT_EXISTS);
}
function onClientIdLoaded()
{
thisS.setClientId(mibClientId.getValue("rlEventsPollerId"));
thisML.addMessage("onClientIdLoaded", "Client ID "+thisS.getClientId()+" obtained", INFO_SEVER)
}
function onClientIdSubmitted(){}
this.getXmlSubscription = function()
{
var filter = "Filter:rlEventsPoller="+thisS.getClientId();
mibSubscription.load(filter);
}
function onSubscriptionLoaded()
{
subscrLoadsCount ++;
if (subscrLoadsCount > 3)
{
thisML.addMessage("onSubscriptionLoaded", "Subscription was not set after "+subscrLoadsCount+" retries", CRIT_SEVER)
subscrLoadsCount = 0;
return;
}
var xmlEventOIDArr = mibSubscription.getRepeatValues("rlEventId$repeat");
var xmlEventTimestampIdArr = mibSubscription.getRepeatValues("rlEventIndexInMask$repeat");
var submitFlag = false;
thisS.eventsSubscribed = false;
for (var i = 0; i < thisG.eventArr.length; i ++)
{
for (var j = 1; j < xmlEventOIDArr.length; j ++)
if (thisG.eventArr[i].getOID() == xmlEventOIDArr[j])
{
thisG.eventArr[i].setTimestampId(xmlEventTimestampIdArr[j]);
thisG.eventArr[i].setToSubscribe(false);
thisS.eventsSubscribed = true;
thisML.addMessage("onSubscriptionLoaded", "Listening to event '"+thisG.eventArr[i].getName()+"' is subscribed", INFO_SEVER);
break;
}
if (thisG.eventArr[i].getToSubscribe() && thisG.eventArr[i].getOID() != NO_EVENT_OID)
{
mibSubscription.cloneContainer("rlEventsTableAdd", new Array(thisS.getClientId(), thisG.eventArr[i].getOID(), "4", "OK"));
submitFlag = true;
}
}
if (!onlyGetSubscription && submitFlag)
{
var filter = "Filter:rlEventsPoller="+thisS.getClientId();
mibSubscription.submit(filter);
thisML.addMessage("onSubscriptionLoaded", "Subscription submitted", INFO_SEVER)
}
else
subscrLoadsCount = 0;
}
}
function Timestamp()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("Timestamp", MSG_1_INST, WARN_SEVER);
thisT = this;
this.TimestampXml();
}
Timestamp.count = 0;
Timestamp.prototype.FilterEvents = function()
{
var dataQueryArr = thisD.getDataQueryArr();
var path, oid;
var outEventArr = new Array();
for (var i = 0; i < thisG.eventArr.length; i ++)
{
oid = thisG.eventArr[i].getOID();
thisG.eventArr[i].setToCheck(false);
for (var j = 0; j < dataQueryArr.length; j ++)
{
path = dataQueryArr[j].getFilePath();
if (typeof(thisG.fileVsEventHashMatrix[path][oid]) != "undefined" && thisG.fileVsEventHashMatrix[path][oid])
{
thisG.eventArr[i].setToCheck(true);
if (thisG.eventArr[i].getTimestampId() == NOT_EXISTS)
outEventArr.push(thisG.eventArr[i].getOID());
}
}
}
if (outEventArr.length)
thisS.Subscribe(outEventArr);
}
Timestamp.prototype.refineDataQuery = function(inEventArr)
{
var dataQueryArr = thisD.getDataQueryArr();
var path, oid;
var outDataQueryArr = new Array();
for (var i = 0; i < dataQueryArr.length; i ++)
{
path = dataQueryArr[i].getFilePath();
for (var j = 0; j < inEventArr.length; j ++)
{
oid = inEventArr[j].getOID();
if (typeof(thisG.fileVsEventHashMatrix[path][oid]) != "undefined" && thisG.fileVsEventHashMatrix[path][oid])
{
outDataQueryArr.push(new DataQuery("a", dataQueryArr[i].getFilePath(), dataQueryArr[i].getSearch()));
break;
}
}
}
if (outDataQueryArr.length)
thisDH.getXmlData(outDataQueryArr);
}
Timestamp.prototype.TimestampXml = TimestampXmlGoAhead;
function TimestampXmlGoAhead()
{
var mibTimestamp = new MIBDataXML("./device/Timestamp_MIB.xml", onTimestampLoaded, onTimestampLoaded);
this.getXmlTimestamp = function()
{
var query = "[rlEventsMaskTableVT]Query:rlEventsMaskPollerId="+thisS.getClientId();
mibTimestamp.load(query);
}
function onTimestampLoaded()
{
var timestampId, newTime;
var outEventArr = new Array();
var xmlClientId = mibTimestamp.getValue("rlEventsMaskPollerId$repeat");
if (thisS.getClientId() != xmlClientId)
{
for (var i = 0; i < thisG.eventArr.length; i ++)
{
thisG.eventArr[i].setTimestampId(NOT_EXISTS);
thisG.eventArr[i].updateTime("");
}
thisD.NotifyInit();
thisML.addMessage("onTimestampLoaded", "Client ID does not exist", WARN_SEVER);
return;
}
var xmlTimestamp = mibTimestamp.getValue("rlEventsMaskMask$repeat");
thisML.addMessage("onTimestampLoaded", "Timestamp is loaded", INFO_SEVER);
for (var i = 0; i < thisG.eventArr.length; i ++)
{
if (!thisG.eventArr[i].getIsEnabled())
continue;
if (thisG.eventArr[i].getOID() == NO_EVENT_OID)
{
outEventArr.push(thisG.eventArr[i]);
continue;
}
if (!thisG.eventArr[i].getToCheck())
continue;
timestampId = thisG.eventArr[i].getTimestampId();
if (timestampId == NOT_EXISTS || xmlTimestamp.length < (timestampId + 1) * 8)
{
thisML.addMessage("onTimestampLoaded", "Timestamp ID is incorrect", CRIT_SEVER);
continue;
}
newTime = xmlTimestamp.substr(timestampId * 8, 8);
if (thisG.eventArr[i].updateTime(newTime))
{
outEventArr.push(thisG.eventArr[i]);
thisML.addMessage("onTimestampLoaded", "Event '"+thisG.eventArr[i].getName()+"' happened", INFO_SEVER);
}
}
thisT.refineDataQuery(outEventArr);
}
}
function TimerInterval()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("TimerInterval", MSG_1_INST, WARN_SEVER);
thisTI = this;
var pollingInterval = INTERVAL_DEF;
var pollingIntervalXml = 0;
this.getPollingInterval=function(){return pollingInterval}
this.getPollingIntervalXml=function(){return pollingIntervalXml}
this.setPollingIntervalXml=function(inInterval){pollingIntervalXml=inInterval}
this.setPollingInterval=function(inPollingInterval)
{
if (this.getPollingInterval() * MULTIPLIER == this.getPollingIntervalXml())
return;
if (this.semaphoreInUse)
{
this.pi = inPollingInterval;
self.setTimeout("thisTI.setPollingInterval(thisTI.pi)", 100);
return;
}
if (typeof(inPollingInterval)=="undefined" || isNaN(parseInt(inPollingInterval, 10)))
return thisML.addMessage("setPollingInterval", "Input variable is empty or NaN", WARN_SEVER);
var interval = parseInt(inPollingInterval, 10);
if (interval < INTERVAL_MIN || interval > INTERVAL_MAX)
{
thisML.addMessage("setPollingInterval", "Entered value of Polling Interval is out of range (1..655)", INFO_SEVER);
return alert("Entered value of Polling Interval is out of range (1..655).");
}
this.semaphoreInUse = true;
pollingInterval = interval;
if (thisS.getEventsSubscribed())
this.getXmlInterval();
else
thisS.timerIdSubscr = self.setInterval('thisS.CheckSubscription(thisTI.getXmlInterval)', 100);
}
this.TimerIntervalXml();
}
TimerInterval.count = 0;
TimerInterval.prototype.TimerIntervalXml = TimerIntervalXmlGoAhead;
function TimerIntervalXmlGoAhead()
{
var mibInterval = new MIBDataXML("./Polling/Interval_MIB.xml", onIntervalLoaded, onIntervalLoaded);
var intervalLoadsCount = 0;
this.semaphoreInUse = false;
this.getXmlInterval = function()
{
var query = "Query:rlEventsPollingControlPollerId="+thisS.getClientId();
mibInterval.load(query);
}
this.setXmlInterval = function()
{
mibInterval.setContainerDisableStatus("rlEventsMaskTableQuery", false);
mibInterval.setValue("rlEventsPollingControlPollingInterval$repeat", this.getPollingInterval() * MULTIPLIER);
var query = "Query:rlEventsPollingControlPollerId="+thisS.getClientId();
mibInterval.submit(query);
}
function onIntervalLoaded()
{
intervalLoadsCount ++;
if (intervalLoadsCount > 3)
{
intervalLoadsCount = 0;
this.semaphoreInUse = false;
thisML.addMessage("onIntervalLoaded", "Interval was not set after "+intervalLoadsCount+" retries", CRIT_SEVER)
return;
}
if (parseInt(mibInterval.getValue("rlEventsPollingControlPollerId$repeat"), 10)!=thisS.getClientId())
{
this.semaphoreInUse = false;
thisML.addMessage("onIntervalLoaded", "Wrong Poller ID", CRIT_SEVER);
return;
}
var interval = parseInt(mibInterval.getValue("rlEventsPollingControlPollingInterval$repeat"), 10);
thisTI.setPollingIntervalXml(interval);
if (interval != thisTI.getPollingInterval() * MULTIPLIER)
thisTI.setXmlInterval();
else
{
intervalLoadsCount = 0;
this.semaphoreInUse = false;
thisML.addMessage("onIntervalLoaded", "Server timer interval is "+interval, INFO_SEVER);
}
}
}
function DataHandler()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("DataHandler", MSG_1_INST, WARN_SEVER);
thisDH = this;
this.dataBase = new Array();
this.earlierDataText = new Array();
this.dataXml = new Array();
this.CompareData = function(str1, str2)
{
if (!(typeof(str1)=="String" || typeof(str1)=="string") && !(typeof(str2)=="String" || typeof(str2)=="string"))
return true;
if (str1 == str2)
return false;
else
return true;
}
this.DataHandlerXml();
}
DataHandler.count = 0;
DataHandler.prototype.DataHandlerXml = DataHandlerXmlGoAhead;
function DataHandlerXmlGoAhead()
{
var mibArr = new Array();
var loadsRemain = 0;
for (var i = 0; i < thisG.dataFileArr.length; i++)
mibArr.push(new MIBDataXML(thisG.dataFileArr[i].getPath(), onDataLoaded, onDataLoaded))
this.getXmlData = function(dataQueryArr)
{
var id;
loadsRemain = dataQueryArr.length;
for (var i = 0; i < dataQueryArr.length; i++)
{
id = thisG.fileVsEventHashMatrix[dataQueryArr[i].getFilePath()].id;
mibArr[id].load(dataQueryArr[i].getSearch());
}
}
this.getLoadsRemain = function(){return loadsRemain;}
function onDataLoaded()
{
var filePath;
for (var i = 0; i < mibArr.length; i++)
if (mibArr[i].getWasLoaded())
{
mibArr[i].setWasLoaded(false);
filePath = mibArr[i]._getFileName();
loadsRemain --;
updateDataBase(i, filePath);
break;
}
}
function updateDataBase(mibId, filePath)
{
var isFileChanged, id;
var fileName = trimFilePathToName(filePath);
thisDH.dataBase[fileName] = new Array();
id = thisG.fileVsEventHashMatrix[filePath].id;
var xmlText = mibArr[mibId].getXmlText();
if (thisG.dataFileArr[id].getDataSource()==SRC_WCD)
{
var respXML = IXML.getDomDocument();
if (document.evaluate){
respXML = (new DOMParser()).parseFromString(xmlText, "text/xml");
} else{
respXML.loadXML(xmlText);
}
var data = respXML.getElementsByTagName("data");
for(var i=0; i<data.length; i++)
{
getChildren(data[i], thisDH.dataBase[fileName]);
}
thisDH.dataXml[fileName] = respXML;
}
else
{
var data = mibArr[mibId].getXml().getElementsByTagName("data")[0];
getChildren(data, thisDH.dataBase[fileName]);
thisDH.dataXml[fileName] = mibArr[mibId].getXml();
}
isFileChanged = thisDH.CompareData(xmlText, thisDH.earlierDataText[fileName]);
if (thisG.dataFileArr[id].getNotify())
{
thisG.dataFileArr[id].setNotify(false);
thisD.NotifyInit(filePath);
}
else if (isFileChanged)
{
if (typeof(thisDH.earlierDataText[fileName])=="undefined")
thisD.NotifyInit(filePath);
else
thisD.NotifyChange(filePath);
}
thisDH.earlierDataText[fileName] = xmlText;
var msg = "File '" + filePath + "' ";
msg += (isFileChanged)? "" : "un";
msg += "changed";
thisML.addMessage("updateDataBase", msg, INFO_SEVER);
}
function getChildren(node, obj)
{
var children = node.childNodes;
var currObj, nodes, count;
var nodeName = "";
var nodeValue = "";
var namesHash = new Array();
for (var i = 0; i < children.length; ++i)
if (children[i].nodeType == 1)
{
nodeName = children[i].nodeName
if (namesHash[nodeName])
namesHash[nodeName]++;
else
{
namesHash[nodeName] = 1;
obj[nodeName] = new Array();
}
count = namesHash[nodeName];
obj[nodeName][count-1] = new Array();
currObj = obj[nodeName][count-1];
getChildren(children[i], currObj);
}
else if (children[i].nodeType == 3)
obj.value = children[i].nodeValue;
}
}
function Dispatcher()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("Dispatcher", MSG_1_INST, WARN_SEVER);
thisD = this;
var totalDataQueryArr = new Array();
var outDataQueryArr = new Array();
var dataQueryHash = new Array();
var pollerHash = new Array();
for (var i = 0; i < thisG.dataFileArr.length; i ++)
dataQueryHash[thisG.dataFileArr[i].getPath()] = new Array();
this.getDataQueryArr = function(){return outDataQueryArr}
this.getPollerHash = function(){return pollerHash}
this.addDataQuery = function(inDataQueryArr)
{
if (inDataQueryArr.length == 0)
{
thisML.addMessage("addDataQuery", "Input array is empty", WARN_SEVER);;
return;
}
var id;
for (var i = 0; i < inDataQueryArr.length; i ++)
if (inDataQueryArr[i].getPoller)
{
totalDataQueryArr.push(new DataQuery(inDataQueryArr[i].getPoller(), inDataQueryArr[i].getFilePath(), inDataQueryArr[i].getSearch()));
id = thisG.fileVsEventHashMatrix[inDataQueryArr[i].getFilePath()].id;
thisG.dataFileArr[id].setNotify(true);
}
else
{
thisML.addMessage("addDataQuery", "Element of input array is of wrong type", WARN_SEVER);;
return;
}
thisDH.getXmlData(inDataQueryArr);
mergeDataQueries();
}
this.removePoller = function(poller)
{
var path;
delete pollerHash[poller];
for (var i = 0; i < totalDataQueryArr.length; i ++)
if (totalDataQueryArr[i].getPoller() == poller)
{
path = totalDataQueryArr[i].getFilePath();
totalDataQueryArr.splice(i, 1);
i --;
thisML.addMessage("removePoller", "Query for file '"+path+"' of local poller '"+poller+"' is removed", INFO_SEVER);
}
mergeDataQueries();
}
function mergeDataQueries()
{
var search, poller, isPollerPresent;
outDataQueryArr = new Array();
pollerHash = new Array();
for (var filePath in dataQueryHash)
{
dataQueryHash[filePath].poller = new Array();
dataQueryHash[filePath].search = "";
dataQueryHash[filePath].searchIsPresent = true;
}
for (var i = 0; i < totalDataQueryArr.length; i ++)
{
filePath = totalDataQueryArr[i].getFilePath();
poller = totalDataQueryArr[i].getPoller();
pollerHash[poller] = true;
isPollerPresent = false;
for (var j = 0; j < dataQueryHash[filePath].poller.length; j ++)
if (dataQueryHash[filePath].poller[j] == poller)
{
isPollerPresent = true;
break;
}
if (!isPollerPresent)
dataQueryHash[filePath].poller.push(poller);
search = totalDataQueryArr[i].getSearch();
search = search.replace(/Filter:/gi, "");
if (search == "")
dataQueryHash[filePath].searchIsPresent = false;
else
{
if (dataQueryHash[filePath].search)
dataQueryHash[filePath].search += "||";
dataQueryHash[filePath].search += search;
}
}
for (var filePath in dataQueryHash)
if (dataQueryHash[filePath].poller.length > 0)
{
if (dataQueryHash[filePath].search && dataQueryHash[filePath].searchIsPresent)
search = "Filter:"+dataQueryHash[filePath].search;
else
search = "";
outDataQueryArr.push(new DataQuery(-1, filePath, search));
}
if (outDataQueryArr.length == 0)
thisPI.holdPeriodicPoll();
}
this.NotifyChange = function(filePath)
{
if (typeof (filePath)=="undefined" ||typeof(dataQueryHash[filePath])=="undefined")
return thisML.addMessage("NotifyChange", "Input 'filePath' does not exist", WARN_SEVER);
var pollerArr = dataQueryHash[filePath].poller;
var type;
for (var i = 0; i < pollerArr.length; i ++)
{
type = "typeof("+pollerArr[i]+")!='undefined'";
if (eval(type))
if (eval(pollerArr[i]+".init.getIsExist()"))
{
eval(pollerArr[i]+".maintenance.setFilePath(filePath)");
eval(pollerArr[i]+".maintenance.update()");
continue;
}
this.removePoller(pollerArr[i]);
}
}
this.NotifyInit = function(filePath)
{
thisML.addMessage("NotifyInit", "Initialize subscription and start polling", INFO_SEVER);
thisT.FilterEvents();
thisTI.setPollingInterval(INTERVAL_DEF);
thisPI.startPeriodicPoll();
this.NotifyChange(filePath);
}
}
Dispatcher.count = 0;
function PollInitiator()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("PollInitiator", MSG_1_INST, WARN_SEVER);
thisPI = this;
var timerId = null;
this.startPeriodicPoll = function ()
{
if (!timerId)
{
timerId = self.setInterval("thisPI.periodicCheck()", thisTI.getPollingInterval() * 1000);
thisML.addMessage("PollInitiator", "Periodic polling started", INFO_SEVER);
}
}
this.holdPeriodicPoll = function ()
{
self.clearInterval(timerId);
timerId = null;
thisML.addMessage("PollInitiator", "Periodic polling held", INFO_SEVER);
}
this.stopPeriodicPoll = function ()
{
self.clearInterval(timerId);
timerId = null;
thisS.postXmlUnsubscribeClient();
thisML.addMessage("PollInitiator", "Periodic polling stopped", INFO_SEVER);
}
}
PollInitiator.count = 0;
PollInitiator.prototype.periodicCheck = function()
{
for (var poller in thisD.getPollerHash())
{
if (eval("typeof("+poller+")!='undefined'"))
if (eval(poller+".init.getIsExist()"))
continue;
thisD.removePoller(poller);
}
var dataArr = thisD.getDataQueryArr();
if (thisD.getDataQueryArr().length)
thisT.getXmlTimestamp();
}
function LocalPoller(path, globObj)
{
thisLP = this;
this.globObjPub = globObj;
this.getPath = function(){return path;}
this.init = new LocalPollInit(globObj);
this.maintenance = new GuiMaintenance();
globObj.messageLog.addMessage("LocalPoller", "Local poller '"+path+"' is initialized", INFO_SEVER);
}
function LocalPollInit(globObj)
{
var dataQueryArr = new Array();
var isExist = true;
this.getIsExist=function(){return isExist;}
this.setIsExist=function(inIsExist)
{
if (typeof(inIsExist)!="undefined")
isExist=Boolean(inIsExist);
else
globObj.messageLog.addMessage("setIsExist", "Input variable is empty", WARN_SEVER);
}
this.setDataQueryArr=function(inDataQueryArr)
{
dataQueryArr = inDataQueryArr;
}
this.queryData=function()
{
globObj.addDataQuery(dataQueryArr);
}
}
function GuiMaintenance()
{
this.update();
var filePath = "";
this.getFilePath = function(){return filePath}
this.setFilePath=function(inFilePath)
{
if (typeof(inFilePath)!="undefined")
filePath=String(inFilePath);
else
globObj.messageLog.addMessage("setFilePath", "Input variable is empty", WARN_SEVER);
return filePath;
}
}
GuiMaintenance.prototype.update = update;
function update(){};
function MessageLog()
{
this.constructor.count ++;
if (this.constructor.count > 1)
return thisML.addMessage("MessageLog", MSG_1_INST, WARN_SEVER);
thisML = this;
this.messageArr = new Array();
var maxNumber = 100;
this.severityArr = new Array();
this.severityArr[INFO_SEVER] = "Info";
this.severityArr[WARN_SEVER] = "Warning";
this.severityArr[CRIT_SEVER] = "Critical";
this.addMessage = function(func, msg, severity)
{
var message = new LogMessage(func, msg, severity);
while (this.messageArr.length >= maxNumber)
this.messageArr.shift();
this.messageArr.push(message);
}
this.showLog = function(minSeverity)
{
var date, min, sec, ms, severity, count;
var str = "<html><head><title>Message Log of Polling</title></head><body><table border='1' cellpadding='2' cellspacing='0'><tr><th width='5%'>#</th><th width='15%'>Time</th><th width='15%'>Function</th><th width='55%'>Message</th><th width='10%'>Severity</th></tr>";
var wnd = window.open("", "", "width=600, height=300, left=50, top=50, scrollbars=yes, resizable=yes");
wnd.document.write(str);
for (var i = 0; i < this.messageArr.length; i ++)
{
severity = this.messageArr[i].getSeverity();
if (severity < minSeverity)
continue;
count = i + 1;
str = "<tr><td>"+count+"</td>";
date = this.messageArr[i].getDate();
min = date.getMinutes().toString(10).pad("0",2);
sec = date.getSeconds().toString(10).pad("0",2);
ms = date.getMilliseconds().toString(10).pad("0",3);
str += "<td>"+date.getHours()+":"+min+":"+sec+"."+ms+"</td>";
str += "<td>"+this.messageArr[i].getFunc()+"</td>";
str += "<td>"+this.messageArr[i].getMessage()+"</td>";
str += "<td>"+this.severityArr[severity]+"</td></tr>";
wnd.document.write(str);
}
str = "</table></body></html>";
wnd.document.write(str);
}
}
MessageLog.count = 0;
function SNMPEvent (OID, name)
{
var isEnabled = true;
var toSubscribe = false;
var toCheck = false;
var timestampId = NOT_EXISTS;
var timePrev = "";
var timeLast = "";
this.getOID=function(){return OID}
this.getName=function(){return name}
this.getIsEnabled=function(){return isEnabled}
this.getToSubscribe=function(){return toSubscribe}
this.getToCheck=function(){return toCheck}
this.getTimestampId=function(){return timestampId}
this.setIsEnabled=function(inIsEnabled)
{
if (typeof(inIsEnabled)!="undefined")
isEnabled=Boolean(inIsEnabled);
else
thisML.addMessage("setIsEnabled", "Input variable is empty", WARN_SEVER);
}
this.setToSubscribe=function(inToSubscribe)
{
if (typeof(inToSubscribe)!="undefined")
toSubscribe=Boolean(inToSubscribe);
else
thisML.addMessage("setToSubscribe", "Input variable is empty", WARN_SEVER);
}
this.setToCheck=function(inToCheck)
{
if (typeof(inToCheck)!="undefined")
toCheck=Boolean(inToCheck);
else
thisML.addMessage("setToCheck", "Input variable is empty", WARN_SEVER);
}
this.setTimestampId=function(inTimestampId)
{
if (typeof(inTimestampId)!="undefined" && !isNaN(Number(inTimestampId)))
timestampId=Number(inTimestampId);
else
thisML.addMessage("setTimestampId", "Input variable is empty or NaN", WARN_SEVER);
}
this.compareTime=function(){return (timePrev!=timeLast)&&isEnabled}
this.updateTime=function(newTime)
{
if (typeof(newTime)=="undefined")
{
thisML.addMessage("updateTime", "Input variable is empty", WARN_SEVER);
return false;
}
if (!isEnabled)
return false;
timePrev = timeLast;
timeLast = String(newTime);
return this.compareTime();
}
}
function DataFile (path, supersetLink, dataSource)
{
var notifyUnchanged = false;
this.getPath=function(){return path};
this.getSupersetLink=function(){return supersetLink};
this.getNotify=function(){return notifyUnchanged};
this.getDataSource=function(){return dataSource};
this.setNotify=function(inNotify)
{
if (typeof(inNotify)!="undefined")
notifyUnchanged=Boolean(inNotify);
else
thisML.addMessage("DataFile", "Input variable is empty", WARN_SEVER);
}
}
function DataQuery (poller, filePath, search)
{
this.getPoller=function(){return poller};
this.getFilePath=function(){return filePath};
this.getSearch=function(){return search};
}
function LogMessage (func, message, severity)
{
var date = new Date();
this.getFunc=function(){return func};
this.getMessage=function(){return message};
this.getSeverity=function(){return severity};
this.getDate=function(){return date};
}
String.prototype.pad = function (str, len, pad_right)
{
var s = this;
while (s.length < len)
{
if (pad_right)
s += str;
else
s = str + s;
}
return s;
}
function trimFilePathToName(filePath)
{
return filePath.replace(/.+\//, "").replace(/.+\\/, "").replace(/\..+/, "").replace(/.*?{/,"").replace(/}.*/,"");
}
function ErrorHandlerXmlGoAhead()
{
thisEH = this;
var mibError = new MIBDataXML("./Polling/error_collector.xml", onErrorLoaded, onErrorLoaded);
this.getErrorCollector = function()
{
mibError.load();
}
function onErrorLoaded()
{
var errorsArr = mibError.getRepeatValues("mibError");
for (var i = 1; i < errorsArr.length; i ++)
thisML.addMessage("onErrorLoaded", "Error collector. "+errorsArr[i], CRIT_SEVER);
}
}
function TaskXML (owner, method)
{
TaskXML.prototype.execute = function ()
{
try
{
return method.apply(owner, arguments);
alert("task executed")
}
catch (err)
{
thisML.addMessage("TaskXML", err.message, CRIT_SEVER);
return function(){};
}
}
}
function MIBDataXML(fileName, onLoadFunction, onSubmitFunction)
{
if (!fileName)
{
thisML.addMessage("MIBDataXML", "MIB file path is not defined", CRIT_SEVER);
return;
}
var _src;
if (/:/.test(location.hostname))
_src = location.protocol + "//[" + location.hostname + "]" + ":" +location.port + fileName;
else
_src = location.protocol + "//" + location.hostname + ":" +location.port + fileName;
_src = fileName;
var _file_name = fileName.split("/")[fileName.split("/").length-1].replace(/.*?{/,"").replace(/}.*/,"");
var _onLoadFinished = onLoadFunction ? onLoadFunction : function() { thisML.addMessage("MIBDataXML", "onLoadFinished handler is not defined", CRIT_SEVER);};
var _onSubmitFinished = onSubmitFunction ? onSubmitFunction : function() { thisML.addMessage("MIBDataXML", "onSubmitFinished handler is not defined", CRIT_SEVER);};
var _onError = function()
{
thisML.addMessage("MIBDataXML", "Connection to server has been lost", INFO_SEVER);
thisPI.holdPeriodicPoll();
};
var _onLoadContext = window;
var _onSubmitContext = window;
var _onErrorContext = window;
var _actionType = "none";
var _wasLoaded = false;
var _nameValueHash = new Array();
this._getNamesValuesMerged = function()
{
var s = "";
for (var i in _nameValueHash)
s+="&"+i+"="+_nameValueHash[i];
return s;
}
this._pushNameValue = function(name, value)
{
if (typeof(name) != "undefined" || name != null ||
typeof(value) != "undefined" || value != null)
_nameValueHash[name] = this._escape(value);
}
this._dropNameValue = function(name)
{
if (typeof(name) != "undefined" || name != null ||
typeof(_nameValueHash[name]) != "undefined")
delete _nameValueHash[name];
}
this._emptyNamesValues = function()
{
_nameValueHash = new Array();
}
this._launchOnLoadFinished = function ()
{
_wasLoaded = true;
_onLoadFinished.apply (_onLoadContext);
return true;
};
this._launchOnSubmitFinished = function ()
{
_onSubmitFinished.apply (_onSubmitContext);
return true;
};
this._launchOnError = function ()
{
if ( !top.connectionLost )
{
top.connectionLost = true;
_onError.apply (_onErrorContext);
}
return true;
};
this._getSrc = function ()
{
return _src;
};
this._getFileName = function ()
{
return fileName;
};
this.getWasLoaded = function ()
{
return _wasLoaded;
};
this.setWasLoaded = function (loaded)
{
_wasLoaded = loaded;
return true;
};
this.getXml = function ()
{
return this._req.responseXML;
};
this.getXmlText = function ()
{
return this._req.responseText;
};
this._setActionType = function (type)
{
_actionType = type;
return true;
};
this._checkPath = function ()
{
var formRE = new RegExp("form.*?>", "i");
var docForm = formRE.exec(this._req.responseText);
if (docForm != null)
docForm = docForm[0];
var action_file = "---";
if ( docForm )
{
var actionRE = new RegExp("action.*?(\"|').*?(\"|')", "i");
var formAction = actionRE.exec(docForm)[0];
formAction = formAction.replace(/'/g, "").replace(/"/g, "");
var tmp = formAction.split("/");
action_file = tmp[tmp.length-1];
if (action_file != _file_name)
{
switch ( action_file )
{
case "error_collector.htm" :
thisEH.getErrorCollector();
thisPI.holdPeriodicPoll();
break;
case "log_off_page.htm" :
thisML.addMessage("_checkPath", "Authentication is lost", INFO_SEVER);
thisPI.holdPeriodicPoll();
break;
}
return false;
}
}
else
{
var wcdRE = new RegExp("<ResponseData>", "i");
var docWCD = wcdRE.exec(this._req.responseText);
if (!docWCD)
{
thisML.addMessage("_checkPath", "Loaded document has no FORM element (" + fileName+")", CRIT_SEVER);
return false;
}
}
return true;
};
this._createXMLHttpRequest = function()
{
try
{
return new XMLHttpRequest();
}
catch (ex)
{
}
try
{
return new ActiveXObject("Msxml2.XMLHTTP");
}
catch (ex)
{
}
try
{
return new ActiveXObject("Microsoft.XMLHTTP");
}
catch (ex)
{
}
return null;
};
this._notifyStateChanged = function ()
{
if (this._req.readyState != 4)
return true;
if ((typeof(this._req.responseText) == "undefined") ||
(typeof(this._req.responseText) == "unknown"))
return false;
if (typeof(this._req.responseXML) != "undefined" &&
typeof(this._req.responseXML) != "unknown")
{
this._failCounter = 0;
if (this._req.status == 200)
{
top.connectionLost = false;
if (!this._checkPath())
return false;
switch (_actionType)
{
case "load" :
this._launchOnLoadFinished();
break;
case "submit" :
this._launchOnSubmitFinished();
break;
}
}
else
{
this._launchOnError();
return false;
}
}
else
{
if ( this._failCounter++ > 100 )
{
this._launchOnError();
return false;
}
var tsk = new top.TaskXML(this, this._notifyStateChanged);
window.setTimeout(tsk.execute, 1000);
}
return true;
};
this._escape = function (val)
{
var chars = "*@-_+./";
var result = escape (val.toString().replace(/[\s]{1}/g, String.fromCharCode(160)));
for (var i = 0; i < chars.length; i++)
result = result.split(chars.charAt(i)).join("%" + Number(chars.charCodeAt(i)).toString(16).toUpperCase());
return result;
}
this._showData = function()
{
var controls = this._req.responseXML.getElementsByTagName("INPUT");
var str = "";
for (var i = 0; i < controls.length; i++)
str += getName(controls[i]) + "&nbsp;=&nbsp;<font color='red'>" + getValue(controls[i]) + "</font><br/>";
var wnd = window.open("", "", "width=600, height=300, left=50, top=50, scrollbars=yes, resizable=yes, menubar=yes");
wnd.document.writeln("<html><body>" + str + "</body></html>");
}
this._showPostData = function(postData)
{
var postParams = unescape(this._getNamesValuesMerged());
if (typeof(postData) != "undefined")
postParams += unescape('&' + postData);
var arrPostParams = postParams.split('&');
var str = "";
for (var i = 1; i < arrPostParams.length; i++)
{
var splitIndex = arrPostParams[i].indexOf('=');
var param = arrPostParams[i].substr(0, splitIndex);
var value = arrPostParams[i].substr(splitIndex + 1);
str += param + "&nbsp;=&nbsp;<font color='red'>" + value + "</font><br/>";
}
var wnd = window.open("", "", "width=600, height=300, left=50, top=50, scrollbars=yes, resizable=yes");
wnd.document.writeln("<html><body>" + str + "</body></html>");
}
this._failCounter = 0;
this._req = null;
this._clonedItems = 0;
}
MIBDataXML.prototype.load = function(queryString)
{
this._setActionType("load");
var tsk = new TaskXML(this, this._notifyStateChanged);
queryString = (queryString == "" ? queryString : "?" + queryString);
this._req = this._createXMLHttpRequest();
if ( this._req )
{
try {
this._req.onreadystatechange = tsk.execute;
this._req.open("GET", this._getSrc() + queryString, true);
this._req.send(null);
} catch (e) {
this._launchOnError();
return false;
}
return true;
}
return false;
};
MIBDataXML.prototype.submit = function(queryString, optParams)
{
this._setActionType("submit");
var tsk = new TaskXML(this, this._notifyStateChanged);
if (!queryString)
queryString = "";
this._req = this._createXMLHttpRequest();
if ( this._req )
{
this._req.open("POST", this._getSrc(), true);
this._req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
this._req.onreadystatechange = tsk.execute;
var postParams = "restoreUrl=" + queryString + this._getNamesValuesMerged();
this._emptyNamesValues();
if ((typeof(optParams) != "undefined") && (optParams != ""))
postParams = postParams + '&' + optParams;
this._req.send(postParams);
}
};
MIBDataXML.prototype.getValue = function(name)
{
var node = getXmlElementsByNameOrId(this._req.responseXML, name)[0];
if (node)
return getValue(node);
return null;
};
MIBDataXML.prototype.getRepeatValues = function(name)
{
var repeatArray = new Array();
var counter = 1;
while (getXmlElementsByNameOrId(this._req.responseXML, name+"?"+counter)[0])
{
repeatArray[counter] = getValue(getXmlElementsByNameOrId(this._req.responseXML, name+"?"+counter)[0]);
counter++;
}
return repeatArray;
};
MIBDataXML.prototype.setValue = function(name, value)
{
if ((typeof this._req.responseXML == "undefined") || (typeof name == "undefined")) {
return false;
} else {
var val = getXmlElementsByNameOrId(this._req.responseXML, name);
if (!(val instanceof Array) || (!val[0]))
return false;
}
this._pushNameValue(name, value);
return true;
};
MIBDataXML.prototype.setControlDisableStatus = function(name, status)
{
var control = getXmlElementsByNameOrId(this._req.responseXML, name)[0];
if (!control)
return false;
if (status)
this._dropNameValue(name);
else
this._pushNameValue(name, getValue(control));
return true;
};
MIBDataXML.prototype.setContainerDisableStatus = function(id, status)
{
var container = getXmlElementsByNameOrId(this._req.responseXML, id)[0];
if (container == null)
return false;
var fieldTypes = ["INPUT", "input"];
var fields;
for (var j = 0; j < fieldTypes.length; ++j)
{
fields = container.getElementsByTagName(fieldTypes[j]);
for(var i = 0; i < fields.length; i++)
{
if (status)
this._dropNameValue(getName(fields[i]));
else
this._pushNameValue(getName(fields[i]), getValue(fields[i]));
}
}
return true;
};
MIBDataXML.prototype.cloneContainer = function(container, values)
{
var name, value;
var newRow = getXmlElementsByNameOrId(this._req.responseXML, container)[0];
this._clonedItems++;
var varCount = 0;
for ( var i = 0; i < newRow.childNodes.length; i++ )
{
if (newRow.childNodes[i].nodeType != 1 ||
newRow.childNodes[i].tagName.indexOf("/")>-1)
continue;
name = getName(newRow.childNodes[i]).split("?")[0] + "?" + this._clonedItems.toString();
this._pushNameValue(name, values[varCount]);
varCount ++;
}
}
function getXmlElementsByNameOrId(xmlObj, name)
{
if ((typeof xmlObj != "undefined") && (xmlObj != null)) {
var tagNameArr = ["DIV", "INPUT", "div", "input"];
var nodeArr = new Array();
var outNodeArr = new Array();
var attrArr = null;
var nodes;
for (var i = 0; i < tagNameArr.length; ++i)
{
nodes = xmlObj.getElementsByTagName(tagNameArr[i]);
for (var j = 0; j < nodes.length; j ++)
nodeArr.push(nodes[j]);
}
for (var i = 0; i < nodeArr.length; i ++)
{
if (nodeArr[i].nodeType != 1)
continue;
attrArr = nodeArr[i].attributes;
for (var j = 0; j < attrArr.length; j ++)
{
if (attrArr[j].nodeType != 2)
continue;
if ((attrArr[j].nodeName.toLowerCase() == "name" ||
attrArr[j].nodeName.toLowerCase() == "id") &&
attrArr[j].nodeValue == name)
outNodeArr.push(nodeArr[i]);
}
}
return outNodeArr;
} else return null;
}
function getAttribute(xmlObj, attribute)
{
var attrArr = xmlObj.attributes;
for (var i = 0; i < attrArr.length; i ++)
if (attrArr[i].nodeName.toLowerCase() == attribute.toLowerCase())
return attrArr[i];
return null;
}
function getValue(xmlObj)
{
return getAttribute(xmlObj, "value").nodeValue;
}
function getName(xmlObj)
{
return getAttribute(xmlObj, "name").nodeValue;
}
var langNames = "";
function homePollerUpdate()
{
var filePath = homePoller.maintenance.getFilePath();
if (filePath == GENERAL_PATH)
{
var generalArr,hostName,hostValue,routValue,menuArr;
var routValue = globalPoller.data.dataBase.general.rlDependendFeaturesEnabled[0].value;
if(routValue.length != 8)
_top.userDefinedSystMode = false;
if (routValue.charAt(0)==1)
_top.displayRouter = true;
else
_top.displayRouter = false;
if (routValue.charAt(1)==1)
_top.polBasedVLANActive = true;
else
_top.polBasedVLANActive = false;
_top.protocolBasedVLANSupported = (globalPoller.data.dataBase.general.protocolBasedVLANSupported[0].value == 1 ? true : false);
_top.defaultVlanId = parseInt(globalPoller.data.dataBase.general.rlVlanDefaultVID[0].value,10);
_top.IpHostManagementIndex = _top.defaultVlanId + 99999;
var hostValue;
var rlHostParamTable = globalPoller.data.dataBase.general.rlHostParamTable[0].rlHostParamEntry;
for (var i = 0; i < rlHostParamTable.length; i ++)
{
hostValue = parseInt(rlHostParamTable[i].rlHostParamValue[0].value, 10);
switch (rlHostParamTable[i].rlHostParamName[0].value.toLowerCase())
{
case "l2_first_out_of_band_ifindex":
_top.oobFirstIndex = hostValue;
break;
case "l2_num_of_out_of_band_ports":
_top.oobNumOfPorts = hostValue;
break;
case "l2_first_trunk_ifindex":
_top.trunkFirstIndex = hostValue;
break;
case "l2_num_of_trunks":
_top.NumberOfTrunks = hostValue;
break;
case "cosparams_ingressratelimitsupported":
_top.rateLimit = hostValue;
break;
case "storm_control_defaultrate":
_top.StormRateThreshold = hostValue;
break;
case "l2_max_num_ports_in_trunk":
_top.maxPortsPerTrunk = hostValue;
break;
case "unit_max_number_of_units" :
_top.MaxNumberOfUnits = hostValue;
break;
case "l2_first_tunnel_ifindex":
_top.tunnelFirstIndex = hostValue;
break;
case "l2_num_of_tunnel_interfaces":
_top.maxNumberOfTunnels = hostValue;
break;
case "poe.supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.poeSupported = (hostValue == 1 ? true : false);
break;
case "vlan_pve_supported":
_top.pveSupported = (hostValue == 1 ? true : false);
break;
case "bridge_numoftcperport":
_top.numOfQueue = hostValue;
break;
case "stp_max_stp_instances_supported":
_top.numOfInstances = hostValue;
break;
case "first_unused_tag":
_top.maxVLANid = hostValue;
break;
case "vlan_acceptable_frame_type_untagged_supported":
_top.untaggedFrameSupported = (hostValue == 1 ? true : false);
break;
case "cosparams_shaper_max_rate":
_top.qosCIRmax=hostValue;
break;
case "cosparams_shaper_min_burst":
_top.qosCBSmin=hostValue.toString();
break;
case "cosparams_shaper_max_burst":
_top.qosCBSmax=hostValue;
break;
case "lldp_med_number_of_network_policies":
_top.lldpNPnum=hostValue;
break;
case "cosparams_policer_default_burst":
_top.cosCbsRateLimit=hostValue;
break;
case "cosparams_shaper_burst_default":
_top.qosCBSDefault = hostValue;
break;
case "cosparams_shaper_min_rate":
_top.qosCIRmin=hostValue.toString();
break;
case "cosparams_policer_min_rate":
_top.PolicyClassMapsCirMin = hostValue.toString();
break;
case "cosparams_policer_max_rate":
_top.PolicyClassMapsCirMax = hostValue.toString();
break;
case "cosparams_policer_min_burst":
_top.PolicyClassMapsCbsMin = hostValue.toString();
break;
case "cosparams_policer_max_burst":
_top.PolicyClassMapsCbsMax = hostValue.toString();
break;
case "cosparams_ingress_rate_limit_min":
_top.cosIngressRateLimitMin = hostValue.toString();
break;
case "cosparams_ingress_rate_limit_max":
_top.cosIngressRateLimitMax = hostValue.toString();
break;
case "management_interface_logical_ifindex":
_top.ManagementInterfaceLogicalifIndex = hostValue.toString();
break;
case "management_interface_support":
_top.ManagementInterfaceSupport = (hostValue == 1 ? true : false);
break;
case "management_interface_default_vlan_ifindex":
_top.ManagementInterfaceDefaultVlanifIndex = hostValue.toString();
break;
case "eee.supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.eeeSupported = (hostValue == 1 ? true : false);
break;
case "green_sr.supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.shortReachSupported = (hostValue == 1 ? true : false);
break;
case "vlan.mac_base_vlan_supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.macBasedVLANSupported = (hostValue == 1 ? true : false);
break;
case "vlan.tvvlan_is_supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.accessMTVSupported = (hostValue == 1 ? true : false);
break;
case "vlan.tripleplay_is_supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.customerMTVSupported = (hostValue == 1 ? true : false);
break;
case "vlan.vlan_rava_supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.RVASupported = (hostValue == 1 ? true : false);
break;
case "routers_shared_ip_and_qos_resources":
_top.sharedIPAndQosResources = (hostValue == 1 ? true : false);
break;
case "poe.poe_port_mode_value":
hostValue = rlHostParamTable[i].rlHostParamOctetString[0].value;
_top.poePowerLimit = hostValue;
break;
case "cosfeature_vlan_rate_limit":
_top.vlanRateLimitSupported = (hostValue == 1 ? true : false);
break;
case "auto_upgrade.scp_supported":
hostValue = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
_top.Auto_Config_scp_supported = (hostValue == 1 ? true : false);
break;
case "led.mask_led_supported":
_top.portLedControl = (parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10) == 1 ? true : false);
break;
case "routers_ip_forward":
_top.routersIPforward = (hostValue == 1 ? true : false);
break;
case "applications_vrrp_supported":
_top.vrrpSupported = (hostValue == 1 ? true : false);
break;
case "routers_ripv1_enable":
_top.ripSupported = (hostValue == 1 ? true : false);
break;
case "ip_fft.dflt_num_of_route_entries":
_top.defaultMaxIPv4RoutingEntries = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
break;
case "ipv6_fft.dflt_num_of_route_entries":
_top.defaultMaxIPv6RoutingEntries = parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10);
break;
case "cosparams_maxnumofpce":
_top.maxNonIPRoutingEntries = parseInt(rlHostParamTable[i].rlHostParamValue[0].value, 10);
break;
case "wba_supported":
_top.WBASupported = (parseInt(rlHostParamTable[i].rlHostParamValue[0].value, 10) == 1 ? true : false);
break;
case "wba_max_languages":
_top.WBAMaxLanguages = parseInt(rlHostParamTable[i].rlHostParamValue[0].value, 10);
break;
case "unq_module_type":
_top.unq_module_type = parseInt(rlHostParamTable[i].rlHostParamValue[0].value, 10);
break;
case "is_bpdu_guard_supported":
_top.is_bpdu_guard_supported = (parseInt(rlHostParamTable[i].rlHostParamValue[0].value, 10) == 1 ? true : false);
break;
case "udld.supported":
_top.udld_supported = (parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10) == 1 ? true : false);
break;
case "fhs.supported":
_top.fhs_supported = (parseInt(rlHostParamTable[i].rlHostParamValueUINT[0].value, 10) == 1 ? true : false);
break;
case "l2_first_loopback_ifindex":
_top.loopbackFirstIndex = hostValue;
break;
case "l2_num_of_loopback_interfaces":
_top.loopbackNumOfPorts = hostValue;
break;
case "l2_max_port_speed":
_top.l2_max_port_speed = hostValue;
break;
}
}
initTopLAGArr();
_top.maxTunnelsId = (_top.displayRouter || _top.isXModel && !_top.isHybridMode) ? "16" : "2";
incrementInitProgress();
}
else if (filePath == UNITS_PATH)
{
_top.NumberOfPorts = parseInt(globalPoller.data.dataBase.units.numberOfPorts[0].value, 10);
initPortNameArray();
var PortsTable = globalPoller.data.dataBase.units.interfaceNameList[0].entry;
for (var i = 0; i < PortsTable.length; i ++)
{
var ifIndex = parseInt(PortsTable[i].ifIndex[0].value, 10);
var portName = PortsTable[i].ifName[0].value;
_top.actualNamesArr[ifIndex]=portName;
_top.portsNamesArr[ifIndex] = getPortName(portName,true);
_top.portsLongNamesSaArr[ifIndex] = getPortName(portName,true);
_top.portsLongNamesStackArr[ifIndex] = getPortName(portName,false);
}
_top.portsLongNamesArr = _top.portsLongNamesSaArr;
_top.modulesDataXml = globalPoller.data.dataXml[trimFilePathToName(filePath)];
var value, moduleNumber, moduleType, firstPortIndex, numberOfPorts, moduleRole, stackConnect1, stackConnect2, portPair;
var portPairSG500XG = null;
var startPortOffset = 0;
var flagMaster = false;
var flagBackup = false;
if (isStackableDevice)
{
_top.stackingMode = parseInt(globalPoller.data.dataBase.units.modulesDataBase[0].portPairData[0].moduleStackMode[0].value, 10);
_top.isHybridMode = (_top.stackingMode == 3 || _top.stackingMode == 4 || _top.stackingMode == 5);
}
_top.NumberOfModules = parseInt(globalPoller.data.dataBase.units.numberOfUnits[0].value, 10);
_top.RealModuleNameArr = new Array(_top.NumberOfModules);
initTopModuleArr();
var firstPoe=-1;
var tmpTypePerModuleArr = new Array(_top.MaxNumberOfUnits);
var tmpisXModelArr = new Array(_top.MaxNumberOfUnits);
for(var i=0; i<=_top.MaxNumberOfUnits; i++)
{
tmpTypePerModuleArr[i]=-1;
tmpisXModelArr[i] = false;
}
var moduleArr = globalPoller.data.dataBase.units.modulesDataBase[0].module;
var portPairArr = globalPoller.data.dataBase.units.modulesDataBase[0].portPairData;
moduleName[0] = null;
_top.isXModel = false;
for (var i=0; i<moduleArr.length; i++)
{
moduleIndex=moduleArr[i].moduleNumber[0].value;
if (i == 0)
_top.firstPresentModule = moduleIndex;
moduleType=moduleArr[i].moduleType[0].value;
firstPortIndex=moduleArr[i].firstPortIndex[0].value;
numberOfPorts=moduleArr[i].numberOfPorts[0].value;
moduleRole=moduleArr[i].moduleRole[0].value;
tmpisXModelArr[moduleIndex] = false;
if (isStackableDevice)
{
portPair = portPairArr[i].portPair[0].value;
if(portPair == '5')
portPairSG500XG = { StackPort1 : portPairArr[i].port1Num[0].value,
StackPort2 : portPairArr[i].port2Num[0].value }
else
portPairSG500XG = null
}
else
portPair = null;
if(_top.firstPresentPortPair == -1)
_top.firstPresentPortPair = portPair;
if ((moduleType=="2" || moduleType=="4" || moduleType=="6" || moduleType=="8" || moduleType=="10")
&& (firstPoe== -1))
firstPoe= parseInt(moduleIndex, 10);
_top.moduleType = moduleType;
switch(moduleType)
{
case "1":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000201";
_top.isSmart = true;
_top.productFamily = 1;
_top.productPortsType = 1;
_top.moduleName[i] = "8000301";
break;
case "2":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000202";
_top.isSmart = true;
_top.isPoE = true;
_top.productFamily = 1;
_top.productPortsType = 1;
_top.moduleName[i] = "8000302";
break;
case "3":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000203";
_top.isSmart = true;
_top.productFamily = 1;
_top.productPortsType = 1;
_top.moduleName[i] = "8000303";
break;
case "4":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000204";
_top.isSmart = true;
_top.isPoE = true;
_top.productFamily = 1;
_top.productPortsType = 1;
_top.moduleName[i] = "8000304";
_top.displayHealth = true;
break;
case "5":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000205";
_top.isSmart = true;
_top.productFamily = 1;
_top.productPortsType = 1;
_top.moduleName[i] = "8000305";
_top.displayHealth = true;
break;
case "6":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000206";
_top.isSmart = true;
_top.isPoE = true;
_top.productFamily = 1;
_top.productPortsType = 1;
_top.moduleName[i] = "8000306";
_top.displayHealth = true;
break;
case "7":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000207";
_top.isSmart = false;
_top.productFamily = 2;
_top.productPortsType = 1;
_top.moduleName[i] = "8000307";
_top.displayHealth = true;
break;
case "8":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000208";
_top.isSmart = false;
_top.isPoE = true;
_top.productFamily = 2;
_top.productPortsType = 1;
_top.moduleName[i] = "8000308";
_top.displayHealth = true;
break;
case "9":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000209";
_top.isSmart = false;
_top.productFamily = 2;
_top.productPortsType = 1;
_top.moduleName[i] = "8000307";
_top.displayHealth = true;
break;
case "10":
if(moduleRole=="1" || moduleRole=="2")_top.deviceDescription="8000210";
_top.isSmart = false;
_top.isPoE = true;
_top.productFamily = 2;
_top.productPortsType = 1;
_top.moduleName[i] = "8000308";
_top.displayHealth = true;
break;
default:
break;
}
_top.RealModuleNameArr[i] = parseInt(moduleIndex, 10);
_top.NumberOfPortPerModuleArr[moduleIndex] = parseInt(numberOfPorts, 10);
_top.pairPerModuleArr[moduleIndex] = portPair;
_top.pairPerModuleSG500XGArr[moduleIndex] = portPairSG500XG;
tmpTypePerModuleArr[moduleIndex] = moduleType;
_top.ModuleRoleArr[moduleIndex] = moduleRole;
switch (moduleRole)
{
case "1":
_top.MasterUnit = 0;
flagMaster = true;
_top.masterModuleType = moduleType;
_top.masterPortType = _top.productPortsType;
break;
case "2":
_top.MasterUnit = moduleIndex;
flagMaster = true;
_top.masterModuleType = moduleType;
_top.masterPortType = _top.productPortsType;
_top.isStandAlone = false;
break;
case "3":
_top.BackUpUnit = moduleIndex;
flagBackup = true;
_top.isStandAlone = false;
break;
}
startPortOffset = 0;
if( (_top.productPortsType==1) && (!_top.isStandAlone) && (portPairSG500XG == null) )
{
if(!( (tmpisXModelArr[moduleIndex])
&&(!_top.isHybridMode) ) )
startPortOffset = 48;
}
_top.firstPortPerModuleArr[moduleIndex] = parseInt(firstPortIndex, 10) + startPortOffset;
}
if(!flagMaster)
_top.MasterUnit="";
if(!flagBackup)
_top.BackUpUnit="";
_top.firstPoeUnit = firstPoe;
_top.TypePerModuleArr = tmpTypePerModuleArr;
_top.isXModelArr = tmpisXModelArr;
_top.Units = (NumberOfModules > 1 ? true : false);
saveStackOrder(globalPoller.data.dataBase.units.stackOrderPermutation[0].value);
_top.haveUnitData = true;
_top.maxTunnelsId = (_top.displayRouter || _top.isXModel && !_top.isHybridMode) ? "16" : "2";
if(!_top.isFirstLoad)
zoomUpdate();
incrementInitProgress();
}
else if (filePath == PORTS_PATH)
{
_top.portsDataXml = globalPoller.data.dataXml[trimFilePathToName(filePath)];
var value, ifIndex, portName, relatedUnit, transceiverType, ifSpeed, OperStatus, suspendedStatus, portsArr,swIfType, unitMode;
var isSA;
if (isStackableDevice)
isSA = parseInt(globalPoller.data.dataBase.ports.portsDataBase[0].rlStackUnitMode[0].value, 10);
else
isSA = 1;
if(isSA == 1)
isSA = true;
else
isSA = false;
_top.NumberOfPorts = parseInt(globalPoller.data.dataBase.ports.portsDataBase[0].numberOfPorts[0].value, 10);
initTopPortArr();
initTopOOBArr();
var tmpPortsStatusArr = new Array(_top.NumberOfPorts);
var tmpPortsTypeArr = new Array(_top.NumberOfPorts);
var tmpswIfTypeArr = new Array(_top.NumberOfPorts);
var tmpPortsPoeSupported = new Array(_top.NumberOfPorts);
var tmpPortsTtransceiverTypeArr = new Array(_top.NumberOfPorts);
var tmpPortsSpeedArr = new Array(_top.NumberOfPorts);
var tmpMaxNumberOfUnits = 100;
var tmpStartingPortPerModuleArr = new Array(tmpMaxNumberOfUnits);
var tmpSlotPerModuleArr = new Array(tmpMaxNumberOfUnits);
for(i=0;i<=tmpMaxNumberOfUnits;i++)
{
tmpStartingPortPerModuleArr[i] = "-1";
tmpSlotPerModuleArr[i] = "-1";
}
portsArr = globalPoller.data.dataBase.ports.portsDataBase[0].port;
var firstPresentFound = false;
for(var i=0; i<portsArr.length; i++)
{
ifIndex = portsArr[i].ifIndex[0].value;
OperStatus=portsArr[i].operStatus[0].value;
if(OperStatus != 6)
_top.existedPortsArr[ifIndex] = true;
portName = portsArr[i].portName[0].value;
tmpPortsPoeSupported[ifIndex] = ( portsArr[i].POESupported[0].value == '1');
if(OperStatus == 6)continue;
if (firstPresentFound == false)
{
_top.firstPresentPort = ifIndex;
firstPresentFound = true;
}
relatedUnit = portsArr[i].relUnit[0].value;
if (tmpStartingPortPerModuleArr[relatedUnit] == "-1")
tmpStartingPortPerModuleArr[relatedUnit] = ifIndex;
if (tmpSlotPerModuleArr[relatedUnit] == "-1")
{
var tmpSlot = "-1";
if (portName.indexOf("/") != -1)
{
var tmpName = portName.split("/");
if (tmpName.length == 2)
tmpSlot = tmpName[0].substr(2);
else
tmpSlot = tmpName[1];
}
tmpSlotPerModuleArr[relatedUnit] = tmpSlot;
}
swIfType = portsArr[i].swIfType[0].value;
transceiverType = portsArr[i].transType[0].value;
tmpPortsTtransceiverTypeArr[ifIndex] = transceiverType;
value = portsArr[i].ifSpeed[0].value;
tmpPortsSpeedArr[ifIndex] = value;
ifSpeed = parseInt(value);
if (ifSpeed==10000000) ifSpeed = 1;
else if (ifSpeed==100000000) ifSpeed = 2;
else if (ifSpeed==1000000000) ifSpeed = 3;
else if (ifSpeed==10000000000) ifSpeed = 4;
else ifSpeed = 0;
suspendedStatus = portsArr[i].suspStatus[0].value;
tmpPortsTypeArr[ifIndex] = transceiverType*10+ifSpeed;
tmpswIfTypeArr[ifIndex] = swIfType;
_top.moduleNumPerPortArr[ifIndex] = relatedUnit;
_top.lastPortPerModuleArr[relatedUnit] = ifIndex;
if((transceiverType == 4) || (transceiverType == 3))
_top.isComboPort[ifIndex] = true;
if(swIfType == 3 && _top.firstPresentGigaPort == null)
_top.firstPresentGigaPort = ifIndex;
tmpPortsStatusArr[ifIndex] = ( OperStatus == 1 ? "Up" : ( suspendedStatus == 1 ? "Suspended" : "Down"));
}
_top.portsTypeArr = new Array(_top.NumberOfPorts);
_top.portsStatusArr = new Array(_top.NumberOfPorts);
_top.swIfTypeArr = new Array(_top.NumberOfPorts);
_top.portsPoeSupported = new Array(_top.NumberOfPorts);
_top.PortsTtransceiverTypeArr = new Array(_top.NumberOfPorts);
_top.PortsSpeedArr = new Array(_top.NumberOfPorts);
_top.StartingPortPerModuleArr = new Array(tmpMaxNumberOfUnits);
_top.slotPerModuleArr = new Array(tmpMaxNumberOfUnits);
_top.StartingPortPerModuleArr = tmpStartingPortPerModuleArr;
_top.slotPerModuleArr = tmpSlotPerModuleArr;
if(!isSA)
_top.portsLongNamesArr = _top.portsLongNamesStackArr;
_top.portsStatusArr = tmpPortsStatusArr;
_top.portsTypeArr = tmpPortsTypeArr;
_top.portsPoeSupported = tmpPortsPoeSupported;
_top.swIfTypeArr = tmpswIfTypeArr;
_top.PortsTtransceiverTypeArr = tmpPortsTtransceiverTypeArr;
_top.PortsSpeedArr = tmpPortsSpeedArr;
_top.finishLoading = true;
_top.havePortData = true;
if(!_top.isFirstLoad)
zoomUpdate();
_top.isFirstLoad = false;
incrementInitProgress();
}
else if (filePath == OTHER_PATH)
{
MsgLog.addMsg(filePath, "Info", "Polling");
var langNamesCurrent = GetLangList();
if (langNames == "")
{
langNames = langNamesCurrent;
}
else if (langNames != langNamesCurrent && localization.LANGLISTREADY)
{
langNames = langNamesCurrent;
localization.langReload();
}
}
if (globalPoller.data.getLoadsRemain() == 0 && !mainFrame_gw.oPolling)
{
finalizePolling();
globalPoller.messageLog.addMessage("update", "Initialize oPoller", INFO_SEVER);
mainFrame_gw.oPolling = new mainFrame_gw.Polling();
mainFrame_gw.oPolling.get_SiteMap(true);
}
function zoomUpdate()
{
if (top.mainFrame.location.pathname.indexOf("system_general_description_m.htm")!=-1)
if(top.oGW.isActive(top.oGW.reg_frame))
top.mainFrame.location.reload();
globalPoller.messageLog.addMessage("update", "Data on 'home' page was updated due to change in '"+filePath+"'", INFO_SEVER);
}
function GetLangList()
{
var langNamesStr = "";
var db = globalPoller.data.dataBase.noStamp.rlLocalizationLanguagesTable[0].rlLocalizationLanguagesEntry;
for (var i = 0; i < db.length; i ++)
langNamesStr += db[i].rlLocalizationLanguagesName[0].value + db[i].rlLocalizationVersion[0].value;
return langNamesStr;
}
function finalizePolling()
{
var MaxNumberOfUnits = _top.MaxNumberOfUnits;
if (MaxNumberOfUnits <= _top.StartingPortPerModuleArr.length)
{
var tmpStartingPortPerModuleArr = new Array(MaxNumberOfUnits);
var tmpSlotPerModuleArr = new Array(MaxNumberOfUnits);
for (var i = 0 ; i<= MaxNumberOfUnits ; i++)
{
tmpStartingPortPerModuleArr[i] = _top.StartingPortPerModuleArr[i];
tmpSlotPerModuleArr[i] = _top.slotPerModuleArr[i];
}
_top.StartingPortPerModuleArr = new Array(MaxNumberOfUnits);
_top.slotPerModuleArr = new Array(MaxNumberOfUnits);
_top.StartingPortPerModuleArr = tmpStartingPortPerModuleArr;
_top.slotPerModuleArr = tmpSlotPerModuleArr;
}
}
}
addjQuery(true);
function addjQuery(jquery) {
if (jquery == true) {
/*!
* jQuery JavaScript Library v1.10.2
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2013-07-03T13:48Z
*/
(function (window, undefined) {
var
readyList,
rootjQuery,
core_strundefined = typeof undefined,
location = window.location,
document = window.document,
docElem = document.documentElement,
_jQuery = window.jQuery,
_$ = window.$,
class2type = {},
core_deletedIds = [],
core_version = "1.10.2",
core_concat = core_deletedIds.concat,
core_push = core_deletedIds.push,
core_slice = core_deletedIds.slice,
core_indexOf = core_deletedIds.indexOf,
core_toString = class2type.toString,
core_hasOwn = class2type.hasOwnProperty,
core_trim = core_version.trim,
jQuery = function (selector, context) {
return new jQuery.fn.init(selector, context, rootjQuery);
},
core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
core_rnotwhite = /\S+/g,
rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
rvalidchars = /^[\],:{}\s]*$/,
rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
rmsPrefix = /^-ms-/,
rdashAlpha = /-([\da-z])/gi,
fcamelCase = function (all, letter) {
return letter.toUpperCase();
},
completed = function (event) {
if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
detach();
jQuery.ready();
}
},
detach = function () {
if (document.addEventListener) {
document.removeEventListener("DOMContentLoaded", completed, false);
window.removeEventListener("load", completed, false);
} else {
document.detachEvent("onreadystatechange", completed);
window.detachEvent("onload", completed);
}
};
jQuery.fn = jQuery.prototype = {
jquery: core_version,
constructor: jQuery,
init: function (selector, context, rootjQuery) {
var match, elem;
if (!selector) {
return this;
}
if (typeof selector === "string") {
if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
match = [null, selector, null];
} else {
match = rquickExpr.exec(selector);
}
if (match && (match[1] || !context)) {
if (match[1]) {
context = context instanceof jQuery ? context[0] : context;
jQuery.merge(this, jQuery.parseHTML(
match[1],
context && context.nodeType ? context.ownerDocument || context : document,
true
));
if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
for (match in context) {
if (jQuery.isFunction(this[match])) {
this[match](context[match]);
} else {
this.attr(match, context[match]);
}
}
}
return this;
} else {
elem = document.getElementById(match[2]);
if (elem && elem.parentNode) {
if (elem.id !== match[2]) {
return rootjQuery.find(selector);
}
this.length = 1;
this[0] = elem;
}
this.context = document;
this.selector = selector;
return this;
}
} else if (!context || context.jquery) {
return (context || rootjQuery).find(selector);
} else {
return this.constructor(context).find(selector);
}
} else if (selector.nodeType) {
this.context = this[0] = selector;
this.length = 1;
return this;
} else if (jQuery.isFunction(selector)) {
return rootjQuery.ready(selector);
}
if (selector.selector !== undefined) {
this.selector = selector.selector;
this.context = selector.context;
}
return jQuery.makeArray(selector, this);
},
selector: "",
length: 0,
toArray: function () {
return core_slice.call(this);
},
get: function (num) {
return num == null ?
this.toArray() :
(num < 0 ? this[this.length + num] : this[num]);
},
pushStack: function (elems) {
var ret = jQuery.merge(this.constructor(), elems);
ret.prevObject = this;
ret.context = this.context;
return ret;
},
each: function (callback, args) {
return jQuery.each(this, callback, args);
},
ready: function (fn) {
jQuery.ready.promise().done(fn);
return this;
},
slice: function () {
return this.pushStack(core_slice.apply(this, arguments));
},
first: function () {
return this.eq(0);
},
last: function () {
return this.eq(-1);
},
eq: function (i) {
var len = this.length,
j = +i + (i < 0 ? len : 0);
return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
},
map: function (callback) {
return this.pushStack(jQuery.map(this, function (elem, i) {
return callback.call(elem, i, elem);
}));
},
end: function () {
return this.prevObject || this.constructor(null);
},
push: core_push,
sort: [].sort,
splice: [].splice
};
jQuery.fn.init.prototype = jQuery.fn;
jQuery.extend = jQuery.fn.extend = function () {
var src, copyIsArray, copy, name, options, clone,
target = arguments[0] || {},
i = 1,
length = arguments.length,
deep = false;
if (typeof target === "boolean") {
deep = target;
target = arguments[1] || {};
i = 2;
}
if (typeof target !== "object" && !jQuery.isFunction(target)) {
target = {};
}
if (length === i) {
target = this;
--i;
}
for (; i < length; i++) {
if ((options = arguments[i]) != null) {
for (name in options) {
src = target[name];
copy = options[name];
if (target === copy) {
continue;
}
if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
if (copyIsArray) {
copyIsArray = false;
clone = src && jQuery.isArray(src) ? src : [];
} else {
clone = src && jQuery.isPlainObject(src) ? src : {};
}
target[name] = jQuery.extend(deep, clone, copy);
} else if (copy !== undefined) {
target[name] = copy;
}
}
}
}
return target;
};
jQuery.extend({
expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
noConflict: function (deep) {
if (window.$ === jQuery) {
window.$ = _$;
}
if (deep && window.jQuery === jQuery) {
window.jQuery = _jQuery;
}
return jQuery;
},
isReady: false,
readyWait: 1,
holdReady: function (hold) {
if (hold) {
jQuery.readyWait++;
} else {
jQuery.ready(true);
}
},
ready: function (wait) {
if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
return;
}
if (!document.body) {
return setTimeout(jQuery.ready);
}
jQuery.isReady = true;
if (wait !== true && --jQuery.readyWait > 0) {
return;
}
readyList.resolveWith(document, [jQuery]);
if (jQuery.fn.trigger) {
jQuery(document).trigger("ready").off("ready");
}
},
isFunction: function (obj) {
return jQuery.type(obj) === "function";
},
isArray: Array.isArray || function (obj) {
return jQuery.type(obj) === "array";
},
isWindow: function (obj) {
return obj != null && obj == obj.window;
},
isNumeric: function (obj) {
return !isNaN(parseFloat(obj)) && isFinite(obj);
},
type: function (obj) {
if (obj == null) {
return String(obj);
}
return typeof obj === "object" || typeof obj === "function" ?
class2type[core_toString.call(obj)] || "object" :
typeof obj;
},
isPlainObject: function (obj) {
var key;
if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
return false;
}
try {
if (obj.constructor &&
!core_hasOwn.call(obj, "constructor") &&
!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
return false;
}
} catch (e) {
return false;
}
if (jQuery.support.ownLast) {
for (key in obj) {
return core_hasOwn.call(obj, key);
}
}
for (key in obj) { }
return key === undefined || core_hasOwn.call(obj, key);
},
isEmptyObject: function (obj) {
var name;
for (name in obj) {
return false;
}
return true;
},
error: function (msg) {
throw new Error(msg);
},
parseHTML: function (data, context, keepScripts) {
if (!data || typeof data !== "string") {
return null;
}
if (typeof context === "boolean") {
keepScripts = context;
context = false;
}
context = context || document;
var parsed = rsingleTag.exec(data),
scripts = !keepScripts && [];
if (parsed) {
return [context.createElement(parsed[1])];
}
parsed = jQuery.buildFragment([data], context, scripts);
if (scripts) {
jQuery(scripts).remove();
}
return jQuery.merge([], parsed.childNodes);
},
parseJSON: function (data) {
if (window.JSON && window.JSON.parse) {
return window.JSON.parse(data);
}
if (data === null) {
return data;
}
if (typeof data === "string") {
data = jQuery.trim(data);
if (data) {
if (rvalidchars.test(data.replace(rvalidescape, "@")
.replace(rvalidtokens, "]")
.replace(rvalidbraces, ""))) {
return (new Function("return " + data))();
}
}
}
jQuery.error("Invalid JSON: " + data);
},
parseXML: function (data) {
var xml, tmp;
if (!data || typeof data !== "string") {
return null;
}
try {
if (window.DOMParser) {
tmp = new DOMParser();
xml = tmp.parseFromString(data, "text/xml");
} else {
xml = new ActiveXObject("Microsoft.XMLDOM");
xml.async = "false";
xml.loadXML(data);
}
} catch (e) {
xml = undefined;
}
if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
jQuery.error("Invalid XML: " + data);
}
return xml;
},
noop: function () { },
globalEval: function (data) {
if (data && jQuery.trim(data)) {
(window.execScript || function (data) {
window["eval"].call(window, data);
})(data);
}
},
camelCase: function (string) {
return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
},
nodeName: function (elem, name) {
return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
},
each: function (obj, callback, args) {
var value,
i = 0,
length = obj.length,
isArray = isArraylike(obj);
if (args) {
if (isArray) {
for (; i < length; i++) {
value = callback.apply(obj[i], args);
if (value === false) {
break;
}
}
} else {
for (i in obj) {
value = callback.apply(obj[i], args);
if (value === false) {
break;
}
}
}
} else {
if (isArray) {
for (; i < length; i++) {
value = callback.call(obj[i], i, obj[i]);
if (value === false) {
break;
}
}
} else {
for (i in obj) {
value = callback.call(obj[i], i, obj[i]);
if (value === false) {
break;
}
}
}
}
return obj;
},
trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
function (text) {
return text == null ?
"" :
core_trim.call(text);
} :
function (text) {
return text == null ?
"" :
(text + "").replace(rtrim, "");
},
makeArray: function (arr, results) {
var ret = results || [];
if (arr != null) {
if (isArraylike(Object(arr))) {
jQuery.merge(ret,
typeof arr === "string" ?
[arr] : arr
);
} else {
core_push.call(ret, arr);
}
}
return ret;
},
inArray: function (elem, arr, i) {
var len;
if (arr) {
if (core_indexOf) {
return core_indexOf.call(arr, elem, i);
}
len = arr.length;
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
for (; i < len; i++) {
if (i in arr && arr[i] === elem) {
return i;
}
}
}
return -1;
},
merge: function (first, second) {
var l = second.length,
i = first.length,
j = 0;
if (typeof l === "number") {
for (; j < l; j++) {
first[i++] = second[j];
}
} else {
while (second[j] !== undefined) {
first[i++] = second[j++];
}
}
first.length = i;
return first;
},
grep: function (elems, callback, inv) {
var retVal,
ret = [],
i = 0,
length = elems.length;
inv = !!inv;
for (; i < length; i++) {
retVal = !!callback(elems[i], i);
if (inv !== retVal) {
ret.push(elems[i]);
}
}
return ret;
},
map: function (elems, callback, arg) {
var value,
i = 0,
length = elems.length,
isArray = isArraylike(elems),
ret = [];
if (isArray) {
for (; i < length; i++) {
value = callback(elems[i], i, arg);
if (value != null) {
ret[ret.length] = value;
}
}
} else {
for (i in elems) {
value = callback(elems[i], i, arg);
if (value != null) {
ret[ret.length] = value;
}
}
}
return core_concat.apply([], ret);
},
guid: 1,
proxy: function (fn, context) {
var args, proxy, tmp;
if (typeof context === "string") {
tmp = fn[context];
context = fn;
fn = tmp;
}
if (!jQuery.isFunction(fn)) {
return undefined;
}
args = core_slice.call(arguments, 2);
proxy = function () {
return fn.apply(context || this, args.concat(core_slice.call(arguments)));
};
proxy.guid = fn.guid = fn.guid || jQuery.guid++;
return proxy;
},
access: function (elems, fn, key, value, chainable, emptyGet, raw) {
var i = 0,
length = elems.length,
bulk = key == null;
if (jQuery.type(key) === "object") {
chainable = true;
for (i in key) {
jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
}
} else if (value !== undefined) {
chainable = true;
if (!jQuery.isFunction(value)) {
raw = true;
}
if (bulk) {
if (raw) {
fn.call(elems, value);
fn = null;
} else {
bulk = fn;
fn = function (elem, key, value) {
return bulk.call(jQuery(elem), value);
};
}
}
if (fn) {
for (; i < length; i++) {
fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
}
}
}
return chainable ?
elems :
bulk ?
fn.call(elems) :
length ? fn(elems[0], key) : emptyGet;
},
now: function () {
return (new Date()).getTime();
},
swap: function (elem, options, callback, args) {
var ret, name,
old = {};
for (name in options) {
old[name] = elem.style[name];
elem.style[name] = options[name];
}
ret = callback.apply(elem, args || []);
for (name in options) {
elem.style[name] = old[name];
}
return ret;
}
});
jQuery.ready.promise = function (obj) {
if (!readyList) {
readyList = jQuery.Deferred();
if (document.readyState === "complete") {
setTimeout(jQuery.ready);
} else if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", completed, false);
window.addEventListener("load", completed, false);
} else {
document.attachEvent("onreadystatechange", completed);
window.attachEvent("onload", completed);
var top = false;
try {
top = window.frameElement == null && document.documentElement;
} catch (e) { }
if (top && top.doScroll) {
(function doScrollCheck() {
if (!jQuery.isReady) {
try {
top.doScroll("left");
} catch (e) {
return setTimeout(doScrollCheck, 50);
}
detach();
jQuery.ready();
}
})();
}
}
}
return readyList.promise(obj);
};
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
class2type["[object " + name + "]"] = name.toLowerCase();
});
function isArraylike(obj) {
var length = obj.length,
type = jQuery.type(obj);
if (jQuery.isWindow(obj)) {
return false;
}
if (obj.nodeType === 1 && length) {
return true;
}
return type === "array" || type !== "function" &&
(length === 0 ||
typeof length === "number" && length > 0 && (length - 1) in obj);
}
rootjQuery = jQuery(document);
/*!
* Sizzle CSS Selector Engine v1.10.2
* http://sizzlejs.com/
*
* Copyright 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2013-07-03
*/
(function (window, undefined) {
var i,
support,
cachedruns,
Expr,
getText,
isXML,
compile,
outermostContext,
sortInput,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando = "sizzle" + -(new Date()),
preferredDoc = window.document,
dirruns = 0,
done = 0,
classCache = createCache(),
tokenCache = createCache(),
compilerCache = createCache(),
hasDuplicate = false,
sortOrder = function (a, b) {
if (a === b) {
hasDuplicate = true;
return 0;
}
return 0;
},
strundefined = typeof undefined,
MAX_NEGATIVE = 1 << 31,
hasOwn = ({}).hasOwnProperty,
arr = [],
pop = arr.pop,
push_native = arr.push,
push = arr.push,
slice = arr.slice,
indexOf = arr.indexOf || function (elem) {
var i = 0,
len = this.length;
for (; i < len; i++) {
if (this[i] === elem) {
return i;
}
}
return -1;
},
booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace = "[\\x20\\t\\r\\n\\f]",
characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
identifier = characterEncoding.replace("w", "w#"),
attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
rsibling = new RegExp(whitespace + "*[+~]"),
rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
rpseudo = new RegExp(pseudos),
ridentifier = new RegExp("^" + identifier + "$"),
matchExpr = {
"ID": new RegExp("^#(" + characterEncoding + ")"),
"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
"ATTR": new RegExp("^" + attributes),
"PSEUDO": new RegExp("^" + pseudos),
"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
"*(\\d+)|))" + whitespace + "*\\)|)", "i"),
"bool": new RegExp("^(?:" + booleans + ")$", "i"),
"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
},
rnative = /^[^{]+\{\s*\[native \w/,
rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rinputs = /^(?:input|select|textarea|button)$/i,
rheader = /^h\d$/i,
rescape = /'|\\/g,
runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
funescape = function (_, escaped, escapedWhitespace) {
var high = "0x" + escaped - 0x10000;
return high !== high || escapedWhitespace ?
escaped :
high < 0 ?
String.fromCharCode(high + 0x10000) :
String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
};
try {
push.apply(
(arr = slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
} catch (e) {
push = { apply: arr.length ?
function (target, els) {
push_native.apply(target, slice.call(els));
} :
function (target, els) {
var j = target.length,
i = 0;
while ((target[j++] = els[i++])) { }
target.length = j - 1;
}
};
}
function Sizzle(selector, context, results, seed) {
var match, elem, m, nodeType,
i, groups, old, nid, newContext, newSelector;
if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
setDocument(context);
}
context = context || document;
results = results || [];
if (!selector || typeof selector !== "string") {
return results;
}
if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
return [];
}
if (documentIsHTML && !seed) {
if ((match = rquickExpr.exec(selector))) {
if ((m = match[1])) {
if (nodeType === 9) {
elem = context.getElementById(m);
if (elem && elem.parentNode) {
if (elem.id === m) {
results.push(elem);
return results;
}
} else {
return results;
}
} else {
if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) &&
contains(context, elem) && elem.id === m) {
results.push(elem);
return results;
}
}
} else if (match[2]) {
push.apply(results, context.getElementsByTagName(selector));
return results;
} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
push.apply(results, context.getElementsByClassName(m));
return results;
}
}
if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
nid = old = expando;
newContext = context;
newSelector = nodeType === 9 && selector;
if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
groups = tokenize(selector);
if ((old = context.getAttribute("id"))) {
nid = old.replace(rescape, "\\$&");
} else {
context.setAttribute("id", nid);
}
nid = "[id='" + nid + "'] ";
i = groups.length;
while (i--) {
groups[i] = nid + toSelector(groups[i]);
}
newContext = rsibling.test(selector) && context.parentNode || context;
newSelector = groups.join(",");
}
if (newSelector) {
try {
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
} catch (qsaError) {
} finally {
if (!old) {
context.removeAttribute("id");
}
}
}
}
}
return select(selector.replace(rtrim, "$1"), context, results, seed);
}
function createCache() {
var keys = [];
function cache(key, value) {
if (keys.push(key += " ") > Expr.cacheLength) {
delete cache[keys.shift()];
}
return (cache[key] = value);
}
return cache;
}
function markFunction(fn) {
fn[expando] = true;
return fn;
}
function assert(fn) {
var div = document.createElement("div");
try {
return !!fn(div);
} catch (e) {
return false;
} finally {
if (div.parentNode) {
div.parentNode.removeChild(div);
}
div = null;
}
}
function addHandle(attrs, handler) {
var arr = attrs.split("|"),
i = attrs.length;
while (i--) {
Expr.attrHandle[arr[i]] = handler;
}
}
function siblingCheck(a, b) {
var cur = b && a,
diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
(~b.sourceIndex || MAX_NEGATIVE) -
(~a.sourceIndex || MAX_NEGATIVE);
if (diff) {
return diff;
}
if (cur) {
while ((cur = cur.nextSibling)) {
if (cur === b) {
return -1;
}
}
}
return a ? 1 : -1;
}
function createInputPseudo(type) {
return function (elem) {
var name = elem.nodeName.toLowerCase();
return name === "input" && elem.type === type;
};
}
function createButtonPseudo(type) {
return function (elem) {
var name = elem.nodeName.toLowerCase();
return (name === "input" || name === "button") && elem.type === type;
};
}
function createPositionalPseudo(fn) {
return markFunction(function (argument) {
argument = +argument;
return markFunction(function (seed, matches) {
var j,
matchIndexes = fn([], seed.length, argument),
i = matchIndexes.length;
while (i--) {
if (seed[(j = matchIndexes[i])]) {
seed[j] = !(matches[j] = seed[j]);
}
}
});
});
}
isXML = Sizzle.isXML = function (elem) {
var documentElement = elem && (elem.ownerDocument || elem).documentElement;
return documentElement ? documentElement.nodeName !== "HTML" : false;
};
support = Sizzle.support = {};
setDocument = Sizzle.setDocument = function (node) {
var doc = node ? node.ownerDocument || node : preferredDoc,
parent = doc.defaultView;
if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
return document;
}
document = doc;
docElem = doc.documentElement;
documentIsHTML = !isXML(doc);
if (parent && parent.attachEvent && parent !== parent.top) {
parent.attachEvent("onbeforeunload", function () {
setDocument();
});
}
support.attributes = assert(function (div) {
div.className = "i";
return !div.getAttribute("className");
});
support.getElementsByTagName = assert(function (div) {
div.appendChild(doc.createComment(""));
return !div.getElementsByTagName("*").length;
});
support.getElementsByClassName = assert(function (div) {
div.innerHTML = "<div class='a'></div><div class='a i'></div>";
div.firstChild.className = "i";
return div.getElementsByClassName("i").length === 2;
});
support.getById = assert(function (div) {
docElem.appendChild(div).id = expando;
return !doc.getElementsByName || !doc.getElementsByName(expando).length;
});
if (support.getById) {
Expr.find["ID"] = function (id, context) {
if (typeof context.getElementById !== strundefined && documentIsHTML) {
var m = context.getElementById(id);
return m && m.parentNode ? [m] : [];
}
};
Expr.filter["ID"] = function (id) {
var attrId = id.replace(runescape, funescape);
return function (elem) {
return elem.getAttribute("id") === attrId;
};
};
} else {
delete Expr.find["ID"];
Expr.filter["ID"] = function (id) {
var attrId = id.replace(runescape, funescape);
return function (elem) {
var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
return node && node.value === attrId;
};
};
}
Expr.find["TAG"] = support.getElementsByTagName ?
function (tag, context) {
if (typeof context.getElementsByTagName !== strundefined) {
return context.getElementsByTagName(tag);
}
} :
function (tag, context) {
var elem,
tmp = [],
i = 0,
results = context.getElementsByTagName(tag);
if (tag === "*") {
while ((elem = results[i++])) {
if (elem.nodeType === 1) {
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
return context.getElementsByClassName(className);
}
};
rbuggyMatches = [];
rbuggyQSA = [];
if ((support.qsa = rnative.test(doc.querySelectorAll))) {
assert(function (div) {
div.innerHTML = "<select><option selected=''></option></select>";
if (!div.querySelectorAll("[selected]").length) {
rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
}
if (!div.querySelectorAll(":checked").length) {
rbuggyQSA.push(":checked");
}
});
assert(function (div) {
var input = doc.createElement("input");
input.setAttribute("type", "hidden");
div.appendChild(input).setAttribute("t", "");
if (div.querySelectorAll("[t^='']").length) {
rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
}
if (!div.querySelectorAll(":enabled").length) {
rbuggyQSA.push(":enabled", ":disabled");
}
div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if ((support.matchesSelector = rnative.test((matches = docElem.webkitMatchesSelector ||
docElem.mozMatchesSelector ||
docElem.oMatchesSelector ||
docElem.msMatchesSelector)))) {
assert(function (div) {
support.disconnectedMatch = matches.call(div, "div");
matches.call(div, "[s!='']:x");
rbuggyMatches.push("!=", pseudos);
});
}
rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ?
function (a, b) {
var adown = a.nodeType === 9 ? a.documentElement : a,
bup = b && b.parentNode;
return a === bup || !!(bup && bup.nodeType === 1 && (
adown.contains ?
adown.contains(bup) :
a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
));
} :
function (a, b) {
if (b) {
while ((b = b.parentNode)) {
if (b === a) {
return true;
}
}
}
return false;
};
sortOrder = docElem.compareDocumentPosition ?
function (a, b) {
if (a === b) {
hasDuplicate = true;
return 0;
}
var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
if (compare) {
if (compare & 1 ||
(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
if (a === doc || contains(preferredDoc, a)) {
return -1;
}
if (b === doc || contains(preferredDoc, b)) {
return 1;
}
return sortInput ?
(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
0;
}
return compare & 4 ? -1 : 1;
}
return a.compareDocumentPosition ? -1 : 1;
} :
function (a, b) {
var cur,
i = 0,
aup = a.parentNode,
bup = b.parentNode,
ap = [a],
bp = [b];
if (a === b) {
hasDuplicate = true;
return 0;
} else if (!aup || !bup) {
return a === doc ? -1 :
b === doc ? 1 :
aup ? -1 :
bup ? 1 :
sortInput ?
(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
0;
} else if (aup === bup) {
return siblingCheck(a, b);
}
cur = a;
while ((cur = cur.parentNode)) {
ap.unshift(cur);
}
cur = b;
while ((cur = cur.parentNode)) {
bp.unshift(cur);
}
while (ap[i] === bp[i]) {
i++;
}
return i ?
siblingCheck(ap[i], bp[i]) :
ap[i] === preferredDoc ? -1 :
bp[i] === preferredDoc ? 1 :
0;
};
return doc;
};
Sizzle.matches = function (expr, elements) {
return Sizzle(expr, null, null, elements);
};
Sizzle.matchesSelector = function (elem, expr) {
if ((elem.ownerDocument || elem) !== document) {
setDocument(elem);
}
expr = expr.replace(rattributeQuotes, "='$1']");
if (support.matchesSelector && documentIsHTML &&
(!rbuggyMatches || !rbuggyMatches.test(expr)) &&
(!rbuggyQSA || !rbuggyQSA.test(expr))) {
try {
var ret = matches.call(elem, expr);
if (ret || support.disconnectedMatch ||
elem.document && elem.document.nodeType !== 11) {
return ret;
}
} catch (e) { }
}
return Sizzle(expr, document, null, [elem]).length > 0;
};
Sizzle.contains = function (context, elem) {
if ((context.ownerDocument || context) !== document) {
setDocument(context);
}
return contains(context, elem);
};
Sizzle.attr = function (elem, name) {
if ((elem.ownerDocument || elem) !== document) {
setDocument(elem);
}
var fn = Expr.attrHandle[name.toLowerCase()],
val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
fn(elem, name, !documentIsHTML) :
undefined;
return val === undefined ?
support.attributes || !documentIsHTML ?
elem.getAttribute(name) :
(val = elem.getAttributeNode(name)) && val.specified ?
val.value :
null :
val;
};
Sizzle.error = function (msg) {
throw new Error("Syntax error, unrecognized expression: " + msg);
};
Sizzle.uniqueSort = function (results) {
var elem,
duplicates = [],
j = 0,
i = 0;
hasDuplicate = !support.detectDuplicates;
sortInput = !support.sortStable && results.slice(0);
results.sort(sortOrder);
if (hasDuplicate) {
while ((elem = results[i++])) {
if (elem === results[i]) {
j = duplicates.push(i);
}
}
while (j--) {
results.splice(duplicates[j], 1);
}
}
return results;
};
getText = Sizzle.getText = function (elem) {
var node,
ret = "",
i = 0,
nodeType = elem.nodeType;
if (!nodeType) {
for (; (node = elem[i]); i++) {
ret += getText(node);
}
} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
if (typeof elem.textContent === "string") {
return elem.textContent;
} else {
for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
ret += getText(elem);
}
}
} else if (nodeType === 3 || nodeType === 4) {
return elem.nodeValue;
}
return ret;
};
Expr = Sizzle.selectors = {
cacheLength: 50,
createPseudo: markFunction,
match: matchExpr,
attrHandle: {},
find: {},
relative: {
">": { dir: "parentNode", first: true },
" ": { dir: "parentNode" },
"+": { dir: "previousSibling", first: true },
"~": { dir: "previousSibling" }
},
preFilter: {
"ATTR": function (match) {
match[1] = match[1].replace(runescape, funescape);
match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
if (match[2] === "~=") {
match[3] = " " + match[3] + " ";
}
return match.slice(0, 4);
},
"CHILD": function (match) {
match[1] = match[1].toLowerCase();
if (match[1].slice(0, 3) === "nth") {
if (!match[3]) {
Sizzle.error(match[0]);
}
match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
match[5] = +((match[7] + match[8]) || match[3] === "odd");
} else if (match[3]) {
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO": function (match) {
var excess,
unquoted = !match[5] && match[2];
if (matchExpr["CHILD"].test(match[0])) {
return null;
}
if (match[3] && match[4] !== undefined) {
match[2] = match[4];
} else if (unquoted && rpseudo.test(unquoted) &&
(excess = tokenize(unquoted, true)) &&
(excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
match[0] = match[0].slice(0, excess);
match[2] = unquoted.slice(0, excess);
}
return match.slice(0, 3);
}
},
filter: {
"TAG": function (nodeNameSelector) {
var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
return nodeNameSelector === "*" ?
function () { return true; } :
function (elem) {
return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
};
},
"CLASS": function (className) {
var pattern = classCache[className + " "];
return pattern ||
(pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
classCache(className, function (elem) {
return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
});
},
"ATTR": function (name, operator, check) {
return function (elem) {
var result = Sizzle.attr(elem, name);
if (result == null) {
return operator === "!=";
}
if (!operator) {
return true;
}
result += "";
return operator === "=" ? result === check :
operator === "!=" ? result !== check :
operator === "^=" ? check && result.indexOf(check) === 0 :
operator === "*=" ? check && result.indexOf(check) > -1 :
operator === "$=" ? check && result.slice(-check.length) === check :
operator === "~=" ? (" " + result + " ").indexOf(check) > -1 :
operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
false;
};
},
"CHILD": function (type, what, argument, first, last) {
var simple = type.slice(0, 3) !== "nth",
forward = type.slice(-4) !== "last",
ofType = what === "of-type";
return first === 1 && last === 0 ?
function (elem) {
return !!elem.parentNode;
} :
function (elem, context, xml) {
var cache, outerCache, node, diff, nodeIndex, start,
dir = simple !== forward ? "nextSibling" : "previousSibling",
parent = elem.parentNode,
name = ofType && elem.nodeName.toLowerCase(),
useCache = !xml && !ofType;
if (parent) {
if (simple) {
while (dir) {
node = elem;
while ((node = node[dir])) {
if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
return false;
}
}
start = dir = type === "only" && !start && "nextSibling";
}
return true;
}
start = [forward ? parent.firstChild : parent.lastChild];
if (forward && useCache) {
outerCache = parent[expando] || (parent[expando] = {});
cache = outerCache[type] || [];
nodeIndex = cache[0] === dirruns && cache[1];
diff = cache[0] === dirruns && cache[2];
node = nodeIndex && parent.childNodes[nodeIndex];
while ((node = ++nodeIndex && node && node[dir] ||
(diff = nodeIndex = 0) || start.pop())) {
if (node.nodeType === 1 && ++diff && node === elem) {
outerCache[type] = [dirruns, nodeIndex, diff];
break;
}
}
} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
diff = cache[1];
} else {
while ((node = ++nodeIndex && node && node[dir] ||
(diff = nodeIndex = 0) || start.pop())) {
if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
if (useCache) {
(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
}
if (node === elem) {
break;
}
}
}
}
diff -= last;
return diff === first || (diff % first === 0 && diff / first >= 0);
}
};
},
"PSEUDO": function (pseudo, argument) {
var args,
fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
Sizzle.error("unsupported pseudo: " + pseudo);
if (fn[expando]) {
return fn(argument);
}
if (fn.length > 1) {
args = [pseudo, pseudo, "", argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
markFunction(function (seed, matches) {
var idx,
matched = fn(seed, argument),
i = matched.length;
while (i--) {
idx = indexOf.call(seed, matched[i]);
seed[idx] = !(matches[idx] = matched[i]);
}
}) :
function (elem) {
return fn(elem, 0, args);
};
}
return fn;
}
},
pseudos: {
"not": markFunction(function (selector) {
var input = [],
results = [],
matcher = compile(selector.replace(rtrim, "$1"));
return matcher[expando] ?
markFunction(function (seed, matches, context, xml) {
var elem,
unmatched = matcher(seed, null, xml, []),
i = seed.length;
while (i--) {
if ((elem = unmatched[i])) {
seed[i] = !(matches[i] = elem);
}
}
}) :
function (elem, context, xml) {
input[0] = elem;
matcher(input, null, xml, results);
return !results.pop();
};
}),
"has": markFunction(function (selector) {
return function (elem) {
return Sizzle(selector, elem).length > 0;
};
}),
"contains": markFunction(function (text) {
return function (elem) {
return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
};
}),
"lang": markFunction(function (lang) {
if (!ridentifier.test(lang || "")) {
Sizzle.error("unsupported lang: " + lang);
}
lang = lang.replace(runescape, funescape).toLowerCase();
return function (elem) {
var elemLang;
do {
if ((elemLang = documentIsHTML ?
elem.lang :
elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
elemLang = elemLang.toLowerCase();
return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
}
} while ((elem = elem.parentNode) && elem.nodeType === 1);
return false;
};
}),
"target": function (elem) {
var hash = window.location && window.location.hash;
return hash && hash.slice(1) === elem.id;
},
"root": function (elem) {
return elem === docElem;
},
"focus": function (elem) {
return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
},
"enabled": function (elem) {
return elem.disabled === false;
},
"disabled": function (elem) {
return elem.disabled === true;
},
"checked": function (elem) {
var nodeName = elem.nodeName.toLowerCase();
return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
},
"selected": function (elem) {
if (elem.parentNode) {
elem.parentNode.selectedIndex;
}
return elem.selected === true;
},
"empty": function (elem) {
for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
return false;
}
}
return true;
},
"parent": function (elem) {
return !Expr.pseudos["empty"](elem);
},
"header": function (elem) {
return rheader.test(elem.nodeName);
},
"input": function (elem) {
return rinputs.test(elem.nodeName);
},
"button": function (elem) {
var name = elem.nodeName.toLowerCase();
return name === "input" && elem.type === "button" || name === "button";
},
"text": function (elem) {
var attr;
return elem.nodeName.toLowerCase() === "input" &&
elem.type === "text" &&
((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
},
"first": createPositionalPseudo(function () {
return [0];
}),
"last": createPositionalPseudo(function (matchIndexes, length) {
return [length - 1];
}),
"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
return [argument < 0 ? argument + length : argument];
}),
"even": createPositionalPseudo(function (matchIndexes, length) {
var i = 0;
for (; i < length; i += 2) {
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd": createPositionalPseudo(function (matchIndexes, length) {
var i = 1;
for (; i < length; i += 2) {
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
var i = argument < 0 ? argument + length : argument;
for (; --i >= 0; ) {
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
var i = argument < 0 ? argument + length : argument;
for (; ++i < length; ) {
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"] = Expr.pseudos["eq"];
for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
Expr.pseudos[i] = createInputPseudo(i);
}
for (i in { submit: true, reset: true }) {
Expr.pseudos[i] = createButtonPseudo(i);
}
function setFilters() { }
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();
function tokenize(selector, parseOnly) {
var matched, match, tokens, type,
soFar, groups, preFilters,
cached = tokenCache[selector + " "];
if (cached) {
return parseOnly ? 0 : cached.slice(0);
}
soFar = selector;
groups = [];
preFilters = Expr.preFilter;
while (soFar) {
if (!matched || (match = rcomma.exec(soFar))) {
if (match) {
soFar = soFar.slice(match[0].length) || soFar;
}
groups.push(tokens = []);
}
matched = false;
if ((match = rcombinators.exec(soFar))) {
matched = match.shift();
tokens.push({
value: matched,
type: match[0].replace(rtrim, " ")
});
soFar = soFar.slice(matched.length);
}
for (type in Expr.filter) {
if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
(match = preFilters[type](match)))) {
matched = match.shift();
tokens.push({
value: matched,
type: type,
matches: match
});
soFar = soFar.slice(matched.length);
}
}
if (!matched) {
break;
}
}
return parseOnly ?
soFar.length :
soFar ?
Sizzle.error(selector) :
tokenCache(selector, groups).slice(0);
}
function toSelector(tokens) {
var i = 0,
len = tokens.length,
selector = "";
for (; i < len; i++) {
selector += tokens[i].value;
}
return selector;
}
function addCombinator(matcher, combinator, base) {
var dir = combinator.dir,
checkNonElements = base && dir === "parentNode",
doneName = done++;
return combinator.first ?
function (elem, context, xml) {
while ((elem = elem[dir])) {
if (elem.nodeType === 1 || checkNonElements) {
return matcher(elem, context, xml);
}
}
} :
function (elem, context, xml) {
var data, cache, outerCache,
dirkey = dirruns + " " + doneName;
if (xml) {
while ((elem = elem[dir])) {
if (elem.nodeType === 1 || checkNonElements) {
if (matcher(elem, context, xml)) {
return true;
}
}
}
} else {
while ((elem = elem[dir])) {
if (elem.nodeType === 1 || checkNonElements) {
outerCache = elem[expando] || (elem[expando] = {});
if ((cache = outerCache[dir]) && cache[0] === dirkey) {
if ((data = cache[1]) === true || data === cachedruns) {
return data === true;
}
} else {
cache = outerCache[dir] = [dirkey];
cache[1] = matcher(elem, context, xml) || cachedruns;
if (cache[1] === true) {
return true;
}
}
}
}
}
};
}
function elementMatcher(matchers) {
return matchers.length > 1 ?
function (elem, context, xml) {
var i = matchers.length;
while (i--) {
if (!matchers[i](elem, context, xml)) {
return false;
}
}
return true;
} :
matchers[0];
}
function condense(unmatched, map, filter, context, xml) {
var elem,
newUnmatched = [],
i = 0,
len = unmatched.length,
mapped = map != null;
for (; i < len; i++) {
if ((elem = unmatched[i])) {
if (!filter || filter(elem, context, xml)) {
newUnmatched.push(elem);
if (mapped) {
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
if (postFilter && !postFilter[expando]) {
postFilter = setMatcher(postFilter);
}
if (postFinder && !postFinder[expando]) {
postFinder = setMatcher(postFinder, postSelector);
}
return markFunction(function (seed, results, context, xml) {
var temp, i, elem,
preMap = [],
postMap = [],
preexisting = results.length,
elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
matcherIn = preFilter && (seed || !selector) ?
condense(elems, preMap, preFilter, context, xml) :
elems,
matcherOut = matcher ?
postFinder || (seed ? preFilter : preexisting || postFilter) ?
[] :
results :
matcherIn;
if (matcher) {
matcher(matcherIn, matcherOut, context, xml);
}
if (postFilter) {
temp = condense(matcherOut, postMap);
postFilter(temp, [], context, xml);
i = temp.length;
while (i--) {
if ((elem = temp[i])) {
matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
}
}
}
if (seed) {
if (postFinder || preFilter) {
if (postFinder) {
temp = [];
i = matcherOut.length;
while (i--) {
if ((elem = matcherOut[i])) {
temp.push((matcherIn[i] = elem));
}
}
postFinder(null, (matcherOut = []), temp, xml);
}
i = matcherOut.length;
while (i--) {
if ((elem = matcherOut[i]) &&
(temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
seed[temp] = !(results[temp] = elem);
}
}
}
} else {
matcherOut = condense(
matcherOut === results ?
matcherOut.splice(preexisting, matcherOut.length) :
matcherOut
);
if (postFinder) {
postFinder(null, results, matcherOut, xml);
} else {
push.apply(results, matcherOut);
}
}
});
}
function matcherFromTokens(tokens) {
var checkContext, matcher, j,
len = tokens.length,
leadingRelative = Expr.relative[tokens[0].type],
implicitRelative = leadingRelative || Expr.relative[" "],
i = leadingRelative ? 1 : 0,
matchContext = addCombinator(function (elem) {
return elem === checkContext;
}, implicitRelative, true),
matchAnyContext = addCombinator(function (elem) {
return indexOf.call(checkContext, elem) > -1;
}, implicitRelative, true),
matchers = [function (elem, context, xml) {
return (!leadingRelative && (xml || context !== outermostContext)) || (
(checkContext = context).nodeType ?
matchContext(elem, context, xml) :
matchAnyContext(elem, context, xml));
} ];
for (; i < len; i++) {
if ((matcher = Expr.relative[tokens[i].type])) {
matchers = [addCombinator(elementMatcher(matchers), matcher)];
} else {
matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
if (matcher[expando]) {
j = ++i;
for (; j < len; j++) {
if (Expr.relative[tokens[j].type]) {
break;
}
}
return setMatcher(
i > 1 && elementMatcher(matchers),
i > 1 && toSelector(
tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
).replace(rtrim, "$1"),
matcher,
i < j && matcherFromTokens(tokens.slice(i, j)),
j < len && matcherFromTokens((tokens = tokens.slice(j))),
j < len && toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers, setMatchers) {
var matcherCachedRuns = 0,
bySet = setMatchers.length > 0,
byElement = elementMatchers.length > 0,
superMatcher = function (seed, context, xml, results, expandContext) {
var elem, j, matcher,
setMatched = [],
matchedCount = 0,
i = "0",
unmatched = seed && [],
outermost = expandContext != null,
contextBackup = outermostContext,
elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
if (outermost) {
outermostContext = context !== document && context;
cachedruns = matcherCachedRuns;
}
for (; (elem = elems[i]) != null; i++) {
if (byElement && elem) {
j = 0;
while ((matcher = elementMatchers[j++])) {
if (matcher(elem, context, xml)) {
results.push(elem);
break;
}
}
if (outermost) {
dirruns = dirrunsUnique;
cachedruns = ++matcherCachedRuns;
}
}
if (bySet) {
if ((elem = !matcher && elem)) {
matchedCount--;
}
if (seed) {
unmatched.push(elem);
}
}
}
matchedCount += i;
if (bySet && i !== matchedCount) {
j = 0;
while ((matcher = setMatchers[j++])) {
matcher(unmatched, setMatched, context, xml);
}
if (seed) {
if (matchedCount > 0) {
while (i--) {
if (!(unmatched[i] || setMatched[i])) {
setMatched[i] = pop.call(results);
}
}
}
setMatched = condense(setMatched);
}
push.apply(results, setMatched);
if (outermost && !seed && setMatched.length > 0 &&
(matchedCount + setMatchers.length) > 1) {
Sizzle.uniqueSort(results);
}
}
if (outermost) {
dirruns = dirrunsUnique;
outermostContext = contextBackup;
}
return unmatched;
};
return bySet ?
markFunction(superMatcher) :
superMatcher;
}
compile = Sizzle.compile = function (selector, group ) {
var i,
setMatchers = [],
elementMatchers = [],
cached = compilerCache[selector + " "];
if (!cached) {
if (!group) {
group = tokenize(selector);
}
i = group.length;
while (i--) {
cached = matcherFromTokens(group[i]);
if (cached[expando]) {
setMatchers.push(cached);
} else {
elementMatchers.push(cached);
}
}
cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
}
return cached;
};
function multipleContexts(selector, contexts, results) {
var i = 0,
len = contexts.length;
for (; i < len; i++) {
Sizzle(selector, contexts[i], results);
}
return results;
}
function select(selector, context, results, seed) {
var i, tokens, token, type, find,
match = tokenize(selector);
if (!seed) {
if (match.length === 1) {
tokens = match[0] = match[0].slice(0);
if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
support.getById && context.nodeType === 9 && documentIsHTML &&
Expr.relative[tokens[1].type]) {
context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
if (!context) {
return results;
}
selector = selector.slice(tokens.shift().value.length);
}
i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
while (i--) {
token = tokens[i];
if (Expr.relative[(type = token.type)]) {
break;
}
if ((find = Expr.find[type])) {
if ((seed = find(
token.matches[0].replace(runescape, funescape),
rsibling.test(tokens[0].type) && context.parentNode || context
))) {
tokens.splice(i, 1);
selector = seed.length && toSelector(tokens);
if (!selector) {
push.apply(results, seed);
return results;
}
break;
}
}
}
}
}
compile(selector, match)(
seed,
context,
!documentIsHTML,
results,
rsibling.test(selector)
);
return results;
}
support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
support.detectDuplicates = hasDuplicate;
setDocument();
support.sortDetached = assert(function (div1) {
return div1.compareDocumentPosition(document.createElement("div")) & 1;
});
if (!assert(function (div) {
div.innerHTML = "<a href='#'></a>";
return div.firstChild.getAttribute("href") === "#";
})) {
addHandle("type|href|height|width", function (elem, name, isXML) {
if (!isXML) {
return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
}
});
}
if (!support.attributes || !assert(function (div) {
div.innerHTML = "<input/>";
div.firstChild.setAttribute("value", "");
return div.firstChild.getAttribute("value") === "";
})) {
addHandle("value", function (elem, name, isXML) {
if (!isXML && elem.nodeName.toLowerCase() === "input") {
return elem.defaultValue;
}
});
}
if (!assert(function (div) {
return div.getAttribute("disabled") == null;
})) {
addHandle(booleans, function (elem, name, isXML) {
var val;
if (!isXML) {
return (val = elem.getAttributeNode(name)) && val.specified ?
val.value :
elem[name] === true ? name.toLowerCase() : null;
}
});
}
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
})(window);
var optionsCache = {};
function createOptions(options) {
var object = optionsCache[options] = {};
jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
object[flag] = true;
});
return object;
}
jQuery.Callbacks = function (options) {
options = typeof options === "string" ?
(optionsCache[options] || createOptions(options)) :
jQuery.extend({}, options);
var
firing,
memory,
fired,
firingLength,
firingIndex,
firingStart,
list = [],
stack = !options.once && [],
fire = function (data) {
memory = options.memory && data;
fired = true;
firingIndex = firingStart || 0;
firingStart = 0;
firingLength = list.length;
firing = true;
for (; list && firingIndex < firingLength; firingIndex++) {
if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
memory = false;
break;
}
}
firing = false;
if (list) {
if (stack) {
if (stack.length) {
fire(stack.shift());
}
} else if (memory) {
list = [];
} else {
self.disable();
}
}
},
self = {
add: function () {
if (list) {
var start = list.length;
(function add(args) {
jQuery.each(args, function (_, arg) {
var type = jQuery.type(arg);
if (type === "function") {
if (!options.unique || !self.has(arg)) {
list.push(arg);
}
} else if (arg && arg.length && type !== "string") {
add(arg);
}
});
})(arguments);
if (firing) {
firingLength = list.length;
} else if (memory) {
firingStart = start;
fire(memory);
}
}
return this;
},
remove: function () {
if (list) {
jQuery.each(arguments, function (_, arg) {
var index;
while ((index = jQuery.inArray(arg, list, index)) > -1) {
list.splice(index, 1);
if (firing) {
if (index <= firingLength) {
firingLength--;
}
if (index <= firingIndex) {
firingIndex--;
}
}
}
});
}
return this;
},
has: function (fn) {
return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
},
empty: function () {
list = [];
firingLength = 0;
return this;
},
disable: function () {
list = stack = memory = undefined;
return this;
},
disabled: function () {
return !list;
},
lock: function () {
stack = undefined;
if (!memory) {
self.disable();
}
return this;
},
locked: function () {
return !stack;
},
fireWith: function (context, args) {
if (list && (!fired || stack)) {
args = args || [];
args = [context, args.slice ? args.slice() : args];
if (firing) {
stack.push(args);
} else {
fire(args);
}
}
return this;
},
fire: function () {
self.fireWith(this, arguments);
return this;
},
fired: function () {
return !!fired;
}
};
return self;
};
jQuery.extend({
Deferred: function (func) {
var tuples = [
["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
["notify", "progress", jQuery.Callbacks("memory")]
],
state = "pending",
promise = {
state: function () {
return state;
},
always: function () {
deferred.done(arguments).fail(arguments);
return this;
},
then: function ( ) {
var fns = arguments;
return jQuery.Deferred(function (newDefer) {
jQuery.each(tuples, function (i, tuple) {
var action = tuple[0],
fn = jQuery.isFunction(fns[i]) && fns[i];
deferred[tuple[1]](function () {
var returned = fn && fn.apply(this, arguments);
if (returned && jQuery.isFunction(returned.promise)) {
returned.promise()
.done(newDefer.resolve)
.fail(newDefer.reject)
.progress(newDefer.notify);
} else {
newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
}
});
});
fns = null;
}).promise();
},
promise: function (obj) {
return obj != null ? jQuery.extend(obj, promise) : promise;
}
},
deferred = {};
promise.pipe = promise.then;
jQuery.each(tuples, function (i, tuple) {
var list = tuple[2],
stateString = tuple[3];
promise[tuple[1]] = list.add;
if (stateString) {
list.add(function () {
state = stateString;
}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
}
deferred[tuple[0]] = function () {
deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
return this;
};
deferred[tuple[0] + "With"] = list.fireWith;
});
promise.promise(deferred);
if (func) {
func.call(deferred, deferred);
}
return deferred;
},
when: function (subordinate ) {
var i = 0,
resolveValues = core_slice.call(arguments),
length = resolveValues.length,
remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
updateFunc = function (i, contexts, values) {
return function (value) {
contexts[i] = this;
values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
if (values === progressValues) {
deferred.notifyWith(contexts, values);
} else if (!(--remaining)) {
deferred.resolveWith(contexts, values);
}
};
},
progressValues, progressContexts, resolveContexts;
if (length > 1) {
progressValues = new Array(length);
progressContexts = new Array(length);
resolveContexts = new Array(length);
for (; i < length; i++) {
if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
resolveValues[i].promise()
.done(updateFunc(i, resolveContexts, resolveValues))
.fail(deferred.reject)
.progress(updateFunc(i, progressContexts, progressValues));
} else {
--remaining;
}
}
}
if (!remaining) {
deferred.resolveWith(resolveContexts, resolveValues);
}
return deferred.promise();
}
});
jQuery.support = (function (support) {
var all, a, input, select, fragment, opt, eventName, isSupported, i,
div = document.createElement("div");
div.setAttribute("className", "t");
div.innerHTML = " <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
all = div.getElementsByTagName("*") || [];
a = div.getElementsByTagName("a")[0];
if (!a || !a.style || !all.length) {
return support;
}
select = document.createElement("select");
opt = select.appendChild(document.createElement("option"));
input = div.getElementsByTagName("input")[0];
a.style.cssText = "top:1px;float:left;opacity:.5";
support.getSetAttribute = div.className !== "t";
support.leadingWhitespace = div.firstChild.nodeType === 3;
support.tbody = !div.getElementsByTagName("tbody").length;
support.htmlSerialize = !!div.getElementsByTagName("link").length;
support.style = /top/.test(a.getAttribute("style"));
support.hrefNormalized = a.getAttribute("href") === "/a";
support.opacity = /^0.5/.test(a.style.opacity);
support.cssFloat = !!a.style.cssFloat;
support.checkOn = !!input.value;
support.optSelected = opt.selected;
support.enctype = !!document.createElement("form").enctype;
support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
support.inlineBlockNeedsLayout = false;
support.shrinkWrapBlocks = false;
support.pixelPosition = false;
support.deleteExpando = true;
support.noCloneEvent = true;
support.reliableMarginRight = true;
support.boxSizingReliable = true;
input.checked = true;
support.noCloneChecked = input.cloneNode(true).checked;
select.disabled = true;
support.optDisabled = !opt.disabled;
try {
delete div.test;
} catch (e) {
support.deleteExpando = false;
}
input = document.createElement("input");
input.setAttribute("value", "");
support.input = input.getAttribute("value") === "";
input.value = "t";
input.setAttribute("type", "radio");
support.radioValue = input.value === "t";
input.setAttribute("checked", "t");
input.setAttribute("name", "t");
fragment = document.createDocumentFragment();
fragment.appendChild(input);
support.appendChecked = input.checked;
support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
if (div.attachEvent) {
div.attachEvent("onclick", function () {
support.noCloneEvent = false;
});
div.cloneNode(true).click();
}
for (i in { submit: true, change: true, focusin: true }) {
div.setAttribute(eventName = "on" + i, "t");
support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
}
div.style.backgroundClip = "content-box";
div.cloneNode(true).style.backgroundClip = "";
support.clearCloneStyle = div.style.backgroundClip === "content-box";
for (i in jQuery(support)) {
break;
}
support.ownLast = i !== "0";
jQuery(function () {
var container, marginDiv, tds,
divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
body = document.getElementsByTagName("body")[0];
if (!body) {
return;
}
container = document.createElement("div");
container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
body.appendChild(container).appendChild(div);
div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
tds = div.getElementsByTagName("td");
tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
isSupported = (tds[0].offsetHeight === 0);
tds[0].style.display = "";
tds[1].style.display = "none";
support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);
div.innerHTML = "";
div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
jQuery.swap(body, body.style.zoom != null ? { zoom: 1} : {}, function () {
support.boxSizing = div.offsetWidth === 4;
});
if (window.getComputedStyle) {
support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";
marginDiv = div.appendChild(document.createElement("div"));
marginDiv.style.cssText = div.style.cssText = divReset;
marginDiv.style.marginRight = marginDiv.style.width = "0";
div.style.width = "1px";
support.reliableMarginRight =
!parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
}
if (typeof div.style.zoom !== core_strundefined) {
div.innerHTML = "";
div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
support.inlineBlockNeedsLayout = (div.offsetWidth === 3);
div.style.display = "block";
div.innerHTML = "<div></div>";
div.firstChild.style.width = "5px";
support.shrinkWrapBlocks = (div.offsetWidth !== 3);
if (support.inlineBlockNeedsLayout) {
body.style.zoom = 1;
}
}
body.removeChild(container);
container = div = tds = marginDiv = null;
});
all = select = fragment = opt = a = input = null;
return support;
})({});
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
rmultiDash = /([A-Z])/g;
function internalData(elem, name, data, pvt ) {
if (!jQuery.acceptData(elem)) {
return;
}
var ret, thisCache,
internalKey = jQuery.expando,
isNode = elem.nodeType,
cache = isNode ? jQuery.cache : elem,
id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
if ((!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string") {
return;
}
if (!id) {
if (isNode) {
id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
} else {
id = internalKey;
}
}
if (!cache[id]) {
cache[id] = isNode ? {} : { toJSON: jQuery.noop };
}
if (typeof name === "object" || typeof name === "function") {
if (pvt) {
cache[id] = jQuery.extend(cache[id], name);
} else {
cache[id].data = jQuery.extend(cache[id].data, name);
}
}
thisCache = cache[id];
if (!pvt) {
if (!thisCache.data) {
thisCache.data = {};
}
thisCache = thisCache.data;
}
if (data !== undefined) {
thisCache[jQuery.camelCase(name)] = data;
}
if (typeof name === "string") {
ret = thisCache[name];
if (ret == null) {
ret = thisCache[jQuery.camelCase(name)];
}
} else {
ret = thisCache;
}
return ret;
}
function internalRemoveData(elem, name, pvt) {
if (!jQuery.acceptData(elem)) {
return;
}
var thisCache, i,
isNode = elem.nodeType,
cache = isNode ? jQuery.cache : elem,
id = isNode ? elem[jQuery.expando] : jQuery.expando;
if (!cache[id]) {
return;
}
if (name) {
thisCache = pvt ? cache[id] : cache[id].data;
if (thisCache) {
if (!jQuery.isArray(name)) {
if (name in thisCache) {
name = [name];
} else {
name = jQuery.camelCase(name);
if (name in thisCache) {
name = [name];
} else {
name = name.split(" ");
}
}
} else {
name = name.concat(jQuery.map(name, jQuery.camelCase));
}
i = name.length;
while (i--) {
delete thisCache[name[i]];
}
if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
return;
}
}
}
if (!pvt) {
delete cache[id].data;
if (!isEmptyDataObject(cache[id])) {
return;
}
}
if (isNode) {
jQuery.cleanData([elem], true);
} else if (jQuery.support.deleteExpando || cache != cache.window) {
delete cache[id];
} else {
cache[id] = null;
}
}
jQuery.extend({
cache: {},
noData: {
"applet": true,
"embed": true,
"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData: function (elem) {
elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
return !!elem && !isEmptyDataObject(elem);
},
data: function (elem, name, data) {
return internalData(elem, name, data);
},
removeData: function (elem, name) {
return internalRemoveData(elem, name);
},
_data: function (elem, name, data) {
return internalData(elem, name, data, true);
},
_removeData: function (elem, name) {
return internalRemoveData(elem, name, true);
},
acceptData: function (elem) {
if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
return false;
}
var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
return !noData || noData !== true && elem.getAttribute("classid") === noData;
}
});
jQuery.fn.extend({
data: function (key, value) {
var attrs, name,
data = null,
i = 0,
elem = this[0];
if (key === undefined) {
if (this.length) {
data = jQuery.data(elem);
if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
attrs = elem.attributes;
for (; i < attrs.length; i++) {
name = attrs[i].name;
if (name.indexOf("data-") === 0) {
name = jQuery.camelCase(name.slice(5));
dataAttr(elem, name, data[name]);
}
}
jQuery._data(elem, "parsedAttrs", true);
}
}
return data;
}
if (typeof key === "object") {
return this.each(function () {
jQuery.data(this, key);
});
}
return arguments.length > 1 ?
this.each(function () {
jQuery.data(this, key, value);
}) :
elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
},
removeData: function (key) {
return this.each(function () {
jQuery.removeData(this, key);
});
}
});
function dataAttr(elem, key, data) {
if (data === undefined && elem.nodeType === 1) {
var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
data = elem.getAttribute(name);
if (typeof data === "string") {
try {
data = data === "true" ? true :
data === "false" ? false :
data === "null" ? null :
+data + "" === data ? +data :
rbrace.test(data) ? jQuery.parseJSON(data) :
data;
} catch (e) { }
jQuery.data(elem, key, data);
} else {
data = undefined;
}
}
return data;
}
function isEmptyDataObject(obj) {
var name;
for (name in obj) {
if (name === "data" && jQuery.isEmptyObject(obj[name])) {
continue;
}
if (name !== "toJSON") {
return false;
}
}
return true;
}
jQuery.extend({
queue: function (elem, type, data) {
var queue;
if (elem) {
type = (type || "fx") + "queue";
queue = jQuery._data(elem, type);
if (data) {
if (!queue || jQuery.isArray(data)) {
queue = jQuery._data(elem, type, jQuery.makeArray(data));
} else {
queue.push(data);
}
}
return queue || [];
}
},
dequeue: function (elem, type) {
type = type || "fx";
var queue = jQuery.queue(elem, type),
startLength = queue.length,
fn = queue.shift(),
hooks = jQuery._queueHooks(elem, type),
next = function () {
jQuery.dequeue(elem, type);
};
if (fn === "inprogress") {
fn = queue.shift();
startLength--;
}
if (fn) {
if (type === "fx") {
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem, next, hooks);
}
if (!startLength && hooks) {
hooks.empty.fire();
}
},
_queueHooks: function (elem, type) {
var key = type + "queueHooks";
return jQuery._data(elem, key) || jQuery._data(elem, key, {
empty: jQuery.Callbacks("once memory").add(function () {
jQuery._removeData(elem, type + "queue");
jQuery._removeData(elem, key);
})
});
}
});
jQuery.fn.extend({
queue: function (type, data) {
var setter = 2;
if (typeof type !== "string") {
data = type;
type = "fx";
setter--;
}
if (arguments.length < setter) {
return jQuery.queue(this[0], type);
}
return data === undefined ?
this :
this.each(function () {
var queue = jQuery.queue(this, type, data);
jQuery._queueHooks(this, type);
if (type === "fx" && queue[0] !== "inprogress") {
jQuery.dequeue(this, type);
}
});
},
dequeue: function (type) {
return this.each(function () {
jQuery.dequeue(this, type);
});
},
delay: function (time, type) {
time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
type = type || "fx";
return this.queue(type, function (next, hooks) {
var timeout = setTimeout(next, time);
hooks.stop = function () {
clearTimeout(timeout);
};
});
},
clearQueue: function (type) {
return this.queue(type || "fx", []);
},
promise: function (type, obj) {
var tmp,
count = 1,
defer = jQuery.Deferred(),
elements = this,
i = this.length,
resolve = function () {
if (!(--count)) {
defer.resolveWith(elements, [elements]);
}
};
if (typeof type !== "string") {
obj = type;
type = undefined;
}
type = type || "fx";
while (i--) {
tmp = jQuery._data(elements[i], type + "queueHooks");
if (tmp && tmp.empty) {
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
var nodeHook, boolHook,
rclass = /[\t\r\n\f]/g,
rreturn = /\r/g,
rfocusable = /^(?:input|select|textarea|button|object)$/i,
rclickable = /^(?:a|area)$/i,
ruseDefault = /^(?:checked|selected)$/i,
getSetAttribute = jQuery.support.getSetAttribute,
getSetInput = jQuery.support.input;
jQuery.fn.extend({
attr: function (name, value) {
return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
},
removeAttr: function (name) {
return this.each(function () {
jQuery.removeAttr(this, name);
});
},
prop: function (name, value) {
return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
},
removeProp: function (name) {
name = jQuery.propFix[name] || name;
return this.each(function () {
try {
this[name] = undefined;
delete this[name];
} catch (e) { }
});
},
addClass: function (value) {
var classes, elem, cur, clazz, j,
i = 0,
len = this.length,
proceed = typeof value === "string" && value;
if (jQuery.isFunction(value)) {
return this.each(function (j) {
jQuery(this).addClass(value.call(this, j, this.className));
});
}
if (proceed) {
classes = (value || "").match(core_rnotwhite) || [];
for (; i < len; i++) {
elem = this[i];
cur = elem.nodeType === 1 && (elem.className ?
(" " + elem.className + " ").replace(rclass, " ") :
" "
);
if (cur) {
j = 0;
while ((clazz = classes[j++])) {
if (cur.indexOf(" " + clazz + " ") < 0) {
cur += clazz + " ";
}
}
elem.className = jQuery.trim(cur);
}
}
}
return this;
},
removeClass: function (value) {
var classes, elem, cur, clazz, j,
i = 0,
len = this.length,
proceed = arguments.length === 0 || typeof value === "string" && value;
if (jQuery.isFunction(value)) {
return this.each(function (j) {
jQuery(this).removeClass(value.call(this, j, this.className));
});
}
if (proceed) {
classes = (value || "").match(core_rnotwhite) || [];
for (; i < len; i++) {
elem = this[i];
cur = elem.nodeType === 1 && (elem.className ?
(" " + elem.className + " ").replace(rclass, " ") :
""
);
if (cur) {
j = 0;
while ((clazz = classes[j++])) {
while (cur.indexOf(" " + clazz + " ") >= 0) {
cur = cur.replace(" " + clazz + " ", " ");
}
}
elem.className = value ? jQuery.trim(cur) : "";
}
}
}
return this;
},
toggleClass: function (value, stateVal) {
var type = typeof value;
if (typeof stateVal === "boolean" && type === "string") {
return stateVal ? this.addClass(value) : this.removeClass(value);
}
if (jQuery.isFunction(value)) {
return this.each(function (i) {
jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
});
}
return this.each(function () {
if (type === "string") {
var className,
i = 0,
self = jQuery(this),
classNames = value.match(core_rnotwhite) || [];
while ((className = classNames[i++])) {
if (self.hasClass(className)) {
self.removeClass(className);
} else {
self.addClass(className);
}
}
} else if (type === core_strundefined || type === "boolean") {
if (this.className) {
jQuery._data(this, "__className__", this.className);
}
this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
}
});
},
hasClass: function (selector) {
var className = " " + selector + " ",
i = 0,
l = this.length;
for (; i < l; i++) {
if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
return true;
}
}
return false;
},
val: function (value) {
var ret, hooks, isFunction,
elem = this[0];
if (!arguments.length) {
if (elem) {
hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
return ret;
}
ret = elem.value;
return typeof ret === "string" ?
ret.replace(rreturn, "") :
ret == null ? "" : ret;
}
return;
}
isFunction = jQuery.isFunction(value);
return this.each(function (i) {
var val;
if (this.nodeType !== 1) {
return;
}
if (isFunction) {
val = value.call(this, i, jQuery(this).val());
} else {
val = value;
}
if (val == null) {
val = "";
} else if (typeof val === "number") {
val += "";
} else if (jQuery.isArray(val)) {
val = jQuery.map(val, function (value) {
return value == null ? "" : value + "";
});
}
hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
this.value = val;
}
});
}
});
jQuery.extend({
valHooks: {
option: {
get: function (elem) {
var val = jQuery.find.attr(elem, "value");
return val != null ?
val :
elem.text;
}
},
select: {
get: function (elem) {
var value, option,
options = elem.options,
index = elem.selectedIndex,
one = elem.type === "select-one" || index < 0,
values = one ? null : [],
max = one ? index + 1 : options.length,
i = index < 0 ?
max :
one ? index : 0;
for (; i < max; i++) {
option = options[i];
if ((option.selected || i === index) &&
(jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
(!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
value = jQuery(option).val();
if (one) {
return value;
}
values.push(value);
}
}
return values;
},
set: function (elem, value) {
var optionSet, option,
options = elem.options,
values = jQuery.makeArray(value),
i = options.length;
while (i--) {
option = options[i];
if ((option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0)) {
optionSet = true;
}
}
if (!optionSet) {
elem.selectedIndex = -1;
}
return values;
}
}
},
attr: function (elem, name, value) {
var hooks, ret,
nType = elem.nodeType;
if (!elem || nType === 3 || nType === 8 || nType === 2) {
return;
}
if (typeof elem.getAttribute === core_strundefined) {
return jQuery.prop(elem, name, value);
}
if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
name = name.toLowerCase();
hooks = jQuery.attrHooks[name] ||
(jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
}
if (value !== undefined) {
if (value === null) {
jQuery.removeAttr(elem, name);
} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
return ret;
} else {
elem.setAttribute(name, value + "");
return value;
}
} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
return ret;
} else {
ret = jQuery.find.attr(elem, name);
return ret == null ?
undefined :
ret;
}
},
removeAttr: function (elem, value) {
var name, propName,
i = 0,
attrNames = value && value.match(core_rnotwhite);
if (attrNames && elem.nodeType === 1) {
while ((name = attrNames[i++])) {
propName = jQuery.propFix[name] || name;
if (jQuery.expr.match.bool.test(name)) {
if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
elem[propName] = false;
} else {
elem[jQuery.camelCase("default-" + name)] =
elem[propName] = false;
}
} else {
jQuery.attr(elem, name, "");
}
elem.removeAttribute(getSetAttribute ? name : propName);
}
}
},
attrHooks: {
type: {
set: function (elem, value) {
if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
var val = elem.value;
elem.setAttribute("type", value);
if (val) {
elem.value = val;
}
return value;
}
}
}
},
propFix: {
"for": "htmlFor",
"class": "className"
},
prop: function (elem, name, value) {
var ret, hooks, notxml,
nType = elem.nodeType;
if (!elem || nType === 3 || nType === 8 || nType === 2) {
return;
}
notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
if (notxml) {
name = jQuery.propFix[name] || name;
hooks = jQuery.propHooks[name];
}
if (value !== undefined) {
return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ?
ret :
(elem[name] = value);
} else {
return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ?
ret :
elem[name];
}
},
propHooks: {
tabIndex: {
get: function (elem) {
var tabindex = jQuery.find.attr(elem, "tabindex");
return tabindex ?
parseInt(tabindex, 10) :
rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ?
0 :
-1;
}
}
}
});
boolHook = {
set: function (elem, value, name) {
if (value === false) {
jQuery.removeAttr(elem, name);
} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
} else {
elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ?
function (elem, name, isXML) {
var fn = jQuery.expr.attrHandle[name],
ret = isXML ?
undefined :
(jQuery.expr.attrHandle[name] = undefined) !=
getter(elem, name, isXML) ?
name.toLowerCase() :
null;
jQuery.expr.attrHandle[name] = fn;
return ret;
} :
function (elem, name, isXML) {
return isXML ?
undefined :
elem[jQuery.camelCase("default-" + name)] ?
name.toLowerCase() :
null;
};
});
if (!getSetInput || !getSetAttribute) {
jQuery.attrHooks.value = {
set: function (elem, value, name) {
if (jQuery.nodeName(elem, "input")) {
elem.defaultValue = value;
} else {
return nodeHook && nodeHook.set(elem, value, name);
}
}
};
}
if (!getSetAttribute) {
nodeHook = {
set: function (elem, value, name) {
var ret = elem.getAttributeNode(name);
if (!ret) {
elem.setAttributeNode(
(ret = elem.ownerDocument.createAttribute(name))
);
}
ret.value = value += "";
return name === "value" || value === elem.getAttribute(name) ?
value :
undefined;
}
};
jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
function (elem, name, isXML) {
var ret;
return isXML ?
undefined :
(ret = elem.getAttributeNode(name)) && ret.value !== "" ?
ret.value :
null;
};
jQuery.valHooks.button = {
get: function (elem, name) {
var ret = elem.getAttributeNode(name);
return ret && ret.specified ?
ret.value :
undefined;
},
set: nodeHook.set
};
jQuery.attrHooks.contenteditable = {
set: function (elem, value, name) {
nodeHook.set(elem, value === "" ? false : value, name);
}
};
jQuery.each(["width", "height"], function (i, name) {
jQuery.attrHooks[name] = {
set: function (elem, value) {
if (value === "") {
elem.setAttribute(name, "auto");
return value;
}
}
};
});
}
if (!jQuery.support.hrefNormalized) {
jQuery.each(["href", "src"], function (i, name) {
jQuery.propHooks[name] = {
get: function (elem) {
return elem.getAttribute(name, 4);
}
};
});
}
if (!jQuery.support.style) {
jQuery.attrHooks.style = {
get: function (elem) {
return elem.style.cssText || undefined;
},
set: function (elem, value) {
return (elem.style.cssText = value + "");
}
};
}
if (!jQuery.support.optSelected) {
jQuery.propHooks.selected = {
get: function (elem) {
var parent = elem.parentNode;
if (parent) {
parent.selectedIndex;
if (parent.parentNode) {
parent.parentNode.selectedIndex;
}
}
return null;
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
], function () {
jQuery.propFix[this.toLowerCase()] = this;
});
if (!jQuery.support.enctype) {
jQuery.propFix.enctype = "encoding";
}
jQuery.each(["radio", "checkbox"], function () {
jQuery.valHooks[this] = {
set: function (elem, value) {
if (jQuery.isArray(value)) {
return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
}
}
};
if (!jQuery.support.checkOn) {
jQuery.valHooks[this].get = function (elem) {
return elem.getAttribute("value") === null ? "on" : elem.value;
};
}
});
var rformElems = /^(?:input|select|textarea)$/i,
rkeyEvent = /^key/,
rmouseEvent = /^(?:mouse|contextmenu)|click/,
rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
function returnTrue() {
return true;
}
function returnFalse() {
return false;
}
function safeActiveElement() {
try {
return document.activeElement;
} catch (err) { }
}
jQuery.event = {
global: {},
add: function (elem, types, handler, data, selector) {
var tmp, events, t, handleObjIn,
special, eventHandle, handleObj,
handlers, type, namespaces, origType,
elemData = jQuery._data(elem);
if (!elemData) {
return;
}
if (handler.handler) {
handleObjIn = handler;
handler = handleObjIn.handler;
selector = handleObjIn.selector;
}
if (!handler.guid) {
handler.guid = jQuery.guid++;
}
if (!(events = elemData.events)) {
events = elemData.events = {};
}
if (!(eventHandle = elemData.handle)) {
eventHandle = elemData.handle = function (e) {
return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
undefined;
};
eventHandle.elem = elem;
}
types = (types || "").match(core_rnotwhite) || [""];
t = types.length;
while (t--) {
tmp = rtypenamespace.exec(types[t]) || [];
type = origType = tmp[1];
namespaces = (tmp[2] || "").split(".").sort();
if (!type) {
continue;
}
special = jQuery.event.special[type] || {};
type = (selector ? special.delegateType : special.bindType) || type;
special = jQuery.event.special[type] || {};
handleObj = jQuery.extend({
type: type,
origType: origType,
data: data,
handler: handler,
guid: handler.guid,
selector: selector,
needsContext: selector && jQuery.expr.match.needsContext.test(selector),
namespace: namespaces.join(".")
}, handleObjIn);
if (!(handlers = events[type])) {
handlers = events[type] = [];
handlers.delegateCount = 0;
if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
if (elem.addEventListener) {
elem.addEventListener(type, eventHandle, false);
} else if (elem.attachEvent) {
elem.attachEvent("on" + type, eventHandle);
}
}
}
if (special.add) {
special.add.call(elem, handleObj);
if (!handleObj.handler.guid) {
handleObj.handler.guid = handler.guid;
}
}
if (selector) {
handlers.splice(handlers.delegateCount++, 0, handleObj);
} else {
handlers.push(handleObj);
}
jQuery.event.global[type] = true;
}
elem = null;
},
remove: function (elem, types, handler, selector, mappedTypes) {
var j, handleObj, tmp,
origCount, t, events,
special, handlers, type,
namespaces, origType,
elemData = jQuery.hasData(elem) && jQuery._data(elem);
if (!elemData || !(events = elemData.events)) {
return;
}
types = (types || "").match(core_rnotwhite) || [""];
t = types.length;
while (t--) {
tmp = rtypenamespace.exec(types[t]) || [];
type = origType = tmp[1];
namespaces = (tmp[2] || "").split(".").sort();
if (!type) {
for (type in events) {
jQuery.event.remove(elem, type + types[t], handler, selector, true);
}
continue;
}
special = jQuery.event.special[type] || {};
type = (selector ? special.delegateType : special.bindType) || type;
handlers = events[type] || [];
tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
origCount = j = handlers.length;
while (j--) {
handleObj = handlers[j];
if ((mappedTypes || origType === handleObj.origType) &&
(!handler || handler.guid === handleObj.guid) &&
(!tmp || tmp.test(handleObj.namespace)) &&
(!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
handlers.splice(j, 1);
if (handleObj.selector) {
handlers.delegateCount--;
}
if (special.remove) {
special.remove.call(elem, handleObj);
}
}
}
if (origCount && !handlers.length) {
if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
jQuery.removeEvent(elem, type, elemData.handle);
}
delete events[type];
}
}
if (jQuery.isEmptyObject(events)) {
delete elemData.handle;
jQuery._removeData(elem, "events");
}
},
trigger: function (event, data, elem, onlyHandlers) {
var handle, ontype, cur,
bubbleType, special, tmp, i,
eventPath = [elem || document],
type = core_hasOwn.call(event, "type") ? event.type : event,
namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
cur = tmp = elem = elem || document;
if (elem.nodeType === 3 || elem.nodeType === 8) {
return;
}
if (rfocusMorph.test(type + jQuery.event.triggered)) {
return;
}
if (type.indexOf(".") >= 0) {
namespaces = type.split(".");
type = namespaces.shift();
namespaces.sort();
}
ontype = type.indexOf(":") < 0 && "on" + type;
event = event[jQuery.expando] ?
event :
new jQuery.Event(type, typeof event === "object" && event);
event.isTrigger = onlyHandlers ? 2 : 3;
event.namespace = namespaces.join(".");
event.namespace_re = event.namespace ?
new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
null;
event.result = undefined;
if (!event.target) {
event.target = elem;
}
data = data == null ?
[event] :
jQuery.makeArray(data, [event]);
special = jQuery.event.special[type] || {};
if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
return;
}
if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
bubbleType = special.delegateType || type;
if (!rfocusMorph.test(bubbleType + type)) {
cur = cur.parentNode;
}
for (; cur; cur = cur.parentNode) {
eventPath.push(cur);
tmp = cur;
}
if (tmp === (elem.ownerDocument || document)) {
eventPath.push(tmp.defaultView || tmp.parentWindow || window);
}
}
i = 0;
while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
event.type = i > 1 ?
bubbleType :
special.bindType || type;
handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
if (handle) {
handle.apply(cur, data);
}
handle = ontype && cur[ontype];
if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
event.preventDefault();
}
}
event.type = type;
if (!onlyHandlers && !event.isDefaultPrevented()) {
if ((!special._default || special._default.apply(eventPath.pop(), data) === false) &&
jQuery.acceptData(elem)) {
if (ontype && elem[type] && !jQuery.isWindow(elem)) {
tmp = elem[ontype];
if (tmp) {
elem[ontype] = null;
}
jQuery.event.triggered = type;
try {
elem[type]();
} catch (e) {
}
jQuery.event.triggered = undefined;
if (tmp) {
elem[ontype] = tmp;
}
}
}
}
return event.result;
},
dispatch: function (event) {
event = jQuery.event.fix(event);
var i, ret, handleObj, matched, j,
handlerQueue = [],
args = core_slice.call(arguments),
handlers = (jQuery._data(this, "events") || {})[event.type] || [],
special = jQuery.event.special[event.type] || {};
args[0] = event;
event.delegateTarget = this;
if (special.preDispatch && special.preDispatch.call(this, event) === false) {
return;
}
handlerQueue = jQuery.event.handlers.call(this, event, handlers);
i = 0;
while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
event.currentTarget = matched.elem;
j = 0;
while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
event.handleObj = handleObj;
event.data = handleObj.data;
ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler)
.apply(matched.elem, args);
if (ret !== undefined) {
if ((event.result = ret) === false) {
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if (special.postDispatch) {
special.postDispatch.call(this, event);
}
return event.result;
},
handlers: function (event, handlers) {
var sel, handleObj, matches, i,
handlerQueue = [],
delegateCount = handlers.delegateCount,
cur = event.target;
if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
for (; cur != this; cur = cur.parentNode || this) {
if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
matches = [];
for (i = 0; i < delegateCount; i++) {
handleObj = handlers[i];
sel = handleObj.selector + " ";
if (matches[sel] === undefined) {
matches[sel] = handleObj.needsContext ?
jQuery(sel, this).index(cur) >= 0 :
jQuery.find(sel, this, null, [cur]).length;
}
if (matches[sel]) {
matches.push(handleObj);
}
}
if (matches.length) {
handlerQueue.push({ elem: cur, handlers: matches });
}
}
}
}
if (delegateCount < handlers.length) {
handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
}
return handlerQueue;
},
fix: function (event) {
if (event[jQuery.expando]) {
return event;
}
var i, prop, copy,
type = event.type,
originalEvent = event,
fixHook = this.fixHooks[type];
if (!fixHook) {
this.fixHooks[type] = fixHook =
rmouseEvent.test(type) ? this.mouseHooks :
rkeyEvent.test(type) ? this.keyHooks :
{};
}
copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
event = new jQuery.Event(originalEvent);
i = copy.length;
while (i--) {
prop = copy[i];
event[prop] = originalEvent[prop];
}
if (!event.target) {
event.target = originalEvent.srcElement || document;
}
if (event.target.nodeType === 3) {
event.target = event.target.parentNode;
}
event.metaKey = !!event.metaKey;
return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
},
props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks: {},
keyHooks: {
props: "char charCode key keyCode".split(" "),
filter: function (event, original) {
if (event.which == null) {
event.which = original.charCode != null ? original.charCode : original.keyCode;
}
return event;
}
},
mouseHooks: {
props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter: function (event, original) {
var body, eventDoc, doc,
button = original.button,
fromElement = original.fromElement;
if (event.pageX == null && original.clientX != null) {
eventDoc = event.target.ownerDocument || document;
doc = eventDoc.documentElement;
body = eventDoc.body;
event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
}
if (!event.relatedTarget && fromElement) {
event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
}
if (!event.which && button !== undefined) {
event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
}
return event;
}
},
special: {
load: {
noBubble: true
},
focus: {
trigger: function () {
if (this !== safeActiveElement() && this.focus) {
try {
this.focus();
return false;
} catch (e) {
}
}
},
delegateType: "focusin"
},
blur: {
trigger: function () {
if (this === safeActiveElement() && this.blur) {
this.blur();
return false;
}
},
delegateType: "focusout"
},
click: {
trigger: function () {
if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
this.click();
return false;
}
},
_default: function (event) {
return jQuery.nodeName(event.target, "a");
}
},
beforeunload: {
postDispatch: function (event) {
if (event.result !== undefined) {
event.originalEvent.returnValue = event.result;
}
}
}
},
simulate: function (type, elem, event, bubble) {
var e = jQuery.extend(
new jQuery.Event(),
event,
{
type: type,
isSimulated: true,
originalEvent: {}
}
);
if (bubble) {
jQuery.event.trigger(e, null, elem);
} else {
jQuery.event.dispatch.call(elem, e);
}
if (e.isDefaultPrevented()) {
event.preventDefault();
}
}
};
jQuery.removeEvent = document.removeEventListener ?
function (elem, type, handle) {
if (elem.removeEventListener) {
elem.removeEventListener(type, handle, false);
}
} :
function (elem, type, handle) {
var name = "on" + type;
if (elem.detachEvent) {
if (typeof elem[name] === core_strundefined) {
elem[name] = null;
}
elem.detachEvent(name, handle);
}
};
jQuery.Event = function (src, props) {
if (!(this instanceof jQuery.Event)) {
return new jQuery.Event(src, props);
}
if (src && src.type) {
this.originalEvent = src;
this.type = src.type;
this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;
} else {
this.type = src;
}
if (props) {
jQuery.extend(this, props);
}
this.timeStamp = src && src.timeStamp || jQuery.now();
this[jQuery.expando] = true;
};
jQuery.Event.prototype = {
isDefaultPrevented: returnFalse,
isPropagationStopped: returnFalse,
isImmediatePropagationStopped: returnFalse,
preventDefault: function () {
var e = this.originalEvent;
this.isDefaultPrevented = returnTrue;
if (!e) {
return;
}
if (e.preventDefault) {
e.preventDefault();
} else {
e.returnValue = false;
}
},
stopPropagation: function () {
var e = this.originalEvent;
this.isPropagationStopped = returnTrue;
if (!e) {
return;
}
if (e.stopPropagation) {
e.stopPropagation();
}
e.cancelBubble = true;
},
stopImmediatePropagation: function () {
this.isImmediatePropagationStopped = returnTrue;
this.stopPropagation();
}
};
jQuery.each({
mouseenter: "mouseover",
mouseleave: "mouseout"
}, function (orig, fix) {
jQuery.event.special[orig] = {
delegateType: fix,
bindType: fix,
handle: function (event) {
var ret,
target = this,
related = event.relatedTarget,
handleObj = event.handleObj;
if (!related || (related !== target && !jQuery.contains(target, related))) {
event.type = handleObj.origType;
ret = handleObj.handler.apply(this, arguments);
event.type = fix;
}
return ret;
}
};
});
if (!jQuery.support.submitBubbles) {
jQuery.event.special.submit = {
setup: function () {
if (jQuery.nodeName(this, "form")) {
return false;
}
jQuery.event.add(this, "click._submit keypress._submit", function (e) {
var elem = e.target,
form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
if (form && !jQuery._data(form, "submitBubbles")) {
jQuery.event.add(form, "submit._submit", function (event) {
event._submit_bubble = true;
});
jQuery._data(form, "submitBubbles", true);
}
});
},
postDispatch: function (event) {
if (event._submit_bubble) {
delete event._submit_bubble;
if (this.parentNode && !event.isTrigger) {
jQuery.event.simulate("submit", this.parentNode, event, true);
}
}
},
teardown: function () {
if (jQuery.nodeName(this, "form")) {
return false;
}
jQuery.event.remove(this, "._submit");
}
};
}
if (!jQuery.support.changeBubbles) {
jQuery.event.special.change = {
setup: function () {
if (rformElems.test(this.nodeName)) {
if (this.type === "checkbox" || this.type === "radio") {
jQuery.event.add(this, "propertychange._change", function (event) {
if (event.originalEvent.propertyName === "checked") {
this._just_changed = true;
}
});
jQuery.event.add(this, "click._change", function (event) {
if (this._just_changed && !event.isTrigger) {
this._just_changed = false;
}
jQuery.event.simulate("change", this, event, true);
});
}
return false;
}
jQuery.event.add(this, "beforeactivate._change", function (e) {
var elem = e.target;
if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
jQuery.event.add(elem, "change._change", function (event) {
if (this.parentNode && !event.isSimulated && !event.isTrigger) {
jQuery.event.simulate("change", this.parentNode, event, true);
}
});
jQuery._data(elem, "changeBubbles", true);
}
});
},
handle: function (event) {
var elem = event.target;
if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
return event.handleObj.handler.apply(this, arguments);
}
},
teardown: function () {
jQuery.event.remove(this, "._change");
return !rformElems.test(this.nodeName);
}
};
}
if (!jQuery.support.focusinBubbles) {
jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
var attaches = 0,
handler = function (event) {
jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
};
jQuery.event.special[fix] = {
setup: function () {
if (attaches++ === 0) {
document.addEventListener(orig, handler, true);
}
},
teardown: function () {
if (--attaches === 0) {
document.removeEventListener(orig, handler, true);
}
}
};
});
}
jQuery.fn.extend({
on: function (types, selector, data, fn, one) {
var type, origFn;
if (typeof types === "object") {
if (typeof selector !== "string") {
data = data || selector;
selector = undefined;
}
for (type in types) {
this.on(type, selector, data, types[type], one);
}
return this;
}
if (data == null && fn == null) {
fn = selector;
data = selector = undefined;
} else if (fn == null) {
if (typeof selector === "string") {
fn = data;
data = undefined;
} else {
fn = data;
data = selector;
selector = undefined;
}
}
if (fn === false) {
fn = returnFalse;
} else if (!fn) {
return this;
}
if (one === 1) {
origFn = fn;
fn = function (event) {
jQuery().off(event);
return origFn.apply(this, arguments);
};
fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
}
return this.each(function () {
jQuery.event.add(this, types, fn, data, selector);
});
},
one: function (types, selector, data, fn) {
return this.on(types, selector, data, fn, 1);
},
off: function (types, selector, fn) {
var handleObj, type;
if (types && types.preventDefault && types.handleObj) {
handleObj = types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if (typeof types === "object") {
for (type in types) {
this.off(type, selector, types[type]);
}
return this;
}
if (selector === false || typeof selector === "function") {
fn = selector;
selector = undefined;
}
if (fn === false) {
fn = returnFalse;
}
return this.each(function () {
jQuery.event.remove(this, types, fn, selector);
});
},
trigger: function (type, data) {
return this.each(function () {
jQuery.event.trigger(type, data, this);
});
},
triggerHandler: function (type, data) {
var elem = this[0];
if (elem) {
return jQuery.event.trigger(type, data, elem, true);
}
}
});
var isSimple = /^.[^:#\[\.,]*$/,
rparentsprev = /^(?:parents|prev(?:Until|All))/,
rneedsContext = jQuery.expr.match.needsContext,
guaranteedUnique = {
children: true,
contents: true,
next: true,
prev: true
};
jQuery.fn.extend({
find: function (selector) {
var i,
ret = [],
self = this,
len = self.length;
if (typeof selector !== "string") {
return this.pushStack(jQuery(selector).filter(function () {
for (i = 0; i < len; i++) {
if (jQuery.contains(self[i], this)) {
return true;
}
}
}));
}
for (i = 0; i < len; i++) {
jQuery.find(selector, self[i], ret);
}
ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
ret.selector = this.selector ? this.selector + " " + selector : selector;
return ret;
},
has: function (target) {
var i,
targets = jQuery(target, this),
len = targets.length;
return this.filter(function () {
for (i = 0; i < len; i++) {
if (jQuery.contains(this, targets[i])) {
return true;
}
}
});
},
not: function (selector) {
return this.pushStack(winnow(this, selector || [], true));
},
filter: function (selector) {
return this.pushStack(winnow(this, selector || [], false));
},
is: function (selector) {
return !!winnow(
this,
typeof selector === "string" && rneedsContext.test(selector) ?
jQuery(selector) :
selector || [],
false
).length;
},
closest: function (selectors, context) {
var cur,
i = 0,
l = this.length,
ret = [],
pos = rneedsContext.test(selectors) || typeof selectors !== "string" ?
jQuery(selectors, context || this.context) :
0;
for (; i < l; i++) {
for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
if (cur.nodeType < 11 && (pos ?
pos.index(cur) > -1 :
cur.nodeType === 1 &&
jQuery.find.matchesSelector(cur, selectors))) {
cur = ret.push(cur);
break;
}
}
}
return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
},
index: function (elem) {
if (!elem) {
return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
}
if (typeof elem === "string") {
return jQuery.inArray(this[0], jQuery(elem));
}
return jQuery.inArray(
elem.jquery ? elem[0] : elem, this);
},
add: function (selector, context) {
var set = typeof selector === "string" ?
jQuery(selector, context) :
jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
all = jQuery.merge(this.get(), set);
return this.pushStack(jQuery.unique(all));
},
addBack: function (selector) {
return this.add(selector == null ?
this.prevObject : this.prevObject.filter(selector)
);
}
});
function sibling(cur, dir) {
do {
cur = cur[dir];
} while (cur && cur.nodeType !== 1);
return cur;
}
jQuery.each({
parent: function (elem) {
var parent = elem.parentNode;
return parent && parent.nodeType !== 11 ? parent : null;
},
parents: function (elem) {
return jQuery.dir(elem, "parentNode");
},
parentsUntil: function (elem, i, until) {
return jQuery.dir(elem, "parentNode", until);
},
next: function (elem) {
return sibling(elem, "nextSibling");
},
prev: function (elem) {
return sibling(elem, "previousSibling");
},
nextAll: function (elem) {
return jQuery.dir(elem, "nextSibling");
},
prevAll: function (elem) {
return jQuery.dir(elem, "previousSibling");
},
nextUntil: function (elem, i, until) {
return jQuery.dir(elem, "nextSibling", until);
},
prevUntil: function (elem, i, until) {
return jQuery.dir(elem, "previousSibling", until);
},
siblings: function (elem) {
return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
},
children: function (elem) {
return jQuery.sibling(elem.firstChild);
},
contents: function (elem) {
return jQuery.nodeName(elem, "iframe") ?
elem.contentDocument || elem.contentWindow.document :
jQuery.merge([], elem.childNodes);
}
}, function (name, fn) {
jQuery.fn[name] = function (until, selector) {
var ret = jQuery.map(this, fn, until);
if (name.slice(-5) !== "Until") {
selector = until;
}
if (selector && typeof selector === "string") {
ret = jQuery.filter(selector, ret);
}
if (this.length > 1) {
if (!guaranteedUnique[name]) {
ret = jQuery.unique(ret);
}
if (rparentsprev.test(name)) {
ret = ret.reverse();
}
}
return this.pushStack(ret);
};
});
jQuery.extend({
filter: function (expr, elems, not) {
var elem = elems[0];
if (not) {
expr = ":not(" + expr + ")";
}
return elems.length === 1 && elem.nodeType === 1 ?
jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
return elem.nodeType === 1;
}));
},
dir: function (elem, dir, until) {
var matched = [],
cur = elem[dir];
while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
if (cur.nodeType === 1) {
matched.push(cur);
}
cur = cur[dir];
}
return matched;
},
sibling: function (n, elem) {
var r = [];
for (; n; n = n.nextSibling) {
if (n.nodeType === 1 && n !== elem) {
r.push(n);
}
}
return r;
}
});
function winnow(elements, qualifier, not) {
if (jQuery.isFunction(qualifier)) {
return jQuery.grep(elements, function (elem, i) {
return !!qualifier.call(elem, i, elem) !== not;
});
}
if (qualifier.nodeType) {
return jQuery.grep(elements, function (elem) {
return (elem === qualifier) !== not;
});
}
if (typeof qualifier === "string") {
if (isSimple.test(qualifier)) {
return jQuery.filter(qualifier, elements, not);
}
qualifier = jQuery.filter(qualifier, elements);
}
return jQuery.grep(elements, function (elem) {
return (jQuery.inArray(elem, qualifier) >= 0) !== not;
});
}
function createSafeFragment(document) {
var list = nodeNames.split("|"),
safeFrag = document.createDocumentFragment();
if (safeFrag.createElement) {
while (list.length) {
safeFrag.createElement(
list.pop()
);
}
}
return safeFrag;
}
var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
rleadingWhitespace = /^\s+/,
rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
rtagName = /<([\w:]+)/,
rtbody = /<tbody/i,
rhtml = /<|&#?\w+;/,
rnoInnerhtml = /<(?:script|style|link)/i,
manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptType = /^$|\/(?:java|ecma)script/i,
rscriptTypeMasked = /^true\/(.*)/,
rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
wrapMap = {
option: [1, "<select multiple='multiple'>", "</select>"],
legend: [1, "<fieldset>", "</fieldset>"],
area: [1, "<map>", "</map>"],
param: [1, "<object>", "</object>"],
thead: [1, "<table>", "</table>"],
tr: [2, "<table><tbody>", "</tbody></table>"],
col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
_default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
},
safeFragment = createSafeFragment(document),
fragmentDiv = safeFragment.appendChild(document.createElement("div"));
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
jQuery.fn.extend({
text: function (value) {
return jQuery.access(this, function (value) {
return value === undefined ?
jQuery.text(this) :
this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
}, null, value, arguments.length);
},
append: function () {
return this.domManip(arguments, function (elem) {
if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
var target = manipulationTarget(this, elem);
target.appendChild(elem);
}
});
},
prepend: function () {
return this.domManip(arguments, function (elem) {
if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
var target = manipulationTarget(this, elem);
target.insertBefore(elem, target.firstChild);
}
});
},
before: function () {
return this.domManip(arguments, function (elem) {
if (this.parentNode) {
this.parentNode.insertBefore(elem, this);
}
});
},
after: function () {
return this.domManip(arguments, function (elem) {
if (this.parentNode) {
this.parentNode.insertBefore(elem, this.nextSibling);
}
});
},
remove: function (selector, keepData) {
var elem,
elems = selector ? jQuery.filter(selector, this) : this,
i = 0;
for (; (elem = elems[i]) != null; i++) {
if (!keepData && elem.nodeType === 1) {
jQuery.cleanData(getAll(elem));
}
if (elem.parentNode) {
if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
setGlobalEval(getAll(elem, "script"));
}
elem.parentNode.removeChild(elem);
}
}
return this;
},
empty: function () {
var elem,
i = 0;
for (; (elem = this[i]) != null; i++) {
if (elem.nodeType === 1) {
jQuery.cleanData(getAll(elem, false));
}
while (elem.firstChild) {
elem.removeChild(elem.firstChild);
}
if (elem.options && jQuery.nodeName(elem, "select")) {
elem.options.length = 0;
}
}
return this;
},
clone: function (dataAndEvents, deepDataAndEvents) {
dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
return this.map(function () {
return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
});
},
html: function (value) {
return jQuery.access(this, function (value) {
var elem = this[0] || {},
i = 0,
l = this.length;
if (value === undefined) {
return elem.nodeType === 1 ?
elem.innerHTML.replace(rinlinejQuery, "") :
undefined;
}
if (typeof value === "string" && !rnoInnerhtml.test(value) &&
(jQuery.support.htmlSerialize || !rnoshimcache.test(value)) &&
(jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
value = value.replace(rxhtmlTag, "<$1></$2>");
try {
for (; i < l; i++) {
elem = this[i] || {};
if (elem.nodeType === 1) {
jQuery.cleanData(getAll(elem, false));
elem.innerHTML = value;
}
}
elem = 0;
} catch (e) { }
}
if (elem) {
this.empty().append(value);
}
}, null, value, arguments.length);
},
replaceWith: function () {
var
args = jQuery.map(this, function (elem) {
return [elem.nextSibling, elem.parentNode];
}),
i = 0;
this.domManip(arguments, function (elem) {
var next = args[i++],
parent = args[i++];
if (parent) {
if (next && next.parentNode !== parent) {
next = this.nextSibling;
}
jQuery(this).remove();
parent.insertBefore(elem, next);
}
}, true);
return i ? this : this.remove();
},
detach: function (selector) {
return this.remove(selector, true);
},
domManip: function (args, callback, allowIntersection) {
args = core_concat.apply([], args);
var first, node, hasScripts,
scripts, doc, fragment,
i = 0,
l = this.length,
set = this,
iNoClone = l - 1,
value = args[0],
isFunction = jQuery.isFunction(value);
if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
return this.each(function (index) {
var self = set.eq(index);
if (isFunction) {
args[0] = value.call(this, index, self.html());
}
self.domManip(args, callback, allowIntersection);
});
}
if (l) {
fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
first = fragment.firstChild;
if (fragment.childNodes.length === 1) {
fragment = first;
}
if (first) {
scripts = jQuery.map(getAll(fragment, "script"), disableScript);
hasScripts = scripts.length;
for (; i < l; i++) {
node = fragment;
if (i !== iNoClone) {
node = jQuery.clone(node, true, true);
if (hasScripts) {
jQuery.merge(scripts, getAll(node, "script"));
}
}
callback.call(this[i], node, i);
}
if (hasScripts) {
doc = scripts[scripts.length - 1].ownerDocument;
jQuery.map(scripts, restoreScript);
for (i = 0; i < hasScripts; i++) {
node = scripts[i];
if (rscriptType.test(node.type || "") &&
!jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
if (node.src) {
jQuery._evalUrl(node.src);
} else {
jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
}
}
}
}
fragment = first = null;
}
}
return this;
}
});
function manipulationTarget(elem, content) {
return jQuery.nodeName(elem, "table") &&
jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ?
elem.getElementsByTagName("tbody")[0] ||
elem.appendChild(elem.ownerDocument.createElement("tbody")) :
elem;
}
function disableScript(elem) {
elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
return elem;
}
function restoreScript(elem) {
var match = rscriptTypeMasked.exec(elem.type);
if (match) {
elem.type = match[1];
} else {
elem.removeAttribute("type");
}
return elem;
}
function setGlobalEval(elems, refElements) {
var elem,
i = 0;
for (; (elem = elems[i]) != null; i++) {
jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
}
}
function cloneCopyEvent(src, dest) {
if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
return;
}
var type, i, l,
oldData = jQuery._data(src),
curData = jQuery._data(dest, oldData),
events = oldData.events;
if (events) {
delete curData.handle;
curData.events = {};
for (type in events) {
for (i = 0, l = events[type].length; i < l; i++) {
jQuery.event.add(dest, type, events[type][i]);
}
}
}
if (curData.data) {
curData.data = jQuery.extend({}, curData.data);
}
}
function fixCloneNodeIssues(src, dest) {
var nodeName, e, data;
if (dest.nodeType !== 1) {
return;
}
nodeName = dest.nodeName.toLowerCase();
if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
data = jQuery._data(dest);
for (e in data.events) {
jQuery.removeEvent(dest, e, data.handle);
}
dest.removeAttribute(jQuery.expando);
}
if (nodeName === "script" && dest.text !== src.text) {
disableScript(dest).text = src.text;
restoreScript(dest);
} else if (nodeName === "object") {
if (dest.parentNode) {
dest.outerHTML = src.outerHTML;
}
if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
dest.innerHTML = src.innerHTML;
}
} else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
dest.defaultChecked = dest.checked = src.checked;
if (dest.value !== src.value) {
dest.value = src.value;
}
} else if (nodeName === "option") {
dest.defaultSelected = dest.selected = src.defaultSelected;
} else if (nodeName === "input" || nodeName === "textarea") {
dest.defaultValue = src.defaultValue;
}
}
jQuery.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function (name, original) {
jQuery.fn[name] = function (selector) {
var elems,
i = 0,
ret = [],
insert = jQuery(selector),
last = insert.length - 1;
for (; i <= last; i++) {
elems = i === last ? this : this.clone(true);
jQuery(insert[i])[original](elems);
core_push.apply(ret, elems.get());
}
return this.pushStack(ret);
};
});
function getAll(context, tag) {
var elems, elem,
i = 0,
found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") :
typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") :
undefined;
if (!found) {
for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
if (!tag || jQuery.nodeName(elem, tag)) {
found.push(elem);
} else {
jQuery.merge(found, getAll(elem, tag));
}
}
}
return tag === undefined || tag && jQuery.nodeName(context, tag) ?
jQuery.merge([context], found) :
found;
}
function fixDefaultChecked(elem) {
if (manipulation_rcheckableType.test(elem.type)) {
elem.defaultChecked = elem.checked;
}
}
jQuery.extend({
clone: function (elem, dataAndEvents, deepDataAndEvents) {
var destElements, node, clone, i, srcElements,
inPage = jQuery.contains(elem.ownerDocument, elem);
if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
clone = elem.cloneNode(true);
} else {
fragmentDiv.innerHTML = elem.outerHTML;
fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
}
if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
destElements = getAll(clone);
srcElements = getAll(elem);
for (i = 0; (node = srcElements[i]) != null; ++i) {
if (destElements[i]) {
fixCloneNodeIssues(node, destElements[i]);
}
}
}
if (dataAndEvents) {
if (deepDataAndEvents) {
srcElements = srcElements || getAll(elem);
destElements = destElements || getAll(clone);
for (i = 0; (node = srcElements[i]) != null; i++) {
cloneCopyEvent(node, destElements[i]);
}
} else {
cloneCopyEvent(elem, clone);
}
}
destElements = getAll(clone, "script");
if (destElements.length > 0) {
setGlobalEval(destElements, !inPage && getAll(elem, "script"));
}
destElements = srcElements = node = null;
return clone;
},
buildFragment: function (elems, context, scripts, selection) {
var j, elem, contains,
tmp, tag, tbody, wrap,
l = elems.length,
safe = createSafeFragment(context),
nodes = [],
i = 0;
for (; i < l; i++) {
elem = elems[i];
if (elem || elem === 0) {
if (jQuery.type(elem) === "object") {
jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
} else if (!rhtml.test(elem)) {
nodes.push(context.createTextNode(elem));
} else {
tmp = tmp || safe.appendChild(context.createElement("div"));
tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
wrap = wrapMap[tag] || wrapMap._default;
tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
j = wrap[0];
while (j--) {
tmp = tmp.lastChild;
}
if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
}
if (!jQuery.support.tbody) {
elem = tag === "table" && !rtbody.test(elem) ?
tmp.firstChild :
wrap[1] === "<table>" && !rtbody.test(elem) ?
tmp :
0;
j = elem && elem.childNodes.length;
while (j--) {
if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
elem.removeChild(tbody);
}
}
}
jQuery.merge(nodes, tmp.childNodes);
tmp.textContent = "";
while (tmp.firstChild) {
tmp.removeChild(tmp.firstChild);
}
tmp = safe.lastChild;
}
}
}
if (tmp) {
safe.removeChild(tmp);
}
if (!jQuery.support.appendChecked) {
jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
}
i = 0;
while ((elem = nodes[i++])) {
if (selection && jQuery.inArray(elem, selection) !== -1) {
continue;
}
contains = jQuery.contains(elem.ownerDocument, elem);
tmp = getAll(safe.appendChild(elem), "script");
if (contains) {
setGlobalEval(tmp);
}
if (scripts) {
j = 0;
while ((elem = tmp[j++])) {
if (rscriptType.test(elem.type || "")) {
scripts.push(elem);
}
}
}
}
tmp = null;
return safe;
},
cleanData: function (elems, acceptData) {
var elem, type, id, data,
i = 0,
internalKey = jQuery.expando,
cache = jQuery.cache,
deleteExpando = jQuery.support.deleteExpando,
special = jQuery.event.special;
for (; (elem = elems[i]) != null; i++) {
if (acceptData || jQuery.acceptData(elem)) {
id = elem[internalKey];
data = id && cache[id];
if (data) {
if (data.events) {
for (type in data.events) {
if (special[type]) {
jQuery.event.remove(elem, type);
} else {
jQuery.removeEvent(elem, type, data.handle);
}
}
}
if (cache[id]) {
delete cache[id];
if (deleteExpando) {
delete elem[internalKey];
} else if (typeof elem.removeAttribute !== core_strundefined) {
elem.removeAttribute(internalKey);
} else {
elem[internalKey] = null;
}
core_deletedIds.push(id);
}
}
}
}
},
_evalUrl: function (url) {
return jQuery.ajax({
url: url,
type: "GET",
dataType: "script",
async: false,
global: false,
"throws": true
});
}
});
jQuery.fn.extend({
wrapAll: function (html) {
if (jQuery.isFunction(html)) {
return this.each(function (i) {
jQuery(this).wrapAll(html.call(this, i));
});
}
if (this[0]) {
var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
if (this[0].parentNode) {
wrap.insertBefore(this[0]);
}
wrap.map(function () {
var elem = this;
while (elem.firstChild && elem.firstChild.nodeType === 1) {
elem = elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner: function (html) {
if (jQuery.isFunction(html)) {
return this.each(function (i) {
jQuery(this).wrapInner(html.call(this, i));
});
}
return this.each(function () {
var self = jQuery(this),
contents = self.contents();
if (contents.length) {
contents.wrapAll(html);
} else {
self.append(html);
}
});
},
wrap: function (html) {
var isFunction = jQuery.isFunction(html);
return this.each(function (i) {
jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
});
},
unwrap: function () {
return this.parent().each(function () {
if (!jQuery.nodeName(this, "body")) {
jQuery(this).replaceWith(this.childNodes);
}
}).end();
}
});
var iframe, getStyles, curCSS,
ralpha = /alpha\([^)]*\)/i,
ropacity = /opacity\s*=\s*([^)]*)/,
rposition = /^(top|right|bottom|left)$/,
rdisplayswap = /^(none|table(?!-c[ea]).+)/,
rmargin = /^margin/,
rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
elemdisplay = { BODY: "block" },
cssShow = { position: "absolute", visibility: "hidden", display: "block" },
cssNormalTransform = {
letterSpacing: 0,
fontWeight: 400
},
cssExpand = ["Top", "Right", "Bottom", "Left"],
cssPrefixes = ["Webkit", "O", "Moz", "ms"];
function vendorPropName(style, name) {
if (name in style) {
return name;
}
var capName = name.charAt(0).toUpperCase() + name.slice(1),
origName = name,
i = cssPrefixes.length;
while (i--) {
name = cssPrefixes[i] + capName;
if (name in style) {
return name;
}
}
return origName;
}
function isHidden(elem, el) {
elem = el || elem;
return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
}
function showHide(elements, show) {
var display, elem, hidden,
values = [],
index = 0,
length = elements.length;
for (; index < length; index++) {
elem = elements[index];
if (!elem.style) {
continue;
}
values[index] = jQuery._data(elem, "olddisplay");
display = elem.style.display;
if (show) {
if (!values[index] && display === "none") {
elem.style.display = "";
}
if (elem.style.display === "" && isHidden(elem)) {
values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
}
} else {
if (!values[index]) {
hidden = isHidden(elem);
if (display && display !== "none" || !hidden) {
jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
}
}
}
}
for (index = 0; index < length; index++) {
elem = elements[index];
if (!elem.style) {
continue;
}
if (!show || elem.style.display === "none" || elem.style.display === "") {
elem.style.display = show ? values[index] || "" : "none";
}
}
return elements;
}
jQuery.fn.extend({
css: function (name, value) {
return jQuery.access(this, function (elem, name, value) {
var len, styles,
map = {},
i = 0;
if (jQuery.isArray(name)) {
styles = getStyles(elem);
len = name.length;
for (; i < len; i++) {
map[name[i]] = jQuery.css(elem, name[i], false, styles);
}
return map;
}
return value !== undefined ?
jQuery.style(elem, name, value) :
jQuery.css(elem, name);
}, name, value, arguments.length > 1);
},
show: function () {
return showHide(this, true);
},
hide: function () {
return showHide(this);
},
toggle: function (state) {
if (typeof state === "boolean") {
return state ? this.show() : this.hide();
}
return this.each(function () {
if (isHidden(this)) {
jQuery(this).show();
} else {
jQuery(this).hide();
}
});
}
});
jQuery.extend({
cssHooks: {
opacity: {
get: function (elem, computed) {
if (computed) {
var ret = curCSS(elem, "opacity");
return ret === "" ? "1" : ret;
}
}
}
},
cssNumber: {
"columnCount": true,
"fillOpacity": true,
"fontWeight": true,
"lineHeight": true,
"opacity": true,
"order": true,
"orphans": true,
"widows": true,
"zIndex": true,
"zoom": true
},
cssProps: {
"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
},
style: function (elem, name, value, extra) {
if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
return;
}
var ret, type, hooks,
origName = jQuery.camelCase(name),
style = elem.style;
name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
if (value !== undefined) {
type = typeof value;
if (type === "string" && (ret = rrelNum.exec(value))) {
value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
type = "number";
}
if (value == null || type === "number" && isNaN(value)) {
return;
}
if (type === "number" && !jQuery.cssNumber[origName]) {
value += "px";
}
if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
style[name] = "inherit";
}
if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
try {
style[name] = value;
} catch (e) { }
}
} else {
if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
return ret;
}
return style[name];
}
},
css: function (elem, name, extra, styles) {
var num, val, hooks,
origName = jQuery.camelCase(name);
name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
if (hooks && "get" in hooks) {
val = hooks.get(elem, true, extra);
}
if (val === undefined) {
val = curCSS(elem, name, styles);
}
if (val === "normal" && name in cssNormalTransform) {
val = cssNormalTransform[name];
}
if (extra === "" || extra) {
num = parseFloat(val);
return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
}
return val;
}
});
if (window.getComputedStyle) {
getStyles = function (elem) {
return window.getComputedStyle(elem, null);
};
curCSS = function (elem, name, _computed) {
var width, minWidth, maxWidth,
computed = _computed || getStyles(elem),
ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
style = elem.style;
if (computed) {
if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
ret = jQuery.style(elem, name);
}
if (rnumnonpx.test(ret) && rmargin.test(name)) {
width = style.width;
minWidth = style.minWidth;
maxWidth = style.maxWidth;
style.minWidth = style.maxWidth = style.width = ret;
ret = computed.width;
style.width = width;
style.minWidth = minWidth;
style.maxWidth = maxWidth;
}
}
return ret;
};
} else if (document.documentElement.currentStyle) {
getStyles = function (elem) {
return elem.currentStyle;
};
curCSS = function (elem, name, _computed) {
var left, rs, rsLeft,
computed = _computed || getStyles(elem),
ret = computed ? computed[name] : undefined,
style = elem.style;
if (ret == null && style && style[name]) {
ret = style[name];
}
if (rnumnonpx.test(ret) && !rposition.test(name)) {
left = style.left;
rs = elem.runtimeStyle;
rsLeft = rs && rs.left;
if (rsLeft) {
rs.left = elem.currentStyle.left;
}
style.left = name === "fontSize" ? "1em" : ret;
ret = style.pixelLeft + "px";
style.left = left;
if (rsLeft) {
rs.left = rsLeft;
}
}
return ret === "" ? "auto" : ret;
};
}
function setPositiveNumber(elem, value, subtract) {
var matches = rnumsplit.exec(value);
return matches ?
Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
value;
}
function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
var i = extra === (isBorderBox ? "border" : "content") ?
4 :
name === "width" ? 1 : 0,
val = 0;
for (; i < 4; i += 2) {
if (extra === "margin") {
val += jQuery.css(elem, extra + cssExpand[i], true, styles);
}
if (isBorderBox) {
if (extra === "content") {
val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
}
if (extra !== "margin") {
val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
}
} else {
val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
if (extra !== "padding") {
val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
}
}
}
return val;
}
function getWidthOrHeight(elem, name, extra) {
var valueIsBorderBox = true,
val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
styles = getStyles(elem),
isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
if (val <= 0 || val == null) {
val = curCSS(elem, name, styles);
if (val < 0 || val == null) {
val = elem.style[name];
}
if (rnumnonpx.test(val)) {
return val;
}
valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
val = parseFloat(val) || 0;
}
return (val +
augmentWidthOrHeight(
elem,
name,
extra || (isBorderBox ? "border" : "content"),
valueIsBorderBox,
styles
)
) + "px";
}
function css_defaultDisplay(nodeName) {
var doc = document,
display = elemdisplay[nodeName];
if (!display) {
display = actualDisplay(nodeName, doc);
if (display === "none" || !display) {
iframe = (iframe ||
jQuery("<iframe frameborder='0' width='0' height='0'/>")
.css("cssText", "display:block !important")
).appendTo(doc.documentElement);
doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
doc.write("<!doctype html><html><body>");
doc.close();
display = actualDisplay(nodeName, doc);
iframe.detach();
}
elemdisplay[nodeName] = display;
}
return display;
}
function actualDisplay(name, doc) {
var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
display = jQuery.css(elem[0], "display");
elem.remove();
return display;
}
jQuery.each(["height", "width"], function (i, name) {
jQuery.cssHooks[name] = {
get: function (elem, computed, extra) {
if (computed) {
return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ?
jQuery.swap(elem, cssShow, function () {
return getWidthOrHeight(elem, name, extra);
}) :
getWidthOrHeight(elem, name, extra);
}
},
set: function (elem, value, extra) {
var styles = extra && getStyles(elem);
return setPositiveNumber(elem, value, extra ?
augmentWidthOrHeight(
elem,
name,
extra,
jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
styles
) : 0
);
}
};
});
if (!jQuery.support.opacity) {
jQuery.cssHooks.opacity = {
get: function (elem, computed) {
return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ?
(0.01 * parseFloat(RegExp.$1)) + "" :
computed ? "1" : "";
},
set: function (elem, value) {
var style = elem.style,
currentStyle = elem.currentStyle,
opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
filter = currentStyle && currentStyle.filter || style.filter || "";
style.zoom = 1;
if ((value >= 1 || value === "") &&
jQuery.trim(filter.replace(ralpha, "")) === "" &&
style.removeAttribute) {
style.removeAttribute("filter");
if (value === "" || currentStyle && !currentStyle.filter) {
return;
}
}
style.filter = ralpha.test(filter) ?
filter.replace(ralpha, opacity) :
filter + " " + opacity;
}
};
}
jQuery(function () {
if (!jQuery.support.reliableMarginRight) {
jQuery.cssHooks.marginRight = {
get: function (elem, computed) {
if (computed) {
return jQuery.swap(elem, { "display": "inline-block" },
curCSS, [elem, "marginRight"]);
}
}
};
}
if (!jQuery.support.pixelPosition && jQuery.fn.position) {
jQuery.each(["top", "left"], function (i, prop) {
jQuery.cssHooks[prop] = {
get: function (elem, computed) {
if (computed) {
computed = curCSS(elem, prop);
return rnumnonpx.test(computed) ?
jQuery(elem).position()[prop] + "px" :
computed;
}
}
};
});
}
});
if (jQuery.expr && jQuery.expr.filters) {
jQuery.expr.filters.hidden = function (elem) {
return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css(elem, "display")) === "none");
};
jQuery.expr.filters.visible = function (elem) {
return !jQuery.expr.filters.hidden(elem);
};
}
jQuery.each({
margin: "",
padding: "",
border: "Width"
}, function (prefix, suffix) {
jQuery.cssHooks[prefix + suffix] = {
expand: function (value) {
var i = 0,
expanded = {},
parts = typeof value === "string" ? value.split(" ") : [value];
for (; i < 4; i++) {
expanded[prefix + cssExpand[i] + suffix] =
parts[i] || parts[i - 2] || parts[0];
}
return expanded;
}
};
if (!rmargin.test(prefix)) {
jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
}
});
var r20 = /%20/g,
rbracket = /\[\]$/,
rCRLF = /\r?\n/g,
rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
rsubmittable = /^(?:input|select|textarea|keygen)/i;
jQuery.fn.extend({
serialize: function () {
return jQuery.param(this.serializeArray());
},
serializeArray: function () {
return this.map(function () {
var elements = jQuery.prop(this, "elements");
return elements ? jQuery.makeArray(elements) : this;
})
.filter(function () {
var type = this.type;
return this.name && !jQuery(this).is(":disabled") &&
rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
(this.checked || !manipulation_rcheckableType.test(type));
})
.map(function (i, elem) {
var val = jQuery(this).val();
return val == null ?
null :
jQuery.isArray(val) ?
jQuery.map(val, function (val) {
return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
}) :
{ name: elem.name, value: val.replace(rCRLF, "\r\n") };
}).get();
}
});
jQuery.param = function (a, traditional) {
var prefix,
s = [],
add = function (key, value) {
value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
};
if (traditional === undefined) {
traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
}
if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
jQuery.each(a, function () {
add(this.name, this.value);
});
} else {
for (prefix in a) {
buildParams(prefix, a[prefix], traditional, add);
}
}
return s.join("&").replace(r20, "+");
};
function buildParams(prefix, obj, traditional, add) {
var name;
if (jQuery.isArray(obj)) {
jQuery.each(obj, function (i, v) {
if (traditional || rbracket.test(prefix)) {
add(prefix, v);
} else {
buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
}
});
} else if (!traditional && jQuery.type(obj) === "object") {
for (name in obj) {
buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
}
} else {
add(prefix, obj);
}
}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
"change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
jQuery.fn[name] = function (data, fn) {
return arguments.length > 0 ?
this.on(name, null, data, fn) :
this.trigger(name);
};
});
jQuery.fn.extend({
hover: function (fnOver, fnOut) {
return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
},
bind: function (types, data, fn) {
return this.on(types, null, data, fn);
},
unbind: function (types, fn) {
return this.off(types, null, fn);
},
delegate: function (selector, types, data, fn) {
return this.on(types, selector, data, fn);
},
undelegate: function (selector, types, fn) {
return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
}
});
var
ajaxLocParts,
ajaxLocation,
ajax_nonce = jQuery.now(),
ajax_rquery = /\?/,
rhash = /#.*$/,
rts = /([?&])_=[^&]*/,
rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent = /^(?:GET|HEAD)$/,
rprotocol = /^\/\//,
rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
_load = jQuery.fn.load,
prefilters = {},
transports = {},
allTypes = "*/".concat("*");
try {
ajaxLocation = location.href;
} catch (e) {
ajaxLocation = document.createElement("a");
ajaxLocation.href = "";
ajaxLocation = ajaxLocation.href;
}
ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
function addToPrefiltersOrTransports(structure) {
return function (dataTypeExpression, func) {
if (typeof dataTypeExpression !== "string") {
func = dataTypeExpression;
dataTypeExpression = "*";
}
var dataType,
i = 0,
dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
if (jQuery.isFunction(func)) {
while ((dataType = dataTypes[i++])) {
if (dataType[0] === "+") {
dataType = dataType.slice(1) || "*";
(structure[dataType] = structure[dataType] || []).unshift(func);
} else {
(structure[dataType] = structure[dataType] || []).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
var inspected = {},
seekingTransport = (structure === transports);
function inspect(dataType) {
var selected;
inspected[dataType] = true;
jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
} else if (seekingTransport) {
return !(selected = dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
}
function ajaxExtend(target, src) {
var deep, key,
flatOptions = jQuery.ajaxSettings.flatOptions || {};
for (key in src) {
if (src[key] !== undefined) {
(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
}
}
if (deep) {
jQuery.extend(true, target, deep);
}
return target;
}
jQuery.fn.load = function (url, params, callback) {
if (typeof url !== "string" && _load) {
return _load.apply(this, arguments);
}
var selector, response, type,
self = this,
off = url.indexOf(" ");
if (off >= 0) {
selector = url.slice(off, url.length);
url = url.slice(0, off);
}
if (jQuery.isFunction(params)) {
callback = params;
params = undefined;
} else if (params && typeof params === "object") {
type = "POST";
}
if (self.length > 0) {
jQuery.ajax({
url: url,
type: type,
dataType: "html",
data: params
}).done(function (responseText) {
response = arguments;
self.html(selector ?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
responseText);
}).complete(callback && function (jqXHR, status) {
self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
});
}
return this;
};
jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
jQuery.fn[type] = function (fn) {
return this.on(type, fn);
};
});
jQuery.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: ajaxLocation,
type: "GET",
isLocal: rlocalProtocol.test(ajaxLocParts[1]),
global: true,
processData: true,
async: true,
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
accepts: {
"*": allTypes,
text: "text/plain",
html: "text/html",
xml: "application/xml, text/xml",
json: "application/json, text/javascript"
},
contents: {
xml: /xml/,
html: /html/,
json: /json/
},
responseFields: {
xml: "responseXML",
text: "responseText",
json: "responseJSON"
},
converters: {
"* text": String,
"text html": true,
"text json": jQuery.parseJSON,
"text xml": jQuery.parseXML
},
flatOptions: {
url: true,
context: true
}
},
ajaxSetup: function (target, settings) {
return settings ?
ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
ajaxExtend(jQuery.ajaxSettings, target);
},
ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
ajaxTransport: addToPrefiltersOrTransports(transports),
ajax: function (url, options) {
if (typeof url === "object") {
options = url;
url = undefined;
}
options = options || {};
var
parts,
i,
cacheURL,
responseHeadersString,
timeoutTimer,
fireGlobals,
transport,
responseHeaders,
s = jQuery.ajaxSetup({}, options),
callbackContext = s.context || s,
globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ?
jQuery(callbackContext) :
jQuery.event,
deferred = jQuery.Deferred(),
completeDeferred = jQuery.Callbacks("once memory"),
statusCode = s.statusCode || {},
requestHeaders = {},
requestHeadersNames = {},
state = 0,
strAbort = "canceled",
jqXHR = {
readyState: 0,
getResponseHeader: function (key) {
var match;
if (state === 2) {
if (!responseHeaders) {
responseHeaders = {};
while ((match = rheaders.exec(responseHeadersString))) {
responseHeaders[match[1].toLowerCase()] = match[2];
}
}
match = responseHeaders[key.toLowerCase()];
}
return match == null ? null : match;
},
getAllResponseHeaders: function () {
return state === 2 ? responseHeadersString : null;
},
setRequestHeader: function (name, value) {
var lname = name.toLowerCase();
if (!state) {
name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
requestHeaders[name] = value;
}
return this;
},
overrideMimeType: function (type) {
if (!state) {
s.mimeType = type;
}
return this;
},
statusCode: function (map) {
var code;
if (map) {
if (state < 2) {
for (code in map) {
statusCode[code] = [statusCode[code], map[code]];
}
} else {
jqXHR.always(map[jqXHR.status]);
}
}
return this;
},
abort: function (statusText) {
var finalText = statusText || strAbort;
if (transport) {
transport.abort(finalText);
}
done(0, finalText);
return this;
}
};
deferred.promise(jqXHR).complete = completeDeferred.add;
jqXHR.success = jqXHR.done;
jqXHR.error = jqXHR.fail;
s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
s.type = options.method || options.type || s.method || s.type;
s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
if (s.crossDomain == null) {
parts = rurl.exec(s.url.toLowerCase());
s.crossDomain = !!(parts &&
(parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
(parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
(ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
);
}
if (s.data && s.processData && typeof s.data !== "string") {
s.data = jQuery.param(s.data, s.traditional);
}
inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
if (state === 2) {
return jqXHR;
}
fireGlobals = s.global;
if (fireGlobals && jQuery.active++ === 0) {
jQuery.event.trigger("ajaxStart");
}
s.type = s.type.toUpperCase();
s.hasContent = !rnoContent.test(s.type);
cacheURL = s.url;
if (!s.hasContent) {
if (s.data) {
cacheURL = (s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data);
delete s.data;
}
if (s.cache === false) {
s.url = rts.test(cacheURL) ?
cacheURL.replace(rts, "$1_=" + ajax_nonce++) :
cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
}
}
if (s.ifModified) {
if (jQuery.lastModified[cacheURL]) {
jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
}
if (jQuery.etag[cacheURL]) {
jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
}
}
if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
jqXHR.setRequestHeader("Content-Type", s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
s.accepts["*"]
);
for (i in s.headers) {
jqXHR.setRequestHeader(i, s.headers[i]);
}
if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
return jqXHR.abort();
}
strAbort = "abort";
for (i in { success: 1, error: 1, complete: 1 }) {
jqXHR[i](s[i]);
}
transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
if (!transport) {
done(-1, "No Transport");
} else {
jqXHR.readyState = 1;
if (fireGlobals) {
globalEventContext.trigger("ajaxSend", [jqXHR, s]);
}
if (s.async && s.timeout > 0) {
timeoutTimer = setTimeout(function () {
jqXHR.abort("timeout");
}, s.timeout);
}
try {
state = 1;
transport.send(requestHeaders, done);
} catch (e) {
if (state < 2) {
done(-1, e);
} else {
throw e;
}
}
}
function done(status, nativeStatusText, responses, headers) {
var isSuccess, success, error, response, modified,
statusText = nativeStatusText;
if (state === 2) {
return;
}
state = 2;
if (timeoutTimer) {
clearTimeout(timeoutTimer);
}
transport = undefined;
responseHeadersString = headers || "";
jqXHR.readyState = status > 0 ? 4 : 0;
isSuccess = status >= 200 && status < 300 || status === 304;
if (responses) {
response = ajaxHandleResponses(s, jqXHR, responses);
}
response = ajaxConvert(s, response, jqXHR, isSuccess);
if (isSuccess) {
if (s.ifModified) {
modified = jqXHR.getResponseHeader("Last-Modified");
if (modified) {
jQuery.lastModified[cacheURL] = modified;
}
modified = jqXHR.getResponseHeader("etag");
if (modified) {
jQuery.etag[cacheURL] = modified;
}
}
if (status === 204 || s.type === "HEAD") {
statusText = "nocontent";
} else if (status === 304) {
statusText = "notmodified";
} else {
statusText = response.state;
success = response.data;
error = response.error;
isSuccess = !error;
}
} else {
error = statusText;
if (status || !statusText) {
statusText = "error";
if (status < 0) {
status = 0;
}
}
}
jqXHR.status = status;
jqXHR.statusText = (nativeStatusText || statusText) + "";
if (isSuccess) {
deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
} else {
deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
}
jqXHR.statusCode(statusCode);
statusCode = undefined;
if (fireGlobals) {
globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
[jqXHR, s, isSuccess ? success : error]);
}
completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
if (fireGlobals) {
globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
if (!(--jQuery.active)) {
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON: function (url, data, callback) {
return jQuery.get(url, data, callback, "json");
},
getScript: function (url, callback) {
return jQuery.get(url, undefined, callback, "script");
}
});
jQuery.each(["get", "post"], function (i, method) {
jQuery[method] = function (url, data, callback, type) {
if (jQuery.isFunction(data)) {
type = type || callback;
callback = data;
data = undefined;
}
return jQuery.ajax({
url: url,
type: method,
dataType: type,
data: data,
success: callback
});
};
});
function ajaxHandleResponses(s, jqXHR, responses) {
var firstDataType, ct, finalDataType, type,
contents = s.contents,
dataTypes = s.dataTypes;
while (dataTypes[0] === "*") {
dataTypes.shift();
if (ct === undefined) {
ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
}
}
if (ct) {
for (type in contents) {
if (contents[type] && contents[type].test(ct)) {
dataTypes.unshift(type);
break;
}
}
}
if (dataTypes[0] in responses) {
finalDataType = dataTypes[0];
} else {
for (type in responses) {
if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
finalDataType = type;
break;
}
if (!firstDataType) {
firstDataType = type;
}
}
finalDataType = finalDataType || firstDataType;
}
if (finalDataType) {
if (finalDataType !== dataTypes[0]) {
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s, response, jqXHR, isSuccess) {
var conv2, current, conv, tmp, prev,
converters = {},
dataTypes = s.dataTypes.slice();
if (dataTypes[1]) {
for (conv in s.converters) {
converters[conv.toLowerCase()] = s.converters[conv];
}
}
current = dataTypes.shift();
while (current) {
if (s.responseFields[current]) {
jqXHR[s.responseFields[current]] = response;
}
if (!prev && isSuccess && s.dataFilter) {
response = s.dataFilter(response, s.dataType);
}
prev = current;
current = dataTypes.shift();
if (current) {
if (current === "*") {
current = prev;
} else if (prev !== "*" && prev !== current) {
conv = converters[prev + " " + current] || converters["* " + current];
if (!conv) {
for (conv2 in converters) {
tmp = conv2.split(" ");
if (tmp[1] === current) {
conv = converters[prev + " " + tmp[0]] ||
converters["* " + tmp[0]];
if (conv) {
if (conv === true) {
conv = converters[conv2];
} else if (converters[conv2] !== true) {
current = tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if (conv !== true) {
if (conv && s["throws"]) {
response = conv(response);
} else {
try {
response = conv(response);
} catch (e) {
return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
}
}
}
}
}
}
return { state: "success", data: response };
}
jQuery.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /(?:java|ecma)script/
},
converters: {
"text script": function (text) {
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script", function (s) {
if (s.cache === undefined) {
s.cache = false;
}
if (s.crossDomain) {
s.type = "GET";
s.global = false;
}
});
jQuery.ajaxTransport("script", function (s) {
if (s.crossDomain) {
var script,
head = document.head || jQuery("head")[0] || document.documentElement;
return {
send: function (_, callback) {
script = document.createElement("script");
script.async = true;
if (s.scriptCharset) {
script.charset = s.scriptCharset;
}
script.src = s.url;
script.onload = script.onreadystatechange = function (_, isAbort) {
if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
script.onload = script.onreadystatechange = null;
if (script.parentNode) {
script.parentNode.removeChild(script);
}
script = null;
if (!isAbort) {
callback(200, "success");
}
}
};
head.insertBefore(script, head.firstChild);
},
abort: function () {
if (script) {
script.onload(undefined, true);
}
}
};
}
});
var oldCallbacks = [],
rjsonp = /(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp: "callback",
jsonpCallback: function () {
var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (ajax_nonce++));
this[callback] = true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
var callbackName, overwritten, responseContainer,
jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
"url" :
typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"
);
if (jsonProp || s.dataTypes[0] === "jsonp") {
callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
s.jsonpCallback() :
s.jsonpCallback;
if (jsonProp) {
s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
} else if (s.jsonp !== false) {
s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
}
s.converters["script json"] = function () {
if (!responseContainer) {
jQuery.error(callbackName + " was not called");
}
return responseContainer[0];
};
s.dataTypes[0] = "json";
overwritten = window[callbackName];
window[callbackName] = function () {
responseContainer = arguments;
};
jqXHR.always(function () {
window[callbackName] = overwritten;
if (s[callbackName]) {
s.jsonpCallback = originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if (responseContainer && jQuery.isFunction(overwritten)) {
overwritten(responseContainer[0]);
}
responseContainer = overwritten = undefined;
});
return "script";
}
});
var xhrCallbacks, xhrSupported,
xhrId = 0,
xhrOnUnloadAbort = window.ActiveXObject && function () {
var key;
for (key in xhrCallbacks) {
xhrCallbacks[key](undefined, true);
}
};
function createStandardXHR() {
try {
return new window.XMLHttpRequest();
} catch (e) { }
}
function createActiveXHR() {
try {
return new window.ActiveXObject("Microsoft.XMLHTTP");
} catch (e) { }
}
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
function () {
return !this.isLocal && createStandardXHR() || createActiveXHR();
} :
createStandardXHR;
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
xhrSupported = jQuery.support.ajax = !!xhrSupported;
if (xhrSupported) {
jQuery.ajaxTransport(function (s) {
if (!s.crossDomain || jQuery.support.cors) {
var callback;
return {
send: function (headers, complete) {
var handle, i,
xhr = s.xhr();
if (s.username) {
xhr.open(s.type, s.url, s.async, s.username, s.password);
} else {
xhr.open(s.type, s.url, s.async);
}
if (s.xhrFields) {
for (i in s.xhrFields) {
xhr[i] = s.xhrFields[i];
}
}
if (s.mimeType && xhr.overrideMimeType) {
xhr.overrideMimeType(s.mimeType);
}
if (!s.crossDomain && !headers["X-Requested-With"]) {
headers["X-Requested-With"] = "XMLHttpRequest";
}
try {
for (i in headers) {
xhr.setRequestHeader(i, headers[i]);
}
} catch (err) { }
xhr.send((s.hasContent && s.data) || null);
callback = function (_, isAbort) {
var status, responseHeaders, statusText, responses;
try {
if (callback && (isAbort || xhr.readyState === 4)) {
callback = undefined;
if (handle) {
xhr.onreadystatechange = jQuery.noop;
if (xhrOnUnloadAbort) {
delete xhrCallbacks[handle];
}
}
if (isAbort) {
if (xhr.readyState !== 4) {
xhr.abort();
}
} else {
responses = {};
status = xhr.status;
responseHeaders = xhr.getAllResponseHeaders();
if (typeof xhr.responseText === "string") {
responses.text = xhr.responseText;
}
try {
statusText = xhr.statusText;
} catch (e) {
statusText = "";
}
if (!status && s.isLocal && !s.crossDomain) {
status = responses.text ? 200 : 404;
} else if (status === 1223) {
status = 204;
}
}
}
} catch (firefoxAccessException) {
if (!isAbort) {
complete(-1, firefoxAccessException);
}
}
if (responses) {
complete(status, statusText, responses, responseHeaders);
}
};
if (!s.async) {
callback();
} else if (xhr.readyState === 4) {
setTimeout(callback);
} else {
handle = ++xhrId;
if (xhrOnUnloadAbort) {
if (!xhrCallbacks) {
xhrCallbacks = {};
jQuery(window).unload(xhrOnUnloadAbort);
}
xhrCallbacks[handle] = callback;
}
xhr.onreadystatechange = callback;
}
},
abort: function () {
if (callback) {
callback(undefined, true);
}
}
};
}
});
}
var fxNow, timerId,
rfxtypes = /^(?:toggle|show|hide)$/,
rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
rrun = /queueHooks$/,
animationPrefilters = [defaultPrefilter],
tweeners = {
"*": [function (prop, value) {
var tween = this.createTween(prop, value),
target = tween.cur(),
parts = rfxnum.exec(value),
unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
start = (jQuery.cssNumber[prop] || unit !== "px" && +target) &&
rfxnum.exec(jQuery.css(tween.elem, prop)),
scale = 1,
maxIterations = 20;
if (start && start[3] !== unit) {
unit = unit || start[3];
parts = parts || [];
start = +target || 1;
do {
scale = scale || ".5";
start = start / scale;
jQuery.style(tween.elem, prop, start + unit);
} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
}
if (parts) {
start = tween.start = +start || +target || 0;
tween.unit = unit;
tween.end = parts[1] ?
start + (parts[1] + 1) * parts[2] :
+parts[2];
}
return tween;
} ]
};
function createFxNow() {
setTimeout(function () {
fxNow = undefined;
});
return (fxNow = jQuery.now());
}
function createTween(value, prop, animation) {
var tween,
collection = (tweeners[prop] || []).concat(tweeners["*"]),
index = 0,
length = collection.length;
for (; index < length; index++) {
if ((tween = collection[index].call(animation, prop, value))) {
return tween;
}
}
}
function Animation(elem, properties, options) {
var result,
stopped,
index = 0,
length = animationPrefilters.length,
deferred = jQuery.Deferred().always(function () {
delete tick.elem;
}),
tick = function () {
if (stopped) {
return false;
}
var currentTime = fxNow || createFxNow(),
remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
temp = remaining / animation.duration || 0,
percent = 1 - temp,
index = 0,
length = animation.tweens.length;
for (; index < length; index++) {
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem, [animation, percent, remaining]);
if (percent < 1 && length) {
return remaining;
} else {
deferred.resolveWith(elem, [animation]);
return false;
}
},
animation = deferred.promise({
elem: elem,
props: jQuery.extend({}, properties),
opts: jQuery.extend(true, { specialEasing: {} }, options),
originalProperties: properties,
originalOptions: options,
startTime: fxNow || createFxNow(),
duration: options.duration,
tweens: [],
createTween: function (prop, end) {
var tween = jQuery.Tween(elem, animation.opts, prop, end,
animation.opts.specialEasing[prop] || animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop: function (gotoEnd) {
var index = 0,
length = gotoEnd ? animation.tweens.length : 0;
if (stopped) {
return this;
}
stopped = true;
for (; index < length; index++) {
animation.tweens[index].run(1);
}
if (gotoEnd) {
deferred.resolveWith(elem, [animation, gotoEnd]);
} else {
deferred.rejectWith(elem, [animation, gotoEnd]);
}
return this;
}
}),
props = animation.props;
propFilter(props, animation.opts.specialEasing);
for (; index < length; index++) {
result = animationPrefilters[index].call(animation, elem, props, animation.opts);
if (result) {
return result;
}
}
jQuery.map(props, createTween, animation);
if (jQuery.isFunction(animation.opts.start)) {
animation.opts.start.call(elem, animation);
}
jQuery.fx.timer(
jQuery.extend(tick, {
elem: elem,
anim: animation,
queue: animation.opts.queue
})
);
return animation.progress(animation.opts.progress)
.done(animation.opts.done, animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
}
function propFilter(props, specialEasing) {
var index, name, easing, value, hooks;
for (index in props) {
name = jQuery.camelCase(index);
easing = specialEasing[name];
value = props[index];
if (jQuery.isArray(value)) {
easing = value[1];
value = props[index] = value[0];
}
if (index !== name) {
props[name] = value;
delete props[index];
}
hooks = jQuery.cssHooks[name];
if (hooks && "expand" in hooks) {
value = hooks.expand(value);
delete props[name];
for (index in value) {
if (!(index in props)) {
props[index] = value[index];
specialEasing[index] = easing;
}
}
} else {
specialEasing[name] = easing;
}
}
}
jQuery.Animation = jQuery.extend(Animation, {
tweener: function (props, callback) {
if (jQuery.isFunction(props)) {
callback = props;
props = ["*"];
} else {
props = props.split(" ");
}
var prop,
index = 0,
length = props.length;
for (; index < length; index++) {
prop = props[index];
tweeners[prop] = tweeners[prop] || [];
tweeners[prop].unshift(callback);
}
},
prefilter: function (callback, prepend) {
if (prepend) {
animationPrefilters.unshift(callback);
} else {
animationPrefilters.push(callback);
}
}
});
function defaultPrefilter(elem, props, opts) {
var prop, value, toggle, tween, hooks, oldfire,
anim = this,
orig = {},
style = elem.style,
hidden = elem.nodeType && isHidden(elem),
dataShow = jQuery._data(elem, "fxshow");
if (!opts.queue) {
hooks = jQuery._queueHooks(elem, "fx");
if (hooks.unqueued == null) {
hooks.unqueued = 0;
oldfire = hooks.empty.fire;
hooks.empty.fire = function () {
if (!hooks.unqueued) {
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function () {
anim.always(function () {
hooks.unqueued--;
if (!jQuery.queue(elem, "fx").length) {
hooks.empty.fire();
}
});
});
}
if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
opts.overflow = [style.overflow, style.overflowX, style.overflowY];
if (jQuery.css(elem, "display") === "inline" &&
jQuery.css(elem, "float") === "none") {
if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
style.display = "inline-block";
} else {
style.zoom = 1;
}
}
}
if (opts.overflow) {
style.overflow = "hidden";
if (!jQuery.support.shrinkWrapBlocks) {
anim.always(function () {
style.overflow = opts.overflow[0];
style.overflowX = opts.overflow[1];
style.overflowY = opts.overflow[2];
});
}
}
for (prop in props) {
value = props[prop];
if (rfxtypes.exec(value)) {
delete props[prop];
toggle = toggle || value === "toggle";
if (value === (hidden ? "hide" : "show")) {
continue;
}
orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
}
}
if (!jQuery.isEmptyObject(orig)) {
if (dataShow) {
if ("hidden" in dataShow) {
hidden = dataShow.hidden;
}
} else {
dataShow = jQuery._data(elem, "fxshow", {});
}
if (toggle) {
dataShow.hidden = !hidden;
}
if (hidden) {
jQuery(elem).show();
} else {
anim.done(function () {
jQuery(elem).hide();
});
}
anim.done(function () {
var prop;
jQuery._removeData(elem, "fxshow");
for (prop in orig) {
jQuery.style(elem, prop, orig[prop]);
}
});
for (prop in orig) {
tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
if (!(prop in dataShow)) {
dataShow[prop] = tween.start;
if (hidden) {
tween.end = tween.start;
tween.start = prop === "width" || prop === "height" ? 1 : 0;
}
}
}
}
}
function Tween(elem, options, prop, end, easing) {
return new Tween.prototype.init(elem, options, prop, end, easing);
}
jQuery.Tween = Tween;
Tween.prototype = {
constructor: Tween,
init: function (elem, options, prop, end, easing, unit) {
this.elem = elem;
this.prop = prop;
this.easing = easing || "swing";
this.options = options;
this.start = this.now = this.cur();
this.end = end;
this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
},
cur: function () {
var hooks = Tween.propHooks[this.prop];
return hooks && hooks.get ?
hooks.get(this) :
Tween.propHooks._default.get(this);
},
run: function (percent) {
var eased,
hooks = Tween.propHooks[this.prop];
if (this.options.duration) {
this.pos = eased = jQuery.easing[this.easing](
percent, this.options.duration * percent, 0, 1, this.options.duration
);
} else {
this.pos = eased = percent;
}
this.now = (this.end - this.start) * eased + this.start;
if (this.options.step) {
this.options.step.call(this.elem, this.now, this);
}
if (hooks && hooks.set) {
hooks.set(this);
} else {
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype = Tween.prototype;
Tween.propHooks = {
_default: {
get: function (tween) {
var result;
if (tween.elem[tween.prop] != null &&
(!tween.elem.style || tween.elem.style[tween.prop] == null)) {
return tween.elem[tween.prop];
}
result = jQuery.css(tween.elem, tween.prop, "");
return !result || result === "auto" ? 0 : result;
},
set: function (tween) {
if (jQuery.fx.step[tween.prop]) {
jQuery.fx.step[tween.prop](tween);
} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
} else {
tween.elem[tween.prop] = tween.now;
}
}
}
};
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
set: function (tween) {
if (tween.elem.nodeType && tween.elem.parentNode) {
tween.elem[tween.prop] = tween.now;
}
}
};
jQuery.each(["toggle", "show", "hide"], function (i, name) {
var cssFn = jQuery.fn[name];
jQuery.fn[name] = function (speed, easing, callback) {
return speed == null || typeof speed === "boolean" ?
cssFn.apply(this, arguments) :
this.animate(genFx(name, true), speed, easing, callback);
};
});
jQuery.fn.extend({
fadeTo: function (speed, to, easing, callback) {
return this.filter(isHidden).css("opacity", 0).show()
.end().animate({ opacity: to }, speed, easing, callback);
},
animate: function (prop, speed, easing, callback) {
var empty = jQuery.isEmptyObject(prop),
optall = jQuery.speed(speed, easing, callback),
doAnimation = function () {
var anim = Animation(this, jQuery.extend({}, prop), optall);
if (empty || jQuery._data(this, "finish")) {
anim.stop(true);
}
};
doAnimation.finish = doAnimation;
return empty || optall.queue === false ?
this.each(doAnimation) :
this.queue(optall.queue, doAnimation);
},
stop: function (type, clearQueue, gotoEnd) {
var stopQueue = function (hooks) {
var stop = hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if (typeof type !== "string") {
gotoEnd = clearQueue;
clearQueue = type;
type = undefined;
}
if (clearQueue && type !== false) {
this.queue(type || "fx", []);
}
return this.each(function () {
var dequeue = true,
index = type != null && type + "queueHooks",
timers = jQuery.timers,
data = jQuery._data(this);
if (index) {
if (data[index] && data[index].stop) {
stopQueue(data[index]);
}
} else {
for (index in data) {
if (data[index] && data[index].stop && rrun.test(index)) {
stopQueue(data[index]);
}
}
}
for (index = timers.length; index--; ) {
if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
timers[index].anim.stop(gotoEnd);
dequeue = false;
timers.splice(index, 1);
}
}
if (dequeue || !gotoEnd) {
jQuery.dequeue(this, type);
}
});
},
finish: function (type) {
if (type !== false) {
type = type || "fx";
}
return this.each(function () {
var index,
data = jQuery._data(this),
queue = data[type + "queue"],
hooks = data[type + "queueHooks"],
timers = jQuery.timers,
length = queue ? queue.length : 0;
data.finish = true;
jQuery.queue(this, type, []);
if (hooks && hooks.stop) {
hooks.stop.call(this, true);
}
for (index = timers.length; index--; ) {
if (timers[index].elem === this && timers[index].queue === type) {
timers[index].anim.stop(true);
timers.splice(index, 1);
}
}
for (index = 0; index < length; index++) {
if (queue[index] && queue[index].finish) {
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
function genFx(type, includeWidth) {
var which,
attrs = { height: type },
i = 0;
includeWidth = includeWidth ? 1 : 0;
for (; i < 4; i += 2 - includeWidth) {
which = cssExpand[i];
attrs["margin" + which] = attrs["padding" + which] = type;
}
if (includeWidth) {
attrs.opacity = attrs.width = type;
}
return attrs;
}
jQuery.each({
slideDown: genFx("show"),
slideUp: genFx("hide"),
slideToggle: genFx("toggle"),
fadeIn: { opacity: "show" },
fadeOut: { opacity: "hide" },
fadeToggle: { opacity: "toggle" }
}, function (name, props) {
jQuery.fn[name] = function (speed, easing, callback) {
return this.animate(props, speed, easing, callback);
};
});
jQuery.speed = function (speed, easing, fn) {
var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
complete: fn || !fn && easing ||
jQuery.isFunction(speed) && speed,
duration: speed,
easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
};
opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
if (opt.queue == null || opt.queue === true) {
opt.queue = "fx";
}
opt.old = opt.complete;
opt.complete = function () {
if (jQuery.isFunction(opt.old)) {
opt.old.call(this);
}
if (opt.queue) {
jQuery.dequeue(this, opt.queue);
}
};
return opt;
};
jQuery.easing = {
linear: function (p) {
return p;
},
swing: function (p) {
return 0.5 - Math.cos(p * Math.PI) / 2;
}
};
jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function () {
var timer,
timers = jQuery.timers,
i = 0;
fxNow = jQuery.now();
for (; i < timers.length; i++) {
timer = timers[i];
if (!timer() && timers[i] === timer) {
timers.splice(i--, 1);
}
}
if (!timers.length) {
jQuery.fx.stop();
}
fxNow = undefined;
};
jQuery.fx.timer = function (timer) {
if (timer() && jQuery.timers.push(timer)) {
jQuery.fx.start();
}
};
jQuery.fx.interval = 13;
jQuery.fx.start = function () {
if (!timerId) {
timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
}
};
jQuery.fx.stop = function () {
clearInterval(timerId);
timerId = null;
};
jQuery.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
};
jQuery.fx.step = {};
if (jQuery.expr && jQuery.expr.filters) {
jQuery.expr.filters.animated = function (elem) {
return jQuery.grep(jQuery.timers, function (fn) {
return elem === fn.elem;
}).length;
};
}
jQuery.fn.offset = function (options) {
if (arguments.length) {
return options === undefined ?
this :
this.each(function (i) {
jQuery.offset.setOffset(this, options, i);
});
}
var docElem, win,
box = { top: 0, left: 0 },
elem = this[0],
doc = elem && elem.ownerDocument;
if (!doc) {
return;
}
docElem = doc.documentElement;
if (!jQuery.contains(docElem, elem)) {
return box;
}
if (typeof elem.getBoundingClientRect !== core_strundefined) {
box = elem.getBoundingClientRect();
}
win = getWindow(doc);
return {
top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
};
};
jQuery.offset = {
setOffset: function (elem, options, i) {
var position = jQuery.css(elem, "position");
if (position === "static") {
elem.style.position = "relative";
}
var curElem = jQuery(elem),
curOffset = curElem.offset(),
curCSSTop = jQuery.css(elem, "top"),
curCSSLeft = jQuery.css(elem, "left"),
calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
props = {}, curPosition = {}, curTop, curLeft;
if (calculatePosition) {
curPosition = curElem.position();
curTop = curPosition.top;
curLeft = curPosition.left;
} else {
curTop = parseFloat(curCSSTop) || 0;
curLeft = parseFloat(curCSSLeft) || 0;
}
if (jQuery.isFunction(options)) {
options = options.call(elem, i, curOffset);
}
if (options.top != null) {
props.top = (options.top - curOffset.top) + curTop;
}
if (options.left != null) {
props.left = (options.left - curOffset.left) + curLeft;
}
if ("using" in options) {
options.using.call(elem, props);
} else {
curElem.css(props);
}
}
};
jQuery.fn.extend({
position: function () {
if (!this[0]) {
return;
}
var offsetParent, offset,
parentOffset = { top: 0, left: 0 },
elem = this[0];
if (jQuery.css(elem, "position") === "fixed") {
offset = elem.getBoundingClientRect();
} else {
offsetParent = this.offsetParent();
offset = this.offset();
if (!jQuery.nodeName(offsetParent[0], "html")) {
parentOffset = offsetParent.offset();
}
parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
}
return {
top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
};
},
offsetParent: function () {
return this.map(function () {
var offsetParent = this.offsetParent || docElem;
while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
offsetParent = offsetParent.offsetParent;
}
return offsetParent || docElem;
});
}
});
jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
var top = /Y/.test(prop);
jQuery.fn[method] = function (val) {
return jQuery.access(this, function (elem, method, val) {
var win = getWindow(elem);
if (val === undefined) {
return win ? (prop in win) ? win[prop] :
win.document.documentElement[method] :
elem[method];
}
if (win) {
win.scrollTo(
!top ? val : jQuery(win).scrollLeft(),
top ? val : jQuery(win).scrollTop()
);
} else {
elem[method] = val;
}
}, method, val, arguments.length, null);
};
});
function getWindow(elem) {
return jQuery.isWindow(elem) ?
elem :
elem.nodeType === 9 ?
elem.defaultView || elem.parentWindow :
false;
}
jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
jQuery.fn[funcName] = function (margin, value) {
var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
return jQuery.access(this, function (elem, type, value) {
var doc;
if (jQuery.isWindow(elem)) {
return elem.document.documentElement["client" + name];
}
if (elem.nodeType === 9) {
doc = elem.documentElement;
return Math.max(
elem.body["scroll" + name], doc["scroll" + name],
elem.body["offset" + name], doc["offset" + name],
doc["client" + name]
);
}
return value === undefined ?
jQuery.css(elem, type, extra) :
jQuery.style(elem, type, value, extra);
}, type, chainable ? margin : undefined, chainable, null);
};
});
});
jQuery.fn.size = function () {
return this.length;
};
jQuery.fn.andSelf = jQuery.fn.addBack;
if (typeof module === "object" && module && typeof module.exports === "object") {
module.exports = jQuery;
} else {
window.jQuery = window.$ = jQuery;
if (typeof define === "function" && define.amd) {
define("jquery", [], function () { return jQuery; });
}
}
})(window);
}
else if (jquery == false) {
return;
}
}
var freetime = function(){
lastInteractionTime = 0;
}
var frame13 = function (that) {
var frame;
if (that.contentDocument) { frame = that.contentDocument; }
else if (that.contentWindow.document) { frame = that.contentWindow.document; }
else if (top[that.name]) { frame = top[that.name].document; }
else if (top.popup_gw) { frame = top.popup_gw.document; }
else {
if (top.frames[2].document.body) { frame = top.frames[2]; }
else if (top.frames[4].document.body) { frame = top.frames[4]; }
else { throw new Error('frame is not defined') };
};
var frameDoc;
if (frame) { frameDoc = frame.body; }
else { throw new Error('frame.document.body - is not defined, ', frame); };
frameDoc.onmousemove = freetime;
frameDoc.onkeypress = freetime;
if(navigator.appVersion.indexOf("MSIE 9")!=-1 || navigator.appVersion.indexOf("MSIE 10")!=-1){
var it = frameDoc.querySelectorAll("input[type=text]");
for(var i = 0; i < it.length; i ++){
it[i].onfocus = function(){ this.select(); }
it[i].onmouseup = function(){ return false; }
}
var d = frameDoc.getElementsByTagName("option");
for(var i = 0; i < d.length; i ++)
d[i].onclick = function(){ setTimeout(function() { parent.document.getElementById('theSubmitButton').focus(); }, 1); }
}
}
function alert(txt)
{
_top.MsgLog.addMsg(txt, "Warning");
}
if(document.all)
{
window.attachEvent("onload", init);
}
else
{
window.addEventListener("load", init,true);
}
var selectColor = "#abb8d9";
var defaultColor = "white";
var rawValue;
var alertExist=false;
var BufferSize=25000;
var maxNumOfFieldsToStore=2000;
var fieldsEntrySize=0;
var notIE = (document.evaluate || navigator.appName.indexOf("Microsoft") == -1);
var needToRefresh=false;
var docObj;
if (opener)
if (opener.opener)
if (opener.opener.opener) docObj=opener.opener.opener.top;
else docObj=opener.opener.top;
else docObj=opener.top;
else docObj=top;
if (typeof _top == "undefined")
{
if (parent != self)
_top = parent;
else if (opener)
_top = opener.parent;
}
try
{
_top.fldToCheck="";
}
catch(e){}
window.onfocus="checkForErrors();";
function setCookieForSession()
{
if (_top.cookieFlag)
{
_top.frames["cookiesFrame"].document.location.reload();
}
}
function numbersOnlyWithSigns(myfield, e, allowedChar)
{
var key;
if(window.event)
{
key = window.event.keyCode;
}
else if(e)
{
key = e.which;
}
else
{
return true;
}
if(numbersOnlyNoSigns(myfield, e) || String.fromCharCode(key) == allowedChar)
{
return true;
}
else
{
return false;
}
}
function numbersOnlyNoSigns(myfield, e)
{
var key;
var keychar;
if(window.event)
{
key = window.event.keyCode;
}
else if(e)
{
key = e.which;
}
else
{
return true;
}
if((key==null) || (key==0) || (key==8) || (key==9) || (key==27))
{
return true;
}
if(isNumber(String.fromCharCode(key)))
{
return true;
}
else
{
return false;
}
}
function isNumber(val)
{
for(var i = 0; i < val.length; i++)
{
if(("0123456789".indexOf(val.charAt(i)) == -1))
{
return false;
}
}
return true;
}
function Hex2Ascii(input)
{
origin=16;
dest=10;
base="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
c=0; Result="";
for (t=1; t<=input.length; t++)
{
if ( (input.substring(t-1,t)>='a') && (input.substring(t-1,t)<='z') )
b=base.indexOf(input.substring(t-1,t).toUpperCase());
else b=base.indexOf(input.substring(t-1,t));
n=b*(Math.pow (origin, input.length-t));
c+=n;
}
a=100;
while (a>0 && c < Math.pow (dest, a)) { a--; }
while (a>-1)
{
e=Math.pow (dest, a);
a--;
d=((c-(c%e))/e)+1;
c=c%e; Ciffer=base.substring(d-1, d); Result = Result + Ciffer;
}
return Result;
}
function decToHex(input)
{
var num = new Number(input);
if (isNaN(num))
{
alert("wrong input");
return "";
}
var hex_value = num.toString(16);
return hex_value.toUpperCase();
}
function splitOctetString(octetString)
{
var octetArray=new Array(Math.floor(octetString.length/2))
var splitedString = sliceString(octetString,"");
for(k=0; k<splitedString.length; k++)
if(k%2!=0)
{
octetArray[(k-1)/2] = splitedString[k-1]+splitedString[k];
}
return octetArray;
}
function Octet2Str(OctetName,StringName,FormNumber)
{
var temp;
var i=0;
var str="";
Octet = document.forms[FormNumber].elements[OctetName].value;
Octet=Octet.toUpperCase();
while(i<Octet.length)
{
temp=Octet.slice(i,i+2);
temp=Hex2Ascii(temp);
temp=String.fromCharCode(temp);
str=str.concat(temp);
i+=2;
}
document.forms[FormNumber].elements[StringName].value = str ;
}
function Octet2StrReturn(Octet)
{
var temp;
var i=0;
var str="";
Octet=Octet.toUpperCase();
while(i<Octet.length)
{
temp=Octet.slice(i,i+2);
temp=Hex2Ascii(temp);
temp=String.fromCharCode(temp);
str=str.concat(temp);
i+=2;
}
return str ;
}
function Str2Hex(str)
{
origin=10;
dest=16;
input=""+str;
base="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
c=0; Result="";
for (t=1; t<=input.length; t++)
{
b=base.indexOf(input.substring(t-1,t));
n=b*(Math.pow (origin, input.length-t));
c+=n;
}
a=100;
while (c < Math.pow (dest, a)) { a--; }
while (a>-1)
{
e=Math.pow (dest, a);
a--;
d=((c-(c%e))/e)+1;
c=c%e; Ciffer=base.substring(d-1, d);
Result = Result + Ciffer;
}
return Result;
}
function Str2Octet(StringName,OctetName,FormNumber)
{
var str = document.forms[FormNumber].elements[StringName].value
var temp,i=0,result="";
var s=check(str);
if(s==0)
{
alert("Illegal Octet");
str="ffffff";
}
while(i<(str.length*1))
{
temp=(str.charCodeAt(i)*1);
temp=Str2Hex(temp);
result=result.concat(temp);
i++;
}
document.forms[FormNumber].elements[OctetName].value = result ;
}
function Str2OctetReturn(inputStr)
{
var asciiVal;
var hexaVal;
var hexStr = "";
for(i=0; i<inputStr.length; i++)
{
asciiVal = inputStr.charCodeAt(i);
if(asciiVal <= 127)
{
asciiVal = ""+asciiVal+"";
hexaVal = decToHex(asciiVal);
hexaVal = ""+hexaVal+"";
hexStr = hexStr.concat(hexaVal);
}
else
{
hexaVal = encodeURIComponent(inputStr.charAt(i));
hexaVal = hexaVal.split("%").join("");
hexStr = hexStr.concat(hexaVal);
}
}
return hexStr;
}
function addOctetSeparators(inputStr)
{
var res = "";
for(var i = 0; i < inputStr.length; i++)
{
if(i % 2 == 0)
res = res + "%";
res = res + inputStr.charAt(i);
}
return res;
}
function hexToDec(val)
{
for (i=0;i<val.length;i++)
{
if (!(((val.charCodeAt(i)>47)&&(val.charCodeAt(i)<58))||((val.charCodeAt(i)>64)&&(val.charCodeAt(i)<74))||((val.charCodeAt(i)>96)&&(val.charCodeAt(i)<103))))
{
return '';
}
}
return decfromhex(val);
}
function decfromhex(num)
{
var res = 0;
var ctr = 0;
while (num.length < 4) {num = "0" + num;}
for(var i = num.length; i > 0; i--)
{
res += (getnum(num.substring(i-1,i)) * (Math.pow(16,ctr)))
ctr++;
}
return res;
}
function getnum(letter)
{
if (letter <= "9") {return letter;}
else
{
if ((letter == "a") || (letter == "A")) { return 10 }
if ((letter == "b") || (letter == "B")) { return 11 }
if ((letter == "c") || (letter == "C")) { return 12 }
if ((letter == "d") || (letter == "D")) { return 13 }
if ((letter == "e") || (letter == "E")) { return 14 }
if ((letter == "f") || (letter == "F")) { return 15 }
return 0;
}
}
function octetToBitsAsChars(octetString)
{
var splitedOctetString = sliceString(octetString,"");
var bitsAsCharsArray=new Array((splitedOctetString.length)*4);
var bitsString="";
var bitNo=0;
for (var ind=0; ind<(splitedOctetString.length); ind++)
{
num=hexToDec(splitedOctetString[ind]);
offset=3;
for (var j=0; j<4; j++)
{
if ((num!=0)||(num/2 != 0))
{
bitsAsCharsArray[bitNo+offset]=num%2;
num=Math.floor(num/2);
}
else
{
bitsAsCharsArray[bitNo+offset]=0;
}
offset--;
}
bitNo+=4;
}
for (j=0; j<bitsAsCharsArray.length; j++)
bitsString+=bitsAsCharsArray[j];
return bitsString;
}
function bitsAsCharsToOctet(bitsString)
{
var octetString="";
var bitNo=0;
var num;
while (((bitsString.length)%4) != 0)
bitsString+="0";
for (bitNo=0; bitNo<bitsString.length;)
{
num=0;
for (var j=0; (j<4 && (bitNo+j)<bitsString.length); j++)
{
num=num*2+parseInt(bitsString.charAt(bitNo+j));
}
num+="";
bitNo+=4;
octetString+=decToHex(num);
}
if (!checkOctetString(octetString))
octetString+="0";
return octetString;
}
function signedHexToDec(pHexaNumber, nBits)
{
var max_int = Math.pow(2, nBits) - 1;
var max_signed_int = Math.pow(2, (nBits - 1)) - 1;
var num_dec = parseInt(pHexaNumber, 16);
if (num_dec > max_signed_int)
num_dec = num_dec - max_int - 1;
return num_dec;
}
function fromStringToMacAddress(stringVal)
{
var macAddressVal="";
var splitedString = sliceString(stringVal,"");
for(k=0; k<splitedString.length; k++){
if(((k+1)%2!=0)||(k==splitedString.length-1))
macAddressVal = macAddressVal+splitedString[k];
else
macAddressVal = macAddressVal+splitedString[k]+":";
}
return macAddressVal;
}
function fromMacAddressToString(macAddVal)
{
var sVal="";
var token=":";
if (macAddVal.indexOf("-")!=-1)
token="-";
var splitedMacVal = sliceString(macAddVal,token);
if(macAddVal.indexOf(token)!=-1 && splitedMacVal.length!=6){
alert("Wrong string for MAC Address !");
return 0;
}
else
{
if (macAddVal.indexOf(token)==-1)
{
splitedMacVal=splitOctetString(macAddVal);
}
for(n=0; n<splitedMacVal.length; n++)
{
if(checkhexa(splitedMacVal[n])==false)
{
alert("Wrong string for Mac Address !");
return 0;
}
}
}
for(m=0; m<splitedMacVal.length; m++)
sVal = sVal+splitedMacVal[m];
return sVal;
}
function maskIpToInt(fldName,val)
{
var isValid;
var IPtype;
var obj;
var formObj=document.forms[0].elements;
if (fldName && document.forms[0])
{
obj=formObj[fldName];
IPtype=formObj[fldName].value;
if ((_top && _top.fldToCheck=="")||((notIE)&&(document.forms[0])&&(!(formObj[_top.fldToCheck]))))
{
_top.fldToCheck=fldName;
}
}
else IPtype=val;
isValid = (checkIpAddress(IPtype,false,true))
if (isValid)
{
var ipArr=new Array(4);
ipArr=sliceString(IPtype,".");
result=0;
for (i=0;((i<4)&&(isValid));i++)
{
var curr_octet = parseInt(ipArr[i]);
if ((curr_octet==0)||(curr_octet==128)||(curr_octet==192)||(curr_octet==224)||(curr_octet==240)||
(curr_octet==248)||(curr_octet==252)||(curr_octet==254)||(curr_octet==255))
{
base=128;
while (curr_octet!=0)
{
if (curr_octet>=base)
{
curr_octet-=base;
result++
}
base=base/2;
}
}
else isValid=0;
}
}
if (!(isValid))
{
if (fldName && document.forms[0] && obj && _top)
{
_top.fldToCheck=fldName;
if (!(alertExist))
{
alertExist=true;
alert ("The Mask should be in an IP address format.");
alertExist=false;
}
if (obj.type!="hidden")
setTimeout('checkFocus()',5);
}
return 0;
}
else
{
_top.fldToCheck="";
return (result);
}
}
function maskIpToIntNG(fldName,submit)
{ var msg="The Mask should be in an IP address format.";
var result=0;var base;var curr_octet;
var cntrl=formele[fldName];
IP=cntrl.value;
if (checkIpAddress(IP,false,true))
{ var ipArr=IP.split(".");
for (i=0;(i<4);i++)
{
curr_octet = parseInt(ipArr[i]);
if ((curr_octet==0)||(curr_octet==128)||(curr_octet==192)||(curr_octet==224)||(curr_octet==240)||(curr_octet==248)||(curr_octet==252)||(curr_octet==254)||(curr_octet==255))
{
base=128;
while (curr_octet!=0)
{ if (curr_octet>=base)
{
curr_octet-=base;
result++
}
base=base/2;
}
}
else{if(submit){alert(msg);if(!cntrl.disabled)cntrl.focus();} return "";}
}
}
else {if(submit){alert(msg);if(!cntrl.disabled)cntrl.focus();} return "";} ;
return ("/"+result);
}
function maskIntToIp(fldName,val)
{
var maskASInt;
var obj;
var formObj=document.forms[0].elements;
if (fldName)
{
obj=document.forms[0].elements[fldName];
maskASInt=obj.value;
if ((_top.fldToCheck=="")||((notIE)&&(!(formObj[_top.fldToCheck]))))
{
_top.fldToCheck=fldName;
}
}
else maskASInt=val;
while ((maskASInt.charAt(0)==" ")||(maskASInt.charAt(0)=="/")||(maskASInt.charAt(0)=="\\"))
maskASInt=maskASInt.substr(1);
var ipArr=new Array(0,0,0,0);
if ((!checkUInteger32(maskASInt)) || (maskASInt>32)||(maskASInt<0))
{
if (fldName)
{
_top.fldToCheck=fldName;
if (!(alertExist))
{
alertExist=true;
alert("The mask must be integer range 0..32.");
alertExist=false;
}
if (obj.type!="hidden")
setTimeout('checkFocus()',5);
}
}
else
{
if (obj && (obj.type!="hidden"))
{
_top.fldToCheck="";
}
fullMasks=Math.floor(maskASInt/8);
for (i=0;i<4;i++)
{
if (i<fullMasks)
{
ipArr[i]=255;
maskASInt-=8;
}
else
{
base=128;
while (maskASInt>0)
{
ipArr[i]+=base;
base=base/2;
maskASInt--;
}
}
}
}
return (ipArr[0]+"."+ipArr[1]+"."+ipArr[2]+"."+ipArr[3]);
}
function maskIntToIpNG(fldName,submit)
{
var msg="The mask must be integer range 0..32.";
var result=0;var base;var curr_octet;
var cntrl=formele[fldName];
IP=cntrl.value;
var maskASInt=cntrl.value;
while ((maskASInt.charAt(0)==" ")||(maskASInt.charAt(0)=="/")||(maskASInt.charAt(0)=="\\"))maskASInt=maskASInt.substr(1);
var ipArr=new Array(0,0,0,0);
if ((!checkUInteger32(maskASInt)) || (maskASInt>32)||(maskASInt<0))
{ if(submit){alert(msg);if(!cntrl.disabled)cntrl.focus();} return "";
}
else
{
fullMasks=Math.floor(maskASInt/8);
for (i=0;i<4;i++)
{
if (i<fullMasks)
{ipArr[i]=255;
maskASInt-=8;
}
else
{
base=128;
while (maskASInt>0)
{
ipArr[i]+=base;
base=base/2;
maskASInt--;
}
}
}
}
return (ipArr[0]+"."+ipArr[1]+"."+ipArr[2]+"."+ipArr[3]);
}
function maskIntValToIp(val)
{
var maskASInt = val;
try {
while ((maskASInt.charAt(0) == " ") || (maskASInt.charAt(0) == "/") || (maskASInt.charAt(0) == "\\")) maskASInt = maskASInt.substr(1);
}
catch (maskASInt) {
try {
maskASInt + '';
while ((maskASInt.charAt(0) == " ") || (maskASInt.charAt(0) == "/") || (maskASInt.charAt(0) == "\\")) maskASInt = maskASInt.substr(1);
}
catch (e) { }
}
var ipArr=new Array(0,0,0,0);
if ((!checkUInteger32(maskASInt)) || (maskASInt>32)||(maskASInt<0))
{
return "";
}
else
{
fullMasks=Math.floor(maskASInt/8);
for (i=0;i<4;i++)
{
if (i<fullMasks)
{ipArr[i]=255;
maskASInt-=8;
}
else
{
base=128;
while (maskASInt>0)
{
ipArr[i]+=base;
base=base/2;
maskASInt--;
}
}
}
}
return (ipArr[0]+"."+ipArr[1]+"."+ipArr[2]+"."+ipArr[3]);
}
function ipSegToOctet(input)
{
base="0123456789ABCDEF"
Result="";
counter=0;
while (input>=16)
{
input-=16;
counter++;
}
Result=length2((base.charAt(counter)).toString() + (base.charAt(input)).toString());
return(Result);
}
function ipToOctet(ipType)
{
if (ipType=="")
return "";
var ipArr=new Array(4);
ipArr=sliceString(ipType,'.');
octet4="";
for (i=0;i<4;i++)
{
octet4+=ipSegToOctet(parseInt(ipArr[i]))
}
return octet4;
}
function octetToIp(octetStr)
{
var octetArr=splitOctetString(octetStr);
result=Hex2Ascii(octetArr[0]);
for (i=1;i<4;i++)
{
result+="."+Hex2Ascii(octetArr[i]);
}
return result;
}
function zoneIndexToInvertedHexa(inputStr)
{
var str = inputStr.toLowerCase();
var ifIndex;
var res = "";
if(str.indexOf("vlan") != -1)
ifIndex = parseInt(str.substr(4),10) + 99999;
else if(str.indexOf("po") != -1)
ifIndex = parseInt(str.substr(2),10) + 999;
else if(str.indexOf("tun") != -1)
ifIndex = parseInt(_top.tunnelFirstIndex,10);
else
ifIndex = getPortNumberFromName(str);
var ifHex = decToHex(ifIndex).toLowerCase();
if(ifHex.length % 2 == 1)
ifHex = "0" + ifHex;
res = ifHex;
while(res.length < 8)
res = "0" + res;
return res;
}
function invertedHexaToZoneIndex(input)
{
var ifIndex = "";
ifIndex = input;
while(ifIndex.charAt(0)=="0")
ifIndex = ifIndex.substr(1);
ifIndex = hexToDec(ifIndex);
if(ifIndex == _top.tunnelFirstIndex)
return "tunnel1";
else if(ifIndex >= 100000)
return "vlan" + (ifIndex - 99999);
else if(ifIndex >= 1000)
return "po" + (ifIndex - 999);
else
return getPortNameFromNumber(ifIndex);
}
function fromMulticastMacToIP(macAddr)
{
var ipStr="224-239.";
var byte3OfMacOption1;
if (macAddr.slice(6,7)=="0") byte3OfMacOption1=(Hex2Ascii(macAddr.slice(7,8))&127).toString();
else byte3OfMacOption1=(Hex2Ascii(macAddr.slice(6,8))&127).toString();
byte3OfMacOption2=parseInt(byte3OfMacOption1)+128;
ipStr+=byte3OfMacOption2+"|"+byte3OfMacOption1+".";
if (macAddr.slice(8,9)=="0") ipStr+=Hex2Ascii(macAddr.slice(9,10));
else ipStr+=Hex2Ascii(macAddr.slice(8,10));
ipStr+=".";
if (macAddr.slice(10,11)=="0") ipStr+=Hex2Ascii(macAddr.slice(11,12));
else ipStr+=Hex2Ascii(macAddr.slice(10,12));
return ipStr;
}
function fromIPToMulticastMac(ipAddr,isEdit)
{
var macStr="01005e";
ipArr=sliceString(ipAddr,".");
var isCont=true;
if (isEdit==true)
{
ipArr[1]=(sliceString(ipArr[1],"|"))[1];
}
else
{
if ((parseInt(ipArr[0])<224) || (parseInt(ipArr[0])>239))
{
isCont=false;
alert("Multicast Mac address must be between 224.0.0.0-239.255.255.255");
}
}
if (isCont)
{
ipArr[1]=(ipArr[1]&127).toString();
for (var i=1; i<4; i++)
{
ipArr[i]=Str2Hex(ipArr[i]);
if (ipArr[i]==0 || ipArr[i]=="0")
ipArr[i]="00";
if (ipArr[i].length==1)
ipArr[i]="0"+ipArr[i];
macStr+=ipArr[i];
}
return macStr;
}
else return -1;
}
function strToIPv6(str)
{
var res="";
var imp="";
for(var i=0;i<str.length;i=i+4)
imp=imp+str.substring(i,i+4)+":";
imp=imp.substring(0,imp.length-1);
var res_arr=imp.split(":");
var zero_flag=false;
var num_flag=false;
for(var i=0;i<8;i++)
{
if(res_arr[i]=="0000")
{
if(!zero_flag && i == 0)
{
res=res+"::"
zero_flag=true;
}
if(!zero_flag) res=res+":";
zero_flag=true;
if(num_flag) res=res+res_arr[i]+":";
}
else
{
while(res_arr[i].charAt(0)=="0")
res_arr[i] = res_arr[i].substr(1);
res=res+res_arr[i]+":";
if(zero_flag) num_flag=true;
}
}
if(res.charAt(res.length-2)!=":")
res=res.substring(0,res.length-1);
if(res.length==0)
return imp;
return res;
}
var TICKS_PER_SECOND = 100;
function ticksToSecondsField(tickField, secField)
{
var ticks = document.forms[0].elements[tickField].value;
document.forms[0].elements[secField].value = ticks / TICKS_PER_SECOND;
}
function secondsToTicksField(secField, tickField)
{
var secs = document.forms[0].elements[secField].value;
document.forms[0].elements[tickField].value = secs * TICKS_PER_SECOND;
}
function checkhexa(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
for(i=0;i<stringTocheck.length;i++)
{
if(!((stringTocheck.charCodeAt(i)>=97&& stringTocheck.charCodeAt(i)<=102)||(stringTocheck.charCodeAt(i)>=65 && stringTocheck.charCodeAt(i)<=70)||(stringTocheck.charCodeAt(i)>=48 && stringTocheck.charCodeAt(i)<=57)))
{
return false;
}
}
return true;
}
function check(str)
{
var tmp;
var result=1;
str=removeSpacesFromHeadAndTail(str);
for(i=0;i<str.length;i++)
{
tmp=str.charCodeAt(i);
if(!((tmp==95)||(tmp>47&&tmp<58)||(tmp>64&&tmp<91)||(tmp>96&&tmp<123)))
result=0;
}
return (result);
}
function checknumber(stringTocheck)
{
if(!isNaN(parseFloat(stringTocheck)))
return true;
else
return false;
}
function checkInteger(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^\d+$)|(^\+\d+$)|(^\-\d+$)/
return (anum.test(stringTocheck));
}
function checkUInteger32(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^\d+$)/
return (anum.test(stringTocheck));
}
function checkIpAddress(stringTocheck,isMulticast)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var ipType=/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/
var multicastIpType=/(^\d{1,3}-\d{1,3}\.\d{1,3}\|\d{1,3}\.\d{1,3}\.\d{1,3}$)/
if (ipType.test(stringTocheck)||(isMulticast!="" && isMulticast!=null && isMulticast==true && multicastIpType.test(stringTocheck)))
{
var IPArr=sliceString(stringTocheck,".");
if (4==IPArr.length)
{
for (var i=0; i<IPArr.length; i++)
{
if ((i==0 || i==1) && isMulticast!="" && isMulticast!=null && isMulticast==true)
{
var tmp;
if (i==0)
tmp=sliceString(IPArr[i],"-");
else if (i==1)
tmp=sliceString(IPArr[i],"|");
if (2==tmp.length)
{
for (var j=0; j<tmp.length; j++)
{
tmp[j]=parseInt(tmp[j]);
if ( (tmp[j]<0) || (tmp[j]>255) )
return false;
}
}
else return false;
}
else
{
var tmp=parseInt(IPArr[i]);
if ( (tmp<0) || (tmp>255) )
return false;
}
}
}
else return false;
}
else return false;
return true;
}
function checkOID(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^\d+$)/;
var OIDArr=sliceString(stringTocheck,".");
for (var i=0; i<OIDArr.length; i++)
{
if (!anum.test(OIDArr[i]))
{
return false;
}
}
return true;
}
function checkPortList(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^[0-1]+$)/;
if (!anum.test(stringTocheck))
{
return false;
}
return true;
}
function checkOctetString(stringTocheck,typeParam)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var tokensArr=[":","-"];
var token="";
var octetString="";
var octetArr;
var legal;
if (typeParam!="MAC" && isNaN(typeParam))
typeParam="";
for (i=0; i<tokensArr.length; i++)
if ((stringTocheck).indexOf(tokensArr[i])!=-1)
{
token=tokensArr[i];
break;
}
if (!(typeParam=="MAC" && token==""))
{
octetArr=sliceString(stringTocheck,token);
legal=true;
if (token!="")
{
for (i=0;i<octetArr.length;i++)
{
if (octetArr[i].length!=2)
{
legal=false;
break;
}
}
}
if (legal)
{
for (i=0;i<octetArr.length;i++) octetString+=octetArr[i];
var x=0;
for (i=0;i<octetString.length;i++)
{
x=octetString.charCodeAt(i);
if ( (x<48) || ((x>57)&&(x<65)) || ((x>70)&&(x<97)) || (x>102))
{
legal=false;
break;
}
}
}
if (((octetString.length)%2!=0)||(!legal))
{
return false;
}
return true;
}
return false;
}
function checkOctetStringLength(octetString, minOctet, maxOctet)
{
var minLngth, maxLnght;
if(octetString.indexOf(":")!=-1 || octetString.indexOf("-")!=-1)
{
minLngth = (minOctet * 2) + (minOctet - 1);
maxLnght = (maxOctet * 2) + (maxOctet - 1);
}
else
{
minLngth = minOctet * 2;
maxLnght = maxOctet * 2;
}
if(octetString.length < minLngth || octetString.length > maxLnght)
return false;
return true;
}
function checkValidationOctetString(cntrl, minOctet, maxOctet, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if (cntrl.disabled)
return true;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return true;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else if(!checkOctetString(curVal))
{
if(minOctet!=maxOctet)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12070", [[TKN_NUMBER, minOctet.toString()],[TKN_NUMBER, maxOctet.toString()]]);
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12072", [[TKN_NUMBER, maxOctet.toString()]]);
return false;
}
else if(!checkOctetStringLength(curVal, minOctet, maxOctet))
{
if(minOctet!=maxOctet)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12070", [[TKN_NUMBER, minOctet.toString()],[TKN_NUMBER, maxOctet.toString()]]);
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12072", [[TKN_NUMBER, maxOctet.toString()]]);
return false;
}
return true;
}
function checkType(fldName,type,isShowMsg,fldHeader,typeParam)
{
var errMsg="";
var type;
var formObj=document.forms[0].elements;
var obj=formObj[fldName];
var verifyType;
var val=removeSpacesFromHeadAndTail(obj.value);
obj.value=val;
if (!isShowMsg)
{
if (isNaN(isShowMsg))
isShowMsg=true;
else
{
if (isShowMsg.length==0)
isShowMsg=true;
else isShowMsg=false;
}
}
if (typeParam!="MAC" && isNaN(typeParam))
typeParam="";
type=type.toUpperCase();
switch(type)
{
case "INT": type="0";
break;
case "INTEGER": type="0";
break;
case "UINT32": type="12";
break;
case "OID": type="3";
break;
case "IP": type="5";
break;
case "OCTET":
case "MAC":
if (type=="MAC")
{
typeParam="MAC"
}
type="2";
break;
case "PORTLIST": type="101";
break;
case "STRING": type="100" ;
break;
default: break;
}
switch (type)
{
case "0":
verifyType=checkInteger(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an Integer.";
else errMsg=val+" is not an Integer.";
}
break;
case "2":
verifyType=checkOctetString(val,typeParam);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
{
if (typeParam=="MAC")
errMsg=errMsg=val+" is not a MAC address. "+fldHeader+" must be 6 pairs of Hexa digits(0..9,a..f) separated by ':'.";
else errMsg=errMsg=val+" is not an octet string. "+fldHeader+" must be an even number of pairs of Hexa digits(0..9,a..f).";
}
else
{
if (typeParam=="MAC")
errMsg=val+" is not a MAC address. It must be 6 pairs of Hexa digits(0..9,a..f) separated by ':'.";
else errMsg=val+" is not an octet string. It must be an even number of pairs of Hexa digits(0..9,a..f).";
}
}
break;
case "3":
verifyType=checkOID(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an OID.";
else errMsg=val+" is not an OID.";
}
break;
case "5":
verifyType=checkIpAddress(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an IP Address.";
else errMsg=val+" is not an IP Address.";
}
break;
case "MULTICASTIP":
if ((val.indexOf("-")!=-1) && (val.indexOf("|")!=-1))
verifyType=checkIpAddress(val,true);
else verifyType=checkIpAddress(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be a Multicast IP Address.";
else errMsg=val+" is not a Multicast IP Address.";
}
else
{
var ipArr=sliceString(val,".");
if ((parseInt(ipArr[0])<224) || (parseInt(ipArr[0])>239))
{
errMsg="IP Multicast address must be between 224.0.0.0-239.255.255.255";
}
}
break;
case "12":
case "7":
verifyType=checkUInteger32(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an Unsigned Integer.";
else errMsg=val+" is not an Unsigned Integer.";
}
break;
case "100":
if (val=="" || val==" " || val==null)
{
if (fldHeader)
errMsg=fldHeader+" must be a String.";
else errMsg="You must enter a String.";
}
break;
case "101":
verifyType=checkPortList(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be a Port List.";
else errMsg=val+" is not a Port List.";
}
break;
default: break;
}
if (false==isShowMsg && errMsg!="")
return "type";
return errMsg;
}
function checkOctetSize(fldName,isShowMsg,fldHeader,minRange, maxRange,typeParam)
{
var errMsg="";
var minVal=null;
var maxVal=null;
var formObj=document.forms[0].elements;
var obj=formObj[fldName];
var minMaxStr;
var minMaxlimit;
var isConCheck=true;
var tokensArr=[":","-",""];
var token="";
var valLen=0;
if (!isShowMsg)
{
if (isNaN(isShowMsg))
isShowMsg=true;
else
{
if (isShowMsg.length==0)
isShowMsg=true;
else isShowMsg=false;
}
}
var val=removeSpacesFromHeadAndTail(obj.value);
var vtFldArr=sliceString(fldName,"$");
if ((minRange && minRange!="") || (maxRange && maxRange!=""))
isConCheck=true;
else if (vtFldArr)
{
if (formObj[vtFldArr[0]+"$VT"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$VT"].value;
}
else if (formObj[vtFldArr[0]+"$bnd"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$bnd"].value;
}
}
else isConCheck=false;
if (isConCheck)
{
if ((minRange && minRange!="") || (maxRange && maxRange!=""))
{
errMsg=validateOctetSize(val,minRange,maxRange,fldHeader,typeParam);
}
else
{
vtFldValArr=sliceString(vtFldVal,";");
if (vtFldValArr)
{
for (var i=0; i<vtFldValArr.length; i++)
{
minMaxStr=null;
minMaxlimit=null;
if (vtFldValArr[i].indexOf("Range")!=-1)
{
var tmpValArr=sliceString(vtFldValArr[i],"[");
if (tmpValArr && tmpValArr[1])
{
var tmp=tmpValArr[1];
tmpValArr=sliceString(tmp,"]");
if (tmpValArr)
{
tmp=tmpValArr[0];
tmpValArr=sliceString(tmp,",");
if (tmpValArr && 2==tmpValArr.length)
{
minVal=parseInt(tmpValArr[0]);
maxVal=parseInt(tmpValArr[1]);
errMsg=validateOctetSize(val,minVal,maxVal,fldHeader,typeParam)
}
}
}
}
}
}
}
}
if (false==isShowMsg && errMsg!="")
return trans("OctetRange");
return errMsg;
}
function validateOctetSize(val,minVal,maxVal,fldHeader,typeParam)
{
var minMaxStr;
var minMaxlimit;
var tokensArr=[":","-",""];
var token="";
var valLen=0;
var errMsg="";
for (var j=0; j<tokensArr.length; j++)
{
if ((val).indexOf(tokensArr[j])!=-1)
{
token=tokensArr[j];
break;
}
}
if (typeParam!="MAC" && isNaN(typeParam))
typeParam="";
if (!(typeParam=="MAC" && token==tokensArr[2]))
{
var octetArr=sliceString(val,token);
if (token==tokensArr[2])
valLen=(octetArr.length)/2;
else valLen=octetArr.length;
if ( ( minVal !=null) && (valLen < minVal) )
{
minMaxStr=trans("minimum") ;
minMaxlimit=minVal;
}
if ( ( maxVal !=null) && (valLen > maxVal) )
{
minMaxStr=trans("maximum") ;
minMaxlimit=maxVal;
}
if (minMaxlimit!=null)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val=trans("blank");
if (fldHeader)
errMsg=val+" is out of range. The "+minMaxStr+" length for "+fldHeader+" is "+minMaxlimit+" octets.\n";
else errMsg=val+" is out of range. The "+minMaxStr+" length is "+minMaxlimit+" octets.\n";
}
return errMsg;
}
}
function validateOctetValRange(fldName,valMinRange,valMaxRange,fldHeader)
{
var formObj=document.forms[0].elements;
var val=removeSpacesFromHeadAndTail(formObj[fldName].value);
var minMaxStr;
var minMaxlimit;
var errMsg="";
if ( valMinRange!=null)
{
if (hexToDec(val)<hexToDec(valMinRange))
{
minMaxStr=trans("minimum") ;
minMaxlimit=valMinRange;
}
}
if ( valMaxRange!=null )
{
if (hexToDec(val)>hexToDec(valMaxRange))
{
minMaxStr=trans("maximum") ;
minMaxlimit=valMaxRange;
}
}
if (minMaxlimit!=null)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val=trans("blank");
if (fldHeader)
errMsg=val+" is out of range. The "+minMaxStr+" value for "+fldHeader+" is "+minMaxlimit+".\n";
else errMsg=val+" is out of range. The "+minMaxStr+" value is "+minMaxlimit+".\n";
}
return errMsg;
}
function getDefaultValue(fldName)
{
var formele=document.forms[0].elements;
var typeIndex=null;
var defValIndex=null;
var defVal=null;
var type=null;
var retVal="";
var isConCheck=true;
if (formele[fldName])
{
var vtFldArr=sliceString(fldName,"$");
if ( (vtFldArr) && (formele[vtFldArr[0]+"$VT"]!=null) )
{
vtFldVal=formele[vtFldArr[0]+"$VT"].value;
}
else isConCheck=false;
if (isConCheck)
{
vtFldValArr=sliceString(vtFldVal,";");
if (vtFldValArr)
{
for (i=0; i<vtFldValArr.length; i++)
{
if (vtFldValArr[i].indexOf("Type")!=-1)
typeIndex=i;
if (vtFldValArr[i].indexOf("Default value")!=-1)
{
defValIndex=i;
break;
}
}
if ( (defValIndex!=null) && (vtFldValArr[defValIndex].indexOf("Default value")!=-1) )
{
var tmpValArr=sliceString(vtFldValArr[defValIndex],"=");
if (tmpValArr && 2==tmpValArr.length)
{
defVal=tmpValArr[1];
if (defVal != null)
return defVal;
}
}
if ( (typeIndex!=null) && (vtFldValArr[typeIndex].indexOf("Type")!=-1) )
{
var tmpValArr=sliceString(vtFldValArr[typeIndex],"=");
if (tmpValArr && 2==tmpValArr.length)
{
type=tmpValArr[1];
if (type != null)
{
switch(type)
{
case "0":
case "6":
case "7":
case "8":
case "11":
case "12":
retVal=0;
break;
case "1":
case "2":
case "3":
retVal="";
break;
case "5":
retVal="0.0.0.0";
break;
default:
retVal="";
break;
}
return retVal;
}
}
}
}
}
}
return retVal;
}
function returnIntRange(fldName,isDisplayForm)
{
var minVal=null;
var maxVal=null;
var formObj=document.forms[0].elements;
var rangeStr="";
var rangeNum=0;
var isConCheck=true;
var vtFldArr=sliceString(fldName,"$");
if (vtFldArr)
{
if (formObj[vtFldArr[0]+"$VT"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$VT"].value;
}
else if (formObj[vtFldArr[0]+"$bnd"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$bnd"].value;
}
}
else isConCheck=false;
if (isConCheck)
{
vtFldValArr=sliceString(vtFldVal,";");
if (vtFldValArr)
{
for (var i=0; i<vtFldValArr.length; i++)
{
if (vtFldValArr[i].indexOf("Range")!=-1)
{
var tmpValArr=sliceString(vtFldValArr[i],"[");
if (tmpValArr && tmpValArr[1])
{
var tmp=tmpValArr[1];
tmpValArr=sliceString(tmp,"]");
if (tmpValArr)
{
tmp=tmpValArr[0];
tmpValArr=sliceString(tmp,",");
if (tmpValArr && 2==tmpValArr.length)
{
minVal=parseInt(tmpValArr[0]);
maxVal=parseInt(tmpValArr[1]);
if ( minVal !=null || maxVal !=null)
{
rangeNum++;
if ( (minVal !=null ) )
{
if (false==isDisplayForm && isDisplayForm!="" && isDisplayForm!=null)
rangeStr+=minVal+"-";
else rangeStr+="("+minVal+"-";
}
if ( ( maxVal !=null) )
{
if (false==isDisplayForm && isDisplayForm!="" && isDisplayForm!=null)
rangeStr+=maxVal+",";
else rangeStr+=maxVal+") ";
}
}
}
}
}
}
}
}
}
return rangeStr;
}
function length2(theString)
{
while (theString.length<2)
theString="0"+theString;
return theString;
}
function checkIPv6General(cntrl,withMsg,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)return true;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val);
val = changeIPv4ToHex(val);
if(val.trim()=="" && blankLegal)
return true;
else if(val.trim()=="")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
}
return false;
}
for(var i=0;i<val.length;i++)
{
var x=val.charCodeAt(i);
if ( (x < 48) || ((x > 58) && (x < 65)) || ((x > 70) && (x < 97)) || (x > 102))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
}
var consecColonsChar=0;
for(i=0;i<val.length-1;i++)
{
if(val.charAt(i)==":")
{
if(val.charAt(i+1)==":")
consecColonsChar++;
}
}
if(consecColonsChar>1)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
val = addZeroGroups(val);
var valArr = val.split(":");
if(valArr.length!=8)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12024");
}
return false;
}
for(i=0;i<valArr.length;i++)
{
if(valArr[i].length==0)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12025");
}
return false;
}
if(valArr[i].length>4)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
}
return true;
}
function checkIPv6Local(cntrl,withMsg,blankLegal,tokenObj,removeInterfaceFromIPAddr)
{
AlterContextMessage(cntrl);
if(IsUndefOrNull(removeInterfaceFromIPAddr))
removeInterfaceFromIPAddr = false;
val=getValueFromControl(cntrl);
if (removeInterfaceFromIPAddr&&val.indexOf("%")!=-1)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
if(val.trim()=="")
return true;
val=removeInterfaceFromIPAddress(val);
val = changeIPv4ToHex(val);
val = addZeroGroups(val);
var valArr=val.split(":");
if(valArr[0].toLowerCase()!="fe80")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12026");
}
return false;
}
if(valArr[1]!=0 || valArr[2]!=0 || valArr[3]!=0)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12027");
}
return false;
}
return true;
}
function checkIPv6Global(cntrl,withMsg,isAnyDisallowed,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)
return true;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val);
if(val.trim()=="" && blankLegal)
return true;
else if(val.trim()=="")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
}
return false;
}
if(isAnyDisallowed)
{
if(isIPv6AddrZeros(val))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12028");
}
return false;
}
}
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
if(checkIPv6Local(cntrl,false,blankLegal,tokenObj))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12029");
}
return false;
}
if(checkIPv6Multicast(cntrl,false))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12030");
}
return false;
}
return true;
}
function checkIPv6Unicast(cntrl,withMsg,isAnyDisallowed,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)
return true;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val);
if(val.trim()=="" && blankLegal)
return true;
else if(val.trim()=="")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
}
return false;
}
if(isAnyDisallowed)
{
if(isIPv6AddrZeros(val))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12028");
}
return false;
}
}
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
if(checkIPv6Multicast(cntrl,false))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12030");
}
return false;
}
return true;
}
function checkIPv6Multicast(cntrl,withMsg,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)
return true;
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val)
if(val.trim() == "")
return true;
var valArr=val.split(":");
if(valArr[0].toLowerCase()<"ff00")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12031");
}
return false;
}
return true;
}
function checkIP(stringToCheck)
{
if(stringToCheck=="") return true;
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(stringToCheck))return false;
stringToCheck=stringToCheck.split(".");
for(var i=0;i<4;i++)
if(stringToCheck[i]>255 || stringToCheck[i]<0 || (stringToCheck[i].length>1 && stringToCheck[i].charAt(0)=="0") )return false;
return true;
}
function changeIPv4ToHex(val)
{
var i=val.lastIndexOf(":")+1;
if(checkIP(val.substring(i)) && val.substring(i)!="")
val = val.substring(0,i) + "0:0";
return val;
}
function addZeroGroups(val)
{
var i=val.indexOf("::"),j=0;
if(i==-1) return val;
var colonsNum=0;
for(;j<val.length;j++)
{
if(val.charAt(j)==":")
colonsNum++;
}
if(colonsNum>=9) return val;
if(colonsNum==8 && i!=val.length-2 && i!=0) return val;
var tempString="";
while(8-colonsNum++!=0)
tempString+=":0"
val = val.substring(0,i) + tempString + val.substring(i+1);
if(i==0)
val = "0:" + val.substring(1);
if(i==j-2)
val = val + "0";
return val;
}
function addZeroGroup(str)
{
var strSplit = "";
if (str.substr(0,2) == "::" || str.substr(str.length-2,2) == "::")
strSplit = str.replace("::",":");
else
strSplit = str;
val_arr=strSplit.split(":");
if(val_arr.length==8)
{
for(var i=0;i<8;i++)
if(val_arr[i].length<4)
for(;val_arr[i].length<4;val_arr[i]="0"+val_arr[i]);
}
if(str.indexOf(".")!=-1)
{
ipv4=val_arr[val_arr.length-1].split(".");
val_arr[val_arr.length-1]=decToHexIn2Digits(ipv4[0])+decToHexIn2Digits(ipv4[1]);
val_arr.splice(val_arr.length,0,decToHexIn2Digits(ipv4[2])+decToHexIn2Digits(ipv4[3]));
}
if(str.indexOf("::")!=-1)
{
for(var i=0;val_arr.length<8;i++)
if(val_arr[i].length==0)
{
for(var j=i+1;val_arr.length<8;j++)
val_arr.splice(j,0,"0000");
}
}
for(var i=0;i<8;i++)
if(val_arr[i].length<4)
for(;val_arr[i].length<4;val_arr[i]="0"+val_arr[i]);
str=val_arr.join(":");
return str;
}
function decToHexIn2Digits(input)
{
var result = decToHex(input)
while(result.length <= 1)
result = '0' + result;
return result;
}
function isIPv6AddrZeros(str)
{
for(var i=0;i<str.length;i++)
{
if(str.charAt(i)!="0" && str.charAt(i)!=":")
return false;
}
return true;
}
function checkValidationSpecificValues(cntrl, legalVals, tokenObj, messageDictId)
{
AlterContextMessage(cntrl, false, "");
if(cntrl.disabled)return true;
legVal = false;
var val = cntrl.value;
for (var i=0;i < legalVals.length;i++)
{
if (val == legalVals[i])
{
legVal = true;
break;
}
}
if(val == "" && !legVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if (legVal == false)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, messageDictId);
return false;
}
return true;
}
function addSelectionList(formObj,selectName,optionField,whatToAdd,selectedVal)
{
var optionNo=1;
formObj=document.forms[0];
formObj.elements[selectName].remove(0);
formObj.elements[selectName][0]=null;
while (formObj.elements[optionField+"?"+optionNo]!=null)
{
if ((formObj.elements[optionField+"?"+optionNo].value!="")&&
(formObj.elements[optionField+"?"+optionNo].value!=_top.queryNA)){
text=formObj.elements[optionField+"?"+optionNo].value;
newOption = new Option(text);
formObj.elements[selectName].options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.text) == selectedVal )
{
newOption.selected = true ;
}
}
optionNo++;
}
}
if (whatToAdd!="")
{
newOption = new Option(trans("Add a new ")+whatToAdd);
formObj.elements[selectName].options[optionNo-1]=newOption;
}
}
function addRangeSelectionList(formObj,selectName,BeginOption,EndOption,whatToAdd,selectedVal)
{
formObj=document.forms[0];
var optionNo=0;
formObj.elements[selectName].remove(0);
formObj.elements[selectName][0]=null;
while ((BeginOption+optionNo)<(EndOption+1))
{
text=BeginOption+optionNo;
newOption = new Option(text);
formObj.elements[selectName].options[optionNo]=newOption;
if(opener){
firstIndex = parseInt(_top.trunkFirstIndex);
}
else{
firstIndex = parseInt(_top.trunkFirstIndex);
}
if(selectName=="trunk"){
formObj.elements[selectName].options[optionNo].value=firstIndex+parseInt(text)-1;
}
else
formObj.elements[selectName].options[optionNo].value=(optionNo+1);
if (selectedVal != "")
{
if ( newOption.text == selectedVal )
{
newOption.selected = true ;
}
}
optionNo++;
}
if (whatToAdd!="")
{
newOption = new Option(trans("Add a new ")+whatToAdd);
formObj.elements[selectName].options[optionNo-1]=newOption;
}
}
function addSelectionListFromArray(formObj,selectName,optionsArr,whatToAdd,selectedValFld)
{
var selectedVal="";
formObj=document.forms[0];
if (selectedValFld!="")
selectedVal=formObj.elements[selectedValFld].value;
formObj.elements[selectName].remove(0);
formObj.elements[selectName][0]=null;
for (var i=0; i<optionsArr.length; i++)
{
newOption = new Option(optionsArr[i]);
newOption.id = "opt"+getBaseName(selectName) + i;
formObj.elements[selectName].options[formObj.elements[selectName].options.length]=newOption;
if (selectedVal != "")
{
if ( newOption.text == selectedVal )
{
newOption.selected = true ;
}
}
}
if (whatToAdd!="")
{
newOption = new Option(trans("Add a new ")+whatToAdd);
formObj.elements[selectName].options[(formObj.elements[selectName].options.length)]=newOption;
}
if (selectedVal == "")
{
formObj.elements[selectName].selectedIndex=-1;
}
}
function filterSelectObject(fieldName)
{
selObject=document.forms[0].elements[fieldName];
for (i=selObject.options.length-1;i>=0;i--)
{
exist=false;
for (j=i-1;j>=0;j--)
if (selObject.options[i].text==selObject.options[j].text)
{
exist=true;
break;
}
if (exist)
selObject.options[i]=null;
}
}
function selectOptionByText(selectObj,selectedText)
{
if(!selectObj)
{
return;
}
for(var i=0; i<selectObj.options.length; i++)
{
if(selectObj.options[i].text == selectedText)
{
selectObj.options[i].selected=true;
break;
}
}
}
function selectOptionByValue(selectObj,selectedValue)
{
for(var i=0; i<selectObj.options.length; i++)
{
if(selectObj.options[i].value==selectedValue)
{
selectObj.options[i].selected = true;
return true;
}
}
return false;
}
function changeTrunkListText(fieldName)
{
var trunkSelObject=document.forms[0].elements[fieldName];
var realIndex, text;
var firstTrunkVal = parseInt(trunkSelObject.options[0].text);
for(i=0;trunkSelObject.options[i]!=null;i++){
realIndex = trunkSelObject.options[i].text;
text = parseInt(trunkSelObject.options[i].text)-firstTrunkVal+1
var newOption = new Option(text,realIndex);
trunkSelObject.options[i]=newOption;
}
trunkSelObject.selectedIndex=0;
}
function addSelectListFromTrunkArray(selectName,TrunkArr,selectedValFld,isGW,tokenObj,isContainLag)
{
var selectedVal="";
formObj=document.forms[0];
var slct,slctVF;
if(formObj)
{
slct=formObj.elements[selectName];
slctVF=formObj.elements[selectedValFld];
}
else
{
slct=document.getElementById(selectName);
slctVF=document.getElementById(selectedValFld);
}
if (selectedValFld!="")
selectedVal=slctVF.value;
for (var x=0; x<slct.length; x++)
{
slct.remove(x);
slct[x]=null;
}
var trunkFirstIndex = _top.trunkFirstIndex;
var NumberOfTrunks = _top.NumberOfTrunks;
for (var i=trunkFirstIndex; i<(trunkFirstIndex + NumberOfTrunks); i++)
{
if (TrunkArr[i])
{
newOption=new Option();
newOption.id="optLAG_" + i;
var lag = "";
if(isContainLag)
lag = "LAG ";
newOption.text = lag + (i-trunkFirstIndex+1).toString();
if (isGW)
newOption.value = tokenObj.getText("10015") + (i-trunkFirstIndex+1).toString();
else
newOption.value = i;
slct.options[slct.options.length]= newOption;
}
if (selectedVal != "")
{
if ( newOption.text == selectedVal )
{newOption.selected = true ;}
}
}
if ((slct.options.length == 0))
{slct.selectedIndex=-1;}
else if (selectedVal == "")
{slct.selectedIndex=0;}
}
function copySelect(srcSelect, dstSelect, append)
{
if (IsUndefOrNull(append))
append = false;
if (!append)
dstSelect.options.length = 0;
for(var i = 0; i < srcSelect.options.length; i++)
{
dstSelect.options[dstSelect.options.length] = new Option(srcSelect.options[i].text, srcSelect.options[i].value);
}
dstSelect.selectedIndex = srcSelect.selectedIndex;
dstSelect.disabled = srcSelect.disabled;
}
function selectQuery1Index(queryVTTbl)
{
if (window.event && window.event.srcElement && window.event.srcElement.name)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
}
var formObj=document.forms[0].elements;
var objSelect=null;
var queryString="";
var queryTblStr="";
var i=22;
var j=0;
objSelect=formObj[fieldName];
while ((j<fieldName.length)&&(fieldName.charAt(j)!="$"))
j++;
if (queryVTTbl)
queryTblStr="["+queryVTTbl+"]";
queryString="?"+queryTblStr+"Query:"+fieldName.substr(0,j)+'='+objSelect.options[objSelect.selectedIndex].text;
indexOfEndPageName=((document.location.href).indexOf(".htm"))+3;
queryString=(document.location.href).slice(0,(indexOfEndPageName+1))+queryString;
document.location.href=queryString;
}
function indexSign(selectObject){
var i=0;
formele=document.forms[0].elements;
selectName=formele[selectObject];
queryObject=getBaseName(selectObject)+"$query"
while (selectName.options[i]!=null)
{
if ((selectName.options[i].text == formele[queryObject].value)||
(notIE && selectName.options[i].text=="\n" && formele[queryObject].value==""))
{
selectName.selectedIndex=i;
break;
}
i++;
}
if(formele[queryObject].value==_top.queryNA)
selectName.selectedIndex=-1;
}
function selectPort1Index(queryVTTbl)
{
if (window.event && window.event.srcElement && window.event.srcElement.name)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
}
var formObj=document.forms[0].elements;
var objSelect=null;
var queryString="";
var queryTblStr="";
var i=28;
var j=0;
objSelect=formObj[fieldName];
while ((j<fieldName.length)&&(fieldName.charAt(j)!="$"))
j++;
if (queryVTTbl)
queryTblStr="["+queryVTTbl+"]";
queryString="?"+queryTblStr+"Query:"+fieldName.substr(0,j)+'='+objSelect.options[objSelect.selectedIndex].value;
indexOfEndPageName=((document.location.href).indexOf(".htm"))+3;
queryString=(document.location.href).slice(0,(indexOfEndPageName+1))+queryString;
document.location.href=queryString;
}
function portSign(selectObject, mibObject)
{
var i=0;
var tempObject;
formele=document.forms[0].elements;
if (mibObject != null)
{
tempObject = mibObject;
}
else
{
tempObject = selectObject;
}
selectName=formele[selectObject];
queryObject=getBaseName(tempObject)+"$query";
while (selectName.options[i]!=null)
{
if (selectName.options[i].value == parseInt(formele[queryObject].value))
{
selectName.selectedIndex=i;
break;
}
i++;
}
if(formele[queryObject].value==_top.queryNA)
selectName.selectedIndex=-1;
}
function clickRadio()
{
var fieldName=null;
var formObj=document.forms[0].elements;
var objRadio;
var i=0;
var callingEvent;
var fieldName;
var callingEventElement;
if (window.event)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
callingEventElement=callingEvent.srcElement;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
callingEventElement=callingEvent.target;
}
if (callingEventElement && callingEventElement.name)
{
objRadio=formObj[fieldName];
if(callingEventElement.value==1)
{
formObj["port"].disabled=false
}
else
{
formObj["port"].disabled=true;
formObj["port"].selectedIndex=0;
}
if(callingEventElement.value==2)
{
formObj["trunk"].disabled=false;
}
else
{
formObj["trunk"].disabled=true;
formObj["trunk"].selectedIndex=0;
}
if (objRadio.length==3)
{
if(callingEventElement.value==3)
{
formObj["dot1qVlanIndex$select"].disabled=false;
}
else
{
formObj["dot1qVlanIndex$select"].disabled=true;
formObj["dot1qVlanIndex$select"].selectedIndex=0;
}
}
}
}
function clickStackRadio()
{
var fieldName=null;
var formObj=document.forms[0].elements;
var objRadio;
var i=0;
var callingEvent;
var fieldName;
var callingEventElement;
if (window.event)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
callingEventElement=callingEvent.srcElement;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
callingEventElement=callingEvent.target;
}
if (callingEventElement && callingEventElement.name)
{
objRadio=formObj[fieldName];
if(callingEventElement.value==1)
{
formObj["port"].disabled=false;
if (formObj["rlPhdModuleIndex$select"])
formObj["rlPhdModuleIndex$select"].disabled=false;
}
else
{
formObj["port"].disabled=true;
formObj["port"].selectedIndex=0;
if (formObj["rlPhdModuleIndex$select"])
{
formObj["rlPhdModuleIndex$select"].disabled=true;
formObj["rlPhdModuleIndex$select"].selectedIndex=0;
}
}
if(callingEventElement.value==2)
{
formObj["trunk"].disabled=false;
}
else
{
formObj["trunk"].disabled=true;
formObj["trunk"].selectedIndex=0;
}
if (objRadio.length==3)
{
if(callingEventElement.value==3)
{
formObj["dot1qVlanIndex$select"].disabled=false;
}
else
{
formObj["dot1qVlanIndex$select"].disabled=true;
formObj["dot1qVlanIndex$select"].selectedIndex=0;
}
}
}
}
function DisableUnchanged(formObj, entryStartStr, FieldsToCheck, tokenObj) {
if (tokenObj == null)
tokenObj = pgTkn;
var i = 1;
formObj = document.forms[0];
var wasChangedCounter = 0;
fieldsEntrySize = 0;
rawValue = 2500;
while (formObj.elements[entryStartStr + "?" + i] != null) {
if ((_top.uniqForSecurityAuthnRadius == true) || ((agent() == 'IE 9') || (agent() == 'IE 10')) && !_top.dscpToQueueUniqVar) {
countEntrySize(i, formObj, FieldsToCheck);
wasChangedCounter++;
}
else {
if (EntryDidnotChanged(i, formObj, FieldsToCheck)) {
DisableEntry(i, formObj, FieldsToCheck);
}
else {
countEntrySize(i, formObj, FieldsToCheck)
wasChangedCounter++;
}}
i++;
}
rawValue += (calculateRawValue(FieldsToCheck) * wasChangedCounter) + fieldsEntrySize;
if ((rawValue) > BufferSize) {
tokenObj.displayLocalizedPageMessage("pgMsg", "13033", 4, true, [[TKN_NUMBER, (Math.round((rawValue) / BufferSize) + 1)]]);
return 0;
}
return 1;
}
function calculateRawValue(FieldsToCheck)
{
var fieldsNameSize=0;
for (i=0;i<FieldsToCheck.length;i++)
fieldsNameSize+=FieldsToCheck[i].length+18;
return (fieldsNameSize);
}
function EntryDidnotChanged(index,formObj,FieldsToCheck)
{
var i;
var changed=true;
var result=true;
formObj=document.forms[0];
for (i=0;i<FieldsToCheck.length;i++)
{
changed = isChanged(formObj.elements[FieldsToCheck[i] + "?" + index]);
if (changed)
result=false;
}
return result;
}
function DisableEntry(index,formObj,FieldsToCheck)
{
var i;
for (i=0;i<FieldsToCheck.length;i++)
{
formObj.elements[FieldsToCheck[i]+"?"+index].disabled=true;
}
}
function countEntrySize(index,formObj,FieldsToCheck)
{
var i;
for (i=0;i<FieldsToCheck.length;i++)
{
fieldsEntrySize+=formObj.elements[FieldsToCheck[i]+"?"+index].value.length;
}
}
function isChanged(obj)
{
if ((typeof obj.type != "string") && (obj.length > 0) && (obj[0] != null) && (obj[0].type=="radio")){
for (var i=0; i<obj.length; i++) {
if (obj[i].checked != obj[i].defaultChecked) { return true; }
}
return false;
}
if ((obj.type=="text") || (obj.type=="textarea"))
{ return (obj.value != obj.defaultValue); }
if (obj.type == "hidden") {
var isIE = ((!document.evaluate) && (agent() != 'IE 11')) ? true : false;
if (isIE) {
if (document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)])
document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].disabled = true;
var firstCheck = (obj.value != obj.defaultValue);
var secondCheck;
try {secondCheck = (obj.value != document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].value);}
catch (e) { secondCheck = firstCheck; }
finally {return (firstCheck == secondCheck) ? firstCheck : secondCheck;}
}
else if (agent() == 'IE 11') {
if (document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)]) {
document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].disabled = true;
return (obj.value != document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].value);
}
else {
return true;
};
}
else {
if (document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)]) {
document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].disabled = true;
return (obj.value != document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].value);
}
else {
return true;
};
}
}
if (obj.type=="checkbox") {
return (obj.checked != obj.defaultChecked);
}
if (obj.type=="select-one") {
if (obj.options.length > 0) {
var x=0;
for (var i=0; i<obj.options.length; i++) {
if (obj.options[i].defaultSelected) { x++; }
}
if (x==0 && obj.selectedIndex==0) { return false; }
for (var i=0; i<obj.options.length; i++) {
if (obj.options[i].selected != obj.options[i].defaultSelected) {
return true;
}
}
}
return false;
}
if (obj.type=="select-multiple") {
if (obj.options.length > 0) {
for (var i=0; i<obj.options.length; i++) {
if (obj.options[i].selected != obj.options[i].defaultSelected) {
return true;
}
}
}
return false;
}
return false;
}
function disableUnchangeFields(formele,FieldsToCheck,suffix)
{
formele=document.forms[0].elements;
formObj=document.forms[0];
var wasChangedCounter=0;
fieldsEntrySize=0;
rawValue=2000;
var isChange;
switch (suffix)
{
case "query":
{
isChange=false;
for (i=0; i<FieldsToCheck[0].length; i++)
{
if (!isChanged(formele[FieldsToCheck[0][i]]))
{
formele[FieldsToCheck[0][i]].disabled=true;
}
else isChange=true;
}
if (!isChange)
{
for (var j=0; j<FieldsToCheck[1].length; j++)
formele[FieldsToCheck[1][j]].disabled=true;
}
break;
}
case "repeat":
{
var i = 1;
while (formele[FieldsToCheck[0][0]+"?"+i]!=null)
{
isChange=false;
for (j=0; j<FieldsToCheck[0].length; j++)
{
if (!isChanged(formele[FieldsToCheck[0][j]+"?"+i]))
{
formele[FieldsToCheck[0][j]+"?"+i].disabled=true;
}
else
{
fieldsEntrySize+=formele[FieldsToCheck[0][j]+"?"+i].value.length;
isChange=true;
}
}
if (!isChange)
{
for (var j=0; j<FieldsToCheck[1].length; j++)
formele[FieldsToCheck[1][j]+"?"+i].disabled=true;
}
else
{
countEntrySize(i,formObj,FieldsToCheck[1])
wasChangedCounter++;
}
i++;
}
rawValue+=((calculateRawValue(FieldsToCheck[1])+calculateRawValue(FieldsToCheck[0]))*wasChangedCounter)+fieldsEntrySize;
if ((rawValue)>BufferSize)
{
msg="You have changed too many objects. The browser cannot send all data\n";
msg+="simultaneously. Please send your request at "+(Math.round((rawValue)/BufferSize)+1);
msg+=" different requests.";
alert(msg);
return 0;
}
return 1;
break;
}
default: break;
}
}
function refreshOpener()
{
if (_top.mainFrame.location && _top.mainFrame.location.reload) {
_top.mainFrame.location.reload(true);
}
else if (_top.mainFrame.location && _top.mainFrame.location.href) {
_top.mainFrame.location.href = _top.mainFrame.location.href;
}
else if (_top.mainFrame.src) {
_top.mainFrame.src = _top.mainFrame.src;
}
}
function refreshOpenerPaging(url)
{
_top.mainFrame.location.href = url;
}
function refreshMainFrameWithFilter(filter, time)
{
if(navigator.appName == "Netscape")
{
if(opener.document.defaultView.parent.mainFrame)
{
opener.document.defaultView.parent.mainFrame.setTimeout("reloadWithNewFilter(" + filter + ")",time);
}
}
else if((navigator.appName).indexOf("Microsoft") != -1)
{
if(opener.document.parentWindow.parent.mainFrame)
{
opener.document.parentWindow.parent.mainFrame.setTimeout("reloadWithNewFilter(" + filter + ")",time);
}
}
}
function reloadWithNewFilter(filter)
{
if(navigator.appName == "Netscape")
{
document.defaultView.parent.mainFrame.location.replace("../snmpSecur/snmp_secur_views_m.htm?Filter:vacmViewTreeFamilyViewName='" + filter + "'");
}
else if((navigator.appName).indexOf("Microsoft") != -1)
{
document.parentWindow.parent.mainFrame.location.replace("../snmpSecur/snmp_secur_views_m.htm?Filter:vacmViewTreeFamilyViewName='" + filter + "'");
}
}
function checkFocus()
{
try
{
if(_top.fldToCheck != "")
{
if(document.forms[0].elements[_top.fldToCheck])
{
document.forms[0].elements[_top.fldToCheck].focus();
}
}
}
catch(e){}
}
function checkForErrors()
{
if (_top.fldToCheck!="")
{
if (!(document.forms[0].elements[_top.fldToCheck]))
{
_top.fldToCheck="";
}
}
}
function doesStringOverlapExist(str1, str2)
{
for(var i = 0; i < str1.length; i++)
{
if(str2.indexOf(str1.charAt(i)) != -1)
return true;
}
return false;
}
function sliceString(stringValue,token)
{
var arr = new Array();
arr = stringValue.split(token);
return arr;
}
function findIndex(selectFieldName)
{
var formObj=document.forms[0];
var i=0;
var IndexNotFound=true;
selectName=formObj.elements[selectFieldName];
while ((selectName.options[i]!=null) && (IndexNotFound))
{
if (newIndex==(selectName.options[i].text))
{
newIndex++;
i++
}
else
IndexNotFound=false;
}
return newIndex;
}
function getBaseName(selectObject)
{
j=0;
var queryObject;
while ((j<selectObject.length)&&(selectObject.charAt(j)!="$"))
j++;
queryObject=selectObject.substr(0,j);
return queryObject;
}
function getSuffix(objectName)
{
j=0;
while ((j<objectName.length)&&(objectName.charAt(j)!="?"))
j++;
if (j==objectName.length)
return "";
else
return objectName.substr(j);
}
function removeSpacesFromHeadAndTail(val)
{
val = val + "";
while (val.length > 0)
{
if (val.charAt(0) == ' ' || val.charAt(0) == '\t')
val = val.substr(1);
else
break;
}
while (val.length > 0)
{
if (val.charAt(val.length - 1) == ' ' || val.charAt(val.length - 1) == '\t')
val = val.substr(0, val.length - 1);
else
break;
}
return val;
}
function isSpace(str)
{
for (var i=0; i<str.length; i++)
{
if (str.charAt(i)!=' ' && str.charAt(i)!='' && str.charAt(i)!='\t' && str.charAt(i)!='\n')
return false;
}
return true;
}
function refresh()
{
var filter = "";
if(document.forms[0].restoreUrl)
{
filter += adjustStringToRefresh(document.forms[0].restoreUrl.value);
}
document.location.href = (document.location.pathname + "?" + filter);
}
function adjustStringToFilter(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='"')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\'))
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else if (theString.charAt(i)=='+') result+="%2B";
else result+=theString.charAt(i);
}
else result+='\\'+theString.charAt(i);
}
return result;
}
function adjustStringToQuery(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='"')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\')&&(theString.charAt(i)!='@'))
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else result+=theString.charAt(i);
}
else result+='\\'+theString.charAt(i);
}
return result;
}
function adjustStringToRefresh(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else result+=theString.charAt(i);
}
return result;
}
function adjustStringToUTF8(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\')&&(theString.charAt(i)!='@'))
{
result+=encodeURIComponent(theString.charAt(i));
}
else
{
result+='\\'+theString.charAt(i);
}
}
return result;
}
function convertValueforDisplay(str)
{
var convertedString = "";
for(var i=0;i<str.length;i++)
{
if(str.charAt(i) == '<')
convertedString += "\&lt;";
else
if(str.charAt(i) == '>')
convertedString += "\&gt;";
else
convertedString += str.charAt(i);
}
return convertedString;
}
function trans(param) {return param;}
function Trans(param) {return param;}
function createNewWindow(urlString,windowName,windowWidth,windowHeight,windowLeft,windowTop,enableScroll,enableResize)
{
var flagEnableScroll=(enableScroll=='yes'||enableScroll==true)?"yes":"no";
var flagEnableResize=(enableResize=='yes'||enableResize==true)?"yes":"no";
return window.open(urlString, windowName, 'width='+windowWidth+', height='+windowHeight+', left='+windowLeft+', top='+windowTop+', scrollbars='+flagEnableScroll+', resizable='+flagEnableResize);
}
function updateIPControls(radioFormat, radioType, txtIP)
{
formele = document.forms[0].elements;
objRadioIPv4=formele[radioFormat][1];
objRadioIPv6=formele[radioFormat][0];
objRadioLinkLocal=formele[radioType][0];
objRadioGlobal=formele[radioType][1];
objTxtIP=formele[txtIP];
if(objRadioIPv4.checked==true)
{
objRadioLinkLocal.disabled=true;
objRadioGlobal.disabled=true;
objTxtIP.maxLength=15;
}
else
{
objRadioLinkLocal.disabled=false;
objRadioGlobal.disabled=false;
objTxtIP.maxLength=45;
}
objTxtIP.value="";
}
function setUnitFilter(tokenObj,cols,ifLAGs,keyIndex,logicalTableName,slctName,existUnitCntrlName)
{
if (typeof(slctName) == "undefined")
slctName = 'slctFilter';
if (typeof(existUnitCntrlName) == "undefined")
existUnitCntrlName = null;
document.write('<tr id="trFilter">');
document.write('<th colspan="' + cols + '">');
document.write('<table>');
document.write('<tr class="filterRow">');
document.write('<td>');
tokenObj.createLocalizedFilterLabel("2",slctName);
document.write('</td><td>');
tokenObj.createLocalizedUnitSelector(slctName,existUnitCntrlName,ifLAGs);
document.write('</td><td>');
tokenObj.CreateLocalizedTableHeaderButton("10061","applyInterfaceFilter('" + slctName + "','" + keyIndex + "','rlPhdPortsModuleNumber','[" + logicalTableName + "]');" , "btnGo");
document.write('</td></tr></table></th></tr>');
if(_top.isStandAlone && !ifLAGs)
{
document.getElementById("trFilter").style.display = "none";
document.getElementById(slctName).disabled = true;
}
}
function initFilterUnitSlct(url,repeatModuleValue,slctName)
{
if (typeof(slctName) == "undefined")
slctName = 'slctFilter';
var slct = document.getElementById(slctName);
if (url.indexOf('ModuleNumber') != -1)
{
if(_top.NumberOfModules>1)
selectOptionByValue(slct,repeatModuleValue);
else
slct.selectedIndex = 0;
}
else
selectOptionByValue(slct,"lag");
}
function removeInterfaceFromIPAddress(string)
{
var i=string.indexOf('%');
if(i>0)
string = string.substring(0,i);
return string;
}
function get_tagValue(XMLstr,tagName)
{
var ret='';
var pos=XMLstr.indexOf("<"+tagName+">");
if (pos>0){
var pos1=XMLstr.indexOf(">",pos);
if (pos1>=0){
var pos2=XMLstr.indexOf("<",pos1);
ret = XMLstr.substr(pos1+1,pos2-pos1-1);
}
}
return ret;
}
function getPortNumberFromName(portName)
{
var portNumber=0;
var nameFound=false;
for (var i=0; i<=_top.NumberOfPorts; i++)
{
if (portName==_top.portsNamesArr[i] || portName==_top.portsLongNamesArr[i] || portName==_top.actualNamesArr[i])
{
portNumber=i;
nameFound=true;
break;
}
}
if (!nameFound)
{
for (var j=0; (!nameFound)&&(j<_top.oobPortsNamesArr.length || j<_top.lbpPortsNamesArr.length); j++)
{
if (portName==_top.oobPortsNamesArr[j])
{
portNumber=_top.oobPortsIndexArray[j];
nameFound=true;
break;
}
else if (portName==_top.lbpPortsNamesArr[j])
{
portNumber=_top.lbpPortsIndexArray[j];
nameFound=true;
break;
}
}
}
if (portNumber>0)
return portNumber;
else return parseInt(portName);
}
function getPortNumberFromActualName(portName)
{
var portNumber=0;
var portName = portName.toLowerCase();
var nameFound=false;
for (var i=0; i<=_top.NumberOfPorts; i++)
{
if (portName==_top.actualNamesArr[i])
{
portNumber=i;
nameFound=true;
break;
}
}
if (!nameFound)
{
for (var j=0; (!nameFound)&&(j<_top.oobPortsNamesArr.length || j<_top.lbpPortsNamesArr.length); j++)
{
if (portName==_top.oobPortsNamesArr[j])
{
portNumber=_top.oobPortsIndexArray[j];
nameFound=true;
break;
}
else if (portName==_top.lbpPortsNamesArr[j])
{
portNumber=_top.lbpPortsIndexArray[j];
nameFound=true;
break;
}
}
}
if (portNumber>0)
return portNumber;
else return parseInt(portName);
}
function getPortNameFromNumber(portNumber,isLong)
{
var portName=0;
if (_top && portNumber<=_top.NumberOfPorts && _top.portsNamesArr[portNumber])
return (isLong)?_top.portsLongNamesArr[portNumber]:_top.portsNamesArr[portNumber];
else if (_top && _top.oobNumOfPorts>0 && portNumber>=_top.oobFirstIndex && _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex])
return _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex];
else if (_top && _top.lbpNumOfPorts>0 && portNumber>=_top.lbpFirstIndex && _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex])
return _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex];
else return portNumber;
}
function getRealPortNameFromNumber(portNumber)
{
var portName=0;
if (_top && portNumber<=_top.NumberOfPorts && _top.actualNamesArr[portNumber])
return _top.actualNamesArr[portNumber];
else if (_top && _top.oobNumOfPorts>0 && portNumber>=_top.oobFirstIndex && _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex])
return _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex];
else if (_top && _top.lbpNumOfPorts>0 && portNumber>=_top.lbpFirstIndex && _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex])
return _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex];
else return portNumber;
}
function isPresentPort(port)
{
var portNumber=0;
if (checkUInteger32(port+"") && parseInt(port)>0 && parseInt(port)<=_top.NumberOfPorts)
portNumber=parseInt(port);
else portNumber=getPortNumberFromName(port);
if (portNumber<=_top.existedPortsArr.length)
return (_top.existedPortsArr[portNumber]);
else if (_top.oobNumOfPorts && _top.oobNumOfPorts>0 && portNumber<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
return (_top.oobExistedPortsArr[portNumber-_top.oobFirstIndex]);
}
else if (_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && portNumber<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
return (_top.lbpExistedPortsArr[portNumber-_top.lbpFirstIndex]);
}
}
function addPresentPortsSelectionList(formObj,selectName,selectedVal,indexesOrNames,filterByModuleFlag, filterByModuleNum, isOOB, isLBP)
{
var formObj=document.forms[0];
var optionNo=1;
var val;
var text="";
var slct;
if(formObj)
slct=formObj.elements[selectName];
else
slct=document.getElementById(selectName);
slct.length=0
if (indexesOrNames!="i" && indexesOrNames!="n")
indexesOrNames="i" ;
if (!filterByModuleFlag) filterByModuleFlag=false;
for (var i=1; i<=docObj.NumberOfPorts; i++)
{
if ( (docObj.existedPortsArr[i]) && (!(filterByModuleFlag) || (filterByModuleFlag && (docObj.moduleNumPerPortArr[i]==filterByModuleNum))) )
{
val=i;
if (indexesOrNames=="n")
text=docObj.portsNamesArr[i];
else text=(i)+"";
newOption = new Option(text,val);
slct.options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.value)==selectedVal || newOption.text==selectedVal)
{
newOption.selected = true ;
}
}
optionNo++;
}
}
if (isOOB!=null && isOOB!="" && isOOB==true && docObj.oobNumOfPorts && docObj.oobNumOfPorts>0)
{
for (var j=0; j<docObj.oobPortsIndexArray.length; j++)
{
if (docObj.oobExistedPortsArr[j]==true)
{
if (indexesOrNames=="n")
text=docObj.oobPortsNamesArr[j];
else text=docObj.oobPortsIndexArray[j];+"";
val=docObj.oobPortsIndexArray[j];
newOption = new Option(text,val);
slct.options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.value)==selectedVal || newOption.text==selectedVal)
{
newOption.selected = true ;
}
}
optionNo++;
}
}
}
if (isLBP!=null && isLBP!="" && isLBP==true && docObj.lbpNumOfPorts && docObj.lbpNumOfPorts>0)
{
for (var j=0; j<docObj.lbpPortsIndexArray.length; j++)
{
if (docObj.lbpExistedPortsArr[j]==true)
{
if (indexesOrNames=="n")
text=docObj.lbpPortsNamesArr[j];
else text=docObj.lbpPortsIndexArray[j];+"";
val=docObj.lbpPortsIndexArray[j];
newOption = new Option(text,val);
slct.options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.value)==selectedVal || newOption.text==selectedVal)
{
newOption.selected = true ;
}
}
optionNo++;
}
}
}
}
function relatedTrunk(port)
{
if (opener)
if (opener.opener)
if (opener.opener.opener) return opener.opener.opener.top.relatedTrunksArr[port];
else return opener.opener.top.relatedTrunksArr[port];
else return opener.top.relatedTrunksArr[port];
else return top.relatedTrunksArr[port];
}
function displayInterface(indexField,portNameField,rowNum)
{
var formelem = document.forms[0];
var interfaceValue;
var interfaceText_ML;
interfaceValue = parseInt(formelem[indexField+"?"+rowNum].value);
var numOfTrunks,numOfPorts;
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top.oobNumOfPorts>1)
interfaceText_ML="OOB "+(interfaceValue-_top.oobFirstIndex+1);
else interfaceText_ML="OOB";
}
else if(_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top.lbpNumOfPorts>1)
interfaceText_ML="LBP "+(interfaceValue-_top.lbpFirstIndex+1);
else interfaceText_ML="LBP";
}
else if (interfaceValue>=200000)
{
interfaceText_ML="DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue>=100000)
{
interfaceText_ML="VLAN "+(interfaceValue-100000+1);
}
}
else{
if(interfaceValue>numOfPorts){
interfaceText_ML="LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else{
interfaceText_ML = formelem[portNameField+"?"+rowNum].value;
}
}
document.write(interfaceText_ML);
}
function getInterfaceNameByIndex(interfaceValue,isLong)
{
var numOfTrunks,numOfPorts;
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top.oobNumOfPorts>1)
interfaceText_ML="OOB "+(interfaceValue-_top.oobFirstIndex+1);
else interfaceText_ML="OOB";
}
else if(_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top.lbpNumOfPorts>1)
interfaceText_ML="LBP "+(interfaceValue-_top.lbpFirstIndex+1);
else interfaceText_ML="LBP";
}
else if (interfaceValue>=200000)
{
interfaceText_ML="DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue>=100000)
{
interfaceText_ML="VLAN "+(interfaceValue-100000+1);
}
}
else{
if(interfaceValue>numOfPorts){
interfaceText_ML="LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else{
interfaceText_ML = getPortNameFromNumber(interfaceValue, isLong);
}
}
return interfaceText_ML;
}
function getRealInterfaceNameByIndex(interfaceValue,isLong)
{
var numOfTrunks,numOfPorts;
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top.oobNumOfPorts>1)
interfaceText_ML="OOB "+(interfaceValue-_top.oobFirstIndex+1);
else interfaceText_ML="OOB";
}
else if(_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top.lbpNumOfPorts>1)
interfaceText_ML="LBP "+(interfaceValue-_top.lbpFirstIndex+1);
else interfaceText_ML="LBP";
}
else if (interfaceValue>=200000)
{
interfaceText_ML="DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue>=100000)
{
interfaceText_ML="VLAN "+(interfaceValue-100000+1);
}
}
else{
if(interfaceValue>numOfPorts){
interfaceText_ML="LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else{
interfaceText_ML = getRealPortNameFromNumber(interfaceValue, isLong);
}
}
return interfaceText_ML;
}
function displayTrunk(indexField, rowNum)
{
var formelem = document.forms[0];
var trunkVal,trunkText;
var numOfPorts;
trunkVal = formelem[indexField+"?"+rowNum].value;
if(opener)
{
trunkText = parseInt(trunkVal)-parseInt(opener.top.trunkFirstIndex)+1;
}
else
{
trunkText = parseInt(trunkVal)-parseInt(_top.trunkFirstIndex)+1;
}
document.write(trunkText);
}
function getInterfaceName(fieldName, managementIfIndex, isLong)
{
var formelem = document.forms[0];
var interfaceValue,interfaceText_ML;
var numOfPorts,numOfTrunks;
if (formelem && formelem.elements[fieldName])
interfaceValue = getInterfaceValueWithMgmtInterface(fieldName, managementIfIndex);
var numOfTrunks,numOfPorts;
if (_top)
{
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
}
if(interfaceValue > (parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top && _top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue >= _top.oobFirstIndex && interfaceValue < (_top.oobFirstIndex + _top.oobNumOfPorts))
{
if (_top && _top.oobNumOfPorts>1)
interfaceText_ML = "OOB "+(interfaceValue - _top.oobFirstIndex+1);
else
interfaceText_ML = "OOB";
}
else if(_top && _top.lbpNumOfPorts && _top.lbpNumOfPorts > 0 && interfaceValue >= _top.lbpFirstIndex && interfaceValue < (_top.lbpFirstIndex + _top.lbpNumOfPorts))
{
if (_top && _top.lbpNumOfPorts>1)
interfaceText_ML = "LBP "+(interfaceValue - _top.lbpFirstIndex+1);
else
interfaceText_ML = "LBP";
}
else if (interfaceValue >= 200000)
{
interfaceText_ML = "DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue >= 100000)
{
interfaceText_ML = "VLAN "+(interfaceValue-100000+1);
}
}
else
{
if(interfaceValue>=_top.trunkFirstIndex)
{
interfaceText_ML = "LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else
{
interfaceText_ML = getPortNameFromNumber(interfaceValue, isLong)
}
}
return (interfaceText_ML);
}
function getIfIndexByName(interfaceName)
{
for(var i = 0; i < _top.actualNamesArr.length; i++)
{
if(_top.actualNamesArr[i] == interfaceName)
return i;
}
return -1;
}
function getInterfaceValueWithMgmtInterface(fieldName, managementIfIndex)
{
var interfaceValue = parseInt(document.forms[0].elements[fieldName].value);
if(managementIfIndex == null)
return interfaceValue;
else if(interfaceValue != _top.ManagementInterfaceLogicalifIndex)
return interfaceValue;
else
{
if(managementIfIndex == _top.ManagementInterfaceDefaultVlanifIndex)
interfaceValue = (parseInt(_top.defaultVlanId)+99999);
else
interfaceValue = managementIfIndex;
}
return interfaceValue;
}
function getValueFromControl(cntrl)
{
switch(cntrl.tagName)
{
case "INPUT":
{
cntrl.value = cntrl.value.trim();
return cntrl.value;
}
case "SELECT":
return cntrl.options[cntrl.selectedIndex].text.trim();
default:
return cntrl.value.trim();
}
}
function init()
{
if(document.forms[0])document.forms[0].autocomplete="off";
}
function extract_left(total_chars) {return this.substring(0, total_chars);}
function extract_right(total_chars) {return this.substring(this.length - total_chars);}
String.prototype.right = extract_right
String.prototype.left = extract_left
String.prototype.trim = function trim_spaces(from_where)
{
var temp_string = this;
if (arguments.length == 0)from_where = "BOTH";
if (from_where.toUpperCase() == "LEFT" || from_where == "BOTH")while (temp_string.left(1) == " ") temp_string = temp_string.substring(1);
if (from_where.toUpperCase() == "RIGHT" || from_where == "BOTH")while (temp_string.right(1) == " ")temp_string = temp_string.substring(0, temp_string.length - 1);
return temp_string;
}
String.prototype.RemoveSpaces = function(blnIgnoreCarriage, blnIgnoreInnerWhiteSpace) {
var temp = this.replace(/^\s*/,"");
temp = temp.replace(/\s*$/,"");
blnIgnoreCarriage = blnIgnoreCarriage ? true : false;
blnIgnoreInnerWhiteSpace = blnIgnoreInnerWhiteSpace ? true : false;
if(blnIgnoreCarriage && blnIgnoreInnerWhiteSpace) {;}
else if(blnIgnoreCarriage&&!blnIgnoreInnerWhiteSpace) {
temp = temp.replace(/\t+/g," ");
temp = temp.replace(/ +/g," ");
}
else if(!blnIgnoreCarriage && blnIgnoreInnerWhiteSpace) {
temp=temp.replace(/(\n\r)+/g,"");
}
else if(!blnIgnoreCarriage && !blnIgnoreInnerWhiteSpace) {
temp=temp.replace(/\s+/g," ");
}
if(temp==" ") { temp=""; }
return temp;
};
function getHelp()
{
if (opener)opener.top.document.getElementById('hlpButton').click();
}
function help()
{
var strHref=document.getElementById('mainFrame').contentWindow.location.pathname;
strHref=strHref.substr(strHref.lastIndexOf("/")+1);
strHref=strHref.slice(0,-4)+ "_hlp.htm"
createNewWindow('../help/'+ strHref,'','540','540','20','20','yes','yes')
}
function replaceEnter(str)
{
var regExp = new RegExp(String.fromCharCode(13)+"+","g");
var regExp1 = new RegExp(String.fromCharCode(10)+"+","g");
return str.replace(regExp1," ").replace(regExp," ");
}
function checkAdvanced(cntrlName,toCheck,tokenObj)
{ var arr;
var cntrl=formele[cntrlName];
var vlue=cntrl.value
if(!toCheck) {arr=new Array(" ","<","&");}
else{arr=toCheck.split(';');}
for (var i=0;i<arr.length;i++)
{ if(cntrl.value.indexOf(arr[i])>-1)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12055");
return false;
}
}
return true;
}
function firstEntryBetween(initStr,strtStr,endStr)
{ var intStrtStr=initStr.indexOf(strtStr);
var strtFORendStr=intStrtStr+ strtStr.length;
var intEndStr=endStr?initStr.indexOf(endStr,strtFORendStr):-2;
if (intStrtStr==-1 || intEndStr==-1)return "-1";
return intEndStr==-2?initStr.substring(strtFORendStr):initStr.substring(strtFORendStr,intEndStr);
}
function getCurrentTextFromSelect(selectBox)
{
if(!selectBox)return null;
return selectBox.selectedIndex==-1?"":selectBox.options[selectBox.selectedIndex].text;
}
function checkValidationIP(cntrl,notZeros,canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
var currEdgeOctet = "";
var isNetworkEdge = true;
tokenObj.removeToken(msgNodeId);
var retVal = true;
var dictID = "";
if(cntrl.disabled)
{
return retVal;
}
var val=cntrl.value=cntrl.value.trim();
if(val == "" && canBeEmpty)
{
return retVal;
}
else if(val == "")
{
dictID = "12000";
}
else if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
dictID = "12004";
}
else if(!notZeros && val == "0.0.0.0")
{
retVal = true;
}
else
{
val = val.split(".")
if(val[0]>=224 || val[0]<=0 || val[0] == 127 || (val[0].length>1 && val[0].charAt(0) == "0"))
{
retVal = false;
dictID = "12004";
}
for(var i=1;i<4;i++)
{
if(val[i]>255 || val[i]<0 || (val[i].length>1 && val[i].charAt(0) == "0"))
{
retVal = false;
dictID = "12004";
break;
}
else if(isNetworkEdge)
{
if(currEdgeOctet == "")
currEdgeOctet = val[i];
if((val[i] != 255 && val[i] != 0) || val[i] != currEdgeOctet )
{
isNetworkEdge = false;
}
}
}
if(isNetworkEdge)
{
retVal = false;
dictID = "12004";
}
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return retVal;
}
function removeLeadZeroFromIPAddr(str) {
return str.replace(/0+(\d+)/g, "$1");
}
function checkValidationNetworkIP(cntrl,canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
var currEdgeOctet = "";
tokenObj.removeToken(msgNodeId);
var retVal = true;
var dictID = "";
if(cntrl.disabled)
{
return retVal;
}
var val=cntrl.value=cntrl.value.trim();
if(val == "" && canBeEmpty)
{
return retVal;
}
else if(val == "")
{
dictID = "12000";
}
else if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
dictID = "15047";
}
else if(val == "0.0.0.0")
{
dictID = "15047";
retVal = false;
}
else
{
val = val.split(".")
for(var i = 0; i < val.length; i++)
while(val[i].length > 1 && val[i].charAt(0) == "0")
val[i] = val[i].substring(1);
if(val[0]>=224 || val[0]<=0 || val[0] == 127 )
{
retVal = false;
dictID = "12004";
}
for(var i=1;i<4;i++)
{
if(val[i]>255 || val[i]<0)
{
retVal = false;
dictID = "15047";
break;
}
}
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return retVal;
}
function checkValidationIPFormatOnly(cntrl, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val=cntrl.value=cntrl.value.trim();
var dictID = "";
if(cntrl.disabled)
return true;
if(val == "" && canBeEmpty)
return true;
if(val == "" && !canBeEmpty)
dictID = "12000"
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
if(dictID == "")dictID = "12002";
val = val.split(".");
for(var i = 0; i < val.length; i++)
{
if(val[i]>255 || val[i]<0 || (val[i].length > 1 && val[i].charAt(0) == "0"))
{
if(dictID == "")dictID = "12002";
}
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return true;
}
function checkValidationIPListFormatOnly(cntrl, seperator, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val = cntrl.value = cntrl.value.trim();
var IPList = val.split(seperator)
var dictID = "";
if(cntrl.disabled)
return true;
if(val == "" && canBeEmpty)
return true;
if(val == "" && !canBeEmpty)
dictID = "12000";
for(var i in IPList)
{
val = IPList[i];
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
if(dictID == "")dictID = "12101";
break;
}
val = val.split(".");
for(var i = 0; i < val.length; i++)
{
if(val[i]>255 || val[i]<0 || (val[i].length > 1 && val[i].charAt(0) == "0"))
{
if(dictID == "")dictID = "12101";
}
}
if(dictID != "") break;
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return true;
}
function checkMulticastIP(cntrl,ipFormat,canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
var dictID = "";
if(cntrl.disabled)
{
return retVal;
}
var val=cntrl.value=cntrl.value.trim();
if(val == "" && canBeEmpty)
{
return retVal;
}
else if(val == "")
{
dictID = "12000";
}
else if(ipFormat=="1")
{
if(checkValidationIPFormatOnly(cntrl,canBeEmpty, tokenObj))
{
var IPArr=cntrl.value.split(".");
if ((parseInt(IPArr[0])<224) || (parseInt(IPArr[0])>239))
{
retVal = false;
dictID = "12063";
}
}
else
{
dictID = "12064";
retVal = false;
}
}
else
{
if(checkIPv6General(cntrl, true, canBeEmpty, tokenObj))
{
var valArr=cntrl.value.split(":");
if(valArr[0].toLowerCase()<"ff00" || valArr[0].length < 4)
{
retVal = false;
if(dictID == "")dictID = "12031";
}
}
else
retVal = false;
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return retVal;
}
function checkValidationMaskWithRanges(cntrl, canBeEmpty, minPrefix, maxPrefix, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
if(minPrefix == null)
minPrefix = 0;
if(maxPrefix == null)
maxPrefix = 32;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val=cntrl.value=cntrl.value.trim();
if(cntrl.disabled)
return true;
if(val == "" && canBeEmpty)
{
return true;
}
else if(val == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12042");
return false;
}
var octetArr = val.split(".");
var bitString = "";
var currBits;
if (val == "0.0.0.0" || octetArr[0] != 255) {
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075")
return false;
}
for(var i = 0; i < octetArr.length; i++)
{
currBits = parseInt(octetArr[i],10).toString(2);
if(currBits.length > 8)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12043");
return false;
}
while(currBits.length < 8)
currBits = "0" + currBits;
bitString += currBits;
}
var onesEnded = false;
var prefix = 0;
var allOnes = true;
for(var i = 0; i < bitString.length; i++)
{
if(bitString.charAt(i) == "0")
{
allOnes = false;
if(!onesEnded)
{
onesEnded = true;
prefix = i;
}
}
else
{
if(onesEnded)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12043");
return false;
}
}
}
if (allOnes)
prefix = 32;
if(prefix < minPrefix || prefix > maxPrefix)
{
var minMask = maskIntValToIp(minPrefix);
var maxMask = maskIntValToIp(maxPrefix);
tokenObj.alterLocalizedContextMessage(cntrl, true, "12044", [[TKN_CONST,minMask],[TKN_CONST,maxMask]]);
return false;
}
return true;
}
function validateFilename(cntrl,maxLength,tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val=cntrl.value=cntrl.value.trim();
var curLength=calculateLocalizedStrLength(val);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>val.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
return false;
}
if (val == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if(!isStringTextual(val, false))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
return false;
}
return true;
}
function checkValidationPrefixMask(cntrl)
{
if(cntrl.disabled)
{
return true;
}
var val = cntrl.value=cntrl.value.trim();
if(!/^\/\d{1,2}$/.test(val) || parseInt(val.substr(1))>32)
{
return callAlert(cntrl,"Value in highlighted field is in illegal format .");
}
return true;
}
var MonthInfo = function (val, name, dictId)
{
this.val = val;
this.name = name;
this.dictId = dictId;
};
var enMonth=new Array(12);
enMonth[0]= new MonthInfo(0,"JAN","9990001");
enMonth[1]= new MonthInfo(1,"FEB","9990002");
enMonth[2]= new MonthInfo(2,"MAR","9990003");
enMonth[3]= new MonthInfo(3,"APR","9990004");
enMonth[4]= new MonthInfo(4,"MAY","9990005");
enMonth[5]= new MonthInfo(5,"JUN","9990006");
enMonth[6]= new MonthInfo(6,"JUL","9990007");
enMonth[7]= new MonthInfo(7,"AUG","9990008");
enMonth[8]= new MonthInfo(8,"SEP","9990009");
enMonth[9]= new MonthInfo(9,"OCT","9990010");
enMonth[10]= new MonthInfo(10,"NOV","9990011");
enMonth[11]= new MonthInfo(11,"DEC","9990012");
for (var i=0; i<enMonth.length; i++)
enMonth[enMonth[i].name]= enMonth[i];
function checkLeagalDate(value, tokenObj, cntrl)
{
try
{
var dateFormat = tokenObj.getActiveDateFormat();
var newDate = new Date();
if (dateFormat.search(/YYYY/)>=0)
var year = value.substr(dateFormat.search(/YYYY/),4);
else if (dateFormat.search(/YY/)>=0)
{
var year = value.substr(dateFormat.search(/YY/),2);
if ((year*1)>30)
year= (year*1)+1900;
else
year= (year*1)+2000;
}
if (dateFormat.search(/MMM/)>=0)
{
var monthName = value.substr(dateFormat.search(/MMM/),3).toUpperCase();
var month = enMonth[monthName].val;
}
else if (dateFormat.search(/MM/)>=0)
{
var month = value.substr(dateFormat.search(/MM/),2);
month=month-1;
}
if (dateFormat.search(/DD/)>=0)
var date = value.substr(dateFormat.search(/DD/),2);
if (year)
{
newDate.setFullYear(year,month,date);
if (month != newDate.getMonth() || date != newDate.getDate())
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12077");
return false;
}
}
return true;
}
catch (e)
{
return true;
}
}
function conv12hhTo24hh(arrhours)
{
var hours;
if (arrhours[1]=="AM"){
if (arrhours[0]==12) {hours=0;}
else if (1<=arrhours[0] && arrhours[0]<12) {hours=arrhours[0]*1;}
else hours=null;
}
else if (arrhours[1]=="PM") {
if (arrhours[0]==12) {hours=12;}
else if (1<=arrhours[0] && arrhours[0]<12) {hours=arrhours[0]*1+12;}
else hours=null;
}
return hours;
}
function checkLeagalTime(dateTimeStr, tokenObj, cntrl)
{
var newDate = new Date();
var dateTimeFormat = tokenObj.getActiveTimeFormat();
dateTimeFormat=dateTimeFormat.replace(/24hh/,"HH")
dateTimeFormat=dateTimeFormat.replace(/12hh/,"hh")
if (dateTimeFormat.search(/hh/)>=0) {
arrhours = new Array(2);
arrhours[0]= dateTimeStr.substr(dateTimeFormat.search(/hh/),2);
if (dateTimeStr.search(/AM/)>=0 || dateTimeStr.search(/am/)>=0) {arrhours[1]="AM"}
else if (dateTimeStr.search(/PM/)>=0 || dateTimeStr.search(/pm/)>=0){arrhours[1]="PM"}
else
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12038");
return false;
}
var hours=conv12hhTo24hh(arrhours);
}
else {
var hours=(dateTimeFormat.search(/HH/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/HH/),2): -1;
}
var min = (dateTimeFormat.search(/mm/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/mm/),2): 0;
var sec = (dateTimeFormat.search(/ss/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/ss/),2): 0;
var msec = (dateTimeFormat.search(/ms/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/ms/),2): 0;
if (hours>=0)
newDate.setHours(hours,min,sec,msec);
if (!isNaN(newDate))
{
if (hours != newDate.getHours() || min != newDate.getMinutes() || sec != newDate.getSeconds())
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12078");
return false;
}
return true;
}
else
return true;
}
function checkValidationDate(cntrl, canBeEmpty, tokenObj, minYear, maxYear)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.value.trim()=="" && canBeEmpty)
return true;
else if(cntrl.value.trim()=="")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if (!checkLeagalDate(cntrl.value.trim(),tokenObj, cntrl))
return false;
var dateObj = tokenObj.createDateObject(cntrl.value, tokenObj.getActiveDateFormat());
if (minYear && minYear != null && dateObj)
{
if (dateObj.getUTCFullYear()< minYear)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12080");
return false;
}
}
if (maxYear && maxYear != null && dateObj)
{
if (dateObj.getUTCFullYear()> maxYear)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12080");
return false;
}
}
if(!dateObj)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12037");
return false;
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_DATE,dateObj]]);
return true;
}
function checkValidationTime(cntrl, canBeEmpty, tokenObj, isShort)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
var tokenType = (isShort) ? TKN_SHORT_TIME : TKN_TIME;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.value.trim()=="" && canBeEmpty)
return true
else if(cntrl.value.trim()=="")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if (!checkLeagalTime(cntrl.value.trim(),tokenObj,cntrl))
return false;
var dateObj;
var val=cntrl.value.toUpperCase()
if(isShort)
dateObj = tokenObj.createDateObject(val, tokenObj.getActiveTimeFormat().replace(/\Wss/,""));
else
dateObj = tokenObj.createDateObject(val, tokenObj.getActiveTimeFormat());
if(!dateObj)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12038");
return false;
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[tokenType,dateObj]]);
return true;
}
function checkValidationDateTime(cntrl, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.value.trim()=="" && canBeEmpty)
return true
else if(cntrl.value.trim()=="")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
var dateObj = tokenObj.createDateObject(cntrl.value, tokenObj.getActiveDateTimeFormat());
if(!dateObj)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12039");
return false;
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_DATE_TIME,dateObj]]);
return true;
}
function checkValidationRange(cntrl, lower, upper, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if (cntrl.disabled)
return retVal;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return retVal;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else
{
curVal = tokenObj.createNumberObject(cntrl.value);
if(curVal == null)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12001", [[TKN_NUMBER, lower], [TKN_NUMBER, upper]]);
return false;
}
else if (!/(^\d+$)/.test(curVal.toString()))
retVal = false;
else if (curVal > upper || curVal < lower )
retVal = false;
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12001", [[TKN_NUMBER, lower], [TKN_NUMBER, upper]]);
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_NUMBER,curVal.toString()]]);
return retVal;
}
function checkValidationRangeOut(cntrl, lower, upper, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if (cntrl.disabled)
return retVal;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return retVal;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else
{
curVal = tokenObj.createNumberObject(cntrl.value);
if(curVal == null)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
return false;
}
else if (!/(^\d+$)/.test(curVal.toString()))
retVal = false;
else if (curVal > upper || curVal < lower )
retVal = false;
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_NUMBER,curVal.toString()]]);
return retVal;
}
function checkValidationRangeOut2(cntrl, arrRange, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if (cntrl.disabled)
return retVal;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return retVal;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else
{
for (var i=0; i < arrRange.length ; i++)
{
for (var j = 0 ; j < arrRange[i].length ; j++)
arrRange[i][j] = parseInt(arrRange[i][j],10);
}
curVal = tokenObj.createNumberObject(cntrl.value);
if(curVal == null)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
return false;
}
else if (!/(^\d+$)/.test(curVal.toString()))
retVal = false;
else if (arrRange.length > 1)
{
if (! ( ((curVal >= arrRange[0][0]) && (curVal <= arrRange[0][1])) || ((curVal >= arrRange[1][0]) && (curVal <= arrRange[1][1])) ) )
retVal = false;
}
else if (curVal > arrRange[0][1] || curVal < arrRange[0][0] )
retVal = false;
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_NUMBER,curVal.toString()]]);
return retVal;
}
function checkValidationHexValueRange(cntrl, canBeEmpty, minHexVal,maxHexVal, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
var msgId = "";
tokenObj.removeToken(msgNodeId);
var retVal=true;
var minDecVal, maxDecVal,valueFldLen;
var emptyValueFld = "0000000000";
valueFldLen = maxHexVal.length;
if (minHexVal.length < valueFldLen)
minDecVal = hexToDec(emptyValueFld.substr(0,valueFldLen)+minHexVal);
else
minDecVal = hexToDec(minHexVal);
maxDecVal = hexToDec(maxHexVal);
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
else if(curVal == "" && canBeEmpty)
{
retVal = true;
return retVal;
}
if (curVal.length < valueFldLen)
curVal = emptyValueFld.substr(0,valueFldLen) + curVal;
curVal = hexToDec(curVal);
if(curVal == "" && curVal.toString().length==0)
{
retVal = false;
msgId = "12073";
}
if ((curVal > maxDecVal || curVal < minDecVal) && msgId == "")
{
retVal = false;
msgId = "12069";
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, msgId, [[TKN_CONST, minHexVal], [TKN_CONST,maxHexVal]]);
}
return retVal;
}
function checkValidationStringWithNoSpaces(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal=true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
for (var i=0;i<curVal.length;i++)
{
if (curVal.charCodeAt(i)==32)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12074");
retVal=false;
i=curVal.length;
return retVal;
}
}
if(!isStringTextual(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
retVal = false;
return retVal;
}
return retVal;
}
function checkValidationString(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal=true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(!IsUndefOrNull(maxLength))
{
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
}
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
if(!isStringTextual(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
retVal = false;
return retVal;
}
return retVal;
}
function checkValidationStringMinMax(cntrl, canBeEmpty, minLength, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal=true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curLength < parseInt(minLength,10) && minLength != 0)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "14008", [[TKN_NUMBER, minLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
if(!isStringTextual(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
retVal = false;
return retVal;
}
return retVal;
}
function checkDomainValidation(cntrl, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
var label_reg_exp = "([0-9a-zA-Z]|([0-9a-zA-Z]+[0-9a-zA-Z-_]*)[0-9a-zA-Z])";
var regexp = new RegExp("^\\.?((" + label_reg_exp + "\\.)*" + label_reg_exp + ")\\.?$", "");
cntrl.value = cntrl.value.trim();
var value = cntrl.value;
if (curVal.trim().length != 0)
{
var result = regexp.test(curVal);
if (!result)
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "12019",[[TKN_CONST,"1"],[TKN_CONST,"63"]]);
return false;
}
}
else
{
return true;
}
curVal = value.replace(regexp, "$1");
var arr = curVal.split(".");
for (j = 0; j < arr.length; j++)
{
if ((arr[j].length<1)||(arr[j].length>63))
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "12019",[[TKN_CONST,"1"],[TKN_CONST,"63"]]);
return false;
}
}
return true;
}
function checkHostNameValidation(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
retVal = isContainsChars(curVal,LEGAL_ALPHANUMERIC_CHARS + "-");
if (!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12081");
return false;
}
var firstChar = curVal.charAt(0);
if ((firstChar > "z")||(firstChar <"A"))
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "3130005");
return false;
}
var lastChar = curVal.charAt(curVal.length -1);
if (lastChar == "-")
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "12081");
return false;
}
return true;
}
function checkServerNameValidation(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
retVal = isContainsChars(curVal,LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR_DNS);
if (!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12095");
return false;
}
return checkDomainValidation(cntrl, canBeEmpty, tokenObj)
}
function checkACLNameValidation(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
retVal = isContainsChars(curVal,LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR_VAR);
if (!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12095");
return false;
}
return true;
}
function isContainsChars(str,chars)
{
for (var i = 0 ; i < str.length ; i++)
{
if (chars.indexOf(str.charAt(i)) == -1)
return false;
}
return true;
}
function isNotContainsChars(str,chars)
{
for (var i = 0 ; i < str.length ; i++)
{
if (chars.indexOf(str.charAt(i)) != -1)
return false;
}
return true;
}
function isStringTextual(chkVal, enableNonTextualCharsCheck)
{
var currCharCode;
var retVal = true;
if(IsUndefOrNull(enableNonTextualCharsCheck)) enableNonTextualCharsCheck = true;
for(var i = 0; i < chkVal.length; i++)
{
currCharCode = chkVal.charCodeAt(i);
if ((currCharCode & 0xFC00) == 0xD800)
{
if ((chkVal.charCodeAt(i+1) & 0xFC00) == 0xDC00)
currCharCode = ((currCharCode - 0xD800) * 0x400) + (chkVal.charCodeAt(++i) - 0xDC00) + 0x10000;
else
retVal = false;
}
else
if ((currCharCode & 0xFC00) == 0xDC00)
retVal = false;
if ((currCharCode >= 8192 && currCharCode <= 10175 && enableNonTextualCharsCheck)|| !retVal)
return retVal;
}
return retVal;
}
function checkStringLength(cntrl, maxLength, tokenObj, e)
{
if (window.event)
key = e.keyCode;
else
key = e.which;
if (key == 13)
return;
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var str=cntrl.value;
str = str.trim();
var strLen = str.length;
var srcCntrlLen = cntrl.value;
var curLength=calculateLocalizedStrLength(str);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(strLen != srcCntrlLen)
cntrl.value = cntrl.value.trim();
if(curLength>str.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
}
}
function checkStringWithHintLength(cntrl, maxLength, curLength, tokenObj, e)
{
if (window.event)
key = e.keyCode;
else
key = e.which;
if (key == 13)
return;
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var str=cntrl.value.trim();
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>str.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
}
}
function checkValidationMAC(cntrl, canBeEmpty, isMulticastLegal, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
else if(!/(^[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}$)/.test(curVal) &&
!/(^[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}$)/.test(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12003");
return false;
}
else if(isHexValOdd(curVal.substring(0,2)) && !isMulticastLegal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12018");
return false;
}
return true;
}
function checkValidationMACMulticast(cntrl, canBeEmpty, isAnyDisallowed, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
else if(!/(^[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}$)/.test(curVal) &&
!/(^[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}$)/.test(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12003");
return false;
}
else if(!isHexValOdd(curVal.substring(0,2)))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12062");
return false;
}
else if(curVal=="ff:ff:ff:ff:ff:ff" && isAnyDisallowed)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12062");
return false;
}
return true;
}
function isHexValOdd(str)
{
if(parseInt(str,16) % 2 == 1)
return true;
else
return false;
}
function disable(element,disableElem)
{
element.className = disableElem ? "disableElement" : "enableElement";
element.disabled = disableElem;
}
function callAlert(cntrl,msg)
{
cntrl.className = 'highlightElement';
document.all ? cntrl.ownerDocument.parentWindow.alert(msg) : cntrl.ownerDocument.defaultView.alert(msg)
cntrl.className='enableElement';
cntrl.focus();
return false;
}
function Writelogo(Pagename)
{
document.write("<table !background='../images/linksysImages/pageBackground.jpg' width='100%'><tr ><td class=PopCaption align=center width=100% id=Pagename>" + Pagename + "</td></tr></table><br>");
}
function getHelpTopic(fName)
{
}
var defaultModalWindowOpener = function(url, widthUD, heightUD){
if (typeof widthUD == 'undefined') widthUD = 375;
if (typeof heightUD == 'undefined') heightUD = 206;
LINKSYS = {};
LINKSYS.box = function () {
var j, m, b, g, v, p = 0;
return {
show: function (o) {
v = { opacity: 70, close: 1, animate: 1, fixed: 1, mask: 1, maskid: '', boxid: '', topsplit: 2, url: 0, post: 0, height: 0, width: 0, html: 0, iframe: 0 };
for (s in o) { v[s] = o[s] }
if (!p) {
j = parent.document.createElement('div'); j.className = 'tbox';
p = parent.document.createElement('div'); p.className = 'tinner';
b = parent.document.createElement('div'); b.className = 'tcontent';
m = parent.document.createElement('div'); m.className = 'tmask';
g = parent.document.createElement('div'); g.className = 'tclose'; g.v = 0;
parent.document.body.appendChild(m); parent.document.body.appendChild(j); j.appendChild(p); p.appendChild(b);
m.onmousemove = freetime;
m.onkeypress = freetime;
g.onclick=LINKSYS.box.hide; window.onresize=LINKSYS.box.resize;
} else {
j.style.display = 'none'; clearTimeout(p.ah); if (g.v) { p.removeChild(g); g.v = 0 }
}
v.height = v.height;
p.id = v.boxid; m.id = v.maskid; j.style.position = v.fixed ? 'fixed' : 'absolute';
if (v.html && !v.animate) {
p.style.backgroundImage = 'none'; b.innerHTML = v.html; b.style.display = '';
p.style.width = v.width ? v.width + 'px' : 'auto'; p.style.height = v.height ? v.height + 'px' : 'auto'
} else {
b.style.display = 'none';
if (!v.animate && v.width && v.height) {
p.style.width = v.width + 'px'; p.style.height = v.height + 'px'
} else {
p.style.width = p.style.height = '100px';
}
}
if (v.mask) { this.mask(); this.alpha(m, 1, v.opacity) } else { this.alpha(j, 1, 100) }
if (v.autohide) { p.ah = setTimeout(LINKSYS.box.hide, 1000 * v.autohide) } else { parent.document.onkeyup = LINKSYS.box.esc }
},
fill: function (c, u, k, a, w, h) {
if (u) {
if (v.image) {
var i = new Image(); i.onload = function () { w = w || i.width; h = h || i.height; LINKSYS.box.psh(i, a, w, h) }; i.src = v.image
} else if (v.iframe) {
this.psh('<iframe name="popup_gw" src="' + v.iframe + '" width="' + v.width + '" onload="frame13(this);" frameborder="0" height="' + v.height + '"></iframe>', a, w, h)
} else {
var x = (document.evaluate) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
x.onreadystatechange = function () {
if (x.readyState == 4 && x.status == 200) { p.style.backgroundImage = ''; LINKSYS.box.psh(x.responseText, a, w, h) }
};
if (k) {
x.open('POST', c, true); x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); x.send(k)
} else {
x.open('GET', c, true); x.send(null)
}
}
} else {
this.psh(c, a, w, h)
}
},
psh: function (c, a, w, h) {
if (typeof c == 'object') { b.appendChild(c) } else { b.innerHTML = c }
var x = p.style.width, y = p.style.height;
if (!w || !h) {
p.style.width = w ? w + 'px' : ''; p.style.height = h ? h + 'px' : ''; b.style.display = '';
if (!h) { h = parseInt(b.offsetHeight) }
if (!w) { w = parseInt(b.offsetWidth) }
b.style.display = 'none'
}
p.style.width = x; p.style.height = y;
this.size(w, h, a)
},
esc: function (e) { e = e || window.event; if (e.keyCode == 27) { LINKSYS.box.hide() } },
hide: function () {
return false;
},
resize: function () { LINKSYS.box.pos(); LINKSYS.box.mask() },
mask: function () {
m.style.height = this.total(1) + 'px'; m.style.width = this.total(0) + 'px';
m.style.background = '#000';
m.style.opacity = '0.6';
m.style.filter = 'alpha(opacity=60)';
},
pos: function () {
j.style.margin = 'auto';
j.style.position = 'absolute';
j.style.top = '0';
j.style.left = '0';
j.style.right = '0';
j.style.bottom = '0';
j.style.border = "1px solid #FFFFFF";
j.style.width = v.width + 'px';
j.style.height = v.height + 'px';
},
alpha: function (e, d, a) {
clearInterval(e.ai);
if (d) { e.style.opacity = 0; e.style.filter = 'alpha(opacity=0)'; e.style.display = 'block'; LINKSYS.box.pos() }
e.ai = setInterval(function () { LINKSYS.box.ta(e, a, d) }, 20)
},
ta: function (e, a, d) {
var o = Math.round(e.style.opacity * 100);
if (o == a) {
clearInterval(e.ai);
if (d == -1) {
e.style.display = 'none';
e == j ? LINKSYS.box.alpha(m, -1, 0, 2) : b.innerHTML = p.style.backgroundImage = ''
} else {
if (e == m) {
this.alpha(j, 1, 100)
} else {
j.style.filter = '';
LINKSYS.box.fill(v.html || v.url, v.url || v.iframe || v.image, v.post, v.animate, v.width, v.height)
}
}
} else {
var n = a - Math.floor(Math.abs(a - o) * .5) * d;
e.style.opacity = n / 100; e.style.filter = 'alpha(opacity=' + n + ')'
}
},
size: function (w, h, a) {
if (a) {
clearInterval(p.si); var wd = parseInt(p.style.width) > w ? -1 : 1, hd = parseInt(p.style.height) > h ? -1 : 1;
p.si = setInterval(function () { LINKSYS.box.ts(w, wd, h, hd) }, 20)
} else {
p.style.backgroundImage = 'none'; if (v.close) { p.appendChild(g); g.v = 1 }
p.style.width = w + 'px'; p.style.height = h + 'px'; b.style.display = ''; this.pos();
if (v.openjs) { v.openjs() }
}
},
ts: function (w, wd, h, hd) {
var cw = parseInt(p.style.width), ch = parseInt(p.style.height);
if (cw == w && ch == h) {
clearInterval(p.si); p.style.backgroundImage = 'none'; b.style.display = 'block'; if (v.close) { p.appendChild(g); g.v = 1 }
if (v.openjs) { v.openjs() }
} else {
if (cw != w) { p.style.width = (w - Math.floor(Math.abs(w - cw) * .6) * wd) + 'px' }
if (ch != h) { p.style.height = (h - Math.floor(Math.abs(h - ch) * .6) * hd) + 'px' }
this.pos()
}
},
top: function () { return parent.document.documentElement.scrollTop || parent.document.body.scrollTop },
width: function () { return self.innerWidth || parent.document.documentElement.clientWidth || parent.document.body.clientWidth },
height: function () { return self.innerHeight || parent.document.documentElement.clientHeight || parent.document.body.clientHeight },
total: function (d) {
var b = parent.document.body, e = parent.document.documentElement;
return d ? Math.max(Math.max(b.scrollHeight, e.scrollHeight), Math.max(b.clientHeight, e.clientHeight)) :
Math.max(Math.max(b.scrollWidth, e.scrollWidth), Math.max(b.clientWidth, e.clientWidth))
}
}
} ();
var urlo = parent.document.getElementById('mainFrame').getAttribute('src').match('/\.+/'); urlo += url;
LINKSYS.box.show({iframe:urlo,boxid:'frameless',width:widthUD,height:heightUD,fixed:false,maskid:'outerWindow',maskopacity:40,closejs:function(){}});
_top.urlo = urlo;
}
function getHelpUrl()
{
if(_top.isSmart) newUrl = "http://www.linksys.com/support/business/smartswitches/ug";
else newUrl = "http://www.linksys.com/support/business/managedswitches/ug";
return newUrl;
}
function sleep(m)
{
var then = new Date(new Date().getTime() + m);
while(new Date() < then){}
}
function checkMAC( mac, multy )
{
if (typeof(multy) == "undefined")
multy = false;
var pattern = "^([0-9a-f][0-9a-f])$";
var regExp = new RegExp(pattern, "i");
var mac_arr = mac.value.split( mac.value.split("")[2] );
if ( mac_arr.length == 6 )
{
var isError = false;
for (var i = 0; i < 6; i++)
{
if ( !regExp.test(mac_arr[i]) )
{
isError = true;
break;
}
}
if ( mac_arr.join("") == "000000000000" )
isError = true;
var tmp = hexStr2Bin(mac_arr[0]).split("");
if ( tmp[tmp.length-1] == "1" && !multy)
{
alert("Multicast MAC address is not allowed.");
mac.focus();
return false;
}
else
if ( tmp[tmp.length-1] == "0" && multy )
{
alert("You should enter Multicast MAC address.");
mac.focus();
return false;
}
if ( !isError )
return true;
}
alert("'" + mac.value + "' is not a valid value.");
mac.focus();
return false;
}
function hexStr2Bin( binStr )
{
var str = "";
var len = binStr.length;
var bin = new Array("0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1110","1111");
for(var i = 0; i < len; i++)
{
str += bin[parseInt(binStr.slice(i,i+1),16)];
}
return str ;
}
function checkIntegerValue(ctrlIntf, isRequired, minValue, maxValue)
{
var checkedValue = ctrlIntf.value;
var message = "";
while (true)
{
if (checkedValue == "")
{
if (isRequired)
{
message = "You may not enter a blank value into the required field.";
break;
}
else
{
return true;
}
}
var intValue = parseInt(checkedValue, 10);
if (isNaN(intValue) || (checkedValue.indexOf("-0") != -1) || (intValue.toString(10).length != checkedValue.length))
{
message = '"' + checkedValue + '" is not a valid integer value.';
break;
}
if ((!isNaN(minValue) && intValue < minValue) || (!isNaN(maxValue) && intValue > maxValue))
{
message = '"' + checkedValue + '" is out of range. The valid range is ' + minValue + '-' + maxValue + '.';
break;
}
return true;
}
alert(message);
ctrlIntf.focus();
return false;
}
function greyOut(Dis)
{
}
function greyOut2(Dis)
{
}
function IsNameExists(i_Name, i_RepeatName)
{
var retVal = false;
for( var i = 1 ; formele[i_RepeatName + i]!= null ; i++)
{
if(i_Name == formele[i_RepeatName + i].value )
{
retVal = true
}
}
return retVal;
}
function getBitFromMask(i_Octet, pIndex)
{
var funcOctetToBitsAsChars = octetToBitsAsChars;
var zeroMask = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var bitMap = null;
var hexChar = "";
var bitSect = "";
var result = "";
if(zeroMask != i_Octet)
{
hexChar = i_Octet.charAt(pIndex / 4);
bitSect = funcOctetToBitsAsChars(hexChar);
result = bitSect.charAt(pIndex % 4);
}
else
result = "0";
return result;
}
function InsertValueIntoOctetBitMap(i_BitMap, i_Index, i_Value)
{
var newOctet = null;
var newBitMap = null;
var octetIndex = parseInt(i_Index/4);
var digitNumber = i_Index%4;
var octetToChange = i_BitMap.charAt(octetIndex);
octetToChange = octetToBitsAsChars(octetToChange);
newOctet = parseInt(octetToChange.substring(0, digitNumber) + i_Value + octetToChange.substring(digitNumber+1),2);
newOctet = newOctet.toString(16);
newBitMap = i_BitMap.substring(0, octetIndex) + newOctet + i_BitMap.substring(octetIndex+1);
return newBitMap;
}
function DrawCloseDiv(){
document.write("</div>");
}
function DrawOpenDiv(){
document.write("<div id=loading align=center style='position:absolute; top:150; left:100; '>");
document.write("<b><font size=5>Loading data from the device......</b></font></div>");
document.write("<div id=site style='display:none;'>");
}
function HideLastTR(i_Table)
{
i = i_Table.tBodies[0].rows.length-1;
i_Table.tBodies[0].rows[i].style.display= "none";
var collInput = i_Table.tBodies[0].rows[i].getElementsByTagName("input");
for(var j = 0; j < collInput.length; j++)
collInput[j].disabled = true;
}
function HideElementById(id)
{
document.getElementById(id).style.display = "none";
}
function CreatePageHeaderAndMessage(pgTknObj, pgMsgId)
{
document.write("<table><tr><td><h3 id='pageHeader'></h3></td></tr></table>");
pgTknObj.setToken("pageHeader", _top.document.getElementById("caption").innerHTML);
return CreateLocalizedPageMessage(pgTknObj, pgMsgId);
}
function CreateLocalizedPageMessage(pgTknObj, pgMsgId)
{
var successMsgType = _top.STYLING.successMsgNS.msgType;
var pgMsgRes = CreatePageMessage(pgMsgId);
if (pgMsgRes == 2)
{
switch (successMsgType)
{
case 0:
pgTknObj.setTokenWithError("pageMessageLine0", "13000");
break;
case 1:
pgTknObj.setTokenWithError("pageMessageLine0", "13095", [[TKN_CALLBACK, LocalizeSuccessMessageLink]]);
break;
}
}
else if (pgMsgRes == 1)
{
var idx = 1;
var errValue, errMsgObj, errMsgTxt, errMsgDomId;
var errMsgArgArr = [];
var re = new RegExp("["+ String.fromCharCode(160) + "\\s]", "g");
while (!IsUndefOrNull(document.getElementsByName("mibError?" + idx)[0]))
{
errValue = document.getElementsByName("mibError?"+idx)[0].value;
errValue = errValue.replace(re, " ");
errMsgTxt = errValue.match(/.*?Diag=(.*)'(localMsg.*)?$/)[1];
errMsgObj = ParseServerErrorMessages(errValue, idx);
errMsgDomId = "pageMessageLine" + (idx - 1);
pgTknObj.setServerMessageToken(errMsgDomId, errMsgObj.msgId, errMsgTxt, errMsgObj.argArr);
idx ++;
}
}
return pgMsgRes;
function LocalizeSuccessMessageLink() {
var linkText = pgTknObj.getText("13096");
return pgTknObj.successMsgLink.replace(/(?=<\/a>)/i, linkText);
}
}
function ParseServerErrorMessages(str, idx)
{
var errMsg = {
msgId: "system_message_" + idx,
argArr: []
};
str = str.replace(/[\n\r]/g, "");
var msgStrArr = str.match(/<localMsg>(.*?)<\/localMsg>/);
if (msgStrArr)
str = msgStrArr[1];
else
return errMsg;
var msgIdArr = str.match(/<msgId>(.*?)<\/msgId>/);
if (msgIdArr)
errMsg.msgId = msgIdArr[1];
var pattern = /<arg>(.*?)<\/arg>/g;
var arg;
while ((arg = pattern.exec(str)) != null)
errMsg.argArr.push(arg[1]);
return errMsg;
}
function CreateLocalizedHintRangeDefault(cntrlId,hintlbl,unitsDictItem,minRangeVal,maxRangeVal,defaultVal,tokenObj,parentId)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
if(!unitsDictItem || unitsDictItem == "")
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10712",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_NUMBER,defaultVal]],parentId);
else
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10711",[[TKN_DICT_ITEM,unitsDictItem],[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_NUMBER,defaultVal]],parentId);
}
function CreateLocalizedHintRangeDefaultString(cntrlId,hintlbl,unitsDictItem,minRangeVal,maxRangeVal,defaultDictItem,tokenObj,parentId)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
if(!unitsDictItem || unitsDictItem == "")
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10712",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_DICT_ITEM,defaultDictItem]],parentId);
else
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10711",[[TKN_DICT_ITEM,unitsDictItem],[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_DICT_ITEM,defaultDictItem]],parentId);
}
function CreateLocalizedHintCharRange(cntrlId,hintlbl,minRangeVal,maxRangeVal,defaultVal,isConst,tokenObj,parentId)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
var cntrl=document.getElementById(cntrlId);
var str=cntrl.value.trim();
var curLength=calculateLocalizedStrLength(str);
setHint(cntrlId,hintlbl,curLength.toString(),maxRangeVal,defaultVal,isConst,tokenObj,parentId);
if(parentId)
{
cntrl.onkeyup = function(e){
if (window.event)
e = window.event;
else if (!e)
return true;
str=cntrl.value.trim();;
curLength=calculateLocalizedStrLength(str);
setHint(cntrlId,hintlbl,curLength.toString(),maxRangeVal,defaultVal,isConst,tokenObj,parentId);
checkStringWithHintLength(cntrl,maxRangeVal,curLength,tokenObj,e);
}
}
}
function setHint(cntrlId,hintlbl,minRangeVal,maxRangeVal,defaultVal,isConst,tokenObj,parentId)
{
if(!defaultVal || defaultVal == "")
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10716",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal]],parentId);
else
{
if(isConst)
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10717",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_CONST,defaultVal]],parentId);
else
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10717",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_DICT_ITEM,defaultVal]],parentId);
}
}
var GUIBlockLimit = 10000;
var GUILimitCounter = 0;
function setGUIVisibility(callBackFunc)
{
if (!IsUndefOrNull(self.formele) || GUILimitCounter >= GUIBlockLimit) {
document.body.style.visibility = "";
if(callBackFunc)eval(callBackFunc);
}
else
{
document.body.style.visibility = "hidden";
GUILimitCounter += 50;
setTimeout('setGUIVisibility("'+callBackFunc+'")',50);
}
}
function handlePageMessageInDialogue(tokenObj, pgMsgId, withGUIBlock, callBackFunc, localLimit,urlPaging)
{
if(localLimit)GUIBlockLimit = localLimit;
if(!callBackFunc)callBackFunc = "";
var pgMsgRes = CreateLocalizedPageMessage(tokenObj, pgMsgId);
if (pgMsgRes == 1) {
refreshOpener();
} else if (pgMsgRes == 2) {
if(!_top.STYLING.alertBox.closeDialog)
{
if (urlPaging) {
refreshOpenerPaging(urlPaging)
} else {
refreshOpener();
}
GUILimitCounter = 250;
if(withGUIBlock)setTimeout('setGUIVisibility("'+callBackFunc+'")',250);
}
}
else if (callBackFunc != "") {
setTimeout(callBackFunc, 250);
}
return pgMsgRes;
}
function CreateTableHeaderButton(txt, onclick, id,parentId)
{
var btnLiteral = "<table width=100 border=0 onmousedown='SetPressedClass(this)' onmouseup='SetHoverClass(this)'";
btnLiteral += " onmouseover='SetHoverClass(this)'";
btnLiteral += " onmouseout='SetNormalClass(this)'";
btnLiteral += " class='btn_normal'";
if (!IsUndefOrNull(onclick))
btnLiteral += " onclick=\"if(this.className!='btn_disabled'){"+onclick+"}; return false;\"";
btnLiteral += "><tbody><tr><td style='padding-left:0px;padding-right:0px' class='btnTD1' width='9'><img alt='' src='../styling/images/empty.gif' width='9' height='1' /></td>";
btnLiteral += "<td style='padding-left:0px;padding-right:0px' class='btnTD2' width='82'><a href='javascript:void(0)'";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"'";
if (IsUndefOrNull(txt))
txt = "";
btnLiteral += " title='"+txt+"'>"+txt+"</a></td>";
btnLiteral += "<td style='padding-left:0px;padding-right:0px' class='btnTD3' width='9'><img alt='' src='../styling/images/empty.gif' width='9' height='1' /></td></tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(btnLiteral);
else
document.getElementById(parentId).innerHTML = btnLiteral;
return;
}
function startTimingPost()
{
_top.postStartTimer = new Date();
}
function startTimingLoad()
{
_top.loadStartTimer = new Date();
}
function displayTiming()
{
_top.endTimer = new Date();
var res;
var resStr = new Array();
if(_top.timeSetAndLoad)
{
if(_top.postStartTimer)
{
res = _top.endTimer.getTime() - _top.postStartTimer.getTime();
resStr.push("Time from start of post to screen loading: " + res);
}
}
if(_top.timeLoading)
{
if(_top.loadStartTimer)
{
res = _top.endTimer.getTime() - _top.loadStartTimer.getTime();
resStr.push("Screen loading time: " + res);
}
}
_top.loadStartTimer = _top.postStartTimer = _top.endTimer = null;
if(resStr.length > 0)alert(resStr.join("\n"));
}
function GetBodyWidth()
{
var mainTable=document.body.getElementsByTagName("table")[1];
var tdArr=mainTable.getElementsByTagName("td");
for(var i=0;i<tdArr.length;i++)
if(tdArr[i].className=="formBody")
{
return mainTable.clientWidth;
}
return (document.body.clientWidth-20);
}
function setLastClmnWidth(tblId,trId,onLoad)
{
var tblWidth=document.getElementById(tblId).clientWidth;
var bodyWidth=GetBodyWidth();
var thArr=document.getElementById(trId).getElementsByTagName("th");
var i = thArr.length - 1;
var lastTh;
while(i >= 0)
{
if(thArr[i].style.display != "none")
{
lastTh = thArr[i];
break;
}
i--;
}
if(i < 0)
lastTh=thArr[thArr.length-1];
if(onLoad)
{
minTableWidth=tblWidth;
minTdWidth=lastTh.clientWidth;
if(tblWidth<bodyWidth)
lastTh.style.width=lastTh.clientWidth+(bodyWidth-tblWidth);
}
else
{
if(bodyWidth!=prevBodyWidth)
{
if(minTableWidth<bodyWidth)
{
document.getElementById(tblId).style.width="";
lastTh.style.width=prevTdWidth+(bodyWidth-prevBodyWidth);
}
else
{
document.getElementById(tblId).style.width=minTableWidth;
lastTh.style.width=minTdWidth;
}
}
}
if(document.getElementById(tblId).clientWidth<bodyWidth)
lastTh.style.width=lastTh.clientWidth+(bodyWidth-document.getElementById(tblId).clientWidth);
prevTdWidth=lastTh.clientWidth;
prevBodyWidth=bodyWidth;
}
function addOptToSortedArr(opt,id,formele)
{
var index=null;
var select=formele[id];
var maxIndex=select.options.length;
for(var i=0;i<maxIndex;i++)
{
if(opt.value==select.options[i].value)return;
if(parseInt(opt.value)<parseInt(select.options[i].value))
{
index=i;
break;
}
}
if(index!=null)
{
var nweOpt=new Option(select.options[maxIndex-1].text,select.options[maxIndex-1].value);
nweOpt.id=select.options[maxIndex-1].id;
select.options[maxIndex]=nweOpt;
for(var i=(maxIndex-1);i>index;i--)
{
select.options[i].text=select.options[i-1].text;
select.options[i].value=select.options[i-1].value;
select.options[i].id=select.options[i-1].id;
}
select.options[index].text=opt.text;
select.options[index].value=opt.value;
select.options[index].id=opt.id;
}
else
select.options[select.options.length]=opt;
}
function openLink(url, hrefURL)
{
var urlArr = url.split("~");
var rootFolder = _top.document.getElementById(urlArr[0]);
var rootFolderImage = rootFolder.getElementsByTagName("img")[0];
if (rootFolderImage.lang=="1")
{
try
{
rootFolderImage.click();
}
catch(ex)
{
rootFolderImage.onclick(rootFolderImage.onclick);
}
}
for (i=1;i<urlArr.length;i++)
{
openLinkRecursive(urlArr,i, hrefURL);
}
}
function openLinkRecursive(urlArr, index, hrefURL)
{
var id = "";
for (j=0;j<=index;j++)
{
id+=urlArr[j];
if (j<index)
id+="~";
}
var ele = _top.document.getElementById(id);
if (ele.childNodes[0].lang.indexOf("docum")!=-1 )
{
try
{
if(hrefURL != null)
{
tempID = ele.childNodes[0].childNodes[3].id;
ele.childNodes[0].childNodes[3].id = hrefURL;
ele.childNodes[0].childNodes[3].click();
ele.childNodes[0].childNodes[3].id = tempID;
_top.selectedId = tempID;
}
else
ele.childNodes[0].childNodes[3].click();
}
catch(ex)
{
if(hrefURL != null)
{
ele.childNodes[0].childNodes[3].onclick(ele.childNodes[0].childNodes[3].onclick);
ele.childNodes[0].childNodes[3].id = tempID;
_top.selectedId = tempID;
}
else
ele.childNodes[0].childNodes[3].onclick(ele.childNodes[0].childNodes[3].onclick);
}
}
else
{
if (ele.childNodes[0].childNodes[1].childNodes[0].lang=="1")
{
try
{
ele.childNodes[0].childNodes[2].click();
}
catch(ex)
{
ele.childNodes[0].childNodes[2].onclick();
}
ele.childNodes[0].childNodes[2].focus();
}
}
}
function ResourceHandler(src, id)
{
this.status = 0;
var resourceNode = document.getElementById(id);
var that = this;
this.load = function()
{
this.status = 1;
resourceNode.onload = function(){that.status = 2};
resourceNode.onerror = function(){that.status = -1};
resourceNode.onabort = function(){that.status = -1};
resourceNode.src = src;
setTimeout(timer, 60000);
}
function timer()
{
if (that.status == 1)
resourceNode.src = "";
}
}
function ResourceCollection(callback)
{
var intervalId = 0;
var that = this;
this.resourceHandlerArr = [];
if (typeof callback != "function")
callback = function(){};
this.startLoad = function()
{
for (var i = 0; i < Math.min(this.queuesNumber, this.resourceHandlerArr.length); i ++)
loader();
if (this.queuesNumber && this.resourceHandlerArr.length)
intervalId = setInterval(loader, 20);
}
function loader()
{
var status;
var loadingCount = 0;
var finishedCount = 0;
var idxToLoad = -1;
for (var i = 0; i < that.resourceHandlerArr.length; i ++)
{
status = that.resourceHandlerArr[i].status;
if (status == 0)
{
idxToLoad = i;
break;
}
else if (status == 1)
loadingCount ++;
else
finishedCount ++;
}
if (finishedCount == that.resourceHandlerArr.length)
{
clearInterval(intervalId);
callback();
return;
}
if (loadingCount >= that.queuesNumber)
return;
if (idxToLoad == -1)
return;
else
that.resourceHandlerArr[idxToLoad].load();
}
}
ResourceCollection.prototype.queuesNumber = 2;
ResourceCollection.prototype.addResourceHandler = function(src, id)
{
this.resourceHandlerArr.push(new ResourceHandler(src, id));
}
if (_top.checkLogoutTimeout)
_top.checkLogoutTimeout(true);
function GetPagingCookie()
{
var defaultNumberOfEntriesPerPage = 50;
var result = _top.get_cookie(_top.cookiePreffix+"_numberOfEntriesPerPage");
if (result == null)
{
SetPagingCookie(defaultNumberOfEntriesPerPage);
result = defaultNumberOfEntriesPerPage;
}
return result;
}
function SetPagingCookie(numberOfEntriesPerPage)
{
var expdate = new Date();
expdate.setDate(expdate.getDate()+30);
_top.set_cookie(_top.cookiePreffix+"_numberOfEntriesPerPage",numberOfEntriesPerPage,expdate);
}
function GetStaticPagingCookie()
{
var defaultNumberOfEntriesPerPage = 10;
var result = _top.get_cookie(_top.cookiePreffix+"_StaticNumberOfEntriesPerPage");
if (result == null)
{
SetStaticPagingCookie(defaultNumberOfEntriesPerPage);
result = defaultNumberOfEntriesPerPage;
}
return result;
}
function SetStaticPagingCookie(numberOfEntriesPerPage)
{
var expdate = new Date();
expdate.setDate(expdate.getDate()+30);
_top.set_cookie(_top.cookiePreffix+"_StaticNumberOfEntriesPerPage",numberOfEntriesPerPage,expdate);
}
function AddGWAllOption(tkn,slct,value)
{
newOption=new Option();
newOption.id="optRecordFilterAll";
newOption.value=value;
slct.options[slct.options.length]=newOption;
tkn.setTokenWithError(newOption.id);
tkn.setTokenAttribute(newOption.id,"text","10048");
}
function buildComboOptions(tkn,type)
{
var slct = document.getElementById("recordFilter");
if(type=="static")
{
var NumOfPorts = _top.NumberOfPortPerModuleArr[_top.firstPresentModule];
if (_top.Units)
{
for (var i = 0 ; i < _top.NumberOfModules ; i++)
{
var ModuleNumber = _top.RealModuleNameArr[i];
var ModulePorts = _top.NumberOfPortPerModuleArr[ModuleNumber];
if (ModulePorts > NumOfPorts)
NumOfPorts = ModulePorts;
}
}
if (NumOfPorts <= 10)
{
slct.parentNode.style.display="none";
return;
}
if (NumOfPorts <= 28 && NumOfPorts >10)
{
slct[slct.length] = new Option(10,10);
AddGWAllOption(tkn,slct,NumOfPorts);
}
else if (NumOfPorts > 28)
{
slct[slct.length] = new Option(10,10);
slct[slct.length] = new Option(26,26);
AddGWAllOption(tkn,slct,NumOfPorts);
}
}
else
{
for(var i=(_top.dynamicPagingOptions.length-1);i>=0;i--)
slct[slct.length] = new Option(_top.dynamicPagingOptions[i],_top.dynamicPagingOptions[i]);
}
}
function getPagingSizeFromCookie(slct,tblId,type)
{
var tableID;
if(!tblId)
{
var tblElem = slct.parentNode;
while(tblElem.tagName.toLowerCase() != "table")
tblElem = tblElem.parentNode;
tableID = tblElem.id;
}
else
tableID = tblId;
var tableCookieVal = parseInt(_top.getTableBits(_top.tableHash[tableID]),2);
if (typeof(type) == "undefined")
type = "dynamic";
if (type != "dynamic")
{
switch (tableCookieVal)
{
case 0:
tableCookieVal = 0;
break;
case 1:
if (slct.length == 3)
tableCookieVal = 2 ;
else
tableCookieVal = 1 ;
break;
case 2:
if (slct.length == 3)
tableCookieVal = 1;
else
tableCookieVal = 0 ;
break;
default:
tableCookieVal = 0 ;
break;
}
_top.numberOfEntriesPerPage = slct.options[slct.length - 1 - tableCookieVal].value;
}
return tableCookieVal;
}
function updatePagingCookie(type)
{
var slct=document.getElementById("recordFilter");
if(!slct)return;
var cookieValDec = slct.length - slct.selectedIndex - 1;
if (typeof(type) == "undefined")
type = "dynamic";
if (type != "dynamic")
{
if (slct.length == slct.selectedIndex + 1)
cookieValDec = 0;
else if (slct.selectedIndex == 0)
cookieValDec = 1;
else
cookieValDec = 2;
}
var num = new Number(cookieValDec);
var tblElem = slct.parentNode;
while(tblElem.tagName.toLowerCase() != "table")
tblElem = tblElem.parentNode;
var tableID = tblElem.id;
_top.setTableBits(_top.tableHash[tableID], num.toString(2));
top.numberOfEntriesPerPage=parseInt(slct.value);
}
function setLinkDecoration(id)
{
var ctrl=document.getElementById(id);
var linksArr=ctrl.parentNode.getElementsByTagName("a");
for(var j=0;j<linksArr.length;j++)
linksArr[j].className="pagingLink";
ctrl.className="selectedPagingLink"
}
function getUnitPortSelectedValue()
{
var interfaceValue;
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
if(radioPort.checked == true)
{
interfaceValue = slctPort[slctPort.selectedIndex].value;
}
else
{
interfaceValue = slctTrunk[slctTrunk.selectedIndex].value;
}
return interfaceValue;
}
function getUnitPortSelectedText()
{
var interfaceText;
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
if(radioPort.checked == true)
{
interfaceText = slctPort[slctPort.selectedIndex].text;
}
else
{
interfaceText = slctTrunk[slctTrunk.selectedIndex].text;
}
return interfaceText;
}
function disableTrunkList()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
slctTrunk.disabled=true;
slctPort.disabled=false;
if (slctUnit)
slctUnit.disabled=false;
radioPort.checked = true;
radioTrunk.checked = false;
HandleLabels();
HandleControls();
}
function disablePortList()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=true;
slctTrunk.disabled=false;
radioPort.checked = false;
radioTrunk.checked = true;
HandleLabels();
HandleControls();
}
function UpdateUnitPortsLags(portIndex,isGW)
{
if ((portIndex == "") || (typeof(portIndex) == "undefined"))
portIndex = _top.firstPresentPort;
var i=0;
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
radioPort.checked = false;
radioTrunk.checked = false;
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
while (slctTrunk.options[i] != null)
{
var found = false;
if (isGW)
{
if ((slctTrunk.options[i].value == portIndex) || (slctTrunk.options[i].text == portIndex))
found = true;
}
else
{
if (slctTrunk.options[i].value == portIndex)
found = true;
}
if (found)
{
slctTrunk.selectedIndex=i;
slctPort.selectedIndex=0;
radioTrunk.checked = true;
slctPort.disabled = true;
if (slctUnit)
slctUnit.disabled=true;
slctTrunk.disabled=false;
break;
}
i++;
}
i=0;
if(radioTrunk.checked == false){
while (slctPort.options[i]!=null)
{
var found = false;
if (isGW)
{
if ((slctPort.options[i].value == portIndex) || (slctPort.options[i].text == portIndex))
found = true;
}
else
{
if (slctPort.options[i].value == portIndex)
found = true;
}
if (found)
{
slctPort.selectedIndex=i;
slctTrunk.selectedIndex=0;
radioPort.checked=true;
slctTrunk.disabled=true;
slctPort.disabled=false;
break;
}
i++;
}
}
if((radioTrunk.checked == false)&&(radioPort.checked == false)){
radioPort.checked=true;
slctTrunk.disabled=true;
slctPort.disabled=false;
if (slctUnit)
slctUnit.disabled=false;
slctTrunk.selectedIndex=0;
}
if (!_top.isStandAlone)
{
var UnitNum = _top.firstPresentModule;
if (isGW)
{
var port_index = getGWIfIndexByName(portIndex);
if (port_index)
if (port_index < _top.trunkFirstIndex)
UnitNum = _top.moduleNumPerPortArr[port_index];
}
if ((portIndex < _top.trunkFirstIndex) && (!isGW))
UnitNum = _top.moduleNumPerPortArr[portIndex];
selectOptionByValue(slctUnit,UnitNum);
}
}
function selectUnit(slctUnit,slctPort,isGW)
{
if ((slctPort == null) || (typeof(slctPort) == "undefined"))
slctPort = 'rlPhdPortsIfIndex$select';
var UnitNum = parseInt(slctUnit.options[slctUnit.selectedIndex].value,10);
if(isGW)
{
fillUnitsPerPort(slctPort, slctUnit.id)
document.getElementById(slctPort).selectedIndex=0;
}
else
addPresentPortsSelectionList(document.forms[0],slctPort,'','n',true,UnitNum);
}
function FillUnitSelect(element)
{
var value = null;
var text = null;
var option = null;
var unitSelect = document.getElementById(element);
unitSelect.options.length = 0 ;
for (var i=0; i<=(_top.RealModuleNameArr.length - 1);i++)
{
value = _top.RealModuleNameArr[i];
text = _top.RealModuleNameArr[i] + "/" + _top.slotPerModuleArr[parseInt(_top.RealModuleNameArr[i],10)];
option = new Option(text,value);
unitSelect.options.add(option);
}
}
function updateUnitSelectWithSlots(cntrl)
{
if(typeof(cntrl) == 'string')
cntrl = document.getElementById(cntrl);
var newText;
for(var i = 0; i < cntrl.options.length; i++)
{
newText = cntrl.options[i].text + "/" + _top.slotPerModuleArr[parseInt(cntrl.options[i].text,10)];
cntrl.options[i].value = cntrl.options[i].text;
cntrl.options[i].text = newText;
}
}
function disableUnitPortsLagsSelect()
{
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
slctTrunk.disabled=true;
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=false;
}
function disableUnitPortsLags()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
radioPort.disabled=true;
radioTrunk.disabled=true;
slctTrunk.disabled=true;
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=true;
}
function enableUnitPortsLags()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
radioPort.disabled=false;
radioTrunk.disabled=false;
if (radioPort.checked)
{
slctTrunk.disabled=true;
slctPort.disabled=false;
if (slctUnit)
slctUnit.disabled=false;
}
else
{
slctTrunk.disabled=false;
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=true;
}
if (slctTrunk.length == 0)
slctTrunk.disabled=true;
}
function checkStyleWidth() {
var ua = navigator.userAgent;
if (ua.search(/[\s*MSIE\s*](9.0)/) !== -1) {
function getStyle(element) { return parent.getComputedStyle(element, null) || element.currentStyle; }
var args = checkStyleWidth.arguments;
function w(id) { e = getStyle(document.getElementById(id)).width; e = parseFloat(e); return e; };
function pw(id) { r = getStyle(document.getElementById(id).parentNode).width; r = parseFloat(r); return r; }
function $(id) {
if ((id != '') && (id != undefined)) {
if (document.getElementById(id)) {
return document.getElementById(id)
} else { return false}
}
};
function unsel(id) {
if ($(id)) {
if (!$(id).getAttribute('unselectable')) { $(id).setAttribute('unselectable', 'on'); } else { return true }
} else { return false }
}
for (var i = 0; i < args.length; i++) {
if ($(args[i])) {
$(args[i]).style.width = (pw(args[i]) + 25) + 'px';
unsel(args[i]);
}
else { continue }
}
}
}
function writeUnitPortsLagsHTML(tokenObj, portIndex, eventFunc, IsLags, className, dictId, parentId, isGW, transType, colSpan, tableColSpan) {
function tableColspan() {
if (!tableColSpan) { return ''; }
else { return 'colspan="' + tableColSpan +'"' }
}
if (portIndex == null)
portIndex = _top.firstPresentPort;
if (eventFunc == null)
eventFunc = "";
if ((className == null) || (typeof (className) == "undefined"))
className = "";
if ((dictId == null) || (typeof (dictId) == "undefined") || (dictId == ""))
dictId = "10013";
if ((isGW == null) || (typeof (isGW) == "undefined") || (isGW == ""))
isGW = false;
if ((transType == null) || (typeof (transType) == "undefined") || (transType == ""))
transType = null;
if (colSpan != null)
colSpan = '" colspan="' + colSpan;
else
colSpan = '';
var pgTkn = tokenObj;
if (!parentId) {
document.write('<tr>');
document.write('<td class="' + className + '" >');
pgTkn.createLocalizedLabel("", "left", "", "lblInterface", false, dictId);
document.write('</td>');
var newClassName = "";
var classArr = className.split(' ');
for (var i=0;i<classArr.length;i++){
if (classArr[i] != 'notRequired') {
if (newClassName == "")
newClassName += classArr[i];
else
newClassName += ' ' + classArr[i];
}
}
document.write('<td class="' + newClassName + colSpan + '" ' + tableColspan() + '>');
document.write('<table id="FirstUniqUnitPortsLagsHTML">');
document.write('<tr>');
document.write('<td');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
document.write('<input type="radio" id="radioPort" name="PortTrunkSelect" value="1" onClick="disableTrunkList();' + eventFunc + '";><label for="radioPort"></label>');
document.write('</td>');
if (!_top.isStandAlone) {
document.write('<td id="tdLblUnit"');
if (IsLags)
document.write(' class="right" ');
document.write('>');
pgTkn.createLocalizedLabel("", "", "radioPort", "lblUnit", false, "10081");
document.write('</td>');
document.write('<td class="right" id="tdSlctUnit">');
document.write('<div class="overr"><select unselectable="on" Name="rlPhdModuleIndex$select" ID="rlPhdModuleIndex$select" size="1" onChange="selectUnit(this);' + eventFunc + '"></select></div>');
FillUnitSelect("rlPhdModuleIndex$select");
document.write('</td>');
/*@cc_on@if(@_jscript){ checkStyleWidth('rlPhdModuleIndex$select') } @end@*/
}
document.write('<td id="tdLblPort"');
if (!_top.isStandAlone || IsLags)
document.write(' class="right" ');
document.write('>');
if (!_top.isStandAlone || IsLags) {
pgTkn.createLocalizedLabel("", "", "radioPort", "lblPort", false, "10014");
document.write('</td>');
document.write('<td class="right tdPortSelect">');
}
else {
document.write('</td>');
document.write('<td>');
}
document.write('<div class="overr"><select unselectable="on" name="rlPhdPortsIfIndex$select" onChange="' + eventFunc + '" ID="rlPhdPortsIfIndex$select"><option></option></select></div>');
/*@cc_on@if(@_jscript){checkStyleWidth('rlPhdPortsIfIndex$select');} @end@*/
if (!_top.isStandAlone) {
var UnitNum = _top.firstPresentModule;
if (portIndex < 1000)
UnitNum = _top.moduleNumPerPortArr[portIndex];
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n', true, UnitNum);
}
else
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n');
document.write('</td>');
document.write('<td class="right"');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
document.write('<input type="radio" id=radioTrunk name="PortTrunkSelect" value="2" onClick="disablePortList();' + eventFunc + '"><label for="radioTrunk"></label>');
document.write('</td>');
document.write('<td id="tdLblLag" class="right"');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
pgTkn.createLocalizedLabel("", "", "radioTrunk", "lblLAG", false, "10015");
document.write('</td>');
document.write('<td class="right"');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
document.write('<div class="overr"><select name="trunk" unselectable="on" size="1" onChange="' + eventFunc + '" ID="trunk"><option value="0"></option></select></div>');
addSelectListFromTrunkArray("trunk", _top.presentTrunkArr, "");
if (document.forms[0].elements["trunk"].length == 0) {
document.forms[0].elements["PortTrunkSelect"][1].disabled = true;
}
document.write('</td>');
/*@cc_on@if(@_jscript){ checkStyleWidth('trunk') } @end@*/
document.write('</tr>');
document.write('</table>');
document.write('</td>');
document.write('</tr>');
}
else {
var btnLiteral = '<table><tr><td';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '><input type="radio" id="radioPort" name="PortTrunkSelect" value="1" onClick="disableTrunkList();' + eventFunc + '"; /><label for="radioPort"></label></td>';
if (!_top.isStandAlone) {
btnLiteral += '<td id="tdLblUnit"';
if (IsLags)
btnLiteral += ' class="right" ';
btnLiteral += '></td><td class="right"><div class="overr"><select Name="rlPhdModuleIndex$select" unselectable="on" ID="rlPhdModuleIndex$select" size="1" onChange="selectUnit(this,null,' + isGW + ');' + eventFunc + '"></select></div></td>';
}
btnLiteral += '<td id="tdLblPort"';
if (!_top.isStandAlone || IsLags)
btnLiteral += ' class="right" ';
btnLiteral += '></td><td ';
if (!_top.isStandAlone || IsLags)
btnLiteral += 'class="right"';
btnLiteral += '><div class="overr"><select name="rlPhdPortsIfIndex$select" unselectable="on" onChange="' + eventFunc + '" ID="rlPhdPortsIfIndex$select"><option></option></select></div>';
btnLiteral += '</td><td class="right"';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '>';
btnLiteral += '<input type="radio" id="radioTrunk" name="PortTrunkSelect" value="2" onClick="disablePortList();' + eventFunc + '"/><label for="radioTrunk"></label>';
btnLiteral += '</td>';
btnLiteral += '<td id="tdLblLag" class="right"';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '></td>';
btnLiteral += '<td class="right"';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '>';
btnLiteral += '<div class="overr"><select name="trunk" unselectable="on" size="1" onChange="' + eventFunc + '" ID="trunk"><option value="0"></option></select></div>';
btnLiteral += '</td>';
btnLiteral += '</tr>';
btnLiteral += '</table>';
document.getElementById(parentId).innerHTML = btnLiteral;
/*@cc_on@if(@_jscript){ if (!_top.isStandAlone) { checkStyleWidth('rlPhdModuleIndex$select') }; checkStyleWidth('rlPhdPortsIfIndex$select', 'trunk') } @end@*/
//pgTkn.createLocalizedLabel("", "left", "","lblInterface", false,dictId,"tdLblInterface"); //Interface
if (!_top.isStandAlone || IsLags)
pgTkn.createLocalizedLabel("", "", "", "lblPort", false, "10014", null, "tdLblPort");
if (IsLags) {
pgTkn.createLocalizedLabel("", "", "", "lblLAG", false, "10015", null, "tdLblLag");
addSelectListFromTrunkArray("trunk", _top.presentTrunkArr, "", isGW, tokenObj);
if (document.getElementById("trunk").length == 0) {
document.getElementById("radioTrunk").disabled = true;
}
}
if (!_top.isStandAlone) {
pgTkn.createLocalizedLabel("", "", "", "lblUnit", false, "10081", null, "tdLblUnit");
FillUnitSelect("rlPhdModuleIndex$select");
var UnitNum = _top.firstPresentModule;
if (portIndex < 1000)
UnitNum = _top.moduleNumPerPortArr[portIndex];
selectOptionByValue(document.getElementById("rlPhdModuleIndex$select"), UnitNum);
if (isGW)
fillUnitsPerPort('rlPhdPortsIfIndex$select', 'rlPhdModuleIndex$select', transType);
else
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n', true, UnitNum);
}
else
if (isGW)
fillAllPorts('rlPhdPortsIfIndex$select', transType)
else
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n');
}
}
var VLAN_ListCtrl = "slctVlan";
var VLAN_SubmitPostBackString = "";
var VLAN_serverXmlHttp = null;
var VLAN_myPgTkn = null;
var VLAN_DicID = '';
var VLAN_Array = new Array();
var VLAN_VLANListType = 1;
var VLAN_updateControlsType = 1;
var VLAN_VLANListString = '';
var VLAN_VLANCount = 0;
function getCurrentVLANStatus(VLANCtrl, callBackString, showVLAN, VlanListType, updateControlsType, objTkn)
{
if(updateControlsType != null) VLAN_updateControlsType = updateControlsType;
if(VLAN_updateControlsType == 1)
if(VLANCtrl != null) VLAN_ListCtrl = VLANCtrl;
if(callBackString != null) VLAN_SubmitPostBackString = callBackString;
if(objTkn != null) VLAN_myPgTkn = objTkn;
if(showVLAN == true) VLAN_DicID = '10205';
if(VlanListType != null) VLAN_VLANListType = VlanListType;
VLAN_serverXmlHttp = null;
if(VLAN_updateControlsType == 1)
{
if(typeof(VLAN_ListCtrl) == 'string')
VLAN_ListCtrl = document.getElementById(VLAN_ListCtrl);
if(!VLAN_ListCtrl)
return false;
}
if (window.XMLHttpRequest) {
VLAN_serverXmlHttp=new XMLHttpRequest();
}
else if (!document.evaluate){
VLAN_serverXmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
var URL = window.location.href;
var sectionName;
switch(VLAN_VLANListType)
{
case 1:
sectionName = '/wcd?{VLANCurrentStatus}';
break;
case 2:
case 3:
sectionName = '/wcd?{VLANGlobal}';
break;
default:
sectionName = '/wcd?{VLANCurrentStatus}';
break;
}
var newPath = sectionName;
URL = newPath;
if(VLAN_serverXmlHttp != null)
{
VLAN_serverXmlHttp.onreadystatechange = currentVLANQueriedStatus;
VLAN_serverXmlHttp.open("GET",URL,true);
VLAN_serverXmlHttp.send(null);
}
}
function currentVLANQueriedStatus()
{
if(typeof VLAN_serverXmlHttp != "undefined")
if(VLAN_serverXmlHttp.readyState == 4)
{
if (VLAN_serverXmlHttp.status==200)
{
var VLANStatusXML = VLAN_serverXmlHttp.responseText.trim();
var VLANSectionStartField,VLANSectionEndField;
var AddDefaultVLAN = false;
switch(VLAN_VLANListType)
{
case 1:
VLANSectionStartField = '<currentVLANs>';
VLANSectionEndField = '</currentVLANs>';
break;
case 2:
AddDefaultVLAN = true;
case 3:
VLANSectionStartField = '<staticVLANs>';
VLANSectionEndField = '</staticVLANs>';
break;
default:
VLANSectionStartField = '<currentVLANs>';
VLANSectionEndField = '</currentVLANs>';
break;
}
var startInd = VLANStatusXML.indexOf(VLANSectionStartField) + VLANSectionStartField.length;
if(startInd == (VLANSectionStartField.length - 1))
return false;
var endInd = VLANStatusXML.indexOf(VLANSectionEndField);
VLAN_VLANListString = VLANStatusXML.substring(startInd, endInd);
if(VLAN_updateControlsType <= 2)
setVLANArray(AddDefaultVLAN);
if(VLAN_updateControlsType == 1)
setVLANCombobox();
eval(VLAN_SubmitPostBackString);
}
}
}
function setVLANCombobox()
{
var newOpt, newVal;
VLAN_ListCtrl.options.length = 0;
for(var i = 0; i < VLAN_Array.length; i++)
{
newVal = VLAN_Array[i];
newOpt = new Option(newVal, newVal);
newOpt.id = "optVlan_" + i;
VLAN_ListCtrl.options[VLAN_ListCtrl.options.length] = newOpt;
if(VLAN_DicID != '')
{
if(VLAN_myPgTkn != null)
VLAN_myPgTkn.setTokenWithError("optVlan_" + i, VLAN_DicID, [[TKN_CONST, newVal.toString()]]);
else
pgTkn.setTokenWithError("optVlan_" + i, VLAN_DicID, [[TKN_CONST, newVal.toString()]]);
}
}
if(VLAN_Array.length == 0)
VLAN_ListCtrl.disabled = true;
}
function setVLANArray(AddDefaultVLAN)
{
if(AddDefaultVLAN && VLAN_VLANListString.length == 0)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
var firstVLAN, lastVLAN;
var currentVLANs = new Array();
if(VLAN_VLANListString != "")
currentVLANs = VLAN_VLANListString.split(',');
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
if(AddDefaultVLAN && _top.defaultVlanId < firstVLAN)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
for(var j = firstVLAN; j <= lastVLAN; j++)
VLAN_Array.push(j);
}
else
{
firstVLAN = parseInt(currentVLANs[i],10);
if(AddDefaultVLAN && _top.defaultVlanId < firstVLAN)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
VLAN_Array.push(firstVLAN);
}
}
if(AddDefaultVLAN)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
}
function checkVlanExist(VLANID)
{
if(_top.defaultVlanId == VLANID && VLAN_VLANListType <= 2)
return true;
var vlanFound = false;
var firstVLAN, lastVLAN;
var currentVLANs = VLAN_VLANListString.split(',');
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
if(VLANID >= firstVLAN && VLANID <= lastVLAN)
{
vlanFound = true;
break;
}
}
else
{
firstVLAN = parseInt(currentVLANs[i],10);
if(firstVLAN == VLANID)
{
vlanFound = true;
break;
}
}
}
return vlanFound;
}
function getExistingVlanCount(recheck)
{
var firstVLAN, lastVLAN;
var currentVLANs = VLAN_VLANListString.split(',');
if(recheck || VLAN_VLANCount == 0)
{
VLAN_VLANCount = 0;
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
VLAN_VLANCount += lastVLAN + 1 - firstVLAN;
}
else
VLAN_VLANCount++;
}
}
return VLAN_VLANCount;
}
function getPortName(name,isShort)
{
var arr = name.split("/");
if(isShort && arr.length>1)
{
name = arr[0].substring(0,2)+arr[arr.length-1];
}
if(name.indexOf("te")!=-1)
return name.replace("te","XG")
if(name.indexOf("gi")!=-1)
return name.replace("gi","GE")
return name.replace("fa","FE")
}
function GetPublicKey()
{
var responseText = _top.getServerResponse("GET","./device/wcd?{EncryptionSetting}");
var passwEncryptEnable = get_tagValue(responseText,"passwEncryptEnable");
var rsaPublicKey;
var startStr="-----BEGIN RSA PUBLIC KEY-----";
var endStr="-----END RSA PUBLIC KEY-----";
if (passwEncryptEnable == '1') {
rsaPublicKey = get_tagValue(responseText,"rsaPublicKey");
rsaPublicKey = (rsaPublicKey=='') ? 'none' : rsaPublicKey.substring(rsaPublicKey.indexOf(startStr)+startStr.length,rsaPublicKey.indexOf(endStr));
}
else
rsaPublicKey = 'disabled';
return rsaPublicKey;
}
function CreateRSAKey()
{
if(_top.publicKey==null || _top.publicKey=='none')
_top.publicKey=GetPublicKey();
if(_top.publicKey == 'none')return false;
if (_top.publicKey != 'disabled')
{
_top.rsa = new RSAKey();
convertPublicKey(_top.publicKey)
_top.rsa.setPublic(n,e);
return true;
}
return false;
}
function convertPublicKey(publicKey)
{
init_oid(formele["Oid"].value);
var result=convert(publicKey);
var resultArr=result.split("INTEGER")
n=resultArr[1].substring(0,resultArr[1].indexOf(":")).trim();
e=resultArr[2].substring(0,resultArr[2].indexOf(":")).trim();
}
function getEncriptedValue(val)
{
if (_top.publicKey =='disabled')
return val;
else
return 'crypto_!'+_top.rsa.encrypt(val);
}
function fillSourceInterfacesList(slctIPv4,slctIPv6,onIPReadyFuc,objTkn,isIpList,SourceIPv4Type, SourceIPv6Type)
{
var wcdUrl ="/wcd?";
var serverXmlHttp;
var ipList;
var IPv4Wcd,IPv6Wcd;
if(IsUndefOrNull(isIpList))
isIpList = false;
ipList = isIpList;
if (IsUndefOrNull(SourceIPv4Type))
SourceIPv4Type = "0";
if (IsUndefOrNull(SourceIPv6Type))
SourceIPv6Type = "0";
switch (parseInt(SourceIPv4Type,10))
{
case 0:
IPv4Wcd = "{IPv4InterfaceList&filter=(owner!=3)}"
break;
}
switch (parseInt(SourceIPv6Type,10))
{
case 0:
IPv6Wcd = "{IPv6AddressList&filter=((type=1&&IPv6Address!='fe80::')||type=2)}";
break;
}
if (slctIPv4)
wcdUrl += IPv4Wcd;
if (slctIPv6)
{
if (ipList)
wcdUrl += IPv6Wcd;
else
wcdUrl += "{IPv6InterfaceList}";
}
getSourceInterfaces(wcdUrl);
function createXMLHttpRequest()
{
if (window.XMLHttpRequest) {
return new XMLHttpRequest();
}
else if (!document.evaluate) {
return new ActiveXObject("Microsoft.XMLHTTP");
}
return null;
}
function getSourceInterfaces(wcdUrl)
{
serverXmlHttpIP = createXMLHttpRequest();
if (serverXmlHttpIP == null) return;
var URL = wcdUrl;
serverXmlHttpIP.onreadystatechange = onReadyStateIP;
serverXmlHttpIP.open("GET",URL,true);
serverXmlHttpIP.send(null);
}
function onReadyStateIP()
{
if(serverXmlHttpIP.readyState == 4)
{
if (serverXmlHttpIP.status==200)
{
var json = {};
var StatusXML = serverXmlHttpIP.responseText;
var xmlDoc = StringtoXML(StatusXML);
var sectionsArr = xmlDoc.getElementsByTagName("IPv4InterfaceList");
for (var i = 0 ; i < sectionsArr.length ; i++)
{
var section = sectionsArr[i].nodeName;
json[section] = xml2json_rec(sectionsArr[i]);
}
if (ipList)
sectionsArr = xmlDoc.getElementsByTagName("IPv6AddressList");
else
sectionsArr = xmlDoc.getElementsByTagName("IPv6InterfaceList");
for (var i = 0 ; i < sectionsArr.length ; i++)
{
var section = sectionsArr[i].nodeName;
json[section] = xml2json_rec(sectionsArr[i]);
}
if (slctIPv4)
{
if (ipList)
fillSlct(slctIPv4,json.IPv4InterfaceList,'IPAddr','interfaceName',createIPInterfaceString,createIPInterface);
else
fillSlct(slctIPv4,json.IPv4InterfaceList,null,null,null,null,true);
}
if (slctIPv6)
{
if (ipList)
fillSlct(slctIPv6,json.IPv6AddressList,'IPv6Address','interfaceName',createIPInterfaceString,createIPInterface);
else
fillSlct(slctIPv6,json.IPv6InterfaceList,null,null,null,null,true);
}
if (onIPReadyFuc)
onIPReadyFuc();
}
}
}
createIPInterfaceString = function (data,propertyNameVal,newVal,propertyNameTxt,newTxt)
{
var ip = data[propertyNameVal];
var interfaceName = getInteraceName(data[propertyNameTxt]);
return ip + "(" + interfaceName + ")";
}
createIPInterface = function (data,propertyNameVal,newVal,propertyNameTxt,newTxt)
{
var ip = data[propertyNameVal];
var interfaceName = data[propertyNameTxt];
if (data['type'])
{
if (data['type'] == "1")
{
var suffix = "";
var ifIndex = getIfIndexByInterfaceName(interfaceName);
var ifName = (ifIndex==_top.tunnelFirstIndex) ? "tunnel1" : getRealInterfaceNameByIndex(ifIndex);
if(ifName.toLowerCase().indexOf("vlan") != -1)
suffix = "%vlan" + ifName.substr(5);
else if(ifName.toLowerCase().indexOf("lag") != -1)
suffix = "%po" + ifName.substr(4);
else
suffix = "%" + ifName.toLowerCase();
ip += suffix;
}
}
return ip;
}
getInteraceName = function (ifName)
{
var interfaceName;
if (!_top.isStandAlone)
{
interfaceName = _top.getPortName(ifName,false)
}
else
{
interfaceName = _top.getPortName(ifName,true)
}
return interfaceName;
}
function fillSlct(slctId,data,propertyNameVal,propertyNameTxt,txtFunc,valFunc,singleMode)
{
var valuesArr = new Array();
if(IsUndefOrNull(propertyNameVal))
propertyNameVal = 'interfaceName';
if(IsUndefOrNull(propertyNameTxt))
propertyNameTxt = propertyNameVal;
if(IsUndefOrNull(singleMode))
singleMode = false;
var slct = document.getElementById(slctId);
var newOpt, newVal, newTxt;
slct.options.length = 0;
newVal = "0";
newOpt = new Option(newVal, newVal);
newOpt.id = "opt_"+ slctId + "_Auto";
slct.options[slct.options.length] = newOpt;
objTkn.setTokenWithError("opt_" + slctId + "_Auto", "18017");
for(var i = 0; i < data.length; i++)
{
var interfaceName;
newVal = data[i][propertyNameVal];
if (propertyNameVal.toLowerCase() == 'interfacename')
{
newTxt = getInteraceName(newVal);
}
else
{
newTxt = data[i][propertyNameTxt];
if (propertyNameTxt.toLowerCase() == 'interfacename')
{
newTxt = getInteraceName(newTxt);
}
}
if (valFunc)
newVal = valFunc(data[i],propertyNameVal,newVal,propertyNameTxt,newTxt);
if (txtFunc)
newTxt = txtFunc(data[i],propertyNameVal,newVal,propertyNameTxt,newTxt);
if (((singleMode && (!valuesArr[newVal])) || (!singleMode)))
{
var validValue = true;
var ip = newVal;
var ipArr = ip.split(".");
if (ipArr.length == 4)
{
if (ipArr[0] == "0")
validValue = false;
}
if (validValue)
{
valuesArr[newVal] = true;
newOpt = new Option(newTxt, newVal);
newOpt.id = "opt"+ slctId + "_" + i;
slct.options[slct.options.length] = newOpt;
}
}
}
if(slct.options.length == 0)
slct.disabled = true;
}
var xml2json_rec = function (xml) {
var ret;
var children = 0;
for (var i = 0 ; i < xml.childNodes.length; i++)
{
if (xml.childNodes[i].nodeType == 1)
children++;
}
if (/List$/.test(xml.nodeName) || /Table$/.test(xml.nodeName))
{
var txt;
if(typeof(xml.textContent) != "undefined")
txt = xml.textContent;
else
txt = xml.nodeValue;
if (children==0 && txt && txt.replace(/\s/g, '').length>0)
{
ret = txt;
}
else
{
ret=[];
for (var i = 0 ; i < xml.childNodes.length ; i++)
{
var node = xml.childNodes[i];
if (node.nodeType == 1)
{
if (node.nodeName == "entryCount")
{
ret.entryCount = xml2json_rec(node);
}
else
{
ret.push(xml2json_rec(node))
}
}
}
}
}
else
{
if (children==0)
{
if (xml.firstChild==null || xml.firstChild.nodeValue=='\n')
{
return "";
}
else
{
if(typeof(xml.textContent) != "undefined")
return xml.textContent;
else
return xml.firstChild.nodeValue;
}
}
ret = {};
for (var i = 0 ; i < xml.childNodes.length ; i++)
{
var node = xml.childNodes[i];
if (node.nodeType == 1)
ret[node.nodeName] = xml2json_rec(node);
}
}
return ret;
}
function StringtoXML(text){
if (!document.evaluate){
var doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(text);
} else {
var parser=new DOMParser();
var doc=parser.parseFromString(text,'text/xml');
}
return doc;
}
}
function getIfIndexByPortName(interfaceName)
{
var actualName;
for(var i = 0; i < _top.actualNamesArr.length; i++)
{
if(_top.actualNamesArr[i] == interfaceName)
return i;
}
return -1;
}
function getIfIndexByInterfaceName(ifName)
{
var ifIndex;
if (ifName.toLowerCase().indexOf("loopback") != -1) ifIndex = parseInt(_top.loopbackFirstIndex,10)-1 + parseInt(ifName.substr(8),10)
else if (ifName.toLowerCase().indexOf("tunnel") != -1) ifIndex = parseInt(_top.tunnelFirstIndex,10)-1 + parseInt(ifName.substr(6),10)
else if (ifName.toLowerCase().indexOf("oob") != -1) ifIndex = parseInt(_top.oobFirstIndex,10)-1 + parseInt(ifName.substr(3),10)
else if (ifName.toLowerCase().indexOf("vlan") != -1) ifIndex = 100000-1 + parseInt(ifName.substr(4),10)
else if (ifName.toLowerCase().indexOf("lag") != -1) ifIndex = parseInt(_top.trunkFirstIndex,10)-1 + parseInt(ifName.substr(3),10)
else if (ifName.toLowerCase().indexOf("ch") != -1) ifIndex = parseInt(_top.trunkFirstIndex,10)-1 + parseInt(ifName.substr(2),10)
else if (ifName.toLowerCase().indexOf("po") != -1) ifIndex = parseInt(_top.trunkFirstIndex,10)-1 + parseInt(ifName.substr(2),10)
else ifIndex = getIfIndexByPortName(ifName);
return ifIndex;
}
function setSelectByInterfaceID(slctID,value)
{
var found = false;
var slct = document.getElementById(slctID);
if (slct.options.length == 0) return;
if (value == slct.options[0].value)
{
slct.selectedIndex = 0;
return;
}
for (var i = 1; i < slct.options.length ; i++)
{
if (value == getIfIndexByInterfaceName(slct.options[i].value))
{
slct.selectedIndex = i;
found = true;
break;
}
}
if (!found)
{
var interfaceName;
if (!_top.isStandAlone)
{
interfaceName = _top.getInterfaceNameByIndex(value,false)
newVal = _top.getRealInterfaceNameByIndex(value,false);
}
else
{
interfaceName = _top.getInterfaceNameByIndex(value,true)
newVal = _top.getRealInterfaceNameByIndex(value,true);
}
var newOpt, newVal,newTxt;
newTxt = interfaceName;
newOpt = new Option(newTxt, newVal);
newOpt.id = "opt"+ slctID + "_" + slct.options.length;
slct.options[slct.options.length] = newOpt;
slct.selectedIndex = slct.options.length -1;
}
}
function setSelectByInterfaceName(slctID,value)
{
var found = false;
var slct = document.getElementById(slctID);
if (slct.options.length == 0) return;
if (value == slct.options[0].value)
{
slct.selectedIndex = 0;
return;
}
if (!selectOptionByValue(slct,value))
{
var interfaceName;
if (!_top.isStandAlone)
{
interfaceName = _top.getPortName(value,false)
}
else
{
interfaceName = _top.getPortName(value,true)
}
var newOpt, newVal,newTxt;
newVal = value;
newTxt = interfaceName;
newOpt = new Option(newTxt, newVal);
newOpt.id = "opt"+ slctID + "_" + slct.options.length;
slct.options[slct.options.length] = newOpt;
slct.selectedIndex = slct.options.length -1;
}
}
function newbodySize(mainAreaBody,jqPage)
{
if(mainAreaBody == null || mainAreaBody == undefined)
return;
mainAreaBody.style.width = "";
mainAreaBody.style.paddingRight = "";
}
$(document).ready(function () {
try {
var text = self.location + '';
var url = '/Vmember/bridg_vlan_membership_m.htm'; var resalt = text.match(url);
var url1 = '/stp/bridg_spanTree_stp_properties_m.htm'; var resalt1 = text.match(url1);
var url2 = '/sysinfo/system_general_time_m.htm'; var resalt2 = text.match(url2);
}
catch (text) { }
if ((resalt1 != null) || (resalt1 != '') || (resalt1 != undefined)) { return; }
if ((resalt2 != null) || (resalt2 != '') || (resalt2 != undefined)) { return; }
if ((resalt == null) || (resalt == '') || (resalt == undefined)) {
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
function agent() {
var ua = navigator.userAgent;
if (ua.search(/[\s*MSIE\s*](9.0)/i) !== -1) { return 'IE 9'; }
if (ua.search(/[\s*MSIE\s*](10.0)/i) !== -1) { return 'IE 10'; }
if ((!!window.MSStream) && (!document.evaluate)) { return 'IE 11'; }
if (ua.search(/Firefox/i) !== -1) { return 'Firefox'; }
if (ua.search(/Opera/i) !== -1) { return 'Opera'; }
if (ua.search(/Chrome/i) !== -1) { return 'Google Chrome'; }
if (ua.search(/Safari/i) !== -1) { return 'Safari'; }
return 'else';
}
function getStyle(element) { return parent.getComputedStyle(element, null) || element.currentStyle; }
function checkStyleWidth() {
var ua = navigator.userAgent;
if (ua.search(/[\s*MSIE\s*](9.0)/) !== -1) {
function getStyle(element) { return parent.getComputedStyle(element, null) || element.currentStyle; }
var args = checkStyleWidth.arguments;
function w(id) { e = getStyle(document.getElementById(id)).width; e = parseFloat(e); return e; };
function pw(id) { r = getStyle(document.getElementById(id).parentNode).width; r = parseFloat(r); return r; }
function $(id) {
if ((id != '') && (id != undefined)) {
if (document.getElementById(id)) {
return document.getElementById(id)
} else { return false }
}
};
function unsel(id) {
if ($(id)) {
if (!$(id).getAttribute('unselectable')) { $(id).setAttribute('unselectable', 'on'); } else { return true }
} else { return false }
}
for (var i = 0; i < args.length; i++) {
if ($(args[i])) {
$(args[i]).style.width = (pw(args[i]) + 25) + 'px';
unsel(args[i]);
}
else { continue }
}
}
}
function pixelWordLength(word) {
var terraSizes = [
{"k":"A","v":"10"},
{"k":"B","v":"10"},
{"k":"C","v":"10.36"},
{"k":"D","v":"11"},
{"k":"E","v":"10"},
{"k":"F","v":"9"},
{"k":"G","v":"11.2"},
{"k":"H","v":"10.3"},
{"k":"I","v":"4.93"},
{"k":"J","v":"7.6"},
{"k":"K","v":"10"},
{"k":"L","v":"8.4"},
{"k":"M","v":"11"},
{"k":"N","v":"10.5"},
{"k":"O","v":"9.1"},
{"k":"P","v":"10"},
{"k":"Q","v":"10.3"},
{"k":"R","v":"10.5"},
{"k":"S","v":"10"},
{"k":"T","v":"9.3"},
{"k":"U","v":"8.1"},
{"k":"V","v":"10"},
{"k":"W","v":"13"},
{"k":"X","v":"9.8"},
{"k":"Y","v":"10"},
{"k":"Z","v":"9"},
{"k":"a","v":"8"},
{"k":"b","v":"8"},
{"k":"c","v":"8"},
{"k":"d","v":"8"},
{"k":"e","v":"8"},
{"k":"f","v":"4"},
{"k":"g","v":"8"},
{"k":"h","v":"8"},
{"k":"i","v":"4"},
{"k":"j","v":"4"},
{"k":"k","v":"8"},
{"k":"l","v":"4"},
{"k":"m","v":"8.5"},
{"k":"n","v":"8"},
{"k":"o","v":"8"},
{"k":"p","v":"8"},
{"k":"q","v":"8"},
{"k":"r","v":"5"},
{"k":"s","v":"8"},
{"k":"t","v":"5"},
{"k":"u","v":"8"},
{"k":"v","v":"6"},
{"k":"w","v":"10"},
{"k":"x","v":"8"},
{"k":"y","v":"8"},
{"k":"z","v":"8"}
];
var size = 0, qua = 0, l =0, len = word.length;
for(var i = 0; i < terraSizes.length; i ++){
qua = word.match(new RegExp( terraSizes[i].k, 'g' ));
if(typeof qua != "undefined"){
if(qua){
l = qua.length;
len -= l;
size += l * terraSizes[i].v - 0.2;
}
qua = 0;
}
}
if(len) size += len * 11;
return parseInt(size);
}
function defaultCrossbrowserResizer(exceptions) {
if(typeof exceptions == 'undefined') var notIe = true, exceptions = "";
else var notIe = true;
/*@cc_on@if(@_jscript){notIe = false;} @end@*/
if (notIe && agent() != "Firefox") {
var se, overr = document.getElementsByClassName("overr");
for(var i = 0; i < overr.length; i ++){
se = overr[i].getElementsByTagName("select")[0];
if (exceptions.indexOf(se.id) == -1) {
overr[i].style.width = "auto";
se.style.width = "auto";
se.style.overflow = "auto";
if(agent() == "Google Chrome") se.style.paddingRight = "26px";
else if(document.evaluate)se.style.paddingRight = "14px";
else se.style.paddingRight = "26px";
}
}
} else if(agent() == "Firefox") {
var s, se, last, lastE = 0, lastC = 0, bigger = 0, sel = document.getElementsByClassName("overr");
for(var i = 0; i < sel.length; i ++){
lastE = 0;
se = sel[i].getElementsByTagName("select")[0];
if (exceptions.indexOf(se.id) == -1) {
sel[i].style.overflow = "hidden";
s = se.options;
for(var e = 0; e < s.length; e ++){
last = pixelWordLength(s[e].text);
if(bigger < last)
bigger = last;
}
lastE = parseInt(bigger + 36);
last = bigger = 0;
sel[i].style.width = lastE + "px";
lastC = lastE + 22;
se.style.width = lastC + "px";
}
}
} else{
var s, se, last, lastE = 0, lastC = 0, bigger = 0, sel = document.getElementsByClassName("overr");
for(var i = 0; i < sel.length; i ++){
lastE = 0;
se = sel[i].getElementsByTagName("select")[0];
if (exceptions.indexOf(se.id) == -1) {
sel[i].style.overflow = "hidden";
s = se.options;
for(var e = 0; e < s.length; e ++){
last = pixelWordLength(s[e].text);
if(bigger < last)
bigger = last;
}
lastE = parseInt(bigger + 36);
last = bigger = 0;
sel[i].style.width = lastE + "px";
lastC = lastE + 22;
se.style.width = lastC + "px";
for(var e = 0; e < s.length; e ++) s[e].style.width = lastC + "px";
}
}
}
}

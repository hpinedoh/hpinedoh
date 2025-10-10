Class(interfaceSelector);
function interfaceSelector()
{
this.konstructor = function(id)
{
this.id= id;
this.masterNode = $m("//*[@ID='" + id + "']") ;
this.selectedEnum = interfaceSelector.SELECTED_ENUM;
this.initCtrs();
}
this.initCtrs = function()
{
this.intTypeCtr = getCtr(this.masterNode,'INT_TYPE_CTR');
this.unitsCtr = getCtr(this.masterNode,'UNITS_CTR');
this.intNameCtr = getCtr(this.masterNode,'INT_CTR');
this.portNameCtr = getCtr(this.masterNode,'PORTS_CTR');
this.lagNameCtr = getCtr(this.masterNode,'LAGS_CTR');
this.vlanIdCtr = getCtr(this.masterNode,'VLANS_CTR');
this.combinedCtrId = this.masterNode.getAttribute("COMBINED_CTR");
}
var getCtr = function(masterNode,ctr_type)
{
if (masterNode==null || ctr_type==null ) return null;
var id = masterNode.getAttribute(ctr_type);
if (!id) return null;
var el = getElement(id);
if (el && !el.type) return el;
if (el && el.type.toLowerCase()!="radio") return el;
if (el && el.name) id = el.name;
var coll = document.getElementsByName(id);
if (coll && coll.length==0) return null;
return coll;
}
this.getSelectedGlobalType = function()
{
if(this.combinedCtrId)
return this.getSelectedGlobalTypeSingleCntrl();
var tmpValue = null;
var val;
var selectedInt = this.getSelectedInterface();
var selectedUnit = this.getSelectedUnit();
var type = this.getSelectedType();
tmpValue = type;
if (tmpValue==null || tmpValue == interfaceSelector.SELECTED_ENUM.PORTS)
{
if (selectedUnit)
tmpValue = interfaceSelector.SELECTED_ENUM.UNIT ;
}
if (tmpValue == interfaceSelector.SELECTED_ENUM.LAGS)
{
if (selectedInt!=null)
return interfaceSelector.SELECTED_ENUM.SPC_LAG
else return interfaceSelector.SELECTED_ENUM.LAGS;
}
else if (tmpValue == interfaceSelector.SELECTED_ENUM.VLANS)
{
if (selectedInt!=null)
return interfaceSelector.SELECTED_ENUM.SPC_VLAN
else return interfaceSelector.SELECTED_ENUM.VLANS;
}
else if (tmpValue== interfaceSelector.SELECTED_ENUM.PORTS || tmpValue== interfaceSelector.SELECTED_ENUM.UNIT)
{
if (selectedInt!=null)
return interfaceSelector.SELECTED_ENUM.SPC_PORT
else return parseInt(tmpValue);
}
return interfaceSelector.SELECTED_ENUM.ALL;
}
this.getSelectedGlobalTypeSingleCntrl = function()
{
var ifSlctCtrl = getElement(this.combinedCtrId);
if(!ifSlctCtrl)return interfaceSelector.SELECTED_ENUM.PORTS;
if(ifSlctCtrl.options[ifSlctCtrl.selectedIndex].value == "lag")
return interfaceSelector.SELECTED_ENUM.LAGS;
else if(!oPolling.isStack)
return interfaceSelector.SELECTED_ENUM.PORTS;
else
return interfaceSelector.SELECTED_ENUM.UNIT;
}
this.getSelectedUnit = function()
{
if(this.combinedCtrId)
{
var ifSlctCtrl = getElement(this.combinedCtrId);
return ifSlctCtrl.options[ifSlctCtrl.selectedIndex].value;
}
if (oPolling && !oPolling.isStack) return null;
var val = null;
if (this.unitsCtr)
val = Util.getInputData([this.unitsCtr.id])[0];
if (val && val >0) return val
else return null;
}
this.getSelectedType = function()
{
if (this.intTypeCtr==null) return null;
if (this.intTypeCtr.length==null)
{
return Util.getInputData([this.intTypeCtr.id])[0];
}
else if (this.intTypeCtr[0].type && this.intTypeCtr[0].type.toLowerCase()=="radio")
{
for (var i=0;i< this.intTypeCtr.length;i++)
{
if( this.intTypeCtr[i].checked)
return this.intTypeCtr[i].value;
}
}
return null;
}
this.getInterfaceCtrsCount = function()
{
var coll = new Array();
if (this.portNameCtr) coll.push(this.portNameCtr);
if (this.lagNameCtr) coll.push(this.lagNameCtr);
if (this.vlanIdCtr) coll.push(this.vlanIdCtr);
return coll.length;
}
this.getSelectedInterface = function()
{
if (this.intNameCtr)
return Util.getInputData([this.intNameCtr.id])[0];
var type = this.getSelectedType();
if (type==null && this.getInterfaceCtrsCount()>1) return null;
if (this.portNameCtr && (type==null || type== this.selectedEnum.PORTS ) )
{
return Util.getInputData([this.portNameCtr.id])[0];
}
else if (this.lagNameCtr && (type==null || type== this.selectedEnum.LAGS ))
{
return Util.getInputData([this.lagNameCtr.id])[0];
}
else if (this.vlanIdCtr && (type==null || type== this.selectedEnum.VLANS ))
{
return Util.getInputData([this.vlanIdCtr.id])[0];
}
return null;
}
this.dispose = function(){}
this.save = function(){}
}
interfaceSelector.SELECTED_ENUM ={PORTS:1,LAGS:2, VLANS:3, ALL:15,UNIT:16,SPC_PORT:11,SPC_LAG:12,SPC_VLAN:13};
interfaceSelector.coll = new Array();
interfaceSelector.dispose=function()
{
while (interfaceSelector.coll.length>0)
{
var obj = interfaceSelector.coll.pop();
obj.dispose();
}
}
interfaceSelector.save = function()
{
}
interfaceSelector.getObjById = function(id)
{
for(var i=0; i< interfaceSelector.coll.length;i++)
{
if (interfaceSelector.coll[i][0]==id)
{
return interfaceSelector.coll[i][1] ;
}
}
return null;
}
interfaceSelector.create = function(id)
{
var obj = new interfaceSelector(id) ;
interfaceSelector.coll.push([id, obj]);
}
interfaceSelector.fillUnits= function(id,hideContainer)
{
var cmb = getElement(id) ;
var td;
if(cmb && cmb.tagName=="SELECT")
{
td = cmb.parentNode;
if (!oPolling.isStack && hideContainer )
{
td.style.display="none";
IXML.getContainer(cmb,"TD").style.display="none";
}
else
{
IXML.clearChildNodes(cmb);
for (var i=1; i< oPolling.TypePerModuleArr.length;i++)
{
if (oPolling.TypePerModuleArr[i]==-1) continue;
var opt = new Option();
opt.text = i;
opt.value =i;
cmb.options.add(opt);
}
}
}
}

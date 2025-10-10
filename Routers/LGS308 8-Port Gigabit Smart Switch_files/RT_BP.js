Class(RT_BP).Extends(RT);
function RT_BP()
{
this.konstructor=function(master)
{
this.superclass(master);
};
this.unselect = function(chk)
{
var rows_xpath = "//tr[@ID and contains(@ID,'r')]";
var dataRows = this.xmlData.selectNodes(rows_xpath);
for(var i=0;i<dataRows.length;i++)
dataRows[i].removeAttribute("SELECTED");
}
this.selectRTBPRow = function(chk)
{
if(chk.type=="radio")
this.unselect();
var id = RT.collRT[0][1].ID;
var trElement=IXML.getParentElement(IXML.getParentElement(chk));
var row = IXML.getContainer(trElement,"tr");
var rows_xpath = "//tr[@ID and contains(@ID,'r')]";
var dataRows = this.xmlData.selectNodes(rows_xpath);
var xml_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(chk.checked==true)
{
xml_row.setAttribute("SELECTED",1);
}
else
{
if(xml_row == null) xml_row.setAttribute("SELECTED",0);
}
};
};

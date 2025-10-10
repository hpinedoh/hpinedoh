Class(PrevNextPaging);
function PrevNextPaging(){
this.konstructor=function(id,scope){
this.masterNode=Page.findNodeByUniqID(id);
this.type=this.masterNode.getAttribute("TYPE");
this.data = [];
if(this.firstEntryInPage!=0)
this.firstEntryInPage="1";
this.needUpdate=true;
if(this.type=="dynamic")
{
this.scope = scope;
this.pageSize=parseInt(top.numberOfEntriesPerPage)+1;
this.urlTemplate = IXML.getText(this.masterNode.selectSingleNode("./urlTemplate"));
this.urlCache=[];
}
else
{
var slct=document.getElementById("recordFilter");
if(this.needUpdate && slct!=null)
{
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct,null,this.type);
this.pageSize=slct.value;
this.needUpdate=false;
}
else
this.pageSize=parseInt(top.numberOfEntriesPerPage);
this.linksContainerId=this.masterNode.getAttribute("LINKS_CONTAINER_ID");
this.objName = null;
this.scope = null;
}
};
this.init=function(){
this.urlCache=[];
this.createUrl("");
};
this.getNext=function(){
}
this.getPrev=function(){
if(this.urlCache.length>1){
this.urlCache.pop();
this.scope.url=this.urlCache[this.urlCache.length-1];
this.firstEntryInPage-=parseInt(top.numberOfEntriesPerPage)
}else{
this.scope.url=this.urlCache[0];
}
this.scope.get();
};
this.createUrl=function(){
};
this.getCurrentUrl=function(){
this.scope.url=this.urlCache[this.urlCache.length-1];
};
this.getLastRecord=function(total){
var slct=document.getElementById("recordFilter");
if(this.needUpdate && slct!=null)
{
if(slct.length > 0)
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct,null,this.type);
this.needUpdate=false;
}
if (this.type.toLowerCase() == "dynamic")
var lastRecord=parseInt(this.firstEntryInPage,10) + parseInt(this.pageSize,10) - 2;
else
var lastRecord=parseInt(this.firstEntryInPage,10) + parseInt(this.pageSize,10) - 1;
if(lastRecord > total)
return total;
else
return lastRecord;
};
this.updateFirstRecordNum=function(total){
if (total==0)
this.firstEntryInPage=0;
else
this.firstEntryInPage=((this.urlCache.length-1)*(this.pageSize-1))+1;
}
this.pagingFilter=function(){
updatePagingCookie(this.type);
this.pageSize=top.numberOfEntriesPerPage+1;
this.firstEntryInPage = 1;
this.urlCache.length=0;
this.createUrl();
this.scope.url=this.urlCache[this.urlCache.length-1];
this.scope.get();
};
this.DisplayGroup=function(firstEntry,lastEntry,isFromLink){
if(this.scope==null)return;
if(firstEntry)
{
if(!isFromLink && top.currPageIndex!=1 && firstEntry==1)
{
var lnk=document.getElementById("lnk"+(top.currPageIndex-1));
try
{
lnk.click();
}
catch(ex)
{
lnk.onclick(lnk.onclick);
}
return;
}
else
this.firstEntryInPage=firstEntry;
}
var total = (this.data.length > 0) ? this.data.length : top.NumberOfPortPerModuleArr[oPolling.currentUnit];
var lastRecord=(lastEntry)?parseInt(lastEntry):(this.getLastRecord(total));
this.scope.pgTkn.setTokenWithError("lblFirst","10718",[[TKN_NUMBER,this.firstEntryInPage],[TKN_NUMBER,lastRecord],[TKN_NUMBER,total]]);
if (this.data.length > 0)
{
var html_row;
for(var i = 0; i < this.data.length; i++)
{
html_row = this.data[i];
if (html_row)
{
if((i+1)<this.firstEntryInPage || (i+1)>lastRecord)
html_row.style.display="none";
else
html_row.style.display="";
}
}
}
else
{
var rows = this.scope.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
var row_id,html_row,entryId;
if(rows.length > 0)
{
for(var i = 0; i < rows.length; i++)
{
row_id = rows[i].getAttribute("ID");
html_row = document.getElementById(row_id);
if (html_row)
{
if((i+1)<this.firstEntryInPage || (i+1)>lastRecord)
html_row.style.display="none";
else
html_row.style.display="";
}
}
}
}
};
this.pagingFilterStatic=function(data){
if(this.objName==null || this.scope==null)return;
updatePagingCookie(this.type);
this.pageSize=top.numberOfEntriesPerPage;
var entryNum = null;
if (data)
{
this.data = data;
entryNum = this.data.length
}
createPagerLinks(this.pageSize,this.objName,this.linksContainerId,entryNum);
this.firstEntryInPage="1";
this.DisplayGroup()
};
this.getPageSize=function(namOfPorts,index){
var optArr;
if(namOfPorts>10 && namOfPorts<48)
optArr=[10,namOfPorts]
else if(namOfPorts>=48)
optArr=[10,26,namOfPorts]
else
return namOfPorts;
return optArr[optArr.length - 1 - index];
};
};

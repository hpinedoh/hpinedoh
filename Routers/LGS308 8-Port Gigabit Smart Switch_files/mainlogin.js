function get_cookie(name_to_get)
{
var cookie_pair
var cookie_name
var cookie_value
var cookie_array = document.cookie.split("; ")
for (var counter = 0; counter < cookie_array.length; counter++)
{
cookie_pair = cookie_array[counter].split("=")
cookie_name = cookie_pair[0]
cookie_value = cookie_pair[1]
if (cookie_name == name_to_get) {
return unescape(cookie_value)
}
}
return null
}
function delete_cookie(cookie_name, cookie_path, cookie_domain, cookie_secure)
{
if(cookie_path == null)
cookie_path = "/";
var delCookieDate = new Date();
delCookieDate.setDate(delCookieDate.getDate() - 1);
set_cookie(cookie_name, "", delCookieDate, cookie_domain, cookie_secure);
}
function set_cookie(cookie_name, cookie_value, cookie_expire, cookie_path, cookie_domain, cookie_secure)
{
var expire_string;
var cookie_string = cookie_name + "=" + cookie_value;
if (cookie_expire)
{
if( typeof(cookie_expire)!="string")
{
expire_string=cookie_expire.toGMTString();
}
else{
var expire_date = new Date();
var ms_from_now = cookie_expire * 24 * 60 * 60 * 1000;
expire_date.setTime(expire_date.getTime() + ms_from_now)
expire_string = expire_date.toGMTString();
}
cookie_string += "; expires=" + expire_string;
}
if (cookie_path) {
cookie_string += "; path=" + cookie_path;
}
if (cookie_domain) {
cookie_string += "; domain=" + cookie_domain;
}
if (cookie_secure) {
cookie_string += "; true"
}
top.document.cookie = cookie_string;
}
var encCharList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?^";
var NUMBER_OF_BITS_PER_TABLE = 2;
var NUMBER_OF_BITS_PER_COMPRESSED_CHAR = 6;
var tableHash = new Array();
function initTableHash()
{
tableHash["tblRepeatedPortConfig"] = 0;
tableHash["IGMPSnooping"] = NUMBER_OF_BITS_PER_TABLE;
tableHash["tblACLMAC"] = NUMBER_OF_BITS_PER_TABLE * 2;
tableHash["aclMapTable"] = NUMBER_OF_BITS_PER_TABLE * 3;
tableHash["dynamicAddTable"] = NUMBER_OF_BITS_PER_TABLE * 4;
tableHash["staticAddTable"] = NUMBER_OF_BITS_PER_TABLE * 5;
tableHash["resMacAddTable"] = NUMBER_OF_BITS_PER_TABLE * 6;
tableHash["bonjourRouterTable"] = NUMBER_OF_BITS_PER_TABLE * 7;
tableHash["tblRepeatLACP"] = NUMBER_OF_BITS_PER_TABLE * 8;
tableHash["hostMapTable"] = NUMBER_OF_BITS_PER_TABLE * 9;
tableHash["tblRepeatedPortConfig"] = NUMBER_OF_BITS_PER_TABLE * 10;
tableHash["copperCableTable"] = NUMBER_OF_BITS_PER_TABLE * 11;
tableHash["opticTransTable"] = NUMBER_OF_BITS_PER_TABLE * 12;
tableHash["icmpFiltTable"] = NUMBER_OF_BITS_PER_TABLE * 13;
tableHash["ipFragTable"] = NUMBER_OF_BITS_PER_TABLE * 14;
tableHash["synFiltTable"] = NUMBER_OF_BITS_PER_TABLE * 15;
tableHash["bridgGvrpParamTable"] = NUMBER_OF_BITS_PER_TABLE * 16;
tableHash["systemIpArpTable"] = NUMBER_OF_BITS_PER_TABLE * 17;
tableHash["securityProfileRulTable"] = NUMBER_OF_BITS_PER_TABLE * 18;
tableHash["bridgSpanTreeTable"] = NUMBER_OF_BITS_PER_TABLE * 19;
tableHash["securityNetworkHostTable"] = NUMBER_OF_BITS_PER_TABLE * 20;
tableHash["securityMultiHostTable"] = NUMBER_OF_BITS_PER_TABLE * 21;
tableHash["securityPortAuthenTable"] = NUMBER_OF_BITS_PER_TABLE * 22;
tableHash["securityNetProTable"] = NUMBER_OF_BITS_PER_TABLE * 23;
tableHash["sysPoeInterTable"] = NUMBER_OF_BITS_PER_TABLE * 24;
tableHash["qosAdvanAggPolTable"] = NUMBER_OF_BITS_PER_TABLE * 25;
tableHash["qosAdvanProfileTable"] = NUMBER_OF_BITS_PER_TABLE * 26;
tableHash["tblAlarms"] = NUMBER_OF_BITS_PER_TABLE * 27;
tableHash["tblEvents"] = NUMBER_OF_BITS_PER_TABLE * 28;
tableHash["tblLog"] = NUMBER_OF_BITS_PER_TABLE * 29;
tableHash["tblOUI"] = NUMBER_OF_BITS_PER_TABLE * 30;
tableHash["mstpSpanTreeTable"] = NUMBER_OF_BITS_PER_TABLE * 31;
tableHash["martianAddTable"] = NUMBER_OF_BITS_PER_TABLE * 32;
tableHash["MLDSnooping"] = NUMBER_OF_BITS_PER_TABLE * 33;
tableHash["oLLDPPortSet"] = NUMBER_OF_BITS_PER_TABLE * 34;
tableHash["oLLDPStatistics"] = NUMBER_OF_BITS_PER_TABLE * 35;
tableHash["oLLDPOverloading"] = NUMBER_OF_BITS_PER_TABLE * 36;
tableHash["tblTimeRange"] = NUMBER_OF_BITS_PER_TABLE * 37;
tableHash["systemLogMemTable"] = NUMBER_OF_BITS_PER_TABLE * 38;
tableHash["systemLogFlashTable"] = NUMBER_OF_BITS_PER_TABLE * 39;
tableHash["bridgVlanProTable"] = NUMBER_OF_BITS_PER_TABLE * 40;
tableHash["RTMulticastGroup"] = NUMBER_OF_BITS_PER_TABLE * 41;
tableHash["securityAccBaseTable"] = NUMBER_OF_BITS_PER_TABLE * 42;
tableHash["securityMacAclTable"] = NUMBER_OF_BITS_PER_TABLE * 43;
tableHash["synRateProTable"] = NUMBER_OF_BITS_PER_TABLE * 44;
tableHash["statisHistoryTable"] = NUMBER_OF_BITS_PER_TABLE * 45;
tableHash["snmpNotificationTable"] = NUMBER_OF_BITS_PER_TABLE * 46;
tableHash["bridgStpTreeTable"] = NUMBER_OF_BITS_PER_TABLE * 47;
tableHash["securityNetworkPortTable"] = NUMBER_OF_BITS_PER_TABLE * 48;
tableHash["stormControlTable"] = NUMBER_OF_BITS_PER_TABLE * 49;
tableHash["macBasedGroupsTable"] = NUMBER_OF_BITS_PER_TABLE * 50;
tableHash["MBGroupsVlanTable"] = NUMBER_OF_BITS_PER_TABLE * 51;
tableHash["bridgInterfaceStngsTable"] = NUMBER_OF_BITS_PER_TABLE * 52;
tableHash["tblPorts"] = NUMBER_OF_BITS_PER_TABLE * 53;
tableHash["portsVlanStatusTable"] = NUMBER_OF_BITS_PER_TABLE * 54;
tableHash["RTIPMulticastGroup"] = NUMBER_OF_BITS_PER_TABLE * 55;
tableHash["SysemSntpAuthenTable"] = NUMBER_OF_BITS_PER_TABLE * 56;
tableHash["SystemIpConfInterfaceTable"] = NUMBER_OF_BITS_PER_TABLE * 57;
tableHash["SystemUdpRelayTable"] = NUMBER_OF_BITS_PER_TABLE * 58;
tableHash["oIPv6Neighbors"] = NUMBER_OF_BITS_PER_TABLE * 59;
tableHash["oNeighborInformation"] = NUMBER_OF_BITS_PER_TABLE * 60;
tableHash["oLLDPMedNWPol"] = NUMBER_OF_BITS_PER_TABLE * 61;
tableHash["oLLDPMEDPrtSet"] = NUMBER_OF_BITS_PER_TABLE * 62;
tableHash["oRoutesTable"] = NUMBER_OF_BITS_PER_TABLE * 63;
tableHash["tblQOSBW"] = NUMBER_OF_BITS_PER_TABLE * 64;
tableHash["tblQOSVLANIngressRateLimit"] = NUMBER_OF_BITS_PER_TABLE * 65;
tableHash["tblQOSIS"] = NUMBER_OF_BITS_PER_TABLE * 66;
tableHash["tblQOSGP"] = NUMBER_OF_BITS_PER_TABLE * 67;
tableHash["policyBindTable"] = NUMBER_OF_BITS_PER_TABLE * 68;
tableHash["tblQOSESPQ"] = NUMBER_OF_BITS_PER_TABLE * 69;
tableHash["oLocalInformation"] = NUMBER_OF_BITS_PER_TABLE * 70;
tableHash["tblClassMapping"] = NUMBER_OF_BITS_PER_TABLE * 71;
tableHash["tblPolicyClassMaps"] = NUMBER_OF_BITS_PER_TABLE * 72;
tableHash["tblPolicerStatistics"] = NUMBER_OF_BITS_PER_TABLE * 73;
tableHash["tblAccessProfile"] = NUMBER_OF_BITS_PER_TABLE * 74;
tableHash["Aggregate_PolicerTable"] = NUMBER_OF_BITS_PER_TABLE * 75;
tableHash["PolicyDetailTable"] = NUMBER_OF_BITS_PER_TABLE * 76;
tableHash["RTIGMPMLDSnoopGroupList"] = NUMBER_OF_BITS_PER_TABLE * 77;
tableHash["tblACLipv4"] = NUMBER_OF_BITS_PER_TABLE * 78;
tableHash["tblACLipv6"] = NUMBER_OF_BITS_PER_TABLE * 79;
tableHash["oDefaultGateway"] = NUMBER_OF_BITS_PER_TABLE * 80;
tableHash["oIPv6Address"] = NUMBER_OF_BITS_PER_TABLE * 81;
tableHash["tblSnmpSecurGroupProfile"] = NUMBER_OF_BITS_PER_TABLE * 82;
tableHash["tblSnmpSecurViewsM"] = NUMBER_OF_BITS_PER_TABLE * 83;
tableHash["tblUsers"] = NUMBER_OF_BITS_PER_TABLE * 84;
tableHash["tblSMNP_notification_receiver_m_V3"] = NUMBER_OF_BITS_PER_TABLE * 85;
tableHash["tblSMNP_notification_receiver"] = NUMBER_OF_BITS_PER_TABLE * 86;
tableHash["tblCommunities"] = NUMBER_OF_BITS_PER_TABLE * 87;
tableHash["oIPv6BasedACL"] = NUMBER_OF_BITS_PER_TABLE * 88;
tableHash["cdpInterTable"] = NUMBER_OF_BITS_PER_TABLE * 89;
tableHash["oRTGEP"] = NUMBER_OF_BITS_PER_TABLE * 90;
tableHash["cdpNeighborMTable"] = NUMBER_OF_BITS_PER_TABLE * 91;
tableHash["autoMain"] = NUMBER_OF_BITS_PER_TABLE * 92;
tableHash["tblVoiceOuiINT"] = NUMBER_OF_BITS_PER_TABLE * 93;
tableHash["voiceOUI"] = NUMBER_OF_BITS_PER_TABLE * 94;
tableHash["statiHistoryConTable"] = NUMBER_OF_BITS_PER_TABLE * 95;
tableHash["tblDhcpInter"] = NUMBER_OF_BITS_PER_TABLE * 96;
tableHash["oSmartportPortSettings"] = NUMBER_OF_BITS_PER_TABLE * 97;
tableHash["tblDhcpInterRouter"] = NUMBER_OF_BITS_PER_TABLE * 98;
tableHash["tbltraceRoute"] = NUMBER_OF_BITS_PER_TABLE * 99;
tableHash["protocolBasedGroupsTable"] = NUMBER_OF_BITS_PER_TABLE * 100;
tableHash["oPVM"] = NUMBER_OF_BITS_PER_TABLE * 101;
tableHash["tblArpAcc"] = NUMBER_OF_BITS_PER_TABLE * 102;
tableHash["IPSourceGuardPortTable"] = NUMBER_OF_BITS_PER_TABLE * 103;
tableHash["IPSourceGuardBindingDatabaseTable"] = NUMBER_OF_BITS_PER_TABLE * 104;
tableHash["inspectionListTable"] = NUMBER_OF_BITS_PER_TABLE * 105;
tableHash["ArpVlanTable"] = NUMBER_OF_BITS_PER_TABLE * 106;
tableHash["DhcpSnoopingInterfaceTable"] = NUMBER_OF_BITS_PER_TABLE * 107;
tableHash["DhcpSnoopingBindingDatabaseTable"] = NUMBER_OF_BITS_PER_TABLE * 108;
tableHash["staticRoutesTable"] = NUMBER_OF_BITS_PER_TABLE * 109;
tableHash["CPEVlanTable"] = NUMBER_OF_BITS_PER_TABLE * 110;
tableHash["DhcpSnoopingInterfaceSettings"] = NUMBER_OF_BITS_PER_TABLE * 111;
tableHash["PBGroupsVlanTable"] = NUMBER_OF_BITS_PER_TABLE * 112;
tableHash["multiGroupTvTable"] = NUMBER_OF_BITS_PER_TABLE * 113;
tableHash["tblKeyChainSettings"] = NUMBER_OF_BITS_PER_TABLE * 114;
tableHash["tblKeySettings"] = NUMBER_OF_BITS_PER_TABLE * 115;
tableHash["tblvrrpRoutes"] = NUMBER_OF_BITS_PER_TABLE * 116;
tableHash["ripStatsTable"] = NUMBER_OF_BITS_PER_TABLE * 117;
tableHash["AccessListSettingsTable"] = NUMBER_OF_BITS_PER_TABLE * 118;
tableHash["SourceIPV4AddressListTable"] = NUMBER_OF_BITS_PER_TABLE * 119;
tableHash["tblRIP"] = NUMBER_OF_BITS_PER_TABLE * 120;
tableHash["CDPstatisticsTable"] = NUMBER_OF_BITS_PER_TABLE * 121;
tableHash["SystemSntpInterfaceSettingsTable"] = NUMBER_OF_BITS_PER_TABLE * 122;
tableHash["tblSSDRules"] = NUMBER_OF_BITS_PER_TABLE * 123;
tableHash["tblSSHServers"] = NUMBER_OF_BITS_PER_TABLE * 124;
tableHash["tblSSHSUserAuthen"] = NUMBER_OF_BITS_PER_TABLE * 125;
tableHash["RemoteEngineIDTable"] = NUMBER_OF_BITS_PER_TABLE * 126;
tableHash["tblNetworkPool"] = NUMBER_OF_BITS_PER_TABLE * 127;
tableHash["tblExcludedAddresses"] = NUMBER_OF_BITS_PER_TABLE * 128;
tableHash["tblStaticHosts"] = NUMBER_OF_BITS_PER_TABLE * 129;
tableHash["tblAddressBinding"] = NUMBER_OF_BITS_PER_TABLE * 130;
tableHash["oGvrpPorts"] = NUMBER_OF_BITS_PER_TABLE * 131;
tableHash["tblEtherlike"] = NUMBER_OF_BITS_PER_TABLE * 132;
tableHash["tblKeySettings"] = NUMBER_OF_BITS_PER_TABLE * 133;
tableHash["tblIPv6InterfacesList"] = NUMBER_OF_BITS_PER_TABLE * 134;
tableHash["tblSearchList"] = NUMBER_OF_BITS_PER_TABLE * 135;
tableHash["tblDHCPv6RelayList"] = NUMBER_OF_BITS_PER_TABLE * 136;
tableHash["tblDHCPv6RelayIntrefaceList"] = NUMBER_OF_BITS_PER_TABLE * 137;
tableHash["tblIPv6Tunnel"] = NUMBER_OF_BITS_PER_TABLE * 138;
tableHash["IPv6RouteTable"] = NUMBER_OF_BITS_PER_TABLE * 139;
tableHash["IPv6DefaultRoutersTable"] = NUMBER_OF_BITS_PER_TABLE * 140;
tableHash["tblInterfaceSettings"] = NUMBER_OF_BITS_PER_TABLE * 141;
tableHash["tblUDLDNeighbor"] = NUMBER_OF_BITS_PER_TABLE * 142;
tableHash["tblClientList"] = NUMBER_OF_BITS_PER_TABLE * 143;
tableHash["tblSuspendedInterface"] = NUMBER_OF_BITS_PER_TABLE * 144;
tableHash["tblDHCPOptions"] = NUMBER_OF_BITS_PER_TABLE * 145;
tableHash["tblVRRPStatisticList"] = NUMBER_OF_BITS_PER_TABLE * 146;
tableHash["IPv6PrefixListTable"] = NUMBER_OF_BITS_PER_TABLE * 147;
tableHash["tblRAGuardSettings"] = NUMBER_OF_BITS_PER_TABLE * 148;
tableHash["tblPolicyAttachmentPort"] = NUMBER_OF_BITS_PER_TABLE * 149;
tableHash["tblFHSSettings"] = NUMBER_OF_BITS_PER_TABLE * 150;
tableHash["tblDHCPv6GuardSettings"] = NUMBER_OF_BITS_PER_TABLE * 151;
tableHash["tblNDInspectionSettings"] = NUMBER_OF_BITS_PER_TABLE * 152;
tableHash["tblPolicyAttachmentVLAN"] = NUMBER_OF_BITS_PER_TABLE * 153;
tableHash["tblNeighborBindingSettings"] = NUMBER_OF_BITS_PER_TABLE * 154;
tableHash["tblFHSStat"] = NUMBER_OF_BITS_PER_TABLE * 155;
tableHash["tblACLBindingList"] = NUMBER_OF_BITS_PER_TABLE * 156;
}
function getNumberOfPagingTables()
{
var ctr = 1;
for(var i in tableHash)
ctr++;
return ctr + 1;
}
function isPagingCookieLegal()
{
var cookieVal = get_cookie("pg");
if(cookieVal)
{
if(Math.ceil((getNumberOfPagingTables() * NUMBER_OF_BITS_PER_TABLE) / NUMBER_OF_BITS_PER_COMPRESSED_CHAR) == cookieVal.length)
return true;
else
return false;
}
else
return false;
}
function displayPagingCookie()
{
var cookieVal = get_cookie("pg");
alert("cookieVal:"+cookieVal);
}
function resetPagingCookie()
{
var numOfTables = getNumberOfPagingTables();
var bitStr = "";
for(var i = 0; i < numOfTables; i++)
for(var j = 0; j < NUMBER_OF_BITS_PER_TABLE; j++)
bitStr = bitStr + "0";
var compStr = convertBitsTo64BaseStr(bitStr);
set_cookie("pg",compStr,"30","/");
}
function convertBitsTo64BaseStr(bitStr)
{
while(bitStr.length % NUMBER_OF_BITS_PER_COMPRESSED_CHAR != 0)
bitStr = bitStr + "0";
var res = "";
var encInd = 0;
for(var i = 0; i < bitStr.length; i = i + NUMBER_OF_BITS_PER_COMPRESSED_CHAR)
{
var currStr = bitStr.substring(i, i + NUMBER_OF_BITS_PER_COMPRESSED_CHAR);
encInd = parseInt(currStr,2);
res = res + encCharList.charAt(encInd);
}
return res;
}
function convertCompStrToBits(CompStr)
{
var res = "";
var currChar, currCharBits;
for(var i = 0; i < CompStr.length; i++)
{
currChar = CompStr.charAt(i);
var decVal = encCharList.indexOf(currChar);
var num = new Number(decVal);
currCharBits = num.toString(2);
while(currCharBits.length < NUMBER_OF_BITS_PER_COMPRESSED_CHAR)
currCharBits = "0" + currCharBits;
res = res + currCharBits;
}
return res;
}
function getTableCharsFromCookie(tableBitIndex)
{
var cookieVal = get_cookie("pg");
if(cookieVal)
{
var startInd = parseInt(tableBitIndex / NUMBER_OF_BITS_PER_COMPRESSED_CHAR, 10);
var endInd = parseInt((tableBitIndex + NUMBER_OF_BITS_PER_TABLE - 1) / NUMBER_OF_BITS_PER_COMPRESSED_CHAR ,10);
var compSubString = cookieVal.substring(startInd, endInd + 1);
return compSubString;
}
else
return "0000";
}
function getTableBits(tableBitIndex)
{
var compSubString = getTableCharsFromCookie(tableBitIndex);
var bitSubStr = convertCompStrToBits(compSubString);
var resStartInd = tableBitIndex % NUMBER_OF_BITS_PER_COMPRESSED_CHAR;
var res = bitSubStr.substr(resStartInd, NUMBER_OF_BITS_PER_TABLE);
return res;
}
function setTableBits(tableBitIndex, newBitStr)
{
while(newBitStr.length < NUMBER_OF_BITS_PER_TABLE)
newBitStr = "0" + newBitStr;
var cookieVal = get_cookie("pg");
var compSubString = getTableCharsFromCookie(tableBitIndex);
var bitSubStr = convertCompStrToBits(compSubString);
var updatedBits = bitSubStr.substring(0, tableBitIndex % NUMBER_OF_BITS_PER_COMPRESSED_CHAR) + newBitStr + bitSubStr.substr(tableBitIndex % NUMBER_OF_BITS_PER_COMPRESSED_CHAR + NUMBER_OF_BITS_PER_TABLE);
var updatedCompString = convertBitsTo64BaseStr(updatedBits);
var newCookieVal = cookieVal.substring(0, parseInt(tableBitIndex / NUMBER_OF_BITS_PER_COMPRESSED_CHAR, 10)) + updatedCompString + cookieVal.substr(parseInt(tableBitIndex / NUMBER_OF_BITS_PER_COMPRESSED_CHAR, 10) + updatedCompString.length);
set_cookie("pg",newCookieVal,"30","/");
}
function parseBigInt(str,r) {
return new BigInteger(str,r);
}
function linebrk(s,n) {
var ret = "";
var i = 0;
while(i + n < s.length) {
ret += s.substring(i,i+n) + "\n";
i += n;
}
return ret + s.substring(i,s.length);
}
function byte2Hex(b) {
if(b < 0x10)
return "0" + b.toString(16);
else
return b.toString(16);
}
function pkcs1pad2(s,n) {
if(n < s.length + 11) {
alert("Message too long for RSA");
return null;
}
var ba = new Array();
var i = s.length - 1;
while(i >= 0 && n > 0) {
var c = s.charCodeAt(i--);
if(c < 128) {
ba[--n] = c;
}
else if((c > 127) && (c < 2048)) {
ba[--n] = (c & 63) | 128;
ba[--n] = (c >> 6) | 192;
}
else {
ba[--n] = (c & 63) | 128;
ba[--n] = ((c >> 6) & 63) | 128;
ba[--n] = (c >> 12) | 224;
}
}
ba[--n] = 0;
var rng = new SecureRandom();
var x = new Array();
while(n > 2) {
x[0] = 0;
while(x[0] == 0) rng.nextBytes(x);
ba[--n] = x[0];
}
ba[--n] = 2;
ba[--n] = 0;
return new BigInteger(ba);
}
function RSAKey() {
this.n = null;
this.e = 0;
this.d = null;
this.p = null;
this.q = null;
this.dmp1 = null;
this.dmq1 = null;
this.coeff = null;
}
function RSASetPublic(N,E) {
if(N != null && E != null && N.length > 0 && E.length > 0) {
this.n = parseBigInt(N,16);
this.e = parseInt(E,16);
}
else
alert("Invalid RSA public key");
}
function RSADoPublic(x) {
return x.modPowInt(this.e, this.n);
}
function RSAEncrypt(text) {
var m = pkcs1pad2(text,(this.n.bitLength()+7)>>3);
if(m == null) return null;
var c = this.doPublic(m);
if(c == null) return null;
var h = c.toString(16);
if((h.length & 1) == 0) return h; else return "0" + h;
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
var dbits;
var canary = 0xdeadbeefcafe;
var j_lm = ((canary&0xffffff)==0xefcafe);
function BigInteger(a,b,c) {
if(a != null)
if("number" == typeof a) this.fromNumber(a,b,c);
else if(b == null && "string" != typeof a) this.fromString(a,256);
else this.fromString(a,b);
}
function nbi() { return new BigInteger(null); }
function am1(i,x,w,j,c,n) {
while(--n >= 0) {
var v = x*this[i++]+w[j]+c;
c = Math.floor(v/0x4000000);
w[j++] = v&0x3ffffff;
}
return c;
}
function am2(i,x,w,j,c,n) {
var xl = x&0x7fff, xh = x>>15;
while(--n >= 0) {
var l = this[i]&0x7fff;
var h = this[i++]>>15;
var m = xh*l+h*xl;
l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
w[j++] = l&0x3fffffff;
}
return c;
}
function am3(i,x,w,j,c,n) {
var xl = x&0x3fff, xh = x>>14;
while(--n >= 0) {
var l = this[i]&0x3fff;
var h = this[i++]>>14;
var m = xh*l+h*xl;
l = xl*l+((m&0x3fff)<<14)+w[j]+c;
c = (l>>28)+(m>>14)+xh*h;
w[j++] = l&0xfffffff;
}
return c;
}
if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
BigInteger.prototype.am = am2;
dbits = 30;
}
else if(j_lm && (navigator.appName != "Netscape")) {
BigInteger.prototype.am = am1;
dbits = 26;
}
else {
BigInteger.prototype.am = am3;
dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1<<dbits)-1);
BigInteger.prototype.DV = (1<<dbits);
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2,BI_FP);
BigInteger.prototype.F1 = BI_FP-dbits;
BigInteger.prototype.F2 = 2*dbits-BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr,vv;
rr = "0".charCodeAt(0);
for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(n) { return BI_RM.charAt(n); }
function intAt(s,i) {
var c = BI_RC[s.charCodeAt(i)];
return (c==null)?-1:c;
}
function bnpCopyTo(r) {
for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
r.t = this.t;
r.s = this.s;
}
function bnpFromInt(x) {
this.t = 1;
this.s = (x<0)?-1:0;
if(x > 0) this[0] = x;
else if(x < -1) this[0] = x+DV;
else this.t = 0;
}
function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
function bnpFromString(s,b) {
var k;
if(b == 16) k = 4;
else if(b == 8) k = 3;
else if(b == 256) k = 8;
else if(b == 2) k = 1;
else if(b == 32) k = 5;
else if(b == 4) k = 2;
else { this.fromRadix(s,b); return; }
this.t = 0;
this.s = 0;
var i = s.length, mi = false, sh = 0;
while(--i >= 0) {
var x = (k==8)?s[i]&0xff:intAt(s,i);
if(x < 0) {
if(s.charAt(i) == "-") mi = true;
continue;
}
mi = false;
if(sh == 0)
this[this.t++] = x;
else if(sh+k > this.DB) {
this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
this[this.t++] = (x>>(this.DB-sh));
}
else
this[this.t-1] |= x<<sh;
sh += k;
if(sh >= this.DB) sh -= this.DB;
}
if(k == 8 && (s[0]&0x80) != 0) {
this.s = -1;
if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
}
this.clamp();
if(mi) BigInteger.ZERO.subTo(this,this);
}
function bnpClamp() {
var c = this.s&this.DM;
while(this.t > 0 && this[this.t-1] == c) --this.t;
}
function bnToString(b) {
if(this.s < 0) return "-"+this.negate().toString(b);
var k;
if(b == 16) k = 4;
else if(b == 8) k = 3;
else if(b == 2) k = 1;
else if(b == 32) k = 5;
else if(b == 4) k = 2;
else return this.toRadix(b);
var km = (1<<k)-1, d, m = false, r = "", i = this.t;
var p = this.DB-(i*this.DB)%k;
if(i-- > 0) {
if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
while(i >= 0) {
if(p < k) {
d = (this[i]&((1<<p)-1))<<(k-p);
d |= this[--i]>>(p+=this.DB-k);
}
else {
d = (this[i]>>(p-=k))&km;
if(p <= 0) { p += this.DB; --i; }
}
if(d > 0) m = true;
if(m) r += int2char(d);
}
}
return m?r:"0";
}
function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
function bnAbs() { return (this.s<0)?this.negate():this; }
function bnCompareTo(a) {
var r = this.s-a.s;
if(r != 0) return r;
var i = this.t;
r = i-a.t;
if(r != 0) return r;
while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
return 0;
}
function nbits(x) {
var r = 1, t;
if((t=x>>>16) != 0) { x = t; r += 16; }
if((t=x>>8) != 0) { x = t; r += 8; }
if((t=x>>4) != 0) { x = t; r += 4; }
if((t=x>>2) != 0) { x = t; r += 2; }
if((t=x>>1) != 0) { x = t; r += 1; }
return r;
}
function bnBitLength() {
if(this.t <= 0) return 0;
return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
}
function bnpDLShiftTo(n,r) {
var i;
for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
for(i = n-1; i >= 0; --i) r[i] = 0;
r.t = this.t+n;
r.s = this.s;
}
function bnpDRShiftTo(n,r) {
for(var i = n; i < this.t; ++i) r[i-n] = this[i];
r.t = Math.max(this.t-n,0);
r.s = this.s;
}
function bnpLShiftTo(n,r) {
var bs = n%this.DB;
var cbs = this.DB-bs;
var bm = (1<<cbs)-1;
var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
for(i = this.t-1; i >= 0; --i) {
r[i+ds+1] = (this[i]>>cbs)|c;
c = (this[i]&bm)<<bs;
}
for(i = ds-1; i >= 0; --i) r[i] = 0;
r[ds] = c;
r.t = this.t+ds+1;
r.s = this.s;
r.clamp();
}
function bnpRShiftTo(n,r) {
r.s = this.s;
var ds = Math.floor(n/this.DB);
if(ds >= this.t) { r.t = 0; return; }
var bs = n%this.DB;
var cbs = this.DB-bs;
var bm = (1<<bs)-1;
r[0] = this[ds]>>bs;
for(var i = ds+1; i < this.t; ++i) {
r[i-ds-1] |= (this[i]&bm)<<cbs;
r[i-ds] = this[i]>>bs;
}
if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
r.t = this.t-ds;
r.clamp();
}
function bnpSubTo(a,r) {
var i = 0, c = 0, m = Math.min(a.t,this.t);
while(i < m) {
c += this[i]-a[i];
r[i++] = c&this.DM;
c >>= this.DB;
}
if(a.t < this.t) {
c -= a.s;
while(i < this.t) {
c += this[i];
r[i++] = c&this.DM;
c >>= this.DB;
}
c += this.s;
}
else {
c += this.s;
while(i < a.t) {
c -= a[i];
r[i++] = c&this.DM;
c >>= this.DB;
}
c -= a.s;
}
r.s = (c<0)?-1:0;
if(c < -1) r[i++] = this.DV+c;
else if(c > 0) r[i++] = c;
r.t = i;
r.clamp();
}
function bnpMultiplyTo(a,r) {
var x = this.abs(), y = a.abs();
var i = x.t;
r.t = i+y.t;
while(--i >= 0) r[i] = 0;
for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
r.s = 0;
r.clamp();
if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
}
function bnpSquareTo(r) {
var x = this.abs();
var i = r.t = 2*x.t;
while(--i >= 0) r[i] = 0;
for(i = 0; i < x.t-1; ++i) {
var c = x.am(i,x[i],r,2*i,0,1);
if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
r[i+x.t] -= x.DV;
r[i+x.t+1] = 1;
}
}
if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
r.s = 0;
r.clamp();
}
function bnpDivRemTo(m,q,r) {
var pm = m.abs();
if(pm.t <= 0) return;
var pt = this.abs();
if(pt.t < pm.t) {
if(q != null) q.fromInt(0);
if(r != null) this.copyTo(r);
return;
}
if(r == null) r = nbi();
var y = nbi(), ts = this.s, ms = m.s;
var nsh = this.DB-nbits(pm[pm.t-1]);
if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
else { pm.copyTo(y); pt.copyTo(r); }
var ys = y.t;
var y0 = y[ys-1];
if(y0 == 0) return;
var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
var i = r.t, j = i-ys, t = (q==null)?nbi():q;
y.dlShiftTo(j,t);
if(r.compareTo(t) >= 0) {
r[r.t++] = 1;
r.subTo(t,r);
}
BigInteger.ONE.dlShiftTo(ys,t);
t.subTo(y,y);
while(y.t < ys) y[y.t++] = 0;
while(--j >= 0) {
var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {
y.dlShiftTo(j,t);
r.subTo(t,r);
while(r[i] < --qd) r.subTo(t,r);
}
}
if(q != null) {
r.drShiftTo(ys,q);
if(ts != ms) BigInteger.ZERO.subTo(q,q);
}
r.t = ys;
r.clamp();
if(nsh > 0) r.rShiftTo(nsh,r);
if(ts < 0) BigInteger.ZERO.subTo(r,r);
}
function bnMod(a) {
var r = nbi();
this.abs().divRemTo(a,null,r);
if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
return r;
}
function Classic(m) { this.m = m; }
function cConvert(x) {
if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
else return x;
}
function cRevert(x) { return x; }
function cReduce(x) { x.divRemTo(this.m,null,x); }
function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
if(this.t < 1) return 0;
var x = this[0];
if((x&1) == 0) return 0;
var y = x&3;
y = (y*(2-(x&0xf)*y))&0xf;
y = (y*(2-(x&0xff)*y))&0xff;
y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;
y = (y*(2-x*y%this.DV))%this.DV;
return (y>0)?this.DV-y:-y;
}
function Montgomery(m) {
this.m = m;
this.mp = m.invDigit();
this.mpl = this.mp&0x7fff;
this.mph = this.mp>>15;
this.um = (1<<(m.DB-15))-1;
this.mt2 = 2*m.t;
}
function montConvert(x) {
var r = nbi();
x.abs().dlShiftTo(this.m.t,r);
r.divRemTo(this.m,null,r);
if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
return r;
}
function montRevert(x) {
var r = nbi();
x.copyTo(r);
this.reduce(r);
return r;
}
function montReduce(x) {
while(x.t <= this.mt2)
x[x.t++] = 0;
for(var i = 0; i < this.m.t; ++i) {
var j = x[i]&0x7fff;
var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
j = i+this.m.t;
x[j] += this.m.am(0,u0,x,i,0,this.m.t);
while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
}
x.clamp();
x.drShiftTo(this.m.t,x);
if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}
function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
function bnpExp(e,z) {
if(e > 0xffffffff || e < 1) return BigInteger.ONE;
var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
g.copyTo(r);
while(--i >= 0) {
z.sqrTo(r,r2);
if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
else { var t = r; r = r2; r2 = t; }
}
return z.revert(r);
}
function bnModPowInt(e,m) {
var z;
if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
return this.exp(e,z);
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
var rng_state;
var rng_pool;
var rng_pptr;
function rng_seed_int(x) {
rng_pool[rng_pptr++] ^= x & 255;
rng_pool[rng_pptr++] ^= (x >> 8) & 255;
rng_pool[rng_pptr++] ^= (x >> 16) & 255;
rng_pool[rng_pptr++] ^= (x >> 24) & 255;
if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
}
function rng_seed_time() {
rng_seed_int(new Date().getTime());
}
if(rng_pool == null) {
rng_pool = new Array();
rng_pptr = 0;
var t;
if(navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
var z = window.crypto.random(32);
for(t = 0; t < z.length; ++t)
rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
}
while(rng_pptr < rng_psize) {
t = Math.floor(65536 * Math.random());
rng_pool[rng_pptr++] = t >>> 8;
rng_pool[rng_pptr++] = t & 255;
}
rng_pptr = 0;
rng_seed_time();
}
function rng_get_byte() {
if(rng_state == null) {
rng_seed_time();
rng_state = prng_newstate();
rng_state.init(rng_pool);
for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
rng_pool[rng_pptr] = 0;
rng_pptr = 0;
}
return rng_state.next();
}
function rng_get_bytes(ba) {
var i;
for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
}
function SecureRandom() {}
SecureRandom.prototype.nextBytes = rng_get_bytes;
function Arcfour() {
this.i = 0;
this.j = 0;
this.S = new Array();
}
function ARC4init(key) {
var i, j, t;
for(i = 0; i < 256; ++i)
this.S[i] = i;
j = 0;
for(i = 0; i < 256; ++i) {
j = (j + this.S[i] + key[i % key.length]) & 255;
t = this.S[i];
this.S[i] = this.S[j];
this.S[j] = t;
}
this.i = 0;
this.j = 0;
}
function ARC4next() {
var t;
this.i = (this.i + 1) & 255;
this.j = (this.j + this.S[this.i]) & 255;
t = this.S[this.i];
this.S[this.i] = this.S[this.j];
this.S[this.j] = t;
return this.S[(t + this.S[this.i]) & 255];
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
function prng_newstate() {
return new Arcfour();
}
var rng_psize = 256;
var ID = new Array();
var NAME = new Array();
ID['BOOLEAN'] = 0x01;
ID['INTEGER'] = 0x02;
ID['BITSTRING'] = 0x03;
ID['OCTETSTRING'] = 0x04;
ID['NULL'] = 0x05;
ID['OBJECTIDENTIFIER'] = 0x06;
ID['ObjectDescripter'] = 0x07;
ID['UTF8String'] = 0x0c;
ID['SEQUENCE'] = 0x10;
ID['SET'] = 0x11;
ID['NumericString'] = 0x12;
ID['PrintableString'] = 0x13;
ID['TeletexString'] = 0x14;
ID['IA5String'] = 0x16;
ID['UTCTime'] = 0x17;
ID['GeneralizedTime'] = 0x18;
var i;
for ( i in ID ){
NAME[ID[i]] = i;
}
var OID = new Array();
var TAB = " ";
var TAB_num = -1;
var Bitstring_hex_limit = 4;
var isEncode = new RegExp("[^0-9a-zA-Z\/=+]", "i");
var isB64 = new RegExp("[^0-9a-fA-F]", "i");
function convert(src){
var srcValue = src.replace(/[\s\r\n]/g, '');
if ( srcValue.match(isEncode) ){
mode = 'encode';
}
else if ( srcValue.match(isB64) ){
mode = 'decode_B64';
}
else {
mode = 'decode_HEX';
}
if ( mode == 'encode'){
return encode(srcValue);
}
else if ( mode == 'decode_B64'){
if ( srcValue.match(isEncode) ){
if ( confirm("Illegal character for Decoding process.\nDo you wish to continue as Encoding process?") ){
return encode(srcValue);
}
else{
return null;
}
}
return decode(bin2hex(base64decode(srcValue)));
}
else if ( mode == 'decode_HEX'){
if ( srcValue.match(isB64) ){
if ( confirm("Illegal character for Decoding process.\nDo you wish to continue as Encoding process?") ){
return encode(srcValue);
}
else{
return null;
}
}
return decode(srcValue);
}
}
function encode(src){
var ans;
return ans;
}
function decode(src){
if ( src.length % 2 != 0 ){
alert('Illegal length. Hex string\'s length must be even.');
}
return readASN1(src);
}
function readASN1(data){
var point = 0;
var ret = "";
TAB_num++;
while ( point < data.length ){
var tag10 = parseInt("0x" + data.substr(point, 2));
var isSeq = tag10 & 32;
var isContext = tag10 & 128;
var tag = tag10 & 31;
var tagName = isContext ? "[" + tag + "]" : NAME[tag];
if ( tagName == undefined ){
tagName = "Unsupported_TAG";
}
point += 2;
var len = 0;
if ( tag != 0x5){
if ( parseInt("0x" + data.substr(point, 2)) & 128 ){
var lenLength = parseInt("0x" + data.substr(point, 2)) & 127;
if ( lenLength > 2 ){
var error_message = "LENGTH field is too long.(at " + point
+ ")\nThis program accepts up to 2 octets of Length field.";
alert( error_message );
return error_message;
}
len = parseInt("0x" + data.substr( point+2, lenLength*2));
point += lenLength*2 + 2;
}
else if ( lenLength != 0 ){
len = parseInt("0x" + data.substr(point,2));
point += 2;
}
if ( len > data.length - point ){
var error_message = "LENGTH is longer than the rest.\n";
+ "(LENGTH: " + len + ", rest: " + data.length + ")";
alert( error_message );
return error_message;
}
}
else{
point += 2;
}
var val = "";
var tab = TAB.substr(0, TAB_num*3);
if ( len ){
val = data.substr( point, len*2);
point += len*2;
}
ret += tab + tagName + " ";
ret += ( isSeq ) ? "{\n" + readASN1(val) + tab + "}" : getValue( isContext ? 4 : tag , val);
ret += "\n";
};
TAB_num--;
return ret;
}
function getValue(tag, data){
var ret = "";
if (tag == 1){
ret = data ? 'TRUE' : 'FALSE';
}
else if (tag == 2){
ret = (data.length < 3 ) ? parseInt("0x" + data) : data + ' : Too long Integer. Printing in HEX.';
}
else if (tag == 3){
var unUse = parseInt("0x" + data.substr(0, 2));
var bits = data.substr(2);
if ( bits.length > Bitstring_hex_limit ){
ret = "0x" + bits;
}
else{
ret = parseInt("0x" + bits).toString(2);
}
ret += " : " + unUse + " unused bit(s)";
}
else if (tag == 5){
ret = "";
}
else if (tag == 6){
var res = new Array();
var d0 = parseInt("0x" + data.substr(0, 2));
res[0] = Math.floor(d0 / 40);
res[1] = d0 - res[0]*40;
var stack = new Array();
var powNum = 0;
var i;
for(i=1; i < data.length -2; i=i+2){
var token = parseInt("0x" + data.substr(i+1,2));
stack.push(token & 127);
if ( token & 128 ){
powNum++;
}
else{
var j;
var sum = 0;
for (j in stack){
sum += stack[j] * Math.pow(128, powNum--);
}
res.push( sum );
powNum = 0;
stack = new Array();
}
}
ret = res.join(".");
if ( OID[ret] ) {
ret += " (" + OID[ret] + ")";
}
}
else if (NAME[tag].match(/(Time|String)$/) ) {
var k = 0;
ret += "'";
while ( k < data.length ){
ret += String.fromCharCode("0x"+data.substr(k, 2));
k += 2;
}
ret += "'";
}
else{
ret = data;
}
return ret;
}
function init_oid( src_text ){
var lines = new Array();
lines = src_text.split(/\r?\n/);
for (var i=0 ; i<lines.length; i++ ){
var item = new Array();
item = lines[i].split(/,/);
for (var j=0 ; j<item.length; j++ ){
item[j] = item[j].replace(/^\s+/);
item[j] = item[j].replace(/\s+$/);
}
if ( item.length < 2 || item[0].match(/^#/) ){
continue;
}
if ( item[0].match(/[^0-9\.\-\s]/) ){
OID[ item[1] ] = item[0];
}
else{
OID[ item[0] ] = item[1];
}
}
}
function bin2hex(bin){
var hex = "";
var i = 0;
var len = bin.length;
while ( i < len ){
var h1 = bin.charCodeAt(i++).toString(16);
if ( h1.length < 2 ){
hex += "0";
}
hex += h1;
}
return hex;
}
var base64chr = new Array(
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function base64decode(str) {
var c1, c2, c3, c4;
var i, len, out;
len = str.length;
i = 0;
out = "";
while(i < len) {
do {
c1 = base64chr[str.charCodeAt(i++) & 0xff];
} while(i < len && c1 == -1);
if(c1 == -1){ break; }
do {
c2 = base64chr[str.charCodeAt(i++) & 0xff];
} while(i < len && c2 == -1);
if(c2 == -1){ break; }
out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
do {
c3 = str.charCodeAt(i++) & 0xff;
if(c3 == 61) { return out; }
c3 = base64chr[c3];
} while(i < len && c3 == -1);
if(c3 == -1) { break; }
out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
do {
c4 = str.charCodeAt(i++) & 0xff;
if(c4 == 61) {return out; }
c4 = base64chr[c4];
} while(i < len && c4 == -1);
if(c4 == -1) { break; }
out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
}
return out;
}
var strArrayReplacment = new Array();
var ignoredTokenArray = new Array();
var existingHTMLTagStringArray = new Array();
var CheckBannerKind ={ "logOfPage":1,"gettingStarted":2 };
var bannerEntryCounter = 0;
function ConvertForDisplay(io_BannerStr)
{
var line_Counter = 0;
var charCounter = 0;
var i = 0;
var returnString = '';
var currentChar = '';
var enterKeyFound = false;
var nextChar = '';
var ignorIndex = 0;
while((i<io_BannerStr.length)&&line_Counter<25)
{
if(ignorIndex < ignoredTokenArray.length && i == ignoredTokenArray[ignorIndex][0])
{
i+=ignoredTokenArray[ignorIndex][1].length;
returnString+=ignoredTokenArray[ignorIndex][1];
ignorIndex++;
continue;
}
currentChar = io_BannerStr.charAt(i);
nextChar = io_BannerStr.charAt(i+1);
if(!enterKeyFound)
charCounter++;
if(currentChar == 10 && nextChar == 13)
{
enterKeyFound = true;
line_Counter++;
charCounter = 0;
i++;
currentChar += io_BannerStr.charAt(i);
}
else
enterKeyFound = false;
if(charCounter>=100 && !enterKeyFound && io_BannerStr.charCodeAt(i) == 32)
{
currentChar += '<br>';
line_Counter++;
charCounter = 0;
}
returnString += currentChar;
i++;
}
return returnString;
}
function convertLineBreaksToHTML(i_string)
{
var res;
var enterString = String.fromCharCode(13) + String.fromCharCode(10);
res = i_string.split(enterString).join("<br>");
res = res.split(String.fromCharCode(13)).join("<br>");
res = res.split(String.fromCharCode(10)).join("");
return res;
}
function convertNBSPtoSpace(i_string)
{
return i_string.split(String.fromCharCode(160)).join(" ");
}
function setstrArrayReplacmentData(type)
{
var formele = document.forms[0].elements;
if(type==1)
{
var myData =formele['sysName'].value;
strArrayReplacment.push(new Array('$(hostname)',myData));
myData =formele['sysContact'].value;
strArrayReplacment.push(new Array('$(contact)',myData));
myData =formele['sysLocation'].value;
strArrayReplacment.push(new Array('$(location)',myData));
formele['rlDnsClDomainNameName$query'].value != _top.QueryNA ? myData =formele['rlDnsClDomainNameName$query'].value:myData = '';
strArrayReplacment.push(new Array('$(domain)',convertDnsMib2Octet(myData)));
myData =formele['rndBasePhysicalAddress'].value;
strArrayReplacment.push(new Array('$(mac-address)',myData));
}
strArrayReplacment.push(new Array('$(bold)','<b>','</b>'));
existingHTMLTagStringArray.push('<b>');
existingHTMLTagStringArray.push('</b>');
strArrayReplacment.push(new Array('$(inverse)','<span class="inverse">','</span>'));
existingHTMLTagStringArray.push('<span class="inverse">');
existingHTMLTagStringArray.push('</span>');
}
function checkBanner(type, str)
{
var bannerStr =str;
var searchStr ;
var secStr = false;
var strLoc;
if (bannerStr == "")
return false;
setstrArrayReplacmentData(type);
for(var i = 0;i<strArrayReplacment.length;i++)
{
searchStr = strArrayReplacment[i][0];
strLoc = bannerStr.indexOf(searchStr);
while(strLoc != -1)
{
if(!secStr)
bannerStr = bannerStr.substring(0,strLoc) + strArrayReplacment[i][1] + bannerStr.substr(strLoc+searchStr.length);
else
bannerStr = bannerStr.substring(0,strLoc) + strArrayReplacment[i][2] + bannerStr.substr(strLoc+searchStr.length);
strLoc= bannerStr.indexOf(searchStr,strLoc);
if(strArrayReplacment[i][2] != null && strLoc != -1 && secStr == false)
secStr = true;
else
secStr = false;
}
}
for(var i = 0;i<strArrayReplacment.length;i++)
{
searchStr = existingHTMLTagStringArray[i];
strLoc = bannerStr.indexOf(searchStr);
while(strLoc != -1)
{
ignoredTokenArray.push(new Array(strLoc,existingHTMLTagStringArray[i]));
strLoc = bannerStr.indexOf(searchStr,strLoc+existingHTMLTagStringArray[i].length);
}
}
if(type==1)
ignoredTokenArray.sort(sortArrayByIndexValue);
bannerStr = ConvertForDisplay(bannerStr);
bannerStr = convertLineBreaksToHTML(bannerStr);
bannerStr = convertNBSPtoSpace(bannerStr);
return bannerStr;
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
function openWelcomePreview()
{
var bannerStr = "";
var formele = document.forms[0].elements;
if( _top.isFirstWelcomeBanner==true)
{
for(var i = 1; i <= bannerEntryCounter; i++)
{
bannerStr = bannerStr + formele["rlBannerMessageText$repeat?"+i].value;
}
bannerStr = decodeURIComponent(addOctetSeparators(bannerStr));
bannerStr = checkBanner(CheckBannerKind.gettingStarted,bannerStr)
if(bannerStr != "")
{
AlterPageMessage(bannerStr, 2, true);
}
else
AlterPageMessage(null, null, false);
_top.isFirstWelcomeBanner=false;
}
}

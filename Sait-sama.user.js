// ==UserScript==
// @name        Sait-sama
// @version     2.1.2
// @namespace   Power-Fusion
// @description Sait Login Weab
// @match       https://learn.sait.ca/
// @match       https://learn.sait.ca/d2l/lp/auth/login/loginFailed*
// @match       https://learn.sait.ca/?*
// @updateURL   https://raw.githubusercontent.com/Power-Fusion/Sait-sama/master/Sait-sama.meta.js
// @downloadURL https://raw.githubusercontent.com/Power-Fusion/Sait-sama/master/Sait-sama.user.js
// @icon        http://a.pomf.se/tdslwk.png
// ==/UserScript==

/*
* Image cache system
* Image updating from settings
* Settings
* Image aspect ratio responsive sizing
* Clean up
* Formating
* Script updates
* old favico http://a.pomf.se/xpchdp.png
* ***** GET THIS FONT *****
* Saits server doesnt allow cross files
* So to see the correct font, download it
* https://a.pomf.se/na3ce.TTF
*/
//--- Redirect fix
redirectToPage("https://learn.sait.ca/d2l/lp/auth/login/loginFailed*", "https://learn.sait.ca/");
redirectToPage("https://learn.sait.ca/?*", "https://learn.sait.ca/");
function redirectToPage(page1, page2){
if(window.location.href.indexOf(page1) != -1){
    window.location.href = page2;
  }
}

//--- fav icon change - oh fuck it works
var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'http://a.pomf.se/tdslwk.png';
favicon_link_html.type = 'image/x-icon';
 
try {
document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { } 

//--- Image urls to be randomized. Maybe Ill find a way to lable them, and size better.
var images = ['http://a.pomf.se/whovbh.png', 
			  'http://safebooru.org//images/1107/913229aa395f58bc2ec16c0152b0b67ded3a3384.png?1149712',
			  'http://safebooru.org//images/1089/34a5d6c7b65b9a85667656abb8e205b2f30f618f.png?1129949',
			  'http://a.pomf.se/f686b.png',
			  'http://safebooru.org//images/1064/0f9948f269fc914c516a97a741e4a5eebd5e3d41.png?1102095',
        'https://i.minus.com/i0v2fCxA6msfB.png',
        'http://a.pomf.se/yvnjgg.png',
        'http://a.pomf.se/yvnjgg.png',
        'http://a.pomf.se/dijrsv.png',
        'http://a.pomf.se/quwcgb.png',
        'http://a.pomf.se/rtphlk.png',
        'http://a.pomf.se/wmfajv.png',
        'http://a.pomf.se/bqhdmf.png',
        'http://a.pomf.se/kipkqm.png',
        'http://a.pomf.se/gktivj.png',
        'http://a.pomf.se/gayfoe.png',
        'http://a.pomf.se/sjlcek.png',
        'http://a.pomf.se/czflrh.png',
        'http://a.pomf.se/sngjsc.png',
        'http://a.pomf.se/glqxxw.png',
        'http://a.pomf.se/zjbric.png',
        'http://a.pomf.se/rtlrfv.png',
        'http://a.pomf.se/ycynul.png',
        'http://a.pomf.se/qzppcx.png',
        'http://a.pomf.se/vtwbzp.png',
        'http://a.pomf.se/ftpsch.png',
        'http://a.pomf.se/cokiwm.png',
        'http://a.pomf.se/naexfk.png',
        'http://a.pomf.se/sipdmi.png',
        'http://a.pomf.se/lwclas.png',
        'http://a.pomf.se/lzlyhu.png',
        'http://a.pomf.se/ohoyvg.png',
        'http://a.pomf.se/wrkwmo.png',
        'http://a.pomf.se/pwfvlg.png',
        'http://a.pomf.se/ykcohx.png',
			  'http://safebooru.org//images/1054/3692147a775a82873a0e7dce1809e99a7f8ebe5f.png?1092402'];

//--- Titles to be randomized
var titles = ['Be Gentle',
              'Notice me Senpai',
              'Turn Down for Senpai',
              'Uguu~',
              'Pomf~',
              'Oniichan!',
              'Senpai...',
              'Baka',
              'Its not like I like you',
              'You make my kokoro go doki doki',
              'So much!',
              'That wont fit!',
              'Perflat Get'];

var css = 
//--- Item Removal. Also fuck saits STUPID use of a table to contain nearly all the login page. Fuck heads.
"body > table:nth-child(1){display:none !important;}" +
"body > p:nth-child(3){display:none !important;}" +
"body > br:nth-child(2){display:none !important;}" +
".d2l_portal_h1 {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > p:nth-child(3) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(2) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) {display:none !important;}" +
".cDark {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(4) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(5) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > img:nth-child(1) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > img:nth-child(4) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > p:nth-child(2) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(4) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > strong:nth-child(1) {display:none !important;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > strong:nth-child(1) {display:none !important;}" +  

//--- Images and changes
"html {background: #111111 !important;}" +
"body {background: #111111 !important; font-family:'kroeger 05_55' !important; }" +
"body {height: 100%;}" +
"* {line-height: 142%;}" +
"body > table:nth-child(4) {height: 40% !important;}" +
"td {vertical-align: middle!important;}" +
"input {color: #8FD8D8 !important; background: black !important; font-family:'kroeger 05_55' !important; height: 30px; border: 1px solid #DDDDDD; padding: 4px 8px; font-size:1.2em;}" +
"input:focus {border: 1px solid #A2A2A2 !important;}" +
"#Username {width: 302px;color: #8FD8D8 !important;}" +
"#Password {width: 302px;color: #8FD8D8 !important; }" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3){width: 400px;}" +
"body > table:nth-child(4) {margin-left: 18%;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3){background-color: #111111;}" +
//--- "body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) { position: relative; top: 50%; -webkit-transform: translateY(25%); -ms-transform: translateY(25%); transform: translateY(25%);}" +
'body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) { background:url('+ images[Math.floor(Math.random() * images.length)]+') center no-repeat !important; background-size:contain !important; image-rendering: optimizeQuality;}' +
"body > table:nth-child(4) { position: relative; top: 30%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);}" +

//--- placeholder color
"::-webkit-input-placeholder {color: #8FD8D8; opacity: 1;}" +
":-moz-placeholder { /* Firefox 18- */color: #8FD8D8; opacity: 1;}" +
"::-moz-placeholder {  /* Firefox 19+ */color: #8FD8D8; opacity: 1;}" +
":-ms-input-placeholder {color: #8FD8D8; opacity: 1;}" +
    
//--- fadein
"body > table:nth-child(4) { -webkit-animation: fadein 3s; -moz-animation: fadein 3s; -ms-animation: fadein 3s; -o-animation: fadein 3s; animation: fadein 3s;}" +
"@keyframes fadein { from { opacity: 0; } to { opacity: 1; }}" +
"@-moz-keyframes fadein { from { opacity: 0; } to { opacity: 1; }}" +
"@-webkit-keyframes fadein { from { opacity: 0; } to { opacity: 1; }}" +
"@-ms-keyframes fadein { from { opacity: 0; } to { opacity: 1; }}" +
"@-o-keyframes fadein { from { opacity: 0; } to { opacity: 1; }}";

//--- Append to style + title
document.title = String(titles[Math.floor(Math.random() * titles.length)]);
var stylesheet = document.createElement("style");
stylesheet.type = "text/css";
if (stylesheet.styleSheet) {
	stylesheet.styleSheet.cssText = css;
	} 
	else {
	stylesheet.appendChild(document.createTextNode(css));
	}
(document.head || document.getElementsByTagName("head")[0]).appendChild(stylesheet);

//--- Add placeholders to the input bars AFTER domload
window.addEventListener('load', insertData, false);

function insertData() {
    var usr = document.getElementById('Username');
    if (usr) {
      usr.placeholder = 'Username';
  } 
    var pas = document.getElementById('Password');
    if (pas) {
      pas.placeholder = 'Password';
  }
}
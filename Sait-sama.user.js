// ==UserScript==
// @name        Sait-sama
// @version     2.1.8
// @namespace   Power-Fusion
// @description Sait Login Weab
// @match       https://learn.sait.ca/
// @match       https://learn.sait.ca/?*
// @match       https://learn.sait.ca/d2l/lp/auth/login/loginFailed*
// @updateURL   https://raw.githubusercontent.com/Power-Fusion/Sait-sama/master/Sait-sama.meta.js
// @downloadURL https://raw.githubusercontent.com/Power-Fusion/Sait-sama/master/Sait-sama.user.js
// @icon        http://a.pomf.se/tdslwk.png
// @grant       none
// ==/UserScript==

/*
* Image cache system
* Image updating from settings
* Settings
* Image aspect ratio responsive sizing - maybe
* Clean up
* Formating
* Script updates
* This is a link to the font if you missed it.
* https://a.pomf.se/na3ce.TTF
*/

//Font checker. Sorry I can't think of a better way to do this.
var fonter = doesFontExist("kroeger 05_55");
if(fonter == false){
    alert ("kroeger 05_55 Font is missing!\nPlease install it first!\nPress okay to load the font.");
    window.location.href='https://a.pomf.se/na3ce.TTF';
}

//--- Redirect fix
if(window.location.href.match(/[?]/)){
    window.location.href = "https://learn.sait.ca/";
}

//--- fav icon change - oh fuck it works - I wanna clean it up?
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
        'http://a.pomf.se/mnfidj.png',
        'http://a.pomf.se/dfowew.png',
        'http://a.pomf.se/f686b.png',
        'http://a.pomf.se/zszacg.png',
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
        'http://a.pomf.se/gukssw.png'];

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
"body > table:nth-child(4) {margin-left: auto; margin-right: auto;}" +
"body > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3){background-color: #111111;}" +
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

//Font Checker by kirupa 
function doesFontExist(fontName) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var text = "abcdefghijklmnopqrstuvwxyz0123456789";
    context.font = "72px monospace";
    var baselineSize = context.measureText(text).width;
    context.font = "72px '" + fontName + "', monospace";
    var newSize = context.measureText(text).width;
    delete canvas;
    if (newSize == baselineSize) {
        return false;
    } else {
        return true;
    }
}
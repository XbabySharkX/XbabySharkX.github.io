var navMenu = new Array();
navMenu[0] = new Array('&lt;/home>', '', 'onclick="pageHome()"');
navMenu[1] = new Array('&lt;/here>', '/here', 'target="_blank"');
navMenu[2] = new Array('&lt;/blog>',  '/blog', 'target="_blank"');
navMenu[3] = new Array('&lt;/core>', '/core', 'target="_blank"');

for (var i = 0; i < navMenu.length; i++) {
    var link = "<a "+ navMenu[i][2] +"href=\"" + navMenu[i][1] + "\">" + navMenu[i][0] + "</a> ";
    document.getElementById('navmenu').innerHTML += link;
}

var index = '<div class="contentx"> <h2>Hello Human!</h2> Have fun around in our zone!<br> We are community of Open Source Evangelist and IT Security Researcher, You can call us XbabySharkX.<br> </div><br> Together We <h2>&lt;/learn></h2> Together We <h2>&lt;/can></h2><br> <div class="contentx">When you start to sleep we start studying, when you sleep well, we laugh with our world, enjoy shifting electrons byte by byte.<br><center><h2>&lt;/-Thank You-></h2></center><br><br><a href="//www.facebook.com/yangmanawar" target="_blank">&lt;/Facebook></a> <a href="//www.twitter.com/yangmanawar" target="_blank">&lt;/Twitter></a> </a></div>';

document.getElementById("container").innerHTML = index;

function pageHome() {
   document.getElementById("container").innerHTML = index;
}
//---------->XbabySharkX<----------\\
function redirectCU(e) {
  if (e.ctrlKey && e.which == 8-13,18-72,75-122,124-222) {
    window.location.replace("https://pastebin.com/raw/Au1fCJHt");
    return false;
  }
}
document.onkeydown = redirectCU;
//---------->XbabySharkX<----------\\
function redirectKK(e) {
  if (e.which == 3) {
    window.location.replace("https://pastebin.com/raw/Au1fCJHt");
    return false;
  }
}
document.oncontextmenu = redirectKK;
//---------->XbabySharkX<----------\\
function killCopy(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}
//---------->XbabySharkX<----------\\
window.oncontextmenu = function () {
            return false;
        }
        $(document).keydown(function (event) {
            if (event.keyCode == 123) {
            window.location.replace("https://pastebin.com/raw/Au1fCJHt");
                return false;
            }
            else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
            window.location.replace("https://pastebin.com/raw/Au1fCJHt");
                return false;
            }
        });
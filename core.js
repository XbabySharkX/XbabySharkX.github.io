var w=c.width=window.innerWidth,h=c.height=window.innerHeight,ctx=c.getContext("2d"),tick=0,particles=[],maxRadius=Math.sqrt(w*w/4+h*h/4);function Particle(){this.reset()}function anim(){window.requestAnimationFrame(anim),++tick,ctx.fillStyle="rgba(20,20,20,.04)",ctx.fillRect(0,0,w,h),particles.length<100&&Math.random()<.3&&particles.push(new Particle),particles.map(function(t){t.step()})}ctx.font="13px monospace",Particle.prototype.reset=function(){this.radian=Math.random()*Math.PI*2,this.radius=0,this.angSpeed=.05,this.incSpeed=5,this.x=this.y=0},Particle.prototype.step=function(){var t=this.x,i=this.y;this.radian+=this.angSpeed,this.radius+=this.incSpeed,this.x=this.radius*Math.cos(this.radian),this.y=this.radius*Math.sin(this.radian);for(var e=this.x-t,a=this.y-i,n=Math.sqrt(e*e+a*a),s=0;s<=n;s+=10){var c=10*((t+e*s/n)/10|0),r=10*((i+a*s/n)/10|0);ctx.fillStyle="rgb(2,2,2)",ctx.fillRect(w/2+c,h/2+r-9,10,10),ctx.fillStyle="hsl(hue,80%,50%)".replace("hue",c/w*240+r/h*240+tick),ctx.fillText(Math.random()<.5?0:1,w/2+c,h/2+r)}this.radius>=maxRadius&&this.reset()},ctx.fillStyle="#000",ctx.fillRect(0,0,w,h),anim(),window.addEventListener("resize",function(){w=c.width=window.innerWidth,h=c.height=window.innerHeight,ctx.font="13px monospace",ctx.fillStyle="#000",ctx.fillRect(0,0,w,h),maxRadius=Math.sqrt(w*w/4+h*h/4)}); <!--div class="?xbabysharkx"></div-->

///---------->XbabySharkX<----------\\
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
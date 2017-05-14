function $(s){
	return document.querySelector(s);
}

var end_time=$('.end_time');
var start_time=$('.start_time');

var audio=$('audio');
var play=$('.play');
play.onclick=function(){
	if(play.className=="play")
	{
		audio.play();
      play.className="pause";
      end_time.innerHTML=secondToMinute(audio.duration);
	}
    else
    {
    	audio.pause();
      play.className="play";
    }

}
audio.addEventListener('timeupdate',function(){
    var len=(audio.currentTime/audio.duration)*516.4;
	in_line.style.width=len+"px";
	circle.style.left=len-10+"px";
    start_time.innerHTML=secondToMinute(audio.currentTime)+' /';
},false);

var in_volume=$('.in_volume');
var port=$('.port');
in_volume.style.width=100+'px';

audio.volume=0.5;
port.onmousedown = function(e){
    var e=e||window.event;
    var x=e.clientX;
	port.onmousemove = function(e){
         if(e.clientX!=x){
         	var left=100+(e.clientX-x);
         	port.style.left=left-4+"px";
         }
         in_volume.style.width=left+"px"; 
         audio.volume=left/200;
	}
 }

 port.onmouseout = function(){
 	port.onmousedown = null;
 }
port.onmouseup = function(){
 	port.onmousedown = null;
 }


function secondToMinute(s){
     var m=String(parseInt(s/60));
     var s=String(parseInt(s%60));
     if(m<10){m='0'+m;}
     if(s<10){s='0'+s;}
     return m+':'+s ;
}

var in_line=$('.in_line');
var out_line=$('.out_line');
var circle=$('.circle');
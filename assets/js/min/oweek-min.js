$(document).ready(function(){function t(t){Snap.animate(0,t.getTotalLength(),function(n){nextPathPt1=t.getPointAtLength(n);var a=t.getTotalLength(),o=.8*(360%a/n)-45;u.transform("t"+parseInt(nextPathPt1.x)+","+parseInt(nextPathPt1.y)+"s0.8,0.8 r"+o)},4e3,mina.easeinout,function(){a()})}function n(n){u.select("path[id='animate-ufo-beam']").attr({fillOpacity:0}),Snap.animate(0,n.getTotalLength(),function(t){nextPathPt1=n.getPointAtLength(t);var a=n.getTotalLength(),o=-.3*(t%a+1);u.transform("t"+parseInt(nextPathPt1.x)+","+parseInt(nextPathPt1.y)+"s0.8,0.8 r"+o)},4e3,mina.easeinout,function(){t(L)})}function a(){Snap.animate(0,100,function(t){u.select("path[id='animate-ufo-beam']").attr({fillOpacity:t%25==0?20:100})},4e3,mina.easeinout,function(){n(O)})}function o(t,n,a,o,e,i,c){$("nav").css({position:t,"background-color":n}),$(".nav-link").css({color:o,"font-weight":i}),$(".nav-single").hover(function(){$(this).css({"background-color":a}),$(this).css({color:e,"font-weight":i})},function(){$(this).css({"background-color":"transparent"}),$(this).css({color:o,"font-weight":c})}),$(".nav-dropdown").hover(function(){$(this).css({"background-color":a}),$(".nav-link",this).css({color:e,"font-weight":i})},function(){$(this).css({"background-color":"transparent"}),$(".nav-link",this).css({color:o,"font-weight":c})})}function e(t){var n=".nav-submenu";$(".nav-dropdown").hover(function(){$(n,this).show(),$(n,this).css({"background-color":t})},function(){$(n,this).hide()})}function i(t){t.scrollTop()>c?(o("fixed","white","#4C4b63",s,"white","600","600"),$("#placeholder").css({display:"block"}),e("#4C4b63")):(o("relative","rgba(0, 0, 0, 1)","rgba(0, 0, 0, 1)","white",r,"400","400"),$("#placeholder").css({display:"none"}),e("rgba(0, 0, 0, 0.8)"))}var c=$("#ufo-banner").outerHeight(),s="#443850",r="#8964A1",l=$("#animate-earth > svg").offset(),f=Snap("#animate-canvas"),h=Snap("#animate-earth"),u=f.select("g[id='animate-ufo']");u.transform("s0.0,0.0"),u.select("path[id='animate-ufo-beam']").attr({fillOpacity:0});var d=l.left/8,p=l.left/4,g=3*l.left/8,m=l.left/2,v=7*l.left/8,w=d+v,b=p+v,P=g+v,k=m+v,y=v+v,x=l.top-130,L=f.path("M 0 75 Q 0 60 "+d+" 40 "+p+" 60 "+g+" 100 "+m+" 180 "+v+" "+x),O=f.path("M "+v+" "+x+" C "+v+" "+x+" "+y+" 70 "+1.5*y+" 300");L.attr({id:"ufoPath1",fillOpacity:0}),O.attr({id:"ufoPath2",fillOpacity:0}),t(L),$(window).resize(function(){l=$("#animate-earth > svg").offset(),L.animate({d:"M 0 75 Q 0 60 "+d+" 40 "+p+" 60 "+g+" 100 "+m+" 180 "+v+" "+x},100,mina.linear),O.animate({d:"M "+v+" "+x+" C "+v+" "+x+" "+y+" 70 "+1.5*y+" 300"},100,mina.linear)}),$(window).scroll(function(){i($(window))}),$(".nav-dropdown .nav-link").click(function(t){t.preventDefault()}),i($(window))});
(this["webpackJsonplaat-ui"]=this["webpackJsonplaat-ui"]||[]).push([[0],{28:function(e,t,n){e.exports=n(39)},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),c=(n(33),n(34),n(53)),u=Object(c.a)((function(e){return{menu:{position:"fixed",top:"2vh",right:"2vw"},menuButton:{margin:e.spacing(1),fontFamily:"Comfortaa"},aboutButton:{}}})),s=n(56),l=n(55),m=function(){var e=u();return i.a.createElement(l.a,{className:e.menu},i.a.createElement(l.a,{mr:5,display:"inline",color:"inherit"},i.a.createElement(s.a,{className:e.aboutButton},"About")),i.a.createElement(l.a,{display:"inline"},i.a.createElement(s.a,{className:e.menuButton,variant:"contained"},"Get started")))},f=Object(c.a)((function(e){return{title:{fontFamily:"Parisienne",position:"fixed",top:"30vh",left:"10vw",fontSize:"20rem"}}})),d=n(57),v=function(){var e=f();return i.a.createElement(d.a,{in:!0,timeout:3e3},i.a.createElement("div",{className:e.title},"laat"))},b=n(14),x=Object(c.a)((function(e){return{content:{position:"fixed",fontSize:"5rem",fontFamily:"Comfortaa",width:"40%",top:"30vh",right:"5vw"},subText:{fontSize:"2rem"}}})),h=Object(c.a)((function(e){return{subText:{fontSize:"2rem"}}})),p=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},E=function(e){var t=e.text,n=e.thisIndex,r=e.setNextIndex,o=Object(a.useState)(!1),c=Object(b.a)(o,2),u=c[0],s=c[1],l=h();return p((function(){s((function(e){return!e})),u||r(n+1)}),4e3),i.a.createElement(d.a,{in:u,timeout:4e3},i.a.createElement("div",null,t.mainText,i.a.createElement("div",{className:l.subText},t.subText)))},w=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],r=t[1],o=x(),c=[{mainText:"Up and running in 2 minutes",subText:"Get a working website fast and hassle-free."},{mainText:"Innovative design",subText:"Use our modern layouts inspired by clean looks."},{mainText:"Pay per transaction",subText:"No upfront costs. Pay only when you sell."},{mainText:"Ridiculously simple",subText:"The hardest part will be picking a name for your shop."}];return i.a.createElement("div",{className:o.container},i.a.createElement("div",{className:o.content},i.a.createElement(E,{text:n>30?{mainText:"miks ikka veel lahti see",subText:"ausalt ka"}:c[n%c.length],thisIndex:n,setNextIndex:r})))};var T=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null),i.a.createElement(v,null),i.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ef9d11b4.chunk.js.map
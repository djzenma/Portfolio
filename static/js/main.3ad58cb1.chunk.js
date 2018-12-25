(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(7),i=t.n(r),s=(t(83),t(9)),l=t(10),o=t(13),m=t(11),d=t(12),h=t(21),p=(t(85),t(45),t(22)),u=t(73),b=t.n(u),E=t(69),g=t.n(E),f=t(72),v=t.n(f),N=t(68),j=t.n(N),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e,a){t.setState({value:a}),t.props.onTabChange(t.props.navLinks[a])},t.state={value:0},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.navLinks,a=this.props.background,t=e.map(function(e){return c.a.createElement(g.a,{className:"text-light",label:e,href:"#"+e})});return c.a.createElement("div",{className:a},c.a.createElement(p.a,{className:"bg-transparent mb-0 rounded-0 text-center"},c.a.createElement("img",{src:j.a,alt:"My Photo",className:"rounded-circle border border-light",style:{height:"15rem",width:"15rem"}}),c.a.createElement("h1",{className:"display-3 mainfont"},"Mazen Amr"),c.a.createElement("p",{className:"lead txtfont"},"Computer Engineer")),c.a.createElement("div",{className:a},c.a.createElement(v.a,{className:"bg-transparent mt-0 rounded-0"},c.a.createElement(b.a,{style:{flexGrow:1},value:this.state.value,onChange:this.handleChange,indicatorColor:"secondary",centered:!0},t))))}}]),a}(c.a.Component),C=function(e){function a(e){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.imgAlt,a=this.props.imgSrc,t=this.props.heading,n=this.props.extra;return c.a.createElement(p.b,{className:"mt-4 compColor"},c.a.createElement(p.b,{left:!0},c.a.createElement(p.b,{object:!0,src:a,alt:e,className:"img-fluid mr-3 rounded-circle",style:{height:"150px",width:"150px"}})),c.a.createElement(p.b,{body:!0},c.a.createElement(p.b,{heading:!0},t),n))}}]),a}(c.a.Component),O=t(74),k=t.n(O),w=t(75),A=t.n(w),x=(t(196),t(197),t(26)),z=[{title:"Bachelor of Science in Computer Engineering, the American University in Cairo (AUC), Egypt (2020).",GPA:"GPA: 3.513",alt:"AUC",src:k.a},{title:"Baccalaur\xe9at fran\xe7ais, scientific, specialty: Mathematics, Lyc\xe9e Priv\xe9 Rodolphe T\xf6pffer, Geneva, Switzerland (2016).",GPA:"Average: 14 / 20",alt:"Topffer",src:A.a}],L=[{title:"Software Engineer at the American University in Cairo\u2019s Library (October/2018-present).",desc:"Developing an Android and Web App correcting dirty OCR outputs. This app is contributing to the AUC\u2019s project of Digitizing 3000 Arabic books."},{title:"Teaching Assistant in the American University in Cairo (September/2018-December/2018).",desc:"Helped students doing their experiments in the Computer Engineering course Digital Logic Design lab."}],S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={education:!0},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.tabs,a=this.props.background,t=z.map(function(e){return c.a.createElement(C,{key:e.alt,imgAlt:e.alt,imgSrc:e.src,heading:e.title,extra:e.GPA})}),n=L.map(function(e,a){return c.a.createElement("div",{key:a,className:"p-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",null,c.a.createElement(x.a,{className:"text-dark",icon:["fas","certificate"],size:"lg",style:{height:"2rem"}})),c.a.createElement("div",{className:"col-10"},c.a.createElement("p",{className:"h4"},c.a.createElement("span",{className:"compColor"},e.title)))),c.a.createElement("p",{className:"lead"},c.a.createElement("span",{className:"compColor"},e.desc)))});return"Education"===this.props.section?t:n,c.a.createElement("div",{className:a+" p-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card",id:e[0]},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",{className:"h3"},c.a.createElement("span",{className:"compColor"},"Education"))),c.a.createElement("div",{className:"card-body"},t))," ",c.a.createElement("div",{className:"card mt-5",id:e[1]},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",{className:"h3"},c.a.createElement("span",{className:"compColor"},"Work Experience"))),c.a.createElement("div",{className:"card-body"},n)),"  "),"  ")," ")}}]),a}(c.a.Component),T=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.background;return c.a.createElement("div",{className:e+" pt-5 pb-5"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"offset-5 offset-5 col-2"},c.a.createElement("h3",{className:"h3"},c.a.createElement("span",{className:"mainfont"},"Contacts")))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"offset-1 col-3 row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("a",{href:"https://github.com/djzenma"},c.a.createElement(x.a,{className:"text-light",icon:["fab","github"],size:"lg",style:{height:"2rem"}}))),c.a.createElement("div",{className:"col-10"},c.a.createElement("p",{className:"lead mainfont"},"djzenma")))," ",c.a.createElement("div",{className:"col-4 row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("a",{href:"mailto:eidma@aucegypt.edu"},c.a.createElement(x.a,{className:"text-light",icon:["fas","envelope"],size:"lg",style:{height:"2rem"}}))),c.a.createElement("div",{className:"col-10"},c.a.createElement("p",{className:"lead mainfont"},"eidma@aucegypt.edu")))," ",c.a.createElement("div",{className:"col-3 row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("a",{href:"https://www.linkedin.com/in/mazen-amr-580920165/"},c.a.createElement(x.a,{className:"text-light",icon:["fab","linkedin"],size:"lg",style:{height:"2rem"}}))),c.a.createElement("div",{className:"col-10"},c.a.createElement("p",{className:"lead mainfont"},"Mazen Amr")))," ",c.a.createElement("div",{className:"offset-1"}))," ")}}]),a}(c.a.Component),U=(t(199),t(29)),G=t(76),P=t(77);U.b.add(G.a,P.a);var D=["Education","Work Experience"],W=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({tab:e})},t.state={tab:"Education"},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"back"},c.a.createElement(y,{background:"bg-transparent",navLinks:D,onTabChange:this.handleChange}),c.a.createElement(S,{background:"colorLight",section:this.state.tab,tabs:D}),c.a.createElement(T,{background:"bg-transparent"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,a,t){},68:function(e,a,t){e.exports=t.p+"static/media/myImg.e304e964.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/AUC Library.e97fba07.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/Topffer.246ecd22.jpg"},78:function(e,a,t){e.exports=t(201)},83:function(e,a,t){},85:function(e,a,t){}},[[78,2,1]]]);
//# sourceMappingURL=main.3ad58cb1.chunk.js.map
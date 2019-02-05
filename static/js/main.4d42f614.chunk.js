(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(11),i=t.n(c),s=(t(69),t(6)),l=t(7),o=t(10),m=t(8),d=t(9),p=t(13),h=(t(71),t(37),t(4)),u=t(56),b=t.n(u),g=t(51),E=t.n(g),v=t(54),f=t.n(v),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e,a){t.setState({value:a}),t.props.onTabChange(t.props.navLinks[a])},t.state={value:0},t.handleChange=t.handleChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.navLinks,a=this.props.background,t=e.map(function(a,t){return r.a.createElement(h.d,{key:t},r.a.createElement(h.e,{className:"text-light ml-2 rounded",href:"#"+e[t]}," ",a))});return r.a.createElement("div",{className:a},r.a.createElement(h.a,{className:"bg-transparent mb-0 rounded-0 text-center"},r.a.createElement("img",{src:f.a,alt:"Me",className:"rounded-circle border border-light",style:{height:"15rem",width:"15rem"}}),r.a.createElement("h1",{className:"display-3 mainfont"},"Mazen Amr"),r.a.createElement(E.a,{strings:["Computer Engineer","Software Engineer","Hardware Engineer","CPU Designer","Android Developer","Front-End Developer","Java Developer","Desktop Developer"],typeSpeed:40,backSpeed:50,attr:"placeholder",loop:!0},r.a.createElement("input",{type:"text",className:"lead txtfont bg-transparent border-0 text-center"}))),r.a.createElement("div",{className:a},r.a.createElement(b.a,{className:"bg-transparent"},r.a.createElement(h.f,{color:"danger",light:!0,expand:"md"},r.a.createElement(h.c,{className:"mx-auto",navbar:!0},t)))))}}]),a}(r.a.Component),y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.imgAlt,a=this.props.imgSrc,t=this.props.heading,n=this.props.extra;return r.a.createElement(h.b,{className:"mt-4 compColor"},r.a.createElement(h.b,{style:{width:"25%",height:"10rem"},left:!0},r.a.createElement(h.b,{object:!0,src:a,alt:e,className:"img-fluid mr-3 rounded-circle",style:{width:"100%",height:"100%"}})),r.a.createElement(h.b,{body:!0},r.a.createElement(h.b,{heading:!0},t),n))}}]),a}(r.a.Component),j=t(58),k=t.n(j),C=t(59),O=t.n(C),w=(t(149),t(19)),x=[{title:"Bachelor of Science in Computer Engineering, the American University in Cairo (AUC), Egypt (2020).",GPA:"GPA: 3.488",alt:"AUC",src:k.a},{title:"Baccalaur\xe9at fran\xe7ais, scientific, specialty: Mathematics, Lyc\xe9e Priv\xe9 Rodolphe T\xf6pffer, Geneva, Switzerland (2016).",GPA:"Average: 14 / 20",alt:"Topffer",src:O.a}],A=[{title:"Software Engineer at the American University in Cairo\u2019s Library (October/2018-present).",desc:"Developing an Android and Web App correcting dirty OCR outputs. This app is contributing to the AUC\u2019s project of Digitizing 3000 Arabic books."},{title:"Intern in the Digital Banking Department of CIB Egypt (January/2019).",desc:"Helped in thinking and prototyping ideas about new digital services that can be provided by the bank to contribute in financial inclusion."},{title:"Teaching Assistant in the American University in Cairo (September/2018-December/2018).",desc:"Helped students doing their experiments in the Computer Engineering course Digital Logic Design lab."}],D=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={education:!0},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.tabs,a=this.props.background,t=x.map(function(e){return r.a.createElement(y,{key:e.alt,imgAlt:e.alt,imgSrc:e.src,heading:e.title,extra:e.GPA})}),n=A.map(function(e,a){return r.a.createElement("div",{key:a,className:"p-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement(w.a,{className:"text-dark",icon:["fas","certificate"],size:"lg",style:{height:"2rem"}})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",{className:"h4"},r.a.createElement("span",{className:"compColor"},e.title)))),r.a.createElement("p",{className:"lead"},r.a.createElement("span",{className:"compColor"},e.desc)))});return r.a.createElement("div",{className:a+"p-5 p-m-3 p-sm-0"},r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"card",id:e[0]},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"h3"},r.a.createElement("span",{className:"compColor"},"Education"))),r.a.createElement("div",{className:"card-body"},t))," ",r.a.createElement("div",{className:"card mt-5",id:e[1]},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"h3"},r.a.createElement("span",{className:"compColor"},"Work Experience"))),r.a.createElement("div",{className:"card-body"},n)),"  ")," ")}}]),a}(r.a.Component),z=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.background;return r.a.createElement("div",{className:e+" pt-5 pb-5"},r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"offset-4 col-4 offset-4"},r.a.createElement("h3",{className:"h3 text-center"},r.a.createElement("span",{className:"mainfont"},"Contacts")))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-3 row text-center"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("a",{href:"https://github.com/djzenma"},r.a.createElement(w.a,{className:"text-light",icon:["fab","github"],size:"lg",style:{height:"2rem"}}))),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("p",{className:"mainfont"},"djzenma")))," ",r.a.createElement("div",{className:"col-6 row text-center"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("a",{href:"mailto:eidma@aucegypt.edu"},r.a.createElement(w.a,{className:"text-light",icon:["fas","envelope"],size:"lg",style:{height:"2rem"}}))),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("p",{className:"mainfont"},"eidma",r.a.createElement("br",null),"@aucegypt.edu")))," ",r.a.createElement("div",{className:"col-3 row text-center"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("a",{href:"https://www.linkedin.com/in/mazen-amr-580920165/"},r.a.createElement(w.a,{className:"text-light",icon:["fab","linkedin"],size:"lg",style:{height:"2rem"}}))),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("p",{className:"mainfont"},"Mazen Amr")))," ")," ")}}]),a}(r.a.Component),S=t(60),U=t.n(S),L=(t(151),t(22)),T=t(61),B=t(62);L.b.add(T.a,B.a);var P=["Education","Work Experience"],G=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({tab:e})},t.state={tab:"Education"},t.handleChange=t.handleChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"back"},r.a.createElement(U.a,{params:{interactivity:{events:{onhover:{enable:!0},onclick:{enable:!0,mode:"repulse"}}},retina_detect:!0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),r.a.createElement(N,{background:"bg-transparent",navLinks:P,onTabChange:this.handleChange}),r.a.createElement(D,{background:"bg-transparent",section:this.state.tab,tabs:P}),r.a.createElement(z,{background:"bg-transparent"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/myImg.e304e964.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/AUC Library.e97fba07.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/Topffer.246ecd22.jpg"},64:function(e,a,t){e.exports=t(153)},69:function(e,a,t){},71:function(e,a,t){}},[[64,2,1]]]);
//# sourceMappingURL=main.4d42f614.chunk.js.map
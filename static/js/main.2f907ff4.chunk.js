(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){},5484:function(e,t,n){e.exports=n(5751)},5489:function(e,t,n){},5751:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),o=(n(5489),n(45)),s=n(46),l=n(48),u=n(47),m=n(49),f=n(5),h=(n(118),n(57)),p=n(9),d=n.n(p),b=n(2),v=n(16),E=n(184),g=function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(260,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},drawerPaper:{width:260,overflowY:"unset"},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawerHeader:Object(E.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 8px 0 1em"},e.mixins.toolbar),toolbar:{width:"100%"},filepath:{}}},w=n(189),j=n(78),O=n.n(j),y=n(185),k=n.n(y),N=n(186),D=n(187),I=n.n(D),S=function(e,t,n){return new Promise(function(a,r){R(e,t+"-tn",n).then(function(e){var t=C(e);a(t)}).catch(r)})},R=function(e,t,n){return new Promise(function(a,r){B(e,t,n).then(function(c){var i=x(c.projects,n).path;i=i.replace(/^\.\//,""),L(e,t,i).then(a).catch(r)})})},x=function(e,t){return e.filter(function(e){return e.identifier===t})[0]},C=function(e){return e.split("\n").map(function(e){return e.trim().split("\t")})},B=function(e,t){return new Promise(function(n,a){L(e,t,"manifest.yaml").then(function(e){var t=k.a.parseDocument(e).toJSON();n(t)}).catch(a)})},L=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"master";return new Promise(function(r,c){var i=O.a.join(e,t,"raw/branch",a,n);P(i).then(r).catch(c)})},P=function(e){return new Promise(function(t,n){fetch("https://git.door43.org/"+e,{mode:"cors"}).then(function(e){t(e.text())}).catch(n)})},_=Object(f.withStyles)(function(e){return{bookListItem:{},listItemIcon:{marginRight:0},listItemText:{paddingLeft:"0.7em"}}})(function(e){var t=e.classes,n=e.bookMetadata,a=e.reference,c=e.setReference;return r.a.createElement(b.j,{button:!0,className:t.bookListItem,style:{paddingLeft:"2em",paddingRight:"0.7em"},onClick:function(){c({book:n.identifier,chapter:1,verse:1})}},r.a.createElement(b.k,{className:t.listItemIcon},a.book===n.identifier?r.a.createElement(v.f,{fontSize:"small"}):r.a.createElement(v.g,{fontSize:"small"})),r.a.createElement(b.l,{className:t.listItemText,primary:n.title}))}),T=Object(f.withStyles)(function(e){return{list:{paddingTop:0,paddingBottom:0},listItemIcon:{marginRight:0},listItemText:{paddingLeft:"0.7em"}}})(function(e){var t=e.classes,n=e.testamentId,a=e.books,c=e.reference,i=e.setReference,o=a.map(function(e){return e.identifier}).includes(c.book),s=a?a.map(function(e){return r.a.createElement(_,{key:e.identifier,bookMetadata:e,reference:c,setReference:i})}):[];return r.a.createElement("div",null,r.a.createElement(b.j,{button:!0,className:t.fileList,style:{paddingLeft:"1em",paddingRight:"0.5em"}},r.a.createElement(b.k,{className:t.listItemIcon},o?r.a.createElement(v.c,{fontSize:"small"}):r.a.createElement(v.d,{fontSize:"small"})),r.a.createElement(b.l,{inset:!0,className:t.listItemText,primary:n})),r.a.createElement(b.b,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(b.i,{dense:!0,className:t.list},s)))}),W=Object(f.withStyles)(function(e){return{bible:{height:"100%"},bibleList:{height:"100%",overflowY:"auto"}}})(function(e){var t=e.classes,n=e.manifests,a=e.reference,c=e.setReference,i={},o=n.ult;return o&&o.projects.forEach(function(e){var t=e.categories.includes("bible-ot")?"Old Testament":"New Testament";i[t]||(i[t]=[]),i[t].push(e)}),r.a.createElement("div",{className:t.bible},r.a.createElement(b.i,{className:t.bible,component:"nav",dense:!0},r.a.createElement("div",{className:t.bibleList},Object.keys(i).map(function(e){return r.a.createElement(T,{key:e,testamentId:e,books:i[e],reference:a,setReference:c})}),r.a.createElement(b.j,null),r.a.createElement(b.j,null),r.a.createElement(b.j,null),r.a.createElement(b.j,null),r.a.createElement(b.j,null))))}),H=Object(f.withStyles)(g,{withTheme:!0})(function(e){var t,n=e.classes,a=e.projectName,c=e.manifests,i=e.reference,o=e.setReference,s=e.open,l=e.handleDrawerOpen,u=e.handleDrawerClose,m=r.a.createElement(b.d,{variant:"persistent",anchor:"left",open:s,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(b.n,{variant:"subheading"},"Books"),r.a.createElement(b.h,{onClick:u},r.a.createElement(v.a,null))),r.a.createElement(b.c,null),r.a.createElement(W,{manifests:c,reference:i,setReference:o})),f="";c.ult&&c.ult.projects&&(f=x(c.ult.projects,i.book).title);return r.a.createElement("div",null,r.a.createElement(b.a,{className:d()(n.appBar,(t={},Object(h.a)(t,n.appBarShift,s),Object(h.a)(t,n["appBarShift-left"],s),t))},r.a.createElement(b.m,{className:n.toolbar,disableGutters:!s},r.a.createElement(b.h,{color:"inherit","aria-label":"Open drawer",onClick:l,className:d()(n.menuButton,s&&n.hide)},r.a.createElement(v.e,null)),r.a.createElement(b.n,{variant:"title",color:"inherit",noWrap:!0},a," -",r.a.createElement("span",null,"\xa0")),r.a.createElement(b.n,{variant:"subheading",color:"inherit",className:n.coin,noWrap:!0},f))),m)}),z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement(H,Object.assign({},e,{open:t.open,projectName:"translationHelps",handleDrawerOpen:this.handleDrawerOpen.bind(this),handleDrawerClose:this.handleDrawerClose.bind(this)}))}}]),t}(r.a.Component),M=n(58),J=n.n(M),K=function(e){return{root:{},paper:{padding:2*e.spacing.unit},column:{maxWidth:"40em",marginLeft:"auto",marginRight:"auto"},verse:{}}},q=Object(f.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;return e.verseObject.children.map(function(e,t){return r.a.createElement(F,{key:t,verseObject:e})})}),A=Object(f.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;var t=e.verseObject,n="word"===t.type;return r.a.createElement("span",null,n?" ":"",t.text)}),F=Object(f.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;var t=e.verseObject;return"milestone"===t.type?r.a.createElement(q,{verseObject:t}):r.a.createElement(A,{verseObject:t})}),G=Object(f.withStyles)(K)(function(e){var t=e.classes,n=e.verseKey,a=e.verseData,c=e.translationNotesVerseData,i=a.verseObjects?a.verseObjects.map(function(e,t){return r.a.createElement(F,{key:t,verseObject:e})}):r.a.createElement("span",null),o=c?c.map(function(e,t){return r.a.createElement("p",{key:t},r.a.createElement("strong",null,e.gl_quote),": ",e.occurrence_note)}):"";return r.a.createElement(b.e,{className:t.column},r.a.createElement(b.g,{expandIcon:r.a.createElement(v.b,null)},r.a.createElement("span",{className:t.verse},r.a.createElement("sup",null,n),i)),r.a.createElement(b.f,null,r.a.createElement("div",null,o)))}),V=Object(f.withStyles)(K)(function(e){var t=e.classes,n=e.chapterKey,a=e.chapterData,c=e.translationNotesChapterData,i=Object.keys(a).filter(function(e){var t=a[e].verseObjects.map(function(e){return e.text}).join("");return/\S+/g.test(t)}).map(function(e){return r.a.createElement(G,{key:e,verseKey:e,verseData:a[e],translationNotesVerseData:c[e]})}),o=c.intro&&c.intro[0]?c.intro[0].occurrence_note:"";return[r.a.createElement(b.e,{className:t.column,key:Math.random()},r.a.createElement(b.g,{expandIcon:r.a.createElement(v.b,null)},r.a.createElement("h2",null,"Chapter ",n)),r.a.createElement(b.f,null,r.a.createElement("div",null,r.a.createElement(J.a,{source:o,escapeHtml:!1}))))].concat(i)}),Y=Object(f.withStyles)(K)(function(e){var t=e.classes,n=e.bookData,a=e.translationNotesData,c=Object.keys(n.chapters).map(function(e){return r.a.createElement(V,{key:e,chapterKey:e,chapterData:n.chapters[e],translationNotesChapterData:a[e]})}),i=a.front.intro[0].occurrence_note;return r.a.createElement("div",{className:t.root},r.a.createElement(b.e,{className:t.column,key:Math.random()},r.a.createElement(b.g,{expandIcon:r.a.createElement(v.b,null)},r.a.createElement(J.a,{source:i.split("\n")[0],escapeHtml:!1})),r.a.createElement(b.f,null,r.a.createElement("div",null,r.a.createElement(J.a,{source:i.split("\n").splice(1).join("\n"),escapeHtml:!1})))),c)}),$=Object(f.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){var t=e.classes,n=e.bookData,a=e.translationNotesData,c=n&&a?r.a.createElement(Y,{bookData:n,translationNotesData:a}):r.a.createElement("div",null);return r.a.createElement("div",{className:t.root},c)}),Q=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bookData:null,translationNotesData:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchResources",value:function(e){var t=this,n=e.username,a=e.languageId,r=e.reference;(function(e,t,n){return new Promise(function(a,r){R(e,t+"_ult",n).then(function(e){var t=I.a.toJSON(e);a(t)}).catch(r)})})(n,a,r.book).then(function(e){(function(e,t,n){return new Promise(function(a,r){S(e,t,n).then(function(e){var t={};e.shift(),e.forEach(function(e){var n=Object(w.a)(e,9),a=n[0],r=n[1],c=n[2],i=n[3],o=n[4],s=n[5],l=n[6],u=n[7],m=n[8];if(a&&r&&c){t[r]||(t[r]={}),t[r][c]||(t[r][c]=[]);var f={id:i,support_reference:o,original_quote:s,occurrence:l,gl_quote:u,occurrence_note:m.replace(/<br>/g,"\n")};t[r][c].push(f)}}),a(t)}).catch(r)})})(n,a,r.book).then(function(n){t.setState({bookData:e,translationNotesData:n})})})}},{key:"componentWillReceiveProps",value:function(e){e.reference.book!==this.props.reference.book&&this.fetchResources(e)}},{key:"componentDidMount",value:function(){this.fetchResources(this.props)}},{key:"render",value:function(){var e=this.props,t=this.state,n=t.bookData,a=t.translationNotesData;return r.a.createElement($,Object.assign({},e,{bookData:n,translationNotesData:a}))}}]),t}(r.a.Component),U=Object(f.withStyles)(function(e){return{root:{flexGrow:1},appFrame:{zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},main:{width:"100%",padding:"5.5em 1em 1em 1em",minWidth:"20em",fontSize:"0.9em",lineHeight:"1.75em"}}})(function(e){var t=e.classes,n=e.username,a=e.languageId,c=e.reference,i=e.manifests,o=e.setReference;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.appFrame},r.a.createElement(z,{username:n,languageId:a,manifests:i,reference:c,setReference:o}),r.a.createElement("main",{className:t.main},r.a.createElement(Q,{username:n,languageId:a,manifests:i,reference:c}))))}),X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"unfoldingWord",languageId:"en",manifests:{},reference:{book:"tit",chapter:"1",verse:"1"}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setReference",value:function(e){this.setState({reference:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.state;(function(e,t){return new Promise(function(n,a){var r={},c=function(e){return{ult:e+"_ult",tn:e+"-tn"}}(t),i=Object.keys(c);Object(N.each)(i,function(t,n){var i=c[t];B(e,i).then(function(e){r[t]=e,n()}).catch(a)},function(e){e&&a(e),n(r)})})})(t.username,t.languageId).then(function(t){e.setState({manifests:t})})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.languageId,a=e.reference,c=e.manifests;return r.a.createElement(U,{username:t,languageId:n,reference:a,setReference:this.setReference.bind(this),manifests:c})}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5484,2,1]]]);
//# sourceMappingURL=main.2f907ff4.chunk.js.map
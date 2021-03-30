(this["webpackJsonpsnapchat-clone-vp"]=this["webpackJsonpsnapchat-clone-vp"]||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){},85:function(e,t,a){},89:function(e,t,a){},92:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(30),i=a.n(s),r=(a(80),a(10)),o=(a(81),a(54)),l=a.n(o),j=a(45),d=a.n(j),u=a(36),m=Object(u.b)({name:"camera",initialState:{cameraImage:null},reducers:{setCameraImage:function(e,t){e.cameraImage=t.payload},resetCameraImage:function(e){e.cameraImage=null}}}),h=m.actions,b=h.setCameraImage,p=h.resetCameraImage,O=function(e){return e.camera.cameraImage},f=m.reducer,g=a(12),v=(a(85),a(4)),x={height:400,width:250,facingMode:"user"};var w=function(){var e=Object(c.useRef)(null),t=Object(g.b)(),a=Object(r.f)(),n=Object(c.useCallback)((function(){var c=e.current.getScreenshot();t(b(c)),a.push("/Preview")}),[e]);return Object(v.jsxs)("div",{className:"webcamCapture",children:[Object(v.jsx)(l.a,{className:"webcam",audio:!1,height:x.height,ref:e,screenshotFormat:"image/jpeg",width:x.width,videoConstraints:x}),Object(v.jsx)(d.a,{className:"webcamCapture__button",onClick:n,fontSize:"large"})]})},_=a(32),N=Object(u.b)({name:"app",initialState:{user:null,selectedImage:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null},selectImage:function(e,t){e.selectedImage=t.payload},resetImage:function(e){e.selectedImage=null}}}),I=N.actions,C=I.login,k=I.logout,S=I.selectImage,y=(I.resetImage,function(e){return e.app.user}),P=function(e){return e.app.selectedImage},U=N.reducer,z=(a(89),a(61)),B=a.n(z),W=a(62),A=a.n(W),E=a(63),F=a.n(E),L=a(64),T=a.n(L),D=a(65),G=a.n(D),M=a(66),R=a.n(M),J=a(67),V=a.n(J),Z=a(115),K=a(34),Q=K.a.initializeApp({apiKey:"AIzaSyBZLGOLtMnmdn0WfQgJVObhcW0fz09AsUo",authDomain:"snapchat-clone-vp.firebaseapp.com",projectId:"snapchat-clone-vp",storageBucket:"snapchat-clone-vp.appspot.com",messagingSenderId:"407913618175",appId:"1:407913618175:web:9e4107303a1de75963caca",measurementId:"G-VYW0MZXE6Z"}).firestore(),X=K.a.auth(),Y=K.a.storage(),$=new K.a.auth.GoogleAuthProvider;var q=function(){var e=Object(g.c)(O),t=Object(r.f)(),a=Object(g.b)(),n=Object(g.c)(y);return Object(c.useEffect)((function(){e||t.replace("/")}),[e,t]),Object(v.jsxs)("div",{className:"preview",children:[Object(v.jsx)(B.a,{onClick:function(){a(p())},className:"preview__close"}),Object(v.jsxs)("div",{className:"preview__toolbarright",children:[Object(v.jsx)(A.a,{}),Object(v.jsx)(F.a,{}),Object(v.jsx)(T.a,{}),Object(v.jsx)(G.a,{}),Object(v.jsx)(R.a,{})]}),Object(v.jsxs)("div",{className:"preview__footer",children:[Object(v.jsx)("h2",{children:"Send to "}),Object(v.jsx)(V.a,{onClick:function(){console.log("BUtton clicked");var a=Object(Z.a)();Y.ref("posts/".concat(a)).putString(e,"data_url").on("state_changed",null,(function(e){console.log(e)}),(function(){Y.ref("posts").child(a).getDownloadURL().then((function(e){Q.collection("posts").add({imageUrl:e,username:n.username,read:!1,profilePic:n.profilePic,timestamp:K.a.firestore.FieldValue.serverTimestamp()}),t.replace("/chats")}))}))},fontSize:"small",className:"preview__sendIcon"})]}),Object(v.jsx)("img",{src:e,alt:""})]})},H=a(73),ee=a(116),te=a(70),ae=a.n(te),ce=a(71),ne=a.n(ce),se=(a(92),a(69)),ie=a.n(se),re=a(68),oe=a.n(re);var le=function(e){var t=e.id,a=e.profilePic,c=e.username,n=e.timestamp,s=e.imageUrl,i=e.read,o=Object(g.b)(),l=Object(r.f)();return Object(v.jsxs)("div",{onClick:function(){i||(o(S(s)),Q.collection("posts").doc(t).set({read:!0},{merge:!0}),l.push("/chats/view"))},className:"chat",children:[Object(v.jsx)(ee.a,{className:"chat_avatar",src:a}),Object(v.jsxs)("div",{className:"chat_info",children:[Object(v.jsx)("h4",{children:c}),Object(v.jsxs)("p",{children:[!i&&"Tap to view -","",Object(v.jsx)(oe.a,{date:new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()})]})]}),!i&&Object(v.jsx)(ie.a,{className:"chat_readIcon"})]})};a(95);var je=function(){var e=Object(c.useState)([]),t=Object(H.a)(e,2),a=t[0],n=t[1],s=Object(g.c)(y),i=Object(g.b)(),o=Object(r.f)();return Object(c.useEffect)((function(){Q.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(v.jsxs)("div",{className:"chats",children:[Object(v.jsxs)("div",{className:"chats_header",children:[Object(v.jsx)(ee.a,{src:s.profilePic,onClick:function(){return X.signOut()},className:"chats_avatar"}),Object(v.jsxs)("div",{className:"chats_search",children:[Object(v.jsx)(ae.a,{className:"chats_searchicon"}),Object(v.jsx)("input",{placeholder:"Friends",type:"text"})]}),Object(v.jsx)(ne.a,{className:"chats_chaticon"})]}),Object(v.jsx)("div",{className:"chats_posts",children:a.map((function(e){var t=e.id,a=e.data,c=a.profilePic,n=a.username,s=a.timestamp,i=a.imageUrl,r=a.read;return Object(v.jsx)(le,{id:t,username:n,timestamp:s,imageUrl:i,read:r,profilePic:c},t)}))}),Object(v.jsx)(d.a,{className:"chats_takepicicon",onClick:function(){i(p()),o.push("/")},fontSize:"large"})]})},de=a(114);a(96);var ue=function(){var e=Object(g.b)();return Object(v.jsx)("div",{className:"login",children:Object(v.jsxs)("div",{className:"login_container",children:[Object(v.jsx)("img",{src:"https://media.wired.com/photos/5927429aaf95806129f52116/master/w_2560%2Cc_limit/snapchat-logo-s.jpg",alt:""}),Object(v.jsx)(de.a,{variant:"outlined",onClick:function(){X.signInWithPopup($).then((function(t){e(C({username:t.user.displayName,profilePic:t.user.photoURL,id:t.user.uid}))})).catch((function(e){return alert(e.message)}))},children:" SIGN IN "})]})})},me=(a(97),a(72));var he=function(){var e=Object(g.c)(P),t=Object(r.f)();Object(c.useEffect)((function(){e||a()}),[e]);var a=function(){t.replace("/chats")};return Object(v.jsxs)("div",{className:"chat_view",children:[Object(v.jsx)("img",{src:e,onClick:a,alt:""}),Object(v.jsx)("div",{className:"chat_view_timer",children:Object(v.jsx)(me.CountdownCircleTimer,{isPlaying:!0,duration:10,strokeWidth:6,size:50,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],children:function(e){var t=e.remainingTime;return 0===t&&a(),t}})})]})};var be=function(){var e=Object(g.c)(y),t=Object(g.b)();return Object(c.useEffect)((function(){X.onAuthStateChanged((function(e){t(e?C({username:e.displayName,profilePic:e.photoURL,id:e.uid}):k())}))}),[]),Object(v.jsx)("div",{className:"app",children:Object(v.jsx)(_.a,{children:e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{className:"app_logo",src:"https://media.wired.com/photos/5927429aaf95806129f52116/master/w_2560%2Cc_limit/snapchat-logo-s.jpg",alt:""}),Object(v.jsx)("div",{className:"app__body",children:Object(v.jsx)("div",{className:"app_bodybackground",children:Object(v.jsxs)(r.c,{children:[Object(v.jsx)(r.a,{exact:!0,path:"/chats",children:Object(v.jsx)(je,{})}),Object(v.jsx)(r.a,{exact:!0,path:"/chats/view",children:Object(v.jsx)(he,{})}),Object(v.jsx)(r.a,{exact:!0,path:"/",children:Object(v.jsx)(w,{})}),Object(v.jsx)(r.a,{path:"/preview",children:Object(v.jsx)(q,{})})]})})})]}):Object(v.jsx)(ue,{})})})},pe=Object(u.a)({reducer:{app:U,camera:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(g.a,{store:pe,children:Object(v.jsx)(be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[98,1,2]]]);
//# sourceMappingURL=main.53747f6b.chunk.js.map
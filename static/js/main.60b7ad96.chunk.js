(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,j,l,b=t(1),d=t(20),p=t.n(d),u=t(4),x=t(3),h=t(2),O=Object(b.createContext)(null),g="token",f=function(e){localStorage.setItem(g,e)},m=function(){return localStorage.getItem(g)},v=t(8),w=t(5),y="@media screen and (max-width: 1024px)",k=t(0),S=h.a.div(c||(c=Object(x.a)(["\n  height: 100vh;\n  width: 250px;\n  display: flex;\n  justify-content: space-between;\n  font-family:Microsoft JhengHei;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-right: 1px solid rgba(230, 230, 230, 1);\n  \n  & * {\n    // outline: 1px solid gold;\n  }\n  \n  "," {\n    width: 100px;\n  }\n"])),y),z=h.a.img(i||(i=Object(x.a)(["\n  width: 45px;\n  height: 45px;\n  margin-left:10px;\n"]))),C=h.a.div(r||(r=Object(x.a)(["\n  padding: 40px 30px;\n"]))),L=h.a.div(a||(a=Object(x.a)(["\n"]))),P=Object(h.a)(v.b)(o||(o=Object(x.a)(["\n  display: flex;\n  cursor: pointer;\n  color: rgba(117, 117, 117, 1);;\n  text-decoration: none;\n  align-items:center;\n  border-left: 2px solid rgba(0, 0, 0, 0);\n\n  & + & {\n    margin-top: 40px;\n  }\n\n  &:hover {\n    border-left: 2px solid rgba(41, 41, 41, 1);\n    color: black;\n    transition: all 0.2s ease-in-out;\n  }\n\n  ","\n"])),(function(e){return e.$active&&"\n      color: black;\n      border-left: 2px solid rgba(41, 41, 41, 1););\n    "})),H=h.a.img(s||(s=Object(x.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0 30px 0 30px;\n  opacity: 0.5; \n\n  &:hover {\n    opacity: 1.0; \n    transition: all 0.2s ease-in-out;\n  }\n\n  ","\n"])),(function(e){return e.$active&&"\n      opacity: 1.0; \n    "})),R=h.a.div(j||(j=Object(x.a)(["\n  font-size: 16px;\n  "," {\n    display: none;\n  }\n"])),y),A=h.a.p(l||(l=Object(x.a)(["\n  font-size: 16px;\n"])));function N(){var e=Object(w.g)(),n=Object(b.useContext)(O),t=n.user,c=n.setUser,i=Object(w.f)();return Object(k.jsxs)(S,{children:[Object(k.jsx)(C,{children:Object(k.jsx)(z,{src:"BlogLogo.png"})}),Object(k.jsxs)(L,{children:[Object(k.jsxs)(P,{to:"/",$active:"/"===e.pathname,children:[Object(k.jsx)(H,{src:"HomeLogo.png"}),Object(k.jsx)(R,{children:"Home"})]}),Object(k.jsxs)(P,{to:"/about",$active:"/about"===e.pathname,children:[Object(k.jsx)(H,{src:"AboutLogo.png"}),Object(k.jsx)(R,{children:"About"})]}),t&&Object(k.jsxs)(P,{to:"/new-post",$active:"/new-post"===e.pathname,children:[Object(k.jsx)(H,{src:"PostLogo_G.png",style:{color:"rgba(26, 137, 23, 1)",opacity:1}}),Object(k.jsx)(R,{style:{color:"rgba(26, 137, 23, 1)"},children:"Write"})]}),!t&&Object(k.jsxs)(P,{to:"/register",$active:"/register"===e.pathname,children:[Object(k.jsx)(H,{src:"RegisterLogo.png"}),Object(k.jsx)(R,{children:"Register"})]}),!t&&Object(k.jsxs)(P,{to:"/login",$active:"/login"===e.pathname,children:[Object(k.jsx)(H,{src:"LoginLogo.png"}),Object(k.jsx)(R,{children:"Login"})]}),t&&Object(k.jsxs)(P,{to:"/",onClick:function(){f(""),c(null),"/"!==e.pathname&&i.push("/")},children:[Object(k.jsx)(H,{src:"LogoutLogo.png"}),Object(k.jsx)(R,{children:"Logout"})]})]}),Object(k.jsxs)(C,{children:[t&&Object(k.jsxs)(A,{children:["Hi\uff01",t.nickname]}),!t&&Object(k.jsx)(A,{children:"Hello there."})]})]})}var T,$,E,F,I,J,M,Y,B,D,G,U,W,_,Q,X,q,K,V,Z=t(18),ee=t.n(Z),ne=t(25),te="https://student-json-api.lidemy.me",ce=function(){var e=Object(ne.a)(ee.a.mark((function e(){var n,t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m(),e.next=3,fetch("".concat(te,"/me"),{headers:{authorization:"Bearer ".concat(n)}});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=h.a.form(T||(T=Object(x.a)(["\n  margin-top: 50px;\n  width: 645px;\n  padding: 100px 56px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px;\n  text-align: center;\n  \n  "," {\n    width: 400px;\n  }\n\n  & * {\n    // outline: 1px solid gold;\n  }\n"])),y),re=h.a.div($||($=Object(x.a)(['\n  font-size: 28px;\n  margin-bottom: 28px;  \n  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;\n']))),ae=h.a.div(E||(E=Object(x.a)(['\n  font-size: 16px;\n  line-height: 36px;\n  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;\n']))),oe=h.a.div(F||(F=Object(x.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),se=h.a.label(I||(I=Object(x.a)(["\n  font-size: 13px;\n"]))),je=h.a.input(J||(J=Object(x.a)(["\n  width: 270px;\n  margin: 20px 0;\n  padding: 5px;\n  font-size: 16px;\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n  \n  "," {\n    width: 400px;\n  }\n"])),y),le=h.a.button(M||(M=Object(x.a)(["\n  font-size: 14px;\n  width: 226px;\n  border-color: rgba(25, 25, 25, 1);\n  background: rgba(25, 25, 25, 1);\n  color: rgba(255, 255, 255, 1);\n  padding: 7px 16px 9px;\n  margin: 25px;\n  border-radius: 99em;\n  cursor: pointer;\n"]))),be=h.a.div(Y||(Y=Object(x.a)(["\n  color: red;\n"]))),de=h.a.form(B||(B=Object(x.a)(['\n  margin-top: 50px;\n  width: 645px;\n  padding: 60px 56px 20px 56px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px;\n  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;\n  text-align: center;\n  \n  & * {\n    // outline: 1px solid gold;\n  }\n']))),pe=h.a.div(D||(D=Object(x.a)(['\n  font-size: 16px;\n  text-align: end;\n  color: rgba(117,117,117,1);\n  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;\n']))),ue=h.a.img(G||(G=Object(x.a)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n"]))),xe=h.a.div(U||(U=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),he=h.a.input(W||(W=Object(x.a)(["\n  width: 80%;\n  padding: 8px;\n  font-size: 30px;\n  margin-bottom: 16px;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid white;\n\n  &:focus {\n    border-bottom: 1px solid rgb(209, 209, 209);\n    transition: all 0.2s ease-in-out;\n  }\n"]))),Oe=h.a.textarea(_||(_=Object(x.a)(["\n  width: 80%;\n  height: 450px;\n  resize: none;\n  border: none;\n  outline: none;\n\n  border-bottom: 1px solid white;\n  &:focus {\n    border-bottom: 1px solid rgb(209, 209, 209);\n    transition: all 0.2s ease-in-out;\n  }\n"]))),ge=h.a.button(Q||(Q=Object(x.a)(["\n  font-size: 14px;\n  width: 226px;\n  border: none;\n  background: #1a8917;\n  color: rgba(255, 255, 255, 1);\n  padding: 7px 16px 9px;\n  margin: 25px;\n  border-radius: 99em;\n  cursor: pointer;\n"])));function fe(){var e=Object(b.useContext)(O).setUser,n=Object(b.useState)("raye"),t=Object(u.a)(n,2),c=t[0],i=t[1],r=Object(b.useState)("Lidemy"),a=Object(u.a)(r,2),o=a[0],s=(a[1],Object(b.useState)()),j=Object(u.a)(s,2),l=j[0],d=j[1],p=Object(w.f)();return Object(k.jsxs)(ie,{onSubmit:function(n){n.preventDefault(),d(null),function(e,n){return fetch("".concat(te,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:n})}).then((function(e){return e.json()}))}(c,o).then((function(n){if(0===n.ok)return d(n.message);f(n.token),ce().then((function(n){if(1!==n.ok)return f(null),d(n.toString());e(n.data),p.push("/")}))}))},children:[Object(k.jsx)(re,{children:"Sign in with Account"}),Object(k.jsx)(ae,{children:"Enter the account and password! "}),Object(k.jsxs)(oe,{children:[Object(k.jsx)(se,{htmlFor:"username",children:"Your account!"}),Object(k.jsx)(je,{id:"username",value:c,onChange:function(e){return i(e.target.value)}}),Object(k.jsx)(se,{htmlFor:"password",children:"Your password!"}),Object(k.jsx)(je,{id:"password",value:o,type:"password"}),Object(k.jsx)(le,{type:"submit",children:"Continue"})]}),l&&Object(k.jsx)(be,{children:l})]})}function me(){var e=Object(b.useContext)(O),n=e.user,t=e.setUser,c=Object(b.useState)(""),i=Object(u.a)(c,2),r=i[0],a=i[1],o=Object(b.useState)(""),s=Object(u.a)(o,2),j=s[0],l=s[1],d="Lidemy",p=Object(b.useState)(),x=Object(u.a)(p,2),h=x[0],g=x[1],m=Object(w.f)();Object(b.useEffect)((function(){n&&m.push("/")}),[m,n]);return Object(k.jsxs)(ie,{onSubmit:function(e){e.preventDefault(),g(null),function(e,n,t){return fetch("".concat(te,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:n,nickname:t})}).then((function(e){return e.json()}))}(r,d,j).then((function(e){if(0===e.ok)return g(e.message);f(e.token),ce().then((function(e){if(1!==e.ok)return f(null),g(e.toString());t(e.data),m.push("/")})).catch((function(e){return g(e.message)}))}))},children:[Object(k.jsx)(re,{children:"Register a test Account"}),Object(k.jsx)(ae,{children:"Enter the your nickname and username."}),Object(k.jsx)(ae,{children:"For testing, the password is set as default value 'Lidemy'!"}),Object(k.jsxs)(oe,{children:[Object(k.jsx)(se,{htmlFor:"nickname",children:"Your nickname!"}),Object(k.jsx)(je,{id:"nickname",value:j,onChange:function(e){return l(e.target.value)}}),Object(k.jsx)(se,{htmlFor:"username",children:"Your username!"}),Object(k.jsx)(je,{id:"username",value:r,onChange:function(e){return a(e.target.value)}}),Object(k.jsx)(se,{htmlFor:"password",children:"Your password!"}),Object(k.jsx)(je,{id:"password",value:d,type:"password"}),Object(k.jsx)(le,{type:"submit",children:"Continue"})]}),h&&Object(k.jsx)(be,{children:h})]})}var ve,we,ye,ke=h.a.div(X||(X=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-item: center;\n  margin: 50px;\n"]))),Se=h.a.div(q||(q=Object(x.a)(["\n  min-width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ze=h.a.div(K||(K=Object(x.a)(["\n  min-width: 60px;\n  display: flex;\n  align-item: center;\n  justify-content: center;\n"]))),Ce=h.a.img(V||(V=Object(x.a)(["\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n"])));function Le(e){var n=e.currentPage,t=e.handleChangePage,c=e.totalPage;return Object(k.jsxs)(ke,{children:[Object(k.jsx)(ze,{children:1!==n&&Object(k.jsx)(Ce,{onClick:function(){return t(n-1)},src:"left.png"})}),Object(k.jsxs)(Se,{children:["\u76ee\u524d\u9801\u6578\uff1a",Object(k.jsx)("p",{style:{width:"2rem"},children:n})]}),Object(k.jsx)(ze,{children:n!==c&&Object(k.jsx)(Ce,{onClick:function(){return t(n+1)},src:"right.png"})})]})}var Pe,He,Re,Ae,Ne,Te,$e,Ee,Fe,Ie=h.a.div(ve||(ve=Object(x.a)(['\n  heigt: 100px;\n  margin: 20px 0 30px 0;\n  font-weight: 400; \n  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;\n']))),Je=h.a.div(we||(we=Object(x.a)(["\n  display: flex;\n  padding: 15px 0 15px 0 ;\n  border-bottom: 1px solid rgba(230, 230, 230, 1);\n"]))),Me=Object(h.a)(v.b)(ye||(ye=Object(x.a)(["\n  color: rgba(0, 0, 0, 1);\n  cursor: pointer;\n  font-size: 16px;\n  text-decoration: none;\n  & + & {\n    padding-left: 15px;\n  }\n"])));function Ye(){return Object(k.jsxs)(Ie,{children:[Object(k.jsx)("h1",{children:"Raye's Blog"}),Object(k.jsxs)(Je,{children:[Object(k.jsx)(Me,{to:"/",children:"Home"}),Object(k.jsx)(Me,{to:"/about",children:"about"})]})]})}var Be,De=h.a.div(Pe||(Pe=Object(x.a)(['\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(230, 230, 230, 1);\n  margin-bottom:2rem;\n  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: rgba(41, 41, 41, 1);\n\n  & * {\n    // outline: 1px solid gold;\n  }\n']))),Ge=h.a.div(He||(He=Object(x.a)(["\n  width: 75%;\n  min-width: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-bottom: 10px;\n"]))),Ue=Object(h.a)(v.b)(Re||(Re=Object(x.a)(["\n  font-weight: 700;\n  color: rgba(41, 41, 41, 1);\n  text-decoration: none;\n  font-size: 22px;\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),We=h.a.div(Ae||(Ae=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 24px 0 24px 0;\n"]))),_e=h.a.div(Ne||(Ne=Object(x.a)(["\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.5);\n"]))),Qe=h.a.p(Te||(Te=Object(x.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]))),Xe=Object(h.a)(v.b)($e||($e=Object(x.a)([""]))),qe=h.a.div(Ee||(Ee=Object(x.a)(["\n  height: 130px;\n  width: 130px;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  ","\n"])),(function(e){return"\n    background-image: url(".concat(e.$ImgRrl,");\n  ")}));h.a.img(Fe||(Fe=Object(x.a)(["\n  width: 1rem;\n  height: 1rem;\n"])));function Ke(e){var n=e.post,t=Math.floor(50*Math.random()),c="https://picsum.photos/130/130?random=".concat(t);return Object(k.jsxs)(De,{children:[Object(k.jsxs)(Ge,{children:[Object(k.jsx)(Ue,{to:"/posts/".concat(n.id),children:n.title}),Object(k.jsx)(Qe,{children:n.body}),Object(k.jsx)(We,{children:Object(k.jsx)(_e,{children:new Date(n.createdAt).toLocaleString()})})]}),Object(k.jsx)(Xe,{to:"/posts/".concat(n.id),children:Object(k.jsx)(qe,{$ImgRrl:c})})]})}var Ve,Ze,en,nn,tn,cn=h.a.div(Be||(Be=Object(x.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));function rn(){var e=Object(b.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(b.useState)(1),r=Object(u.a)(i,2),a=r[0],o=r[1],s=Object(b.useState)([]),j=Object(u.a)(s,2),l=j[0],d=j[1],p=Object(b.useState)(0),x=Object(u.a)(p,2),h=x[0],O=x[1],g=Object(b.useState)(!0),f=Object(u.a)(g,2),m=f[0],v=f[1];return Object(b.useEffect)((function(){(function(){try{return fetch("".concat(te,"/posts?_sort=createdAt&_order=desc")).then((function(e){return e.json()}))}catch(e){return console.log("getPosts \u51fa\u4e8b\u4e86")}})().then((function(e){c(e),v(!1)}))}),[]),Object(b.useEffect)((function(){var e=5*(a-1),n=5*a;d(t.slice(e,n))}),[t,a]),Object(b.useEffect)((function(){if(t.length>0){var e=Math.ceil(t.length/5);O(e)}}),[t]),Object(k.jsxs)(k.Fragment,{children:[m&&Object(k.jsx)(cn,{children:"Loading\uff01"}),Object(k.jsx)(Ye,{}),l.map((function(e){return Object(k.jsx)(Ke,{post:e},e.id)})),!m&&Object(k.jsx)(Le,{currentPage:a,totalPage:h,handleChangePage:function(e){o(e)}})]})}var an,on,sn,jn,ln,bn,dn=h.a.div(Ve||(Ve=Object(x.a)(['\n& * {\n  // outline: 1px solid gold;\n}\n  margin: 20px 0 100px 0;\n  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;\n']))),pn=h.a.div(Ze||(Ze=Object(x.a)(["\n  margin-top: 50px;\n  font-size: 16px;\n  color: rgba(117, 117, 117, 1);\n"]))),un=h.a.div(en||(en=Object(x.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin: 10px 0 50px 0;\n  white-space:pre-wrap; //\u4fdd\u7559\u7a7a\u683c + \u81ea\u52d5\u63db\u884c https://kknews.cc/zh-tw/code/v3xj6y4.html\n  word-wrap: break-word;\n  word-break: break-all;\n"]))),xn=h.a.div(nn||(nn=Object(x.a)(["\n  margin-top: 16px;\n  font-size: 20px;\n  line-height: 32px;\n  white-space:pre-wrap; //\u4fdd\u7559\u7a7a\u683c + \u81ea\u52d5\u63db\u884c https://kknews.cc/zh-tw/code/v3xj6y4.html\n  word-wrap: break-word;\n  word-break: break-all;\n  width: 100%;\n"]))),hn=h.a.div(tn||(tn=Object(x.a)(["\n  position: relative;\n  height: 300px;\n  width: 100%;\n  margin: 50px 0 50px 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  ","\n"])),(function(e){return"\n    background-image: url(".concat(e.$ImgRrl,");\n  ")}));function On(){var e=Object(w.h)().id,n=Object(b.useState)([]),t=Object(u.a)(n,2),c=t[0],i=t[1],r=Math.floor(50*Math.random()),a="https://picsum.photos/800/300?random=".concat(r);return Object(b.useEffect)((function(){(function(e){return fetch("".concat(te,"/posts?id=").concat(e)).then((function(e){return e.json()}))})(e).then((function(e){return i(e[0])}))}),[e]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ye,{}),Object(k.jsxs)(dn,{children:[Object(k.jsx)(pn,{children:new Date(c.createdAt).toLocaleString()}),Object(k.jsx)(un,{children:c.title}),Object(k.jsx)(hn,{$ImgRrl:a}),Object(k.jsx)(xn,{children:c.body})]})]})}function gn(){var e=Object(w.f)(),n=Object(b.useState)(null),t=Object(u.a)(n,2),c=t[0],i=t[1],r=Object(b.useState)(""),a=Object(u.a)(r,2),o=a[0],s=a[1],j=Object(b.useState)(""),l=Object(u.a)(j,2),d=l[0],p=l[1],x=Object(b.useState)(!1),h=Object(u.a)(x,2),g=h[0],f=h[1],v=Object(b.useContext)(O).user;Object(b.useEffect)((function(){v||e.push("/")}),[]);return Object(k.jsxs)(de,{onSubmit:function(n){if(n.preventDefault(),!g){if(!v)return console.log("login?");f(!0),i(null),function(e,n){var t=m();if(t)return fetch("".concat(te,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify({title:e,body:n})}).then((function(e){return e.json()}))}(o,d).then((function(n){if(f(!1),0===n.ok)return i(n.message);e.push("/")})).catch((function(e){return f(!1),i(e.message)}))}},children:[Object(k.jsxs)(pe,{children:[Object(k.jsx)(ue,{src:"PostLogo.png"}),"Leave some trace."]}),Object(k.jsxs)(xe,{children:[Object(k.jsx)(he,{id:"title",value:o,onChange:function(e){return s(e.target.value)},placeholder:" Title"}),Object(k.jsx)(Oe,{id:"body",value:d,onChange:function(e){return p(e.target.value)},placeholder:" Tell your story..."}),Object(k.jsx)(ge,{type:"submit",children:"Publish"})]}),c&&Object(k.jsx)(be,{children:c})]})}var fn,mn,vn=h.a.div(an||(an=Object(x.a)(["\n  & * {\n    outline: 1px solid gold;\n  }\n  display: flex;\n"]))),wn=h.a.h2(on||(on=Object(x.a)(["\nfont-size: 30px;\n"]))),yn=h.a.div(sn||(sn=Object(x.a)(["\n  min-width: 80%;\n  padding-right: 40px;\n"]))),kn=h.a.div(jn||(jn=Object(x.a)([""]))),Sn=h.a.div(ln||(ln=Object(x.a)(["\n  min-width: 20%;\n"]))),zn=h.a.img(bn||(bn=Object(x.a)(["\n  width: 100%;\n"])));function Cn(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ye,{}),Object(k.jsx)(wn,{children:"\u95dc\u65bc\u90e8\u843d\u683c"}),Object(k.jsxs)(vn,{children:[Object(k.jsxs)(yn,{children:["\u672c\u90e8\u843d\u683c\u70ba\u7a0b\u5f0f\u5c0e\u5e2b\u8a08\u756b\u7b2c\u4e8c\u5341\u4e8c\u5468\u4f5c\u696d\uff0c\u4f7f\u7528 React \u642d\u914d React-rount-dom \u5be6\u4f5c\u51fa\u7684 SPA \u90e8\u843d\u683c",Object(k.jsx)("p",{children:"https://lidemy.com/"}),Object(k.jsx)("p",{children:"https://lidemy.com/"}),Object(k.jsx)("p",{children:"https://lidemy.com/"}),Object(k.jsx)("p",{children:"https://lidemy.com/"})]}),Object(k.jsx)(Sn,{children:Object(k.jsx)(zn,{src:"https://www.filepicker.io/api/file/a8fY8pGRSbWi2WNX6QIu"})})]}),Object(k.jsx)(wn,{children:"\u95dc\u65bc\u6211"}),Object(k.jsx)(kn,{children:"\u55e8\uff01\u672c\u90e8\u843d\u683c\u70ba https://lidemy.com/"})]})}var Ln=h.a.div(fn||(fn=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Pn=h.a.div(mn||(mn=Object(x.a)(["\n  padding: 20px 100px 0 100px;\n  width: 50%;\n"])));function Hn(){var e=Object(b.useState)(null),n=Object(u.a)(e,2),t=n[0],c=n[1];return Object(b.useEffect)((function(){m()&&ce().then((function(e){e.ok?(console.log(e.data),c(e.data)):console.log("App.js \u932f\u8aa4")}))}),[]),Object(k.jsx)(O.Provider,{value:{user:t,setUser:c},children:Object(k.jsx)(v.a,{children:Object(k.jsxs)(Ln,{children:[Object(k.jsx)(N,{}),Object(k.jsx)(Pn,{children:Object(k.jsxs)(w.c,{children:[Object(k.jsx)(w.a,{exact:!0,path:"/",children:Object(k.jsx)(rn,{})}),Object(k.jsx)(w.a,{path:"/login",children:Object(k.jsx)(fe,{})}),Object(k.jsx)(w.a,{path:"/register",children:Object(k.jsx)(me,{})}),Object(k.jsx)(w.a,{path:"/posts/:id",children:Object(k.jsx)(On,{})}),Object(k.jsx)(w.a,{path:"/new-post",children:Object(k.jsx)(gn,{})}),Object(k.jsx)(w.a,{path:"/about",children:Object(k.jsx)(Cn,{})})]})})]})})})}p.a.render(Object(k.jsx)(Hn,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.60b7ad96.chunk.js.map
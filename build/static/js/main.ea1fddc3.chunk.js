(this.webpackJsonpmrdonalds=this.webpackJsonpmrdonalds||[]).push([[0],{51:function(t,n,e){"use strict";e.r(n);var c,i,r,o,a,s,b,p,l,d,j,u,x,g,h,O,f,m,v,k,y,w,z,C,B,M,S,I,F,T,P,R,A,D,L,E,J,N,U,G,K,W,H,Q,X,_,q,V,Y,Z,$,tt,nt,et,ct,it,rt,ot=e(10),at=e.n(ot),st=e(36),bt=e.n(st),pt=e(15),lt=e(8),dt=e(9),jt=e.p+"static/media/logo.ae20499c.svg",ut=e.p+"static/media/user.7cb5bce6.svg",xt=e(3),gt=dt.b.header(c||(c=Object(lt.a)(["\n\twidth: 100%;\n\tbackground-color: #299B01;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 15px;\n"]))),ht=dt.b.div(i||(i=Object(lt.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n"]))),Ot=dt.b.h1(r||(r=Object(lt.a)(["\n\tfont-size: 24px;\n\tcolor: white;\n\tmargin-left: 12px;\n"]))),ft=dt.b.div(o||(o=Object(lt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tcursor: pointer;\n\talign-items: center;\n"]))),mt=dt.b.img(a||(a=Object(lt.a)(["\n\twidth: 50px;\n"]))),vt=dt.b.img(s||(s=Object(lt.a)([" \n\twidth: 32px;\n\tmargin-bottom: 5px;\n"]))),kt=dt.b.span(b||(b=Object(lt.a)(["\n\tcolor: white;\n\tfont-size: 16px;\n\t::after {\n\t\tcontent: '';\n\t\tbackground: white;\n\t\theight: 1px;\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\topacity: 0;\n\t}\n\t:hover{\n\t\tcolor: orange;\n\t\t::after {\n\t\t\topacity: 1;\n\t\t\tbackground-color: orange;\n\t\t}\n\t}\n"]))),yt=dt.b.span(p||(p=Object(lt.a)(["\n\tfont-size: 16px;\n\tposition: absolute;\n\tright: 30px;\n\tcolor: white;\n\ttext-align: right;\n\t&:hover {\n\t\ttransform: rotate(360deg);\n\t\ttransition: 0.5s transform;\n\t\tcolor: orange;\n\t}\n"]))),wt=function(t){var n=t.auth,e=t.login,c=t.logOut;return Object(xt.jsxs)(gt,{children:[Object(xt.jsxs)(ht,{children:[Object(xt.jsx)(mt,{src:jt,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(xt.jsx)(Ot,{children:"MRDonald\u2019s"})]}),n?Object(xt.jsxs)(ft,{children:[Object(xt.jsx)(vt,{src:n.photoURL,alt:n.displayName}),Object(xt.jsx)(kt,{children:n.displayName}),Object(xt.jsx)(yt,{onClick:c,children:"X"})]}):Object(xt.jsxs)(ft,{onClick:e,children:[Object(xt.jsx)(vt,{src:ut,alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(xt.jsx)(kt,{children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},zt={burger:[{name:"JS Burger",img:"/menu/js-burger.png",id:1,price:250,toppings:["\u0411\u0435\u043a\u043e\u043d","\u041a\u0435\u0442\u0447\u0443\u043f","\u0421\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440","\u041e\u0433\u0443\u0440\u0446\u044b","\u041f\u043e\u043c\u0438\u0434\u043e\u0440","\u0425\u0430\u043b\u0430\u043f\u0435\u043d\u044c\u043e"]},{name:"Borsh Burger",img:"/menu/borsh-burger.png",id:2,price:499.9,toppings:["\u0411\u0435\u043a\u043e\u043d","\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a"]},{name:"Freckles Burger",img:"/menu/freckles-burger.png",id:3,price:350,toppings:["\u0410\u043d\u0430\u043d\u0430\u0441","\u041c\u0430\u0439\u043e\u043d\u0435\u0446"]},{name:"Timon Burger",img:"/menu/black-burger.png",id:4,price:150},{name:"React Burger",img:"/menu/react-burger.png",id:5,price:299.9,toppings:["\u041a\u0435\u0442\u0447\u0443\u043f","\u0421\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440"]},{name:"Sun Burger",img:"/menu/sun-burger.png",id:6,price:200,toppings:["\u0421\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440","\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a"]}],other:[{name:"Coka",img:"/menu/soda.png",id:1,price:50,choices:["Coca-cola","Fanta","Mirinda","Sprite"]},{name:"\u0427\u0430\u0439\u043a\u043e\u0444\u0444",img:"/menu/tea.png",id:2,price:70,choices:["\u0427\u0435\u0440\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439"]},{name:"\u041b\u0443\u043a\u043e\u0448\u043a\u043e \u0424\u0440\u0438",img:"/menu/french-fries.png",id:3,price:75},{name:"\u041d\u0430\u0433\u0438\u0435\u0432\u0446\u044b",img:"/menu/nuggets.png",id:4,price:100,choices:["\u0424\u0438\u043b\u0435","\u041a\u0440\u044b\u043b\u044c\u044f"]},{name:"\u041a\u043e\u0444\u0435",img:"/menu/coffee.png",id:5,price:150,choices:["\u042d\u0441\u043f\u0440\u0435\u0441\u0441\u043e","\u041a\u0430\u043f\u0443\u0447\u0438\u043d\u043e"]},{name:"\u0413\u0440\u0438\u043d\u0447",img:"/menu/green-coffee.png",id:6,price:175.25}]},Ct=dt.b.ul(l||(l=Object(lt.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]))),Bt=dt.b.li(d||(d=Object(lt.a)(["\n\tposition: relative;\n\twidth: 400px;\n\theight: 155px;\n\tbackground: ",";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-right: 15px;\n\tmargin-bottom: 15px;\n\tborder-radius: 5px;\n\tz-index: 1;\n\tcursor: pointer;\n\tcolor: white;\n\tfont-family: Pacifico;\n\tfont-size: 30px;\n\t&:hover {\n\t\tfont-size: 35px;\n\t\tcolor: orange;\n\t\ttext-decoration: underline;\n\t}\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: black;\n\t\topacity: 0.4;\n\t\tz-index: 2;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tborder-radius: 5px;\n\t}\n"])),(function(t){return"url(".concat(t.img,")")})),Mt=dt.b.span(j||(j=Object(lt.a)(["\n\tz-index: 3;\n"]))),St=function(t){var n=t.items,e=t.setOpenModal;return Object(xt.jsx)(Ct,{children:n.map((function(t){return Object(xt.jsx)(Bt,{img:t.img,onClick:function(){e(t)},children:Object(xt.jsxs)(Mt,{children:[t.name," / ",t.price,"\u0440\u0443\u0431"]})},t.id)}))})},It=e.p+"static/media/banner.9b6cf3ee.png",Ft=dt.b.section(u||(u=Object(lt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-top: 50px;\n"]))),Tt=dt.b.div(x||(x=Object(lt.a)(["\n\ttext-align: center;\n\twidth: 100%;\n\tposition: relative;\n\theight: 210px;\n\t&:after {\n\t\tposition: absolute;\n\t\tcontent: '';\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbackground-color: black;\n\t\topacity: 0.5;\n\t\theight: 210px;\n\t\tz-index: 4;\n\t}\n"]))),Pt=dt.b.img(g||(g=Object(lt.a)(["\n\twidth: 100%;\n\theight: 210px;\n"]))),Rt=dt.b.h2(h||(h=Object(lt.a)(["\n\tcolor: white;\n\tfont-size: 48px;\n\tposition: absolute;\n\ttop 30%;\n\tleft: 35%;\n\tz-index: 5;\n\tletter-spacing: 5px;\n"]))),At=dt.b.h3(O||(O=Object(lt.a)(["\n\tfont-size: 36px;\n\tletter-spacing: 4px;\n\tmargin-bottom: 10px;\n"]))),Dt=function(t){var n=t.setOpenModal;return Object(xt.jsxs)("main",{children:[Object(xt.jsxs)(Tt,{children:[Object(xt.jsx)(Pt,{src:It,alt:"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u0431\u0443\u0440\u0433\u0435\u0440"}),Object(xt.jsx)(Rt,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})]}),Object(xt.jsxs)(Ft,{children:[Object(xt.jsx)(At,{children:"\u0411\u0443\u0440\u0433\u0435\u0440\u044b"}),Object(xt.jsx)(St,{items:zt.burger,setOpenModal:n})]}),Object(xt.jsxs)(Ft,{children:[Object(xt.jsx)(At,{children:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438"}),Object(xt.jsx)(St,{items:zt.other,setOpenModal:n})]})]})},Lt=e(19),Et=dt.b.div(f||(f=Object(lt.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t","\n"])),(function(t){var n=t.position,e=t.bottom,c=t.left;return"position: ".concat(n,"; bottom: ").concat(e,"; left: ").concat(c)})),Jt=dt.b.button(m||(m=Object(lt.a)(["\n\ttext-transform: uppercase;\n\tcolor: white;\n\tpadding: 20px;\n\twidth: 265px;\n\tbackground-color: #299B01;\n\tfont-size: 24px;\n\tborder: 2px solid #299B01;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\ttransition-property: background-color, color, border;\n\t&:hover {\n\t\tbackground-color: white;\n\t\tcolor: #299B01;\n\t\tborder: 2px solid #299B01;\n\t}\n\t&:disabled {\n\t\tbackground-color: #9a9a9a;\n\t\tborder: #9a9a9a solid 2px;\n\t\t&:hover {\n\t\t\tcolor: white;\n\t\t}\n\t}\n"]))),Nt=function(t){var n=t.text,e=t.func,c=t.position,i=t.bottom,r=t.left,o=t.disabled,a=t.isEdit;return Object(xt.jsx)(Et,{position:c,bottom:i,left:r,children:Object(xt.jsx)(Jt,{onClick:e,disabled:o,children:a?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":n})})},Ut=dt.b.div(v||(v=Object(lt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tflex-wrap: wrap;\n"]))),Gt=dt.b.div(k||(k=Object(lt.a)(["\n\tdisplay:flex;\n\tflex-basis: 50%;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 10px;\n"]))),Kt=dt.b.input(y||(y=Object(lt.a)(["\n\n"]))),Wt=dt.b.label(w||(w=Object(lt.a)(["\n\twidth: 130px;\n"]))),Ht=dt.b.p(z||(z=Object(lt.a)(["\n\tmargin-top: 40px;\n\ttext-align: center;\n\twidth: 100%;\n"]))),Qt=dt.b.h3(C||(C=Object(lt.a)(["\n\tfont-size: 24px;\n\ttext-align: center;\n"]))),Xt=function(t){var n=t.toppings,e=t.checkToppings,c=t.openModal;return Object(xt.jsx)(xt.Fragment,{children:n?Object(xt.jsxs)(xt.Fragment,{children:[Object(xt.jsx)(Qt,{children:"\u0414\u043e\u0431\u0430\u0432\u043a\u0438"}),Object(xt.jsx)(Ut,{children:n.map((function(t,n){return Object(xt.jsxs)(Gt,{children:[Object(xt.jsx)(Wt,{children:t.name}),Object(xt.jsx)(Kt,{checked:t.check,type:"checkbox",onChange:function(){e(n)}})]},n)}))})]}):c.choices?Object(xt.jsx)(xt.Fragment,{}):Object(xt.jsx)(Ht,{children:"\u0414\u043e\u0431\u0430\u0432\u043e\u043a \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u043e"})})},_t=e(14),qt=function(t){return t?t.filter((function(t){return!0===t.check})):[]},Vt=function(t,n,e,c){return 0!==e&&e?e*c+t*n:t*n},Yt=function(t){return t.reduce((function(t,n){return Vt(n.price,n.count,n.topping.length,n.priceTopping)+t}),0)},Zt=function(t){return t.toLocaleString("ru-RU",{style:"currency",currency:"RUB"})},$t=dt.b.div(B||(B=Object(lt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tmargin-top: 40px;\n"]))),tn=dt.b.div(M||(M=Object(lt.a)(["\n\n"]))),nn=dt.b.input(S||(S=Object(lt.a)(["\n\n"]))),en=dt.b.span(I||(I=Object(lt.a)(["\n\n"]))),cn=function(t){t.choices;var n=t.checkChoices,e=t.openModal;return Object(xt.jsx)(xt.Fragment,{children:e.choices?Object(xt.jsx)($t,{children:e.choices.map((function(t,e){return Object(xt.jsxs)(tn,{children:[Object(xt.jsx)(nn,{type:"radio",name:"choice",value:t,onChange:n}),Object(xt.jsx)(en,{children:t})]},e)}))}):Object(xt.jsx)(xt.Fragment,{})})},rn=dt.b.div(F||(F=Object(lt.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\tz-index: 99;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]))),on=dt.b.div(T||(T=Object(lt.a)(["\n\tbackground-color: white;\n\twidth: 50%;\n\theight: 600px;\n\tborder-radius: 20px;\n\tposition: relative;\n"]))),an=dt.b.div(P||(P=Object(lt.a)(["\n\tbackground-image: ",";\n\twidth: 100%;\n\theight: 200px;\n\tbackground-size: cover;\n\tbackground-position: center;\n\tborder-radius: 20px 20px 0 0;\n"])),(function(t){var n=t.img;return"url(".concat(n,")")})),sn=dt.b.div(R||(R=Object(lt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 20px;\n\tpadding: 0px 40px 0px 40px;\n"]))),bn=dt.b.span(A||(A=Object(lt.a)(["\n\tfont-family: Pacifico;\n\tfont-size: 36px;\n"]))),pn=dt.b.div(D||(D=Object(lt.a)(["\n\twidth: 30px;\n\theight: 30px;\n\tposition: absolute;\n\tright: 25px;\n\ttop: 35px;\n\tcursor: pointer;\n"]))),ln=dt.b.span(L||(L=Object(lt.a)(["\t\n\tposition: absolute;\n \tdisplay: block;\n\theight: 2px;\n\twidth: 100%;\n\tbackground-color: orange;\n\ttransform: rotate(",");\n"])),(function(t){var n=t.deg;return"".concat(n,"deg")})),dn=dt.b.div(E||(E=Object(lt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tmargin-top: 20px;\n\talign-items: center;\n"]))),jn=dt.b.input(J||(J=Object(lt.a)(["\n\twidth: 50px;\n\ttext-align: center;\n\theight: 30px;\n\tborder: none;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]))),un=dt.b.span(N||(N=Object(lt.a)(["\n\tfont-size: 26px;\n"]))),xn=dt.b.button(U||(U=Object(lt.a)(["\n\twidth: 35px;\n\theight: 35px;\n\ttext-align: center;\n\tbackground-color: transparent;\n\tborder-radius: 50%;\n\tborder: black solid 1px;\n\tcursor: pointer;\n\tcolor: #299B01;\n\t&:hover {\n\t\tbackground-color: #299B01;\n\t\tcolor: white;\n\t\tborder: #299B01 solid 1px;\n\t}\n"]))),gn=dt.b.div(G||(G=Object(lt.a)(["\n\tpadding: 0px 20px 0px 20px;\n\tposition: absolute;\n\tbottom: 105px;\n\tleft: 25%;\n"]))),hn=dt.b.span(K||(K=Object(lt.a)(["\n\t&:last-child {\n\t\tmargin-left: 60px;\n\t}\n"]))),On=function(t){var n=t.setOpenModal,e=t.openModal,c=t.order,i=t.setOrder,r=t.changeCount,o=t.indexOrder,a=t.setIndexOrder,s=function(t){var n=t.topping?t.topping:function(t){return t?t.map((function(t){return{name:t,check:!1}})):null}(t.toppings),e=at.a.useState(n),c=Object(_t.a)(e,2),i=c[0],r=c[1];return{toppings:i,checkToppings:function(t){r(i.map((function(n,e){return t===e&&(n.check=!n.check),n})))}}}(e),b=function(){var t=at.a.useState(null),n=Object(_t.a)(t,2),e=n[0],c=n[1];return{choices:e,checkChoices:function(t){c(t.target.value)}}}(),p=function(t){var n=at.a.useState(function(t){return t.count?t.count:1}(t)),e=Object(_t.a)(n,2),c=e[0],i=e[1];return{count:c,setCount:i,changeCount:function(t){""===t.target.value?i(1):i(parseInt(t.target.value))}}}(e),l=o>-1,d=Object(pt.a)(Object(pt.a)({},e),{},{count:p.count,topping:s.toppings,priceTopping:e.price*p.count*.1,choices:b.choices});return Object(xt.jsx)(rn,{onClick:function(t){("overlay"===t.target.id||t.target.closest("#close"))&&(n(null),p.setCount(1),a(void 0))},id:"overlay",children:Object(xt.jsxs)(on,{children:[Object(xt.jsxs)(pn,{id:"close",children:[Object(xt.jsx)(ln,{deg:-135}),Object(xt.jsx)(ln,{deg:-45})]}),Object(xt.jsx)(an,{img:e.img}),Object(xt.jsxs)(sn,{children:[Object(xt.jsx)(bn,{children:e.name}),Object(xt.jsxs)(bn,{children:[e.price,"\u0440\u0443\u0431"]})]}),Object(xt.jsxs)(dn,{children:[Object(xt.jsx)(un,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(xt.jsxs)("div",{children:[Object(xt.jsx)(xn,{onClick:function(){return p.setCount(p.count-1)},disabled:p.count<=1,children:"-"}),Object(xt.jsx)(jn,{value:p.count<1?1:p.count,type:"number",onChange:function(t){return r(t)}}),Object(xt.jsx)(xn,{onClick:function(){return p.setCount(p.count+1)},children:"+"})]})]}),Object(xt.jsx)(Xt,Object(pt.a)(Object(pt.a)({},s),{},{openModal:e})),Object(xt.jsx)(cn,Object(pt.a)(Object(pt.a)({},b),{},{openModal:e})),Object(xt.jsxs)(gn,{children:[Object(xt.jsx)(hn,{children:Object(xt.jsx)("b",{children:"\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0446\u0435\u043d\u0430:"})}),Object(xt.jsx)(hn,{children:Object(xt.jsx)("b",{children:Zt(parseInt(Vt(e.price,p.count,s.toppings?s.toppings.filter((function(t){return!0===t.check})).length:0,e.price*p.count*.1)))})})]}),Object(xt.jsx)(Nt,{position:"absolute",bottom:"20px",left:"30%",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",isEdit:l,func:function(){l?function(t){var n=Object(Lt.a)(c);n[o]=d,i(n)}():(i([].concat(Object(Lt.a)(c),[d])),n(null),p.setCount(1),a(void 0)),n(null)},disabled:e.choices&&!b.choices})]})})},fn=e.p+"static/media/trash.55e6ebf3.svg",mn=dt.b.ul(W||(W=Object(lt.a)(["\n\tlist-style-type: disc;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 10px;\n\twidth: 100%;\n\tborder-bottom: 1px dashed black;\n"]))),vn=dt.b.li(H||(H=Object(lt.a)(["\n\n"]))),kn=dt.b.p(Q||(Q=Object(lt.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tborder-bottom: 1px dashed black;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 10px;\n"]))),yn=function(t){var n=t.elem;return qt(n.topping).length>0?Object(xt.jsx)(mn,{children:qt(n.topping).map((function(t){return Object(xt.jsx)(vn,{children:t.name})}))}):Object(xt.jsx)(kn,{children:"\u0411\u0435\u0437 \u0434\u043e\u0431\u0430\u0432\u043e\u043a"})},wn=dt.b.section(X||(X=Object(lt.a)(["\n\tposition: fixed;\n\tbackground-color: white;\n\twidth: 380px;\n\theight: 100%;\n\tz-index: 20;\n\ttop: 0;\n\tleft: 0;\n\tbox-shadow: 3px 4px 5px rgba(0, 0, 0, 1);\n\tborder-radius: 4px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]))),zn=dt.b.div(_||(_=Object(lt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))),Cn=dt.b.div(q||(q=Object(lt.a)(["\n\tdisplay: flex;\n\tfont-size: 24px;\n\tpadding: 20px;\n\twidth: 100%;\n"]))),Bn=dt.b.h2(V||(V=Object(lt.a)(["\n\tfont-size: 36px;\n\tletter-spacing: 4px;\n\ttext-transform: uppercase;\n\tmargin-top: 30px;\n"]))),Mn=dt.b.span(Y||(Y=Object(lt.a)(["\n\tflex-grow: 1;\n"]))),Sn=dt.b.span(Z||(Z=Object(lt.a)(["\n"]))),In=dt.b.span($||($=Object(lt.a)(["\n\tmargin-right: 45px;\n"]))),Fn=dt.b.ul(tt||(tt=Object(lt.a)(["\n\twidth: 100%;\n\tpadding: 15px 10px 15px 15px;\n\tmax-height: 400px;\n\toverflow: auto;\n"]))),Tn=dt.b.li(nt||(nt=Object(lt.a)(["\n\tcursor: pointer;\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\tmargin-bottom: 15px;\n\talign-items: center;\n"]))),Pn=dt.b.span(et||(et=Object(lt.a)(["\n\twidth: 24px;\n\theight: 24px;\n\tbackground: url(",") right no-repeat;\n\tmargin-left: 10px; \n\tcursor: pointer;\n"])),fn),Rn=dt.b.p(ct||(ct=Object(lt.a)(["\n\ttext-align: center;\n"]))),An=dt.b.div(it||(it=Object(lt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\tjustify-content: center;\n\t&:first-child {\n\t\t& span {\n\t\t\twidth: 100px;\n\t\t\ttext-align: left;\n\t\t}\n\t}\n"]))),Dn=function(t){var n,e=t.order,c=t.setOrder,i=t.setIndexOrder,r=t.setOpenModal,o=t.auth;return Object(xt.jsxs)(wn,{children:[Object(xt.jsxs)(zn,{children:[Object(xt.jsx)(Bn,{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),e.length>0?Object(xt.jsx)(Fn,{children:e.map((function(t,n){return Object(xt.jsxs)(xt.Fragment,{children:[Object(xt.jsxs)(Tn,{onClick:function(t){t.target.closest("#trash")||(r(e[n]),i(n))},children:[Object(xt.jsxs)(An,{children:[Object(xt.jsx)("span",{children:t.name}),Object(xt.jsx)("span",{children:t.choices})]}),Object(xt.jsx)(An,{children:Object(xt.jsx)("span",{children:t.count})}),Object(xt.jsx)(An,{children:Object(xt.jsx)("span",{children:Zt(parseInt(Vt(t.price,t.count,qt(t.topping).length,t.priceTopping)))})}),Object(xt.jsx)(Pn,{id:"trash",onClick:function(){var t;c((t=n,e.filter((function(n,e){return e!==t}))))}})]},n),Object(xt.jsx)(yn,{elem:t})]})}))}):Object(xt.jsx)(Rn,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0443\u0441\u0442"})]}),Object(xt.jsxs)(zn,{children:[Object(xt.jsxs)(Cn,{children:[Object(xt.jsx)(Mn,{children:Object(xt.jsx)("b",{children:"\u0418\u0442\u043e\u0433\u043e:"})}),Object(xt.jsx)(In,{children:Object(xt.jsx)("b",{children:(n=e,n.reduce((function(t,n){return n.count+t}),0))})}),Object(xt.jsx)(Sn,{children:Object(xt.jsx)("b",{children:Zt(parseInt(Yt(e)))})})]}),Object(xt.jsx)(Nt,{text:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",func:function(){!function(t,n){t&&console.log(n)}(o,e)}})]})]})},Ln=e(33),En=(e(49),Ln.a.initializeApp({apiKey:"AIzaSyD_6hbGWu622siHbTsjKO9xznrjmrRDQLk",authDomain:"mrdonalds-a0891.firebaseapp.com",projectId:"mrdonalds-a0891",storageBucket:"mrdonalds-a0891.appspot.com",messagingSenderId:"976840945859",appId:"1:976840945859:web:b6116e2f58d43706baf276"}),Object(dt.a)(rt||(rt=Object(lt.a)(["\n\thtml {\n\t\tbox-sizing: border-box;\n\t}\n\n\t*,\n\t::before,\n\t::after {\n\t\tbox-sizing: inherit;\n\t}\n\n\tbody {\n\t\tfont-size: 20px;\n\t\tcolor: black;\n\t\tbackground-color: #f0f0f0;\n\t\tfont-family: Roboto, sans-serif;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t}\n\n\th1,h2,h3 {\n\t\tpadding: 0px;\n\t\tmargin: 0px;\n\t\tfont-family: Pacifico;\n\t}\n\n\timg {\n\t\tmax-width: 100%;\n\t\theigth: auto;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t}\n\n\tinput[type=number]::-webkit-inner-spin-button,\n\tinput[type=number]::-webkit-outer-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n\t}\n"]))));var Jn=function(){var t=function(){var t=at.a.useState(null),n=Object(_t.a)(t,2);return{openModal:n[0],setOpenModal:n[1]}}(),n=function(){var t=at.a.useState([]),n=Object(_t.a)(t,2);return{order:n[0],setOrder:n[1]}}(),e=function(){var t=at.a.useState(),n=Object(_t.a)(t,2);return{indexOrder:n[0],setIndexOrder:n[1]}}(),c=function(t){var n=new t.GoogleAuthProvider,e=at.a.useState(null),c=Object(_t.a)(e,2),i=c[0],r=c[1];return at.a.useEffect((function(){t().onAuthStateChanged((function(t){r(t)}))}),[i]),{auth:i,login:function(){return t().signInWithPopup(n)},logOut:function(){return t().signOut().catch((function(t){return console.log(t.message)}))}}}(Ln.a.auth);return Object(xt.jsxs)("div",{className:"App",children:[Object(xt.jsx)(En,{}),Object(xt.jsx)(wt,Object(pt.a)({},c)),n.order.length>0&&Object(xt.jsx)(Dn,Object(pt.a)(Object(pt.a)(Object(pt.a)(Object(pt.a)({},n),t),e),c)),Object(xt.jsx)(Dt,Object(pt.a)({},t)),t.openModal&&Object(xt.jsx)(On,Object(pt.a)(Object(pt.a)(Object(pt.a)({},t),n),e))]})},Nn=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,52)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),i(t),r(t),o(t)}))};bt.a.render(Object(xt.jsx)(at.a.StrictMode,{children:Object(xt.jsx)(Jn,{})}),document.getElementById("root")),Nn()}},[[51,1,2]]]);
//# sourceMappingURL=main.ea1fddc3.chunk.js.map
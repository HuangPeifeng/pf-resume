(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Eer6:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var o=t("pMnS"),c=t("SVse");class i{constructor(l){this.router=l,this.menuList=[{name:"\u95dc\u65bc\u6211",url:"about"},{name:"\u6280\u80fd",url:"skills"},{name:"\u5b78\u7d93\u6b77",url:"edu"},{name:"\u5c08\u6848\u8207\u4f5c\u54c1",url:"projects"}],this.menuOpen=!1}ngOnInit(){}toggle(){this.menuOpen=!this.menuOpen}goHash(l){this.router.navigate([],{fragment:l.url})}}var a=t("iInd"),s=e.mb({encapsulation:0,styles:[['.header-layout[_ngcontent-%COMP%]{position:fixed;padding:10px;background-color:#fff;z-index:100;display:flex;flex-direction:column;justify-content:center;align-items:center}.header-layout[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{width:50px;height:50px;cursor:pointer}.header-layout[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:3px;background-color:#f26b38;margin:10px 0;transition:.3s ease-in-out}.header-layout[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;height:0;transition:.3s ease-in-out;overflow:hidden;opacity:0}.header-layout[_ngcontent-%COMP%]   .menu.isOpen[_ngcontent-%COMP%]{padding:10px 0;height:100%;opacity:1}.header-layout[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.header-layout[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{cursor:pointer;position:relative}.header-layout[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]::before{content:"";width:100%;height:0;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3;transition:.3s ease-in-out}.header-layout[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover::before{height:5px}.header-layout[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   .divier[_ngcontent-%COMP%]{width:50%;height:1px;background-color:#f26b38;margin:1em 0}']],data:{}});function p(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,0,"div",[["class","divier"]],null,null,null,null,null))],null,null)}function r(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,4,"span",[["class","menu-content"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"div",[["class","name"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goHash(l.context.$implicit)&&e),e}),null,null)),(l()(),e.Cb(2,null,["",""])),(l()(),e.db(16777216,null,null,1,null,p)),e.nb(4,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,!n.context.last)}),(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function g(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,10,"div",[["class","header-layout"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,3,"div",[["class","hamburger"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggle()&&e),e}),null,null)),(l()(),e.ob(2,0,null,null,0,"div",[["class","top"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,0,"div",[["class","mid"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,0,"div",[["class","bottom"]],null,null,null,null,null)),(l()(),e.ob(5,0,null,null,5,"div",[["class","menu"]],null,null,null,null,null)),e.zb(512,null,c.r,c.s,[e.q,e.r,e.k,e.B]),e.nb(7,278528,null,0,c.h,[c.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.yb(8,{isOpen:0}),(l()(),e.db(16777216,null,null,1,null,r)),e.nb(10,278528,null,0,c.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component,e=l(n,8,0,t.menuOpen);l(n,7,0,"menu",e),l(n,10,0,t.menuList)}),null)}class b{constructor(){}ngOnInit(){}}var x=e.mb({encapsulation:0,styles:[['.home-layout[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);display:flex;justify-content:center;align-items:center}.home-layout[_ngcontent-%COMP%]   .home-block[_ngcontent-%COMP%]{font-size:68px;font-family:"Roboto Mono";color:#141414;font-weight:700;letter-spacing:.04em;margin:10px 0 5px;position:relative}.home-layout[_ngcontent-%COMP%]   .home-block[_ngcontent-%COMP%]::before{content:attr(data-text);position:absolute;top:0;left:-2px;width:100%;background:#fff;clip:rect(0,0,0,0);text-shadow:2px 0 #f26b38;animation:2s linear infinite alternate-reverse glitch-2}.home-layout[_ngcontent-%COMP%]   .home-block[_ngcontent-%COMP%]::after{content:attr(data-text);position:absolute;top:0;left:2px;width:100%;background:#fff;clip:rect(0,0,0,0);text-shadow:-1px 0 #f26b38;animation:2s linear infinite alternate-reverse glitch-1}@-webkit-keyframes glitch-2{0%{clip:rect(86px,920px,25px,0)}5%{clip:rect(30px,920px,17px,0)}10%{clip:rect(54px,920px,43px,0)}15%{clip:rect(10px,920px,86px,0)}25%{clip:rect(62px,920px,1px,0)}30%{clip:rect(61px,920px,24px,0)}35%{clip:rect(38px,920px,46px,0)}40%{clip:rect(115px,920px,8px,0)}45%{clip:rect(87px,920px,44px,0)}50%{clip:rect(6px,920px,65px,0)}55%{clip:rect(83px,920px,99px,0)}65%{clip:rect(25px,920px,71px,0)}70%{clip:rect(37px,920px,55px,0)}75%{clip:rect(115px,920px,18px,0)}80%{clip:rect(68px,920px,46px,0)}90%{clip:rect(47px,920px,31px,0)}95%{clip:rect(47px,920px,84px,0)}100%{clip:rect(93px,920px,53px,0)}}@keyframes glitch-2{0%{clip:rect(86px,920px,25px,0)}5%{clip:rect(30px,920px,17px,0)}10%{clip:rect(54px,920px,43px,0)}15%{clip:rect(10px,920px,86px,0)}25%{clip:rect(62px,920px,1px,0)}30%{clip:rect(61px,920px,24px,0)}35%{clip:rect(38px,920px,46px,0)}40%{clip:rect(115px,920px,8px,0)}45%{clip:rect(87px,920px,44px,0)}50%{clip:rect(6px,920px,65px,0)}55%{clip:rect(83px,920px,99px,0)}65%{clip:rect(25px,920px,71px,0)}70%{clip:rect(37px,920px,55px,0)}75%{clip:rect(115px,920px,18px,0)}80%{clip:rect(68px,920px,46px,0)}90%{clip:rect(47px,920px,31px,0)}95%{clip:rect(47px,920px,84px,0)}100%{clip:rect(93px,920px,53px,0)}}@-webkit-keyframes glitch-1{0%{clip:rect(20px,920px,51px,0)}5%{clip:rect(83px,920px,102px,0)}10%{clip:rect(83px,920px,105px,0)}15%{clip:rect(95px,920px,11px,0)}20%{clip:rect(105px,920px,56px,0)}25%{clip:rect(40px,920px,19px,0)}30%{clip:rect(56px,920px,97px,0)}35%{clip:rect(9px,920px,17px,0)}40%{clip:rect(103px,920px,53px,0)}45%{clip:rect(92px,920px,6px,0)}50%{clip:rect(69px,920px,46px,0)}55%{clip:rect(8px,920px,87px,0)}60%{clip:rect(12px,920px,15px,0)}70%{clip:rect(28px,920px,106px,0)}80%{clip:rect(98px,920px,63px,0)}85%{clip:rect(11px,920px,44px,0)}95%{clip:rect(23px,920px,84px,0)}100%{clip:rect(66px,920px,91px,0)}}@keyframes glitch-1{0%{clip:rect(20px,920px,51px,0)}5%{clip:rect(83px,920px,102px,0)}10%{clip:rect(83px,920px,105px,0)}15%{clip:rect(95px,920px,11px,0)}20%{clip:rect(105px,920px,56px,0)}25%{clip:rect(40px,920px,19px,0)}30%{clip:rect(56px,920px,97px,0)}35%{clip:rect(9px,920px,17px,0)}40%{clip:rect(103px,920px,53px,0)}45%{clip:rect(92px,920px,6px,0)}50%{clip:rect(69px,920px,46px,0)}55%{clip:rect(8px,920px,87px,0)}60%{clip:rect(12px,920px,15px,0)}70%{clip:rect(28px,920px,106px,0)}80%{clip:rect(98px,920px,63px,0)}85%{clip:rect(11px,920px,44px,0)}95%{clip:rect(23px,920px,84px,0)}100%{clip:rect(66px,920px,91px,0)}}']],data:{}});function d(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,3,"div",[["class","home-layout"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,2,"div",[["class","home-block"],["data-text","PeiFeng's Resume"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["PeiFeng's Resume"]))],null,null)}class m{constructor(l){this.route=l,this.contents="<div>\u73fe\u4efb\u8077\u65bc\u9ad8\u96c4\u54c8\u746a\u661f\u79d1\u6280\u516c\u53f8\u64d4\u4efb\u524d\u7aef\u958b\u767c\u5de5\u7a0b\u5e2b\uff0c\u5728\u5b78\u671f\u9593\u66fe\u65bc\u5ec8\u9580\u7fa4\u946b\u6a5f\u68b0\u516c\u53f8\u5be6\u7fd2\u5efa\u7acb\u57fa\u790e\u524d\u7aef\u6280\u8853\uff0c\u76ee\u524d\u6b63\u4f7f\u7528Angular\u4f5c\u70ba\u4e3b\u8981\u6846\u67b6\uff0c\u8207\u5f8c\u7aef\u4eba\u54e1\u5055\u540c\u958b\u767c\u5c08\u6848\uff0c\u4e3b\u8981\u8ca0\u8cac\u524d\u7aef\u523b\u7248\u3001RWD\u53ca\u64cd\u4f5c\u908f\u8f2f\u64b0\u5beb\u7b49\uff0c\u76ee\u524d\u5df2\u6709\u8a31\u591a\u4e0a\u7dda\u4e2d\u5e73\u53f0\u3002</div>\n\n  <div>\u70ba\u57f9\u990a\u826f\u597d\u7684\u81ea\u5b78\u80fd\u529b\uff0c\u5728\u958b\u767c\u4e0a\u9047\u5230\u56f0\u96e3\u6642\u6703\u81ea\u884c\u5c0b\u6c42\u5404\u5f0f\u8cc7\u6e90\uff0c\u589e\u9032\u81ea\u5df1\u7684\u5c08\u696d\u77e5\u8b58\uff0c\u4e26\u5be6\u52d9\u64cd\u4f5c\u63d0\u5347\u6280\u8853\u719f\u7df4\u7a0b\u5ea6\uff0c\u5982\u7a0b\u5f0f\u8a2d\u8a08\u8207\u5404\u5f0fWeb Template\u7b49\uff0c\u85c9\u4ee5\u5f9e\u4e2d\u5b78\u7fd2\u5982\u4f55\u7368\u7acb\u89e3\u6c7a\u554f\u984c\u3002\u540c\u6642\uff0c\u4ea6\u5229\u7528\u696d\u9918\u6642\u9593\u5b78\u7fd2Vue\u3001React\u3001Nodejs\u7b49\u65b0\u6280\u8853\uff0c\u671f\u8a31\u81ea\u5df1\u7684\u80fd\u529b\u66f4\u52a0\u7d2e\u5be6\u3002</div>"}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(l=>{"about"===l&&this.main.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})}goMail(){window.open("peifeng1115@gmail.com")}}var C=e.mb({encapsulation:0,styles:[['.about-layout[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);display:flex;flex-direction:column;align-items:center;justify-content:center}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;max-width:calc(1024px - 5em);width:100%;height:300px;z-index:1;position:relative;margin:0 5em;flex-wrap:wrap}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-cover[_ngcontent-%COMP%]{position:absolute;left:0;bottom:-20px;width:306px;height:306px;transition:.3s ease-in-out}@media screen and (max-width:900px){.about-layout[_ngcontent-%COMP%]{height:100%;margin-bottom:2em}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]{position:unset;justify-content:center;height:100%}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-cover[_ngcontent-%COMP%]{position:unset;margin:0 10px}}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-cover[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:300px;height:300px;background-image:url(/assets/images/head.jpg);background-repeat:no-repeat;background-size:cover;border:3px solid #fff;box-shadow:0 3px 8px 0 rgba(0,0,0,.1)}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-cover[_ngcontent-%COMP%]:hover{bottom:10px;box-shadow:0 10px 8px 5px rgba(0,0,0,.1)}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-name[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-name[_ngcontent-%COMP%]   .tw[_ngcontent-%COMP%]{font-size:4em;font-weight:700;border-bottom:1px solid #f26b38}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-name[_ngcontent-%COMP%]   .en[_ngcontent-%COMP%]{font-size:1.5em;position:relative;margin:5px 0}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-name[_ngcontent-%COMP%]   .en[_ngcontent-%COMP%]::before{content:"";width:100%;height:5px;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-name[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{line-height:5}.about-layout[_ngcontent-%COMP%]   .about-block[_ngcontent-%COMP%]   .about-name[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#f26b38!important}.about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]{max-width:1024px;padding:30px;line-height:2;border:5px solid #f26b38;border-radius:10px}.bold[_ngcontent-%COMP%]{font-weight:700}']],data:{}});function O(l){return e.Db(0,[e.Ab(671088640,1,{main:0}),(l()(),e.ob(1,0,[[1,0],["main",1]],null,16,"div",[["class","about-layout"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,14,"div",[["class","about-block"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"div",[["class","about-cover"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,0,"div",[["class","cover"]],null,null,null,null,null)),(l()(),e.ob(5,0,null,null,11,"div",[["class","about-name"]],null,null,null,null,null)),(l()(),e.ob(6,0,null,null,1,"div",[["class","tw"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u9ec3 \u57f9 \u5cf0"])),(l()(),e.ob(8,0,null,null,1,"div",[["class","en"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Huang Pei-Feng"])),(l()(),e.ob(10,0,null,null,6,"div",[["class","info"]],null,null,null,null,null)),(l()(),e.ob(11,0,null,null,1,"span",[["class","bold"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u524d\u7aef\u5de5\u7a0b\u5e2b"])),(l()(),e.Cb(-1,null,["\uff0e "])),(l()(),e.ob(14,0,null,null,1,"a",[["class","link"],["href","mailto:peifeng1115@gmail.com"],["target","_blank"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["peifeng1115@gmail.com"])),(l()(),e.Cb(-1,null,["\uff0e +886-970-806-207 "])),(l()(),e.ob(17,0,null,null,0,"div",[["class","about-content"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,17,0,n.component.contents)}))}class _{constructor(l){this.route=l,this.skills=[{name:"Angular 2+",percent:90},{name:"Typescript",percent:80},{name:"Javascript",percent:80},{name:"Html",percent:80},{name:"CSS & SCSS",percent:80},{name:"JQuery",percent:70},{name:"Git",percent:70},{name:"Express",percent:50},{name:"MySQL",percent:50}]}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(l=>{"skills"===l&&this.main.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})}}var M=e.mb({encapsulation:0,styles:[['.skills-layout[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);display:flex;flex-direction:column;align-items:center;justify-content:center}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-width:1024px;width:100%}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;position:relative}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-title[_ngcontent-%COMP%]::before{content:"";width:100%;height:5px;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]{width:calc(100% / 2 - 30px);padding:15px}@media screen and (max-width:1024px){.skills-layout[_ngcontent-%COMP%]{height:100%;margin-bottom:2em}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]{width:calc(100% - 30px)}}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;position:relative}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{content:"";width:100%;height:5px;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]   .percent-block[_ngcontent-%COMP%]{background-color:#ccc;width:100%;height:5px}.skills-layout[_ngcontent-%COMP%]   .skills-block[_ngcontent-%COMP%]   .skills-main[_ngcontent-%COMP%]   .skills-contents[_ngcontent-%COMP%]   .percent-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{background-color:#f26b38;width:70%;height:5px}']],data:{}});function P(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,10,"section",[["class","skills-contents"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"div",[["class","title-block"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(3,null,["",""])),(l()(),e.ob(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Cb(5,null,["","%"])),(l()(),e.ob(6,0,null,null,4,"div",[["class","percent-block"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,3,"div",[["class","percent"]],null,null,null,null,null)),e.zb(512,null,c.t,c.u,[e.k,e.r,e.B]),e.nb(9,278528,null,0,c.m,[c.t],{ngStyle:[0,"ngStyle"]},null),e.yb(10,{width:0})],(function(l,n){var t=l(n,10,0,n.context.$implicit.percent+"%");l(n,9,0,t)}),(function(l,n){l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.percent)}))}function h(l){return e.Db(0,[e.Ab(671088640,1,{main:0}),(l()(),e.ob(1,0,[[1,0],["main",1]],null,6,"div",[["class","skills-layout"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,5,"div",[["class","skills-block"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"span",[["class","skills-title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u6280\u80fd"])),(l()(),e.ob(5,0,null,null,2,"div",[["class","skills-main"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,P)),e.nb(7,278528,null,0,c.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.component.skills)}),null)}class f{constructor(l){this.route=l}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(l=>{"edu"===l&&this.main.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})}}var k=e.mb({encapsulation:0,styles:[['.edu-layout[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);display:flex;flex-direction:column;align-items:center;justify-content:center}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;max-width:1024px;width:100%}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;position:relative}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-title[_ngcontent-%COMP%]::before{content:"";width:100%;height:5px;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]{width:calc(100% / 3 - 20px);padding:0 10px;margin-bottom:3em}@media screen and (max-width:1024px){.edu-layout[_ngcontent-%COMP%]{height:100%;margin-bottom:2em}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]{width:calc(100% / 2 - 20px)}}@media screen and (max-width:768px){.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]{width:calc(100% - 20px)}}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-title[_ngcontent-%COMP%]{font-size:20px;line-height:2;position:relative}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-title[_ngcontent-%COMP%]::before{content:"";width:100%;height:5px;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-contents[_ngcontent-%COMP%]{padding:0 2em 1em;position:relative}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-contents[_ngcontent-%COMP%]::before{content:"";position:absolute;left:0;top:0;width:1px;height:100%;background:#f26b38}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-contents[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#fff;background-color:#f26b38;padding:0 5px;position:relative}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-contents[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]::before{content:"";width:32px;height:1px;position:absolute;left:-34px;top:9px;background:#f26b38}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-contents[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;line-height:2;margin-top:10px}.edu-layout[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]   .edu-main-layout[_ngcontent-%COMP%]   .edu-main[_ngcontent-%COMP%]   .edu-contents[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{line-height:1.5}']],data:{}});function y(l){return e.Db(0,[e.Ab(671088640,1,{main:0}),(l()(),e.ob(1,0,[[1,0],["main",1]],null,77,"div",[["class","edu-layout"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,76,"div",[["class","edu-block"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"div",[["class","edu-main-title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u5b78\u7d93\u6b77"])),(l()(),e.ob(5,0,null,null,73,"div",[["class","edu-main-layout"]],null,null,null,null,null)),(l()(),e.ob(6,0,null,null,32,"div",[["class","edu-main"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"span",[["class","edu-title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u5b78\u6b77"])),(l()(),e.ob(9,0,null,null,9,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(10,0,null,null,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["2014 - 2016"])),(l()(),e.ob(12,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u570b\u7acb\u9ad8\u96c4\u61c9\u7528\u79d1\u6280\u5927\u5b78"])),(l()(),e.ob(14,0,null,null,4,"div",[["class","info"]],null,null,null,null,null)),(l()(),e.ob(15,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u96fb\u6a5f\u5de5\u7a0b\u7cfb"])),(l()(),e.ob(17,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u7814\u7a76\u6240"])),(l()(),e.ob(19,0,null,null,9,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(20,0,null,null,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["2010 - 2014"])),(l()(),e.ob(22,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u6a39\u5fb7\u79d1\u6280\u5927\u5b78"])),(l()(),e.ob(24,0,null,null,4,"div",[["class","info"]],null,null,null,null,null)),(l()(),e.ob(25,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u96fb\u8166\u8207\u901a\u8a0a\u7cfb(\u6240)"])),(l()(),e.ob(27,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u5927\u5b78"])),(l()(),e.ob(29,0,null,null,9,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(30,0,null,null,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["2007 - 2010"])),(l()(),e.ob(32,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u9ad8\u96c4\u9ad8\u7d1a\u5de5\u696d\u5b78\u6821"])),(l()(),e.ob(34,0,null,null,4,"div",[["class","info"]],null,null,null,null,null)),(l()(),e.ob(35,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u96fb\u5b50\u7cfb"])),(l()(),e.ob(37,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u9ad8\u8077"])),(l()(),e.ob(39,0,null,null,12,"div",[["class","edu-main"]],null,null,null,null,null)),(l()(),e.ob(40,0,null,null,1,"span",[["class","edu-title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u5de5\u4f5c\u7d93\u6b77"])),(l()(),e.ob(42,0,null,null,9,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(43,0,null,null,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["2016 - Present"])),(l()(),e.ob(45,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u54c8\u746a\u661f\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8"])),(l()(),e.ob(47,0,null,null,4,"div",[["class","info"]],null,null,null,null,null)),(l()(),e.ob(48,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u7522\u54c1\u4e8b\u696d\u90e8"])),(l()(),e.ob(50,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u7814\u767c\u66ff\u4ee3\u5f79 - \u5de5\u7a0b\u5e2b"])),(l()(),e.ob(52,0,null,null,26,"div",[["class","edu-main"]],null,null,null,null,null)),(l()(),e.ob(53,0,null,null,1,"span",[["class","edu-title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u8b49\u7167"])),(l()(),e.ob(55,0,null,null,3,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(56,0,null,null,0,"span",[["class","date full"]],null,null,null,null,null)),(l()(),e.ob(57,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["CSEPT (\u7b2c\u4e00\u7d1a)\u6e2c\u9a57"])),(l()(),e.ob(59,0,null,null,3,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(60,0,null,null,0,"span",[["class","date full"]],null,null,null,null,null)),(l()(),e.ob(61,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u5de5\u696d\u96fb\u5b50\u4e19\u7d1a"])),(l()(),e.ob(63,0,null,null,3,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(64,0,null,null,0,"span",[["class","date full"]],null,null,null,null,null)),(l()(),e.ob(65,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u96fb\u8166\u8edf\u9ad4\u61c9\u7528\u4e19\u7d1a"])),(l()(),e.ob(67,0,null,null,3,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(68,0,null,null,0,"span",[["class","date full"]],null,null,null,null,null)),(l()(),e.ob(69,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["CERTIPORT IC 3 \u96fb\u8166\u5c08\u696d\u80fd\u529b\u8a8d\u8b49"])),(l()(),e.ob(71,0,null,null,3,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(72,0,null,null,0,"span",[["class","date full"]],null,null,null,null,null)),(l()(),e.ob(73,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u55ae\u6676\u7247\u80fd\u529b\u8a8d\u8b49\u4e19\u7d1a"])),(l()(),e.ob(75,0,null,null,3,"section",[["class","edu-contents"]],null,null,null,null,null)),(l()(),e.ob(76,0,null,null,0,"span",[["class","date full"]],null,null,null,null,null)),(l()(),e.ob(77,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u55ae\u6676\u7247\u80fd\u529b\u8a8d\u8b49\u4e59\u7d1a"]))],null,null)}class v{constructor(l){this.route=l,this.projectList=[{name:"Magic Modules",coverUrl:"assets/images/magic_modules_logo.png",url:"http://magic-modules.hamastar.com.tw"},{name:"\u5bcc\u90a6\u96fb\u5b50\u66f8\u57ce",coverUrl:"assets/images/fubon_book_logo.png",url:"https://fubonebook.hamastar.com.tw"},{name:"\u5bcc\u90a6\u65b0\u8996\u754c",coverUrl:"assets/images/fubon_video_logo.png",url:"https://video.fubonlife.com.tw"},{name:"\u8de8\u95b1\u4e92\u52d5\u6559\u80b2\u5e73\u53f0",coverUrl:"assets/images/kai_logo.png",url:"https://ebook.kaipublish.com.hk"},{name:"\u81fa\u5317\u5e02\u653f\u5e9c\u96fb\u5b50\u516c\u5831\u8cc7\u8a0a\u7db2",coverUrl:"assets/images/tpgz_logo.png",url:"https://gazette.gov.taipei"},{name:"BSL\u4ff1\u6a02\u90e8",coverUrl:"assets/images/bsl_logo.png",url:"https://lcy-stage.project.lightup-studio.com"},{name:"\u7406\u7279\u5c1a\u8056\u8a95\u7bc0\u4fc3\u92b7\u7db2\u9801",coverUrl:"assets/images/littlesun_logo.png",url:"https://huangpeifeng.github.io/Littlesun/"},{name:"\u6f5b\u884c\u8005\u4e8b\u52d9\u6240",coverUrl:"assets/images/divewalker_logo.jpg",url:"https://divewalker.project.lightup-studio.com"},{name:"\u8dd1\u99ac\u71c8APP",coverUrl:"assets/images/marquee_logo.png",url:"https://marquee.project.lightup-studio.com"},{name:"AdalaArt",coverUrl:"assets/images/adalaart_logo.png",url:"https://adalaart.com"},{name:"npm",coverUrl:"assets/images/npm_logo.png",url:"https://www.npmjs.com/settings/peifeng1115/packages"}]}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(l=>{"projects"===l&&this.main.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})}openLink(l){window.open(l.url,"_blank")}}var w=e.mb({encapsulation:0,styles:[['.projects-layout[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;max-width:1024px;width:100%}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;position:relative}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{content:"";width:100%;height:5px;background-color:#f26b38;position:absolute;left:0;bottom:3px;opacity:.3}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}@media screen and (max-width:768px){.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]{justify-content:center}}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]   .projects-contents[_ngcontent-%COMP%]{width:280px;height:280px;margin:10px;padding:10px;display:flex;align-items:center;justify-content:center;background-color:#f4f4f4;cursor:pointer;position:relative;transition:.3s ease-in-out}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]   .projects-contents[_ngcontent-%COMP%]:hover   .link-layout[_ngcontent-%COMP%]{left:25px;top:25px;width:250px;height:250px;opacity:.8}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]   .projects-contents[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{max-width:100%}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]   .projects-contents[_ngcontent-%COMP%]   .link-layout[_ngcontent-%COMP%]{position:absolute;left:100px;top:100px;width:100px;height:100px;background-color:#f26b38;opacity:0;transition:.3s ease-in-out;pointer-events:none;display:flex;justify-content:center;align-items:center}.projects-layout[_ngcontent-%COMP%]   .projects-block[_ngcontent-%COMP%]   .projects-main[_ngcontent-%COMP%]   .projects-contents[_ngcontent-%COMP%]   .link-layout[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}']],data:{}});function j(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,3,"section",[["class","projects-contents"]],[[8,"title",0]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openLink(l.context.$implicit)&&e),e}),null,null)),(l()(),e.ob(1,0,null,null,0,"img",[["class","cover"]],[[8,"src",4]],null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"div",[["class","link-layout"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,0,"img",[["src","assets/images/link-icon.png"]],null,null,null,null,null))],null,(function(l,n){l(n,0,0,n.context.$implicit.name),l(n,1,0,n.context.$implicit.coverUrl)}))}function I(l){return e.Db(0,[e.Ab(671088640,1,{main:0}),(l()(),e.ob(1,0,[[1,0],["main",1]],null,6,"div",[["class","projects-layout"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,5,"div",[["class","projects-block"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["\u5c08\u6848\u8207\u4f5c\u54c1"])),(l()(),e.ob(5,0,null,null,2,"div",[["class","projects-main"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,j)),e.nb(7,278528,null,0,c.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.component.projectList)}),null)}class z{constructor(){}ngOnInit(){}}var A=e.mb({encapsulation:0,styles:[[".main-layout[_ngcontent-%COMP%]{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.main-layout[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]{width:calc(100vw - 50px);height:calc(100vh - 50px);background-color:#fff;overflow-y:auto}.main-layout[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{padding:0 20px}"]],data:{}});function D(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,14,"div",[["class","main-layout"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,13,"div",[["class","main-block"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"app-header",[],null,null,null,g,s)),e.nb(3,114688,null,0,i,[a.k],null,null),(l()(),e.ob(4,0,null,null,10,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),e.ob(5,0,null,null,1,"app-home",[],null,null,null,d,x)),e.nb(6,114688,null,0,b,[],null,null),(l()(),e.ob(7,0,null,null,1,"app-about",[],null,null,null,O,C)),e.nb(8,4308992,null,0,m,[a.a],null,null),(l()(),e.ob(9,0,null,null,1,"app-skills",[],null,null,null,h,M)),e.nb(10,4308992,null,0,_,[a.a],null,null),(l()(),e.ob(11,0,null,null,1,"app-education",[],null,null,null,y,k)),e.nb(12,4308992,null,0,f,[a.a],null,null),(l()(),e.ob(13,0,null,null,1,"app-projects",[],null,null,null,I,w)),e.nb(14,4308992,null,0,v,[a.a],null,null)],(function(l,n){l(n,3,0),l(n,6,0),l(n,8,0),l(n,10,0),l(n,12,0),l(n,14,0)}),null)}function S(l){return e.Db(0,[(l()(),e.ob(0,0,null,null,1,"app-index",[],null,null,null,D,A)),e.nb(1,114688,null,0,z,[],null,null)],(function(l,n){l(n,1,0)}),null)}var U=e.kb("app-index",z,S,{},{},[]);class F{}class L{}t.d(n,"IndexModuleNgFactory",(function(){return V}));var V=e.lb(u,[],(function(l){return e.wb([e.xb(512,e.j,e.W,[[8,[o.a,U]],[3,e.j],e.v]),e.xb(4608,c.l,c.k,[e.s,[2,c.w]]),e.xb(1073742336,c.b,c.b,[]),e.xb(1073742336,a.l,a.l,[[2,a.q],[2,a.k]]),e.xb(1073742336,F,F,[]),e.xb(1073742336,L,L,[]),e.xb(1073742336,u,u,[]),e.xb(1024,a.i,(function(){return[[{path:"",component:z}]]}),[])])}))}}]);
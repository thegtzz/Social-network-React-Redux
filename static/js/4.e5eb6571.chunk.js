(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{264:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(54),s=t(55),i=t(56),r=t(57),l=t(0),c=t.n(l),o=t(37),m=t(16),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(r.a)(l,a);var t=Object(i.a)(l);function l(){return Object(n.a)(this,l),t.apply(this,arguments)}return Object(s.a)(l,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(o.a,{to:"/login"})}}]),l}(c.a.Component);return Object(m.b)(d)(a)}},265:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1pDwE",messages:"Dialogs_messages__3hvEc",chatHeader:"Dialogs_chatHeader__7aUjx",chatHeaderImg:"Dialogs_chatHeaderImg__1KXqP",chatPeerName:"Dialogs_chatPeerName__2SgbK",lastSeen:"Dialogs_lastSeen__2PThB",btnWrapDiv:"Dialogs_btnWrapDiv__3o7XB",btnBack:"Dialogs_btnBack__uQA5t",dialogForm:"Dialogs_dialogForm__2zK2C",btnSendMess:"Dialogs_btnSendMess__2umvX",dialogSidebar:"Dialogs_dialogSidebar__3goJC",openedDialogs:"Dialogs_openedDialogs__nBUdL"}},266:function(e,a,t){e.exports={dialog:"DialogItem_dialog__2EQNi",dialogName:"DialogItem_dialogName__28KNn"}},267:function(e,a,t){e.exports={message:"Message_message__34WG8",peerName:"Message_peerName___EBu7"}},274:function(e,a,t){"use strict";t.r(a);var n=t(90),s=t(0),i=t.n(s),r=t(265),l=t.n(r),c=t(3),o=t(266),m=t.n(o),d=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:m.a.dialog},i.a.createElement(c.b,{to:a},i.a.createElement("div",{className:m.a.dialogName},e.name)))},g=t(15),u=t.n(g),_=t(267),b=t.n(_),E=function(e){return i.a.createElement("div",{className:b.a.message},i.a.createElement("img",{src:u.a,alt:""}),i.a.createElement("div",null,i.a.createElement("div",{className:b.a.peerName},"Vladislav"),e.message))},v=t(37),p=t(9),f=t(28),N=t(33),h=t(81),D=Object(f.a)("textarea"),S=Object(N.a)(50),j=function(e){var a=e.onSubmit;return i.a.createElement(p.b,{onSubmit:a},(function(e){var a=e.handleSubmit,t=e.form;return i.a.createElement("form",{className:l.a.dialogForm,onSubmit:function(e){a(e),t.reset()}},i.a.createElement(h.a,null),i.a.createElement(p.a,{placeholder:"Write a message...",name:"DialogMessage",component:D,validate:S,onKeyDown:function(e){"Enter"===e.key&&(a(e),t.reset())}}),i.a.createElement("button",{className:l.a.btnSendMess}))}))},O=t(16),k=t(264),M=t(32);a.default=Object(M.d)(Object(O.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.a)(a))}}})),k.a)((function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(d,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return i.a.createElement(E,{message:e.message,key:e.id})}));return e.isAuth?i.a.createElement("div",{className:l.a.dialogs},i.a.createElement("div",{className:l.a.messages},i.a.createElement("div",{className:l.a.chatHeader},i.a.createElement("div",{className:l.a.btnWrapDiv},i.a.createElement(c.b,{to:"/dialogs",className:l.a.btnBack},"Back")),i.a.createElement("div",{className:l.a.chatPeerName},"Vladislav Sviridov"),i.a.createElement("div",{className:l.a.lastSeen},"last seen yesterday at 9:14 pm"),i.a.createElement("div",{className:l.a.chatHeaderImg},i.a.createElement("img",{src:u.a,alt:""}))),n,i.a.createElement(j,{onSubmit:function(a){e.sendMessage(a.DialogMessage)}})),i.a.createElement("div",{className:l.a.dialogSidebar},i.a.createElement("div",{className:l.a.openedDialogs},i.a.createElement("span",null,"Opened dialogs")),t)):i.a.createElement(v.a,{to:"/login"})}))}}]);
//# sourceMappingURL=4.e5eb6571.chunk.js.map
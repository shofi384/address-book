(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(4),i=a.n(r),o=(a(17),a(2)),l=a(5),c=a(6),d=a(9),m=a(7),h=a(10),u=a(1),p=a(8),N=a.n(p),b=(a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).change=function(e){e.preventDefault(),a.state[e.target.name]=e.target.value},a.submit=function(e){e.preventDefault();var t={FirstName:a.state.FirstName,LastName:a.state.LastName,Birthday:a.state.Birthday,Telephone:a.state.Telephone};a.setState({hideForm:!0,addressList:[t].concat(Object(o.a)(a.state.addressList))}),a.setState({FirstName:""}),a.setState({LastName:""}),a.setState({Birthday:""}),a.setState({Telephone:""})},a.state={hideForm:!0,FirstName:"",LastName:"",Birthday:"",Telephone:"",addressList:[{FirstName:"Cathy",LastName:"Pierce",Birthday:"9/14/1996",Telephone:"200-910-8132"},{FirstName:"Alfonso",LastName:"Cooley",Birthday:"8/10/1973",Telephone:"200-657-9362"},{FirstName:"Victor",LastName:"Gordon",Birthday:"8/3/1970",Telephone:"200-661-9407"},{FirstName:"Colleen",LastName:"Wright",Birthday:"10/28/1967",Telephone:"200-250-7949"},{FirstName:"James",LastName:"Johnston",Birthday:"5/11/1972",Telephone:"200-645-3176"},{FirstName:"Anna",LastName:"Reyes",Birthday:"9/10/1975",Telephone:"200-707-8670"}]},a.addAddress=a.addAddress.bind(Object(u.a)(Object(u.a)(a))),a.submit=a.submit.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"addAddress",value:function(){this.setState({hideForm:!1})}},{key:"delete",value:function(e){var t=Object(o.a)(this.state.addressList);t.splice(e,1),this.setState({addressList:t})}},{key:"render",value:function(){var e=this,t=this.state.addressList.map(function(t,a){return s.a.createElement("div",{key:a,className:"container"},s.a.createElement("div",null,"Name: ",t.FirstName+" "+t.LastName),s.a.createElement("div",null,"DOB: ",t.Birthday),s.a.createElement("div",null,"Tel: ",t.Telephone),s.a.createElement("input",{type:"button",className:"delete",value:"Remove",onClick:e.delete.bind(e,a)}))}),a=s.a.createElement("form",{className:"container"},s.a.createElement("input",{type:"text",name:"FirstName",placeholder:"First Name",onChange:this.change,required:!0}),s.a.createElement("input",{type:"text",name:"LastName",placeholder:"Last Name",onChange:this.change,required:!0}),s.a.createElement("input",{type:"date",name:"Birthday",placeholder:"DOB",onChange:this.change,required:!0}),s.a.createElement("input",{type:"tel",name:"Telephone",placeholder:"Phone Number",onChange:this.change,pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",required:!0}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Submit",className:"button",onClick:this.submit}));return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",null,s.a.createElement("img",{src:N.a,className:"App-logo",alt:"logo"}),"Create your personalized address book here!"),this.state.hideForm?s.a.createElement("button",{className:"button",onClick:this.addAddress},"+ New Address"):s.a.createElement("br",null)),this.state.hideForm?s.a.createElement("div",{className:"addresses"},t):s.a.createElement("div",null,a))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/icon.d82b3f36.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.1de6a37d.chunk.js.map
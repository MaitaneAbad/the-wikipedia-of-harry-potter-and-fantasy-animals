(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{15:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(16),n=a.n(i),c=a(7),r=a(9),o=(a(23),a(2)),l=function(){return fetch("https://maitaneabad.github.io/api-harry-potter/api/data.json").then((function(e){return e.json()})).then((function(e){var t=e.characters.map((function(e){return{id:e.id,name:e.figure,nickName:e.nickname,maritalStatus:e.maritalStatus,blood:e.blood,children:e.children,descriptionBreed:e.physicalDescription.breed,descriptionGenres:e.physicalDescription.genres,descriptionHairColour:e.physicalDescription.hairColour,descriptionEyesColour:e.physicalDescription.eyesColour,img:e.img,howartsHouse:e.howartsHouse,patronus:e.patronus,petName:e.pet}}));return console.log(t),t}))},d=a(0),u=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:"Buscador: "}),Object(d.jsx)("input",{type:"text",placeholder:"Ej. Minerva McGonagall",name:"name",id:"name",value:e.searchName,onChange:e.handleSearchName})]})},m=function(e){return console.log(e.searchName),Object(d.jsx)("form",{children:Object(d.jsx)(u,{searchName:e.SearchName,handleSearchName:e.handleSearchName})})},j=(a(25),function(e){var t=e.characterData.children.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("p",{children:e})},e)}));return Object(d.jsxs)(c.b,{to:"./character/".concat(e.characterData.id),children:[Object(d.jsx)("h2",{children:e.characterData.name}),Object(d.jsx)("h3",{children:"Nickname"}),Object(d.jsx)("p",{children:e.characterData.nickName}),Object(d.jsx)("img",{className:"imgApi",src:e.characterData.img,alt:"Foto de: ".concat(e.characterData.name),title:"Foto de: ".concat(e.characterData.name)}),Object(d.jsx)("h3",{children:"Marital Status"}),Object(d.jsx)("p",{children:e.characterData.maritalStatus}),Object(d.jsx)("h3",{children:"Blood"}),Object(d.jsx)("p",{children:e.characterData.blood}),Object(d.jsx)("h3",{children:"Children"}),Object(d.jsx)("ul",{className:"childrenData",children:t}),Object(d.jsx)("h3",{children:"Description"}),Object(d.jsx)("p",{children:e.characterData.descriptionBreed}),Object(d.jsx)("p",{children:e.characterData.descriptionGenres}),Object(d.jsx)("p",{children:e.characterData.descriptionHairColour}),Object(d.jsx)("p",{children:e.characterData.descriptionEyesColour}),Object(d.jsx)("h3",{children:"Howarts house:"}),Object(d.jsx)("p",{children:""===e.characterData.howartsHouse?Object(d.jsx)("span",{children:" Desconocido"}):Object(d.jsxs)("span",{children:[" ",e.characterData.howartsHouse]})}),Object(d.jsx)("h3",{children:"Patronus:"}),Object(d.jsx)("p",{children:e.characterData.patronus})]})}),h=function(e){var t=e.data.map((function(e){return Object(d.jsx)("li",{className:"characterLi",children:Object(d.jsx)(j,{characterData:e})},e.id)}));return Object(d.jsx)(d.Fragment,{children:0!==e.data.length?Object(d.jsx)("ul",{className:"list",children:t}):Object(d.jsx)("p",{children:"El personaje ".concat(e.searchName," no exite, quiz\xe1s deber\xedas usar el mapa del merodeador.")})})},b=(a(31),function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("h1",{children:["Harry Potter y animales fant\xe1sticos",Object(d.jsx)("span",{children:"wiki"})]})})}),p=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{children:" \xa9 Maitane Abad Conde - 2021 "})})})},_=a.p+"static/media/hat.bdb71a81.png",f=(a(32),function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"quiz",children:[" ",Object(d.jsx)("p",{className:"quiz__title",children:"\xbfQuieres conocer de qu\xe9 casa eres?"}),Object(d.jsx)("p",{className:"quiz__subtitle",children:" \xa1Pues pincha en el sombrero!"})]}),Object(d.jsx)("form",{className:"quiz__formButton",children:Object(d.jsxs)(c.b,{to:"/quiz/",children:[Object(d.jsx)("input",{className:"quiz__formButton--input",type:"button",value:"Quiz"}),Object(d.jsx)("img",{className:"quiz__formButton--img",src:_,alt:"cuestionario del sombrero seleccionador",title:"cuestionario del sombrero seleccionador"})]})})]})}),O=(a(15),a.p+"static/media/owl.603711fb.jpg"),x=a.p+"static/media/rat.075dc118.jpg",g=a.p+"static/media/toad.7bc544f6.jpg",N=a.p+"static/media/cat.e3612f93.jpg",H=a.p+"static/media/admitido.db980ec2.gif",v=function(e){return Object(d.jsxs)("fieldset",{className:"formHat__firstQuestion",children:[Object(d.jsxs)("div",{className:"formHat__firstQuestion--fieldsetQuestion",children:[Object(d.jsx)("img",{className:"formHat__firstQuestion--fieldsetQuestion__img",src:H,alt:"imagen de Harry potter recibiendo el buz\xf3n"}),Object(d.jsx)("label",{htmlFor:"pet",children:Object(d.jsx)("p",{className:"formHat__firstQuestion--fieldsetQuestion__question",children:"Si fueras admitido en Howarts... \xbfQue mascota elegirias?"})})]}),Object(d.jsxs)("div",{className:"formHat__firstQuestion--fieldsetInputs",children:[Object(d.jsxs)("label",{className:"formHat__firstQuestion--fieldsetInputs__label",htmlFor:"owl",children:[Object(d.jsx)("input",{className:"formHat__firstQuestion--fieldsetInputs__label--option",type:"radio",id:"owl",name:"pet",value:"lechuza",onChange:e.handlePet}),Object(d.jsx)("img",{className:"formHat__firstQuestion--fieldsetInputs__label--img",src:O,alt:"imagen de una lechuza",title:"imagen de una lechuza"})]}),Object(d.jsxs)("label",{className:"formHat__firstQuestion--fieldsetInputs__label",htmlFor:"rat",children:[Object(d.jsx)("input",{className:"formHat__firstQuestion--fieldsetInputs__label--option",type:"radio",id:"rat",name:"pet",value:"rata",onChange:e.handlePet}),Object(d.jsx)("img",{className:"formHat__firstQuestion--fieldsetInputs__label--img",src:x,alt:"imagen de una rata",title:"imagen de una rata"})]}),Object(d.jsxs)("label",{className:"formHat__firstQuestion--fieldsetInputs__label",htmlFor:"toad",children:[Object(d.jsx)("input",{className:"formHat__firstQuestion--fieldsetInputs__label--option",type:"radio",id:"toad",name:"pet",value:"sapo",onChange:e.handlePet}),Object(d.jsx)("img",{className:"formHat__firstQuestion--fieldsetInputs__label--img",src:g,alt:"imagen de una sapo",title:"imagen de una sapo"})]})," ",Object(d.jsxs)("label",{className:"formHat__firstQuestion--fieldsetInputs__label",htmlFor:"cat",children:[Object(d.jsx)("input",{className:"formHat__firstQuestion--fieldsetInputs__label--option",type:"radio",id:"cat",name:"pet",value:"gato",onChange:e.handlePet}),Object(d.jsx)("img",{className:"formHat__firstQuestion--fieldsetInputs__label--img",src:N,alt:"imagen de una cat",title:"imagen de una cat"})]})]}),Object(d.jsxs)("p",{className:"formHat__firstQuestion--response",children:[" ","Tu respues seleccionada es: ",e.pet]})]})},Q=a.p+"static/media/class.768ed279.gif",I=a.p+"static/media/defence.d410b1e3.gif",y=a.p+"static/media/herbology.8cc8b2b1.gif",C=a.p+"static/media/divination.ad9671f8.gif",D=a.p+"static/media/magicalCreatures.50f68266.gif",F=a.p+"static/media/potions.ba2fd0c5.gif",z=function(e){return Object(d.jsxs)("fieldset",{className:"formHat__secondQuestion",children:[Object(d.jsxs)("div",{className:"formHat__secondQuestion--fieldsetQuestion",children:[Object(d.jsx)("img",{className:"formHat__secondQuestion--fieldsetQuestion__img",src:Q,alt:"imagen de una clase de howarts"}),Object(d.jsx)("label",{htmlFor:"session",children:Object(d.jsx)("p",{className:"formHat__secondQuestion--fieldsetQuestion__question",children:"\xbfCu\xe1l ser\xeda tu clase favorita?"})})]}),Object(d.jsxs)("div",{className:"formHat__secondQuestion--fieldsetInputs",children:[Object(d.jsxs)("label",{className:"formHat__secondQuestion--fieldsetInputs__label",htmlFor:"sessionDefence",children:[Object(d.jsx)("input",{className:"formHat__secondQuestion--fieldsetInputs__label--option",type:"radio",id:"sessionDefence",name:"session",value:"defensa contra las artes oscuras",onChange:e.handleclassroom}),Object(d.jsx)("img",{className:"formHat__secondQuestion--fieldsetInputs__label--img",src:I,alt:"imagen de defensa contras las artes oscuras",title:"imagen de de defensa contras las artes oscuras"}),Object(d.jsx)("p",{children:"defensa contra las artes oscuras"})]}),Object(d.jsxs)("label",{className:"formHat__secondQuestion--fieldsetInputs__label",htmlFor:"sessionPotions",children:[Object(d.jsx)("input",{className:"formHat__secondQuestion--fieldsetInputs__label--option",type:"radio",id:"sessionPotions",name:"session",value:"pociones",onChange:e.handleclassroom}),Object(d.jsx)("img",{className:"formHat__secondQuestion--fieldsetInputs__label--img",src:F,alt:"imagen de pociones",title:"imagen de pociones"}),Object(d.jsx)("p",{children:"Pociones"})]})," ",Object(d.jsxs)("label",{className:"formHat__secondQuestion--fieldsetInputs__label",htmlFor:"sessionMagicalCreatures",children:[Object(d.jsx)("input",{className:"formHat__secondQuestion--fieldsetInputs__label--option",type:"radio",id:"sessionMagicalCreatures",name:"session",value:"cuidado de criaturas m\xe1gicas",onChange:e.handleclassroom}),Object(d.jsx)("img",{className:"formHat__secondQuestion--fieldsetInputs__label--img",src:D,alt:"imagen de cuidado de criaturas m\xe1gicas",title:"imagen de cuidado de criaturas m\xe1gicas"}),Object(d.jsx)("p",{children:"Cuidado de criaturas m\xe1gicas"})]})," ",Object(d.jsxs)("label",{className:"formHat__secondQuestion--fieldsetInputs__label",htmlFor:"sessionHerbology",children:[Object(d.jsx)("input",{className:"formHat__secondQuestion--fieldsetInputs__label--option",type:"radio",id:"sessionHerbology",name:"session",value:"herbolog\xeda",onChange:e.handleclassroom}),Object(d.jsx)("img",{className:"formHat__secondQuestion--fieldsetInputs__label--img",src:y,alt:"imagen de herbolog\xeda",title:"imagen de herbolog\xeda"})," ",Object(d.jsx)("p",{children:"Herbolog\xeda"})]})," ",Object(d.jsxs)("label",{className:"formHat__secondQuestion--fieldsetInputs__label",htmlFor:"sessionDivination",children:[Object(d.jsx)("input",{className:"formHat__secondQuestion--fieldsetInputs__label--option",type:"radio",id:"sessionDivination",name:"session",value:"adivinaci\xf3n",onChange:e.handleclassroom}),Object(d.jsx)("img",{className:"formHat__secondQuestion--fieldsetInputs__label--img",src:C,alt:"imagen de adivinaci\xf3n",title:"imagen de adivinaci\xf3n"}),Object(d.jsx)("p",{children:"Adivinaci\xf3n"})]})]}),Object(d.jsxs)("p",{className:"formHat__secondQuestion--response",children:["Tu respuesta seleccionada es: ",e.classroom]})]})},q=a.p+"static/media/sortilegios.e86fe931.jpg",w=function(e){return Object(d.jsxs)("fieldset",{className:"formHat__thirdQuestion",children:[Object(d.jsxs)("div",{className:"formHat__thirdQuestion--fieldsetQuestion",children:[Object(d.jsx)("img",{className:"formHat__thirdQuestion--fieldsetQuestion__img",src:q,alt:"imagen de productos de sortilegios Weasley"}),Object(d.jsx)("label",{htmlFor:"invention",children:Object(d.jsx)("p",{className:"formHat__thirdQuestion--fieldsetQuestion__question",children:"\xbfCu\xe1l te parece el mejor invento de sortilegios Weasley?"})})]}),Object(d.jsxs)("div",{className:"formHat__thirdQuestion--fieldsetInputs",children:[Object(d.jsxs)("label",{className:"formHat__thirdQuestion--fieldsetInputs__label",htmlFor:"invention1",children:[Object(d.jsx)("input",{className:"formHat__thirdQuestion--fieldsetInputs__label--option",type:"radio",id:"invention1",name:"invention",value:"Turr\xf3n de hemorragia nasal",onChange:e.handleInvention})," ","Turr\xf3n de hemorragia nasal"]}),Object(d.jsxs)("label",{className:"formHat__thirdQuestion--fieldsetInputs__label",htmlFor:"invention2",children:[Object(d.jsx)("input",{className:"formHat__thirdQuestion--fieldsetInputs__label--option",type:"radio",id:"invention2",name:"invention",value:"Orejas extensibles",onChange:e.handleInvention})," ","Orejas extensibles"]}),Object(d.jsxs)("label",{className:"formHat__thirdQuestion--fieldsetInputs__label",htmlFor:"invention3",children:[Object(d.jsx)("input",{className:"formHat__thirdQuestion--fieldsetInputs__label--option",type:"radio",id:"invention3",name:"invention",value:"Pantano port\xe1til",onChange:e.handleInvention})," ","Pantano port\xe1til"]}),Object(d.jsxs)("label",{className:"formHat__thirdQuestion--fieldsetInputs__label",htmlFor:"invention4",children:[Object(d.jsx)("input",{className:"formHat__thirdQuestion--fieldsetInputs__label--option",type:"radio",id:"invention4",name:"invention",value:"Filtro de amor",onChange:e.handleInvention})," ","Filtro de amor"]})]}),Object(d.jsxs)("p",{className:"formHat__thirdQuestion--response",children:["Tu respuesta seleccionada es: ",e.invention]})]})},S=function(e){var t=Object(s.useState)(" "),a=Object(r.a)(t,2),i=a[0],n=a[1],o=Object(s.useState)(" "),l=Object(r.a)(o,2),u=l[0],m=l[1],j=Object(s.useState)(""),h=Object(r.a)(j,2),b=h[0],p=h[1];return Object(d.jsxs)("main",{children:[Object(d.jsx)(c.b,{to:"/",className:"characterDetail",children:Object(d.jsx)("p",{children:"Volver atr\xe1s"})}),Object(d.jsxs)("form",{className:"formHat",children:[Object(d.jsx)(v,{handlePet:function(e){m(e.target.value)},pet:u}),Object(d.jsx)(z,{handleclassroom:function(e){n(e.target.value)},classroom:i}),Object(d.jsx)(w,{handleInvention:function(e){p(e.target.value)},invention:b})]})]})},P=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(""),c=Object(r.a)(n,2),u=c[0],j=c[1];Object(s.useEffect)((function(){l().then((function(e){i(e)}))}),[]);var _=Object(o.f)("/quiz/:id"),O=null!==_?_.params.id:"",x=a.find((function(e){return e.id===parseInt(O)})),g=a.filter((function(e){return e.name.toLocaleLowerCase().includes(u.toLocaleLowerCase())})).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(o.c,{}),Object(d.jsx)(o.a,{exact:!0,path:"/quiz/",children:Object(d.jsx)(S,{quiz:x})}),Object(d.jsxs)(o.a,{exact:!0,path:"/",children:[Object(d.jsx)(m,{searchName:u,handleSearchName:function(e){j(e.currentTarget.value),console.log(e.currentTarget.value)}}),Object(d.jsx)(h,{data:g,searchName:u}),Object(d.jsx)(f,{data:g})]}),Object(d.jsx)(o.c,{}),Object(d.jsx)(p,{})]})};n.a.render(Object(d.jsx)(c.a,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ce58a6a2.chunk.js.map
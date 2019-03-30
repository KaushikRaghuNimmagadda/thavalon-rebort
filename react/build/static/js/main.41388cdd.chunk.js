(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(22),r=a.n(o),l=(a(31),a(2)),i=a(3),c=a(5),m=a(4),u=a(6),p=(a(11),a(47)),h=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"player-tag-wrapper"},s.a.createElement("button",{className:"close_button",onClick:this.props.change},"X"),s.a.createElement("p",{className:"player_name"},s.a.createElement("span",{className:"name"}," ",this.props.name," ")))}}]),t}(n.Component)),d=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Rules",id:"rules"},s.a.createElement("div",{id:"overview"}," ",s.a.createElement("h2",null,"Overview")," "),"THavalon is a custom ruleset for the social deception game Resistance: Avalon. If you've played Avalon before, the basic structure of the game is the same, although there are many more roles.",s.a.createElement("div",{id:"missions"}," ",s.a.createElement("h2",null,"Good, Evil, and Missions")," "),"In THavalon, there are two teams, Good and Evil, who win depending on the outcome of five missions. For each mission, a certain number of players are sent. These players each select a mission card (fail, pass, or reverse) to play, and all cards played on the mission are then revealed to all players. If there is one fail card played, even if all the rest of the cards are successes, the mission fails. If a reverse card is played, the result of the mission is reversed (e.g. a failing mission will become a passing mission, or vise verse). Only Lancelot and Maelagant can play reverse cards. Good wins if they pass three missions, and survive assasination. Evil wins if they fail three missions.",s.a.createElement("div",{id:"proposals"}," ",s.a.createElement("h2",null,"Proposals")," "),"To determine who goes on missions, players make proposals, which are then voted on. The first mission is a binary choice between proposals made by the two players before the starting player, which are not discussed. After that, beginning with the starting player, proposals travel clockwise, moving to the next person if they are voted down. There are a limited number of missions that can be proposed per round (3 in 5 players, 4 in 7 and 8 player, and 5 in 10 player). The last possible proposal is sent automatically.",s.a.createElement("h2",null,"Assassination"),"If Good has successfully passed three missions, Evil then has the chance to assasinate. To assasinate, can either name a pair of Lovers, Merlin, Nimue if included, or claim there are no assasinable targets in the game. If Evil selects correctly, they win. If not, Good wins.",s.a.createElement("h2",null,"Inquisition and Hijack"),'With 7+ players, two new mechanics come into play: weak inquisition and hijack. Weak inquisition happens if the first proposal of a round is sent. The player who sent the mission can then select one other player, and view their card, showing it to no one else. Hijack happens when the last proposal of a round is sent. An evil player will have the ability "Hijack" declared in their information. This player may then reveal themselves as evil, and remove a player from the mission, inserting themselves on.',s.a.createElement("h2",null,"Good Roles"),"Merlin: sees all players that are either Evil (except Mordred) or are Lancelot; can be Assassinated. ",s.a.createElement("br",null),"Percival: sees Merlin and Morgana, but cannot distinguish which role each seen player has. ",s.a.createElement("br",null),"Tristan and Iseult: see each other; always appear together; can be Assassinated as a pair. ",s.a.createElement("br",null),"Lancelot: may play Reversal cards while on missions; appears Evil to Merlin. ",s.a.createElement("br",null),"Nimue (5) : knows which roles are in the game; can be Assassinated. ",s.a.createElement("br",null),"Arthur (7+): knows which Good roles are present; may declare after 2 Failed and 0-1 Successful missions to make their votes on mission proposals count twice, but lose the ability to be on mission teams until the 5th mission. ",s.a.createElement("br",null),"Titania (7+): adds false information to one Evil player's information. ",s.a.createElement("br",null),s.a.createElement("h2",null,"Evil Roles"),"Mordred: is hidden from Merlin. ",s.a.createElement("br",null),"Morgana: appears like Merlin to Percival. ",s.a.createElement("br",null),"Maelagant: may play Reversal cards while on missions. ",s.a.createElement("br",null),"Oberon: adds false information to one Good player. Agravaine (8+): must play Fails; may declare after having been on a successful mission to cause it to Fail instead. ",s.a.createElement("br",null),"Colgrevance (10): is hidden from other Evil roles; knows which player has each Evil role. ",s.a.createElement("br",null))}}]),t}(n.Component),f=(a(32),a(33),function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.submit(e)};var n=0;return a.state={form:s.a.createElement("form",{className:"option_form",onSubmit:function(e){return a.props.submit(e)}},s.a.createElement("div",{className:"checks"},a.props.options.map(function(e){return n++,s.a.createElement("div",{key:n,className:"option_ele"},s.a.createElement("label",{className:"label"},s.a.createElement("input",{className:"check slider",type:"checkbox",name:e.key,defaultChecked:e.value}),e.key))})),s.a.createElement("input",{className:"options_submit",type:"submit",value:"Done"}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=0;return console.log(this.props.options),s.a.createElement("div",{className:"options_wrapper"},this.props.display?s.a.createElement("div",{className:"options"},"form: ",s.a.createElement("form",{className:"option_form",onSubmit:function(t){return e.props.submit(t)}},s.a.createElement("div",{className:"checks"},this.props.options.map(function(e){return t++,console.log(e),s.a.createElement("div",{key:t,className:"option_ele"},s.a.createElement("label",{className:"label"},s.a.createElement("input",{className:"check slider",type:"checkbox",name:e.key,defaultChecked:e.value}),e.key))})),s.a.createElement("input",{className:"options_submit",type:"submit",value:"Done"})),"  "):null)}}]),t}(n.Component)),v=a(23),y=(a(12),a(34),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={gameIds:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/currentgames",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numGames:5})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({gameIds:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=0;return s.a.createElement("div",{className:"recentgames"},s.a.createElement("ul",{className:"recentgameslist"},this.state.gameIds.map(function(t){e++;var a="/"+t;return s.a.createElement("li",null,s.a.createElement(v.a,{key:e,to:{pathname:a}},s.a.createElement("button",{className:"my_button, large_button"},s.a.createElement("span",{className:"name"},t))))})))}}]),t}(n.Component)),b=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).options=function(){a.setState({options:!a.state.options})},a.optionsSubmit=function(e){e.preventDefault();for(var t=a.state.roles,n=0;n<e.target.length-1;n++)t[n]={key:e.target[n].name,value:e.target[n].checked};a.setState({options:!a.state.options,roles:t}),console.log(a.state.roles)},a.info=function(){a.setState({info:!a.state.info})},a.showInputs=function(){a.setState({input:!a.state.input})},a.join=function(){a.setState({join:!a.state.join})},a.namesContainValidChars=function(e){for(var t in"/?#\\."){var a="/?#\\."[t];if(e.includes(a))return!1}return!0},a.isDuplicateName=function(e){for(var t in e=e.trim(),a.state.players)if(a.state.players[t].name.trim()===e)return!0;return!1},a.playerSubmit=function(e){e.preventDefault();var t=e.target[0].value;if(document.getElementById("player-name-input").reset(),a.setState({error:""}),""!==t)if(a.namesContainValidChars(t))if(a.isDuplicateName(t))a.setState({error:"Duplicate names are not allowed."});else if(t.length>30)a.setState({error:"Names must not be longer than 30 characters"});else{var n=a.state.players;a.setState({player_key:a.state.player_key+1});var o=a.state.player_key;n.push({key:a.state.player_key,name:t,value:s.a.createElement(h,{key:a.state.player_key,change:function(){return a.removePlayer(o)},name:t})}),a.setState({players:n})}else a.setState({error:"Name contains invalid characters."})},a.removePlayer=function(e){var t,n=a.state.players;for(t=0;t<n.length&&n[t].key!==e;t++);n.splice(t,1),a.setState({players:n})},a.postToGame=function(){console.log("posting"),fetch("/names",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({names:a.names()})}).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.hasOwnProperty("error"))a.setState({error:e.error});else{var t=s.a.createElement(p.a,{to:{pathname:"/"+e.id}});a.setState({redirect:t})}}).catch(function(e){console.log(e)})},a.postToCustomGame=function(){console.log("posting");var e={};for(var t in a.state.roles){var n=a.state.roles[t];e[n.key]=n.value}var o=e["Duplicate Roles"];delete e["Duplicate Roles"],e["Lone Percival"]&&(delete e["Lone Percival"],e.LonePercival=!0),e["Lone Lovers"]&&(delete e["Lone Lovers"],e.LoneTristan=!0,e.LoneIseult=!0),e.Lovers&&(delete e.Lovers,e.Tristan=!0,e.Iseult=!0),console.log("CUSTOM ROLE INFO:"),console.log(e),fetch("/names",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({names:a.names(),custom:e,duplicates:o})}).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.hasOwnProperty("error"))a.setState({error:e.error});else{var t=s.a.createElement(p.a,{to:{pathname:"/"+e.id}});a.setState({redirect:t})}}).catch(function(e){console.log(e)})},a.isValid=function(){return 5===a.state.players.length||7===a.state.players.length||8===a.state.players.length||10===a.state.players.length?s.a.createElement("div",null,s.a.createElement("button",{onClick:a.postToGame,className:"large_button"},"Start Game"),s.a.createElement("button",{onClick:a.postToCustomGame,className:"large_button"},"Start Custom Game")):s.a.createElement("div",null,s.a.createElement("button",{className:"invalid_start"},"Start Game"),s.a.createElement("button",{className:"invalid_start"},"Start Custom Game"))},a.forwardToGame=function(e){e.preventDefault();var t=e.target[0].value;fetch("/isGame/"+t,{method:"GET"}).then(function(e){return e.json()}).then(function(e){e?a.setState({join_redirect:s.a.createElement(p.a,{to:{pathname:"/"+t}})}):a.setState({join_error:"Game ID not found"})})},a.names=function(){for(var e=[],t=a.state.players.values(),n=t.next();!n.done;)e.push(n.value.name),n=t.next();return e};return a.state={input:!1,info:!1,players:[],names:[],currId:"NULL",game:[],options:!1,join:!1,join_redirect:"",join_input:s.a.createElement("input",{type:"text",className:"input_ele",id:"join",placeholder:"Enter Game ID"}),roles:[{key:"Arthur",value:!0},{key:"Galahad",value:!1},{key:"Lancelot",value:!0},{key:"Percival",value:!0},{key:"Lone Percival",value:!1},{key:"Guinevere",value:!0},{key:"Merlin",value:!0},{key:"Titania",value:!0},{key:"Nimue",value:!1},{key:"Gawain",value:!1},{key:"Lovers",value:!0},{key:"Lone Lovers",value:!1},{key:"Mordred",value:!0},{key:"Morgana",value:!0},{key:"Maelagant",value:!0},{key:"Oberon",value:!0},{key:"Agravaine",value:!0},{key:"Colgrevance",value:!0},{key:"Duplicate Roles",value:!1}],switches:[],redirect:"",player_key:0,join_error:"",error:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=this.state.players.values(),a=t.next();!a.done;)e.push(a.value.name),a=t.next();return s.a.createElement("div",{className:"lobby"},this.state.redirect,this.state.join_redirect,s.a.createElement(f,{options:this.state.roles,display:this.state.options,submit:this.optionsSubmit}),"\\        ",s.a.createElement("h1",null,"THavalon"),s.a.createElement("button",{className:"large_button",onClick:this.showInputs},"Create Game"),this.state.input?s.a.createElement("div",null,s.a.createElement("form",{className:"player_input",id:"player-name-input",onSubmit:this.playerSubmit},s.a.createElement("input",{type:"text",id:"input-field",placeholder:"Enter player name"}),s.a.createElement("br",null),s.a.createElement("div",{className:"error"},this.state.error),s.a.createElement("input",{type:"submit",className:"player-submit",id:"add-submit",value:"Add"}),s.a.createElement("button",{className:"small_button",onClick:this.options},"Options")),s.a.createElement("div",{className:"player_tags"},this.state.players.map(function(e){return e.value})),this.isValid()):null,s.a.createElement("button",{className:"large_button",onClick:this.join},"Join Game"),this.state.join?s.a.createElement("div",null,s.a.createElement("form",{className:"player_input",onSubmit:this.forwardToGame},this.state.join_input,s.a.createElement("input",{type:"submit",className:"player-submit",id:"join-submit",value:"Join"}),s.a.createElement("br",null),s.a.createElement("div",{className:"error"}," ",this.state.join_error," ")),s.a.createElement(y,null)):null,s.a.createElement("div",{className:"info"},this.state.info?s.a.createElement("div",{className:"rules_wrapper"},s.a.createElement("button",{className:"exit_button",onClick:this.info}," x "),s.a.createElement("div",{className:"rules"},s.a.createElement("h1",null,"Rules"),s.a.createElement(d,null))):null,s.a.createElement("button",{className:"info_button",onClick:this.info},"?")))}}]),t}(n.Component),E=a(46),g=a(49),k=a(48),j=(a(38),["Good Wins!","Evil wins on missions!","Evil wins by assassination!"]),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).make_submitter=function(e){return function(){a.submit_results(e)}},a.submit_results=function(e){var t=a.props.location.state.id;fetch("/gameover/"+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({result:e})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=0;return s.a.createElement("div",{className:"submitresults"},s.a.createElement("h1",null," Submit results for game ",this.props.location.state.id," "),s.a.createElement("ul",null,j.map(function(a){return t++,s.a.createElement("li",null,s.a.createElement(v.a,{key:t,onClick:e.make_submitter(a),to:{pathname:"/"}},s.a.createElement("button",{className:"my_button, large_button"},a)))})))}}]),t}(n.Component),O=a(24),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).render_game=function(){var e=a.props.match.params.id;console.log("Get Game Info"),fetch("/game/info/"+e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){if(console.log("Response"),console.log(e),0!==e.length)return a.setState({game:e,start:e[0].name}),e;window.location.href="/"}).catch(function(e){console.log(e)})},a.state={game:[],start:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.history.push(""),this.props.history.push(this.props.location),this.render_game()}},{key:"render",value:function(){var e=this,t=0;return console.log(this.props.location),s.a.createElement("div",{className:"names"},s.a.createElement("h3",null,"Game ID: ",this.props.match.params.id," "),s.a.createElement(O.CopyToClipboard,{id:"copy",text:window.location.href},s.a.createElement("button",{className:"small_button my_button",id:"copy_button"},"Copy")),s.a.createElement("h3",null," Starting Player:",s.a.createElement("span",{className:"name"}," ",this.state.start)," "),this.state.game.map(function(a){var n=e.props.location.pathname+"/"+a.name;return t++,s.a.createElement(v.a,{key:t,to:{pathname:n,state:{name:a.name,role:a.role,role_info:a.information,description:a.description}}},s.a.createElement("button",{className:"my_button, large_button"},s.a.createElement("span",{className:"name"},a.name)))}),s.a.createElement(v.a,{to:{pathname:this.props.location.pathname+"/game/donotopen",state:{game:this.state.game}}},s.a.createElement("button",{className:"my_button, large_button"},"Do Not Open")),s.a.createElement(v.a,{to:{pathname:"/submitresults",state:{id:this.props.match.params.id}}},s.a.createElement("button",{className:"my_button, large_button"},"Submit Game Results")))}}]),t}(n.Component),_=(n.Component,function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Board"})}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).parseInfo=function(e){var t=JSON.parse(e);console.log(t);var a=[];return Object.keys(t).forEach(function(e){a.push(t[e])}),console.log(a),a.flat().map(function(e){return s.a.createElement("span",null,e," ")})},a.open=function(){a.setState({open:!a.state.open,text:a.state.open?"Show":"Hide"})},a.state={open:!1,text:"Show"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"donotopen"},s.a.createElement("h1",null," Do Not Open "),s.a.createElement("button",{className:"my_button, large_button",id:"show_button",onClick:this.open},this.state.text),this.state.open?s.a.createElement("ul",null,this.props.location.state.game.map(function(t){return s.a.createElement("li",null,t.name,": ",t.role,", seeing: ",e.parseInfo(t.information))})):null)}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).parseInfo=function(){var e=JSON.parse(a.props.location.state.role_info);console.log(e);var t=[];return Object.keys(e).forEach(function(a){t.push(e[a])}),console.log(t),t.flat()},a.state={info:a.parseInfo()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"player_info"},s.a.createElement("h1",{className:"player_title"}," Displaying information for ",this.props.location.state.name," "),s.a.createElement("h2",null,"You are ",this.props.location.state.role),s.a.createElement("div",{className:"description"},this.props.location.state.description.split("\n").map(function(e,t){return s.a.createElement("div",{key:t},e," ",s.a.createElement("br",null))})),s.a.createElement("ul",null,this.state.info.map(function(e){return s.a.createElement("li",null,e)})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(18),T=a.n(G),I=(t.default=T()(),T()());r.a.render(s.a.createElement(E.a,{history:I},s.a.createElement(g.a,null,s.a.createElement(k.a,{exact:!0,path:"/",component:b}),s.a.createElement(k.a,{exact:!0,path:"/submitresults",component:N}),s.a.createElement(k.a,{exact:!0,path:"/:id",component:w}),s.a.createElement(k.a,{exact:!0,path:"/:id/game/donotopen",component:S}),s.a.createElement(k.a,{exact:!0,path:"/:id/board",component:_}),s.a.createElement(k.a,{exact:!0,path:"/:id/:name",component:C}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.41388cdd.chunk.js.map
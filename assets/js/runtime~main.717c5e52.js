(()=>{"use strict";var e,b,a,d,f,c={},t={};function r(e){var b=t[e];if(void 0!==b)return b.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=c,r.c=t,e=[],r.O=(b,a,d,f)=>{if(!a){var c=1/0;for(i=0;i<e.length;i++){a=e[i][0],d=e[i][1],f=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&f||c>=f)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,f<c&&(c=f));if(t){e.splice(i--,1);var n=d();void 0!==n&&(b=n)}}return b}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[a,d,f]},r.n=e=>{var b=e&&e.__esModule?()=>e.default:()=>e;return r.d(b,{a:b}),b},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var c={};b=b||[null,a({}),a([]),a(a)];for(var t=2&d&&e;"object"==typeof t&&!~b.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((b=>c[b]=()=>e[b]));return c.default=()=>e,r.d(f,c),f},r.d=(e,b)=>{for(var a in b)r.o(b,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:b[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((b,a)=>(r.f[a](e,b),b)),[])),r.u=e=>"assets/js/"+({6:"11b90969",53:"935f2afb",148:"13be8a1e",168:"8dcbaead",183:"89d38d91",250:"a74a1827",269:"a750a3fc",328:"6b39184c",362:"4b360d1f",630:"cbe90695",720:"9ca9c71d",844:"0990f526",853:"9ab8f7d1",879:"edaeddc8",899:"fdab525d",968:"72774278",1050:"546cb4d9",1056:"29fd3f23",1123:"deb6dab2",1224:"a4efda0f",1307:"d167f918",1362:"624b5173",1371:"f6aafa6d",1380:"5c208b63",1396:"b1e2dded",1460:"111694af",1550:"b38bacc8",1595:"5a4833f0",1615:"cc1a5c0f",1643:"e1e6ce21",1679:"b7c49b8c",1762:"758be001",1787:"8ca40f61",1948:"e544fbea",1950:"c59725c4",1997:"81c53c01",2e3:"ec08bd07",2019:"96c14e05",2053:"da36dd90",2140:"cb766aa0",2165:"1d6bf8c1",2203:"67400e7d",2204:"ff7bfaf6",2367:"cf36370c",2438:"be7b6151",2439:"d1e9b6be",2485:"dffcbc82",2517:"2d30e6f2",2528:"2eff4421",2635:"e6a17842",2706:"729349fd",2826:"99a77ec3",2855:"70a62832",2865:"1b28f0da",2910:"ef7f6f62",2925:"0154257d",2952:"9dc556d5",2976:"1ba09cfb",3007:"33b53c0f",3041:"f27806ea",3073:"c75e7eb0",3186:"2040f1de",3375:"7b1944dc",3389:"6c05f899",3423:"bb847c1f",3456:"7e4ca474",3472:"d7c473e7",3496:"fde0b750",3628:"a366ba23",3641:"c59f647d",3692:"e1682e52",3744:"026870e1",3862:"3b21fd45",3950:"507b05f8",4059:"e16df78a",4195:"c4f5d8e4",4225:"bfa335b6",4298:"b491523f",4350:"8f60b269",4368:"a94703ab",4370:"50652928",4412:"9919b06e",4557:"8c09611c",4570:"280b2344",4618:"b106227b",4662:"95d426ea",4709:"47bb6396",4741:"74bf304f",4770:"62e979cf",4803:"4a5effae",4854:"148bcf26",4862:"c030233b",4898:"927b8eb7",5045:"7b448f6d",5080:"67b91eab",5095:"416d03ef",5131:"e8dd4c91",5144:"24235d4e",5162:"b0a97d71",5200:"624bf5a2",5221:"206a2351",5243:"a40735a3",5351:"904c7534",5395:"2ecd182a",5713:"4539ebe2",5794:"d109cac8",5835:"d6d6d2b7",5921:"60afce9d",5924:"b972cc7f",6004:"21d22d56",6178:"636bd93e",6188:"9683dfaf",6197:"4acacaeb",6328:"202ba1c4",6349:"402bcc49",6383:"732bb58b",6502:"7f0dacfb",6545:"d0ff6239",6627:"2ac7c7ed",6708:"c8e7be8d",6745:"3555fb46",6810:"fc007f49",7009:"201b3e71",7112:"ca366fb8",7245:"49488d8e",7255:"820a8bbb",7302:"feecf3ec",7328:"63bd6620",7377:"39a080d1",7391:"000b16df",7393:"aa36961f",7422:"93e62e20",7712:"e155a315",7898:"b963d311",7918:"17896441",7920:"1a4e3797",7945:"78fe8b07",7988:"42c23574",7991:"eb223e99",8022:"487ba6af",8030:"7024fab8",8096:"bc129cb6",8146:"e8184862",8197:"f17e5ff6",8306:"1a627bda",8326:"459016f7",8426:"b8349752",8472:"80bbe1f9",8484:"dc508df5",8518:"a7bd4aaa",8536:"1d79871a",8564:"99088da8",8567:"ce0aee51",8715:"9f93a9a0",8768:"b6473784",8815:"8fd8e04c",8824:"37b0c1ad",9056:"4ef87d8d",9070:"d204c4bf",9080:"2b5eae4e",9093:"0b4c2791",9231:"be7ce2e5",9311:"d674b00a",9315:"6525031d",9398:"57adaea8",9421:"79bb7996",9533:"7e18a7df",9584:"ff938bb8",9661:"5e95c892",9669:"6b7ab60b",9866:"138b836a",9884:"3d54b9ed",9969:"4c58f9fb"}[e]||e)+"."+{6:"e5722ba1",53:"7a0b6b20",148:"4dda9ca0",168:"ede5c210",183:"594c802a",250:"2b0bcec4",269:"fcf7db48",328:"717f84a4",362:"5291b525",630:"f20fe886",720:"c25672c9",844:"98a66167",853:"f9ee2bff",879:"1e4d5186",899:"e1f8df07",968:"ec68e628",1050:"f11ac5a5",1056:"1004aaf2",1123:"b6072dd9",1224:"75645962",1307:"518eb149",1362:"fd91a4aa",1371:"f7b9f1dc",1380:"b052a45f",1396:"092d926c",1460:"24200f33",1550:"ee219cf2",1595:"f78b04fa",1615:"2d2665b0",1643:"8d8965e3",1679:"aceb5918",1762:"ce1d878d",1787:"d10c1b89",1948:"94a26eb4",1950:"6312f999",1997:"20743441",2e3:"fec94087",2019:"89874c75",2021:"84dc0515",2053:"212d33fd",2140:"30c305d6",2165:"eb4ef984",2203:"a4609431",2204:"906e501f",2367:"9fb3ccc5",2438:"01f270f6",2439:"d3f8664c",2485:"99ada2ae",2517:"422806a0",2528:"fc181ee1",2635:"decd10bd",2706:"5225cd72",2826:"598ef6a6",2855:"41b27377",2865:"38429d77",2910:"e209135a",2925:"7f8dac7d",2952:"e7041144",2976:"5c1cc873",3007:"49065d0e",3022:"7733617a",3041:"da540705",3073:"3cb80893",3094:"2ed8d08e",3186:"7a537703",3375:"d463a811",3389:"f22d87bb",3423:"1dedddb3",3456:"d2677a17",3472:"74ef92a8",3496:"5c261376",3628:"5622fc91",3641:"6c89a6d3",3692:"d984fde0",3744:"47d268d9",3862:"2962a01f",3950:"45870056",4059:"41e75e7b",4195:"df0349d6",4225:"5fffc70a",4298:"c39c2d93",4350:"2c78a964",4368:"ae0ead13",4370:"fdda15c7",4412:"fe3854f3",4557:"d19de22f",4570:"727b252d",4618:"17a10919",4662:"456c41be",4709:"b43fb4f6",4741:"243cf00a",4770:"3077667b",4803:"e45c9ce8",4854:"2ee2b36d",4862:"faf5ace0",4898:"d6bc03b3",5045:"a82f2c33",5080:"356be6c1",5095:"2c9d95d7",5131:"50bc6db4",5144:"77c2de50",5162:"97949419",5200:"eecfac7e",5221:"84873460",5243:"2eb0aadb",5351:"c481adbb",5395:"75b4024a",5713:"58b03a5a",5794:"e785e4ad",5835:"c9d92daa",5921:"c978863c",5924:"413b03cf",6004:"dd77f7bc",6072:"57cb4318",6084:"5ef8eba4",6178:"73b1627e",6188:"766a6861",6197:"9158e450",6328:"a73c1aca",6349:"8bf095cf",6383:"0106aa25",6502:"bf26c784",6545:"dcb5d897",6627:"8c5a2042",6708:"bdf9b0e0",6745:"07b1434e",6810:"6c574eb5",7009:"a970e2bc",7112:"65855983",7245:"915c0e3d",7255:"839a0479",7302:"07290712",7328:"93c5ded5",7377:"967f659f",7391:"8968e3e3",7393:"0954e064",7422:"fe8508a0",7712:"521a6fd0",7898:"3991c544",7918:"630f762e",7920:"5e6c379a",7945:"6436bab2",7988:"df97869a",7991:"6e31d8a0",8022:"990d92fa",8030:"a458c925",8096:"dac90dcc",8146:"f8d677dd",8197:"26e805c0",8306:"9713bc60",8326:"2681687e",8426:"ff085573",8472:"29406b68",8484:"e6a91c87",8518:"1927daf7",8536:"23120f04",8564:"310e7d65",8567:"fe8b7bff",8715:"bda8ed03",8768:"ba62b9f8",8815:"e62a505a",8824:"2095abe7",9056:"0060a194",9070:"f082b360",9080:"0457feaa",9093:"af862310",9231:"bec13ef2",9311:"32c5e820",9315:"dc55f23b",9398:"050ea390",9421:"d352a7f6",9533:"ce792bff",9584:"9743cb46",9661:"48dcc81a",9669:"7d67eae9",9825:"84d3c53f",9866:"88c80aea",9884:"6e379d4a",9969:"2b64681a"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),d={},f="vgg-docs:",r.l=(e,b,a,c)=>{if(d[e])d[e].push(b);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+a){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+a),t.src=e),d[e]=[b];var l=(b,a)=>{t.onerror=t.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(a))),b)return b(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"7918",50652928:"4370",72774278:"968","11b90969":"6","935f2afb":"53","13be8a1e":"148","8dcbaead":"168","89d38d91":"183",a74a1827:"250",a750a3fc:"269","6b39184c":"328","4b360d1f":"362",cbe90695:"630","9ca9c71d":"720","0990f526":"844","9ab8f7d1":"853",edaeddc8:"879",fdab525d:"899","546cb4d9":"1050","29fd3f23":"1056",deb6dab2:"1123",a4efda0f:"1224",d167f918:"1307","624b5173":"1362",f6aafa6d:"1371","5c208b63":"1380",b1e2dded:"1396","111694af":"1460",b38bacc8:"1550","5a4833f0":"1595",cc1a5c0f:"1615",e1e6ce21:"1643",b7c49b8c:"1679","758be001":"1762","8ca40f61":"1787",e544fbea:"1948",c59725c4:"1950","81c53c01":"1997",ec08bd07:"2000","96c14e05":"2019",da36dd90:"2053",cb766aa0:"2140","1d6bf8c1":"2165","67400e7d":"2203",ff7bfaf6:"2204",cf36370c:"2367",be7b6151:"2438",d1e9b6be:"2439",dffcbc82:"2485","2d30e6f2":"2517","2eff4421":"2528",e6a17842:"2635","729349fd":"2706","99a77ec3":"2826","70a62832":"2855","1b28f0da":"2865",ef7f6f62:"2910","0154257d":"2925","9dc556d5":"2952","1ba09cfb":"2976","33b53c0f":"3007",f27806ea:"3041",c75e7eb0:"3073","2040f1de":"3186","7b1944dc":"3375","6c05f899":"3389",bb847c1f:"3423","7e4ca474":"3456",d7c473e7:"3472",fde0b750:"3496",a366ba23:"3628",c59f647d:"3641",e1682e52:"3692","026870e1":"3744","3b21fd45":"3862","507b05f8":"3950",e16df78a:"4059",c4f5d8e4:"4195",bfa335b6:"4225",b491523f:"4298","8f60b269":"4350",a94703ab:"4368","9919b06e":"4412","8c09611c":"4557","280b2344":"4570",b106227b:"4618","95d426ea":"4662","47bb6396":"4709","74bf304f":"4741","62e979cf":"4770","4a5effae":"4803","148bcf26":"4854",c030233b:"4862","927b8eb7":"4898","7b448f6d":"5045","67b91eab":"5080","416d03ef":"5095",e8dd4c91:"5131","24235d4e":"5144",b0a97d71:"5162","624bf5a2":"5200","206a2351":"5221",a40735a3:"5243","904c7534":"5351","2ecd182a":"5395","4539ebe2":"5713",d109cac8:"5794",d6d6d2b7:"5835","60afce9d":"5921",b972cc7f:"5924","21d22d56":"6004","636bd93e":"6178","9683dfaf":"6188","4acacaeb":"6197","202ba1c4":"6328","402bcc49":"6349","732bb58b":"6383","7f0dacfb":"6502",d0ff6239:"6545","2ac7c7ed":"6627",c8e7be8d:"6708","3555fb46":"6745",fc007f49:"6810","201b3e71":"7009",ca366fb8:"7112","49488d8e":"7245","820a8bbb":"7255",feecf3ec:"7302","63bd6620":"7328","39a080d1":"7377","000b16df":"7391",aa36961f:"7393","93e62e20":"7422",e155a315:"7712",b963d311:"7898","1a4e3797":"7920","78fe8b07":"7945","42c23574":"7988",eb223e99:"7991","487ba6af":"8022","7024fab8":"8030",bc129cb6:"8096",e8184862:"8146",f17e5ff6:"8197","1a627bda":"8306","459016f7":"8326",b8349752:"8426","80bbe1f9":"8472",dc508df5:"8484",a7bd4aaa:"8518","1d79871a":"8536","99088da8":"8564",ce0aee51:"8567","9f93a9a0":"8715",b6473784:"8768","8fd8e04c":"8815","37b0c1ad":"8824","4ef87d8d":"9056",d204c4bf:"9070","2b5eae4e":"9080","0b4c2791":"9093",be7ce2e5:"9231",d674b00a:"9311","6525031d":"9315","57adaea8":"9398","79bb7996":"9421","7e18a7df":"9533",ff938bb8:"9584","5e95c892":"9661","6b7ab60b":"9669","138b836a":"9866","3d54b9ed":"9884","4c58f9fb":"9969"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(b,a)=>{var d=r.o(e,b)?e[b]:void 0;if(0!==d)if(d)a.push(d[2]);else if(/^(1303|532)$/.test(b))e[b]=0;else{var f=new Promise(((a,f)=>d=e[b]=[a,f]));a.push(d[2]=f);var c=r.p+r.u(b),t=new Error;r.l(c,(a=>{if(r.o(e,b)&&(0!==(d=e[b])&&(e[b]=void 0),d)){var f=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;t.message="Loading chunk "+b+" failed.\n("+f+": "+c+")",t.name="ChunkLoadError",t.type=f,t.request=c,d[1](t)}}),"chunk-"+b,b)}},r.O.j=b=>0===e[b];var b=(b,a)=>{var d,f,c=a[0],t=a[1],o=a[2],n=0;if(c.some((b=>0!==e[b]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(b&&b(a);n<c.length;n++)f=c[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},a=self.webpackChunkvgg_docs=self.webpackChunkvgg_docs||[];a.forEach(b.bind(null,0)),a.push=b.bind(null,a.push.bind(a))})(),r.nc=void 0})();
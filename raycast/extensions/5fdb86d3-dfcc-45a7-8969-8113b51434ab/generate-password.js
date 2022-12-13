"use strict";var Sn=Object.create;var W=Object.defineProperty;var bn=Object.getOwnPropertyDescriptor;var Pn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,On=Object.prototype.hasOwnProperty;var g=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),En=(e,t)=>{for(var n in t)W(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Pn(t))!On.call(e,o)&&o!==n&&W(e,o,{get:()=>t[o],enumerable:!(r=bn(t,o))||r.enumerable});return e};var E=(e,t,n)=>(n=e!=null?Sn(xn(e)):{},Ge(t||!e||!e.__esModule?W(n,"default",{value:e,enumerable:!0}):n,e)),In=e=>Ge(W({},"__esModule",{value:!0}),e);var $e=g((to,De)=>{De.exports=Me;Me.sync=Gn;var Ue=require("fs");function An(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Be(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:An(t,n)}function Me(e,t,n){Ue.stat(e,function(r,o){n(r,r?!1:Be(o,e,t))})}function Gn(e,t){return Be(Ue.statSync(e),e,t)}});var He=g((no,Ve)=>{Ve.exports=We;We.sync=Rn;var je=require("fs");function We(e,t,n){je.stat(e,function(r,o){n(r,r?!1:qe(o,t))})}function Rn(e,t){return qe(je.statSync(e),t)}function qe(e,t){return e.isFile()&&kn(e,t)}function kn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),c=parseInt("001",8),u=a|l,d=n&c||n&l&&o===i||n&a&&r===s||n&u&&s===0;return d}});var Xe=g((oo,Ke)=>{var ro=require("fs"),q;process.platform==="win32"||global.TESTING_WINDOWS?q=$e():q=He();Ke.exports=re;re.sync=Nn;function re(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){re(e,t||{},function(s,i){s?o(s):r(i)})})}q(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Nn(e,t){try{return q.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var tt=g((so,et)=>{var G=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",ze=require("path"),Fn=G?";":":",Je=Xe(),Ye=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Qe=(e,t)=>{let n=t.colon||Fn,r=e.match(/\//)||G&&e.match(/\\/)?[""]:[...G?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=G?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=G?o.split(n):[""];return G&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},Ze=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=Qe(e,t),i=[],a=c=>new Promise((u,d)=>{if(c===r.length)return t.all&&i.length?u(i):d(Ye(e));let p=r[c],y=/^".*"$/.test(p)?p.slice(1,-1):p,x=ze.join(y,e),O=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;u(l(O,c,0))}),l=(c,u,d)=>new Promise((p,y)=>{if(d===o.length)return p(a(u+1));let x=o[d];Je(c+x,{pathExt:s},(O,A)=>{if(!O&&A)if(t.all)i.push(c+x);else return p(c+x);return p(l(c,u,d+1))})});return n?a(0).then(c=>n(null,c),n):a(0)},Ln=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=Qe(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,c=ze.join(l,e),u=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+c:c;for(let d=0;d<r.length;d++){let p=u+r[d];try{if(Je.sync(p,{pathExt:o}))if(t.all)s.push(p);else return p}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Ye(e)};et.exports=Ze;Ze.sync=Ln});var rt=g((io,oe)=>{"use strict";var nt=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};oe.exports=nt;oe.exports.default=nt});var at=g((ao,it)=>{"use strict";var ot=require("path"),_n=tt(),Un=rt();function st(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=_n.sync(e.command,{path:n[Un({env:n})],pathExt:t?ot.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=ot.resolve(o?e.options.cwd:"",i)),i}function Bn(e){return st(e)||st(e,!0)}it.exports=Bn});var ct=g((co,ie)=>{"use strict";var se=/([()\][%!^"`<>&|;, *?])/g;function Mn(e){return e=e.replace(se,"^$1"),e}function Dn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(se,"^$1"),t&&(e=e.replace(se,"^$1")),e}ie.exports.command=Mn;ie.exports.argument=Dn});var ut=g((lo,lt)=>{"use strict";lt.exports=/^#!(.*)/});var pt=g((uo,dt)=>{"use strict";var $n=ut();dt.exports=(e="")=>{let t=e.match($n);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var mt=g((po,ft)=>{"use strict";var ae=require("fs"),jn=pt();function Wn(e){let n=Buffer.alloc(150),r;try{r=ae.openSync(e,"r"),ae.readSync(r,n,0,150,0),ae.closeSync(r)}catch{}return jn(n.toString())}ft.exports=Wn});var yt=g((fo,wt)=>{"use strict";var qn=require("path"),ht=at(),gt=ct(),Vn=mt(),Hn=process.platform==="win32",Kn=/\.(?:com|exe)$/i,Xn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function zn(e){e.file=ht(e);let t=e.file&&Vn(e.file);return t?(e.args.unshift(e.file),e.command=t,ht(e)):e.file}function Jn(e){if(!Hn)return e;let t=zn(e),n=!Kn.test(t);if(e.options.forceShell||n){let r=Xn.test(t);e.command=qn.normalize(e.command),e.command=gt.command(e.command),e.args=e.args.map(s=>gt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Yn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Jn(r)}wt.exports=Yn});var Pt=g((mo,bt)=>{"use strict";var ce=process.platform==="win32";function le(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Qn(e,t){if(!ce)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=St(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function St(e,t){return ce&&e===1&&!t.file?le(t.original,"spawn"):null}function Zn(e,t){return ce&&e===1&&!t.file?le(t.original,"spawnSync"):null}bt.exports={hookChildProcess:Qn,verifyENOENT:St,verifyENOENTSync:Zn,notFoundError:le}});var Et=g((ho,R)=>{"use strict";var xt=require("child_process"),ue=yt(),de=Pt();function Ot(e,t,n){let r=ue(e,t,n),o=xt.spawn(r.command,r.args,r.options);return de.hookChildProcess(o,r),o}function er(e,t,n){let r=ue(e,t,n),o=xt.spawnSync(r.command,r.args,r.options);return o.error=o.error||de.verifyENOENTSync(o.status,r),o}R.exports=Ot;R.exports.spawn=Ot;R.exports.sync=er;R.exports._parse=ue;R.exports._enoent=de});var _t=g((Lo,X)=>{X.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&X.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&X.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var $t=g((_o,L)=>{var m=global.process,v=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};v(m)?(Ut=require("assert"),N=_t(),Bt=/^win/i.test(m.platform),U=require("events"),typeof U!="function"&&(U=U.EventEmitter),m.__signal_exit_emitter__?w=m.__signal_exit_emitter__:(w=m.__signal_exit_emitter__=new U,w.count=0,w.emitted={}),w.infinite||(w.setMaxListeners(1/0),w.infinite=!0),L.exports=function(e,t){if(!v(global.process))return function(){};Ut.equal(typeof e,"function","a callback must be provided for exit handler"),F===!1&&we();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){w.removeListener(n,e),w.listeners("exit").length===0&&w.listeners("afterexit").length===0&&z()};return w.on(n,e),r},z=function(){!F||!v(global.process)||(F=!1,N.forEach(function(t){try{m.removeListener(t,J[t])}catch{}}),m.emit=Y,m.reallyExit=ye,w.count-=1)},L.exports.unload=z,C=function(t,n,r){w.emitted[t]||(w.emitted[t]=!0,w.emit(t,n,r))},J={},N.forEach(function(e){J[e]=function(){if(!!v(global.process)){var n=m.listeners(e);n.length===w.count&&(z(),C("exit",null,e),C("afterexit",null,e),Bt&&e==="SIGHUP"&&(e="SIGINT"),m.kill(m.pid,e))}}}),L.exports.signals=function(){return N},F=!1,we=function(){F||!v(global.process)||(F=!0,w.count+=1,N=N.filter(function(t){try{return m.on(t,J[t]),!0}catch{return!1}}),m.emit=Dt,m.reallyExit=Mt)},L.exports.load=we,ye=m.reallyExit,Mt=function(t){!v(global.process)||(m.exitCode=t||0,C("exit",m.exitCode,null),C("afterexit",m.exitCode,null),ye.call(m,m.exitCode))},Y=m.emit,Dt=function(t,n){if(t==="exit"&&v(global.process)){n!==void 0&&(m.exitCode=n);var r=Y.apply(this,arguments);return C("exit",m.exitCode,null),C("afterexit",m.exitCode,null),r}else return Y.apply(this,arguments)}):L.exports=function(){return function(){}};var Ut,N,Bt,U,w,z,C,J,F,we,ye,Mt,Y,Dt});var Yt=g((Mo,Jt)=>{"use strict";var{PassThrough:Er}=require("stream");Jt.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new Er({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",l=>{a.push(l),o?i=a.length:i+=l.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Qt=g((Do,B)=>{"use strict";var{constants:Ir}=require("buffer"),Tr=require("stream"),{promisify:vr}=require("util"),Cr=Yt(),Ar=vr(Tr.pipeline),Q=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Se(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Cr(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=Ir.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await Ar(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Q)})}),r.getBufferedValue()}B.exports=Se;B.exports.buffer=(e,t)=>Se(e,{...t,encoding:"buffer"});B.exports.array=(e,t)=>Se(e,{...t,array:!0});B.exports.MaxBufferError=Q});var en=g(($o,Zt)=>{"use strict";var{PassThrough:Gr}=require("stream");Zt.exports=function(){var e=[],t=new Gr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var Xr={};En(Xr,{default:()=>Kr});module.exports=In(Xr);var f=require("@raycast/api");var b=require("@raycast/api"),I=require("react");var Re="https://bitwarden.com",ke={lowercase:!0,uppercase:!0,number:!1,special:!1,passphrase:!1,length:14,words:3,separator:"-",capitalize:!1,includeNumber:!1},T={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted"},ee={password:{length:{label:"Length of the password",hint:"5 - 128",type:"number",errorMessage:"Number between 5 and 128"},uppercase:{label:"Uppercase characters",hint:"ABCDEFGHIJLMNOPQRSTUVWXYZ",type:"boolean"},lowercase:{label:"Lowercase characters",hint:"abcdefghijklmnopqrstuvwxyz",type:"boolean"},number:{label:"Numeric characters",hint:"0123456789",type:"boolean"},special:{label:"Special characters",hint:"!@#$%^&*()_+-=[]{}|;:,./<>?",type:"boolean"}},passphrase:{words:{label:"Number of words",hint:"3 - 20",type:"number",errorMessage:"Number between 3 and 20"},separator:{label:"Word separator",hint:"this-is-a-passphrase",type:"string",errorMessage:"Must be a single character"},capitalize:{label:"Capitalise",hint:"This-Is-A-Passphrase",type:"boolean"},includeNumber:{label:"Include number",hint:"This2-Is-A-Passphrase",type:"boolean"}}};var te=require("@raycast/api");Object.typedEntries=function(e){return Object.entries(e)};function ne(){let{serverUrl:e}=(0,te.getPreferenceValues)();return e===""||e==="bitwarden.com"||e==="https://bitwarden.com"?"":e}function Ne(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}var Fe=e=>e.charAt(0).toUpperCase()+e.slice(1);var Tn={options:void 0,password:void 0,isGenerating:!0},vn=(e,t)=>{switch(t.type){case"generate":return{...e,isGenerating:!0};case"setPassword":return{...e,password:t.password,isGenerating:!1};case"setOptions":return{...e,options:t.options};case"cancelGenerate":return{...e,isGenerating:!1};case"clearPassword":return{...e,isGenerating:!1,password:void 0}}};function Le(e){let[{options:t,...n},r]=(0,I.useReducer)(vn,Tn),{abortControllerRef:o,renew:s,abort:i}=Cn(),a=async(d=t)=>{try{s(),r({type:"generate"});let p=await e.generatePassword(d,o?.current);r({type:"setPassword",password:p})}catch{o?.current.signal.aborted&&r({type:"cancelGenerate"})}},l=()=>{n.isGenerating||a()},c=async(d,p)=>{if(!t||t[d]===p)return;n.isGenerating&&i();let y={...t,[d]:p};r({type:"setOptions",options:y}),await Promise.all([b.LocalStorage.setItem(T.PASSWORD_OPTIONS,JSON.stringify(y)),a(y)])},u=async()=>{let d=await b.LocalStorage.getItem(T.PASSWORD_OPTIONS),p={...ke,...d?JSON.parse(d):{}};r({type:"setOptions",options:p}),await a(p)};return(0,I.useEffect)(()=>{u()},[]),{...n,regeneratePassword:l,options:t,setOption:c}}var _e=async()=>{let e=()=>(0,b.popToRoot)({clearSearchBar:!1}),t=()=>b.LocalStorage.setItem(T.PASSWORD_ONE_TIME_WARNING,!0),n=async()=>{await b.LocalStorage.getItem(T.PASSWORD_ONE_TIME_WARNING)||await(0,b.confirmAlert)({title:"Warning",message:"Password history is not available yet, so make sure to store the password after generating it!",icon:b.Icon.ExclamationMark,dismissAction:{title:"Go back",onAction:e},primaryAction:{title:"I understand",onAction:t}})};(0,I.useEffect)(()=>{n()},[])};function Cn(){let e=(0,I.useRef)(new AbortController);return{abortControllerRef:e,renew:()=>{!e.current.signal.aborted||(e.current=new AbortController)},abort:()=>{e.current?.abort()}}}var P=require("@raycast/api");var un=require("node:buffer"),dn=E(require("node:path"),1),Ie=E(require("node:child_process"),1),M=E(require("node:process"),1),pn=E(Et(),1);function pe(e){let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===n&&(e=e.slice(0,-1)),e}var _=E(require("node:process"),1),k=E(require("node:path"),1),It=E(require("node:url"),1);function V(e={}){let{env:t=process.env,platform:n=process.platform}=e;return n!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"}function tr(e={}){let{cwd:t=_.default.cwd(),path:n=_.default.env[V()],execPath:r=_.default.execPath}=e,o,s=t instanceof URL?It.default.fileURLToPath(t):t,i=k.default.resolve(s),a=[];for(;o!==i;)a.push(k.default.join(i,"node_modules/.bin")),o=i,i=k.default.resolve(i,"..");return a.push(k.default.resolve(s,r,"..")),[...a,n].join(k.default.delimiter)}function Tt({env:e=_.default.env,...t}={}){e={...e};let n=V({env:e});return t.path=e[n],e[n]=tr(t),e}var nr=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;let o=Object.getOwnPropertyDescriptor(e,n),s=Object.getOwnPropertyDescriptor(t,n);!rr(o,s)&&r||Object.defineProperty(e,n,s)},rr=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},or=(e,t)=>{let n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},sr=(e,t)=>`/* Wrapped ${e}*/
${t}`,ir=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),ar=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),cr=(e,t,n)=>{let r=n===""?"":`with ${n.trim()}() `,o=sr.bind(null,r,t.toString());Object.defineProperty(o,"name",ar),Object.defineProperty(e,"toString",{...ir,value:o})};function fe(e,t,{ignoreNonConfigurable:n=!1}={}){let{name:r}=e;for(let o of Reflect.ownKeys(t))nr(e,t,o,n);return or(e,t),cr(e,t,r),e}var H=new WeakMap,vt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(H.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return fe(s,e),H.set(s,r),s};vt.callCount=e=>{if(!H.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return H.get(e)};var Ct=vt;var Nt=require("os");var At=function(){let e=me-Gt+1;return Array.from({length:e},lr)},lr=function(e,t){return{name:`SIGRT${t+1}`,number:Gt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Gt=34,me=64;var kt=require("os");var Rt=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];var he=function(){let e=At();return[...Rt,...e].map(ur)},ur=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=kt.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}};var dr=function(){return he().reduce(pr,{})},pr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}}},Ft=dr(),fr=function(){let e=he(),t=64+1,n=Array.from({length:t},(r,o)=>mr(o,e));return Object.assign({},...n)},mr=function(e,t){let n=hr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:l}}},hr=function(e,t){let n=t.find(({name:r})=>Nt.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Go=fr();var gr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",ge=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:l,isCanceled:c,killed:u,parsed:{options:{timeout:d}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let p=o===void 0?void 0:Ft[o].description,y=r&&r.code,O=`Command ${gr({timedOut:l,timeout:d,errorCode:y,signal:o,signalDescription:p,exitCode:s,isCanceled:c})}: ${i}`,A=Object.prototype.toString.call(r)==="[object Error]",$=A?`${O}
${r.message}`:O,j=[$,t,e].filter(Boolean).join(`
`);return A?(r.originalMessage=r.message,r.message=j):r=new Error(j),r.shortMessage=$,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=p,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=c,r.killed=u&&!l,r};var K=["stdin","stdout","stderr"],wr=e=>K.some(t=>e[t]!==void 0),Lt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return K.map(r=>e[r]);if(wr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${K.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,K.length);return Array.from({length:n},(r,o)=>t[o])};var jt=E(require("node:os"),1),Wt=E($t(),1),yr=1e3*5,qt=(e,t="SIGTERM",n={})=>{let r=e(t);return Sr(e,t,n,r),r},Sr=(e,t,n,r)=>{if(!br(t,n,r))return;let o=xr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},br=(e,{forceKillAfterTimeout:t},n)=>Pr(e)&&t!==!1&&n,Pr=e=>e===jt.default.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",xr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return yr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Vt=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Or=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Ht=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,l)=>{o=setTimeout(()=>{Or(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Kt=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Xt=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=(0,Wt.default)(()=>{e.kill()});return r.finally(()=>{o()})};function zt(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var xe=E(Qt(),1),tn=E(en(),1),nn=(e,t)=>{t===void 0||e.stdin===void 0||(zt(t)?t.pipe(e.stdin):e.stdin.end(t))},rn=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=(0,tn.default)();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},be=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Pe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?(0,xe.default)(e,{encoding:t,maxBuffer:r}):xe.default.buffer(e,{maxBuffer:r})},on=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=Pe(e,{encoding:r,buffer:o,maxBuffer:s}),l=Pe(t,{encoding:r,buffer:o,maxBuffer:s}),c=Pe(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,l,c])}catch(u){return Promise.all([{error:u,signal:u.signal,timedOut:u.timedOut},be(e,a),be(t,l),be(n,c)])}};var Rr=(async()=>{})().constructor.prototype,kr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Rr,e)]),Oe=(e,t)=>{for(let[n,r]of kr){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},sn=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});var an=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Nr=/^[\w.-]+$/,Fr=/"/g,Lr=e=>typeof e!="string"||Nr.test(e)?e:`"${e.replace(Fr,'\\"')}"`,cn=(e,t)=>an(e,t).join(" "),ln=(e,t)=>an(e,t).map(n=>Lr(n)).join(" ");var _r=1e3*1e3*100,Ur=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?{...M.default.env,...e}:e;return n?Tt({env:s,cwd:r,execPath:o}):s},Br=(e,t,n={})=>{let r=pn.default._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:_r,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||M.default.cwd(),execPath:M.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Ur(n),n.stdio=Lt(n),M.default.platform==="win32"&&dn.default.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},Ee=(e,t,n)=>typeof t!="string"&&!un.Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?pe(t):t;function fn(e,t,n){let r=Br(e,t,n),o=cn(e,t),s=ln(e,t);Kt(r.options);let i;try{i=Ie.default.spawn(r.file,r.args,r.options)}catch(y){let x=new Ie.default.ChildProcess,O=Promise.reject(ge({error:y,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return Oe(x,O)}let a=sn(i),l=Ht(i,r.options,a),c=Xt(i,r.options,l),u={isCanceled:!1};i.kill=qt.bind(null,i.kill.bind(i)),i.cancel=Vt.bind(null,i,u);let p=Ct(async()=>{let[{error:y,exitCode:x,signal:O,timedOut:A},$,j,yn]=await on(i,r.options,c),Te=Ee(r.options,$),ve=Ee(r.options,j),Ce=Ee(r.options,yn);if(y||x!==0||O!==null){let Ae=ge({error:y,exitCode:x,signal:O,stdout:Te,stderr:ve,all:Ce,command:o,escapedCommand:s,parsed:r,timedOut:A,isCanceled:u.isCanceled||(r.options.signal?r.options.signal.aborted:!1),killed:i.killed});if(!r.options.reject)return Ae;throw Ae}return{command:o,escapedCommand:s,exitCode:0,stdout:Te,stderr:ve,all:Ce,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return nn(i,r.options.input),i.all=rn(i,r.options),Oe(i,p)}var mn=require("fs"),hn=require("path/posix");var Z=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r,serverCertsPath:o}=(0,P.getPreferenceValues)(),s=ne();if(this.cliPath=t||(process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,mn.existsSync)(this.cliPath))throw new Error(`Bitwarden CLI not found at ${this.cliPath}`);this.env={BITWARDENCLI_APPDATA_DIR:P.environment.supportPath,BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,hn.dirname)(process.execPath)},s&&o&&(this.env.NODE_EXTRA_CA_CERTS=o),this.initPromise=this.checkServerUrl(s)}async checkServerUrl(t){if((await P.LocalStorage.getItem("cliServer")||"")===t)return;let r=await(0,P.showToast)({style:P.Toast.Style.Animated,title:"Switching server...",message:"Bitwarden server preference changed."});try{try{await this.exec(["logout"],{waitForInit:!1})}catch{}await this.exec(["config","server",t||Re],{waitForInit:!1}),await P.LocalStorage.setItem("cliServer",t),r.style=P.Toast.Style.Success,r.title="Success!",r.message="Bitwarden server changed."}catch(o){r.style=P.Toast.Style.Failure,r.title="Unable to switch server.",o instanceof Error?r.message=o.message:r.message="Unknown error occurred."}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async logout(){await this.exec(["logout"])}async listItems(t){let{stdout:n}=await this.exec(["list","items","--session",t]);return JSON.parse(n).filter(o=>!!o.name)}async listFolders(t){let{stdout:n}=await this.exec(["list","folders","--session",t]);return JSON.parse(n)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(){let{stdout:t}=await this.exec(["status"]);return JSON.parse(t)}async generatePassword(t,n){let r=t?Ne(t):[],{stdout:o}=await this.exec(["generate",...r],{abortController:n});return o}async exec(t,n={}){let{abortController:r,waitForInit:o=!0}=n;return o&&await this.initPromise,fn(this.cliPath,t,{env:this.env,input:"",signal:r?.signal})}};var S=require("@raycast/api"),Dr=require("react");var Mr=require("@raycast/api");var D=require("react/jsx-runtime");function gn(){return(0,S.showToast)(S.Toast.Style.Failure,"Bitwarden CLI not found"),(0,D.jsx)(S.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:(0,D.jsxs)(S.ActionPanel,{children:[(0,D.jsx)(S.Action.CopyToClipboard,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}),(0,D.jsx)(S.Action.OpenInBrowser,{url:"https://bitwarden.com/help/article/cli/#download-and-install"})]})})}var wn=require("react"),h=require("react/jsx-runtime"),$r=()=>(0,h.jsx)(f.Form.Description,{text:""});function jr(){try{let e=new Z;return(0,h.jsx)(Wr,{bitwardenApi:e})}catch{return(0,h.jsx)(gn,{})}}function Wr({bitwardenApi:e}){let{password:t,regeneratePassword:n,isGenerating:r,options:o,setOption:s}=Le(e);if(_e(),!o)return(0,h.jsx)(f.Detail,{isLoading:!0});let i=c=>s("passphrase",c==="passphrase"),a=c=>u=>{s(c,u)},l=o?.passphrase?"passphrase":"password";return(0,h.jsxs)(f.Form,{isLoading:r,actions:(0,h.jsxs)(f.ActionPanel,{children:[!!t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Action.CopyToClipboard,{title:"Copy password",icon:f.Icon.Clipboard,content:t,shortcut:{key:"enter",modifiers:["cmd"]}}),(0,h.jsx)(f.Action.Paste,{title:"Paste password to active app",icon:f.Icon.Text,content:t,shortcut:{key:"enter",modifiers:["cmd","shift"]}})]}),(0,h.jsx)(f.Action,{title:"Regenerate password",icon:f.Icon.ArrowClockwise,onAction:n,shortcut:{key:"backspace",modifiers:["cmd"]}}),process.env.NODE_ENV==="development"&&(0,h.jsx)(f.Action,{title:"Clear storage",icon:f.Icon.Trash,onAction:Vr})]}),children:[(0,h.jsx)(f.Form.Description,{title:"\u{1F511}  Password",text:t??"Generating..."}),(0,h.jsx)($r,{}),(0,h.jsx)(f.Form.Separator,{}),(0,h.jsx)(f.Form.Dropdown,{id:"type",title:"Type",value:l,onChange:i,autoFocus:!0,children:Object.keys(ee).map(c=>(0,h.jsx)(f.Form.Dropdown.Item,{value:c,title:Fe(c)},c))}),Object.typedEntries(ee[l]).map(([c,u])=>(0,h.jsx)(qr,{option:c,field:u,defaultValue:o[c],errorMessage:u.errorMessage,onChange:a(c)},c))]})}function qr({option:e,defaultValue:t="",onChange:n,errorMessage:r,field:o}){let{hint:s="",label:i,type:a}=o,[l,c]=(0,wn.useState)(),u=d=>{Hr(e,d)?(n(d),c(void 0)):c(r)};return a==="boolean"?(0,h.jsx)(f.Form.Checkbox,{id:e,title:i,label:s,defaultValue:Boolean(t),onChange:n},e):(0,h.jsx)(f.Form.TextField,{id:e,title:i,placeholder:s,defaultValue:String(t),onChange:u,error:l},e)}async function Vr(){for(let e of Object.values(T))await f.LocalStorage.removeItem(e)}function Hr(e,t){return e==="length"?!isNaN(Number(t))&&Number(t)>=5&&Number(t)<=128:e==="separator"?t.length===1:e==="words"?!isNaN(Number(t))&&Number(t)>=3&&Number(t)<=20:!0}var Kr=jr;0&&(module.exports={});
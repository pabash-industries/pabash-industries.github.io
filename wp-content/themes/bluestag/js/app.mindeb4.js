
	// @koala-append "jquery.2.2.2.min.js"
	// @koala-append "jquery.slick.min.js"
	// @koala-append "jquery.tilt.min.js"
	// @koala-append "jquery.particles.min.js"
	// @koala-append "jquery.splitlines.js"
	// @koala-append "script.common.js"
	// @koala-append "script.sections.js"
	// @koala-append "script.home.js"
	// @koala-append "script.about.js"
	// @koala-append "script.journal.js"
	// @koala-append "script.portfolio.js"
	// @koala-append "script.product.js"
	// @koala-append "script.handbook.js"
	// @koala-append "script.contact.js"
	// @koala-append "script.ie.js"
	// @koala-append "script.js"


/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(i,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(i)),t(s),s}:t(jQuery)}(function(t){return t.fn.tilt=function(i){var s=function(){this.ticking||(requestAnimationFrame(g.bind(this)),this.ticking=!0)},e=function(){var i=this;t(this).on("mousemove",o),t(this).on("mouseenter",a),this.settings.reset&&t(this).on("mouseleave",l),this.settings.glare&&t(window).on("resize",d.bind(i))},n=function(){var i=this;void 0!==this.timeout&&clearTimeout(this.timeout),t(this).css({transition:this.settings.speed+"ms "+this.settings.easing}),this.settings.glare&&this.glareElement.css({transition:"opacity "+this.settings.speed+"ms "+this.settings.easing}),this.timeout=setTimeout(function(){t(i).css({transition:""}),i.settings.glare&&i.glareElement.css({transition:""})},this.settings.speed)},a=function(i){this.ticking=!1,t(this).css({"will-change":"transform"}),n.call(this),t(this).trigger("tilt.mouseEnter")},r=function(i){return"undefined"==typeof i&&(i={pageX:t(this).offset().left+t(this).outerWidth()/2,pageY:t(this).offset().top+t(this).outerHeight()/2}),{x:i.pageX,y:i.pageY}},o=function(t){this.mousePositions=r(t),s.call(this)},l=function(){n.call(this),this.reset=!0,s.call(this),t(this).trigger("tilt.mouseLeave")},h=function(){var i=t(this).outerWidth(),s=t(this).outerHeight(),e=t(this).offset().left,n=t(this).offset().top,a=(this.mousePositions.x-e)/i,r=(this.mousePositions.y-n)/s,o=(this.settings.maxTilt/2-a*this.settings.maxTilt).toFixed(2),l=(r*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),h=Math.atan2(this.mousePositions.x-(e+i/2),-(this.mousePositions.y-(n+s/2)))*(180/Math.PI);return{tiltX:o,tiltY:l,percentageX:100*a,percentageY:100*r,angle:h}},g=function(){return this.transforms=h.call(this),this.reset?(this.reset=!1,t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg)"),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")))):(t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.disableAxis?0:this.transforms.tiltY)+"deg) rotateY("+("y"===this.settings.disableAxis?0:this.transforms.tiltX)+"deg) scale3d("+this.settings.scale+","+this.settings.scale+","+this.settings.scale+")"),this.settings.glare&&(this.glareElement.css("transform","rotate("+this.transforms.angle+"deg) translate(-50%, -50%)"),this.glareElement.css("opacity",""+this.transforms.percentageY*this.settings.maxGlare/100)),t(this).trigger("change",[this.transforms]),void(this.ticking=!1))},c=function(){var i=this.settings.glarePrerender;if(i||t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=t(this).find(".js-tilt-glare"),this.glareElement=t(this).find(".js-tilt-glare-inner"),!i){var s={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"};this.glareElementWrapper.css(s).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth(),transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"})}},d=function(){this.glareElement.css({width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth()})};return t.fn.tilt.destroy=function(){t(this).each(function(){t(this).find(".js-tilt-glare").remove(),t(this).css({"will-change":"",transform:""}),t(this).off("mousemove mouseenter mouseleave")})},t.fn.tilt.getValues=function(){var i=[];return t(this).each(function(){this.mousePositions=r.call(this),i.push(h.call(this))}),i},t.fn.tilt.reset=function(){t(this).each(function(){var i=this;this.mousePositions=r.call(this),this.settings=t(this).data("settings"),l.call(this),setTimeout(function(){i.reset=!1},this.settings.transition)})},this.each(function(){var s=this;this.settings=t.extend({maxTilt:t(this).is("[data-tilt-max]")?t(this).data("tilt-max"):20,perspective:t(this).is("[data-tilt-perspective]")?t(this).data("tilt-perspective"):300,easing:t(this).is("[data-tilt-easing]")?t(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:t(this).is("[data-tilt-scale]")?t(this).data("tilt-scale"):"1",speed:t(this).is("[data-tilt-speed]")?t(this).data("tilt-speed"):"400",transition:!t(this).is("[data-tilt-transition]")||t(this).data("tilt-transition"),disableAxis:t(this).is("[data-tilt-disable-axis]")?t(this).data("tilt-disable-axis"):null,axis:t(this).is("[data-tilt-axis]")?t(this).data("tilt-axis"):null,reset:!t(this).is("[data-tilt-reset]")||t(this).data("tilt-reset"),glare:!!t(this).is("[data-tilt-glare]")&&t(this).data("tilt-glare"),maxGlare:t(this).is("[data-tilt-maxglare]")?t(this).data("tilt-maxglare"):1},i),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=function(){t(s).data("settings",s.settings),s.settings.glare&&c.call(s),e.call(s)},this.init()})},t("[data-tilt]").tilt(),!0});

function hexToRgb(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null}function clamp(a,b,c){return Math.min(Math.max(a,b),c)}function isInArray(a,b){return b.indexOf(a)>-1}var pJS=function(a,b){var c=document.querySelector("#"+a+" > .particles-js-canvas-el");this.pJS={canvas:{el:c,w:c.offsetWidth,h:c.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var d=this.pJS;b&&Object.deepExtend(d,b),d.tmp.obj={size_value:d.particles.size.value,size_anim_speed:d.particles.size.anim.speed,move_speed:d.particles.move.speed,line_linked_distance:d.particles.line_linked.distance,line_linked_width:d.particles.line_linked.width,mode_grab_distance:d.interactivity.modes.grab.distance,mode_bubble_distance:d.interactivity.modes.bubble.distance,mode_bubble_size:d.interactivity.modes.bubble.size,mode_repulse_distance:d.interactivity.modes.repulse.distance},d.fn.retinaInit=function(){d.retina_detect&&window.devicePixelRatio>1?(d.canvas.pxratio=window.devicePixelRatio,d.tmp.retina=!0):(d.canvas.pxratio=1,d.tmp.retina=!1),d.canvas.w=d.canvas.el.offsetWidth*d.canvas.pxratio,d.canvas.h=d.canvas.el.offsetHeight*d.canvas.pxratio,d.particles.size.value=d.tmp.obj.size_value*d.canvas.pxratio,d.particles.size.anim.speed=d.tmp.obj.size_anim_speed*d.canvas.pxratio,d.particles.move.speed=d.tmp.obj.move_speed*d.canvas.pxratio,d.particles.line_linked.distance=d.tmp.obj.line_linked_distance*d.canvas.pxratio,d.interactivity.modes.grab.distance=d.tmp.obj.mode_grab_distance*d.canvas.pxratio,d.interactivity.modes.bubble.distance=d.tmp.obj.mode_bubble_distance*d.canvas.pxratio,d.particles.line_linked.width=d.tmp.obj.line_linked_width*d.canvas.pxratio,d.interactivity.modes.bubble.size=d.tmp.obj.mode_bubble_size*d.canvas.pxratio,d.interactivity.modes.repulse.distance=d.tmp.obj.mode_repulse_distance*d.canvas.pxratio},d.fn.canvasInit=function(){d.canvas.ctx=d.canvas.el.getContext("2d")},d.fn.canvasSize=function(){d.canvas.el.width=d.canvas.w,d.canvas.el.height=d.canvas.h,d&&d.interactivity.events.resize&&window.addEventListener("resize",function(){d.canvas.w=d.canvas.el.offsetWidth,d.canvas.h=d.canvas.el.offsetHeight,d.tmp.retina&&(d.canvas.w*=d.canvas.pxratio,d.canvas.h*=d.canvas.pxratio),d.canvas.el.width=d.canvas.w,d.canvas.el.height=d.canvas.h,d.particles.move.enable||(d.fn.particlesEmpty(),d.fn.particlesCreate(),d.fn.particlesDraw(),d.fn.vendors.densityAutoParticles()),d.fn.vendors.densityAutoParticles()})},d.fn.canvasPaint=function(){d.canvas.ctx.fillRect(0,0,d.canvas.w,d.canvas.h)},d.fn.canvasClear=function(){d.canvas.ctx.clearRect(0,0,d.canvas.w,d.canvas.h)},d.fn.particle=function(a,b,c){if(this.radius=(d.particles.size.random?Math.random():1)*d.particles.size.value,d.particles.size.anim.enable&&(this.size_status=!1,this.vs=d.particles.size.anim.speed/100,d.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=c?c.x:Math.random()*d.canvas.w,this.y=c?c.y:Math.random()*d.canvas.h,this.x>d.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>d.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),d.particles.move.bounce&&d.fn.vendors.checkOverlap(this,c),this.color={},"object"==typeof a.value)if(a.value instanceof Array){var e=a.value[Math.floor(Math.random()*d.particles.color.value.length)];this.color.rgb=hexToRgb(e)}else void 0!=a.value.r&&void 0!=a.value.g&&void 0!=a.value.b&&(this.color.rgb={r:a.value.r,g:a.value.g,b:a.value.b}),void 0!=a.value.h&&void 0!=a.value.s&&void 0!=a.value.l&&(this.color.hsl={h:a.value.h,s:a.value.s,l:a.value.l});else"random"==a.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof a.value&&(this.color=a,this.color.rgb=hexToRgb(this.color.value));this.opacity=(d.particles.opacity.random?Math.random():1)*d.particles.opacity.value,d.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=d.particles.opacity.anim.speed/100,d.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var f={};switch(d.particles.move.direction){case"top":f={x:0,y:-1};break;case"top-right":f={x:.5,y:-.5};break;case"right":f={x:1,y:-0};break;case"bottom-right":f={x:.5,y:.5};break;case"bottom":f={x:0,y:1};break;case"bottom-left":f={x:-.5,y:1};break;case"left":f={x:-1,y:0};break;case"top-left":f={x:-.5,y:-.5};break;default:f={x:0,y:0}}d.particles.move.straight?(this.vx=f.x,this.vy=f.y,d.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=f.x+Math.random()-.5,this.vy=f.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var g=d.particles.shape.type;if("object"==typeof g){if(g instanceof Array){var h=g[Math.floor(Math.random()*g.length)];this.shape=h}}else this.shape=g;if("image"==this.shape){var i=d.particles.shape;this.img={src:i.image.src,ratio:i.image.width/i.image.height},this.img.ratio||(this.img.ratio=1),"svg"==d.tmp.img_type&&void 0!=d.tmp.source_svg&&(d.fn.vendors.createSvgImg(this),d.tmp.pushing&&(this.img.loaded=!1))}},d.fn.particle.prototype.draw=function(){function a(){d.canvas.ctx.drawImage(g,b.x-c,b.y-c,2*c,2*c/b.img.ratio)}var b=this;if(void 0!=b.radius_bubble)var c=b.radius_bubble;else var c=b.radius;if(void 0!=b.opacity_bubble)var e=b.opacity_bubble;else var e=b.opacity;if(b.color.rgb)var f="rgba("+b.color.rgb.r+","+b.color.rgb.g+","+b.color.rgb.b+","+e+")";else var f="hsla("+b.color.hsl.h+","+b.color.hsl.s+"%,"+b.color.hsl.l+"%,"+e+")";switch(d.canvas.ctx.fillStyle=f,d.canvas.ctx.beginPath(),b.shape){case"circle":d.canvas.ctx.arc(b.x,b.y,c,0,2*Math.PI,!1);break;case"edge":d.canvas.ctx.rect(b.x-c,b.y-c,2*c,2*c);break;case"triangle":d.fn.vendors.drawShape(d.canvas.ctx,b.x-c,b.y+c/1.66,2*c,3,2);break;case"polygon":d.fn.vendors.drawShape(d.canvas.ctx,b.x-c/(d.particles.shape.polygon.nb_sides/3.5),b.y-c/.76,2.66*c/(d.particles.shape.polygon.nb_sides/3),d.particles.shape.polygon.nb_sides,1);break;case"star":d.fn.vendors.drawShape(d.canvas.ctx,b.x-2*c/(d.particles.shape.polygon.nb_sides/4),b.y-c/1.52,2*c*2.66/(d.particles.shape.polygon.nb_sides/3),d.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==d.tmp.img_type)var g=b.img.obj;else var g=d.tmp.img_obj;g&&a()}d.canvas.ctx.closePath(),d.particles.shape.stroke.width>0&&(d.canvas.ctx.strokeStyle=d.particles.shape.stroke.color,d.canvas.ctx.lineWidth=d.particles.shape.stroke.width,d.canvas.ctx.stroke()),d.canvas.ctx.fill()},d.fn.particlesCreate=function(){for(var a=0;a<d.particles.number.value;a++)d.particles.array.push(new d.fn.particle(d.particles.color,d.particles.opacity.value))},d.fn.particlesUpdate=function(){for(var a=0;a<d.particles.array.length;a++){var b=d.particles.array[a];if(d.particles.move.enable){var c=d.particles.move.speed/2;b.x+=b.vx*c,b.y+=b.vy*c}if(d.particles.opacity.anim.enable&&(1==b.opacity_status?(b.opacity>=d.particles.opacity.value&&(b.opacity_status=!1),b.opacity+=b.vo):(b.opacity<=d.particles.opacity.anim.opacity_min&&(b.opacity_status=!0),b.opacity-=b.vo),b.opacity<0&&(b.opacity=0)),d.particles.size.anim.enable&&(1==b.size_status?(b.radius>=d.particles.size.value&&(b.size_status=!1),b.radius+=b.vs):(b.radius<=d.particles.size.anim.size_min&&(b.size_status=!0),b.radius-=b.vs),b.radius<0&&(b.radius=0)),"bounce"==d.particles.move.out_mode)var e={x_left:b.radius,x_right:d.canvas.w,y_top:b.radius,y_bottom:d.canvas.h};else var e={x_left:-b.radius,x_right:d.canvas.w+b.radius,y_top:-b.radius,y_bottom:d.canvas.h+b.radius};switch(b.x-b.radius>d.canvas.w?(b.x=e.x_left,b.y=Math.random()*d.canvas.h):b.x+b.radius<0&&(b.x=e.x_right,b.y=Math.random()*d.canvas.h),b.y-b.radius>d.canvas.h?(b.y=e.y_top,b.x=Math.random()*d.canvas.w):b.y+b.radius<0&&(b.y=e.y_bottom,b.x=Math.random()*d.canvas.w),d.particles.move.out_mode){case"bounce":b.x+b.radius>d.canvas.w?b.vx=-b.vx:b.x-b.radius<0&&(b.vx=-b.vx),b.y+b.radius>d.canvas.h?b.vy=-b.vy:b.y-b.radius<0&&(b.vy=-b.vy)}if(isInArray("grab",d.interactivity.events.onhover.mode)&&d.fn.modes.grabParticle(b),(isInArray("bubble",d.interactivity.events.onhover.mode)||isInArray("bubble",d.interactivity.events.onclick.mode))&&d.fn.modes.bubbleParticle(b),(isInArray("repulse",d.interactivity.events.onhover.mode)||isInArray("repulse",d.interactivity.events.onclick.mode))&&d.fn.modes.repulseParticle(b),d.particles.line_linked.enable||d.particles.move.attract.enable)for(var f=a+1;f<d.particles.array.length;f++){var g=d.particles.array[f];d.particles.line_linked.enable&&d.fn.interact.linkParticles(b,g),d.particles.move.attract.enable&&d.fn.interact.attractParticles(b,g),d.particles.move.bounce&&d.fn.interact.bounceParticles(b,g)}}},d.fn.particlesDraw=function(){d.canvas.ctx.clearRect(0,0,d.canvas.w,d.canvas.h),d.fn.particlesUpdate();for(var a=0;a<d.particles.array.length;a++){var b=d.particles.array[a];b.draw()}},d.fn.particlesEmpty=function(){d.particles.array=[]},d.fn.particlesRefresh=function(){cancelRequestAnimFrame(d.fn.checkAnimFrame),cancelRequestAnimFrame(d.fn.drawAnimFrame),d.tmp.source_svg=void 0,d.tmp.img_obj=void 0,d.tmp.count_svg=0,d.fn.particlesEmpty(),d.fn.canvasClear(),d.fn.vendors.start()},d.fn.interact.linkParticles=function(a,b){var c=a.x-b.x,e=a.y-b.y,f=Math.sqrt(c*c+e*e);if(f<=d.particles.line_linked.distance){var g=d.particles.line_linked.opacity-f/(1/d.particles.line_linked.opacity)/d.particles.line_linked.distance;if(g>0){var h=d.particles.line_linked.color_rgb_line;d.canvas.ctx.strokeStyle="rgba("+h.r+","+h.g+","+h.b+","+g+")",d.canvas.ctx.lineWidth=d.particles.line_linked.width,d.canvas.ctx.beginPath(),d.canvas.ctx.moveTo(a.x,a.y),d.canvas.ctx.lineTo(b.x,b.y),d.canvas.ctx.stroke(),d.canvas.ctx.closePath()}}},d.fn.interact.attractParticles=function(a,b){var c=a.x-b.x,e=a.y-b.y,f=Math.sqrt(c*c+e*e);if(f<=d.particles.line_linked.distance){var g=c/(1e3*d.particles.move.attract.rotateX),h=e/(1e3*d.particles.move.attract.rotateY);a.vx-=g,a.vy-=h,b.vx+=g,b.vy+=h}},d.fn.interact.bounceParticles=function(a,b){var c=a.x-b.x,d=a.y-b.y,e=Math.sqrt(c*c+d*d),f=a.radius+b.radius;f>=e&&(a.vx=-a.vx,a.vy=-a.vy,b.vx=-b.vx,b.vy=-b.vy)},d.fn.modes.pushParticles=function(a,b){d.tmp.pushing=!0;for(var c=0;a>c;c++)d.particles.array.push(new d.fn.particle(d.particles.color,d.particles.opacity.value,{x:b?b.pos_x:Math.random()*d.canvas.w,y:b?b.pos_y:Math.random()*d.canvas.h})),c==a-1&&(d.particles.move.enable||d.fn.particlesDraw(),d.tmp.pushing=!1)},d.fn.modes.removeParticles=function(a){d.particles.array.splice(0,a),d.particles.move.enable||d.fn.particlesDraw()},d.fn.modes.bubbleParticle=function(a){function b(){a.opacity_bubble=a.opacity,a.radius_bubble=a.radius}function c(b,c,e,f,h){if(b!=c)if(d.tmp.bubble_duration_end){if(void 0!=e){var i=f-l*(f-b)/d.interactivity.modes.bubble.duration,j=b-i;m=b+j,"size"==h&&(a.radius_bubble=m),"opacity"==h&&(a.opacity_bubble=m)}}else if(g<=d.interactivity.modes.bubble.distance){if(void 0!=e)var k=e;else var k=f;if(k!=b){var m=f-l*(f-b)/d.interactivity.modes.bubble.duration;"size"==h&&(a.radius_bubble=m),"opacity"==h&&(a.opacity_bubble=m)}}else"size"==h&&(a.radius_bubble=void 0),"opacity"==h&&(a.opacity_bubble=void 0)}if(d.interactivity.events.onhover.enable&&isInArray("bubble",d.interactivity.events.onhover.mode)){var e=a.x-d.interactivity.mouse.pos_x,f=a.y-d.interactivity.mouse.pos_y,g=Math.sqrt(e*e+f*f),h=1-g/d.interactivity.modes.bubble.distance;if(g<=d.interactivity.modes.bubble.distance){if(h>=0&&"mousemove"==d.interactivity.status){if(d.interactivity.modes.bubble.size!=d.particles.size.value)if(d.interactivity.modes.bubble.size>d.particles.size.value){var i=a.radius+d.interactivity.modes.bubble.size*h;i>=0&&(a.radius_bubble=i)}else{var j=a.radius-d.interactivity.modes.bubble.size,i=a.radius-j*h;i>0?a.radius_bubble=i:a.radius_bubble=0}if(d.interactivity.modes.bubble.opacity!=d.particles.opacity.value)if(d.interactivity.modes.bubble.opacity>d.particles.opacity.value){var k=d.interactivity.modes.bubble.opacity*h;k>a.opacity&&k<=d.interactivity.modes.bubble.opacity&&(a.opacity_bubble=k)}else{var k=a.opacity-(d.particles.opacity.value-d.interactivity.modes.bubble.opacity)*h;k<a.opacity&&k>=d.interactivity.modes.bubble.opacity&&(a.opacity_bubble=k)}}}else b();"mouseleave"==d.interactivity.status&&b()}else if(d.interactivity.events.onclick.enable&&isInArray("bubble",d.interactivity.events.onclick.mode)){if(d.tmp.bubble_clicking){var e=a.x-d.interactivity.mouse.click_pos_x,f=a.y-d.interactivity.mouse.click_pos_y,g=Math.sqrt(e*e+f*f),l=((new Date).getTime()-d.interactivity.mouse.click_time)/1e3;l>d.interactivity.modes.bubble.duration&&(d.tmp.bubble_duration_end=!0),l>2*d.interactivity.modes.bubble.duration&&(d.tmp.bubble_clicking=!1,d.tmp.bubble_duration_end=!1)}d.tmp.bubble_clicking&&(c(d.interactivity.modes.bubble.size,d.particles.size.value,a.radius_bubble,a.radius,"size"),c(d.interactivity.modes.bubble.opacity,d.particles.opacity.value,a.opacity_bubble,a.opacity,"opacity"))}},d.fn.modes.repulseParticle=function(a){function b(){var b=Math.atan2(m,l);if(a.vx=o*Math.cos(b),a.vy=o*Math.sin(b),"bounce"==d.particles.move.out_mode){var c={x:a.x+a.vx,y:a.y+a.vy};c.x+a.radius>d.canvas.w?a.vx=-a.vx:c.x-a.radius<0&&(a.vx=-a.vx),c.y+a.radius>d.canvas.h?a.vy=-a.vy:c.y-a.radius<0&&(a.vy=-a.vy)}}if(d.interactivity.events.onhover.enable&&isInArray("repulse",d.interactivity.events.onhover.mode)&&"mousemove"==d.interactivity.status){var c=a.x-d.interactivity.mouse.pos_x,e=a.y-d.interactivity.mouse.pos_y,f=Math.sqrt(c*c+e*e),g={x:c/f,y:e/f},h=d.interactivity.modes.repulse.distance,i=100,j=clamp(1/h*(-1*Math.pow(f/h,2)+1)*h*i,0,50),k={x:a.x+g.x*j,y:a.y+g.y*j};"bounce"==d.particles.move.out_mode?(k.x-a.radius>0&&k.x+a.radius<d.canvas.w&&(a.x=k.x),k.y-a.radius>0&&k.y+a.radius<d.canvas.h&&(a.y=k.y)):(a.x=k.x,a.y=k.y)}else if(d.interactivity.events.onclick.enable&&isInArray("repulse",d.interactivity.events.onclick.mode))if(d.tmp.repulse_finish||(d.tmp.repulse_count++,d.tmp.repulse_count==d.particles.array.length&&(d.tmp.repulse_finish=!0)),d.tmp.repulse_clicking){var h=Math.pow(d.interactivity.modes.repulse.distance/6,3),l=d.interactivity.mouse.click_pos_x-a.x,m=d.interactivity.mouse.click_pos_y-a.y,n=l*l+m*m,o=-h/n*1;h>=n&&b()}else 0==d.tmp.repulse_clicking&&(a.vx=a.vx_i,a.vy=a.vy_i)},d.fn.modes.grabParticle=function(a){if(d.interactivity.events.onhover.enable&&"mousemove"==d.interactivity.status){var b=a.x-d.interactivity.mouse.pos_x,c=a.y-d.interactivity.mouse.pos_y,e=Math.sqrt(b*b+c*c);if(e<=d.interactivity.modes.grab.distance){var f=d.interactivity.modes.grab.line_linked.opacity-e/(1/d.interactivity.modes.grab.line_linked.opacity)/d.interactivity.modes.grab.distance;if(f>0){var g=d.particles.line_linked.color_rgb_line;d.canvas.ctx.strokeStyle="rgba("+g.r+","+g.g+","+g.b+","+f+")",d.canvas.ctx.lineWidth=d.particles.line_linked.width,d.canvas.ctx.beginPath(),d.canvas.ctx.moveTo(a.x,a.y),d.canvas.ctx.lineTo(d.interactivity.mouse.pos_x,d.interactivity.mouse.pos_y),d.canvas.ctx.stroke(),d.canvas.ctx.closePath()}}}},d.fn.vendors.eventsListeners=function(){"window"==d.interactivity.detect_on?d.interactivity.el=window:d.interactivity.el=d.canvas.el,(d.interactivity.events.onhover.enable||d.interactivity.events.onclick.enable)&&(d.interactivity.el.addEventListener("mousemove",function(a){if(d.interactivity.el==window)var b=a.clientX,c=a.clientY;else var b=a.offsetX||a.clientX,c=a.offsetY||a.clientY;d.interactivity.mouse.pos_x=b,d.interactivity.mouse.pos_y=c,d.tmp.retina&&(d.interactivity.mouse.pos_x*=d.canvas.pxratio,d.interactivity.mouse.pos_y*=d.canvas.pxratio),d.interactivity.status="mousemove"}),d.interactivity.el.addEventListener("mouseleave",function(a){d.interactivity.mouse.pos_x=null,d.interactivity.mouse.pos_y=null,d.interactivity.status="mouseleave"})),d.interactivity.events.onclick.enable&&d.interactivity.el.addEventListener("click",function(){if(d.interactivity.mouse.click_pos_x=d.interactivity.mouse.pos_x,d.interactivity.mouse.click_pos_y=d.interactivity.mouse.pos_y,d.interactivity.mouse.click_time=(new Date).getTime(),d.interactivity.events.onclick.enable)switch(d.interactivity.events.onclick.mode){case"push":d.particles.move.enable?d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb,d.interactivity.mouse):1==d.interactivity.modes.push.particles_nb?d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb,d.interactivity.mouse):d.interactivity.modes.push.particles_nb>1&&d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb);break;case"remove":d.fn.modes.removeParticles(d.interactivity.modes.remove.particles_nb);break;case"bubble":d.tmp.bubble_clicking=!0;break;case"repulse":d.tmp.repulse_clicking=!0,d.tmp.repulse_count=0,d.tmp.repulse_finish=!1,setTimeout(function(){d.tmp.repulse_clicking=!1},1e3*d.interactivity.modes.repulse.duration)}})},d.fn.vendors.densityAutoParticles=function(){if(d.particles.number.density.enable){var a=d.canvas.el.width*d.canvas.el.height/1e3;d.tmp.retina&&(a/=2*d.canvas.pxratio);var b=a*d.particles.number.value/d.particles.number.density.value_area,c=d.particles.array.length-b;0>c?d.fn.modes.pushParticles(Math.abs(c)):d.fn.modes.removeParticles(c)}},d.fn.vendors.checkOverlap=function(a,b){for(var c=0;c<d.particles.array.length;c++){var e=d.particles.array[c],f=a.x-e.x,g=a.y-e.y,h=Math.sqrt(f*f+g*g);h<=a.radius+e.radius&&(a.x=b?b.x:Math.random()*d.canvas.w,a.y=b?b.y:Math.random()*d.canvas.h,d.fn.vendors.checkOverlap(a))}},d.fn.vendors.createSvgImg=function(a){var b=d.tmp.source_svg,c=/#([0-9A-F]{3,6})/gi,e=b.replace(c,function(b,c,d,e){if(a.color.rgb)var f="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+a.opacity+")";else var f="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+a.opacity+")";return f}),f=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),g=window.URL||window.webkitURL||window,h=g.createObjectURL(f),i=new Image;i.addEventListener("load",function(){a.img.obj=i,a.img.loaded=!0,g.revokeObjectURL(h),d.tmp.count_svg++}),i.src=h},d.fn.vendors.destroypJS=function(){cancelAnimationFrame(d.fn.drawAnimFrame),c.remove(),pJSDom=null},d.fn.vendors.drawShape=function(a,b,c,d,e,f){var g=e*f,h=e/f,i=180*(h-2)/h,j=Math.PI-Math.PI*i/180;a.save(),a.beginPath(),a.translate(b,c),a.moveTo(0,0);for(var k=0;g>k;k++)a.lineTo(d,0),a.translate(d,0),a.rotate(j);a.fill(),a.restore()},d.fn.vendors.exportImg=function(){window.open(d.canvas.el.toDataURL("image/png"),"_blank")},d.fn.vendors.loadImg=function(a){if(d.tmp.img_error=void 0,""!=d.particles.shape.image.src)if("svg"==a){var b=new XMLHttpRequest;b.open("GET",d.particles.shape.image.src),b.onreadystatechange=function(a){4==b.readyState&&(200==b.status?(d.tmp.source_svg=a.currentTarget.response,d.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),d.tmp.img_error=!0))},b.send()}else{var c=new Image;c.addEventListener("load",function(){d.tmp.img_obj=c,d.fn.vendors.checkBeforeDraw()}),c.src=d.particles.shape.image.src}else console.log("Error pJS - No image.src"),d.tmp.img_error=!0},d.fn.vendors.draw=function(){"image"==d.particles.shape.type?"svg"==d.tmp.img_type?d.tmp.count_svg>=d.particles.number.value?(d.fn.particlesDraw(),d.particles.move.enable?d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw):cancelRequestAnimFrame(d.fn.drawAnimFrame)):d.tmp.img_error||(d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw)):void 0!=d.tmp.img_obj?(d.fn.particlesDraw(),d.particles.move.enable?d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw):cancelRequestAnimFrame(d.fn.drawAnimFrame)):d.tmp.img_error||(d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw)):(d.fn.particlesDraw(),d.particles.move.enable?d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw):cancelRequestAnimFrame(d.fn.drawAnimFrame))},d.fn.vendors.checkBeforeDraw=function(){"image"==d.particles.shape.type?"svg"==d.tmp.img_type&&void 0==d.tmp.source_svg?d.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(d.tmp.checkAnimFrame),d.tmp.img_error||(d.fn.vendors.init(),d.fn.vendors.draw())):(d.fn.vendors.init(),d.fn.vendors.draw())},d.fn.vendors.init=function(){d.fn.retinaInit(),d.fn.canvasInit(),d.fn.canvasSize(),d.fn.canvasPaint(),d.fn.particlesCreate(),d.fn.vendors.densityAutoParticles(),d.particles.line_linked.color_rgb_line=hexToRgb(d.particles.line_linked.color)},d.fn.vendors.start=function(){isInArray("image",d.particles.shape.type)?(d.tmp.img_type=d.particles.shape.image.src.substr(d.particles.shape.image.src.length-3),d.fn.vendors.loadImg(d.tmp.img_type)):d.fn.vendors.checkBeforeDraw()},d.fn.vendors.eventsListeners(),d.fn.vendors.start()};Object.deepExtend=function(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},arguments.callee(a[c],b[c])):a[c]=b[c];return a},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(a,b){"string"!=typeof a&&(b=a,a="particles-js"),a||(a="particles-js");var c=document.getElementById(a),d="particles-js-canvas-el",e=c.getElementsByClassName(d);if(e.length)for(;e.length>0;)c.removeChild(e[0]);var f=document.createElement("canvas");f.className=d,f.style.width="100%",f.style.height="100%";var g=document.getElementById(a).appendChild(f);null!=g&&pJSDom.push(new pJS(a,b))},window.particlesJS.load=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",b),d.onreadystatechange=function(b){if(4==d.readyState)if(200==d.status){var e=JSON.parse(b.currentTarget.response);window.particlesJS(a,e),c&&c()}else console.log("Error pJS - XMLHttpRequest status: "+d.status),console.log("Error pJS - File config not found")},d.send()};

/**
 * Splits new lines of text into separate divs
 *
 * ### Options:
 * - `width` string The width of the box. By default, it tries to use the
 *	 element's width. If you don't define a width, there's no way to split it
 *	 by lines!
 *	- `tag` string The tag to wrap the lines in
 *	- `keepHtml` boolean Whether or not to try and preserve the html within
 *	 the element. Default is true
 *
 *	@param options object The options object
 *	@license MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
(function($){

/**
 * Creates a temporary clone
 *
 * @param element element The element to clone
 */
	function _createTemp(element) {
		return element.clone().css({position: 'absolute'});
	};

/**
 * Splits contents into words, keeping their original Html tag. Note that this
 * tags *each* word with the tag it was found in, so when the wrapping begins
 * the tags stay intact. This may have an effect on your styles (say, if you have
 * margin, each word will inherit those styles).
 *
 * @param node contents The contents
 */
	function _splitHtmlWords(contents) {
		var words = [];
		var splitContent;
		for (var c=0; c<contents.length; c++) {
			if (contents[c].nodeName === 'BR') {
				words.push('<br>');
				continue;
			}
			if (contents[c].nodeType == 3) {
				splitContent = _splitWords(contents[c].textContent || contents[c].toString());
			} else {
				var tag = $(contents[c]).clone();
				splitContent = _splitHtmlWords(tag.contents());
				for (var t=0; t<splitContent.length; t++) {
					tag.empty();
					splitContent[t] = tag.html(splitContent[t]).wrap('<p></p>').parent().html();
				}
			}
			for (var w=0; w<splitContent.length; w++) {
				if (splitContent[w] === '') {
					continue;
				}
				words.push(splitContent[w]);
			}
		}
		return words;
	};

/**
 * Splits words by spaces
 *
 * @param string text The text to split
 */
	function _splitWords(text) {
		return text.split(/\s+/);
	}

/**
 * Formats html with tags and wrappers.
 *
 * @param tag
 * @param html content wrapped by the tag
 */
	function _markupContent(tag, html) {
		// wrap in a temp div so .html() gives us the tags we specify
		tag = '<div>' + tag;
		// find the deepest child, add html, then find the parent
		return $(tag)
			.find('*:not(:has("*"))')
			.html(html)
			.parentsUntil()
			.slice(-1)
			.html();
	}

/**
 * The jQuery plugin function. See the top of this file for information on the
 * options
 */
	$.fn.splitLines = function(options) {
		var settings = {
			width: 'auto',
			tag: '<div>',
			wrap: '',
			keepHtml: true
		};
		if (options) {
			$.extend(settings, options);
		}
		var newHtml = _createTemp(this);
		var contents = this.contents();
		var text = this.text();
		this.append(newHtml);
		newHtml.text('42');
		var maxHeight = newHtml.height()+2;
		newHtml.empty();

		var tempLine = _createTemp(newHtml);
		var width = settings.width;
		if (settings.width === 'auto') {
			width = this[0].offsetWidth;
		}
		tempLine.width(width);
		this.append(tempLine);
		var words = settings.keepHtml ? _splitHtmlWords(contents) : _splitWords(text);
		var prev;
		for (var w=0; w<words.length; w++) {
			var html = tempLine.html();
			tempLine.html(html+words[w]+' ');
			if (tempLine.html() == prev) {
				// repeating word, it will never fit so just use it instead of failing
				prev = '';
				newHtml.append(_markupContent(settings.tag, tempLine.html()));
				tempLine.html('');
				continue;
			}
			if (tempLine.height() > maxHeight) {
				prev = tempLine.html();
				tempLine.html(html);
				newHtml.append(_markupContent(settings.tag, tempLine.html()));
				tempLine.html('');
				w--;
			}
		}
		newHtml.append(_markupContent(settings.tag, tempLine.html()));

		this.html(newHtml.html());

	};
})(jQuery);



	////////////////////////
	///// SETUP VIDEOS /////
	////////////////////////
	function setupVideos() {

		$("body").stop().queue(function(next){

			// SETUP SRC
			$("section video source").each(function() {
				if ( !$(this).parent().hasClass("playing") ) {

					if ( !$(this).closest("section").hasClass("video") ) {
						
						var src = $(this).attr("data-src");
						$(this).attr("src", src);
						$(this).removeAttr("data-src");
						$(this).closest("video-container").find("loading-spinner").remove();

					} else {

						if ( viewport_width > 800 ) {

							var src = $(this).attr("data-src");
							$(this).attr("src", src);
							$(this).removeAttr("data-src");
							$(this).closest("video-container").find("loading-spinner").remove();

						}

					}

				}

			});

			// PLAY VIDEO
			$("section video:not(.playing)").each(function() {
				$(this).load();
				$(this).addClass("playing");
			});
			
		next(); }).queue(function(next){

			////////////////////
			// HOMEPAGE VIDEO //
			////////////////////
			if ( $(".home.video").length > 0 ) {
				
				$(".home.video").delay(900).queue(function(next){

					// CHECK IF THE VIDEO IS PLAYING
					var video = $(".initial video").get(0);
				
					// REMOVE THE FALLBACK IMAGE IF NOT PLAYING
					if ( !video.paused ) { $(".home.video .fallback-cover").remove(); } 

				next(); }).delay(100).queue(function(next){

					// CHECK IF THE VIDEO IS PLAYING
					var video = $(".initial video").get(0);
				
					// REMOVE THE FALLBACK IMAGE IF NOT PLAYING
					if ( video.paused ) { $(".home.video").addClass("cant-play"); }

				next(); });

			}

		next(); });

	}


	////////////////////
	// FACEBOOK SHARE //
	////////////////////
	window.fbAsyncInit = function() {
		FB.init({
			appId            : '109629631462',
			autoLogAppEvents : true,
			xfbml            : true,
			version          : 'v3.2'
		});
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


	/////////////////////////////////////
	// DETECTING PAGE SCROLL DIRECTION //
	/////////////////////////////////////
	var last_scroll = 0;
	var last_scroll_direction = "up";

	function detectScroll() {

		if ( !$("body").hasClass("mobile-nav-open") ) {

			// SCALE HEADER IF SCROLLED DOWN > 100px
			if ( current_scroll > 100 )
				{ $("body").addClass("scale_header"); } else
				{ $("body").removeClass("scale_header"); }

			if ( current_scroll >= 72 ) {

				// SCROLL DOWN
				if ( current_scroll > last_scroll) {
					last_scroll = current_scroll;
					last_scroll_direction = "down";
					if ( !$("body").hasClass("scroll_down") ) {
						$("body").addClass("scroll_down");
					}
				}

				// SCROLL UP
				else {

					var difference = Math.abs(current_scroll - last_scroll);

					if ( difference > 72 ) {
						last_scroll = current_scroll;
						last_scroll_direction = "up";
						if ( $("body").hasClass("scroll_down") ) {
							$("body").removeClass("scroll_down");
						}

					}
		
				}

			} else {

				if ( $("body").hasClass("scroll_down") ) {
					$("body").removeClass("scroll_down");
				}

			}

		} else {

			if ( $("body").hasClass("scroll_down") ) {
				$("body").removeClass("scroll_down");
			}

			if ( $("body").hasClass("scale_header") ) {
				$("body").removeClass("scale_header");
			}

		}

	}


	/////////////////
	// TOGGLE MENU //
	/////////////////
	$("body").on("click", "nav-trigger, sticky-header .hamburger-icon", function() {
		$("body").toggleClass("menu_open");

		// LOAD ASSETS
		$("pulldown-nav nav-inner > figure").each(function(){
			$(this).css("background-image", "url('" + $(this).attr("data-src") + "')");
		});

	});


	///////////////////////////
	// MADE IN WHALES TOGGLE //
	///////////////////////////
	$("body").on("click", "a.wales", function(e) {
		e.preventDefault();
		if ( viewport_width <= 468 ) {
			$(this).toggleClass("itsnotwhalesyoumuppet");
		}
	});

	//////////////////////////
	// MADE IN WHALES TOGGLE //
	///////////////////////////
	$("body").on("click", "li.made-in-wales a", function(e) {
		e.preventDefault();
		if ( viewport_width <= 468 ) {
			$(this).toggleClass("itsnotwhalesyoumuppet");
		}
	});

	///////////////////////
	// TOGGLE NIGHT MODE //
	///////////////////////
	$("body").on("click", "switch-ui[data-action=\"night-mode\"]", function(e) {

		// IF NOT APPLIED
		if ( !$("body").hasClass("night") ) {

			$("body").stop().queue(function(next){

				$("body").addClass("transition");
				next();

			}).delay(50).queue(function(next){

				$("switch-ui[data-action=\"night-mode\"] input").prop('checked', true);
				$("body").addClass("night");
				next();

			}).delay(1600).queue(function(next){

				$("body").removeClass("transition");
				next();

			});

		} else {

			$("body").stop().queue(function(next){

				$("body").addClass("transition");
				next();

			}).delay(50).queue(function(next){

				$("switch-ui[data-action=\"night-mode\"] input").prop('checked', false);
				$("body").removeClass("night");
				next();

			}).delay(1600).queue(function(next){

				$("body").removeClass("transition");
				next();

			});

		}

		$("#night_mode").submit();

	});

	// SET NIGHTMODE ON LOAD
	if ( $("body").hasClass("night") ) {
		$("body").addClass("night");
		$("switch-ui[data-action=\"night-mode\"] input").prop('checked', true);
	}


	///////////////////////////
	///// HEADER FUNCTION /////
	///////////////////////////
	function header() {

		/////////////////
		// SHARED VARS //
		/////////////////
		var social_width = 0;
		var social_margin = 0;


		///////////
		// RESET //
		///////////
		$("sticky-header").css("left", "");
		$("header-top nav").css("margin-right", "");
		$("body").removeClass("disable-nav");
		$("pulldown-nav switch-ui").css("right", "");


		////////////////////////////
		// STICKY HEADER POSITION //
		////////////////////////////
		
		// GET
		if ( viewport_width <= 468 ) {
			var sticky_header_width = 123;
			var min_offset = 20;
			var padding = 20;
		} else {
			var sticky_header_width = 100;
			var min_offset = 48;
			var padding = 10;
		}

		// CALC
		var measure = $("pulldown-nav g-container");
		var logo_offset = measure.offset().left;
		if ( logo_offset < min_offset ) { logo_offset = min_offset; }

		// SET
		$("sticky-header").css("left", logo_offset);
		$("pulldown-nav nav-inner > a.wales").css("left", logo_offset);


		////////////////////////////////////////
		// MOVE PULLDOWN SOCIAL INTO THE MENU //
		////////////////////////////////////////
		if ( $("pulldown-nav nav + ul.social").length > 0 ) {

			$("pulldown-nav nav + ul.social").appendTo("pulldown-nav nav");

		}


		////////////////////////////
		// PULLDOWN NAV POSITIONS //
		////////////////////////////
		// var miw_offset = measure.offset().left + padding;
		// $("pulldown-nav nav-inner > a").css("left", miw_offset);

		var nightmode_offset = (( viewport_width - measure.outerWidth() ) / 2 ) + padding;
		if ( nightmode_offset < min_offset ) { nightmode_offset = min_offset; }
		$("pulldown-nav switch-ui").css("right", nightmode_offset);
		$("pulldown-nav a.hiring").css("right", nightmode_offset);


		/////////////////////////////
		// SOCIAL MEDIA NAV OFFSET //
		/////////////////////////////
		if ( $("header-top ul.social").length > 0 ) {

			// GET
			social_width = parseInt($("header-top ul.social").outerWidth());
			social_margin = parseInt($("header-top > nav > ul > li:last-of-type").css("margin-left")) + 3;

			// CALC
			var margin = social_width + social_margin;

			// SET
			$("header-top nav").css("margin-right", margin);

		}

		/////////////////////////////////////////
		// HIDE THE NAV IF WE DON'T HAVE SPACE //
		/////////////////////////////////////////
		
		// GET
		var logo_width = 60; // HARD CODED B/C IT CAN CHANGE
		var nav_width = parseInt($("header-top > nav > ul").outerWidth());

		if ( $("footer g-container").length > 0 ) { var grid_margin = parseInt($("footer g-container").css("padding-left")); } else
		if ( $(".error-404 g-container").length > 0 ) { var grid_margin = parseInt($(".error-404 g-container").css("padding-left")); }

		// CALC...
		if ( viewport_width <= ( nav_width + logo_width + social_width + (social_margin * 2) + (grid_margin * 2) + (padding * 6) ) ) {

			// SET
			if ( !$("body").hasClass("disable-nav") ) {
				$("body").addClass("disable-nav");
			}

		}

		///////////////////////////////////////////////////
		// SWITCH BETWEEN BROWSER AND APP FACEBOOK LINKS //
		///////////////////////////////////////////////////
		
		// GET
		if ( viewport_width <= 468 ) {

			var link = $(".social a.facebook").attr("data-fb");
			


			if ( /iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				$(".social a.facebook").attr("href", "fb://profile/" + link);
			} else {
				$(".social a.facebook").attr("href", "fb://page/" + link);
			}

		} else {

			var link = $(".social a.facebook").attr("data-href");
			$(".social a.facebook").attr("href", link);

		}
			

	}


	///////////////////////////
	///// FOOTER FUNCTION /////
	///////////////////////////
	function footer() {

		//////////////////////////////////////////////
		// ADD THE MADE IN WALES TO THE FOOTER MENU //
		//////////////////////////////////////////////
		if ( $("footer #end li.made-in-wales").length == 0 ) {

			// THE IMAGE
			var image = $("pulldown-nav a.wales figure").attr("style");

			// THE HTML
			var html = "<li class=\"made-in-wales\"><a>Made in Whales <span>🏴󠁧󠁢󠁷󠁬󠁳󠁿</span><figure style=\"" + image + "\"></figure></a></li>";

			// APPEND
			$("footer #end").append(html);

		}


		///////////////////////////////////////////////////////
		// ANIMATE THE FOOTER IF NEAR THE BOTTOM OF THE PAGE //
		///////////////////////////////////////////////////////
		if ( current_scroll >= ( page_height - (viewport_height + ( $("footer").outerHeight() * 1.25 ) ) ) ) {
		
			if ( !$("body").hasClass("near-bottom") ) {
				$("body").addClass("near-bottom");
				$("body").addClass("show-footer");
			}

			if ( !$("body").hasClass("show-menu") ) {
				$("body").addClass("show-menu");
			}
		
		} else {

			if ( $("body").hasClass("show-menu") ) {
				$("body").removeClass("show-menu");
			}

			if ( viewport_width > 1024 ) {
			
				if ( $("body").hasClass("near-bottom") ) {
					$("body").removeClass("near-bottom");
				}

			}
		
		}

	}

	///////////////////////////////////////////
	// STACK THE MENU IF WE DON'T HAVE SPACE //
	///////////////////////////////////////////
	function footerMenu() {

		// RESET
		$("footer").removeClass("stacked-menu");

		// PADDING
		var padding = 20;
		if ( viewport_width <= 468 ) { padding = 10; }
		
		// GET
		var copyright_width = parseInt($("footer .bottom g-col > span").outerWidth());
		var nav_width = parseInt($("footer .bottom g-col ul").outerWidth());
		var grid_margin = parseInt($("footer g-container").css("padding-left"));

		// CALC...
		if ( viewport_width <= ( copyright_width + nav_width + (grid_margin * 2) + (padding * 3) + 150 ) ) {

			// SET
			$("footer").addClass("stacked-menu");

		}

	}

	//////////////////////////////////////
	///// FOOTER ANIMATION FUNCTIONS /////
	//////////////////////////////////////

	var mountains_time = 80000;
	var hills_time = 65000;
	var trees_time = 50000;
	var elm_width = 3000;

	if ( viewport_width < 768 ) {
		mountains_time = 40000;
		hills_time = 30000;
		trees_time = 20000;
		elm_width = 2000;
	}

	var mountains = "";
	var hills = "";
	var trees = "";

	function footerAnimation() {

		var distanceFromBottom = page_height - ( current_scroll + viewport_height );

		if ( distanceFromBottom < 1000 ) {

			if ( !$("body").hasClass("footer_anim") ) {

				$("body").addClass("footer_anim");

				// FIRST RUN
				animateFooter("animation-rear svg", mountains_time, elm_width);
				animateFooter("animation-front svg", hills_time, elm_width);
				animateFooter("animation-trees svg", trees_time, elm_width);

				// LOOP
				mountains = setInterval(function(){ animateFooter("animation-rear svg", mountains_time, elm_width); }, mountains_time);
				hills = setInterval(function(){ animateFooter("animation-front svg", hills_time, elm_width); }, hills_time);
				trees = setInterval(function(){ animateFooter("animation-trees svg", trees_time, elm_width); }, trees_time);

			}

		} else {

			if ( $("body").hasClass("footer_anim") ) {

				$("body").removeClass("footer_anim");

				// LOOP
				clearInterval(mountains);
				clearInterval(hills);
				clearInterval(trees);

				$("animation-instance svg").stop().removeAttr("style");

			}

		}

	}

	// ANIMATION FUNCTION
	function animateFooter(elm, speed, width) {

		if ( $(elm).length > 0 ) {

			// ANIMATE
			$(elm).animate({ transform: width }, {
				step: function(step) {
					$(this).css('-moz-transform','translate3d(-' + step + 'px,0,0)');
					$(this).css('-webkit-transform','translate3d(-' + step + 'px,0,0)');
					$(this).css('-o-transform','translate3d(-' + step + 'px,0,0)');
					$(this).css('transform','translate3d(-' + step + 'px,0,0)');
				},
				duration: speed,
				easing: "linear"
			});

		}

	}

	// SEB
	var frame = 1;
	function seb() {

		var path = $("our-seb").attr("data-path");

		setInterval(function(){

			frame++

			if ( frame > 24 ) { frame = 1; }

			var width = $("our-seb figure").outerWidth();
			var offset = width * frame;

			$("our-seb figure").css("background-position", -Math.abs(offset));

		}, 50);

	}

	// POSITION SEB
	function positionSeb() {
	
		// GET
		if ( viewport_width <= 468 ) {
			var min_offset = 10;
			var padding = 10;
		} else {
			var min_offset = 38;
			var padding = 30;
		}

		// CALC
		var measure = $("pulldown-nav g-container");
		var seb_offset = measure.offset().left + padding;
		if ( seb_offset < min_offset ) { seb_offset = min_offset; }

		// SET
		$("our-seb").css("left", seb_offset);

	}

	// FOOTER PARALLAX
	function footerParallax() {

		if ( viewport_width > 1024 ) {

			// ONLY RUN IF NOT IE
			if ( isNaN(ieVersion) ) {

				var distanceFromBottom = page_height - ( current_scroll + viewport_height );
		 
		 		// IF APPROACHING THE BOTTOM
				if ( distanceFromBottom <= ( viewport_height * 1.5 ) ) {

					// CALC
					var trees_parallax = ( distanceFromBottom / 21 );
					var hills_parallax = ( distanceFromBottom / 14 );
					var mountains_parallax = ( distanceFromBottom / 7 );

					// SET
					$("the-moon").css("transform", "translate3d(0,-" + hills_parallax + "px,0)");
					$("animation-rear").css("transform", "translate3d(0,-" + mountains_parallax + "px,0)");
					$("animation-front").css("transform", "translate3d(0,-" + hills_parallax + "px,0)");
					$("animation-trees").css("transform", "translate3d(0,-" + trees_parallax + "px,0)");

				}

			}

		} else {

			// SET
			$("the-moon").css("transform", "");
			$("animation-rear").css("transform", "");
			$("animation-front").css("transform", "");
			$("animation-trees").css("transform", "");

		}

	}


	/////////////////////////////
	// REVEAL ELEMENTS ON LOAD //
	/////////////////////////////
	function reveal() {

		$("body").delay(10).queue(function(next){

			// REMOVE NO TRANSITION CLASS
			$("body").removeClass("notrans");

			// CHECK IF THE FIRST ITEM HAS A DARK BACKGROUND
			if ( $("page-content section:first-of-type").hasClass("dark") ) { $("body").addClass("dark"); }
			if ( $("page-content section:first-of-type").hasClass("night-light") ) { $("body").addClass("night-light"); }

			runOnReveal();

			// NEXT
			next();

		}).delay(140).queue(function(next){

			// ADD CLASS
			$("body").addClass("loaded");

			// NEXT
			next();

		});

	}


	///////////////////////////////////////////////
	// CALCULATE THE LINE HEIGHT OF A PAGE TITLE //
	///////////////////////////////////////////////
	function pageHeadings() {

		$("section.page-heading").each(function(){

			// UNWRAP
			$(this).find("h1 span").contents().unwrap();

			// RE-WRAP
			$(this).find("h1").splitLines({
				tag: '<span>',
				keepHtml: false
			});

		});

	}




	/////////////////////////////////////
	///// OTHER POSTS ITEM PARALLAX /////
	/////////////////////////////////////
	function otherPostsItemParallax() {

		if ( viewport_width > 1024 ) {

			if ( $("section.other-posts .items a").length > 0 ) {

				$("section.other-posts .items a").each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();

					// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
					if ( 
						offset >= ( -Math.abs(height) ) && 		// IS NOT TOO FAR ABOVE
						offset <= ( viewport_height + height )  // OR TOO FAR BELOW
					) {

						// REVEAL IF NOT ALREADY VISIBLE
						if ( !$(this).hasClass("in-viewport") ) {
							$(this).addClass("in-viewport");
						}

						// ONLY RUN IF NOT IE
						if ( isNaN(ieVersion) && csVersion !== "safari" ) {

							// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
							var element_midpoint = offset + ( height / 2 );
							var diff = viewport_midpoint - element_midpoint;
							
							// CREATE THE PARALLAX OFFSET VALUES
							var image_1_parallax = Math.round(30 * ( diff / 450 ));

							// SET THE PARALLAX
							$(this).find("figure").css("transform", "translate3d(0," + image_1_parallax + "px,0)");

						}

					} else {

						if ( viewport_width > 1024 ) {

							// OTHERWISE HIDE THE ELEMENT
							$(this).removeAttr("class");

						}

					}


				});

			}

		} else {

			// VIEW ALL
			if ( $("section.other-posts .items a").hasClass("in-viewport") ) {
				$("section.other-posts .items a").addClass("in-viewport");
				$("section.other-posts .items a figure").css("transform", "");
			}

		}

	}


	////////////////
	// SLIDESHOWS //
	////////////////
	function enableSlideshows() {

		///////////////////////////
		// HOMEPAGE LANDING AREA //
		///////////////////////////
		if ( $('.home.landing-area').length > 0 ) {

			var autoplay_speed = 9000;
			var change_speed = 600;


			///////////////
			/// ON INIT ///
			///////////////
			$('.home.landing-area .slideshow-container').on('init', function(event, slick, currentSlide, nextSlide){

				if ( slick.slideCount > 1 ) {

					// TOTAL SLIDES
					var total_slides = slick.slideCount;
					if ( total_slides <= 9 ) { total_slides = "0" + total_slides; }

					// BUILD HTML
					var count = 1;
					var html  = "";
					while ( count <= total_slides ) {
						html += "<span>";
						if ( count <= 9 ) { html += "0"; }
						html += count + "</span>";
						count++;
					}
					
					// SETUP THE UI
					$('.home.landing-area').find("slide-progress slide-numbers").html(html);
					$('.home.landing-area').find("slide-progress slide-numbers span:first-child").css("margin-top", "0");
					$('.home.landing-area').find("slide-progress bar-fill").css("width", "0%");
					$('.home.landing-area').find("slide-progress total-slides").text(total_slides);

					$('.home.landing-area').find("slide-progress bar-fill").animate({
						width: "100%"
					}, autoplay_speed);

					// UPDATE THE PAGE HEIGHT
					page_height = $("page-innercontent").outerHeight();

				}

			});


			/////////////
			/// SETUP ///
			/////////////
			$('.home.landing-area .slideshow-container').slick({
				slide: '.slide',
				dots: false,
				arrows: true,
				fade: true,
				infinite: true,
				speed: change_speed,
				autoplay: true,
				autoplaySpeed: autoplay_speed,
				pauseOnFocus: false,
				pauseOnHover: false,
				pauseOnDotsHover: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: "<a class=\"btn arrow prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M77.6,1.1C78.3,0.4,79.3,0,80.3,0c1,0,2,0.4,2.7,1.1c1.5,1.5,1.5,4,0,5.5L35.1,55L83,103.4c1.5,1.5,1.5,4,0,5.5 s-3.9,1.5-5.4,0L27,57.7c-1.5-1.5-1.5-4,0-5.5L77.6,1.1z\"/></svg></a>",
				nextArrow: "<a class=\"btn arrow next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M32.4,108.9c-0.8,0.8-1.7,1.1-2.7,1.1c-1,0-2-0.4-2.7-1.1c-1.5-1.5-1.5-4,0-5.5L74.9,55L27,6.6c-1.5-1.5-1.5-4,0-5.5 s3.9-1.5,5.4,0L83,52.3c1.5,1.5,1.5,4,0,5.5L32.4,108.9z\"/></svg></a>",
				appendArrows: $('.home.landing-area nav-arrows')
			});


			/////////////////
			/// ON CHANGE ///
			/////////////////
			$('.home.landing-area .slideshow-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){

				if ( slick.slideCount > 1 ) {

					// TOTAL SLIDES
					var total_slides = slick.slideCount;

					// BUILD HTML
					var count = parseInt(nextSlide) + 1;

					// WORK OUT THE VERTICAL POSITION
					var vertical = -Math.abs(2) * (count - 1);

					// UPDATE THE UI
					$('.home.landing-area').find("slide-progress slide-numbers span:first-child").css("margin-top", vertical + "rem");

					// RESET THE PROGRESS BAR
					$("body").queue(function(next){

						$('.home.landing-area').find("slide-progress bar-fill").stop().css({
							"left": "auto",
							"right": 0
						}).animate({
							width: "0%"
						}, change_speed);
						next();

					}).delay(change_speed).queue(function(next){

						$('.home.landing-area').find("slide-progress bar-fill").css({
							"left": 0,
							"right": "auto"
						}).animate({
							width: "100%"
						}, autoplay_speed);
						next();

					});

				}


			});

		}


		/////////////////////////////
		// GALLERY WITH LEFT QUOTE //
		/////////////////////////////
		if ( $('section.gallery-quote').length > 0 ) {

			// FOR EACH
			$('section.gallery-quote').each(function(){

				var elm = $(this);

				///////////////
				/// ON INIT ///
				///////////////
				elm.find(".image").on('init', function(event, slick, currentSlide, nextSlide){

					// TOTAL SLIDES
					var total_slides = slick.slideCount;
					if ( total_slides <= 9 ) { total_slides = "0" + total_slides; }

					// BUILD HTML
					var count = 1;
					var html  = "";
					while ( count <= total_slides ) {
						html += "<span>";
						if ( count <= 9 ) { html += "0"; }
						html += count + "</span>";
						count++;
					}

					// WORK OUT THE WIDTH
					var width = 100 / total_slides;

					// ADD A CLASS
					elm.addClass("has-" + slick.slideCount);

					// SETUP THE UI
					elm.find("slide-progress slide-numbers").html(html);
					elm.find("slide-progress slide-numbers span:first-child").css("margin-top", "0");
					elm.find("slide-progress bar-fill").css("width", width + "%");
					elm.find("slide-progress total-slides").text(total_slides);

					// UPDATE THE PAGE HEIGHT
					page_height = $("page-innercontent").outerHeight();

				});


				/////////////
				/// SETUP ///
				/////////////
				elm.find(".image").slick({
					slide: '.slide',
					dots: false,
					arrows: true,
					infinite: true,
					speed: 800,
					fade: false,
					autoplay: false,
					autoplaySpeed: 5000,
					slidesToShow: 1,
					asNavFor: elm.find("div.quote"),
					slidesToScroll: 1,
					prevArrow: "<a class=\"btn arrow prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M77.6,1.1C78.3,0.4,79.3,0,80.3,0c1,0,2,0.4,2.7,1.1c1.5,1.5,1.5,4,0,5.5L35.1,55L83,103.4c1.5,1.5,1.5,4,0,5.5 s-3.9,1.5-5.4,0L27,57.7c-1.5-1.5-1.5-4,0-5.5L77.6,1.1z\"/></svg></a>",
					nextArrow: "<a class=\"btn arrow next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M32.4,108.9c-0.8,0.8-1.7,1.1-2.7,1.1c-1,0-2-0.4-2.7-1.1c-1.5-1.5-1.5-4,0-5.5L74.9,55L27,6.6c-1.5-1.5-1.5-4,0-5.5 s3.9-1.5,5.4,0L83,52.3c1.5,1.5,1.5,4,0,5.5L32.4,108.9z\"/></svg></a>"
				});

				/////////////
				/// SETUP ///
				/////////////
				elm.find(".quote").slick({
					slide: '.slide',
					dots: false,
					arrows: false,
					infinite: true,
					speed: 800,
					fade: true,
					autoplay: false,
					autoplaySpeed: 5000,
					adaptiveHeight: true,
					slidesToShow: 1,
					asNavFor: elm.find("div.image"),
					slidesToScroll: 1
				});


				/////////////////
				/// ON CHANGE ///
				/////////////////
				elm.find(".image").on('beforeChange', function(event, slick, currentSlide, nextSlide){

					// TOTAL SLIDES
					var total_slides = slick.slideCount;

					// BUILD HTML
					var count = parseInt(nextSlide) + 1;

					// WORK OUT THE WIDTH
					var width = ( 100 / total_slides ) * count;

					// WORK OUT THE VERTICAL POSITION
					var vertical = -Math.abs(2) * (count - 1);

					// UPDATE THE UI
					elm.find("slide-progress slide-numbers span:first-child").css("margin-top", vertical + "rem");
					elm.find("slide-progress bar-fill").css("width", width + "%");

				});

			});

		}

		///////////////////////////////
		// GALLERY WITH TEXT CONTENT //
		///////////////////////////////
		if ( $('section.gallery-text').length > 0 ) {

			// FOR EACH
			$('section.gallery-text').each(function(){

				var elm = $(this);

				///////////////
				/// ON INIT ///
				///////////////
				elm.find(".image").on('init', function(event, slick, currentSlide, nextSlide){

					// TOTAL SLIDES
					var total_slides = slick.slideCount;
					if ( total_slides <= 9 ) { total_slides = "0" + total_slides; }

					// BUILD HTML
					var count = 1;
					var html  = "";
					while ( count <= total_slides ) {
						html += "<span>";
						if ( count <= 9 ) { html += "0"; }
						html += count + "</span>";
						count++;
					}

					// WORK OUT THE WIDTH
					var width = 100 / total_slides;

					// ADD A CLASS
					elm.addClass("has-" + slick.slideCount);

					// SETUP THE UI
					elm.find("slide-progress slide-numbers").html(html);
					elm.find("slide-progress slide-numbers span:first-child").css("margin-top", "0");
					elm.find("slide-progress bar-fill").css("width", width + "%");
					elm.find("slide-progress total-slides").text(total_slides);

					// UPDATE THE PAGE HEIGHT
					page_height = $("page-innercontent").outerHeight();

				});


				/////////////
				/// SETUP ///
				/////////////
				elm.find(".image").slick({
					slide: '.slide',
					dots: false,
					arrows: true,
					infinite: true,
					speed: 800,
					fade: false,
					autoplay: false,
					autoplaySpeed: 5000,
					slidesToShow: 1,
					asNavFor: elm.find("div.quote"),
					slidesToScroll: 1,
					prevArrow: "<a class=\"btn arrow prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M77.6,1.1C78.3,0.4,79.3,0,80.3,0c1,0,2,0.4,2.7,1.1c1.5,1.5,1.5,4,0,5.5L35.1,55L83,103.4c1.5,1.5,1.5,4,0,5.5 s-3.9,1.5-5.4,0L27,57.7c-1.5-1.5-1.5-4,0-5.5L77.6,1.1z\"/></svg></a>",
					nextArrow: "<a class=\"btn arrow next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M32.4,108.9c-0.8,0.8-1.7,1.1-2.7,1.1c-1,0-2-0.4-2.7-1.1c-1.5-1.5-1.5-4,0-5.5L74.9,55L27,6.6c-1.5-1.5-1.5-4,0-5.5 s3.9-1.5,5.4,0L83,52.3c1.5,1.5,1.5,4,0,5.5L32.4,108.9z\"/></svg></a>"
				});

				/////////////
				/// SETUP ///
				/////////////
				elm.find(".quote").slick({
					slide: '.slide',
					dots: false,
					arrows: false,
					infinite: true,
					speed: 800,
					fade: true,
					autoplay: false,
					autoplaySpeed: 5000,
					adaptiveHeight: true,
					slidesToShow: 1,
					asNavFor: elm.find("div.image"),
					slidesToScroll: 1
				});


				/////////////////
				/// ON CHANGE ///
				/////////////////
				elm.find(".image").on('beforeChange', function(event, slick, currentSlide, nextSlide){

					// TOTAL SLIDES
					var total_slides = slick.slideCount;

					// BUILD HTML
					var count = parseInt(nextSlide) + 1;

					// WORK OUT THE WIDTH
					var width = ( 100 / total_slides ) * count;

					// WORK OUT THE VERTICAL POSITION
					var vertical = -Math.abs(2) * (count - 1);

					// UPDATE THE UI
					elm.find("slide-progress slide-numbers span:first-child").css("margin-top", vertical + "rem");
					elm.find("slide-progress bar-fill").css("width", width + "%");

				});

			});


		}

		////////////////////////////////
		// FULL WIDTH CENTRAL GALLERY //
		////////////////////////////////
		if ( $('section.gallery-slideshow').length > 0 ) {

			// FOR EACH
			$('section.gallery-slideshow').each(function(){

				var elm = $(this);

				///////////////
				/// ON INIT ///
				///////////////
				$('section.gallery-slideshow').on('init', function(event, slick, currentSlide, nextSlide){

					var elm = $(this);
					var grid_width = elm.find(".sizing-helper g-col").width();
					elm.find(".slick-slide").css("width", grid_width + "px");
					page_height = $("page-innercontent").outerHeight();

					// ARROW POSITION
					gallerySlideshows();

				});

				/////////////
				/// SETUP ///
				/////////////
				elm.find(".slideshow-container").slick({
					slide: '.slide',
					dots: false,
					arrows: true,
					centerMode: true,
					infinite: true,
					speed: 600,
					autoplay: false,
					autoplaySpeed: 6000,
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
					prevArrow: "<a class=\"btn arrow prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M77.6,1.1C78.3,0.4,79.3,0,80.3,0c1,0,2,0.4,2.7,1.1c1.5,1.5,1.5,4,0,5.5L35.1,55L83,103.4c1.5,1.5,1.5,4,0,5.5 s-3.9,1.5-5.4,0L27,57.7c-1.5-1.5-1.5-4,0-5.5L77.6,1.1z\"/></svg></a>",
					nextArrow: "<a class=\"btn arrow next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M32.4,108.9c-0.8,0.8-1.7,1.1-2.7,1.1c-1,0-2-0.4-2.7-1.1c-1.5-1.5-1.5-4,0-5.5L74.9,55L27,6.6c-1.5-1.5-1.5-4,0-5.5 s3.9-1.5,5.4,0L83,52.3c1.5,1.5,1.5,4,0,5.5L32.4,108.9z\"/></svg></a>"
				});


				/////////////////
				/// ON CHANGE ///
				/////////////////
				elm.find(".image").on('beforeChange', function(event, slick, currentSlide, nextSlide){

					// ARROW POSITION
					gallerySlideshows();

				});


			});

		}

		$(window).resize(function(){

			$('section.gallery-slideshow').each(function(){
				var elm = $(this);
				var grid_width = elm.find(".sizing-helper g-col").width();
				elm.find(".slick-slide").css("width", grid_width + "px");
			});

		});

		/////////////////////////////
		// GALLERY WITH LEFT QUOTE //
		/////////////////////////////
		if ( $('section.address').length > 0 ) {

			// FOR EACH
			$('section.address .slideshow-container').each(function(){

				var autoplay_speed = 9000;
				var change_speed = 600;

				var elm = $(this);

				///////////////
				/// ON INIT ///
				///////////////
				elm.on('init', function(event, slick, currentSlide, nextSlide){

					// TOTAL SLIDES
					var total_slides = slick.slideCount;
					if ( total_slides <= 9 ) { total_slides = "0" + total_slides; }

					// BUILD HTML
					var count = 1;
					var html  = "";
					while ( count <= total_slides ) {
						html += "<span>";
						if ( count <= 9 ) { html += "0"; }
						html += count + "</span>";
						count++;
					}

					// WORK OUT THE WIDTH
					var width = 100 / total_slides;

					// SETUP THE UI
					elm.parent().find("slide-progress slide-numbers").html(html);
					elm.parent().find("slide-progress slide-numbers span:first-child").css("margin-top", "0");
					elm.parent().find("slide-progress bar-fill").css("width", "0%");
					elm.parent().find("slide-progress total-slides").text(total_slides);

					if ( viewport_width > 480 ) {
						elm.parent().find("slide-progress bar-fill").animate({ width: "100%" }, autoplay_speed);
					}

				});


				/////////////
				/// SETUP ///
				/////////////
				elm.slick({
					slide: '.slide',
					dots: false,
					arrows: true,
					infinite: true,
					speed: change_speed,
					fade: true,
					autoplay: true,
					autoplaySpeed: autoplay_speed,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: "<a class=\"btn arrow prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M77.6,1.1C78.3,0.4,79.3,0,80.3,0c1,0,2,0.4,2.7,1.1c1.5,1.5,1.5,4,0,5.5L35.1,55L83,103.4c1.5,1.5,1.5,4,0,5.5 s-3.9,1.5-5.4,0L27,57.7c-1.5-1.5-1.5-4,0-5.5L77.6,1.1z\"/></svg></a>",
					nextArrow: "<a class=\"btn arrow next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110 110\"><path d=\"M32.4,108.9c-0.8,0.8-1.7,1.1-2.7,1.1c-1,0-2-0.4-2.7-1.1c-1.5-1.5-1.5-4,0-5.5L74.9,55L27,6.6c-1.5-1.5-1.5-4,0-5.5 s3.9-1.5,5.4,0L83,52.3c1.5,1.5,1.5,4,0,5.5L32.4,108.9z\"/></svg></a>"
				});


				page_height = $("page-innercontent").outerHeight();


				/////////////////
				/// ON CHANGE ///
				/////////////////
				elm.on('beforeChange', function(event, slick, currentSlide, nextSlide){

					// TOTAL SLIDES
					var total_slides = slick.slideCount;

					// BUILD HTML
					var count = parseInt(nextSlide) + 1;

					// WORK OUT THE WIDTH
					var width = ( 100 / total_slides ) * count;

					// WORK OUT THE VERTICAL POSITION
					var vertical = -Math.abs(2) * (count - 1);

					if ( viewport_width > 480 ) {

						// UPDATE THE UI
						elm.parent().find("slide-progress slide-numbers span:first-child").css("margin-top", vertical + "rem");

						// RESET THE PROGRESS BAR
						$("body").queue(function(next){

							elm.parent().find("slide-progress bar-fill").stop().css({
								"left": "auto",
								"right": 0
							}).animate({
								width: "0%"
							}, change_speed);
							next();

						}).delay(change_speed).queue(function(next){

							elm.parent().find("slide-progress bar-fill").css({
								"left": 0,
								"right": "auto"
							}).animate({
								width: "100%"
							}, autoplay_speed);
							next();

						});

					}


				});

			});

		}

	}


	//////////////////////////
	// POPUP NAV BACKGROUND //
	//////////////////////////
	$(document).on({
		mouseenter: function() {
			var id = $(this).text().toLowerCase();
				id = id.replace(/[^a-z0-9+]+/gi, "");
			if ( $("pulldown-nav").find("figure#" + id).length > 0 ) { $("pulldown-nav").find("figure#" + id).css("opacity", 0.3) }
		},
		mouseleave: function() {
			$("pulldown-nav nav-inner > figure").css("opacity", 0);
		}
	}, "pulldown-nav nav ul:first-child > li > a");


	///////////////////////////
	// HIDE THE COOKIE POPUP //
	///////////////////////////
	// $("body").on("click", "cookie-notification a.btn", function(e) {
	// 	e.preventDefault();
	// 	$("cookie-notification").addClass("hidden");
	// });


	////////////////////////
	// STAG CAM PARTICLES //
	////////////////////////
	function stagParticles() {
	    particlesJS("particles", {
	        particles: {
	            number: {
	                value: 180,
	                density: {
	                    enable: !0,
	                    value_area: 800
	                }
	            },
	            color: {
	                value: "#ffffff"
	            },
	            shape: {
	                type: "circle",
	                stroke: {
	                    width: 0,
	                    color: "#000000"
	                },
	                polygon: {
	                    nb_sides: 5
	                },
	                image: {
	                    src: "img/github.svg",
	                    width: 100,
	                    height: 100
	                }
	            },
	            opacity: {
	                value: .5,
	                random: !0,
	                anim: {
	                    enable: !0,
	                    speed: 1,
	                    opacity_min: .1,
	                    sync: !1
	                }
	            },
	            size: {
	                value: 3,
	                random: !0,
	                anim: {
	                    enable: !1,
	                    speed: 40,
	                    size_min: .1,
	                    sync: !1
	                }
	            },
	            line_linked: {
	                enable: !1,
	                distance: 150,
	                color: "#ffffff",
	                opacity: .4,
	                width: 1
	            },
	            move: {
	                enable: !0,
	                speed: 50,
	                direction: "right",
	                random: !0,
	                straight: !1,
	                out_mode: "out",
	                bounce: !1,
	                attract: {
	                    enable: !0,
	                    rotateX: 600,
	                    rotateY: 1200
	                }
	            }
	        },
	        interactivity: {
	            detect_on: "canvas",
	            events: {
	                onhover: {
	                    enable: !1,
	                    mode: "repulse"
	                },
	                onclick: {
	                    enable: !1,
	                    mode: "push"
	                },
	                resize: !0
	            },
	            modes: {
	                grab: {
	                    distance: 400,
	                    line_linked: {
	                        opacity: 1
	                    }
	                },
	                bubble: {
	                    distance: 400,
	                    size: 40,
	                    duration: 2,
	                    opacity: 8,
	                    speed: 3
	                },
	                repulse: {
	                    distance: 200,
	                    duration: .4
	                },
	                push: {
	                    particles_nb: 4
	                },
	                remove: {
	                    particles_nb: 2
	                }
	            }
	        },
	        retina_detect: !0
	    })
	}

	//////////////////////////////
	// SET THE TIME ON STAG CAM //
	//////////////////////////////
	function stagCamTime() {

		var date = new Date;
		var current_day = date.getDate();
		var current_date = date.getDate();
		var current_month = date.getMonth();
		var current_year = date.getFullYear();
		var current_hours = date.getHours();
		var current_minutes = date.getMinutes();
		if ( current_minutes < 10 ) { current_minutes = "0" + current_minutes; }

		var time_zone = date.getTimezoneOffset();
			time_zone = Math.abs(time_zone / 60);

		$("side-bar .day").text(current_day);
		$("side-bar .month").text(current_month);
		$("side-bar .year").text(current_year);
		$("side-bar .hours").text(current_hours);
		$("side-bar .mins").text(current_minutes);
		$("side-bar .t").text("GMT+" + time_zone);

	}

	///////////////////
	// OPEN STAG CAM //
	///////////////////
	$("body").on("click", "our-seb", function() {
		openStagCam();
	});

	///////////////////////////////
	// FUNCTION TO OPEN STAG CAM //
	///////////////////////////////
	function openStagCam() {

		// STAG CAM
		var sc_tree_1 = $("stag-cam .tree_1").data("src");
		var sc_tree_2 = $("stag-cam .tree_2").data("src");
		var sc_background = $("stag-cam figure").data("src");

		// LOAD ASSETS
		$("cam-intro .tree_1").attr("src", sc_tree_1);
		$("cam-intro .tree_2").attr("src", sc_tree_2);
		$("cam-intro figure").css("background-image", "url('" + sc_background + "')");

		// PARTICLES
		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {
			stagParticles();
		}

		// OPEN STAG CAM
		$("body").addClass("stag-cam-open");
		$("#ambience").prop("volume", 0.0);

		// PUSH STATE FOR BROWSER HISTORY
		$("body").attr("data-href", window.location.href);

		var page_url = window.location.href;
		var append = "?stagcam";

		if (/\?/i.test(page_url)) { append = "&stagcam" }
		if (/\?stagcam/i.test(page_url)) { append = "" }

		history.replaceState({},'StagCam - BlueStag.co.uk', page_url + append );
		
		// STOP FOOTER ANIMATION
		$("body").stop().delay(2000).queue(function(next){

			$("#ambience")[0].play();
			$("#ambience").animate({volume: 1}, 2000);
			next();

		}).delay(2000).queue(function(next){

			clearInterval(mountains);
			clearInterval(hills);
			clearInterval(trees);
			$("animation-rear svg").stop();
			$("animation-front svg").stop();
			$("animation-trees svg").stop();
			next();

		});

	}

	////////////////////
	// CLOSE STAG CAM //
	////////////////////
	$("body").on("click", "stag-cam a[data-action=\"close\"]", function(e) {
		e.preventDefault();
		closeStagCam();
	});

	////////////////////////////////
	// FUNCTION TO CLOSE STAG CAM //
	////////////////////////////////
	function closeStagCam() {

		// STOP FOOTER ANIMATION
		$("body").stop().queue(function(next){

			// CLOSE STAG CAM
			$("body").removeClass("stag-cam-open");
			$("#ambience").animate({volume: 0}, 2000);
			$("#stag").animate({volume: 0}, 2000);

			// RESTART FOOTER ANIMATION
			animateFooter("animation-rear svg", mountains_time, elm_width);
			animateFooter("animation-front svg", hills_time, elm_width);
			animateFooter("animation-trees svg", trees_time, elm_width);
			mountains = setInterval(function(){ animateFooter("animation-rear svg", mountains_time, elm_width); }, mountains_time);
			hills = setInterval(function(){ animateFooter("animation-front svg", hills_time, elm_width); }, hills_time);
			trees = setInterval(function(){ animateFooter("animation-trees svg", trees_time, elm_width); }, trees_time);

			// PUSH STATE FOR BROWSER HISTORY
			var page_url = $("body").attr("data-href");
			history.replaceState({}, $("head title").text(), page_url);

			next();

		}).delay(2000).queue(function(next){

			// ONLY RUN IF NOT IE
			if ( isNaN(ieVersion) && csVersion !== "safari" ) {
				window.pJSDom[0].pJS.fn.vendors.destroypJS();
				window["pJSDom"] = [];
			}

			// PAUSE VIDEO
			$("#stag")[0].pause();

			// RESET STAG CAM
			$("cam-intro").removeClass("hidden");
			$("cam-feed").removeClass("visible");

			// STOP TIMER
			clearInterval(stagtimer);
			next();

		});

	}


	/////////////////////////////
	// STAG CAM SWITCH TO FEED //
	/////////////////////////////
	var stagtimer;
	function stagCamOpenFeed() {

		$("body").queue(function(next){

			$("cam-intro").addClass("hidden");
			$("#ambience").animate({volume: 0}, 1000);
			$("#stag").prop("volume", 0.0);
			next();

		}).delay(1000).queue(function(next){

			// PLAY VIDEO
			$("#ambience")[0].pause();
			$("#stag")[0].play();
			$("#stag").animate({volume: 1}, 2000);

			// SHOW THE FEED
			$("cam-feed").addClass("visible");

			// TRIGGER THE TIMER
			stagtimer = setInterval(function(){ stagCamTime() }, 1000);
			next();

		});

	}

	$("body").on("click", "a[data-action=\"launch\"]", function(e) {
		e.preventDefault();
		stagCamOpenFeed();
	});


	//////////////////////
	// SETUP VIDEO FEED //
	//////////////////////
	function setupVideoFeed() {

		// GET THE HOUR
		var date = new Date;
		var hours = date.getHours();

		// THE TEMPLATE PATH
		var template_path = $("cam-feed").attr("data-path");
			template_path += "/video/stag-cam/";

		// CHOOSE A RANDOM VIDEO
		var video = Math.floor( 3 * Math.random() ) + 1;

		// DEFINE THE VIDEOS
		if ( hours >= 0 && hours <= 6 ) { var videoFeed480 = template_path + "cam_night_" + video + "_480.mp4"; var videoFeed1080 = template_path + "cam_night_" + video + "_1080.mp4"; }
		if ( hours > 6 && hours <= 9 ) { var videoFeed480 = template_path + "cam_morning_" + video + "_480.mp4"; var videoFeed1080 = template_path + "cam_morning_" + video + "_1080.mp4"; }
		if ( hours > 9 && hours <= 15 ) { var videoFeed480 = template_path + "cam_midday_" + video + "_480.mp4"; var videoFeed1080 = template_path + "cam_midday_" + video + "_1080.mp4"; }
		if ( hours > 15 && hours <= 17 ) { var videoFeed480 = template_path + "cam_evening_" + video + "_480.mp4"; var videoFeed1080 = template_path + "cam_evening_" + video + "_1080.mp4"; }
		if ( hours > 17 ) { var videoFeed480 = template_path + "cam_night_" + video + "_480.mp4"; var videoFeed1080 = template_path + "cam_night_" + video + "_1080.mp4"; }

		// SET THE VIDEO SOURCES
		if ( viewport_width > 1024 )
			{ $("cam-feed #source").attr("src", videoFeed1080); } else
			{ $("cam-feed #source").attr("src", videoFeed480); }

		// SET THE CAMERA NUMBER
		$("span.camera").text(video);

		// LOAD THE VIDEOS
		$("cam-feed #stag").load();
	
	}


	function getUrlParameter(sParam) {
	    var sPageURL = window.location.search.substring(1),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	        }
	    }
	};


	/////////////////////////////////
	// MATCH HEIGHTS OF [ELEMENTS] //
	/////////////////////////////////
	function matchElementHeights(elm, minwidth, maxwidth) {

		// RESET HEIGHTS
		$(elm).height("");

		var w = $("body").width();

		if ( w >= minwidth && ( maxwidth == null || w <= maxwidth ) ) {


			// IF ELEMENTS EXIST
			if ( $(elm).length > 0 ) {

				// STARTING HEIGHT
				var height = 0;

				// FIND THE TALLEST
				$(elm).each(function(){ if ( $(this).height() > height ) { height = $(this).height(); } });

				// MATCH TO THE TALLEST
				$(elm).height(height);

			}

		}

	}


	/////////////////////////////////////////////////////////////
	///////////////////// ANIMATION HANDLER /////////////////////
	/////////////////////////////////////////////////////////////
	var ticking = false;


	////////////////////////////////////
	// INITIAL FUNCITON RUN ON SCROLL //
	////////////////////////////////////
	function onScroll() {
		
		// UPDATE SCROLL
		current_scroll = parseInt($("page-content").scrollTop());

		// REQUEST ANIMATION TICK
		requestTick();

	}


	/////////////////////////////
	// ANIMATION TICK FUNCTION //
	/////////////////////////////
	function requestTick() {

		// RAF IF NOT ALREADY TICKING
		if ( !ticking ) { requestAnimationFrame(runOnScroll); }

		// ENABLE TICK
		ticking = true;
	}



	/////////////////
	// LATEST WORK //
	/////////////////
	function latestWork() {

		// IF WE HAVE A LATEST WORK BLOCK
		if ( $("section.latest-work.list").length > 0 ) {

			// FOR EACH BLOCK
			$("section.latest-work.list post-item").each(function(){

				// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
				var offset = $(this).offset().top;
				var height = $(this).outerHeight();

				// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
				if ( 
					offset >= ( -Math.abs(height) ) && 		// IS NOT TOO FAR ABOVE
					offset <= ( viewport_height + height )  // OR TOO FAR BELOW
				) {

					// ITEM IS *ACTUALLY* IN THE VIEWPORT
					if ( ( offset + 100 ) <= viewport_height ) {

						// REVEAL IF NOT ALREADY VISIBLE
						if ( !$(this).hasClass("in-viewport") ) {
							$(this).addClass("in-viewport");
						}

						if ( $(this).find("figure").length > 0 ) {

							$(this).find("figure").each(function(){

								// TRIGGER IMAGE LOAD
								if ( $(this).attr("data-image") ) {

									// SET THE IMAGE
									$(this).css("background-image", "url(" + $(this).attr("data-image") + ")");

									// REMOVE THE PLACEHOLDER
									$(this).removeAttr("data-image");
									$(this).find("loading-spinner").remove();

								}

							})


							// ONLY RUN IF NOT IE OR SAFARI
							if ( isNaN(ieVersion) && csVersion !== "safari" && viewport_width >= 1025 ) {

								// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
								var element_midpoint = offset + ( height / 2 );
								var diff = viewport_midpoint - element_midpoint;
								
								// CREATE THE PARALLAX OFFSET VALUES
								var image_1_parallax = 30 * ( diff / 500 ) + 30;
								var image_2_parallax = 30 * ( diff / 500 ) + 30;
									image_2_parallax = -image_2_parallax;

								// SET THE PARALLAX
								$(this).find("image-content a > figure, image-content a > video-container").css("transform", "translate3d(0,calc(" + Math.abs(image_1_parallax) + "px),0)");

								if ( image_2_parallax > 0 )
									{ $(this).find("secondary-image").css("transform", "translate3d(0,calc(-50% + " + Math.abs(image_2_parallax) + "px),0)"); } else
									{ $(this).find("secondary-image").css("transform", "translate3d(0,calc(-50% - " + Math.abs(image_2_parallax) + "px),0)"); }

							} else {

								// RESET THE PARALLAX
								$(this).find("image-content a > figure, image-content a > video-container").css("transform", "");
								$(this).find("secondary-image").css("transform", "");

							}

						}

					}

				}

			});

		}

		if ( $("section.latest-work.grid .posts a").length > 0 ) {

			$("section.latest-work.grid .posts a").each(function(){

				// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
				var offset = $(this).offset().top;
				var height = $(this).outerHeight();

				// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
				if ( 
					offset <= viewport_height
				) {

					// REVEAL IF NOT ALREADY VISIBLE
					if ( !$(this).hasClass("in-viewport") ) {
						
						// REVEAL
						$(this).addClass("in-viewport");

						// TRIGGER IMAGE LOAD
						if ( $(this).find("img").attr("data-src") ) {

							// SET THE IMAGE
							$(this).find("img").attr("src", $(this).find("img").attr("data-src")).fadeIn(500);

							// REMOVE THE PLACEHOLDER
							$(this).find("img").removeAttr("data-src");


							$(this).find("loading-spinner").remove();

						}

					}

				}

			});

		} else {

			$(".portfolio.archive .grid .posts a").addClass("in-viewport");

			// TRIGGER IMAGE LOAD
			$(".portfolio.archive .grid .posts a").each(function(){
				if ( $(this).find("img").attr("data-src") ) {
					$(this).find("img").attr("src", $(this).find("img").attr("data-src")).fadeIn(500);
					$(this).find("img").removeAttr("data-src");
				}
			});

		}


		// $("section.latest-work post-item").each(function(){

		// 	if ( $(this).find("figure").length > 0 ) {

		// 		$(this).find("figure").each(function(){

		// 			// TRIGGER IMAGE LOAD
		// 			if ( $(this).find("figure").attr("data-image") ) {

		// 				// SET THE IMAGE
		// 				$(this).find("figure").css("background-image", "url(" + $(this).find("figure").attr("data-image") + ")");

		// 				// REMOVE THE PLACEHOLDER
		// 				$(this).find("figure").removeAttr("data-image");

		// 				$(this).find("loading-spinner").remove();

		// 			}

		// 		});

		// 	}

		// });

		// $("section.latest-work post-item").addClass("in-viewport");
		// $("section.latest-work post-item").find("image-content a > figure, image-content a > video-container").css("transform", "");
		// $("section.latest-work post-item").find("secondary-image").css("transform", "");


	}

	$(document).on({
		mouseenter: function() {
			$(this).closest("post-item").addClass("hover");
		},
		mouseleave: function() {
			$(this).closest("post-item").removeClass("hover");
		}
	}, '.latest-work.list post-item a');

	///////////////////////////
	// FULL SCREEN STATEMENT //
	///////////////////////////
	function fullscreenStatement() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			if ( viewport_width > 1025 ) {

				// FOR EACH BLOCK
				$("section.statement").each(function(){

					var elm = $(this);

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = elm.offset().top;
					var height = elm.outerHeight();
					var diff = current_scroll - offset;

					// THE CURRENT TRANSFORM PROPERTY
					var translateY = 100;
					if ( $("body").hasClass("loaded") ) { translateY = 0; }

					// CHECK ITEM IS IN RANGE OF THE VIEWPORT
					if ( 
						offset <= height && // IS NOT TOO FAR ABOVE
						offset >= 0  	 	// OR TOO FAR BELOW
					) {

						// CALCULATE THE INLINE STYLING VALUES
						var translate = -Math.abs((offset - translateY));

						// REVEAL IF NOT ALREADY VISIBLE				
						if ( !elm.hasClass("fixed") ) {
							elm.addClass("fixed");
						}

						// ENSURE THE BLOCK IS TALL ENOUGH FOR THE CONTENT
						var minheight = elm.find("blockquote").outerHeight() * 2;
						elm.css("min-height", minheight);
						elm.find("section-inner").css("min-height", minheight);
						elm.find("g-container").css("min-height", minheight);
						elm.find("g-row").css("min-height", minheight);
						elm.find("g-col").css("min-height", minheight);

						// SET THE INLINE STYLING
						elm.find("section-inner").css({ "transform": "translate3d(0," + translate + "px,0)" });

					} else {

						// REMOVE THE INLINE STYLING
						if ( elm.hasClass("fixed") ) {
							elm.removeClass("fixed");
							elm.find("section-inner").css({ "transform": "" });
						}

					}

				});

			} else {

				// REMOVE THE INLINE STYLING
				$("section.statement").removeClass("fixed");
				$("section.statement section-inner").removeAttr("style");

			}

		}

	}

	//////////////////
	// ORDERED LIST //
	//////////////////
	function orderedList() {

		if ( viewport_width >= 1025 ) {

			// FOR EACH BLOCK
			$("section.ordered-list").each(function(){

				var elm = $(this);

				// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
				var offset = elm.offset().top;
				var height = elm.outerHeight();

				// CHECK ITEM IS IN RANGE OF THE VIEWPORT
				if (  offset <= viewport_height ) {

					// REVEAL IF NOT ALREADY VISIBLE				
					if ( !elm.hasClass("in-viewport") ) { elm.addClass("in-viewport"); }

				}

			});

		} else {

			$("section.ordered-list").addClass("in-viewport");

		}

	}


	///////////////////
	// MEET THE TEAM //
	///////////////////
	function meetTheTeam() {

		if ( viewport_width >= 1025 ) {

			// FOR EACH BLOCK
			$("section.meet-the-team").each(function(){

				var elm = $(this);

				// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
				var offset = elm.offset().top;
				var height = elm.outerHeight();

				// CHECK ITEM IS IN RANGE OF THE VIEWPORT
				if (  offset <= viewport_height ) {

					// REVEAL IF NOT ALREADY VISIBLE				
					if ( !elm.hasClass("in-viewport") ) { elm.addClass("in-viewport"); }

				}

			});

		} else {

			$("section.meet-the-team").addClass("in-viewport");

		}

	}


	//////////////////
	// CLIENT LOGOS //
	//////////////////
	function clientLogos() {

		// FOR EACH BLOCK
		$("section.clients client-wrapper").each(function(){

			var elm = $(this);

			// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
			var offset = elm.offset().top;
			var height = elm.outerHeight();

			// CHECK ITEM IS IN RANGE OF THE VIEWPORT
			if (  offset <= viewport_height ) {

				// REVEAL IF NOT ALREADY VISIBLE				
				if ( !elm.hasClass("in-viewport") ) { elm.addClass("in-viewport"); }

			}

		});

	}


	//////////////////////////////////////////////////////
	// INTRO REVEAL ON SCROLL - NON FIRST SECTIONS ONLY //
	//////////////////////////////////////////////////////
	function introRevealOnScroll() {

		// FOR EACH BLOCK
		$("section.page-heading").each(function(){

			var elm = $(this);

			// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
			var offset = elm.offset().top + 50;
			var height = elm.outerHeight();

			// CHECK ITEM IS IN RANGE OF THE VIEWPORT
			if (  offset <= viewport_height ) {

				// REVEAL IF NOT ALREADY VISIBLE				
				if ( !elm.hasClass("in-viewport") ) {

					$(elm).delay(25).queue(function(next){

						// REVEAL
						elm.addClass("in-viewport");

						// NEXT
						next();

					});

				}

			}

		});

	}


	//////////////////////
	// FULL WIDTH IMAGE //
	//////////////////////
	function fullscreenImage() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) ) {

			if ( viewport_width >= 1025 ) {

				// FOR EACH BLOCK
				$("section.full-width-image").each(function(){

					var elm = $(this);

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = elm.offset().top;
					var height = elm.outerHeight();


					// CHECK ITEM IS IN RANGE OF THE VIEWPORT
					if ( 
						offset <= viewport_height && // IS NOT TOO FAR ABOVE
						offset >= -Math.abs(height)
					) {
						// REVEAL IF NOT ALREADY VISIBLE				
						if ( !elm.hasClass("in-viewport") ) {
							elm.addClass("in-viewport");
						}

						// SET THE INLINE STYLING - IF NOT SAFARI
						if ( csVersion !== "safari" ) {

							var diff = current_scroll - offset;

							// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
							var element_midpoint = offset + ( height / 2 );
							var diff = viewport_midpoint - element_midpoint;
						
							// CREATE THE PARALLAX OFFSET VALUES
							var parallax = 30 * ( diff / 50 );

							elm.find("image-wrapper figure").css("transform", "translate3d(0," + parallax + "px,0)");
						
						}

					}

				});

			} else {

				$("section.full-width-image figure").css("transform", "");

			}

		}

	}


	//////////////////////
	// FULL WIDTH IMAGE //
	//////////////////////
	function lovieCTA() {

		var elm = $("section.lovie-award");

		if ( elm.length > 0 ) {

			// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
			var offset = elm.offset().top;
			var height = elm.outerHeight();

			console.log(offset);
			
			// CHECK ITEM IS IN RANGE OF THE VIEWPORT
			if (  offset <= height ) {

				// REVEAL IF NOT ALREADY VISIBLE				
				if ( !elm.hasClass("in-viewport") ) {
					
					$("body").queue(function(next){

						// REVEAL
						elm.addClass("in-viewport");

						// PLAY THE VIDEO
						if ( $(".lovie-award video").length > 0 ) {
							elm.find("video")[0].play();
						}

						// NEXT
						next();

					}).delay(400).queue(function(next){

						// SHOW THE FALLBACK IMAGE IF THERE'S NO VIDEO
						if ( $(".lovie-award video").length == 0 ) { $(".lovie-award").addClass("cant-play") } else {

							// IF IT IS, REMOVE THE COVER IMAGE
							if ( !elm.find("video")[0].paused ) { $(".lovie-award .fallback-cover").remove(); } 

							// OTHERWISE MARK THE VIDEO AS UNPLAYABLE
							else { $(".lovie-award").addClass("cant-play"); }

						}

						// NEXT
						next();

					})

				}	

			}

		}

	}


	//////////////////
	// AWARDS BLOCK //
	//////////////////
	function awards() {

		// FOR EACH BLOCK
		$("section.awards").each(function(){

			var elm = $(this);

			if ( viewport_width > 1024 ) {

				// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
				var offset = elm.offset().top;
				var height = elm.outerHeight();
				var diff = Math.round(current_scroll - offset);

				// DEFINE THE POINT TO FIX THE TEXT
				var fix_at = 0;
				if ( $("body").hasClass("admin-bar") ) { fix_at = 32; }

				// CHECK ITEM IS IN RANGE OF THE VIEWPORT
				if ( 
					offset <= fix_at && 				 	// IS NOT TOO FAR ABOVE
					offset >= ( -Math.abs(height) + fix_at) // OR TOO FAR BELOW
				) {

					// MAKE IT SO
					if ( !elm.find(".content content-wrapper").hasClass("sticky") ) {
						elm.find(".content content-wrapper").addClass("sticky");
					}

				} else {

					// RESET IF TOO FAR ABOVE OR BELOW
					if ( elm.find(".content content-wrapper").hasClass("sticky") ) {
						elm.find(".content content-wrapper").removeClass("sticky");
					}

				}

			} else {

				// RESET IF ON MOBILE
				if ( elm.find(".content content-wrapper").hasClass("sticky") ) {
					elm.find(".content content-wrapper").removeClass("sticky");
				}

			}

		});

	}

	///////////////////////////
	// EXPANDING IMAGE BLOCK //
	///////////////////////////
	function expandingImageBlock() {

		// FOR EACH BLOCK
		$("section.expanding-image").each(function(){

			var elm = $(this);

			if ( viewport_width > 1024 ) {

				// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
				var offset = elm.find("image-wrapper.transforms figure").offset().top;
				var height = elm.outerHeight();
				var bottom_offset = Math.round(offset + height);

				// CHECK ITEM IS IN RANGE OF THE VIEWPORT
				if ( 
					offset <= viewport_height && // IS NOT TOO FAR ABOVE
					offset >= -Math.abs(height)
				) {

					// REVEAL IF NOT ALREADY VISIBLE				
					if ( !elm.hasClass("in-viewport") ) {
						elm.addClass("in-viewport");
					}

					if ( csVersion !== "safari" ) {

						// TARGET THE IMAGE AND FIND THE ORIGINAL HEIGHT
						var target = elm.find("image-wrapper.transforms figure");
						var target_height = target.parent().prev("image-wrapper").find("figure").outerHeight();

						// CALCULATE THE CSS TRANSFORM
						var t = ( offset - viewport_height ) * 0.25;
						var translateY = t;
						if ( translateY < -100 ) { translateY = -100; }

						var padding = 20;
							padding = ( padding / 100 ) * Math.abs(translateY);

						var scale = 1;

						var width = 0;

						// IF AT THE MAX TRANSLATION, SCALE THE IMAGE TOO
						if ( translateY == -100 ) {

							var s = t - translateY;
							if ( s > 50 ) { s = 50; }

							scale = 1 + Math.abs(( ( 1 / 65 ) * s ));
							if ( scale > 2 ) { scale = 2; }

							width = 20;
							width = ( width / 100 ) * Math.abs(s);
							if ( width > 10 ) { width = 10; }

						}

						// SET THE CSS
						elm.find("image-wrapper.transforms figure").css({
							"transform": "translate3d(0,calc(" + Math.abs(translateY) + "% + " + padding + "px),0) scale(" + scale + ")",
							"width": "calc(100% + " + width + "px)"
						});

					}

				}

			} else {

				if ( elm.hasClass("in-viewport") ) {
					elm.removeClass("in-viewport");
					elm.find("image-wrapper.transforms figure").css({"transform": "","width": ""});
				}

			}

		});

	}


	/////////////////////
	// KEY POINTS LIST //
	/////////////////////
	function keyPointsList() {

		// FOR EACH BLOCK
		$("section.key-points-list g-col").each(function(){

			var elm = $(this);

			// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
			var offset = elm.offset().top;
			var height = elm.outerHeight();

			// CHECK ITEM IS IN RANGE OF THE VIEWPORT
			if (  offset <= viewport_height ) {

				// REVEAL IF NOT ALREADY VISIBLE				
				if ( !elm.hasClass("in-viewport") ) { elm.addClass("in-viewport"); }

			}

		});

	}


	/////////////////////////
	// INLINE SUBSCRIPTION //
	/////////////////////////
	function inlineSubscribe() {

		// FOR EACH BLOCK
		$("inline-subscribe").each(function(){

			var elm = $(this);

			// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
			var offset = elm.offset().top;
			var height = elm.outerHeight();

			// CHECK ITEM IS IN RANGE OF THE VIEWPORT
			if (  offset <= viewport_height ) {

				// REVEAL IF NOT ALREADY VISIBLE				
				if ( !elm.hasClass("in-viewport") ) { elm.addClass("in-viewport"); }

			}

		});

	}


	/////////////////
	// LATEST WORK //
	/////////////////
	function ourServices() {

		// IF VIEWPORT IS WIDE ENOUGH
		if ( viewport_width > 1024 ) {

			// IF WE HAVE A LATEST WORK BLOCK
			if ( $("section.our-services").length > 0 ) {

				// FOR EACH BLOCK
				$("section.our-services post-wrapper").each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();

					// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
					if ( 
						offset >= ( -Math.abs(height) ) && 		// IS NOT TOO FAR ABOVE
						offset <= ( viewport_height + height )  // OR TOO FAR BELOW
					) {

						// ITEM IS *ACTUALLY* IN THE VIEWPORT
						if ( offset <= viewport_height ) {

							// REVEAL IF NOT ALREADY VISIBLE
							if ( !$(this).hasClass("in-viewport") ) {
								$(this).addClass("in-viewport");
							}

							// ONLY RUN IF NOT IE
							if ( isNaN(ieVersion) && csVersion !== "safari" ) {

								// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
								var element_midpoint = offset + ( height / 2 );
								var diff = viewport_midpoint - element_midpoint;
								
								// CREATE THE PARALLAX OFFSET VALUES
								var image_1_parallax = 30 * ( diff / 450 );
								var image_2_parallax = 30 * ( diff / 450 );
									image_2_parallax = -image_2_parallax;

								// SET THE PARALLAX
								$(this).find("a > figure").css("transform", "translate3d(0," + image_1_parallax + "px,0)");
								$(this).find("secondary-image figure").css("transform", "translate3d(0," + image_2_parallax + "px,0)");

							}

						}

					}

				});

			}

		} else {

			// REMOVE THE INLINE STYLING
			$("section.our-services post-wrapper").addClass("in-viewport");
			$("section.our-services post-wrapper figure").css("transform", "");

		}

	}


	//////////////////////
	// FULL WIDTH IMAGE //
	//////////////////////
	function twoColumnContent() {

		var elm = $("section.content-two-columns g-col");

		if ( elm.length > 0 ) {

			if ( viewport_width > 768 ) {

				elm.each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();
					
					// CHECK ITEM IS IN RANGE OF THE VIEWPORT
					if (  offset <= viewport_height ) {

						// REVEAL IF NOT ALREADY VISIBLE				
						if ( !$(this).hasClass("in-viewport") ) {
							$(this).addClass("in-viewport");
						}	

					}

				});

			}

		}

	}


	///////////////////
	// EMBED CONTENT //
	///////////////////
	function embed() {

		var elm = $("section.embed g-col");

		if ( elm.length > 0 ) {

			if ( viewport_width > 768 ) {

				elm.each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();
					
					// CHECK ITEM IS IN RANGE OF THE VIEWPORT
					if (  offset <= viewport_height ) {

						// REVEAL IF NOT ALREADY VISIBLE				
						if ( !$(this).hasClass("in-viewport") ) {
							$(this).addClass("in-viewport");
						}	

					}

				});

			} else {

				elm.addClass("in-viewport");

			}

		}

	}


	/////////////
	// WYSIWYG //
	/////////////
	function wysiwyg() {

		var elm = $("section.wysiwyg g-col");

		if ( elm.length > 0 ) {

			if ( viewport_width > 1024 ) {

				elm.each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();
					
					// CHECK ITEM IS IN RANGE OF THE VIEWPORT
					if (  offset <= viewport_height ) {

						// REVEAL IF NOT ALREADY VISIBLE				
						if ( !$(this).hasClass("in-viewport") ) {
							$(this).addClass("in-viewport");
						}	

					}

				});

			} else {

				// HIDE IF VISIBLE
				if ( !elm.hasClass("in-viewport") ) {
					elm.addClass("in-viewport");
				}

			}

		}

	}


	///////////////
	// GALLERIES //
	///////////////
	function galleries() {

		var galleries = ["gallery-text", "gallery-quote", "gallery-tiles", "gallery-single", "gallery-slideshow"];

		$.each(galleries, function( index, value ) {

			var elm = $("section." + value + " g-col");
			if ( value == "gallery-tiles" ) { elm = $("section." + value + " g-col image-wrapper"); }
			if ( value == "gallery-single" ) { elm = $("section." + value + " g-col image-wrapper"); }
			if ( value == "gallery-slideshow" ) { elm = $("section." + value); }

			if ( elm.length > 0 ) {

				if ( viewport_width > 768 ) {

					elm.each(function(){

						// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
						var offset = $(this).offset().top;
						var height = $(this).outerHeight();
						
						// CHECK ITEM IS IN RANGE OF THE VIEWPORT
						if (  offset <= viewport_height ) {

							// REVEAL IF NOT ALREADY VISIBLE				
							if ( !$(this).hasClass("in-viewport") ) {
								$(this).addClass("in-viewport");
							}	

						}

					});

				} else {

					// SHOW
					elm.addClass("in-viewport");

				}

			}

		});

	}


	$('.ordered-list li').click(function(){

		$(this).queue(function(next){

			// PROTECT
			$(this).addClass("selected");

			// NEXT
			next();

		}).delay(20).queue(function(next){

			// RESET
			$('.ordered-list li:not(.selected)').find("p").slideUp(300);
			$(this).find("p").slideToggle();

			// NEXT
			next();

		}).delay(20).queue(function(next){

			// UNPROTECT
			$(this).removeAttr("class");

			// NEXT
			next();

		});

	});


	///////////////
	// GALLERIES //
	///////////////
	function gallerySlideshows() {

		$(".gallery-slideshow").each(function(){

			var image_height = $(this).find("figure").outerHeight();
			var center = image_height / 2;
			$(this).find(".slideshow-container > a").css("top", center);

		});

	}

	/////////////////
	// LATEST WORK //
	/////////////////
	function keyPointsBullets() {

		$(".key-points-list g-col p").each(function(){

			var html = $(this).html();

			// IF IT CONTAINS A BULLET
			if ( html.indexOf('\u2022') > -1 ) {

				// REPLACE THE BULLET AND WRAP THE LINE
				var html = html.replace(/\u2022/g, '<span class="bullet">');
				var html = html.replace(/<br>/g, '</span>');
				$(this).html(html);

			}

		});

	}



	//////////////////////////////////////////////////
	///// HOME PAGE ELEMENT POSITIONING FUNCTION /////
	//////////////////////////////////////////////////
	function homePagePositioning() {

		//////////////////////////
		// SCROLL HINT POSITION //
		//////////////////////////
		if ( $("scroll-hint").length > 0 ) {

			$("scroll-hint").css("left", "");

			if ( viewport_width > 1024 ) {

				// GET
				var padding = 20;
				if ( viewport_width <= 468 ) { padding = 10; }
				var hint_offset = $("footer g-col").offset().left + padding + 20;

				// SET
				$("scroll-hint").css("left", hint_offset);

			}

		}

	}

	/////////////////////////////////////
	// HEIGHT OF THE HOME LANDING AREA //
	/////////////////////////////////////
	function homePageSize(firstrun) {

		if ( $(".home.landing-area").length > 0 ) {

			// RUN ONLY ON FIRST RUN AND IF THE PAGE WIDTH CHANGES
			if ( firstrun == true || old_viewport_width !== viewport_width || viewport_width > 768 ) {

				// GET
				var min_height = 0;
				$(".home.landing-area .slick-slide slide-text").each(function(){
					if ( $(this).outerHeight() > min_height ) { min_height = $(this).outerHeight(); }
				});

				// ADD A 75px MARGIN TOP AND BOTTOM
				min_height = min_height + 150

				// SET
				$(".home.landing-area .slick-slide").css({
					"height" : viewport_height,
					"min-height" : min_height
				});

				$(".home.landing-area").removeClass("uninit");

			}

		}

		if ( $(".home.video").length > 0 ) {

			// RUN ONLY ON FIRST RUN AND IF THE PAGE WIDTH CHANGES
			if ( firstrun == true || old_viewport_width !== viewport_width || viewport_width > 768 ) {

				// GET
				var min_height = $(".home.video g-container").outerHeight();

				// ADD A 75px MARGIN TOP AND BOTTOM
				min_height = min_height + 300;

				// SET
				$(".home.video").css({
					"height" : viewport_height,
					"min-height" : min_height
				});

			}

		}

	}


	/////////////////////////////////////////
	///// LANDING AREA SCROLL ANIMATION /////
	/////////////////////////////////////////
	function homeLandingAreaScroll() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {
			

			if ( viewport_width > 1024 ) {

				if ( $(".home.landing-area").length > 0 ) {

					if ( current_scroll <= 1000 ) {

						// CALC
						var opacity = 1 - ( current_scroll / 1500 );
						var offsetY = ( current_scroll / 17 );
						var textOffsetY = -Math.abs( ( current_scroll / 34 ) );
						var scale = 1 - ( current_scroll / 2000 );

						// SET
						$(".home.landing-area .slideshow-container").stop().css({
							"opacity": opacity,
							"transform": "translate3d(0," + offsetY + "%,0) scale(" + scale + ")",
						});

						// SET
						$(".home.landing-area .slick-slide slide-inner").css("transform", "translate3d(0," + textOffsetY + "%,0)");
						$(".home.landing-area .slideshow-container").stop().css({
							"opacity": opacity,
							"transform": "translate3d(0," + offsetY + "%,0) scale(" + scale + ")",
						});

					}

				}

			} else {

				// RESET
				$(".home.landing-area .slick-slide slide-inner").css("transform", "");
				$(".home.landing-area .slideshow-container").stop().css({ "opacity": 1, "transform": "" });

			}

		}

	}


	/////////////////////////////////////////
	///// LANDING AREA SCROLL ANIMATION /////
	/////////////////////////////////////////
	function homeLandingVideoScroll() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			if ( viewport_width > 1024 ) {

				if ( $(".home.video").length > 0 ) {

					if ( current_scroll <= 1000 ) {

						// CALC
						var opacity = 1 - ( current_scroll / 1500 );
						var offsetY = ( current_scroll / 17 );
						var scale = 1 - ( current_scroll / 2000 );

						// SET
						$(".home.video section-inner").stop().css({
							"opacity": opacity,
							"transform": "translate3d(0," + offsetY + "%,0) scale(" + scale + ")",
						});

						// SET
						$(".home.video section-inner").stop().css({
							"opacity": opacity,
							"transform": "translate3d(0," + offsetY + "%,0) scale(" + scale + ")",
						});

					}

				}

			} else {

				// RESET
				$(".home.video section-inner").stop().css({ "opacity": 1, "transform": "" });

			}

		}

	}


	///////////////////////////////////////////////
	// CALCULATE THE LINE HEIGHT OF A PAGE TITLE //
	///////////////////////////////////////////////
	function videoHeading() {

		$("section.home.video").each(function(){

			// UNWRAP
			$(this).find("strong span").contents().unwrap();

			// RE-WRAP
			$(this).find("strong").splitLines({
				tag: '<span>',
				keepHtml: false
			});

		});

	}


	////////////////////////
	// SCROLL TO DISCOVER //
	////////////////////////
	$("body").on("click", ".home scroll-hint", function(e) {
		e.preventDefault();

		$("body").queue(function(next){

			$("page-content").addClass("scrollTo");
			next();

		}).queue(function(next){

			if ( $(".home.landing-area").length > 0 ) { $("page-content").animate({ scrollTop: $(".home.landing-area").outerHeight() }, 1000); } else
			if ( $(".home.video").length > 0 ) { $("page-content").animate({ scrollTop: $(".home.video").outerHeight() }, 1000); }
			next();

		}).delay(1000).queue(function(next){

			$("page-content").removeClass("scrollTo");
			next();

		})
	
	});


	////////////////
	// PLAY VIDEO //
	////////////////
	$("body").on("click", ".home play-button", function(e) {
		e.preventDefault();

		if ( viewport_width > 800 ) {

			// ADD CLASS
			$("body").addClass("video-playing");

			// PAUSE INITIAL VIDEO
			if ( !$(".home.video").hasClass("cant-play") ) { $("video-container.initial video")[0].pause(); }

			// PLAY MAIN VIDEO
			$("video-container.full video").attr('muted', false);
			$("video-container.full video").attr("volume", 0);
			$("video-container.full video")[0].play();
			$("video-container.full video").animate({volume: 1}, 1000);

		} else {

			// SHOW EMBED
			$("body").addClass("embed-video-playing");

			// PAUSE INITIAL VIDEO
			if ( !$(".home.video").hasClass("cant-play") ) { $("video-container.initial video")[0].pause(); }

		}
	
	});



	/////////////////
	// PAUSE VIDEO //
	/////////////////
	$("body").on("click", ".home stop-button", function(e) {
		e.preventDefault();

		$("body").queue(function(next){

			$("body").removeClass("video-playing");
			$("body").removeClass("embed-video-playing");

			// PLAY INITIAL VIDEO
			if ( !$(".home.video").hasClass("cant-play") ) { $("video-container.initial video")[0].play(); }
			next();

		}).queue(function(next){

			if ( viewport_width > 800 ) {

				// REWIND MAIN VIDEO
				$("video-container.full video").animate({volume: 0}, 1000);
			
			}

			// RESET VIMEO
			vimeoWrap = $('vimeo-popup');
			vimeoWrap.html(vimeoWrap.html());

			next();

		}).delay(1000).queue(function(next){

			if ( viewport_width > 800 ) {

				// REWIND MAIN VIDEO
				$("video-container.full video")[0].pause();
				$("video-container.full video")[0].currentTime = 0;
			
			}

			next();

		});	
	
	});

	///////////////////////////////////////
	// CHANGE THE VIDEO VOLUME ON SCROLL //
	///////////////////////////////////////
	function homeVideoVolume() {

		if ( viewport_width > 800 && $("video-container.full video").length > 0 ) {

			// CALCULATE VOLUME BASED UPON SCROLL POSITION
			var vol = 1 - ( current_scroll / viewport_height );
			if ( vol < 0 ) { vol = 0; }
			vol = vol.toFixed(2)

			// SET THE VOLUMN
			$("video-container.full video")[0].volume = vol;

			if ( current_scroll > viewport_height && $("body").hasClass("video-playing") && !$("body").hasClass("paused") ) {
				$("video-container.full video")[0].pause();
				$("body").addClass("paused");
			}

			if ( current_scroll <= viewport_height && $("body").hasClass("video-playing") && $("body").hasClass("paused") ) {
				$("video-container.full video")[0].play();
				$("body").removeClass("paused");
			}

		}

	}



	/////////////////////////////////////////
	///// LANDING AREA SCROLL ANIMATION /////
	/////////////////////////////////////////
	function aboutLandingAreaScroll() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			////////////////
			// TOP BANNER //
			////////////////
			if ( viewport_width > 1024 ) {

				if ( $(".about-intro").length > 0 ) {

					if ( current_scroll <= viewport_height ) {

						// CALC
						var imageOffset = ( current_scroll / 18 );
						var textOffset = current_scroll / 22;

						// SET
						$(".about-intro image-wrapper figure").css("transform", "translate3d(0," + imageOffset + "%,0)");
						$(".about-intro g-container").css("transform", "translate3d(0," + textOffset + "%,0)");

					}

				}

			} else {

				// RESET
				$(".about-intro image-wrapper figure").css("transform", "");
				$(".about-intro g-container").stop().css({"transform": ""});

			}

			///////////////////
			// LEADING IMAGE //
			///////////////////
			if ( viewport_width > 1024 ) {

				if ( $(".intro-image").length > 0 ) {

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(".intro-image g-col").offset().top;
					var height = $(".intro-image img").outerHeight();
					var diff = current_scroll - offset;

					if ( ( offset - 10 ) < viewport_height ) {

						var bottom_padding = parseInt($(".intro-image + .page-heading").css("padding-bottom")) - 10;

						// CALC
						var imageOffset = current_scroll / 10;
						if ( imageOffset < 40 ) { imageOffset = 40 }
						if ( imageOffset > bottom_padding ) { imageOffset = bottom_padding; }

						// SET
						$(".intro-image img").css("transform", "translate3d(0,-" + imageOffset + "px,0)");

					}

				}

			} else {

				// RESET
				$(".intro-image img").css("transform", "");

			}

		}

	}

	/////////////////////////////
	// RESIZE THE LANDING AREA //
	/////////////////////////////
	function aboutLandingAreaResize(firstrun) {

		if ( $(".about-intro").length > 0 ) {

			// RUN ONLY ON FIRST RUN AND IF THE PAGE WIDTH CHANGES
			if ( firstrun == true || old_viewport_width !== viewport_width || viewport_width > 768 ) {

				// CALC
				var min_height = $(".about-intro content-wrap").outerHeight();
					min_height += 150

				// SET
				$(".about-intro").css({
					"height" : viewport_height,
					"min-height" : min_height
				});

			}

		}

	}

	////////////////////////////////					
	// SKIP THE LOADING ANIMATION //
	////////////////////////////////
	function aboutLandingAreaSkip() {

		if ( $(".intro-image").length > 0 ) {

			$(".intro-image").removeClass("reveal");

		}

	}


	////////////////////////					
	// MEET THE TEAM LINK //
	////////////////////////
	function meetTheTeamLink() {

		// IF STAMP IS ADDED
		if ( $(".stamp.we-are-hiring").length > 0 ) {

			// IF NEXT SECTION IS MEET THE TEAM
			if ( $(".stamp.we-are-hiring").next("section").hasClass("meet-the-team") ) {

				var url = $(".stamp.we-are-hiring a").attr("href");

				// ADD THE BUTTON
				$(".stamp.we-are-hiring").prev("section").find("g-col").append("<a class=\"btn emoji\" href=\"" + url + "\"><span>We are hiring!</span> 👉</a>")

			}

		}

	}


	//////////////////////////////////////
	///// JOURNAL ARCHIVE NEWSLETTER /////
	//////////////////////////////////////
	function journalArchiveNewsletter() {

		if ( $(".archive.journal").length > 0 ) {

			if ( $(".navigation.pagination .page-numbers.current").text() == 1 ) {

				// GET THE POST COUNT AND WORK OUT THE MIDPOINT
				var post_count = $("post-item").length;
					post_count = Math.round(post_count / 2);

				// MOVE THE FORM TO THE RIGHT LOCATION
				$("inline-subscribe").insertAfter( $(".archive.journal archive-posts post-item:eq(" + post_count + ")") );

			} else {

				// REMOVE THE FORM FOR PAGES > 1
				$("inline-subscribe").remove();

			}

		}


	}


	/////////////////////////////////////////
	///// JOURNAL ARCHIVE ITEM PARALLAX /////
	/////////////////////////////////////////
	function journalArchiveItemParallax() {

		if ( viewport_width > 720 ) {

			if ( $(".journal archive-posts post-item").length > 0 ) {

				$(".journal archive-posts post-item").each(function(){

					var elm = $(this).find("item-inner");

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();

					// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
					if ( 
						offset <= ( viewport_height - ( ( viewport_height / 100 ) * 15 ) )
					) {

						// REVEAL IF NOT ALREADY VISIBLE
						if ( !$(this).hasClass("in-viewport") ) { $(this).addClass("in-viewport"); }
						
					}

				});

			}

		} else {

			// RESET
			$(".journal archive-posts post-item").addClass("in-viewport");
			$(".journal archive-posts post-item item-inner").find("figure").css("transform", "");

		}


	}


	/////////////////////////////////////////
	///// JOURNAL ARCHIVE ITEM PARALLAX /////
	/////////////////////////////////////////
	function journalDetailParallax() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) ) {

			if ( viewport_width > 1024 ) {

				// QUOTE
				if ( $(".journal-heading .image").length > 0 ) {

					$(".journal-heading ~ section.quote").each(function(){

						// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
						var offset = $(this).offset().top;
						var height = $(this).outerHeight();

						// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
						if ( offset <= viewport_height ) {

							// REVEAL IF NOT ALREADY VISIBLE
							if ( !$(this).hasClass("in-viewport") ) { $(this).addClass("in-viewport"); }

						}

					});

				}

			} else {

				$(".journal-heading .image figure").css("transform", "");

			}

		}

	}


	$(document).on({
		mouseenter: function() {
			$(this).closest("post-item").addClass("hover");
		},
		mouseleave: function() {
			$(this).closest("post-item").removeClass("hover");
		}
	}, '.archive.journal post-item a');



	/////////////////////////////////////////
	///// LANDING AREA SCROLL ANIMATION /////
	/////////////////////////////////////////
	function portfolioDetailLandingAreaScroll() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			if ( $(".portfolio-detail-intro").length > 0 ) {

				if ( viewport_width > 467 ) {

					if ( current_scroll <= viewport_height ) {

						// CALC
						var imageOffset = ( current_scroll / 18 );
						var textOffset = current_scroll / 22;
						var textOpacity = 1 - ( current_scroll / 750 );
						if ( textOpacity < 0 ) { textOpacity = 0; }
						var textBlur = current_scroll / 200;

						// SET
						$(".portfolio-detail-intro image-wrapper figure").css("transform", "translate3d(0," + imageOffset + "%,0)");
						$(".portfolio-detail-intro g-col").stop().css({
							"transform": "translate3d(0," + textOffset + "%,0)"
						});

					}

				} else {

					// SET
					$(".portfolio-detail-intro image-wrapper figure").css("transform", "");
					$(".portfolio-detail-intro g-col").css({"transform": ""});

				}

			}

		}

	}

	/////////////////////////////////////////
	///// LANDING AREA SCROLL ANIMATION /////
	/////////////////////////////////////////
	function portfolioDetailLandingAreaMinHeight() {

		if ( $(".portfolio-detail-intro").length > 0 ) {

			// RESET
			$(".portfolio-detail-intro").css("min-height", "");

			// GET
			var content_height = $(".portfolio-detail-intro text-content").outerHeight();

			// SET
			$(".portfolio-detail-intro").css("min-height", content_height);

		}

	}



	/////////////////////////////////////////////
	///// PORTFOLIO GRID VIEW ITEM PARALLAX /////
	/////////////////////////////////////////////
	function portfolioGridViewParallax() {

		if ( $(".portfolio.archive .grid a").length > 0 ) {

			if ( viewport_width >= 831 ) {

				$(".portfolio.archive .grid a").each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();

					// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
					if ( 
						offset <= viewport_height
					) {

						// REVEAL IF NOT ALREADY VISIBLE
						if ( !$(this).hasClass("in-viewport") ) {
							
							// REVEAL
							$(this).addClass("in-viewport");

							// TRIGGER IMAGE LOAD
							if ( $(this).find("img").attr("data-src") ) {

								$(this).find("img[data-src]").each(function(){

									// SET THE IMAGE
									$(this).attr("src", $(this).attr("data-src")).fadeIn(500);

									// REMOVE THE PLACEHOLDER
									$(this).removeAttr("data-src");
									$(this).parent().next("loading-spinner").remove();

								});

							}

						}

					}


				});

			} else {

				$(".portfolio.archive .grid a").addClass("in-viewport");

				// TRIGGER IMAGE LOAD
				$(".portfolio.archive .grid a").each(function(){
					
					if ( $(this).find("img").attr("data-src") ) {
						
						$(this).find("img[data-src]").each(function(){

							// SET THE IMAGE
							$(this).attr("src", $(this).attr("data-src")).fadeIn(500);

							// REMOVE THE PLACEHOLDER
							$(this).removeAttr("data-src");
							$(this).parent().next("loading-spinner").remove();

						});

					}

				});

			}

		}

	}


	/////////////////
	// LATEST WORK //
	/////////////////
	function portfolioListViewParallax() {

		// IF WE HAVE A PORTFOLIO ARCHIVE
		if ( $(".portfolio.archive .list").length > 0 ) {

			if ( viewport_width >= 1025 ) {

				// FOR EACH POST
				$(".portfolio.archive .list post-item").each(function(){

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();

					// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
					if ( 
						offset >= ( -Math.abs(height) ) && 		// IS NOT TOO FAR ABOVE
						offset <= ( viewport_height + height )  // OR TOO FAR BELOW
					) {

						// ITEM IS *ACTUALLY* IN THE VIEWPORT
						if ( offset <= viewport_height ) {

							// REVEAL IF NOT ALREADY VISIBLE
							if ( !$(this).hasClass("in-viewport") ) {

								// REVEAL
								$(this).addClass("in-viewport");

								// TRIGGER IMAGE LOAD
								if ( $(this).find("figure").attr("data-image") ) {
						
									$(this).find("figure[data-image]").each(function(){

										// SET THE IMAGE
										$(this).css("background-image", "url(" + $(this).attr("data-image") + ")");

										// REMOVE THE PLACEHOLDER
										$(this).removeAttr("data-image");
										$(this).find("loading-spinner").remove();

									});

								}

							}

							// ONLY RUN IF NOT IE OR SAFARI
							if ( isNaN(ieVersion) && csVersion !== "safari" ) {

								// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
								var element_midpoint = offset + ( height / 2 );
								var diff = viewport_midpoint - element_midpoint;
								
								// CREATE THE PARALLAX OFFSET VALUES
								var image_1_parallax = 30 * ( diff / 600 );
								var image_2_parallax = 30 * ( diff / 600 );
									image_2_parallax = -image_2_parallax;

								// SET THE PARALLAX
								$(this).find("image-content a > figure, image-content a > video-container").css("transform", "translate3d(0," + image_1_parallax + "px,0)");
								$(this).find("secondary-image figure, secondary-image video-container").css("transform", "translate3d(0," + image_2_parallax + "px,0)");

							}

						}

					}

				});

			} else {

				$(".portfolio.archive .list post-item").addClass("in-viewport");
				$(".portfolio.archive .list post-item").find("image-content a > figure, image-content a > video-container").css("transform", "");
				$(".portfolio.archive .list post-item").find("secondary-image figure, secondary-image video-container").css("transform", "");
				$(".portfolio.archive .list post-item").addClass("in-viewport");

				// TRIGGER IMAGE LOAD
				$(".portfolio.archive .list post-item").each(function(){

					if ( $(this).find("figure").attr("data-image") ) {
			
						$(this).find("figure[data-image]").each(function(){

							// SET THE IMAGE
							$(this).css("background-image", "url(" + $(this).attr("data-image") + ")");

							// REMOVE THE PLACEHOLDER
							$(this).removeAttr("data-image");
							$(this).find("loading-spinner").remove();

						});

					}

				});

			}

		}

	}


	////////////////////////////////////
	// TOGGLE ARCHIVE FILTER DROPDOWN //
	////////////////////////////////////
	$("body").on("click", "portfolio-filter current-item", function(e) {

		if ( viewport_width <= 830 ) { $("portfolio-filter").toggleClass("expanded"); }

	});


	//////////////////////////////////
	// SELECT ARCHIVE FILTER OPTION //
	//////////////////////////////////
	$("body").on("click", "portfolio-filter nav a", function(e) {

		// HIDE DROPDOWN
		$("portfolio-filter").removeClass("expanded");

		// UPDATE CURRENT ITEM
		$("portfolio-filter current-item span").text( $(this).text() );

		// SET ACTIVE STATE
		$("portfolio-filter nav a").removeClass("current");
		$(this).addClass("current");

		// GET THE ID OF THE SERVICE
		var term = $(this).attr('id');
			term = parseInt(term.replace('term_',''));

		// WHEN A SERVICE IS CLICKED THEN THE FORM CAN BE SUBMITTED
		$('.clicked_service').val(term).promise().done(function(){
		
			// SUBMIT THE FORM
			$('#filter_by_service').submit();     
		
		});				

	});


	//////////////////////
	// SELECT VIEW MODE //
	//////////////////////
	$("body").on("click", "display-mode a", function(e) {

		// UPDATE THE ICON STATE
		$("display-mode a").removeClass("current");
		$(this).addClass("current");

		// UPDATE THE DISPLAY MODE
		$(".posts").removeClass("grid").removeClass("list").addClass($(this).attr("id"));

		// SUBMIT THE FORM
		$("input.clicked_display").val($(this).attr("id")).promise().done(function(){

			// SUBMIT THE FORM
			$('#filter_by_service').submit();

		});

	});


	///////////////////////////////////////////////////////////////////
	// PORTFOLIO CHANGE VIEW / FILTER - ANIMATION AND APPEND CONTENT //
	///////////////////////////////////////////////////////////////////
	function appendPortfolio(data) {

		$("body").queue(function(next){

			// REVEAL THE LOADING ANIMATION
			$("g-row.loading").show().addClass("animate");
			$("archive-posts").addClass("loading");
			next();

		}).delay(500).queue(function(next){

			// APPEND THE CONTENT
			$('archive-posts').html(data);
			$("g-row.loading").hide().removeClass("animate");

			// HIDE THE LOADING ANIMATION
			next();

		}).queue(function(next){

			// CONTENT FUNCTIONS
			$("archive-posts").removeClass("loading");
			portfolioListViewParallax();
			portfolioGridViewParallax();
			setupVideos();

			// UPDATE PAGE HEIGHT
			page_height = $("page-innercontent").outerHeight();

			// HIDE THE LOADING ANIMATION
			next();

		}).delay(200).queue(function(next){

			ieSucks();
			iePortfolioList();

			// HIDE THE LOADING ANIMATION
			next();

		});

	}

	$(document).on({
		mouseenter: function() {
			$(this).closest("post-item").addClass("hover");
		},
		mouseleave: function() {
			$(this).closest("post-item").removeClass("hover");
		}
	}, '.archive.portfolio post-item a');


	////////////////////////////////////////
	// HEIGHT OF THE PRODUCT LANDING AREA //
	////////////////////////////////////////
	function productLandingAreaSize(firstrun) {

		if ( $(".product-intro").length > 0 ) {

			// RUN ONLY ON FIRST RUN AND IF THE PAGE WIDTH CHANGES
			if ( firstrun == true || old_viewport_width !== viewport_width || viewport_width > 768 ) {

				// GET
				var min_height = $(".product-intro g-col").outerHeight();

				// ADD A 75px MARGIN TOP AND BOTTOM
				var min = min_height + 300;
				if ( viewport_width < 768 ) { min = min_height + 200; }

				// SET
				$(".product-intro").css({
					"height" : viewport_height,
					"min-height" : min
				});

			}

		}

	}


	/////////////////////////////////////////
	///// LANDING AREA SCROLL ANIMATION /////
	/////////////////////////////////////////
	function productLandingAreaScroll() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			if ( viewport_width > 1024 ) {

				if ( $(".product-intro").length > 0 ) {

					if ( current_scroll <= viewport_height ) {

						// CALC
						var imageOffset = ( current_scroll / 18 );
						var logoOffset = current_scroll / 5;

						// SET
						$(".product-intro image-wrapper figure").css("transform", "translate3d(0," + imageOffset + "%,0)");
						$(".product-intro g-container g-col").css({
							"transform": "translate3d(0," + logoOffset + "%,0)"
						});

					}


				}

			} else {

				// RESET
				$(".product-intro image-wrapper figure").css("transform", "");
				$(".product-intro g-container g-col").css({"transform": ""});

			}

		}

	}

	////////////////////////
	// SCROLL TO DISCOVER //
	////////////////////////
	$("body").on("click", ".product-intro scroll-hint", function(e) {
		e.preventDefault();

		$("body").queue(function(next){

			$("page-content").addClass("scrollTo");
			next();

		}).queue(function(next){

			$("page-content").animate({
				scrollTop: $(".product-intro").outerHeight()
			}, 1000);
			next();

		}).delay(1000).queue(function(next){

			$("page-content").removeClass("scrollTo");
			next();

		})
	
	});


	//////////////////////////////////////////////////
	///// HOME PAGE ELEMENT POSITIONING FUNCTION /////
	//////////////////////////////////////////////////
	var hb_gallery_count = 0;
	var hb_timer = 4000;
	function handbookGalleries() {

		if ( $("section.handbook-heading gallery-wrapper").length > 0 ) {

			$("section.handbook-heading gallery-wrapper").each(function(){

				hb_gallery_count++;
				var time = hb_timer + ( 1000 * hb_gallery_count );

				var elm = $(this);

				setInterval(function(){

					// TOTAL NUMBER OF SLIDES
					var total = elm.find("figure").length;

					// THE CURRENT SLIDE
					var current = elm.find("figure.current").index();
					if ( current < 0 ) { current = 1; }
					
					// THE NEXT
					var next = current + 1;
					if ( next >= total ) { next = 0; }

					// UPDATE
					elm.find("figure").removeClass("current");
					elm.find("figure:eq(" + next + ")").addClass("current");


				}, time);

			});

		}

	}

	/////////////////////////////////////
	// HEIGHT OF THE HOME LANDING AREA //
	/////////////////////////////////////
	function handbookLandingHeight(firstrun) {

		// RUN ONLY ON FIRST RUN AND IF THE PAGE WIDTH CHANGES
		if ( firstrun == true || old_viewport_width !== viewport_width || viewport_width > 768 ) {

			var height = (viewport_height * 1.2);
			if ( viewport_width < 1025 )  { height = viewport_height; }

			// SET
			$(".handbook-heading").css({
				"height" : height
			});

		}

	}

	/////////////////////////////////
	///// LANDING AREA PARALLAX /////
	/////////////////////////////////
	function handbookLandingParallax() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			////////////////
			// TOP BANNER //
			////////////////
			if ( viewport_width > 1024 ) {

				if ( $("section.handbook-heading").length > 0 ) {

					if ( current_scroll <= ( viewport_height * 1.5 ) ) {

						// CALC
						var imageOffset1 = ( current_scroll / 14 );
						var imageOffset2 = ( current_scroll / 8 );
						var imageOffset3 = ( current_scroll / 12 );
						var imageOffset4 = ( current_scroll / 10 );

						var textOffset = current_scroll / 30;

						// SET
						$("section.handbook-heading gallery-wrapper:first-child figure").css("transform", "translate3d(0," + imageOffset1 + "%,0)");
						$("section.handbook-heading gallery-wrapper:first-child + gallery-wrapper figure").css("transform", "translate3d(0," + imageOffset2 + "%,0)");
						$("section.handbook-heading gallery-wrapper:first-child + gallery-wrapper + gallery-wrapper figure").css("transform", "translate3d(0," + imageOffset3 + "%,0)");
						$("section.handbook-heading gallery-wrapper:first-child + gallery-wrapper + gallery-wrapper + gallery-wrapper figure").css("transform", "translate3d(0," + imageOffset4 + "%,0)");

						$("section.handbook-heading g-container").css("transform", "translate3d(0," + textOffset + "%,0)");

					}

				}

			} else {

				// RESET
				$("section.handbook-heading gallery-wrapper figure").stop().css("transform", "");
				$("section.handbook-heading g-container").stop().css({"transform": ""});

			}

		}

	}


	//////////////////////////////////////
	///// HANDBOOK TABLE OF CONTENTS /////
	//////////////////////////////////////
	function handbookPopulateTOC() {

		if ( $("section.handbook-heading").length > 0 ) {

			$("body").queue(function(next){

				var section_count = 0;

				$("section.handbook-section").each(function(){

					// INCREMENT SECTION COUNTER
					section_count++;
					var this_section = section_count;

					// SUB HEADINGS
					var subsections = "";
					
					// OPEN UL
					if ( $(this).next(".wysiwyg").find("h3").length > 0 ) { subsections += "<ul>"; }
					
					// FOR EACH SUBSECTION
					$(this).next(".wysiwyg").find("h3").each(function(){

						// INCREMENT SUBSECTION ID
						section_count++;

						// DATA ATTRIBUTE
						$(this).attr("id", "section_" + section_count);

						// LINK
						subsections += "<li><a href=\"#section_" + section_count + "\">" + $(this).text() + "</a></li>";

					});

					// CLOSE UL
					if ( $(this).find("h3").length > 0 ) { subsections += "</ul>"; }

					// SECTION NUMBER
					$(this).attr("id", "section_" + this_section);

					// APPEND SECTION LINK
					$("handbook-contents ol").append("<li><a href=\"#section_" + this_section + "\">" + $(this).find("h2").text() + "</a>" + subsections + "</li>");

					// SET THE FIRST ITEM AS CURRENT
					$("handbook-contents current-item span").text("01. " + $("handbook-contents ol > li:first-of-type a").text());

				});

			next();}).queue(function(next){

				// MOVE INTO THE FIRST SECTION
				$("handbook-contents").prependTo( $("#section_1").next("section.wysiwyg").find("g-col:last-child") );

			next();})

		}

	}

	///////////////////////////////////////////////
	///// POSITION HANDBOOK TABLE OF CONTENTS /////
	///////////////////////////////////////////////
	function handbookPositionTOC() {

		if ( $("handbook-contents").length > 0 ) {

			if ( viewport_width > 1024 ) {

				// WIDTH
				var width = $("handbook-contents").parent().width();
				$("handbook-contents").width(width);

				// PADDING
				var padding = parseInt($("handbook-contents").closest("section").css("padding-top"));

				// IS FIXED?
				var parentOffset = $("handbook-contents").closest("section").offset().top + ( padding / 2 );

				if ( parentOffset < 0 )
					{ $("handbook-contents").addClass("fixed").css("top", ( padding / 2 )); } else
					{ $("handbook-contents").removeClass("fixed"); }

			} else {

				$("handbook-contents").css({"top": "", "width": ""}).removeClass("fixed");

			}

		}

	}


	///////////////////////////////////////////////
	///// POSITION HANDBOOK TABLE OF CONTENTS /////
	///////////////////////////////////////////////
	function handbookActiveState() {

		if ( $("handbook-contents").length > 0 ) {

			//////////////
			// SECTIONS //
			//////////////
			$("handbook-contents ol > li > a").each(function(){

				// GET OFFSET
				var section = $(this).attr("href");
				var offset = $("section" + section).offset().top;

				// CHECK
				if ( offset <= 50 ) {

					$("handbook-contents ol > li > a").parent().removeClass("current");
					$("handbook-contents ol ul a").parent().removeClass("current");
					$(this).parent().addClass("current");

					// SET THE CURRENT ITEM
					var index = $(this).parent().index();
					if ( index < 10 ) { index = "0" + index + ". "; }
					$("handbook-contents current-item span").text(index + $(this).text());

				}

			});

			//////////////////
			// SUB-SECTIONS //
			//////////////////
			$("handbook-contents ol ul li a").each(function(){

				// GET OFFSET
				var section = $(this).attr("href");
				var offset = $("h3" + section).offset().top;

				// CHECK
				if ( offset <= 50 ) {

					$("handbook-contents ol ul li").removeClass("current");
					$(this).parent().addClass("current");

				}

			});

		}

	}

	/////////////////////////////////////////////////////////////
	///// COLOUR CHANGE LINKS OF HANDBOOK TABLE OF CONTENTS /////
	/////////////////////////////////////////////////////////////
	function handbookColourChange() {

		if ( $("handbook-contents").length > 0 ) {

			if ( viewport_width > 1024 ) {

				var start = "";
				var stop = "";

				// FIND THE NEXT SECTION HEADING
				$(".handbook-section").each(function(){

					if (

						$(this).offset().top >= -Math.abs($(this).outerHeight())

					) {

						start = Math.round($(this).offset().top);
						stop = Math.round($(this).offset().top + $(this).outerHeight());
						return false;

					}

				});

				$("handbook-contents ol a").each(function(){

					var midpoint = $(this).offset().top + ( $(this).outerHeight() / 2 );

					if ( midpoint >= start && midpoint <= stop )
						{ $(this).parent().addClass("white"); } else
						{ $(this).parent().removeClass("white"); }

				});

			} else {


				if ( $("handbook-contents ol li").hasClass("white") ) {
					$("handbook-contents ol li").removeClass("white");
				}

			}

		}

	}


	//////////////////////////////////////////////////////////
	///// HIDE THE HANDBOOK TABLE OF CONTENTS AT THE END /////
	//////////////////////////////////////////////////////////
	function handbookTOCHide() {

		if ( $("handbook-contents").length > 0 ) {
		
			if ( viewport_width > 1024 ) {

				var toc_height = $("handbook-contents").outerHeight();

				var footer_offset = $("footer").offset().top;
				var footer = footer_offset - ( toc_height * 2 );

				if ( footer <= 0 )
					{ $("handbook-contents").addClass("hidden"); } else
					{ $("handbook-contents").removeClass("hidden"); }

			} else {

				if ( viewport_width <= 468 ) {

					if ( current_scroll > 100 )
						{ $("handbook-contents").removeClass("hidden"); } else
						{ $("handbook-contents").addClass("hidden");}

				} else {

					$("handbook-contents").removeClass("hidden");

				}

			}

		}

	}


	///////////////
	// HIDE MENU //
	///////////////
	$("body").on("click", "handbook-contents ol a", function(e) {
		$("handbook-contents").removeClass("expanded");
	});

	//////////////////////////////////z
	// HIDE MENU WHEN CLICK OUTSIDE //
	//////////////////////////////////

	$(document).click(function() {
		$("handbook-contents").removeClass("expanded");
	});

	$("handbook-contents current-item").click(function(event) {
	    $("handbook-contents").addClass("expanded");
	    event.stopPropagation();
	});


	//////////////////////
	// FULL WIDTH IMAGE //
	//////////////////////
	function handbookSectionImage() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) ) {

			if ( viewport_width >= 768 ) {

				// FOR EACH BLOCK
				$("section.handbook-section").each(function(){

					var elm = $(this);

					// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
					var offset = elm.offset().top;
					var height = elm.outerHeight();


					// CHECK ITEM IS IN RANGE OF THE VIEWPORT
					if ( 
						offset <= viewport_height && // IS NOT TOO FAR ABOVE
						offset >= -Math.abs(height)
					) {

						// REVEAL IF NOT ALREADY VISIBLE				
						if ( !elm.hasClass("in-viewport") ) {
							elm.addClass("in-viewport");
						}

						// ONLY RUN IF NOT IE
						if ( csVersion !== "safari" ) {

							var diff = current_scroll - offset;

							// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
							var element_midpoint = offset + ( height / 2 );
							var diff = viewport_midpoint - element_midpoint;
							
							// CREATE THE PARALLAX OFFSET VALUES
							var parallax = 30 * ( diff / 350 );

							// SET THE INLINE STYLING
							elm.find("image-wrapper figure").css("transform", "translate3d(0,0,0) translateY(" + parallax + "px)");

						}

					} else {

						// REMOVE THE INLINE STYLING
						if ( elm.hasClass("in-viewport") ) {
							elm.removeClass("in-viewport");
							elm.find("image-wrapper figure").css("transform", "");
						}

					}

				});

			} else {

				$("section.handbook-section figure").css("transform", "");

			}

		}

	}



	///////////////////////
	// CONTACT SLIDESHOW //
	///////////////////////
	function contact() {

		// ONLY RUN IF NOT IE
		if ( isNaN(ieVersion) && csVersion !== "safari" ) {

			if ( viewport_width >= 1025 ) {

				// IF WE HAVE A LATEST WORK BLOCK
				if ( $("section.address").length > 0 ) {

					// FOR EACH BLOCK
					$("section.address .slide").each(function(){

						// GET THE DISTANCE FROM THE TOP OF THE SCREEN AND THE HEIGHT
						var offset = $(this).offset().top;
						var height = $(this).outerHeight();

						// CHECK ITEM IS IN RANGE OF THE VIEWPORT AND IF IS...
						if ( 
							offset >= ( -Math.abs(height) ) && 		// IS NOT TOO FAR ABOVE
							offset <= ( viewport_height + height )  // OR TOO FAR BELOW
						) {

							// ITEM IS *ACTUALLY* IN THE VIEWPORT
							if ( offset <= viewport_height ) {

								// WORK OUT HOW CLOSE TO THE VIEWPORT MIDPOINT IS THE ELEMENT
								var element_midpoint = offset + ( height / 2 );
								var diff = viewport_midpoint - element_midpoint;
								
								// CREATE THE PARALLAX OFFSET VALUES
								var image_parallax = 30 * ( diff / 200 );

								// SET THE PARALLAX
								$(this).find("figure").css("transform", "translate3d(0," + image_parallax + "px,0)");

							}

						}

					});

				}

			} else {

				if ( $("section.address").length > 0 ) {
					$("section.address .slide").find("figure").css("transform", "");
				}

			}

		}

	}


	/////////////////////////////////////////
	// REDIRECT TO ANOTHER PAGE ON SUCCESS //
	/////////////////////////////////////////
	if ( $(".contact .wpcf7-submit").length > 0 ) {

		$(".contact .wpcf7-submit span").text("💌");

	}

	////////////////////////////////////
	// SET THE WIDTH OF THE SLIDESHOW //
	////////////////////////////////////
	function addressSlideshowWidth() {

		// IF WE HAVE A LATEST WORK BLOCK
		if ( $("section.address").length > 0 ) {

			if ( viewport_width >= 1025 ) {

				if ( viewport_width <= 468 ) { var padding = 20; } else { var padding = 10; }

				var margin = parseInt($("section.address").find("g-container").find("g-col").css("margin-left"));
				var offset = parseInt($("section.address").find("g-container").offset().left);
				var width = parseInt($("section.address").find("g-container").find("g-col").outerWidth());
				var width = parseInt(offset + margin + padding + width + (padding / 2));

				$("slideshow-outer").css("width", width);

			} else {

				$("slideshow-outer").css("width", "100%");

			}

		}

	}

	// CLICK OFF CLOSE FOR MOBILE
	$(document).on("click", function(e) {
		if ($(e.target).is(".wales") === false) {
			$(".wales").removeClass("itsnotwhalesyoumuppet");
		}

		if ($(e.target).is(".made-in-wales a") === false) {
			$(".made-in-wales a").removeClass("itsnotwhalesyoumuppet");
		}
	});

	
	/////////////////////////////////////////////////////
	// FALLBACK IMAGERY FOR IE AND OLDER EDGE BROWSERS //
	/////////////////////////////////////////////////////
	function ieSucks() {

		// ONLY RUN IF NOT IE
		if ( !isNaN(ieVersion) && ieVersion < 16 ) {

			$("figure:not(.fallback)").each(function(){

				// IF HAS A CHILD IMG
				if ( $(this).find("> img").length == 1 ) {

					// GET THE IMAGE URL
					var url = $(this).find("> img").attr("src");

					// IF WE HAVE A VALID URL
					if ( url !== undefined ) {

						// REMOVE THE IMAGE
						$(this).find("> img").remove();

						// SET THE FIGURE IMAGE URL
						$(this).css("background-image", "url('" + url + "')");

						// ADD THE IMAGE
						$(this).addClass("fallback");

					}

				}

			});

		}

	}


	function ieLatestWork() {

		// ONLY RUN IF NOT IE
		if ( !isNaN(ieVersion) && ieVersion < 16 ) {

			// IF WE HAVE A LATEST WORK BLOCK
			if ( $("section.latest-work.list").length > 0 ) {

				if ( viewport_width > 1024 ) {

					$("section.latest-work.list").each(function(){

						$(this).find("post-item").each(function(){

							var text_height = $(this).find("text-content").outerHeight();
							var content_height = $(this).find("content-inner").outerHeight();

							var top = ( text_height - content_height ) / 2;
							$(this).find("content-inner").css("top", top);

						});

					});

				} else {

					$("section.latest-work.list content-inner").css("top", "");

				}

			}

		}

	}


	function iePortfolioList() {

		// ONLY RUN IF NOT IE
		if ( !isNaN(ieVersion) && ieVersion < 16 ) {

			// IF WE HAVE A LATEST WORK BLOCK
			if ( $("section.portfolio.archive .posts.list").length > 0 ) {

				if ( viewport_width > 1024 ) {

					$(this).find("post-item").each(function(){

						var text_height = $(this).find("text-content").outerHeight();
						var content_height = $(this).find("content-inner").outerHeight();

						var top = ( text_height - content_height ) / 2;
						$(this).find("content-inner").css("top", top);

					});

				} else {

					$("section.portfolio.archive .posts.list content-inner").css("top", "");

				}

			}

		}

	}


	function ieHeightMatch() {

		matchElementHeights($(".ie11 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie12 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie13 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie14 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie15 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie16 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie17 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie18 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie19 .formatted-ordered-list li"), 641, null);
		matchElementHeights($(".ie20 .formatted-ordered-list li"), 641, null);

		matchElementHeights($(".ie11 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie12 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie13 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie14 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie15 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie16 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie17 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie18 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie19 .portfolio.archive .grid archive-posts > a"), 641, null);
		matchElementHeights($(".ie20 .portfolio.archive .grid archive-posts > a"), 641, null);

	}


	/////////////////////
	///// DETECT IE /////
	/////////////////////
	function detectIE() {
		var a = window.navigator.userAgent,
		b = a.indexOf("MSIE ");
		if (b > 0) return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
		var c = a.indexOf("Trident/");
		if (c > 0) {
			var d = a.indexOf("rv:");
			return parseInt(a.substring(d + 3, a.indexOf(".", d)), 10)
		}
		var e = a.indexOf("Edge/");
		return e > 0 && parseInt(a.substring(e + 5, a.indexOf(".", e)), 10)
	}


	/////////////////////////
	///// DETECT SAFARI /////
	/////////////////////////
	function detectSafariChrome() {
		var ua = navigator.userAgent.toLowerCase(); 
		if (ua.indexOf('safari') != -1) { 
			if (ua.indexOf('chrome') > -1) {
				return "chrome";
			} else {
				return "safari";
			}
		}
	}

	function detectFirefox() {
		var ua = navigator.userAgent.toLowerCase();
		if(ua.indexOf('firefox') > -1){ return "firefox"; }
	}


	// DETECT IE(X)
	var ieVersion = parseInt(detectIE());
	if ( !isNaN(ieVersion) && ( ieVersion !== 1 || ieVersion < 12 ) ) { $("html").addClass("ie" + ieVersion); }

	// DETECT SAFARI / CHROME
	var csVersion = detectSafariChrome();
	$("html").addClass(csVersion);

	// DETECT FIREFOX
	var ffVersion = detectFirefox();
	$("html").addClass(ffVersion);


	////////////////////////////
	///// SMOOTH SCROLLING /////
	////////////////////////////
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		var baseURL = $("section.contact").attr("data-url");
		location = baseURL + '/thank-you-for-your-message/';
	}, false );


	/////////////////////////
	///// VIEWPORT VARS /////
	/////////////////////////

	// SCREEN WIDTH
	var old_viewport_width;
	var viewport_width = $("body").outerWidth();


	// SCREEN HEIGHT
	var viewport_height = window.innerHeight;
	var viewport_midpoint = viewport_height / 2;

	// CURRENT SCROLL
	var current_scroll = parseInt($("page-content").scrollTop());

	// DOCUMENT HEIGHT
	var page_height = $("page-innercontent").outerHeight();

	/////////////////////////////////////////////////
	// ADD FUNCTIONS TO RUN ON DOCUMENT READY HERE //
	/////////////////////////////////////////////////
	function runOnReveal() {

		// TILT LOGO (NOT ON SAFARI)
		if ( !$("html").hasClass("safari") ) {
			$("sticky-header").tilt({
				glare: true,
				maxGlare: .3,
				maxTilt: 30
			});
		}

		// HEADER & FOOTER
		header();
		footer();
		positionSeb();
		seb();
		footerAnimation();
		setupVideoFeed();
		footerMenu();

		// ENABLE SLIDESHOWS
		enableSlideshows();
		addressSlideshowWidth();

		// PAGE SECTIONS
		awards();
		embed();
		expandingImageBlock();
		fullscreenImage();
		fullscreenStatement();
		galleries();
		keyPointsList();
		latestWork();
		lovieCTA();
		orderedList();
		ourServices();
		meetTheTeam();
		twoColumnContent();
		wysiwyg();
		clientLogos();
		gallerySlideshows();
		ieSucks();
		ieLatestWork();
		inlineSubscribe();
		keyPointsBullets();

		// HOMEPAGE
		homePagePositioning();
		homePageSize(true);
		homeLandingAreaScroll();
		homeLandingVideoScroll();
		homeVideoVolume();

		// CONTACT
		//contact();

		// ABOUT
		aboutLandingAreaScroll();
		aboutLandingAreaResize(true);
		meetTheTeamLink();

		// JOURNAL
		journalArchiveItemParallax();
		journalDetailParallax();

		// PORTFOLIO
		portfolioDetailLandingAreaMinHeight();

		// PRODUCT
		productLandingAreaSize(true);
		productLandingAreaScroll();

		// HANDBOOK
		handbookLandingHeight(true);
		handbookGalleries();
		handbookLandingParallax();
		handbookPopulateTOC();
		handbookTOCHide();
		handbookSectionImage();

		// IE
		ieHeightMatch();
		iePortfolioList();

		if ( $("body").hasClass("project-template-default") ) {
			$("body").delay(100).queue(function(next){
				var page_height = $("page-innercontent").outerHeight();
			});
		}
	
	}


	///////////////////////////////////////////////////////////
	// UPDATE FUNCTION - ADD FUNCTIONS TO RUN ON SCROLL HERE //
	///////////////////////////////////////////////////////////
	function runOnScroll() {

		// DISABLE TICK FOR NEXT SCROLL
		ticking = false;

		// SCROLL DIRECTION DETECTION
		detectScroll();

		// FOOTER
		footer();
		footerParallax();
		footerAnimation();

		// PAGE SECTIONS
		awards();
		embed();
		expandingImageBlock();
		fullscreenImage();
		fullscreenStatement();
		galleries();
		introRevealOnScroll();
		keyPointsList();
		latestWork();
		lovieCTA();
		orderedList();
		ourServices();
		meetTheTeam();
		twoColumnContent();
		wysiwyg();
		clientLogos();
		inlineSubscribe();

		// HOMEPAGE
		homePagePositioning();
		homeLandingAreaScroll();
		homeLandingVideoScroll();
		homeVideoVolume();

		// CONTACT
		//contact();

		// ABOUT
		aboutLandingAreaScroll();
		aboutLandingAreaSkip();

		// JOURNAL
		journalArchiveItemParallax();
		journalDetailParallax();

		// PORTFOLIO
		portfolioDetailLandingAreaScroll();
		portfolioListViewParallax();
		portfolioGridViewParallax();

		// PRODUCT
		productLandingAreaScroll();

		// HANDBOOK
		handbookLandingParallax();
		handbookPositionTOC();
		handbookActiveState();
		handbookColourChange();
		handbookTOCHide();
		handbookSectionImage();

		// IE
		ieSucks();

	}

	//////////////////////////////////
	// GLOBAL 'ON DOC READY' EVENTS //
	//////////////////////////////////
	$(document).ready(function(){

		// REMOVE THE HOMEPAGE LINK FROM THE MAIN NAV
		$("header-top nav ul li:first-child").remove();

		// UPDATE THE PAGE HEIGHT
		page_height = $("page-innercontent").outerHeight();

		// NEWSLETTER
		journalArchiveNewsletter();

		// REVEAL THE UI
		reveal();

		$("page-innercontent").focus();

	});


	/////////////////////////////
	// GLOBAL 'ON LOAD' EVENTS //
	/////////////////////////////
	$(window).load(function(){

		///////////////////////////////////////////////////
		// ADD THE EMOJI TO THE COOKIE POLICY ACCEPTANCE //
		///////////////////////////////////////////////////
		$("#cn-accept-cookie").html("Got It <span>🍪</span>");

		// PORTFOLIO LOADING
		if ( $('#filter_by_service').length > 0 ) {


			// IF HASH IS SET, CHECK THE FILTER
			if ( window.location.hash ) {

				var hash = window.location.hash.replace("#","");

				// IF THE OPTION EXISTS...
				if ( $("portfolio-filter a[data-slug=\"" + hash + "\"]").length > 0 ) {

					// CLICK IT
					$("portfolio-filter a[data-slug=\"" + hash + "\"]").trigger("click");

				// OTHERWISE
				} else {

					// DEFAULT LOAD
					$('display-mode #grid').trigger("click");

				}		

			} else {

				// DEFAULT LOAD
				$('display-mode #grid').trigger("click");

			}

		}

		// SETUP VIDEOS
		setupVideos();

		$("body").queue(function(next){
			// HEADINGS
			pageHeadings();
			videoHeading();
			next();
		}).delay(50).queue(function(next){
			// REVEAL HEADINGS
			if ( $(".home.video").length > 0 ) { $("body").addClass("video-loaded"); }
			introRevealOnScroll();
			next();
		})

			

		//////////////////////
		// STAGCAM AUTOLOAD //
		//////////////////////
		var stagcam = getUrlParameter("stagcam");
		if ( stagcam == true ) { openStagCam(); }

	});


	///////////////////////////////
	// GLOBAL 'ON RESIZE' EVENTS //
	///////////////////////////////
	$(window).resize(function(){

		// SCREEN VARS
		old_viewport_width = viewport_width;
		viewport_width = $("body").outerWidth();
		viewport_height = window.innerHeight;
		viewport_midpoint = viewport_height / 2;
		page_height = $("page-innercontent").outerHeight();

		// HEADER & FOOTER
		header();
		footer();
		positionSeb();
		footerMenu();

		// ENABLE SLIDESHOWS
		addressSlideshowWidth();

		// SETUP VIDEOS
		setupVideos();

		// PAGE SECTIONS
		awards();
		embed();
		expandingImageBlock();
		fullscreenImage();
		fullscreenStatement();
		galleries();
		introRevealOnScroll();
		keyPointsList();
		latestWork();
		lovieCTA();
		orderedList();
		ourServices();
		meetTheTeam();
		pageHeadings();
		videoHeading();
		twoColumnContent();
		wysiwyg();
		ieLatestWork();
		inlineSubscribe();

		$("body").delay(100).queue(function(next){
			gallerySlideshows(); next();
		})


		// HOMEPAGE
		homePagePositioning();
		homePageSize(false);
		homeLandingAreaScroll();
		homeLandingVideoScroll();

		// CONTACT
		//contact();

		// ABOUT
		aboutLandingAreaScroll();
		aboutLandingAreaResize(false);

		// JOURNAL
		journalArchiveItemParallax();
		journalDetailParallax();

		// PORTFOLIO
		portfolioDetailLandingAreaMinHeight();
		portfolioListViewParallax();
		portfolioGridViewParallax();

		// PRODUCT
		productLandingAreaSize();
		productLandingAreaScroll(false);

		// HANDBOOK
		handbookLandingHeight(false);
		handbookLandingParallax();
		handbookPositionTOC();
		handbookActiveState();
		handbookColourChange();
		handbookTOCHide();
		handbookSectionImage();
		
		// IE
		ieHeightMatch();
		iePortfolioList();

	});


	///////////////////////////////
	// GLOBAL 'ON SCROLL' EVENTS //
	///////////////////////////////
	$("page-content").scroll(function(){

		// UPDATE CURRENT SCROLL VAR
		current_scroll = parseInt($("page-content").scrollTop());

		// SCROLL ANIMATION HANDLER
		onScroll();

	});


	///////////////////////////////
	// GLOBAL 'CLICK-OFF' EVENTS //
	///////////////////////////////
	$(document).click(function(e) {

	});


	///////////////////////////////////
	// GLOBAL 'ON ESCAPE KEY' EVENTS //
	///////////////////////////////////
	$(document).keyup(function(e) { if (e.keyCode == 27) {

	}});
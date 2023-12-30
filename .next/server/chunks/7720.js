"use strict";exports.id=7720,exports.ids=[7720],exports.modules={55229:(e,i,r)=>{var t;(()=>{var o={226:function(o,a){!function(s,n){var u="function",b="undefined",d="object",l="string",c="major",w="model",p="name",m="type",g="vendor",h="version",f="architecture",v="console",x="mobile",k="tablet",y="smarttv",_="wearable",A="embedded",R="Amazon",P="Apple",U="ASUS",S="BlackBerry",q="Browser",N="Chrome",T="Firefox",E="Google",z="Huawei",M="Microsoft",O="Motorola",j="Opera",B="Samsung",C="Sharp",I="Sony",L="Xiaomi",F="Zebra",G="Facebook",D="Chromium OS",V="Mac OS",extend=function(e,i){var r={};for(var t in e)i[t]&&i[t].length%2==0?r[t]=i[t].concat(e[t]):r[t]=e[t];return r},enumerize=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},has=function(e,i){return typeof e===l&&-1!==lowerize(i).indexOf(lowerize(e))},lowerize=function(e){return e.toLowerCase()},trim=function(e,i){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof i===b?e:e.substring(0,350)},rgxMapper=function(e,i){for(var r,t,o,a,s,b,l=0;l<i.length&&!s;){var c=i[l],w=i[l+1];for(r=t=0;r<c.length&&!s&&c[r];)if(s=c[r++].exec(e))for(o=0;o<w.length;o++)b=s[++t],typeof(a=w[o])===d&&a.length>0?2===a.length?typeof a[1]==u?this[a[0]]=a[1].call(this,b):this[a[0]]=a[1]:3===a.length?typeof a[1]!==u||a[1].exec&&a[1].test?this[a[0]]=b?b.replace(a[1],a[2]):n:this[a[0]]=b?a[1].call(this,b,a[2]):n:4===a.length&&(this[a[0]]=b?a[3].call(this,b.replace(a[1],a[2])):n):this[a]=b||n;l+=2}},strMapper=function(e,i){for(var r in i)if(typeof i[r]===d&&i[r].length>0){for(var t=0;t<i[r].length;t++)if(has(i[r][t],e))return"?"===r?n:r}else if(has(i[r],e))return"?"===r?n:r;return e},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},W={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[p,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,h],[/opios[\/ ]+([\w\.]+)/i],[h,[p,j+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[p,j]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[p,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[p,"UC"+q]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[p,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[p,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[p,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure "+q],h],[/\bfocus\/([\w\.]+)/i],[h,[p,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[p,j+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[p,j+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[p,"MIUI "+q]],[/fxios\/([-\w\.]+)/i],[h,[p,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+q]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1 "+q],h],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[p,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,G],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[p,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[p,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[p,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[p,N+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,N+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[p,"Android "+q]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[p,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[h,strMapper,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[p,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[p,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[p,h],[/(cobalt)\/([\w\.]+)/i],[p,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[w,[g,B],[m,k]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[w,[g,B],[m,x]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[w,[g,P],[m,x]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[w,[g,P],[m,k]],[/(macintosh);/i],[w,[g,P]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[w,[g,C],[m,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[w,[g,z],[m,k]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[w,[g,z],[m,x]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[w,/_/g," "],[g,L],[m,x]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[w,/_/g," "],[g,L],[m,k]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[w,[g,"OPPO"],[m,x]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[w,[g,"Vivo"],[m,x]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[w,[g,"Realme"],[m,x]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[w,[g,O],[m,x]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[w,[g,O],[m,k]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[w,[g,"LG"],[m,k]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[w,[g,"LG"],[m,x]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[w,[g,"Lenovo"],[m,k]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[w,/_/g," "],[g,"Nokia"],[m,x]],[/(pixel c)\b/i],[w,[g,E],[m,k]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[w,[g,E],[m,x]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[w,[g,I],[m,x]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[w,"Xperia Tablet"],[g,I],[m,k]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[w,[g,"OnePlus"],[m,x]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[w,[g,R],[m,k]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[w,/(.+)/g,"Fire Phone $1"],[g,R],[m,x]],[/(playbook);[-\w\),; ]+(rim)/i],[w,g,[m,k]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[w,[g,S],[m,x]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[w,[g,U],[m,k]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[w,[g,U],[m,x]],[/(nexus 9)/i],[w,[g,"HTC"],[m,k]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[w,/_/g," "],[m,x]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[w,[g,"Acer"],[m,k]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[w,[g,"Meizu"],[m,x]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,w,[m,x]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[g,w,[m,k]],[/(surface duo)/i],[w,[g,M],[m,k]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[w,[g,"Fairphone"],[m,x]],[/(u304aa)/i],[w,[g,"AT&T"],[m,x]],[/\bsie-(\w*)/i],[w,[g,"Siemens"],[m,x]],[/\b(rct\w+) b/i],[w,[g,"RCA"],[m,k]],[/\b(venue[\d ]{2,7}) b/i],[w,[g,"Dell"],[m,k]],[/\b(q(?:mv|ta)\w+) b/i],[w,[g,"Verizon"],[m,k]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[w,[g,"Barnes & Noble"],[m,k]],[/\b(tm\d{3}\w+) b/i],[w,[g,"NuVision"],[m,k]],[/\b(k88) b/i],[w,[g,"ZTE"],[m,k]],[/\b(nx\d{3}j) b/i],[w,[g,"ZTE"],[m,x]],[/\b(gen\d{3}) b.+49h/i],[w,[g,"Swiss"],[m,x]],[/\b(zur\d{3}) b/i],[w,[g,"Swiss"],[m,k]],[/\b((zeki)?tb.*\b) b/i],[w,[g,"Zeki"],[m,k]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[g,"Dragon Touch"],w,[m,k]],[/\b(ns-?\w{0,9}) b/i],[w,[g,"Insignia"],[m,k]],[/\b((nxa|next)-?\w{0,9}) b/i],[w,[g,"NextBook"],[m,k]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[g,"Voice"],w,[m,x]],[/\b(lvtel\-)?(v1[12]) b/i],[[g,"LvTel"],w,[m,x]],[/\b(ph-1) /i],[w,[g,"Essential"],[m,x]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[w,[g,"Envizen"],[m,k]],[/\b(trio[-\w\. ]+) b/i],[w,[g,"MachSpeed"],[m,k]],[/\btu_(1491) b/i],[w,[g,"Rotor"],[m,k]],[/(shield[\w ]+) b/i],[w,[g,"Nvidia"],[m,k]],[/(sprint) (\w+)/i],[g,w,[m,x]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[g,M],[m,x]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[w,[g,F],[m,k]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[w,[g,F],[m,x]],[/smart-tv.+(samsung)/i],[g,[m,y]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[g,B],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,"LG"],[m,y]],[/(apple) ?tv/i],[g,[w,P+" TV"],[m,y]],[/crkey/i],[[w,N+"cast"],[g,E],[m,y]],[/droid.+aft(\w)( bui|\))/i],[w,[g,R],[m,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[w,[g,C],[m,y]],[/(bravia[\w ]+)( bui|\))/i],[w,[g,I],[m,y]],[/(mitv-\w{5}) bui/i],[w,[g,L],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[g,w,[m,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[g,trim],[w,trim],[m,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[g,w,[m,v]],[/droid.+; (shield) bui/i],[w,[g,"Nvidia"],[m,v]],[/(playstation [345portablevi]+)/i],[w,[g,I],[m,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[w,[g,M],[m,v]],[/((pebble))app/i],[g,w,[m,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[w,[g,P],[m,_]],[/droid.+; (glass) \d/i],[w,[g,E],[m,_]],[/droid.+; (wt63?0{2,3})\)/i],[w,[g,F],[m,_]],[/(quest( 2| pro)?)/i],[w,[g,G],[m,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[m,A]],[/(aeobc)\b/i],[w,[g,R],[m,A]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[w,[m,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[w,[m,k]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[m,k]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[m,x]],[/(android[-\w\. ]{0,9});.+buil/i],[w,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[p,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[p,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[p,[h,strMapper,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,"Windows"],[h,strMapper,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[p,V],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[p,h],[/\(bb(10);/i],[h,[p,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[p,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[p,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[p,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[p,N+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[p,D],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[p,h],[/(sunos) ?([\w\.\d]*)/i],[[p,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[p,h]]},UAParser=function(e,i){if(typeof e===d&&(i=e,e=n),!(this instanceof UAParser))return new UAParser(e,i).getResult();var r=typeof s!==b&&s.navigator?s.navigator:n,t=e||(r&&r.userAgent?r.userAgent:""),o=r&&r.userAgentData?r.userAgentData:n,a=i?extend(W,i):W,v=r&&r.userAgent==t;return this.getBrowser=function(){var e,i={};return i[p]=n,i[h]=n,rgxMapper.call(i,t,a.browser),i[c]=typeof(e=i[h])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:n,v&&r&&r.brave&&typeof r.brave.isBrave==u&&(i[p]="Brave"),i},this.getCPU=function(){var e={};return e[f]=n,rgxMapper.call(e,t,a.cpu),e},this.getDevice=function(){var e={};return e[g]=n,e[w]=n,e[m]=n,rgxMapper.call(e,t,a.device),v&&!e[m]&&o&&o.mobile&&(e[m]=x),v&&"Macintosh"==e[w]&&r&&typeof r.standalone!==b&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[w]="iPad",e[m]=k),e},this.getEngine=function(){var e={};return e[p]=n,e[h]=n,rgxMapper.call(e,t,a.engine),e},this.getOS=function(){var e={};return e[p]=n,e[h]=n,rgxMapper.call(e,t,a.os),v&&!e[p]&&o&&"Unknown"!=o.platform&&(e[p]=o.platform.replace(/chrome os/i,D).replace(/macos/i,V)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=typeof e===l&&e.length>350?trim(e,350):e,this},this.setUA(t),this};UAParser.VERSION="1.0.35",UAParser.BROWSER=enumerize([p,h,c]),UAParser.CPU=enumerize([f]),UAParser.DEVICE=enumerize([w,g,m,v,x,y,k,_,A]),UAParser.ENGINE=UAParser.OS=enumerize([p,h]),typeof a!==b?(o.exports&&(a=o.exports=UAParser),a.UAParser=UAParser):r.amdO?void 0!==(t=(function(){return UAParser}).call(i,r,i,e))&&(e.exports=t):typeof s!==b&&(s.UAParser=UAParser);var Z=typeof s!==b&&(s.jQuery||s.Zepto);if(Z&&!Z.ua){var $=new UAParser;Z.ua=$.getResult(),Z.ua.get=function(){return $.getUA()},Z.ua.set=function(e){$.setUA(e);var i=$.getResult();for(var r in i)Z.ua[r]=i[r]}}}(this)}},a={};function __nccwpck_require__(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}},t=!0;try{o[e].call(r.exports,r,r.exports,__nccwpck_require__),t=!1}finally{t&&delete a[e]}return r.exports}__nccwpck_require__.ab=__dirname+"/";var s=__nccwpck_require__(226);e.exports=s})()},1468:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var r in i)Object.defineProperty(e,r,{enumerable:!0,get:i[r]})}(i,{PageSignatureError:function(){return PageSignatureError},RemovedPageError:function(){return RemovedPageError},RemovedUAError:function(){return RemovedUAError}});let PageSignatureError=class PageSignatureError extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}};let RemovedPageError=class RemovedPageError extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}};let RemovedUAError=class RemovedUAError extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}},38238:(e,i,r)=>{Object.defineProperty(i,"E",{enumerable:!0,get:function(){return ImageResponse}});let ImageResponse=class ImageResponse extends Response{static #e=this.displayName="NextImageResponse";constructor(...e){let i=new ReadableStream({async start(i){let t=(await Promise.resolve().then(r.bind(r,14021))).ImageResponse,o=new t(...e);if(!o.body)return i.close();let a=o.body.getReader();for(;;){let{done:e,value:r}=await a.read();if(e)return i.close();i.enqueue(r)}}}),t=e[1]||{};super(i,{headers:{"content-type":"image/png","cache-control":"public, immutable, no-transform, max-age=31536000",...t.headers},status:t.status,statusText:t.statusText})}}},37021:(e,i,r)=>{Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var r in i)Object.defineProperty(e,r,{enumerable:!0,get:i[r]})}(i,{INTERNALS:function(){return n},NextRequest:function(){return NextRequest}});let t=r(65973),o=r(75746),a=r(1468),s=r(93497),n=Symbol("internal request");let NextRequest=class NextRequest extends Request{constructor(e,i={}){let r="string"!=typeof e&&"url"in e?e.url:String(e);(0,o.validateURL)(r),e instanceof Request?super(e,i):super(r,i);let a=new t.NextURL(r,{headers:(0,o.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:i.nextConfig});this[n]={cookies:new s.RequestCookies(this.headers),geo:i.geo||{},ip:i.ip,nextUrl:a,url:a.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[n].cookies}get geo(){return this[n].geo}get ip(){return this[n].ip}get nextUrl(){return this[n].nextUrl}get page(){throw new a.RemovedPageError}get ua(){throw new a.RemovedUAError}get url(){return this[n].url}}},14705:(e,i,r)=>{Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var r in i)Object.defineProperty(e,r,{enumerable:!0,get:i[r]})}(i,{isBot:function(){return isBot},userAgentFromString:function(){return userAgentFromString},userAgent:function(){return userAgent}});let t=function(e){return e&&e.__esModule?e:{default:e}}(r(55229));function isBot(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function userAgentFromString(e){return{...(0,t.default)(e),isBot:void 0!==e&&isBot(e)}}function userAgent({headers:e}){return userAgentFromString(e.get("user-agent")||void 0)}},37720:(e,i,r)=>{let t={NextRequest:r(37021).NextRequest,NextResponse:r(60177).NextResponse,ImageResponse:r(38238).E,userAgentFromString:r(14705).userAgentFromString,userAgent:r(14705).userAgent};"undefined"!=typeof URLPattern&&(t.URLPattern=URLPattern),e.exports=t,i.NextRequest=t.NextRequest,i.NextResponse=t.NextResponse,i.ImageResponse=t.ImageResponse,i.userAgentFromString=t.userAgentFromString,i.userAgent=t.userAgent,i.URLPattern=t.URLPattern}};
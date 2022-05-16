/*! 24.0.0.0 */
/*! VersionVI: 01F240075n x */
function EstChiffre(n){return n>="0"&&n<="9"}function ChaineConstruit(n){var i,r,f;for(n=String(n),i=0;(i=n.indexOf("%",i))>=0;){var u=i+1,t=u,e=n.charAt(t)=="%";if(e)t++;else{while(t<n.length&&EstChiffre(n.charAt(t)))t++;n.charAt(t)==String.fromCharCode(8)&&t++}t>u?(r=parseInt(n.substring(u,t)),f=r>0&&r<arguments.length?String(arguments[r]):e?"%":"",n=n.substring(0,i)+f+n.substring(t,n.length),i+=f.length):i++}return n}function EstEspace(n){return n>"\b"&&n<"\x0e"||n==" "}function SansEspace(n){for(var t=0,i;t<n.length&&EstEspace(n.charAt(t));)t++;for(i=n.length-1;i>t&&EstEspace(n.charAt(i));)i--;return n.substring(t,i+1)}function CarSansAccent(n){return n=="\u009f"||n=="\u00dd"?"Y":n>"\u00bf"&&n<"\u00c6"?"A":n=="\u00c7"?"C":n>"\u00c7"&&n<"\u00cc"?"E":n>"\u00cb"&&n<"\u00d0"?"I":n=="\u00d0"?"D":n=="\u00d1"?"N":n>"\u00d1"&&n<"\u00d7"||n=="\u00d8"?"O":n>"\u00d8"&&n<"\u00dd"?"U":n>"\u00df"&&n<"\u00e6"?"a":n=="\u00e7"?"c":n>"\u00e7"&&n<"\u00ec"?"e":n>"\u00eb"&&n<"\u00f0"?"i":n=="\u00f1"?"n":n>"\u00f1"&&n<"\u00f7"||n=="\u00f8"?"o":n>"\u00f8"&&n<"\u00fd"?"u":n=="\u00fd"||n=="\u00ff"?"y":n}function EstPonctuation(n){return n<"\t"||n>"\r"&&n<" "||n>" "&&n<"0"||n>"9"&&n<"A"||n>"Z"&&n<"a"||n>"z"&&n<"\u0083"||n>"\u0083"&&n<"\u008c"||n=="\u008d"||n>"\u008e"&&n<"\u0099"||n=="\u009b"||n=="\u009d"||n>"\u009f"&&n<"\u00aa"||n>"\u00aa"&&n<"\u00b2"||n>"\u00b3"&&n<"\u00b9"||n=="\u00bb"||n=="\u00bf"||n=="\u00d7"||n=="\u00f7"}function EstPonctuationOuEspace(n){return EstPonctuation(n)||EstEspace(n)}function ChaineFormate(n,t){var f=2,u,r,i;if(typeof n=="number"&&(n+=""),t&1&&(n=SansEspace(n)),t&16+clWDStd.CC_MAJ&&(n=n.toUpperCase()),t&64&&(n=n.toLowerCase()),!(t&f+clWDStd.CC_ACC))return n;for(u="",r=0;r<n.length;r++)i=n.charAt(r),t&clWDStd.CC_ACC&&(i=CarSansAccent(i)),t&f&&EstPonctuationOuEspace(i)||(u+=i);return u}function SansAccent(n){return ChaineFormate(n,clWDStd.CC_ACC)}function MajusculeSansAccent(n){return ChaineFormate(n,clWDStd.CC_ACC+clWDStd.CC_MAJ)}function ExtraitNombre(n,t){while(t<n.length&&n.charAt(t)=="0")t++;for(var i=t;i<n.length&&EstChiffre(n.charAt(i));)i++;return n.substring(t,i)}function ResCompare(n,t){return n==t?0:n<t?-1:1}function ChaineCompare(n,t,i){var a=8,v=128,r,e,o,s,h,u,f,c,l;if(n=ChaineFormate(n,i),t=ChaineFormate(t,i),!(i&a+v))return ResCompare(n,t);for(r=0;r<n.length&&r<t.length;){if(i&v&&(e=ExtraitNombre(n,r),o=ExtraitNombre(t,r),e!=""&&o!=""&&(s=parseInt(e),h=parseInt(o),s!=h)))return ResCompare(s,h);if(u=n.charAt(r),f=t.charAt(r),i&a&&(c=CarSansAccent(u),l=CarSansAccent(f),c!=l))return ResCompare(c,l);if(u!=f)return ResCompare(u,f);r++}return ResCompare(n.length,t.length)}function Position(n,t,i,r){var s,f,e,o,l,h,u,c;if((i==null||i<0)&&(i=1),s=r&clWDStd.CO_FIN,i==0&&(i=s?n.length:1),i>n.length)return 0;if(f=[],typeof t!=typeof f?f[0]=t:f=t,r&clWDStd.CO_CAS)for(n=MajusculeSansAccent(n),e=0;e<f.length;e++)f[e]=MajusculeSansAccent(f[e]);for(o=-1,l=!1,e=0;e<f.length;e++)if(t=f[e],t!="")for(h=i-1,u=h;(u=s?n.lastIndexOf(t,h):n.indexOf(t,h))>-1;)if(c=u+t.length,h=s?u-1:c,!(r&clWDStd.CO_MOT)||(u==0||EstPonctuationOuEspace(n.charAt(u-1)))&&(c==n.length||EstPonctuationOuEspace(n.charAt(c)))){l=!0;(s?u>o:u>-1&&(o<0||u<o))&&(o=u);break}return l?o+1:0}function PositionOccurrence(n,t,i,r){var o=-2147483645,s=-2147483646,u,f,e;if((i==null&&(i=1),i<1&&i>o)||(u=r&clWDStd.CO_FIN,(i==o||i==s)&&(u=!u),u&&(r|=clWDStd.CO_FIN),i!=clWDStd.RG_SUI&&i!=s&&(gp=u?n.length:1),u&&gp==0))return 0;for(i<=o&&(i=1),f=0,e=gp;f<i&&(e=Position(n,t,gp,r))>0;)gp=e+(u?-1:typeof t=="string"?t.length:1),f++;return f<i?0:e}function ChaineOccurrence(n,t,i){for(var r=0,u=PositionOccurrence(n,t,clWDStd.RG_PRM,i);u>0;)r++,u=PositionOccurrence(n,t,clWDStd.RG_SUI,i);return r}function VerifieExpressionReguliere(n,t){var f=new RegExp(t),r=f.exec(n),u=[],i;if((u[0]=r!=null&&r.index==0&&r[0].length==n.length)==!0)for(i=1;i<arguments.length-1;i++)u[i]=i<r.length?r[i]:"";return u}function EstNumerique(n){return!isNaN(n)||!isNaN(parseFloat(n))}function NavigateurEstConnecte(){return navigator.onLine}function nDegreVersRadian(n){return n*Math.PI/360}var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),clWDStd={CC_ACC:4,CO_FIN:1,CO_MOT:2,CO_CAS:4,CC_MAJ:32,RG_PRM:-2147483648,RG_SUI:-2147483647,wifiErreur:-1,wifiActif:1,wifiDesactive:4,m_fWifiCallback:null,tailleO:1,tailleKo:2,tailleMo:3,tailleGo:4,tailleTo:5},gp,clWDCapteur,StdEncode;clWDStd.m_nWifiEtat=clWDStd.wifiErreur;clWDStd.Contient=function(n,t,i){return Position(n,t,0,i)>0};clWDStd.CTouche=function(n,t,i,r,u){this.m_sToucheMinuscule=n;this.m_sToucheMajuscule=t;this.m_bIgnoreMajusculeEnfoncee=i;this.m_bIgnoreMinuscule=r;this.m_bIgnoreMajuscule=u};clWDStd.gclTabTouche=[new clWDStd.CTouche("&","1"),new clWDStd.CTouche("\u0082","2"),new clWDStd.CTouche('"',"3"),new clWDStd.CTouche("'","4"),new clWDStd.CTouche("(","5"),new clWDStd.CTouche("-","6",!1,!1,!0),new clWDStd.CTouche("\u008a","7"),new clWDStd.CTouche("_","8"),new clWDStd.CTouche("\u0087","9"),new clWDStd.CTouche("\u00e0","0"),new clWDStd.CTouche(")","\u00b0",!0),new clWDStd.CTouche("=","+",!0,!0),new clWDStd.CTouche("^","\u00a8",!0),new clWDStd.CTouche("$","\u00a3",!0),new clWDStd.CTouche("\u00f9","%",!0),new clWDStd.CTouche("*","\u00b5",!0,!1,!0),new clWDStd.CTouche("\u00b5","\u00b5"),new clWDStd.CTouche(",","?",!0),new clWDStd.CTouche(";","."),new clWDStd.CTouche(":","/",!0,!0),new clWDStd.CTouche("!","\u00a7",!0)];clWDStd.__bEstToucheMinuscule=function(n,t){return t==n.m_sToucheMinuscule};clWDStd.__sToucheAvecMajuscule=function(n){var t=clWDUtil.oDansTableauFct(this.gclTabTouche,this.__bEstToucheMinuscule,n,{m_bIgnoreMajuscule:!0});return t.m_bIgnoreMajuscule?n.toUpperCase():t.m_sToucheMajuscule};clWDStd.__bEstToucheMajuscule=function(n,t){return t==n.m_sToucheMajuscule};clWDStd.__sToucheSansMajuscule=function(n,t){var i=clWDUtil.oDansTableauFct(this.gclTabTouche,this.__bEstToucheMajuscule,n,{m_bIgnoreMinuscule:!0});return!i.m_bIgnoreMinuscule&&(t||i.m_bIgnoreMajusculeEnfoncee)?i.m_sToucheMinuscule:n.toLowerCase()};clWDStd.CapsLockVerifie=function(n){var i=n.which?n.which:n.keyCode,t=String.fromCharCode(i),r=this.__sToucheAvecMajuscule(t),u=n.shiftKey?n.shiftKey:i==16;return t==r!=u&&r!=this.__sToucheSansMajuscule(t,u)};clWDStd.NotificationAffiche=function(n,t,i){var r=window.Notification,f,e,u;if(r==null&&(r=window.webkitNotifications),r!=null){if(f=!1,e=!1,r.permission!=null?(f=r.permission=="granted",e=r.permission=="denied"):(f=window.webkitNotifications.checkPermission()==0,e=window.webkitNotifications.checkPermission()==2),f){if(u=null,window.Notification!=null&&(u=new window.Notification(n,{body:t,icon:i}),u!=null))return;if(u=r.createNotification(n,i,t),u==null)return;u.show();return}e||r.requestPermission(function(){clWDStd.NotificationAffiche(t,n,i)})}};clWDStd.PageVisible=function(){return document.hidden!=null?!document.hidden:document.msHidden!=null?!document.msHidden:document.mozHidden!=null?!document.mozHidden:document.webkitHidden!=null?!document.webkitHidden:document.oHidden!=null?!document.oHidden:!0};clWDStd.oGetConnexion=function(){var n=navigator.connection;return n==null&&(n=navigator.mozConnection),n==null&&(n=navigator.webkitConnection),n};clWDStd.nEtatConnexion=function(){var n=this.oGetConnexion(),t;if(n==null||(t=n.type,t===undefined))return this.wifiErreur;switch(t){case n.WIFI:return this.wifiActif;default:return this.wifiDesactive}};clWDStd.s_WifiCallback=function(n){clWDStd.WifiCallback(n)};clWDStd.WifiCallback=function(){if(this.m_fWifiCallback!=null){var n=this.nEtatConnexion();this.m_fWifiCallback(this.m_nWifiEtat,n);this.m_nWifiEtat=n}};clWDStd.fParamCallback=function(n){return typeof n=="string"?n==""?null:eval(n):n};clWDStd.wifiEtat=function(n){if(n==null)return this.m_nWifiEtat=this.nEtatConnexion(),this.m_nWifiEtat;this.m_fWifiCallback=this.fParamCallback(n);var t=this.oGetConnexion();t!=null&&clWDUtil.AttacheDetacheEvent(n!="",this.oGetConnexion(),"change",this.s_WifiCallback,!0)};clWDStd.PleinEcranActive=function(){var n=document.documentElement;n!=null&&(n.requestFullscreen!=null?n.requestFullscreen():n.mozRequestFullScreen!=null?n.mozRequestFullScreen():n.webkitRequestFullScreen!=null&&n.webkitRequestFullScreen())};clWDStd.PleinEcranDesactive=function(){document.exitFullscreen!=null?document.exitFullscreen():document.mozCancelFullScreen!=null?document.mozCancelFullScreen():document.webkitCancelFullScreen!=null&&document.webkitCancelFullScreen()};clWDStd.TailleVersChaine=function(n,t){var o=Math.abs(n),r=1024,u;if(t==null)for(t=this.tailleO,u=r;t<this.tailleTo&&o>=u;)t++,u*=r;var e=t==this.tailleO,f=clWDUtil.oArrondi(n/Math.pow(r,t-1),e?0:2),i="";switch(t){case this.tailleO:i=WDSTD_CONST.FORMAT_TAILLE_OCTET;f>1&&(i+="s");break;case this.tailleKo:i=WDSTD_CONST.FORMAT_TAILLE_KO;break;case this.tailleMo:i=WDSTD_CONST.FORMAT_TAILLE_MO;break;case this.tailleGo:i=WDSTD_CONST.FORMAT_TAILLE_GO;break;case this.tailleTo:i=WDSTD_CONST.FORMAT_TAILLE_TO;break;default:return""}return""+(e?f:clWDUtil.sNumeriqueVersChaine(f,".2f"))+" "+i};clWDCapteur={cptVertical:1,cptLongitudinal:2,cptLateral:4,cptAzimut:1,cptPitch:2,cptRoll:4,cptFrequenceNormal:1,cptFrequenceRapide:2,cptFrequenceJeu:3,nFrequenceDefaut:200,nDureeDebutSecousseDefaut:100,nDureeFinSecousseDefaut:200,nSensibiliteDefaut:500,m_fCallbackAcceleration:null,m_fCallbackOrientation:null,m_fCallbackDebutSecousse:null,m_fCallbackFinSecousse:null,m_dAccelerationAxeVertical:0,m_dAccelerationAxeLongitudinal:0,m_dAccelerationAxeLateral:0,m_nHeureAcceleration:-1,m_nOrientationAxeVertical:0,m_nOrientationAxeHorizontal:0,m_nOrientationAxeLongitudinal:0,m_nOrientationAxeVerticalTransmise:0,m_nOrientationAxeHorizontalTransmise:0,m_nOrientationAxeLongitudinalTransmise:0,m_nHeureDernierEnvoiAcceleration:-1,m_nHeureDernierEnvoiOrientation:-1,m_nHeureDebutSecousse:-1,m_nIdTimeoutDebutSecousse:-1,m_bDebutSecousse:!1,m_nHeureFinSecousse:-1,m_nIdTimeoutFinSecousse:-1,m_dSeuilAcceleration:0,m_nSeuilOrientation:0,m_bCallbackAccelerationBranche:!1};clWDCapteur.nAxeAccelerationDefaut=clWDCapteur.cptVertical+clWDCapteur.cptLongitudinal+clWDCapteur.cptLateral;clWDCapteur.nAxeOrientationDefaut=clWDCapteur.cptAzimut+clWDCapteur.cptPitch+clWDCapteur.cptRoll;clWDCapteur.m_nAxeAcceleration=clWDCapteur.nAxeAccelerationDefaut;clWDCapteur.m_nAxeOrientation=clWDCapteur.nAxeOrientationDefaut;clWDCapteur.m_nFrequenceAcceleration=clWDCapteur.nFrequenceDefaut;clWDCapteur.m_nFrequenceOrientation=clWDCapteur.nFrequenceDefaut;clWDCapteur.m_nDureeDebutSecousse=clWDCapteur.nDureeDebutSecousseDefaut;clWDCapteur.m_nTimeoutDebutSecousse=clWDCapteur.nDureeDebutSecousseDefaut;clWDCapteur.m_nDureeFinSecousse=clWDCapteur.nDureeFinSecousseDefaut;clWDCapteur.m_nTimeoutFinSecousse=clWDCapteur.nDureeFinSecousseDefaut;clWDCapteur.m_nSensibiliteDebutSecousse=clWDCapteur.nSensibiliteDefaut;clWDCapteur.m_nSensibiliteFinSecousse=clWDCapteur.nSensibiliteDefaut;clWDCapteur.nValeurSelonAxe=function(n,t,i){return i&t?n:0};clWDCapteur.dAccelerationSelonAxe=function(n,t){var i=this.nValeurSelonAxe(n,t,this.m_nAxeAcceleration);return i>this.m_dSeuilAcceleration?i:0};clWDCapteur.nOrientationSelonAxe=function(n,t){return this.nValeurSelonAxe(n,t,this.m_nAxeOrientation)};clWDCapteur.bOrientationSelonAxe=function(n,t,i){return Math.abs(n-t)>this.m_nSeuilOrientation&&this.m_nAxeOrientation&i};clWDCapteur.nDebrancheTimeout=function(n){return n>=0&&(clWDUtil.ClearTimeout(n),n=-1),n};clWDCapteur.InitDebutSecousse=function(){this.m_nHeureDebutSecousse=-1;this.m_bDebutSecousse=!1};clWDCapteur.DebrancheTimeoutDebutSecousse=function(){this.InitDebutSecousse();this.m_nIdTimeoutDebutSecousse=this.nDebrancheTimeout(this.m_nIdTimeoutDebutSecousse)};clWDCapteur.DebrancheTimeoutFinSecousse=function(){this.m_nHeureFinSecousse=-1;this.m_nIdTimeoutFinSecousse=this.nDebrancheTimeout(this.m_nIdTimeoutFinSecousse)};clWDCapteur.nReinitTimeout=function(n,t,i){return this.nDebrancheTimeout(n),clWDUtil.nSetTimeout(i,t)};clWDCapteur.bHeureEnvoiOK=function(n,t,i){return t<0||n-t>i};clWDCapteur.s_CallbackDebutSecousse=function(){clWDCapteur.InitDebutSecousse()};clWDCapteur.s_CallbackFinSecousse=function(){clWDCapteur.m_nHeureFinSecousse=-1};clWDCapteur.nHeure=function(){return(new Date).getTime()};clWDCapteur.s_CallbackCapteurOrientation=function(n){clWDCapteur.CallbackCapteurOrientation(n)};clWDCapteur.CallbackCapteurOrientation=function(n){if(this.m_nOrientationAxeVertical=n.alpha,this.m_nOrientationAxeHorizontal=n.beta,this.m_nOrientationAxeLongitudinal=n.gamma,this.m_fCallbackOrientation!=null){var t=this.bOrientationSelonAxe(this.m_nOrientationAxeVertical,this.m_nOrientationAxeVerticalTransmise,this.cptAzimut),i=this.bOrientationSelonAxe(this.m_nOrientationAxeHorizontal,this.m_nOrientationAxeHorizontalTransmise,this.cptPitch),r=this.bOrientationSelonAxe(this.m_nOrientationAxeLongitudinal,this.m_nOrientationAxeLongitudinalTransmise,this.cptRoll),u=this.nHeure();(t||i||r)&&this.bHeureEnvoiOK(u,this.m_nHeureDernierEnvoiOrientation,this.m_nFrequenceOrientation)&&(t&&(this.m_nOrientationAxeVerticalTransmise=this.m_nOrientationAxeVertical),i&&(this.m_nOrientationAxeHorizontalTransmise=this.m_nOrientationAxeHorizontal),r&&(this.m_nOrientationAxeLongitudinalTransmise=this.m_nOrientationAxeLongitudinal),this.m_fCallbackOrientation(this.nOrientationSelonAxe(this.m_nOrientationAxeVerticalTransmise,this.cptAzimut),this.nOrientationSelonAxe(this.m_nOrientationAxeHorizontalTransmise,this.cptPitch),this.nOrientationSelonAxe(this.m_nOrientationAxeLongitudinalTransmise,this.cptRoll)),this.m_nHeureDernierEnvoiOrientation=u)}};clWDCapteur.BrancheEvenement=function(n,t,i){clWDUtil.AttacheDetacheEvent(i,window,n,t,!0)};clWDCapteur.BrancheEvenement("deviceorientation",clWDCapteur.s_CallbackCapteurOrientation,!0);clWDCapteur.s_CallbackCapteurAcceleration=function(n){clWDCapteur.CallbackCapteurAcceleration(n)};clWDCapteur.CallbackCapteurAcceleration=function(n){var s=0,h=0,c=0,f=n.acceleration,o;if(f==null){f=n.accelerationIncludingGravity;var e=9.81,l=nDegreVersRadian(this.m_nOrientationAxeLongitudinal),a=nDegreVersRadian(this.m_nOrientationAxeHorizontal);s=-e*Math.sin(l);h=e*Math.sin(a);c=e*Math.cos(l)*Math.cos(a)}var i=f.z-c,r=f.y-h,u=f.x-s,t=this.nHeure(),v=this.m_nHeureAcceleration<0?0:Math.abs(i+r+u-this.m_dAccelerationAxeVertical-this.m_dAccelerationAxeLongitudinal-this.m_dAccelerationAxeLateral)/(t-this.m_nHeureAcceleration)*1e4;this.m_nHeureAcceleration=t;this.m_dAccelerationAxeVertical=i;this.m_dAccelerationAxeLongitudinal=r;this.m_dAccelerationAxeLateral=u;this.m_fCallbackAcceleration!=null&&(i=this.dAccelerationSelonAxe(i,this.cptVertical),r=this.dAccelerationSelonAxe(r,this.cptLongitudinal),u=this.dAccelerationSelonAxe(u,this.cptLateral),(i!=0||r!=0||u!=0)&&this.bHeureEnvoiOK(t,this.m_nHeureDernierEnvoiAcceleration,this.m_nFrequenceAcceleration)&&(this.m_fCallbackAcceleration(i,r,u),this.m_nHeureDernierEnvoiAcceleration=t));this.m_fCallbackDebutSecousse!=null&&v>this.m_nSensibiliteDebutSecousse&&(this.m_nHeureDebutSecousse<0&&(this.m_nHeureDebutSecousse=t),!this.m_bDebutSecousse&&t-this.m_nHeureDebutSecousse>=this.m_nDureeDebutSecousse&&(this.m_bDebutSecousse=!0,this.m_fCallbackDebutSecousse()),this.m_nIdTimeoutDebutSecousse=this.nReinitTimeout(this.m_nIdTimeoutDebutSecousse,this.m_nTimeoutDebutSecousse,this.s_CallbackDebutSecousse));this.m_fCallbackFinSecousse!=null&&v>this.m_nSensibiliteFinSecousse&&(this.m_nHeureFinSecousse<0&&(this.m_nHeureFinSecousse=t),o=t-this.m_nHeureFinSecousse,this.m_nIdTimeoutFinSecousse=o>=this.m_nDureeFinSecousse?this.nReinitTimeout(this.m_nIdTimeoutFinSecousse,this.m_nTimeoutFinSecousse,function(){clWDCapteur.m_nHeureFinSecousse=-1;clWDCapteur.m_fCallbackFinSecousse(o)}):this.nReinitTimeout(this.m_nIdTimeoutFinSecousse,this.m_nTimeoutFinSecousse,this.s_CallbackFinSecousse))};clWDCapteur.nFrequenceMode=function(n){switch(n){case this.cptFrequenceRapide:return 0;case this.cptFrequenceJeu:return 20;default:return this.nFrequenceDefaut}};clWDCapteur.ValeurOuParDefaut=function(n,t){return n!=undefined?n:t};clWDCapteur.bCapteurAccelerationDisponible=function(){return window.DeviceMotionEvent!=null};clWDCapteur.BrancheCallbackAcceleration=function(){this.m_bCallbackAccelerationBranche!=(this.m_fCallbackAcceleration!=null||this.m_fCallbackDebutSecousse!=null||this.m_fCallbackFinSecousse!=null)&&(this.m_bCallbackAccelerationBranche=!this.m_bCallbackAccelerationBranche,this.BrancheEvenement("devicemotion",this.s_CallbackCapteurAcceleration,this.m_bCallbackAccelerationBranche))};clWDCapteur.CapteurDetecteChangementAcceleration=function(n,t,i,r){return this.m_fCallbackAcceleration=clWDStd.fParamCallback(n),this.m_nAxeAcceleration=this.ValeurOuParDefaut(t,this.nAxeAccelerationDefaut),this.m_nFrequenceAcceleration=this.nFrequenceMode(i),this.m_dSeuilAcceleration=this.ValeurOuParDefaut(r,0),this.m_nHeureDernierEnvoiAcceleration=-1,this.BrancheCallbackAcceleration(),this.bCapteurAccelerationDisponible()};clWDCapteur.CapteurDetecteChangementOrientation=function(n,t,i,r){return this.m_fCallbackOrientation=clWDStd.fParamCallback(n),this.m_nAxeOrientation=this.ValeurOuParDefaut(t,this.nAxeOrientationDefaut),this.m_nFrequenceOrientation=this.nFrequenceMode(i),this.m_nSeuilOrientation=this.ValeurOuParDefaut(r,0),this.m_nHeureDernierEnvoiOrientation=-1,window.DeviceOrientationEvent!=null};clWDCapteur.CapteurDetecteDebutSecousses=function(n,t,i,r){return this.m_fCallbackDebutSecousse=clWDStd.fParamCallback(n),this.m_nSensibiliteDebutSecousse=this.ValeurOuParDefaut(t,this.nSensibiliteDefaut),this.m_nDureeDebutSecousse=this.ValeurOuParDefaut(i,this.nDureeDebutSecousseDefaut),this.m_nTimeoutDebutSecousse=this.ValeurOuParDefaut(r,this.nDureeDebutSecousseDefaut),this.DebrancheTimeoutDebutSecousse(),this.BrancheCallbackAcceleration(),this.bCapteurAccelerationDisponible()};clWDCapteur.CapteurDetecteFinSecousses=function(n,t,i,r){return this.m_fCallbackFinSecousse=clWDStd.fParamCallback(n),this.m_nSensibiliteFinSecousse=this.ValeurOuParDefaut(t,this.nSensibiliteDefaut),this.m_nDureeFinSecousse=this.ValeurOuParDefaut(i,this.nDureeFinSecousseDefaut),this.m_nTimeoutFinSecousse=this.ValeurOuParDefaut(r,this.nDureeFinSecousseDefaut),this.DebrancheTimeoutFinSecousse(),this.BrancheCallbackAcceleration(),this.bCapteurAccelerationDisponible()};clWDCapteur.CapteurTermine=function(){this.m_fCallbackAcceleration=this.m_fCallbackOrientation=this.m_fCallbackDebutSecousse=this.m_fCallbackFinSecousse=null;this.DebrancheTimeoutDebutSecousse();this.DebrancheTimeoutFinSecousse();this.BrancheCallbackAcceleration()};clWDCapteur.CapteurRecupereOrientation=function(n){switch(n){case this.cptAzimut:return this.m_nOrientationAxeVertical;case this.cptPitch:return this.m_nOrientationAxeHorizontal;case this.cptRoll:return this.m_nOrientationAxeLongitudinal;default:return 0}},function(n){function t(n){return n.charCodeAt(0)}function st(n,t,i){while(n.length<t)n+="\x00";return n.substring(0,t)+i+n.substring(t+1,n.length)}function vt(n){var i=t(n);return f[0][i]!=f[1][i]}function yt(n,i,r){return r?vt(n):f[i?1:0][t(n)&255]!=""}function pt(n,i,r){var e,o,u,s;for(r===void 0&&(r=!1),e="",o=n.length,u=0;u<o;u++)yt(n[u],i,r)?(s=i||r?1:0,e+="%",e+=f[s][t(n[u])&255]):e+=n[u];return e}function dt(n){for(var u="",e=n.length,i=0,r,f,o;i<e;)switch(n[i]){case"%":if(n[i+1]==wt&&n.substring(0,s.length)==s){u+=bt;i+=s.length;break}if(i+2<e){for(r=0,f=!1,o=0;!f&&o<kt;o++,i++){while(n[i]=="%")i++;r<<=4;t(n[i])>=t("0")&&t(n[i])<=t("9")?r=r+t(n[i])-t("0"):t(n[i])>=t("A")&&t(n[i])<=t("Z")?r=r+10+t(n[i])-t("A"):t(n[i])>=t("a")&&t(n[i])<=t("z")?r=r+10+t(n[i])-t("a"):i>=e&&(f=!0)}if(u+=String.fromCharCode(r),f)return u}else return u;break;case"+":u+=" ";i++;break;default:u+=n[i++]}return u}function g(n){switch(n){case 0:return null;case 1:return new h;case 2:return new c;case 11:return new v;case 5:return new ht;case 6:return new ct;case 4:return new at}return null}function nt(n){switch(n){case 8:case 9:return!0;default:return!1}}function tt(n,t){if(t===void 0&&(t=7),n=="")return"";nt(t)&&(n=unescape(encodeURIComponent(n)));return pt(n,!1,t==10)}function it(n){switch(n){case 7:case 8:case 9:case 10:return!0;default:return!1}}function rt(n){return n==3?4:n}function ft(n,t){var i=g(t);return i!=null?i.sEncode(n,ut):""}function gt(n,t){return t===void 0&&(t=2),it(t)?tt(n,t):ft(n,rt(t))}function et(n,t){if(t===void 0&&(t=7),n=="")return"";var i=dt(n);return nt(t)&&(i=decodeURIComponent(escape(i))),i}function ot(n,t){var i=g(t);return i==null?"":i.sDecode(n)}function ni(n,t){return t===void 0&&(t=2),it(t)?et(n,t):ot(n,rt(t))}function ti(n){return ft(n,4)}function ii(n){return ot(n,4)}var i="\r\n",e=function(){function n(){}return n.prototype.sEncode=function(n,t){for(var r=0,f=0,c=0,e=0,o=0,s=0,h=n.length,u="",r=0;r<h;r+=3){if(f=h-r,e=n.charCodeAt(r),o=f>1?n.charCodeAt(r+1):0,s=f>2?n.charCodeAt(r+2):0,u+=this.__cEncodeByte((e&252)>>2),u+=this.__cEncodeByte((e&3)<<4|(o&240)>>4),f>1)u+=this.__cEncodeByte((o&15)<<2|(s&192)>>6);else break;if(f>2)u+=this.__cEncodeByte(s&63);else break;this.__bDecoupeTexteEncodeEnLignedeTailleFixe()&&++c%t==0&&(u+=i)}return u},n.prototype.sDecode=function(n){for(var t=0,i=0,e=n.length,o=0,u=0,f=0,s=0,r="",t=0;t<e;t+=4){if(i=e-t,n[t]=="\n"||n[t]=="\r"){t-=3;continue}if(o=this.__byDecodeChar(n[t]),u=i>1?this.__byDecodeChar(n[t+1]):0,f=i>2?this.__byDecodeChar(n[t+2]):0,s=i>3?this.__byDecodeChar(n[t+3]):0,i>1)r+=String.fromCharCode(o<<2|(u&48)>>4);else break;if(i>2)r+=String.fromCharCode((u&15)<<4|(f&60)>>2);else break;if(i>3)r+=String.fromCharCode((f&3)<<6|s&63);else break}return r},n.prototype.__sEncodeOctetPlage=function(n,i,r){return String.fromCharCode(t(n)+i-r)},n.prototype.__bDecoupeTexteEncodeEnLignedeTailleFixe=function(){return!0},n}(),h=function(n){function i(){return n!==null&&n.apply(this,arguments)||this}return __extends(i,n),i.prototype.__cEncodeByte=function(n){return n<=25?this.__sEncodeOctetPlage("A",n,0):n>=26&&n<=51?this.__sEncodeOctetPlage("a",n,26):n>=52&&n<=61?this.__sEncodeOctetPlage("0",n,52):n==62?"+":"/"},i.prototype.__byDecodeChar=function(n){var i=t(n),r=t("A");return i>=r&&i<=t("Z")?i-r:(r=t("a"),i>=r&&i<=t("z"))?i-r+26:(r=t("0"),i>=r&&i<=t("9"))?i-r+52:i==t("+")?62:63},i}(e),c=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.sEncode=function(t,i){var r=n.prototype.sEncode.call(this,t,i),u=t.length;switch(u%3){case 1:r+="==";break;case 2:r+="="}return r},t.prototype.sDecode=function(n){for(var t=0,i=0,e=n.length,o=0,r=0,u=0,s=0,f="",t=0;t<e;t+=4){if(i=e-t,n[t]=="\n"||n[t]=="\r"){t-=3;continue}if(o=this.__byDecodeChar(n[t]),r=i>1?this.__byDecodeChar(n[t+1]):0,u=i>2?this.__byDecodeChar(n[t+2]):0,s=i>3?this.__byDecodeChar(n[t+3]):0,i>1&&n[t]!="=")f+=String.fromCharCode(o<<2|(r&48)>>4);else break;if(i>2&&n[t]!="="){if(n[t+2]=="="&&(r&15)==0)break;f+=String.fromCharCode((r&15)<<4|(u&60)>>2)}else break;if(i>3&&n[t]!="="){if(n[t+3]=="="&&(u&63)==0)break;f+=String.fromCharCode((u&3)<<6|s&63)}else break}return f},t.prototype.__byDecodeChar=function(t){return t=="="?0:n.prototype.__byDecodeChar.call(this,t)},t}(h),l="-",a="_",v=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.__bDecoupeTexteEncodeEnLignedeTailleFixe=function(){return!1},t}(c),ht=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.__cEncodeByte=function(t){return t<62?n.prototype.__cEncodeByte.call(this,t):t==62?l:a},t.prototype.__byDecodeChar=function(t){switch(t){case l:return 62;case a:return 63;default:return n.prototype.__byDecodeChar.call(this,t)}},t}(v),y=4,p=5,w=p-1,r=33,u=85,o=255,b="<~",k="~>",ct=function(n){function i(){return n!==null&&n.apply(this,arguments)||this}return __extends(i,n),i.prototype.sEncode=function(n){for(var e=n.length,o=e%y+1,b=o>1,c=!1,k=0,s="",l=0,r,f,a,h,i,v;e>0;){for(r=0,f=24;f>=0;f-=8)if(a=t(n[k++]),r|=a<<f,(c=--e==0)==!0)break;for(h=c&&b,i=w;i>=0;i--)v=r%u,r/=u,(!h||i<o)&&(s=st(s,l+i,this.__cEncodeByte(v)));l+=h?o:p}return s},i.prototype.sDecode=function(n){var t=n.length,s=b.length,f,l;t>=s&&n.indexOf(b)==0&&(n=n.substring(s,t),t-=s);f=k.length;t>=f&&n.substring(t-f,t)==k&&(t-=f);for(var p=0,d=0,a="";t>0;){var i=0,h=o,e=w,v="",c=t;do l=c>0,v=l?n[d++]:String.fromCharCode(r+u-1),l&&c--,h=this.__byDecodeChar(v),h==o?e++:i=i*u+h;while(e-->0);for(e=Math.min(t-1,y),t=c;e-->0;)i=i<<8|i>>24,a+=String.fromCharCode(i&255),p++}return a},i.prototype.__cEncodeByte=function(n){return String.fromCharCode(n+r)},i.prototype.__bCaractDansPlage=function(n,i,r,u){var f=t(n),e=t(i);return f>=e&&f<=e+(u-r)},i.prototype.__nDecodeCarPlage=function(n,i,r){return t(n)-t(i)+r},i.prototype.__byDecodeChar=function(n){var i=t(n);return i>=r&&i<r+u?i-r:o},i}(e),d="begin 0666 uu"+i,lt=i+"`"+i+"end"+i,at=function(n){function r(){return n!==null&&n.apply(this,arguments)||this}return __extends(r,n),r.prototype.sEncode=function(n,t){var c;t=45;var u=0,l=0,f=0,a=0,e=0,o=0,s=0,h=!0,r=d;for(l=r.length,c=n.length,u=0;u<c;u+=3)f=c-u,h&&(r+=f>t-1?String.fromCharCode(t+32):String.fromCharCode(f+32),h=!1),e=n.charCodeAt(u),o=f>1?n.charCodeAt(u+1):0,s=f>2?n.charCodeAt(u+2):0,r+=String.fromCharCode(32+(e>>2&63)),r+=String.fromCharCode(32+((e<<4|o>>4&15)&63)),f>1&&(r+=String.fromCharCode(32+((o<<2|s>>6&3)&63))),f>2&&(r+=String.fromCharCode(32+(s&63))),++a%t==0&&(r+=i,h=!0);return r+lt},r.prototype.sDecode=function(n){var r=0,i=0,c=n.length,s=0,f=0,e=0,h=0,u,o;for(r=d.length-2,u="",o=!1;r<c&&!o;r+=4)(n[r]=="\n"||n[r]=="\r")&&(r+=2,i=t(n[r++])-32,i==64&&(i=0,o=!0)),s=this.__byDecodeChar(n[r]),f=i>1?this.__byDecodeChar(n[r+1]):0,e=i>2?this.__byDecodeChar(n[r+2]):0,h=i>2?this.__byDecodeChar(n[r+3]):0,i>=1&&(u+=String.fromCharCode(s<<2|(f&48)>>4),i--,i>=1&&(u+=String.fromCharCode((f&15)<<4|(e&60)>>2),i--,i>=1&&(u+=String.fromCharCode((e&3)<<6|h&63),i--)));return u},r.prototype.__cEncodeByte=function(n){return String.fromCharCode(n+32)},r.prototype.__byDecodeChar=function(n){return t(n)-32},r}(e),f=[["00","01","02","03","04","05","06","07","08","09","0A","0B","0C","0D","0E","0F","10","11","12","13","14","15","16","17","18","19","1A","1B","1C","1D","1E","1F","20","","22","","","25","","","","","","2B","","","","","","","","","","","","","","","","","3C","","3E","","","","","","","","","","","","","","","","","","","","","","","","","","","","","5B","5C","5D","5E","","60","","","","","","","","","","","","","","","","","","","","","","","","","","","7B","7C","7D","7E","7F","80","81","82","83","84","85","86","87","88","89","8A","8B","8C","8D","8E","8F","90","91","92","93","94","95","96","97","98","99","9A","9B","9C","9D","9E","9F","A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","AA","AB","AC","AD","AE","AF","B0","B1","B2","B3","B4","B5","B6","B7","B8","B9","BA","BB","BC","BD","BE","BF","C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","CA","CB","CC","CD","CE","CF","D0","D1","D2","D3","D4","D5","D6","D7","D8","D9","DA","DB","DC","DD","DE","DF","E0","E1","E2","E3","E4","E5","E6","E7","E8","E9","EA","EB","EC","ED","EE","EF","F0","F1","F2","F3","F4","F5","F6","F7","F8","F9","FA","FB","FC","FD","FE","FF"],["00","01","02","03","04","05","06","07","08","09","0A","0B","0C","0D","0E","0F","10","11","12","13","14","15","16","17","18","19","1A","1B","1C","1D","1E","1F","20","21","22","23","24","25","26","27","28","29","2A","2B","2C","2D","2E","2F","","","","","","","","","","","3A","3B","3C","3D","3E","3F","40","","","","","","","","","","","","","","","","","","","","","","","","","","","5B","5C","5D","5E","5F","60","","","","","","","","","","","","","","","","","","","","","","","","","","","7B","7C","7D","7E","7F","80","81","82","83","84","85","86","87","88","89","8A","8B","8C","8D","8E","8F","90","91","92","93","94","95","96","97","98","99","9A","9B","9C","9D","9E","9F","A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","AA","AB","AC","AD","AE","AF","B0","B1","B2","B3","B4","B5","B6","B7","B8","B9","BA","BB","BC","BD","BE","BF","C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","CA","CB","CC","CD","CE","CF","D0","D1","D2","D3","D4","D5","D6","D7","D8","D9","DA","DB","DC","DD","DE","DF","E0","E1","E2","E3","E4","E5","E6","E7","E8","E9","EA","EB","EC","ED","EE","EF","F0","F1","F2","F3","F4","F5","F6","F7","F8","F9","FA","FB","FC","FD","FE","FF"]],s="%26%238364%3B",wt="2",bt="\u20ac",kt=2,ut;n.URLEncode=tt;ut=20;n.Encode=gt;n.URLDecode=et;n.Decode=ni;n.UUEncode=ti;n.UUDecode=ii}(StdEncode||(StdEncode={}))
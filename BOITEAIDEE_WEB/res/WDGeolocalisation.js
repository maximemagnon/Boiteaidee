/*! 23.0.2.0 */
/*! VersionVI: 01F240075n x */
function WDGeoPosition(n){WDTypeAvance.prototype.constructor.apply(this,[]);n||(n={coords:{}});this.m_oPosition=n}function bValDef(n,t){return n!==null&&n!==undefined&&n!==NaN&&(t||n>=0)}function sComplete0(n,t){for(n=""+n;n.length<t;)n="0"+n;return n}function WDGPS(){}function GPSEtat(){return navigator!=null&&navigator.geolocation!=null?gpsActive:gpsDesactive}function GPSPCSAppelProcPosition(n,t){gpsPCSPosition!=null&&(gpsPCSPosition.m_oPosition!=null&&(gpsPCSPosition.m_oPosition.coords!=null&&delete gpsPCSPosition.m_oPosition.coords,delete gpsPCSPosition.m_oPosition),delete gpsPCSPosition);var i=clWDUtil.oCloneObjet(t,t);i.coords=clWDUtil.oCloneObjet(i.coords,i.coords);gpsPCSPosition=new WDGeoPosition(i);n(gpsPCSPosition,gpsErreurOK)}function GPSPCSAppelProcErreur(n,t){n(null,t.code)}function GPSRecuperePosition(n,t){GPSEtat()==gpsActive&&navigator.geolocation.getCurrentPosition(function(t){GPSPCSAppelProcPosition(n,t)},function(t){GPSPCSAppelProcErreur(n,t)},{timeout:undefined===t?6e4:t})}function GPSSuitDeplacement(n,t,i){if(GPSEtat()==gpsActive)return(gpsPCSSuivi!=null&&(WDGPS._RetireEcoute(gpsPCSSuivi),gpsPCSSuivi=null),n==null)?void 0:gpsPCSSuivi=WDGPS._AjouteEcoute({fCallback:n,nDelai:t,nDistance:i})}function GPSArreteDetection(n){WDGPS._RetireEcoute(n)}function GPSTermine(){WDGPS._Term(!0)}function GPSDetectePosition(n,t,i,r,u){if(GPSEtat()==gpsActive)return WDGPS._AjouteEcoute({fCallback:n,nLatitude:t,nLongitude:i,nRayon:r,nDelai:u})}function GPSDernierePosition(){return gpsPCSPosition}function WDDinoMarqueur(n){if(WDTypeAvance.prototype.constructor.apply(this,[]),this.m_sNom=WDCarteAPI.CreerIdentifiant(),this.m_sDescription="",this.m_sImage="",this.m_sActionClic="",this.m_eAlignement=WDCarteAPI.emqHaut,this.m_czIDInterne=undefined,n instanceof WDGeoPosition)this.SetPosition(n);else{this.m_oPosition=new WDGeoPosition;var t=this;clWDUtil.isObject(n)?(clWDUtil.bForEachIn(n,function(i){return t.hasOwnProperty(i)&&(t[i]=n[i]),!0}),n.m_dLatitude!==undefined&&n.m_dLongitude!==undefined&&(this.SetLatitude(n.m_dLatitude),this.SetLongitude(n.m_dLongitude))):clWDUtil.isArray(n)&&(this.SetLatitude(n[0]),this.SetLongitude(n[1]))}}function WDDinoAdresse(){WDTypeAvance.prototype.constructor.apply(this,[]);this.m_czRue="";this.m_czVille="";this.m_czCodePostal="";this.m_czRegion="";this.m_czPays="";this.m_pclGeoPosition=undefined}function WDCarte(){if(arguments.length&&(WDChampParametres.prototype.constructor.apply(this,arguments),this.m_oModele={},this.m_oSuitDeplacement=undefined,this.m_bUpdateUI=!1,window.clWDUtil!==undefined&&document.documentMode!==undefined&&document.compatMode!="BackCompat")){var n=this;clWDUtil.AttacheOnScrollResize(function(t,i){var r,u;i||(r=document.getElementById(n.__sGetHote()),r)&&(u=r.clientHeight,n.m_nDerniereHauteur&&n.m_nDerniereHauteur==u||n.m_oModele.UpdateSize&&n.m_oModele.UpdateSize(),n.m_nDerniereHauteur=u)})}}var gpsActive=1,gpsDesactive=2,gpsErreurOK=0,gpsErreurDroit=1,gpsErreurPosition=2,gpsErreurTimeout=3,gpsPCSSuivi=null,gpsPCSPosition=null;typeof Number.prototype.toRad=="undefined"&&(Number.prototype.toRad=function(n){return(n?this%360:this)*Math.PI/180},Number.prototype.toDeg=function(n){return(n?this%360:this)*(180/Math.PI)});WDGeoPosition.prototype=new WDTypeAvance(!0);WDGeoPosition.prototype.constructor=WDGeoPosition;WDGeoPosition.prototype.ms_nIdPropLatitude=0;WDGeoPosition.prototype.ms_nIdPropLongitude=1;WDGeoPosition.prototype.ms_nIdPropAltitude=2;WDGeoPosition.prototype.ms_nIdPropAltitudeValide=3;WDGeoPosition.prototype.ms_nIdPropDirection=4;WDGeoPosition.prototype.ms_nIdPropDirectionValide=5;WDGeoPosition.prototype.ms_nIdPropPrecision=6;WDGeoPosition.prototype.ms_nIdPropPrecisionValide=7;WDGeoPosition.prototype.ms_nIdPropVitesse=8;WDGeoPosition.prototype.ms_nIdPropVitesseValide=9;WDGeoPosition.prototype.ms_nIdPropDateMesure=10;WDGeoPosition.prototype.ms_nIdPropPositionValide=11;WDGeoPosition.prototype.GetLatitude=function(){return this.m_oPosition.coords.latitude};WDGeoPosition.prototype.GetLongitude=function(){return this.m_oPosition.coords.longitude};WDGeoPosition.prototype.SetLatitude=function(n){this.m_oPosition.m_dLatitude=this.m_oPosition.coords.latitude=parseFloat(n)};WDGeoPosition.prototype.SetLongitude=function(n){this.m_oPosition.m_dLongitude=this.m_oPosition.coords.longitude=parseFloat(n)};WDGeoPosition.prototype.GetProp=function(n){switch(n){case this.ms_nIdPropLatitude:return this.GetLatitude();case this.ms_nIdPropLongitude:return this.GetLongitude();case this.ms_nIdPropAltitude:return bValDef(this.m_oPosition.coords.altitude,!0)?this.m_oPosition.coords.altitude:0;case this.ms_nIdPropAltitudeValide:return bValDef(this.m_oPosition.coords.altitude,!0);case this.ms_nIdPropDirection:return bValDef(this.m_oPosition.coords.heading)?this.m_oPosition.coords.heading:0;case this.ms_nIdPropDirectionValide:return bValDef(this.m_oPosition.coords.heading);case this.ms_nIdPropPrecision:return bValDef(this.m_oPosition.coords.accuracy)?this.m_oPosition.coords.accuracy:0;case this.ms_nIdPropPrecisionValide:return bValDef(this.m_oPosition.coords.accuracy);case this.ms_nIdPropVitesse:return bValDef(this.m_oPosition.coords.speed)?this.m_oPosition.coords.speed:0;case this.ms_nIdPropVitesseValide:return bValDef(this.m_oPosition.coords.speed);case this.ms_nIdPropDateMesure:var t=new Date(this.m_oPosition.timestamp);return sComplete0(t.getFullYear(),4)+sComplete0(t.getMonth()+1,2)+sComplete0(t.getDate(),2)+sComplete0(t.getHours(),2)+sComplete0(t.getMinutes(),2)+sComplete0(t.getSeconds(),2)+sComplete0(Math.floor(this.m_oPosition.timestamp%1e3/10),2);case this.ms_nIdPropPositionValide:return bValDef(this.GetLatitude())&&bValDef(this.GetLongitude());default:return WDTypeAvance.prototype.GetProp.apply(this,arguments)}};WDGeoPosition.prototype.vbGetPositionValide=function(){return WDCarteAPI.bValideCoordonnees(this.m_dLatitude,this.m_dLongitude)};WDGeoPosition.prototype.SetProp=function(n,t){var r=this.m_oPosition,i,u;if(r!=null&&(i=r.coords,i!=null))switch(n){case this.ms_nIdPropLatitude:this.SetLatitude(t);break;case this.ms_nIdPropLongitude:this.SetLongitude(t);break;case this.ms_nIdPropAltitude:i.altitude=t;break;case this.ms_nIdPropDirection:i.heading=t;break;case this.ms_nIdPropPrecision:i.accuracy=t;break;case this.ms_nIdPropVitesse:i.speed=t;break;case this.ms_nIdPropDateMesure:u=new Date;clWDUtil.bSetDateHeureFromWL(u,t,!1,!0,!0);r.timestamp=u.getTime();break;default:WDTypeAvance.prototype.SetProp.apply(this,arguments)}};WDGPS.gtabWatch=[];WDGPS.gnIdSurveillancePosition=-1;WDGPS._RetireEcoute=function(n){WDGPS.gtabWatch[n]=undefined;WDGPS._Term()};WDGPS._AjouteEcoute=function(n){return WDGPS._Init(),WDGPS.gtabWatch.push(n)-1};WDGPS._Init=function(){WDGPS.gnIdSurveillancePosition===-1&&WDGPS._SurveillancePosition()};WDGPS._Term=function(n){if(WDGPS.gnIdSurveillancePosition>-1){if(n!==!0)for(var t=0;t<WDGPS.gtabWatch.length;++t)if(WDGPS.gtabWatch[t]!==undefined)return;WDGPS.gtabWatch=[];navigator.geolocation.clearWatch(WDGPS.gnIdSurveillancePosition)}};WDGPS._SurveillancePosition=function(){WDGPS.gnIdSurveillancePosition=navigator.geolocation.watchPosition(function(n){WDGPS._SurveillancePositionSucces(n)},function(n){WDGPS._SurveillancePositionErreur(n)})};WDGPS._gnDistanceEnMetreEntreDeuxPoints=function(n,t,i,r){var o=Number(n).toRad(),s=Number(i).toRad(),u=Number(i-n).toRad(),f=Number(r-t).toRad(),e=Math.sin(u/2)*Math.sin(u/2)+Math.cos(o)*Math.cos(s)*Math.sin(f/2)*Math.sin(f/2),h=2*Math.atan2(Math.sqrt(e),Math.sqrt(1-e));return 6371*h};WDGPS._SurveillancePositionSucces=function(n){for(var t,u,r,f,e,i=WDGPS.gtabWatch.length-1;i>-1;--i)if(t=WDGPS.gtabWatch[i],t){if((t.nDelai||-1)>-1)if(t.nPremierTimestamp){if(n.timestamp-t.nPremierTimestamp>t.nDelai*10){WDGPS._RetireEcoute(i);continue}}else t.nPremierTimestamp=n.timestamp;if(t.nLatitude!==undefined){if(u=t.nRayon||50,r=u>=WDGPS._gnDistanceEnMetreEntreDeuxPoints(n.coords.latitude,n.coords.longitude,t.nLatitude,t.nLongitude),t.bEtaitDansZone===undefined&&(t.bEtaitDansZone=!1),r==t.bEtaitDansZone)continue;t.bEtaitDansZone=r}else{if(f=t.nDistance||5,t.oDernierePosition&&(e=WDGPS._gnDistanceEnMetreEntreDeuxPoints(n.coords.latitude,n.coords.longitude,t.oDernierePosition.latitude,t.oDernierePosition.longitude),e<f))continue;t.oDernierePosition=n.coords}GPSPCSAppelProcPosition(t.fCallback,n)}};WDGPS._SurveillancePositionErreur=function(n){for(var i,t=0;t<WDGPS.gtabWatch.length;++t)(i=WDGPS.gtabWatch[t],i)&&GPSPCSAppelProcErreur(i.fCallback,n)};WDDinoMarqueur.prototype=new WDTypeAvance(!0);WDDinoMarqueur.prototype.constructor=WDDinoMarqueur;WDDinoMarqueur.prototype.ms_sNomPourParam="MARQUEUR";WDDinoMarqueur.prototype.SetIDInterne=function(n){this.m_czIDInterne=n};WDDinoMarqueur.prototype.pszGetIDInterne=function(){return this.m_czIDInterne};WDDinoMarqueur.prototype.SetPosition=function(n){this.m_oPosition=n;this.m_oPosition&&(this.SetLatitude(this.m_oPosition.GetLatitude()),this.SetLongitude(this.m_oPosition.GetLongitude()))};WDDinoMarqueur.prototype.SetLatitude=function(n){this.m_oPosition.SetLatitude(n);this.m_dLatitude=n};WDDinoMarqueur.prototype.SetLongitude=function(n){this.m_oPosition.SetLongitude(n);this.m_dLongitude=n};WDDinoMarqueur.prototype.GetProp=function(n){switch(n){case 0:return this.m_sNom;case 1:return this.m_oPosition;case 2:return this.m_sDescription;case 3:return this.m_sImage;case 4:return this.m_sActionClic;case 5:return this.m_eAlignement;default:return WDTypeAvance.prototype.GetProp.apply(this,arguments)}};WDDinoMarqueur.prototype.SetProp=function(n,t){switch(n){case 0:this.m_sNom=t;break;case 1:this.SetPosition(t);break;case 2:this.m_sDescription=t;break;case 3:this.m_sImage=t;break;case 4:this.m_sActionClic=t;break;case 5:this.m_eAlignement=t;break;default:WDTypeAvance.prototype.SetProp.apply(this,arguments)}};WDDinoAdresse.prototype=new WDTypeAvance(!0);WDDinoAdresse.prototype.constructor=WDDinoAdresse;WDDinoAdresse.prototype.GetProp=function(n){switch(n){case 0:return this.m_czRue;case 1:return this.m_czVille;case 2:return this.m_czCodePostal;case 3:return this.m_czRegion;case 4:return this.m_czPays;case 5:return this.m_pclGeoPosition||(this.m_pclGeoPosition=new WDGeoPosition),this.m_pclGeoPosition;default:return WDTypeAvance.prototype.GetProp.apply(this,arguments)}};WDDinoAdresse.prototype.SetProp=function(n,t){switch(n){case 0:this.m_czRue=t;break;case 1:this.m_czVille=t;break;case 2:this.m_czCodePostal=t;break;case 3:this.m_czRegion=t;break;case 4:this.m_czPays=t;break;case 5:this.m_pclGeoPosition||(this.m_pclGeoPosition=new WDGeoPosition);this.m_pclGeoPosition.Clone(t);break;default:WDTypeAvance.prototype.SetProp.apply(this,arguments)}};WDDinoAdresse.prototype.vGetAdresseComplete=function(){var n="";return this.m_czRue&&(n+=this.m_czRue),this.m_czVille&&(n&&(n+=", "),n+=this.m_czVille),this.m_czCodePostal&&(n&&(n+=", "),n+=this.m_czCodePostal),this.m_czRegion&&(n&&(n+=", "),n+=this.m_czRegion),this.m_czPays&&(n&&(n+=", "),n+=this.m_czPays),n};WDCarte.prototype=new WDChampParametres;WDCarte.prototype.constructor=WDCarte;WDCarte.prototype.OnDisplay=function(n,t){if((WDChampParametres.prototype.OnDisplay.apply(this,arguments),t)&&(this.m_bUpdateUI===!0||!this.oRecupereAPI())){this.m_bUpdateUI=!1;var i=document.getElementById(this.__sGetHote());i&&clWDUtil.bEstFils(i,n)&&this.__Reinit()}};WDCarte.prototype.GetProp=function(n){switch(n){case this.XML_CHAMP_PROP_NUM_MODECARTE:return this.oRecupereAPI()?this.m_oModele.MAP_GetModeCarte():this.m_oParametres.m_eModeCarte;case this.XML_CHAMP_PROP_NUM_ZOOM:return this.oRecupereAPI()?this.m_oModele.MAP_GetZoom():this.m_oParametres.m_nZoom;case this.XML_CHAMP_PROP_NUM_IMAGE:return this.m_oParametres.m_sImage;default:return WDChampParametres.prototype.GetProp.apply(this,arguments)}};WDCarte.prototype.SetProp=function(n,t,i){switch(n){case this.XML_CHAMP_PROP_NUM_MODECARTE:this.m_oParametres.m_eModeCarte=i;this.oRecupereAPI()&&this.m_oModele.MAP_SetModeCarte(i);break;case this.XML_CHAMP_PROP_NUM_ZOOM:this.m_oDonnees.m_nZoom=i;this.oRecupereAPI()&&(i==-1?this.m_oModele.MAP_SetZoomAdapte():this.m_oModele.MAP_SetZoom(i));break;case this.XML_CHAMP_PROP_NUM_IMAGE:this.m_oParametres.m_sImage=i;break;case this.XML_CHAMP_PROP_NUM_ETAT:return this.m_oModele&&this.m_oModele.PasseEnLectureSeuleEx(0!=i),i;default:return WDChampParametres.prototype.SetProp.apply(this,arguments)}return this.__UpdateChampCache()};WDCarte.prototype.SetValeur=function(n,t){var i=WDChamp.prototype.SetValeur.apply(this,arguments);return this.AffichePosition(t,undefined,!1),i};WDCarte.prototype.GetValeur=function(){return this.oRecupereAPI()?this.RecuperePosition():undefined};WDCarte.prototype._vLiaisonHTML=function(){WDChampParametres.prototype._vLiaisonHTML.apply(this,arguments)};WDCarte.prototype.Init=function(){WDChampParametres.prototype.Init.apply(this,arguments);this.__Reinit()};WDCarte.prototype.__sGetHote=function(){return this.m_sAliasChamp+"_HTE"};WDCarte.prototype.__Reinit=function(){if(!clWDUtil.bEstDisplay(document.getElementById(this.__sGetHote()),document,!0)){this.m_bUpdateUI=!0;return}this.oRecupereAPI()&&(this.m_oModele=undefined);var n=this;WDCarteAPI.s_pclFactory(WDCarteGoogleMaps,this.__sGetHote(),!0,function(t){t.m_nTypeCarte_Initial=n.m_oParametres.m_eModeCarte;t.m_bAfficheControleZoom_Initial=n.m_oParametres.m_bControleZoom;t.m_sImageMarqueur_Initial=n.m_oParametres.m_sImage;t.m_nLatitude_Initial=n.m_oDonnees.m_dLatitude;t.m_nLongitude_Initial=n.m_oDonnees.m_dLongitude;t.m_nZoom_Initial=n.m_oDonnees.m_nZoom;t.m_sAdresse_Initial=n.m_oDonnees.m_sAdresse},function(t){var h,c,u,e,i,f,o,r,s;for(n.m_bPendantReInit=!0,clWDUtil.bForEachIn(n.m_oModele,function(n,i){return t[n]=i,!0}),n.m_oModele=t,t.m_oChamp=n,h=n.__domGetChampCache(),c=h.outerHTML.toLowerCase(),t.PasseEnLectureSeuleEx(h&&(c.indexOf("disabled")>-1||c.indexOf("readonly")>-1)),u=0;u<n.m_oDonnees.m_tabMarqueurs.length;++u)n.AjouteMarqueur(n.m_oDonnees.m_tabMarqueurs[u]=new WDDinoMarqueur(n.m_oDonnees.m_tabMarqueurs[u]));for(e=0;e<n.m_oDonnees.m_tabItineraires.length;++e){for(i=n.m_oDonnees.m_tabItineraires[e],f=[],o=0;o<i.m_tabPositions.length;++o)r=i.m_tabPositions[o],clWDUtil.isObject(r)?r.m_sAdresse?f.push(r.m_sAdresse):f.push([r.m_dLatitude,r.m_dLongitude]):f.push(r);n.AjouteItineraire(f,i.m_nMode,i.m_cCouleur,i.m_nOpacite/2.55,i.m_nEpaisseur,i.m_nID)}n.m_oSuitDeplacement&&n.SuitDeplacement.apply(n,n.m_oSuitDeplacement);n.__UpdateChampCache();s=n.RecuperePCode(n.ms_nEventNavCarteChangePosition);s&&(n.m_oModele.EcouteChangementPosition(s),n.m_oParametres.m_bAppelPCodeModif&&s());n.m_bPendantReInit=!1;n.m_oDonnees.m_nZoom==-1&&n.m_oModele.MAP_SetZoomAdapte()})};WDCarte.prototype.__domGetChampCache=function(){return document.getElementById(this.m_sAliasChamp+"_DATA")};WDCarte.prototype.__UpdateChampCache=function(){for(var i=JSON.parse(JSON.stringify(this.m_oDonnees)),n=0,r,t,n=0;n<i.m_tabMarqueurs.length;++n)delete i.m_tabMarqueurs[n].m_oPosition,delete i.m_tabMarqueurs[n].m_czIDInterne;for(n=0;n<i.m_tabItineraires.length;++n)for(r=i.m_tabItineraires[n],t=0;t<r.m_tabPositions.length;++t)typeof r.m_tabPositions[t]=="string"?r.m_tabPositions[t]={m_sAdresse:r.m_tabPositions[t]}:delete r.m_tabPositions[t].m_oPosition;return this.__domGetChampCache().value=JSON.stringify(i)};WDCarte.prototype._vAppliqueParametres=function(){WDChampParametres.prototype._vAppliqueParametres.apply(this,arguments);this._vLiaisonHTML();this.__Reinit()};WDCarte.prototype._vsConstruitParam=function(){var n=[],t=WDChampParametres.prototype._vsConstruitParam.apply(this,arguments);return t.length>0&&n.push(t),n.join(",")};WDCarte.prototype.AffichePosition=function(n,t,i){return(n instanceof WDDinoAdresse&&(n=n.m_pclGeoPosition&&n.m_pclGeoPosition.vbGetPositionValide()?n.m_pclGeoPosition:n.vGetAdresseComplete()),n instanceof WDGeoPosition?(this.m_oDonnees.m_dLatitude=n.GetLatitude(),this.m_oDonnees.m_dLongitude=n.GetLongitude()):this.m_oDonnees.m_sAdresse=""+n,this.__UpdateChampCache(),!this.oRecupereAPI())?!0:(i===undefined&&(i=this.m_oDonnees.m_bAnimation),clWDUtil.isObject(n)?this.m_oModele.MAP_SetPosition(n.GetLatitude(),n.GetLongitude(),i,t):this.m_oModele.MAP_SetPositionLieux(n,i,t),!0)};WDCarte.prototype._oGetPositionFromLatLng=function(n){var t=new WDGeoPosition,i=(n||"").indexOf(",");return i>0&&(t.SetLatitude(n.substr(0,i)),t.SetLongitude(n.substr(i+1))),t};WDCarte.prototype.RecuperePosition=function(){return this.oRecupereAPI()?this._oGetPositionFromLatLng(this.m_oModele.MAP_GetPosition()):undefined};WDCarte.prototype.InfoXY=function(n,t){return this.oRecupereAPI()?this._oGetPositionFromLatLng(this.m_oModele.MAP_GetPositionFromPoint(n,t)):undefined};WDCarte.prototype.InfoPosition=function(n){return this.oRecupereAPI()?this.m_oModele.MAP_GetPointFromPosition(n.GetLatitude(),n.GetLongitude()).replace(",","\t"):undefined};WDCarte.prototype.AjouteMarqueur=function(n,t){var i,r,u,e,f;if(n instanceof WDDinoMarqueur){if(i=n,!this.m_bPendantReInit&&this._oFindMarqueurParNom(i.m_sNom))return!1}else n instanceof WDGeoPosition?i=new WDDinoMarqueur(n):(i=new WDDinoMarqueur,i.SetLatitude(n),i.SetLongitude(t));if(this.m_bPendantReInit)r=i.pszGetIDInterne();else if(r=undefined,u=new WDDinoMarqueur,u.Clone(i),this.m_oDonnees.m_tabMarqueurs.push(u),this.__UpdateChampCache(),this.oRecupereAPI())u.SetIDInterne(r);else return u.SetIDInterne(r||WDCarteAPI.CreerIdentifiant()),!0;return(e=this.m_oParametres.m_sImage,i.m_sImage&&i.m_sImage.length&&(e=i.m_sImage),i.m_oPosition==undefined)?!1:(f=this.m_oModele.MAP_AjouteMarqueur(i.m_oPosition.GetLatitude(),i.m_oPosition.GetLongitude(),i.m_sDescription,i.m_sActionClic,clWDUtil.sGetCheminImage(e,""),r,i.m_eAlignement),f===!1)?(this.m_bPendantReInit||this.m_oDonnees.m_tabMarqueurs.pop(),!1):(i.SetIDInterne(r||f),u&&u.SetIDInterne(r||f),!0)};WDCarte.prototype._oFindMarqueurParNom=function(n){for(var t=0;t<this.m_oDonnees.m_tabMarqueurs.length;++t)if(this.m_oDonnees.m_tabMarqueurs[t].m_sNom==n)return this.m_oDonnees.m_tabMarqueurs[t];return undefined};WDCarte.prototype._oFindMarqueur=function(n){if(n instanceof WDDinoMarqueur){if(n.pszGetIDInterne()!==undefined)return n;n=n.m_sNom}return n&&(n=this._oFindMarqueurParNom(n)),n};WDCarte.prototype.SupprimeMarqueur=function(n){var i,t;if(!n)return this.SupprimeToutMarqueur();if(n=this._oFindMarqueur(n),!n)return!1;for(i=[],t=0;t<this.m_oDonnees.m_tabMarqueurs.length;++t)this.m_oDonnees.m_tabMarqueurs[t].pszGetIDInterne()!=n.pszGetIDInterne()&&i.push(this.m_oDonnees.m_tabMarqueurs[t]);return(this.m_oDonnees.m_tabMarqueurs=i,this.__UpdateChampCache(),!this.oRecupereAPI())?!0:this.m_oModele.MAP_SupprimeMarqueur(n.pszGetIDInterne())};WDCarte.prototype.ModifieMarqueur=function(n){var r=this._oFindMarqueur(n),i,t;if(!r)return!1;for(i=r.pszGetIDInterne(),t=0;t<this.m_oDonnees.m_tabMarqueurs.length;++t)if(this.m_oDonnees.m_tabMarqueurs[t].pszGetIDInterne()==i){this.m_oDonnees.m_tabMarqueurs[t].Clone(n);this.m_oDonnees.m_tabMarqueurs[t].SetIDInterne(i);break}return(this.__UpdateChampCache(),!this.oRecupereAPI())?!0:this.m_oModele.MAP_ModifieMarqueur(i,n.m_oPosition.GetLatitude(),n.m_oPosition.GetLongitude(),n.m_sDescription,clWDUtil.sGetCheminImage(n.m_sImage,clWDUtil.sGetCheminImage(this.m_oParametres.m_sImage,"")),n.m_eAlignement)};WDCarte.prototype.SupprimeTout=function(){return this.SupprimeToutItineraire()&&this.SupprimeToutMarqueur()};WDCarte.prototype.SupprimeToutMarqueur=function(){return(this.m_oDonnees.m_tabMarqueurs=[],this.__UpdateChampCache(),!this.oRecupereAPI())?!0:this.m_oModele.MAP_SupprimeToutMarqueur()};WDCarte.prototype.AjouteItineraire=function(n,t,i,r,u,f){var o,s,e,h;if(!clWDUtil.isArray(n))return this.AjouteItineraireStr.apply(this,arguments);for(o=[],s=0;s<n.length;++s)e=n[s],e instanceof WDDinoAdresse&&(e=e.m_pclGeoPosition&&e.m_pclGeoPosition.vbGetPositionValide()?e.m_pclGeoPosition:e.vGetAdresseComplete()),e instanceof WDDinoMarqueur?o.push([e.m_oPosition.GetLatitude(),e.m_oPosition.GetLongitude()]):e instanceof WDGeoPosition?o.push([e.GetLatitude(),e.GetLongitude()]):clWDUtil.isArray(e)?o.push(e):o.push(e);return!this.m_bPendantReInit&&(this.m_oDonnees.m_tabItineraires.push(h={m_tabPositions:o,m_nMode:t,m_cCouleur:i,m_nOpacite:r*2.55,m_nEpaisseur:u,m_nID:f||WDCarteAPI.CreerIdentifiant()}),this.__UpdateChampCache(),!this.oRecupereAPI())?h.m_nID:this.m_oModele.MAP_AjouteItineraireArray(o,t,i,r,u,f)};WDCarte.prototype.AjouteItineraireStr=function(n,t,i,r,u,f,e){if(!this.m_bPendantReInit){var o;if(this.m_oDonnees.m_tabItineraires.push(o={m_tabPositions:[n,t],m_nMode:i,m_cCouleur:r,m_nOpacite:u*2.55,m_nEpaisseur:f,m_nID:WDCarteAPI.CreerIdentifiant()}),this.__UpdateChampCache(),!this.oRecupereAPI())return o.m_nID}return this.m_oModele.MAP_AjouteItineraireArray([n,t],i,r,u,f,e)};WDCarte.prototype.SupprimeItineraire=function(n){for(var i=[],t=0;t<this.m_oDonnees.m_tabItineraires.length;++t)this.m_oDonnees.m_tabItineraires[t].m_nID!=n&&i.push(this.m_oDonnees.m_tabItineraires[t]);return(this.m_oDonnees.m_tabItineraires=i,this.__UpdateChampCache(),!this.oRecupereAPI())?!0:this.m_oModele.MAP_SupprimeItineraire(n)};WDCarte.prototype.SupprimeToutItineraire=function(){return(this.m_oDonnees.m_tabItineraires=[],this.__UpdateChampCache(),!this.oRecupereAPI())?!0:this.m_oModele.MAP_SupprimeToutItineraire()};WDCarte.prototype.SuitDeplacement=function(n,t){return!this.m_bPendantReInit&&(this.m_oSuitDeplacement=arguments,!this.oRecupereAPI())?!0:this.m_oModele.MAP_SuitDeplacement(n,t)};WDCarte.prototype.FinDeplacement=function(){return(this.m_oSuitDeplacement=undefined,!this.oRecupereAPI())?!0:this.m_oModele.MAP_FinDeplacement()};WDCarte.prototype.oRecupereAPI=function(){return this.m_oModele.m_clCarte};WDCarte.prototype.DistanceItineraire=function(n){return this.m_oModele.MAP_DistanceItineraire(n)};typeof JSON!="object"&&(JSON={}),function(){"use strict";function i(n){return n<10?"0"+n:n}function o(n){return u.lastIndex=0,u.test(n)?'"'+n.replace(u,function(n){var t=s[n];return typeof t=="string"?t:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function e(i,r){var c,l,s,a,v=n,h,u=r[i];u&&typeof u=="object"&&typeof u.toJSON=="function"&&(u=u.toJSON(i));typeof t=="function"&&(u=t.call(r,i,u));switch(typeof u){case"string":return o(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(n+=f,h=[],Object.prototype.toString.apply(u)==="[object Array]"){for(a=u.length,c=0;c<a;c+=1)h[c]=e(c,u)||"null";return s=h.length===0?"[]":n?"[\n"+n+h.join(",\n"+n)+"\n"+v+"]":"["+h.join(",")+"]",n=v,s}if(t&&typeof t=="object")for(a=t.length,c=0;c<a;c+=1)l=t[c],typeof l=="string"&&(s=e(l,u),s&&h.push(o(l)+(n?": ":":")+s));else for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(s=e(l,u),s&&h.push(o(l)+(n?": ":":")+s));return s=h.length===0?"{}":n?"{\n"+n+h.join(",\n"+n)+"\n"+v+"}":"{"+h.join(",")+"}",n=v,s}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+i(this.getUTCMonth()+1)+"-"+i(this.getUTCDate())+"T"+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var r,u,n,f,s,t;typeof JSON.stringify!="function"&&(u=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(i,r,u){var o;if(n="",f="",typeof u=="number")for(o=0;o<u;o+=1)f+=" ";else typeof u=="string"&&(f=u);if(t=r,r&&typeof r!="function"&&(typeof r!="object"||typeof r.length!="number"))throw new Error("JSON.stringify");return e("",{"":i})});typeof JSON.parse!="function"&&(r=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(n,t){function u(n,i){var f,e,r=n[i];if(r&&typeof r=="object")for(f in r)Object.prototype.hasOwnProperty.call(r,f)&&(e=u(r,f),e!==undefined?r[f]=e:delete r[f]);return t.call(n,i,r)}var i;if(n=String(n),r.lastIndex=0,r.test(n)&&(n=n.replace(r,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return i=eval("("+n+")"),typeof t=="function"?u({"":i},""):i;throw new SyntaxError("JSON.parse");})}()
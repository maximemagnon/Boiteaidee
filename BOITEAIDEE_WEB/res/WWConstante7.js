// WWConstante7.js
/*! 24.0.1.0 */
/*! VersionVI: 01F240075n x */
// Le seul support technique disponible pour cette librairie est accessible a travers le service "Assistance Directe".

// Days of the week
var STD_LUNDI = "Lunes";
var STD_MARDI = "Martes";
var STD_MERCREDI = "Mi\xE9rcoles";
var STD_JEUDI = "Jueves";
var STD_VENDREDI = "Viernes";
var STD_SAMEDI = "S\xE1bado";
var STD_DIMANCHE = "Domingo";

// Month of the year
var STD_JANVIER = "Enero";
var STD_FEVRIER = "Febrero";
var STD_MARS = "Marzo";
var STD_AVRIL = "Abril";
var STD_MAI = "Mayo";
var STD_JUIN = "Junio";
var STD_JUILLET = "Julio";
var STD_AOUT = "Augosto";
var STD_SEPTEMBRE = "Septiembre";
var STD_OCTOBRE = "Octubre";
var STD_NOVEMBRE = "Noviembre";
var STD_DECEMBRE = "Diciembre";

// Constants for the popup menu of tables/loopers
// Export
var TABLE_EXPORT =
{
	EXCEL: { sLibelle: "Exportar a Excel...", sTitre: "Exportar el contenido a Excel..." },
	WORD: { sLibelle: "Exportar a Word...", sTitre: "Exportar el contenido a Word..." },
	XML: { sLibelle: "Exportar a XML...", sTitre: "Exportar el contenido a XML..." },
	PDF: { sLibelle: "Imprimir en PDF...", sTitre: "Imprimir en un archivo PDF..." }
};
// Find/Filter
var TABLE_FILTRE =
{
	RECHERCHE: { sLibelle: "Buscar" },
	FILTRE: { sLibelle: "Filtros:" },
	FILTRE_EGAL: { sLibelle: "Es igual a" },
	FILTRE_COMMENCE: { sLibelle: "Comienza por" },
	FILTRE_CONTIENT: { sLibelle: "Contiene" },
	FILTRE_TERMINE: { sLibelle: "Termina por" },
//	FILTRE_VIDE: { sLibelle: "Est\xE1 vac\xEDo" },
	FILTRE_DIFFERENT: { sLibelle: "Es diferente de" },
	FILTRE_COMMENCE_PAS: { sLibelle: "No comienza por" },
	FILTRE_CONTIENT_PAS: { sLibelle: "No contiene" },
	FILTRE_TERMINE_PAS: { sLibelle: "No termina por" },
	FILTRE_SUPERIEUR: { sLibelle: "Superior a" },
	FILTRE_SUPERIEUR_EGAL: { sLibelle: "Superior o igual a" },
	FILTRE_INFERIEUR: { sLibelle: "Inferior a" },
	FILTRE_INFERIEUR_EGAL: { sLibelle: "Inferior o igual a" },
	FILTRE_SUPPRIME: { sLibelle: "Eliminar el filtro" }
};

// Constants for the popup menu of dashboards
var TDB_MENU =
{
	EDITION: { sLibelle: "Modo edici\xF3n" },
	CONFINIT: { sLibelle: "Restablecer la configuraci\xF3n inicial" }
};

// Error messages of debug
var STD_TITRE_TRACE = "Rastreo del c\xF3digo de WEBDEV en el navegador";
var STD_INFO_TRACE = "Ctrl+P le permite imprimir el c\xF3digo de rastreo";
var STD_ERREUR_MESSAGE_UPLOAD = "El upload ha fallado.\nUn error inesperado ocurri\xF3 al subir un archivo.\nAseg\xFArese de que los archivos que desea subir no sean demasiado grandes.";
var STD_ERREUR_MESSAGE_VIDEO = "Ha sido imposible mostrar el fichero de video: %1\n- Verifique si el fichero existe en el servidor\n- Verifique si el Servidor Web autoriza la consultaci\xF3n de este tipo de fichero (filtrado por tipo MIME)";

// Tooltips and messages of the toolbar for the chart controls
var CHART_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		PIE: "Gr\xE1fico circular...",
		COL: "Gr\xE1fico de barras...",
		CUR: "Gr\xE1fico de l\xEDneas...",
		STO: "Gr\xE1fico de cotizaciones...",
		SAV: "Guardar como...",
		PRI: "Imprimir...",
		LEG: "Leyenda...",
		GDH: "L\xEDneas de cuadr\xEDcula horizontales",
		GDV: "L\xEDneas de cuadr\xEDcula verticales",
		SMO: "Suavizado",
		GRA: "Pendiente",
		RAI: "Estilo 3D",
		ANT: "Anti-aliasing",
		TRA: "Transparencia",
		MIR: "Mira",
		ANI: "Animaci&#xF3;n",
		INT: "Interactividad",
		ZOH: "Zoom horizontal",
		ZOV: "Zoom vertical",
		FUS: "Pantalla completa"
	},

	// Caption of the menu for the legend
	LEG:
	{
		0: "Ninguno",
		1: "Derecha",
		2: "Izquierda",
		3: "Parte superior",
		4: "Parte inferior"
	},

	// Text of the menus for the types
	// Pie charts
	PIE:
	{
		0: "C\xEDrculo",
		1: "Semi-c\xEDrculo",
		2: "Anillo",
		3: "Embudo"
		4: "C\xEDrculo multinivel"
	},
	// Bar charts
	COL:
	{
		0: "Gr\xE1fico de barra agrupada",
		1: "Gr\xE1fico de barra apilada",
		2: "Gr\xE1fico de barra agrupada horizontal",
		3: "Gr\xE1fico de barra apilada vertical",
		4: "Cascada"
	},
	// Line charts
	CUR:
	{
		0: "L\xEDnea",
		1: "Dispersi\xF3n",
		2: "\xC1rea",
		3: "Radar",
		4: "Burbujas",
		5: "Mapa de calor"
	},
	// Stock charts
	STO:
	{
		0: "Candela",
		1: "Gr\xE1ficos de barra",
		2: "M\xEDnimo M\xE1ximo"
	},
	// Tooltip
	MIR:
	{
		0: "Mira m&#xFA;ltiple",
		1: "Mira",
		2: "Tooltip"
	},
	// Parameters
	PARAMS: "Par&#225;metros"
};

// Tooltips and messages in the toolbar of the rich HTML edit control
var HTML_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		GRA: "Negrita",
		ITA: "It\xE1lica",
		SOU: "Subraya",
		BAR: "Tachado",
		AGA: "Alineado izquierdo",
		ACE: "Centrado",
		ADR: "Alineado derecho",
		AJU: "Justificado",
		LNU: "Numeraci\xF3n",
		LPU: "Vi\xF1etas",
		RMO: "Disminuir tabulaci\xF3n",
		RPL: "Incrementar tabulaci\xF3n",
		EXP: "Exponente",
		IND: "Sub\xEDndice",
		COL: "Color",
		LNK: "Insertar un link",
		IMG: "Insertar una imagen",
		FNA: "Fuente",
		FSI: "Tama\xF1o de fuente",
		EMO: "Emoticon",
		UND: "Undo",
		RED: "Redo"
	},
	// Couleurs spéciales
	COSP:
	{
		0: "Initial"
	},
	// Couleurs de la palette
	COFP:
	{
		0: "General",
		1: "T\xEDtulo",
		2: "Subt\xEDtulo",
		3: "Nota / Advertencia"
	},
	COLP:
	{
		0: "General",
		1: "T\xEDtulo",
		2: "Subt\xEDtulo",
		3: "Enlace (1)",
		4: "Enlace (1)",
		5: "Nota / Advertencia"
	},
	FHE:
	{
		0: "Corps de texte",
		1: "T\xEDtulo 1",
		2: "T\xEDtulo 2",
		3: "T\xEDtulo 3",
		4: "T\xEDtulo 4",
		5: "T\xEDtulo 5",
		6: "T\xEDtulo 6",
		7: "Preformateado",
		8: "Resaltado"
	},
	FSI:
	{
		0: "Tr\xE8s petit",
		1: "Petit",
		2: "Normal",
		3: "Grand",
		4: "Plus grand",
		5: "Tr\xE8s grand",
		6: "Vraiment tr\xE8s grand"
	},
	HAB:
	{
		0: "Au fil du texte",
		1: "A gauche",
		2: "A droite",
		3: "Paragraphe centr\xE9",
		4: "Paragraphe \xE9tir\xE9",
		5: "Modifier l'image",
		6: "Rogner l'image"
	},
	LNK:
	{
		0: "Ouvrir dans un nouvel onglet",
		1: "Modifier le lien",
		2: "Supprimer le lien"
	},
	EMO:
	{
		0: "Fr\xE9quents",
		1: "Personnes",
		2: "Nature",
		3: "Objets",
		4: "Lieux",
		5: "Symboles"
	}
};

var tabWDErrors =
{
	// Message generiques :
	0: "Error desconocido.",
	1: "Error en el c\xF3digo del navegador:\n",
	// Commun entre plusieurs modules
	// WDLanguage.js
	200: "\xEDndice de valor incorrecto: acceso al \xEDndice %1 pero solo hay %2 valor(es).",
	201: "No se encuentra el elemento en el array asociativo.",
	202: "El array asociativo tiene %1 elemento(s) referenciado(s) por esta clave y se intenta acceder al elemento %2.",
	203: "Esta sintaxis no permite leer un elemento de array asociativo con duplicados, puesto que una clave puede referenciar varios elementos.",
	204: "Formato no v\xE1lido.",
	205: "Las funciones ArrayToString() y ArrayToCSV() solo se pueden utilizar en un array unidimensional o bidimensional.",
	206: "Las funciones ArrayToString() y ArrayToCSV() no se pueden utilizar en un array de estructuras, si la estructura misma contiene un array o una estructura.",
	207: "Una adici\xF3n ordenada solo se puede hacer en un array previamente ordenado por una llamada al m\xE9todo Sort() o al m\xE9todo ArraySort().",
	208: "El array tiene %1 dimensi\xF3n(es) y se accede a \xE9l con %2 dimensi\xF3n(es).",
	209: "Las dimensiones de un array deben ser positivas.",
	210: "Dimensi\xF3n de no permite modificar el n\xFAmero de dimensiones del array.",
	211: "La funci\xF3n %1()/%2() solo se puede utilizar en un array unidimensional.",
	212: "La funci\xF3n %1()/%2() solo puede utilizarse en un array unidimensional o bidimensional.",
	213: "La funci\xF3n %1()/%2() solo se puede utilizar en un array bidimensional.",
	214: "La clasificaci\xF3n no est\xE1 disponible con objetos nativos Javascript transmitidos a un procedimiento WLanguage.",
	215: "No se ha asignado el array din\xE1mico.",
	216: "Dividir por 0",
	217: "Vous devez indiquer le type de recherche (constantes tcDichotomique, tcLin\xE9aire, ...).",
	// WDZRNavigateur.js
	300: "El \xEDndice especificado %1 no es v\xE1lido: el campo est\xE1 vac\xEDo.",
	301: "El \xEDndice especificado %1 no es v\xE1lido: los valores v\xE1lidos est\xE1n entre %2 y %3.",
	302: "Columna <%1> desconocida.",
	303: "El valor de la constante (%1) no es v\xE1lido con esta funci\xF3n.",
	// WDSQL.js
	400: "La consulta <%1> no existe.",
	401: "No hay una conexi\xF3n activa.",
	// WDAJAX.js
	500: "Error al enviar la consulta:\n%1",
	// WDUtil.js
	600: "A una estructura solo se puede asignar otra estructura de la misma definici\xF3n.",
	601: "Tipo incompatible.",
	602: "Operador '%1' no permitido.",
	603: "La propiedad no existe.",
	604: "El par\xE1metro %1 no tiene valor predefinido y no ha recibido ning\xFAn valor.",
	605: "El elemento '%1' no existe.",
	606: "No hay elementos en curso.",
	607: "Formato JSON no v\xE1lido.",
	608: "La serializaci\xF3n JSON solo se puede hacer a una variable tipo string.",
	609: "La deserializaci\xF3n JSON solo se puede hacer a una variable de tipo complejo.",
	610: "No se puede manipular el control (alias :'%1')  porque no est\xE1 presente en el HTML de la p\xE1gina.\nEste control se encuentra (directa o indirectamente) en un plano con carga retardada que a\xFAn no se ha visualizado (ni cargado).",
	611: "No se puede manipular el control (alias :'%1') porque no est\xE1 presente en el HTML de la p\xE1gina.\nEste control (o uno de sus padres) es invisible y la opci\xF3n 'Generar c\xF3digo HTML del control, incluso si es invisible' no est\xE1 activada.",
	612: "\xEDndice de par\xE1metro incorrecto: se accede al par\xE1metro %1 pero hay %2 par\xE1metro(s).",
	613: "Los par\xE1metros de la llamada de c\xF3digo son incorrectos: se esperaban %1 par\xE1metros y se recibieron %2.",
	614: "Los par\xE1metros de la llamada de c\xF3digo son incorrectos: se esperaban entre %1 y %2 par\xE1metros y se recibieron %3.",
	615: "Todav\xEDa no se ha asignado el objeto din\xE1mico.",
	616: "El elemento '%1' no existe.\nSolo se permite el uso de sintaxis de objetos ('AddList.Field' por ejemplo) en un campo manipulado por su nombre, en un par\xE1metro tipado o en una variable.",
	617: "Control '%1' requerido",
	618: "No se puede asignar un objeto de la clase '%1' a un objeto de la clase '%2'.",
	// WDRating.js
	700: "Los l\xEDmites est\xE1n invertidos: el l\xEDmite superior (%2) es inferior al l\xEDmite inferior (%1).",
	// WD.js
	// - Sockets
	800: "Los sockets no est\xE1n disponibles.",
	801: "Ha llamado a la funci\xF3n SocketConnect solicitando %1 como nombre del socket.\nSin embargo, ya existe un socket con este nombre.",
	802: "Ha llamado a la funci\xF3n SocketWrite.\nEl socket con el nombre %1 no existe.",
	803: "Ha llamado a la funci\xF3n SocketClose.\nEl socket con el nombre %1 no existe.",
	804: "Ha llamado a la funci\xF3n SocketWrite.\nEl socket con el nombre %1 a\xFAn no est\xE1 conectado.",
	805: "Ha llamado la funci\xF3n SocketWrite.\nEl socket con el nombre %1 est\xE1 cerrado.",
	// - Conversions de types
	900: "Ocurri\xF3 un error al pasar el par\xE1metro %1.\nSi se pasa un par\xE1metro por direcci\xF3n, un elemento de tipo '%2' no puede convertirse a tipo '%3'. Utilice un par\xE1metro local en el procedimiento llamado o pase un par\xE1metro de tipo '%3'.",
	901: "El nombre/valor '%1' no existe en la enumeraci\xF3n/combinaci\xF3n o ha sido eliminado o renombrado.",
	902: "El valor '%1' de la enumeraci\xF3n no tiene valor asociado.",
	903: "Un elemento de tipo '%2' no puede convertirse al tipo '%1'.",
	// - Champs
	1000: "The value of ..TokenCurrentInput must not contain token separators.",
	1001: "There is no input in progress in the control (alias:'%1')."
};

//Graphe
// - grFormatBulleBoursier : valeur par defaut
var GRF = {
	BULLE: {
		BOURSIER: "[%CATEGORIE%]\nMin.=[%MIN%]\nMax.=[%MAX%]\nStart=[%DEBUT%]\nEnd=[%FIN%]"
	}
};

//Constantes de la STD
var WDSTD_CONST =
{
	//Formats TailleVersChaine
	FORMAT_TAILLE_OCTET: "byte",	//octet
	FORMAT_TAILLE_KO: "Kb",			//Kilo-octet
	FORMAT_TAILLE_MO: "Mb",			//Mega-octet
	FORMAT_TAILLE_GO: "Gb",			//Giga-octet
	FORMAT_TAILLE_TO: "Tb"			//Tera-octet
};
// WWConstante3.js
/*! 24.0.1.0 */
/*! VersionVI: 01F240075n x */
// Le seul support technique disponible pour cette librairie est accessible a travers le service "Assistance Directe".

// Days of the week
var STD_LUNDI = "Monday";
var STD_MARDI = "Thuesday";
var STD_MERCREDI = "Wednesday";
var STD_JEUDI = "Thursday";
var STD_VENDREDI = "Friday";
var STD_SAMEDI = "Saturday";
var STD_DIMANCHE = "Sunday";

// Month of the year
var STD_JANVIER = "January";
var STD_FEVRIER = "February";
var STD_MARS = "March";
var STD_AVRIL = "April";
var STD_MAI = "May";
var STD_JUIN = "June";
var STD_JUILLET = "July";
var STD_AOUT = "August";
var STD_SEPTEMBRE = "September";
var STD_OCTOBRE = "October";
var STD_NOVEMBRE = "November";
var STD_DECEMBRE = "December";

// Constants for the popup menu of tables/loopers
// Export
var TABLE_EXPORT =
{
	EXCEL: { sLibelle: "Export to Excel...", sTitre: "Export the content to Excel..." },
	WORD: { sLibelle: "Export to Word...", sTitre: "Export the content to Word..." },
	XML: { sLibelle: "Export to XML...", sTitre: "Export the content to XML..." },
	PDF: { sLibelle: "Print in PDF...", sTitre: "Print to a PDF file..." }
};
// Find/Filter
var TABLE_FILTRE =
{
	RECHERCHE: { sLibelle: "Find" },
	FILTRE: { sLibelle: "Filters:" },
	FILTRE_EGAL: { sLibelle: "Is equal to" },
	FILTRE_COMMENCE: { sLibelle: "Starts with" },
	FILTRE_CONTIENT: { sLibelle: "Contains" },
	FILTRE_TERMINE: { sLibelle: "Ends with" },
//	FILTRE_VIDE: { sLibelle: "Is empty" },
	FILTRE_DIFFERENT: { sLibelle: "Is different from" },
	FILTRE_COMMENCE_PAS: { sLibelle: "Does not start with" },
	FILTRE_CONTIENT_PAS: { sLibelle: "Does not contain" },
	FILTRE_TERMINE_PAS: { sLibelle: "Does not end with" },
	FILTRE_SUPERIEUR: { sLibelle: "Greater than" },
	FILTRE_SUPERIEUR_EGAL: { sLibelle: "Greater than or equal to" },
	FILTRE_INFERIEUR: { sLibelle: "Less than" },
	FILTRE_INFERIEUR_EGAL: { sLibelle: "Less than or equal to" },
	FILTRE_SUPPRIME: { sLibelle: "Delete the filter" }
};

// Constants for the popup menu of dashboards
var TDB_MENU =
{
	EDITION: { sLibelle: "Edit mode" },
	CONFINIT: { sLibelle: "Restore the initial configuration" }
};

// Error messages of debug
var STD_TITRE_TRACE = "Trace of WEBDEV browser codes";
var STD_INFO_TRACE = "Ctrl+P enables you to print the trace window";
var STD_ERREUR_MESSAGE_UPLOAD = "The upload failed.\nAn unexpected error occurred while uploading one of the files.\nCheck the size of the files to upload.";
var STD_ERREUR_MESSAGE_VIDEO = "Unable to display the video file: %1.\n- Check whether the file exists on the server.\n- Check whether the consultation of this type of file (filtering by MIME type) is allowed by the Web server.";

// Tooltips and messages of the toolbar for the chart controls
var CHART_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		PIE: "Pie charts...",
		COL: "Bar charts...",
		CUR: "Line charts...",
		STO: "Stock charts...",
		SAV: "Save as...",
		PRI: "Print...",
		LEG: "Legend...",
		GDH: "Horizontal gridlines",
		GDV: "Vertical gridlines",
		SMO: "Smoothing",
		GRA: "Gradient",
		RAI: "Raised",
		ANT: "Anti-aliasing",
		TRA: "Transparency",
		MIR: "Crosshair",
		ANI: "Animation",
		INT: "Interactivity",
		ZOH: "Horizontal zoom",
		ZOV: "Vertical zoom",
		FUS: "Full screen"
	},

	// Caption of the menu for the legend
	LEG:
	{
		0: "None",
		1: "Right",
		2: "Left",
		3: "Top",
		4: "Bottom"
	},

	// Text of the menus for the types
	// Pie charts
	PIE:
	{
		0: "Pie",
		1: "Semi-circular",
		2: "Donut",
		3: "Funnel",
		4: "Sunburst"
	},
	// Bar charts
	COL:
	{
		0: "Clustered bar charts",
		1: "Stacked bar charts",
		2: "Grouped horizontal bar charts",
		3: "Stacked horizontal bar charts",
		4: "Waterfall"
	},
	// Line charts
	CUR:
	{
		0: "Line",
		1: "Scatter",
		2: "Area",
		3: "Radar",
		4: "Bubbles",
		5: "Heatmap"
	},
	// Stock charts
	STO:
	{
		0: "Candlestick",
		1: "BarCharts",
		2: "MinMax"
	},
	// Tooltip
	MIR:
	{
		0: "Multiple crosshairs",
		1: "Crosshair",
		2: "Tooltip"
	},
	// Parameters
	PARAMS: "Parameters"
};

// Tooltips and messages in the toolbar of the rich HTML edit control
var HTML_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		GRA: "Bold",
		ITA: "Italic",
		SOU: "Underline",
		BAR: "Strikeout",
		AGA: "Align left",
		ACE: "Center",
		ADR: "Align right",
		AJU: "Justify",
		LNU: "Numbering",
		LPU: "Bullets",
		RMO: "Decrease indent",
		RPL: "Increase indent",
		EXP: "Superscript",
		IND: "Subscript",
		COL: "Color",
		LNK: "Insert a link",
		IMG: "Insert an image",
		FNA: "Font",
		FSI: "Font size",
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
		1: "Title",
		2: "Subtitle",
		3: "Note/Warning"
	},
	COLP:
	{
		0: "General",
		1: "Title",
		2: "Subtitle",
		3: "Link (1)",
		4: "Link (2)",
		5: "Note/Warning"
	},
	FHE:
	{
		0: "Corps de texte",
		1: "Title 1",
		2: "Title 2",
		3: "Title 3",
		4: "Title 4",
		5: "Title 5",
		6: "Title 6",
		7: "Preformatted",
		8: "Highlighted"
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
	0: "Unknown error.",
	1: "Error in the browser code:\n",
	// Commun entre plusieurs modules
	// WDLanguage.js
	200: "Incorrect value subscript: access to subscript %1 while %2 value(s) have been found.",
	201: "Element not found in the associative array.",
	202: "The associative array contains %1 element(s) referenced by this key: unable to access element %2.",
	203: "Reading an element of an associative array with duplicates is not allowed with this syntax: several elements can be referenced by the same key.",
	204: "Invalid format.",
	205: "ArrayToString() and ArrayToCSV() can only be used on a one-dimensional or two-dimensional array.",
	206: "ArrayToString() and ArrayToCSV() cannot be used on an array of structures if the structure itself contains an array or a structure.",
	207: "A sorted addition can only be performed on an array previously sorted by a call to the Sort() method or to the ArraySort() method.",
	208: "The array has %1 dimension(s) and you access it with %2 dimension(s).",
	209: "The array dimensions must be positive.",
	210: "Dimension cannot be used to modify the number of array dimensions.",
	211: "%1()/%2() can only be used on a one-dimensional array.",
	212: "%1()/%2() can only be used on a one-dimensional or two-dimensional array.",
	213: "%1()/%2() can only be used on a two-dimensional array.",
	214: "The sort is not available with the native Javascript objects transmitted to a WLanguage procedure.",
	215: "Dynamic array not allocated.",
	216: "Division by 0",
	217: "Vous devez indiquer le type de recherche (constantes tcDichotomique, tcLin\xE9aire, ...).",
	// WDZRNavigateur.js
	300: "Wrong subscript: %1. The control is empty.",
	301: "Wrong subscript: %1. Values must be included between %2 and %3.",
	302: "The <%1> column is unknown.",
	303: "Bad constant value (%1).",
	// WDSQL.js
	400: "The <%1> query does not exist.",
	401: "No current connection.",
	// WDAJAX.js
	500: "Error while sending the query:\n%1",
	// WDUtil.js
	600: "Only structure of same definition can be assigned to structure.",
	601: "Incompatible type.",
	602: "The '%1' operator is not allowed.",
	603: "Property not found.",
	604: "Parameter #%1! has no default value: enter a value.",
	605: "The '%1' element does not exist.",
	606: "No current element.",
	607: "Invalid JSON format.",
	608: "The JSON serialization can only be done to a string variable.",
	609: "The JSON deserialization can only be done to a complex variable.",
	610: "The control (alias: '%1') cannot be used because it is not found in the page HTML.\nThis control is directly or indirectly positioned in a plane with delayed load that was not displayed yet (and therefore not loaded).",
	611: "The control (alias: '%1') cannot be used because it is not found in the page HTML.\nThis control (or one of its parents) is invisible and the option 'Generate the HTML code of control, even if it is invisible' is not enabled.",
	612: "Incorrect parameter subscript: you access the parameter %1 while %2 parameters have been found.",
	613: "Bad calling parameters: %1 parameters were expected while %2 parameters have been passed.",
	614: "Bad calling parameters: between %1 and %2 parameters are required while %3 parameters have been passed.",
	615: "Dynamic object not allocated yet.",
	616: "The '%1' element does not exist.\nUsing an object syntax (\"ControlList.Add\" for example) is allowed on a controls handled by its name, on a typed parameter or on a variable.",
	617: "'%1' control required",
	618: "An object of '%1' class cannot be assigned in an object of '%2' class.",
	// WDRating.js
	700: "The bounds are reversed: the higher bound (%2) is less than the lower bound (%1).",
	// WD.js
	// - Sockets
	800: "The sockets are not available.",
	801: "You called SocketConnect while requesting %1 as socket name.\nA socket with this name already exists.",
	802: "You called SocketWrite.\nThe socket named %1 does not exist.",
	803: "You called SocketClose.\nThe socket named %1 does not exist.",
	804: "You called SocketWrite.\nThe socket named %1 is not connected yet.",
	805: "You called SocketWrite.\nThe socket named %1 is closed.",
	// - Conversions de types
	900: "Error caused by %1 parameter.\nWhen passing parameters by address, an element of '%2' type cannot be converted to the '%3' type. Use a local parameter in the procedure called or pass a parameter of '%3' type.",
	901: "The name/value '%1' does not exist in the enumeration/combination or it was deleted or renamed.",
	902: "The '%1' value of the enumeration has no associated value.",
	903: "An element of '%2' type cannot be copied into an element of '%1' type.",
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
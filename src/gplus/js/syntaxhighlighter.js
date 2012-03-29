(function ( /*importstart*/ ) {
	var scripts = document.getElementsByTagName('script'),
		length = scripts.length,
		src = scripts[length - 1].src,
		pos = src.indexOf('/js/'),
		scriptPath = src.substr(0, pos) + '/js/';
	if (!window.importScriptList) window.importScriptList = {};
	window.importScript = function (filename) {
		if (!filename) return;
		if (filename.indexOf("http://") == -1 && filename.indexOf("https://") == -1) {
			if (filename.substr(0, 1) == '/') filename = filename.substr(1);
			filename = scriptPath + filename;
		}
		//if (filename in importScriptList) return;
		importScriptList[filename] = true;
		document.write('<script src="' + filename + '" type="text/javascript"><\/' + 'script>');
	}
})( /*importend*/ )

importScript("syntaxhighlighter/shCore.js");
importScript("syntaxhighlighter/shBrushCss.js");
importScript("syntaxhighlighter/shBrushJScript.js");
importScript("syntaxhighlighter/shBrushJava.js");
importScript("syntaxhighlighter/shBrushPhp.js");
importScript("syntaxhighlighter/shBrushPython.js");
importScript("syntaxhighlighter/shBrushSql.js");
importScript("syntaxhighlighter/shBrushXml.js");
importScript("syntaxhighlighter/shExec.js");


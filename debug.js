


var global = window;


var jsperf = function(f,c) { // usage: jsperf((r)=>{  },999)
	var i, r, t = Date.now();
	for (i = 0; i < c; i++) { r = f(r); }
	console.log("elasped time: " + (Date.now() - t) + " , last return value: " + r);
};


var assert = function(o) {
	if (!("_DEV_DBG_" in global) || !_DEV_DBG_) return;
	if (typeof o == "function") o = o();
	if (!o && confirm("assertion! run debug?")) debugger;
};


var msglog = (function() {
	
	var p1 = "000", p2 = "000", p3 = "000", m = "";
	var n1 = 0, n2 = 0, n3 = [];
	
	return function(s, t, c) {
		if (!("_DEV_LOG_" in global) || !_DEV_LOG_) return;
		s += "";
		if ("" == m || s.indexOf(m) != 0) {
			n1 = +n1 + 1 + "";
			n1 = p1.substring(n1.length) + n1;
			console.log("in msglog(), start logging of new message stream [" + n1 + "] ,,,");
			n3.length = 0;
			m = "";
		}
		n2 = +t || 0;
		if (n2 + 1 != n3.length) n3.length = n2 + 1;
		n3[n3.length-1] = (undefined !== c) ? +c : +(n3[n3.length-1] || 0) + 1;
		n3[n3.length-1] = p3.substring((n3[n3.length-1] + "").length) + n3[n3.length-1];
		n2 = p2.substring((n2 + "").length) + n2;
		console.log("[MSGLOG][" + n1 + "][" + n2 + "-" + n3[n3.length-1] + "] : " + "\t\t\t\t\t\t\t\t".slice(-(+n2||-8)) + s.substring(m.length)); // FIXIT: variable length \t
		//console.log("[MSGLOG][" + n1 + "][" + n2 + "-" + n3[n3.length-1] + "] : " + Array(+n2).fill("\t").join("") + s.substring(m.length)); // FIXIT: slower es6 \t
		m = s;
	};
})();




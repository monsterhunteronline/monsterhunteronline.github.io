function mosaicdrop(num) {
	out = '&nbsp;';
	for (var i = num.length - 1; i >= 0; i--) {
		out += 'o';
	}
	return out;
}
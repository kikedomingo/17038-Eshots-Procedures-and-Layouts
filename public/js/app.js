// APP. KD


// POPUPS
function popitup(url) {
	newwindow=window.open(url,'name','height=900,width=650');
	if (window.focus) {newwindow.focus()}
	return false;
}
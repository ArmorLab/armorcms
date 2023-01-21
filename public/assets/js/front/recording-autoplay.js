$(document).ready(function(){
    if ($('.recording-element').length) {
    	if(window.location.hash) {
    		var hash = window.location.hash.substring(1);
    		document.getElementById('recording-audio-'+hash).play();
    	}
    }
});
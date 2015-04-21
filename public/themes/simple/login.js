$( document ).ready(function() {
	$("#username").blur( function() {
	  	if ($("#username").val() != "") {
		    $("#user").removeClass("animated");
		    $("#user").removeClass("rubberBand");
		    var src = "http://fotos.hexacta.com:8181/photo.php?username=" + $("#username").val();
		    $("#user").attr("src", src );
		    $('#user').load(function() {
		    	$(this).addClass("animated rubberBand");
		    });
		}
	});
});
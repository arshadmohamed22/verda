$(document).ready(function() {
	var popup = document.getElementById('Popup');
	var btn = document.getElementById("partner-btn");
	var feedbackBtn = document.getElementById("feedback-btn");
	var consumerBtn = document.getElementById("consumer-btn");
	var retailBtn = document.getElementById("retail-btn");
	var wholesaleBtn = document.getElementById("wholesale-btn");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	    popup.style.display = "block";
	}
	feedbackBtn.onclick = function() {
	    popup.style.display = "block";
	}
	consumerBtn.onclick = function() {
	    popup.style.display = "block";
	}
	retailBtn.onclick = function() {
	    popup.style.display = "block";
	}
	wholesaleBtn.onclick = function() {
	    popup.style.display = "block";
	}
	
	span.onclick = function() {
		$('#btn-group-3').addClass("active");
		$('#signup-title').addClass("active");
		$('#feedback-title').removeClass("active");

	    $('#consumer-sign-up-btn').addClass("active-btn");
	    $('#retail-sign-up-btn').removeClass("active-btn");
	    $('#wholesale-sign-up-btn').removeClass("active-btn");

	    $('#consumer-sign-up').addClass("active-form");
	    $('#retail-sign-up').removeClass("active-form");
	    $('#wholesale-sign-up').removeClass("active-form");
	    $('#feedback').removeClass("active-form");
	    popup.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == popup) {
	        popup.style.display = "none";
	    }
	}


	$("#feedback-btn").click(function() {
			$('#btn-group-3').removeClass("active");
			$('#signup-title').removeClass("active");
			$('#feedback-title').addClass("active");

		    $('#consumer-sign-up').removeClass("active-form");
		    $('#retail-sign-up').removeClass("active-form");
		    $('#wholesale-sign-up').removeClass("active-form");
		    $('#feedback').addClass("active-form");
	});

	// consumer form
	$("#consumer-sign-up-btn").click(function() {
		$('#btn-group-3').addClass("active");
		$('#signup-title').addClass("active");
		$('#feedback-title').removeClass("active");

	    $('#consumer-sign-up-btn').addClass("active-btn");
	    $('#retail-sign-up-btn').removeClass("active-btn");
	    $('#wholesale-sign-up-btn').removeClass("active-btn");

	    $('#consumer-sign-up').addClass("active-form");
	    $('#retail-sign-up').removeClass("active-form");
	    $('#wholesale-sign-up').removeClass("active-form");
	    $('#feedback').removeClass("active-form");
	});
		//bottom of consumer page button
		$("#consumer-btn").click(function() {
			$('#btn-group-3').addClass("active");
			$('#signup-title').addClass("active");
			$('#feedback-title').removeClass("active");

			$('#consumer-sign-up-btn').addClass("active-btn");
		    $('#retail-sign-up-btn').removeClass("active-btn");
		    $('#wholesale-sign-up-btn').removeClass("active-btn");

		    $('#consumer-sign-up').addClass("active-form");
		    $('#retail-sign-up').removeClass("active-form");
		    $('#wholesale-sign-up').removeClass("active-form");
		    $('#feedback').removeClass("active-form");
		});

	//retail form
	$('#retail-sign-up-btn').click(function() {
		$('#btn-group-3').addClass("active");
		$('#signup-title').addClass("active");
		$('#feedback-title').removeClass("active");

	    $('#consumer-sign-up-btn').removeClass("active-btn");
	    $('#retail-sign-up-btn').addClass("active-btn");
	    $('#wholesale-sign-up-btn').removeClass("active-btn");

	    $('#consumer-sign-up').removeClass("active-form");
	    $('#retail-sign-up').addClass("active-form");
	    $('#wholesale-sign-up').removeClass("active-form");
	    $('#feedback').removeClass("active-form");
	});
		//bottom of retail page button
		$('#retail-btn').click(function() {
			$('#btn-group-3').addClass("active");
			$('#signup-title').addClass("active");
			$('#feedback-title').removeClass("active");

		    $('#consumer-sign-up-btn').removeClass("active-btn");
		    $('#retail-sign-up-btn').addClass("active-btn");
		    $('#wholesale-sign-up-btn').removeClass("active-btn");

		    $('#consumer-sign-up').removeClass("active-form");
		    $('#retail-sign-up').addClass("active-form");
		    $('#wholesale-sign-up').removeClass("active-form");
		    $('#feedback').removeClass("active-form");
		});

	//wholesale form
	$('#wholesale-sign-up-btn').click(function() {
		$('#btn-group-3').addClass("active");
		$('#signup-title').addClass("active");
		$('#feedback-title').removeClass("active");

	    $('#consumer-sign-up-btn').removeClass("active-btn");
	    $('#retail-sign-up-btn').removeClass("active-btn");
	    $('#wholesale-sign-up-btn').addClass("active-btn");

	    $('#consumer-sign-up').removeClass("active-form");
	    $('#retail-sign-up').removeClass("active-form");
	    $('#wholesale-sign-up').addClass("active-form");
	    $('#feedback').removeClass("active-form");
	});
		//bottom of wholesale page button
		$('#wholesale-btn').click(function() {
			$('#btn-group-3').addClass("active");
			$('#signup-title').addClass("active");
			$('#feedback-title').removeClass("active");

		    $('#consumer-sign-up-btn').removeClass("active-btn");
		    $('#retail-sign-up-btn').removeClass("active-btn");
		    $('#wholesale-sign-up-btn').addClass("active-btn");

		    $('#consumer-sign-up').removeClass("active-form");
		    $('#retail-sign-up').removeClass("active-form");
		    $('#wholesale-sign-up').addClass("active-form");
		    $('#feedback').removeClass("active-form");
		});
});

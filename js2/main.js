$(document).ready(function(){

	var t_button1 = 6,
		t_button2 = t_button1 + 0.3,
		t_button3 = t_button2 + 0.3;


	$(".button").on('webkitAnimationEnd', function() {
	    this.style.webkitAnimationPlayState = "paused";
	});

    $(".button").click(function(e){
        $(".page.title").children("span").css("animation-direction", "reverse");
        $(".page.title").children(".t2").css("animation-direction", "reverse");
        $(".button:not(." + $(this)[0].classList[1] + ")")
        	.css("animation-play-state", "running")
        	.css("animation-direction", "reverse");
    });
});
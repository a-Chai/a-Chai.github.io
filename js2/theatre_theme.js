$(document).ready(function(){

	// Queing Animation example

	// var d_background = 1500,
	// 	d_welcome = 1500,
	// 	d_myname = 1500,
	// 	d_button = 3000;

	// var que = [
	// 		{selector: ".section1.background", 	time: 1000, duration: d_background},
	// 		{selector: ".page.title span.t1", 	time: 500, duration: d_welcome},
	// 		{selector: ".page.title span.t2", 	time: 0, duration: d_myname},
	// 		{
	// 			selector1: ".aboutme .button2", 
	// 				time1: 0, duration1: d_button,
	// 			selector2: ".partner .button2, .ability .button2", 	
	// 				time2: 300, duration2: d_button,
	// 			selector3: ".hkt .button2, .exicon .button2, .greensward .button2, .scmp .button2",
	// 				time3: 600, duration3: d_button,
	// 			chain: 0
	// 		}
	// 	];

	//queing(que);

	var fadeOutAni = "outseq 1.5s ease both";
	var tlAni = "tlseq 2.5s ease-in-out both";


    $(".button").click(function(e){

    	$(".page.title span")
    		.css({
    			"opacity": 0,
    			"animation": fadeOutAni});
    	$(".button").css("animation", "none");

    	var copy = $(this).clone();

    	$(copy)
    		.css({"position": "fixed",
    			"margin": 0,
    			"opacity": 1})
    		.offset($(this).offset());

    	$(".buttons").append(copy);

    	$(this).css("visibility", "hidden");
    	$(copy).css("animation", tlAni);


        
        $(".button").not("." + $(this)[0].classList[1])
        	.css({
    			"opacity": 0,
    			"animation": fadeOutAni});

    });


});


function queing(q, it) {
	if (it === undefined) it = 0;

	if (q[it]["selector"])
		$(q[it]["selector"])
			.delay(q[it]["time"])
			.fadeIn(q[it]["duration"],
				q[ it+1 ] ? function(){ queing(q, it+1)}: undefined);
	else if (q[it]["selector1"]) {
		var par = 1;

		while (q[it]["selector" + par]) {
			console.log("I am Here~!");
			$(q[it]["selector" + par])
				.delay(q[it]["time" + par])
				.fadeIn(q[it]["duration" + par],
					(q[it]["chain"] === it && q[ it+1 ]) ? function(){ queing(q, it+1)}: undefined);
			par++;
		}
	}
}
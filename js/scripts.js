$(document).ready(function() {

    makeActive(".dev-tab", "#development-select");
    makeActive(".design-tab", "#design-select");

    $(".design").hide()
    $(".dev-tab").click(function() {
    	$(".design").fadeOut();
    	$(".design").hide();
    	$(".dev").fadeIn();
    });
    $(".design-tab").click(function() {
    	$(".dev").fadeOut();
    	$(".dev").hide();
    	$(".design").fadeIn();
    });
    
    resizeDiv();

    smoothScroll(".to-about", "#begin-about");
    smoothScroll(".to-projects", "#begin-projects");
    smoothScroll(".to-contact", "#begin-contact");
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $("#landing").css({"height": vph + "px"});
}

function smoothScroll(trigger, endScroll) {
	$(trigger).click(function() {
		$('html, body').animate({
			scrollTop: $(endScroll).offset().top
		}, 500);
	});
}

function makeActive(trigger, activate) {
	$(trigger).click(function(){
        $("#projects-tabs > a > div").each(function(){
            $(this).removeClass("active");
        });
        $(activate).addClass("active"); 
    });
}

function openNav(trigger) {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav(trigger) {
    document.getElementById("myNav").style.height = "0%";
}
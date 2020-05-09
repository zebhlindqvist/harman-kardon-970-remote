$(function() {
    $('.fa').on('click touchstart', function(e){
        e.stopPropagation();
        e.preventDefault();

        const clickedElem = $(event.target);
        const key = clickedElem.attr("id");
        const code = buttons.find(function(e) { return e.button === key; }).code;

        $.get( "https://**********/ir?code=" + code)
		.done(function(data, statusText, xhr) {
		     const color = xhr.status === 200 ? "green" : "red";
		     clickedElem.css("color", color);
		     setTimeout(function() {
		            clickedElem.css("color", "#367BF0");
		        },
		        250
		    );
		});
    });
});

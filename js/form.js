$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/ostapukrainian@ukr.net",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        })
        .done(function(){
          $('form').append('<h1 id="thank">Thank you!</h1>');  
          $("#submit").click(function(){
            $("#thank").hide(10);
});
        });
    });
});
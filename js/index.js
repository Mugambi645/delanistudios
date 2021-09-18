
//mouse click message
$(document).ready(function() {
    $('#btnInfo').bind('click', function( event ){
       alert('Welcome to the home of Idealistic Designs');
    });
});
//validation
$(document).ready(function() {
 $('form[id="contact"]').validate({
    rules: {
      name: 'required',
      message: 'required',
      email: {
        required: true,
        email: true,
      },

    },
    messages: {
      name: 'This field is required',
      email: 'Enter a valid email',
      message: 'Message field cannot be empty',
     
    },
    submitHandler: function(form) {
      form.submit();
    }
  })});
  
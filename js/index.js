
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
    
 //back to top
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  //back to top mouse over
  let x = 0;
  function backToTopOver() {
    document.getElementById("arrow-right").innerHTML = "Back to top";
  }
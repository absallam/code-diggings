// Validate input fields
function validate() 
{
      
    if( document.my-form.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.my-form.Name.focus() ;
       return false;
    }
    if( document.my-form.Name.value < 4 ) {
        alert( "Please provide ya valid name" );
        document.my-form.Name.focus() ;
        return false;
     }
    if( document.my-form.Email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    
}

// Validate email entry
function validateEmail() {
    var emailID = document.my-form.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.myForm.EMail.focus() ;
       return false;
    }
    return( true );
 }

 function myFunction(){
   var x = document.getElementById("go_butt");
   // If "mystyle" exist, overwrite it with "mystyle2"
   if (x.className === "sidebar_contact_active") {
   x.className = "sidebar_contact";
   } else {
   x.className = "sidebar_contact_active";
   }
 }

  function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

   error_messsage.style.padding = "10px";



 }  
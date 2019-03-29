$( document ).ready( readyFn );

function readyFn( jQuery ) {

  let names = [];
  let passwords = [];
  
  names[0] = "admin";
  passwords[0] = "password";

  let code = 9999;

  let counter = 0;
  let tested = true;

  //BUTTONS
  $("#register").click(function() {

    let a = $("#regpass").val();
    let b = $("#regpass2").val();
    let c = $("#code").val();
    let uname = $("#username").val();

    for(let i = 0; i < names.length; i++) {
      if(names[i] === uname) {
        tested = false;
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*name already exists</i><br>");
        $("#username").addClass("required");
        break;
      }
      else {
        $("#username").removeClass("required");
        tested = true;
      }
    }

    if(tested) {
      if(uname == "") {
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*no name</i><br>");
        $("#username").addClass("required");
      }
      else if(uname.length <= 3) {
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*name contains less than 4 letters</i><br>");
        $("#username").addClass("required");
      }
      else if(a == "") {
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*no password</i><br>");
        $("#regpass").addClass("required");
      }
      else if (a.length < 8){
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*password contains less than 8 characters</i><br>");
        $("#regpass").addClass("required");
      }
      else if(a != b) {
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*repeat password correcty</i><br>");
        $("#regpass2").addClass("required");
      }
      else if(c != code) {
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("<i>*code invalid</i>");
        $("#code").addClass("required");
      }
      else {
        console.log("hello");
        $("#username, #regpass, #regpass2, #code").removeClass("required");
        $("p").empty();
        $("p").append("&nbsp;");
        names.push(uname);
        passwords.push(a);

        //store information

        //open login page
      }
    }
  });
}
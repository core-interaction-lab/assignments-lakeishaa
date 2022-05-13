var userInputs = { ac1:"", ac2:"", ac3:"", ac4:"", ac5:"", ac6:"", ac7:"", ac8:"", ac9:"", ac10:"", ac11:"", ac12:""}; //This stores user values.

const alreadyCompleted = { ac1:"shout", ac2:"heart", ac3:"Girl", ac4:"playing", ac5:"friends", ac6:"there's another", ac7:"eyes", ac8:"first", ac9:"oh", ac10:"no", ac11:"oh", ac12:"always"}; //The values for auto-fill.


const theStory = "<p>You know you love me, I know you care</p><p>Just <span id=\"output1\"></span> whenever, and I'll be there</p><p>You want my love, you want my <span id=\"output2\"></span></p><p>And we will never ever ever be apart</p><p>Are we an item? <span id=\"output3\"></span>, quit <span id=\"output4\"></span></p><p>We're just <span id=\"output5\"></span>, what are you saying?</p><p>Said '<span id=\"output6\"></span>' and looked right in my <span id=\"output7\"></span></p><p>My first love broke my heart for the <span id=\"output8\"></span> time</p><p>And I was like</p><p>Baby, baby, baby, <span id=\"output9\"></span></p><p> Like baby, baby, baby, <span id=\"output10\"></span></p><p>Baby, baby, baby, <span id=\"output11\"></span></p><p> Thought you'd <span id=\"output12\"></span> be mine</p> <p class=\"congrats\"> CONGRATS YOU MADE JUSTIN BIEBER'S SONG BETTER! </p> <br>";


function submitInputs() { //The user has hit Submit. Collects data from the form.
  userInputs.ac1 = document.getElementById('input1').value;
  userInputs.ac2 = document.getElementById('input2').value;
  userInputs.ac3 = document.getElementById('input3').value.charAt(0).toUpperCase() + document.getElementById('input3').value.slice(1);
  //userInputs.ac3 = document.getElementById('input3').value;
  //userInputs.ac4 = document.getElementById('input4').value.charAt(0).toUpperCase() + document.getElementById('input4').value.slice(1); //Converts surname to uppercase.
  userInputs.ac4 = document.getElementById('input4').value;
  userInputs.ac5 = document.getElementById('input5').value;
  userInputs.ac6 = document.getElementById('input6').value;
  userInputs.ac7 = document.getElementById('input7').value;
  userInputs.ac8 = document.getElementById('input8').value;
  userInputs.ac9 = document.getElementById('input9').value;
  userInputs.ac10 = document.getElementById('input10').value;
  userInputs.ac11 = document.getElementById('input11').value;
  userInputs.ac12 = document.getElementById('input12').value;
  
  createMadLibs(); //Calls the function to write the story.
}

function autoFill() { //The user has hit Auto-Fill. Checks if user submit anything, otherwise uses alreadyCompleted values.
  
  if (document.getElementById('input1').value == "") {
    userInputs.ac1 = alreadyCompleted.ac1;
    document.getElementById('input1').value = userInputs.ac1;
  }
  if (document.getElementById('input2').value == "") {
    userInputs.ac2 = alreadyCompleted.ac2;
    document.getElementById('input2').value = userInputs.ac2;
  }
  if (document.getElementById('input3').value == "") {
    userInputs.ac3 = alreadyCompleted.ac3.charAt(0).toUpperCase() + alreadyCompleted.ac3.slice(1);
    document.getElementById('input3').value = userInputs.ac3;
  }
  if (document.getElementById('input4').value == "") { //Converts surname to uppercase.
    //userInputs.ac4 = alreadyCompleted.ac4.charAt(0).toUpperCase() + alreadyCompleted.ac4.slice(1);
    userInputs.ac4 = alreadyCompleted.ac4;
    document.getElementById('input4').value = userInputs.ac4;
  }
  if (document.getElementById('input5').value == "") {
    userInputs.ac5 = alreadyCompleted.ac5;
    document.getElementById('input5').value = userInputs.ac5;
  }
  if (document.getElementById('input6').value == "") {
    userInputs.ac6 = alreadyCompleted.ac6;
    document.getElementById('input6').value = userInputs.ac6;
  }
  if (document.getElementById('input7').value == "") {
    userInputs.ac7 = alreadyCompleted.ac7;
    document.getElementById('input7').value = userInputs.ac7;
  }
  if (document.getElementById('input8').value == "") {
    userInputs.ac8 = alreadyCompleted.ac8;
    document.getElementById('input8').value = userInputs.ac8;
  }
  if (document.getElementById('input9').value == "") {
    userInputs.ac9 = alreadyCompleted.ac9;
    document.getElementById('input9').value = userInputs.ac9;
  }
  if (document.getElementById('input10').value == "") {
    userInputs.ac10 = alreadyCompleted.ac10;
    document.getElementById('input10').value = userInputs.ac10;
  }
  if (document.getElementById('input11').value == "") {
    userInputs.ac11 = alreadyCompleted.ac11;
    document.getElementById('input11').value = userInputs.ac11;
  }
  if (document.getElementById('input12').value == "") {
    userInputs.ac12 = alreadyCompleted.ac12;
    document.getElementById('input12').value = userInputs.ac12;
  }
  submitInputs(); //Collects any data from the form.
}

function clearForm() { //Clears the user values and the form.
  var userInputs = { ac1:"", ac2:"", ac3:"", ac4:"", ac5:"", ac6:"", ac7:"", ac8:"", ac9:"", ac10:"", ac11:"", ac12:""};
  document.getElementById("theStory").innerHTML = "";
  document.getElementById('input1').value = "";
  document.getElementById('input2').value = "";
  document.getElementById('input3').value = "";
  document.getElementById('input4').value = "";
  document.getElementById('input5').value = "";
  document.getElementById('input6').value = "";
  document.getElementById('input7').value = "";
  document.getElementById('input8').value = "";
  document.getElementById('input9').value = "";
  document.getElementById('input10').value = "";
  document.getElementById('input11').value = "";
  document.getElementById('input12').value = "";

}

function createMadLibs() { //Creates the story.
  document.getElementById("theStory").innerHTML = theStory;
  document.getElementById("output1").innerHTML = userInputs.ac1;
  document.getElementById("output2").innerHTML = userInputs.ac2;
  document.getElementById("output3").innerHTML = userInputs.ac3;
  document.getElementById("output4").innerHTML = userInputs.ac4;
  document.getElementById("output5").innerHTML = userInputs.ac5;
  document.getElementById("output6").innerHTML = userInputs.ac6;
  document.getElementById("output7").innerHTML = userInputs.ac7;
  document.getElementById("output8").innerHTML = userInputs.ac8;
  document.getElementById("output9").innerHTML = userInputs.ac9;
  document.getElementById("output10").innerHTML = userInputs.ac10;
  document.getElementById("output11").innerHTML = userInputs.ac11;
  document.getElementById("output12").innerHTML = userInputs.ac12;

}
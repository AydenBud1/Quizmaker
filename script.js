
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var time = 30
  submitName= null

  

  setInterval(timer,1000)
  function timer() {
    console.log (time)
    time =time-1
    document.getElementById("totalTime").innerHTML="time: "+ time;
    if (time <= 0){
      endTest()
    }

  }
 
    
//question 1
 function correctAnswer1(){
  document.getElementById("question1").style.display = "none";
 }

 function wrongAnswer1(){

  document.getElementById("question1").style.display = "none";
  time= time-5;
 }
 //question 2
 function correctAnswer2(){
  document.getElementById("question2").style.display = "none";
  
  
 }

 function wrongAnswer2(){
  time= time-5;
  document.getElementById("question2").style.display = "none";
  
 }
 //question 3
 function correctAnswer3(){
  document.getElementById("question3").style.display = "none";
  submitButton()
 
  
 }

 function wrongAnswer3(){
 
  document.getElementById("question3").style.display = "none";
  time= time-5;
 }
 function submitButton(){
  localStorage.setItem("score", time)
  localStorage.setItem(document.getElementById("name"), submitName)
  window.location.href = 'results.html';
  return false;
 }

 
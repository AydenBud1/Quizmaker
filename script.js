
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var time = 90
  function timer() {
    console.log (time)
    time =time-1
    document.getElementById("totalTime").innerHTML="time: "+ time;

  }
 setInterval(timer,1000)
    

 function correctAnswer(){
  console.log("working")
 }
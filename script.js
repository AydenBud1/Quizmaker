
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var time = 90
  var question = 5
  

  setInterval(timer,1000)
  function timer() {
    console.log (time)
    time =time-1
    document.getElementById("totalTime").innerHTML="time: "+ time;
    if (time <=0){
      endTest()
    }

  }
 
    

 function correctAnswer(){
  console.log("working")
  nextQuestion()
 }

 function wrongAnswer(){
  nextQuestion()
  time= time-25;
 }
 function nextQuestion(){
  question = question -1
  if(question= 4){
    document.getElementById("question").innerHTML="what is 7-2"
    document.getElementById("answerA").innerHTML= "5"
    document.getElementById("answerB").innerHTML= "8"
    document.getElementById("answerC").innerHTML="amgous"
    document.getElementById("answerD").innerHTML="3"
  }
  


 }
function endTest(){

}

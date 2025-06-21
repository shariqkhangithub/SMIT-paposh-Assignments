
function saveAnswer(quesName) {
  const options = document.getElementsByName(quesName);
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      localStorage.setItem(quesName, options[i].value);
      break;
    }
  }
}
 function submitQuiz() {
    saveAnswer('q4')
      let score = 0;
      let correctAnswers = ['c', 'b', 'd', 'a'];

      let userAnswers = [];
       for (let i = 1; i < 5; i++) {
           userAnswers.push(localStorage.getItem('q' + i));
       }

      //  is tarha manually har question ko alag alag get karn parega
      // let userAnswers = [
        //   localStorage.getItem('q1'),
        //   localStorage.getItem('q2'),
        //   localStorage.getItem('q3'),
        //   localStorage.getItem('q4')
        // ];
        

      for (let n = 0; n < correctAnswers.length; n++) {
        if (userAnswers[n] === correctAnswers[n]) {
          score++;
          
        }
      }
      let percentage = (score / correctAnswers.length) * 100;
      // alert("You scored " + percentage + "% (" + score + "/" + correctAnswers.length + ")");
      

      localStorage.setItem("finalScore",score);
      localStorage.setItem("percentage", percentage)

    }
    
    
    document.querySelector('.score').innerHTML = localStorage.getItem('finalScore') + ' / 4' ;
     document.querySelector('.percentage').innerHTML += localStorage.getItem('percentage') + '%'

     localStorage.clear();
















// function saveAnswer(questionKey) {
//   const options = document.getElementsByName(questionKey);
//   for (let i=0; i<options.length; i++) {
//     if (options[i].checked) {
//       localStorage.setItem(questionKey, options[i].value);
//       console.log(questionKey);
      
//       break;
//     }
//   }
// }

// function submitQuiz() {
//   // saveAnswer('q4');

// const correctAnswers = ['a','a','c','b'];

//   let score = 0;

//   for (let i=0; i<correctAnswers.length ; i++) {
//     const userAnswer = localStorage.getItem('q'[i]);
//     if (userAnswer === correctAnswers[i]) {
//       score++;
//     }
    
//   }

//   const percentage = (score / 4) * 100;
//   alert(`You scored ${percentage}% (${score}/4)`);
//   console.log(score);
  
  
//   localStorage.clear();
// }

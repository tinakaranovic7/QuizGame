// My questions array of Objects

var questions = [
  {
    question: 'Which Scandinavian country is not a part of the European Union?',
    answers: ['Norway', 'Finland', 'Sweden', 'Denmark', ],
    correctAnswer: 'Norway'
  }, {
    question: 'What is the strongest muscle in the human body?',
    answers: ['Biceps', 'Triceps', 'Hamstrings', 'Tongue'],
    correctAnswer: 'Tongue'
  }, {
    question: 'Which country has the largest population?',
    answers: ['India', 'US', 'Serbia', 'China'],
    correctAnswer: 'China'
  }, {
    question: 'Which body part stays the same size from when we are born until we die?',
    answers: ['Eyeball', 'Nails', 'Nose', 'Ears'],
    correctAnswer: 'Eyeball'
  }, {
    question: 'What is the capital of Australia?',
    answers: ['Sidney', 'Canberra', 'Melbourne', 'none of them'],
    correctAnswer: 'Canberra'
  }, {
    question: 'Who is the fastest man in the world',
    answers: ['Bolt', 'Tyson Gay', 'Byron Nelson', 'Ben Hogan'],
    correctAnswer: 'Bolt'
  }, {
    question: 'How long does an elephants pregnancy last?',
    answers: ['22 months', 'few weeks', '2 months', 'nine months'],
    correctAnswer: '22 months'
  }, {
    question: '10% of the Russian governments income comes from the sale of what?',
    answers: ['Guns', 'Vodka', 'Tourism', 'Exporting goods'],
    correctAnswer: 'Vodka'
  }
];
// Adjustiong my game audio volume
var audio = document.getElementById('game-audio');
audio.volume = 0.3;
// Start my game when start btn clicked
$('#start').on('click', function(){
  game.start();
});
// End my game when my Done btn clicked
$('#done').on('click', function(){
  game.countDown();
});


var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  // Setting my counter
  countDown: function(){
    game.counter--;
    $('#counter').html(game.counter)
    if(game.counter <= 0){
      game.done();
    }
    if($('#done').on('click', function(){
      game.done();
    }));
    if(game.counter <= 20){
      $('#counter').css('color', 'red')
      $("<audio></audio>").attr({'src':'assets/audio/count-down.wav', 'autoplay':'autoplay'}).appendTo("#subwrapper");
    }
  },
  // start the game with a timer and add all the questions and answers
  start: function(){
    timer = setInterval(game.countDown, 1000)
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
    $('#start, .game-info').remove();
    for(var i=0; i<questions.length; i++){
      $('#subwrapper').append('<h3>' + questions[i].question + '</h3>')
      for(var j=0; j < questions[i].answers.length; j++){
        $('#subwrapper').append("<input class='check-with-label' type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>  <label class='label-for-check'>"+ questions[i].answers[j]+"  </label></br>");
      }
    }
    $('<button id="done" class="done-btn" type="button" name="button-done">Done</button>').appendTo('#subwrapper');
  },
  // checking each input if it is a correct answer or wrong answer and incrementing my game.correct and game.incorrect
  done: function(){
    $.each($('input[name="question-0"]:checked'), function(){
      if($(this).val() === questions[0].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1"]:checked'), function(){
      if($(this).val() === questions[1].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'), function(){
      if($(this).val() === questions[2].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-3"]:checked'), function(){
      if($(this).val() === questions[3].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4"]:checked'), function(){
      if($(this).val() === questions[4].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-5"]:checked'), function(){
      if($(this).val() === questions[5].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-6"]:checked'), function(){
      if($(this).val() === questions[6].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-7"]:checked'), function(){
      if($(this).val() === questions[7].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // Show the results after checking all answers and play a congrats audio
    this.result();
    this.winAudio();
  },
  // Clearing my timer and remove it from page, adding correct answwers and incorrectanswers and Unanswered questions to the user
  result: function(){
    clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html('<h2>All Done!</h2>').addClass('all-done')
    $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
    // display all the Unanswered questions
    $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"<h3>");
  },
  winAudio: function(){
    var src = 'assets/audio/game-done.mp3';
    $('#subwrapper').append("<audio src="+src+" autoplay></audio>");
  }

}

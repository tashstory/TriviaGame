

    $(document).ready(function () {

        var intervalId;
        var time_obj = {value: 6};
        var time = {
            time: 6,
        };
        var score = [];
        var x = 0;
        var z = 0;
        var starwars = [
            question_1 = {
                question: "Who was Anakin's first master?",
                answers: ["Mace Windu", "Obi-wan Kenobi", "Qui-Gon Jinn", "Alan Durham"],
                correct_answer: "Qui-Gon Jinn",
                id: "question_1"

            },
            question_2 = {
                question: "Who attacked Qui-Gon Jinn as they were about to leave Tatooine?  ",
                answers: ["Darth Sidious", "Sebulba", "Darth Maul", "Alan Durham"],
                correct_answer: "Darth Maul",
                id: "question_2"
            },
            question_3 = {
                question: "What color is Obi-Wans lightsaber?",
                answers: ["Green", "Blue", "Purple", "Light sabers are for chumps!"],
                correct_answer: "Blue",
                id: "question_3"

            }

        ]
            
        function run() {
          
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      if (score.length >= (starwars.length)) {
        
        clearInterval(intervalId)
        endGame();
        return;
      }
    
    }
     function decrement() {

//  Decrease number by one.
     time.time--;
     if(time.time <= 0){
        alert("Out of time!")
        score.push("incorrect");
        time.time = 6;
        display_questions()
      
       
    }
    if (score.length >= (starwars.length)) {
        
        clearInterval(intervalId)
        endGame();
        return;
      }
    
     $("#timer").text(time.time)
     $("#timer").attr("val", time.time)
     }



        function display_questions() {

            $("#question").empty();
            $("#answer_list").empty();

            if (x < starwars.length) {

                $("#question").append(starwars[x].question)

            }
            for (var y = 0; y < starwars[x].answers.length; y++) {
                var question_div = $("<div>");

                question_div.text((starwars[x].answers[y]))
                question_div.addClass("options");
                question_div.attr("val", starwars[x].answers[y]);
                $("#answer_list").append(question_div);

            }
            run();
            x++

        }


        $("#begin_button").on("click", function () {

            display_questions();

            

        })

        $("body").on("click", ".options", function () {

            if ($(this).text() === starwars[z].correct_answer) {
                alert("Correct!")
                score.push("correct");
               
                if (score.length >= (starwars.length)) {
                    endGame();
                }
                else{
                display_questions();
                time.time = 6;
                run();
                }  
                
            }
            else if ($(this).text() !== starwars[z].correct_answer) {
                alert("Wrong!")
                score.push("incorrect");
                
                if (score.length >= (starwars.length)) {
                    endGame();
                    return;
                }
                else{
                display_questions();
                time.time = 6;
                run();
                } 
                
            }
           
           

            z++


        })

        
    

    function endGame() {
        var correct = 0;
        var incorrect = 0;
       
        
        $("#timer").text("Game over") 
        for (var count = 0; count < score.length; count++) {
            if (score[count] === "correct") {
                correct++
            }
            if (score[count] === "incorrect") {
                incorrect++
            }

        }

        console.log(correct)
        console.log(incorrect)
        $("#question").empty();
        $("#answer_list").empty();

        correct_div = $("<div>")
        incorrect_div = $("<div>")
        correct_div.text("Correct: " + correct)
        incorrect_div.text("Incorrect: " + incorrect)
        
        $("#answer_list").append(correct_div)
        $("#answer_list").append(incorrect_div)
        


    }    
        

    })




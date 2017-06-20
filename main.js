$(document).ready(function() {
  var time = 1500;

  startGame();


  // declaration variables
  var newFood, x, y, idInterval,
    allPoints = 0,
    allLives = 3,
    $container = document.getElementById('container');



// random falling elements
  function startGame() {
    idInterval = setInterval(
      function game() {
        //random position of newFood
        x = Math.floor(Math.random() * 40);
        y = 0;

//generating a div
        newFood = document.createElement('div')

        // setting new div position
        newFood.style.top = y + "vh";
        newFood.style.left = x + "vw";

        // generating random number from 1 to 10
        var randomFoods = (Math.round(Math.random() * 9) + 1);

        //get id of foods
        var foodId = [];
        foodId = foods.filter(function (item) {
          if (item.id == randomFoods) {
            return foodId.push(item)
          }
        });

// we give class to our empty object
        newFood.className = 'foodItem ' + foodId[0].category;


// set id for all divs
        newFood.id = foodId[0].name;

        // attaching new personalized div to body
        $container.append(newFood);

        // animate falling | speed = time in ms needed to fall from top to bottom | when it reaches bottom, function will delete the object
        var speed = 100
        animate(newFood, speed);
        function animate(element, speed) {
          var y = 0;
          var id = setInterval(function () {
            y++
            element.style.top = y + 'vh';
            catchFoods(element, id);
            if (parseInt(element.style.top) > 67) {
              element.remove();
              clearInterval(id);
              lossingLife(element)
            }
          }, speed)
        }

        // catching falling elements by player

        function catchFoods(element, interval) {
          if (( player.x <= parseInt(element.style.left) && parseInt(element.style.left) <= (player.x + 4) && parseInt(element.style.top) > 48 && parseInt(element.style.top) < 58)) {
            checkPoints(element);
            element.remove();
            nextLevel();
            clearInterval(interval);

          }

        }

        // checking players points
        function checkPoints(element) {
          if (element.classList.contains('good')) {
            scoreUp();
          } else {
            scoreDown();
          }
        }

        function scoreUp() {
          allPoints += 10;
          console.log('Score up! Actual score is - ', allPoints);
          $('#points').text(allPoints);
        }

        function scoreDown() {
          allPoints -= 10;
          console.log('Score down! Actual score is - ', allPoints);
          $('#points').text(allPoints);

        }

        function nextLevel() {
          if (allPoints > 50) {
            clearInterval(idInterval);
            time = 1000;
            startGame();
          } else if (allPoints > 100) {
            clearInterval(idInterval);
            time = 750;
            startGame();
          } else if (allPoints > 150) {
            clearInterval(idInterval);
            time = 500;
            startGame();
          }
        }


        function lossingLife(element) {

          if (element.classList.contains('good') && parseInt(element.style.top) > 58) {
            allLives -= 1;
            $('#lives-container img').last().remove();
           gameOver();

          }
        }

        function gameOver() {
          if ( allLives <= 0) {
          clearInterval(idInterval);

          }
        }

      },time
    )
  }


// player can run and jump
  var player = $('#character');
  player.x = 20
  player.y = 51
  $(document).on('keydown', handleTyping);
  function handleTyping(e) {
    switch (e.which) {
      case 39:
        if (player.x > 35) {
          $('#character').css({
            'left': (player.x += 0) + 'vw'
          });
        } else {
          $('#character').css({
            'left': (player.x += 1) + 'vw'
          })
        }
        ;
        break;
      case 37:
        if (player.x < 1) {
          $('#character').css({
            'left': (player.x -= 0) + 'vw'
          });
        } else {
          $('#character').css({
            'left': (player.x -= 1) + 'vw'
          })
        }
        ;
        break;
      case 38:
        $('#character').animate({"top": (player.y -= 3) + 'vh'}, 200);
        $('#character').animate({"top": (player.y += 3) + 'vh'}, 200);
        break;
    }
  }

})



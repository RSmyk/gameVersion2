$(document).ready(function () {

  $container = document.getElementById('container')


startGame();

  // declaration variables
  var newFood, x, y, idInterval

// random falling elements

 function startGame () {
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

// we give random class to our empty object
       newFood.className = 'foodItem';


// set id for all divs
       newFood.id = foodId[0].name;

       // attaching new personalized div to body
       $container.append(newFood);

       // animate falling | speed = time in ms needed to fall from top to bottom | when it reaches bottom, function will delete the object
       animate(newFood, 100);
       function animate(element, speed) {
         var y = 0;
         var id = setInterval(function() {
          y++
           element.style.top = y + 'vh';
// console.log(element.style.top)
           if (parseInt(element.style.top )> 67 ) {
             element.remove();
             clearInterval(id);
           }



         }, speed)
       }

     },1500
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



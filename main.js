
  //creating elements
  var interval = 3000;
    function Food(speed, init) {
  var food = this;

    food.animateSpeed = speed;
    food.startX = Math.floor(Math.random() * 765) + 500;
    food.startY = 0;
    food.itemNumber = Math.round(Math.random()*10)
    food.foodId = foods.filter(function(item) {
      if (item.id == food.itemNumber) {
        return item.id;
      }
    });
    food.footphoto = foods.filter(function(item){
      if (item.id == food.itemNumber) {
        return item.photo;
      }
    })

    this.createElement = function () {
      this.htmlElement = document.createElement('div');
      this.htmlElement.style.top = food.startY + "px";
      this.htmlElement.style.left = food.startX + "px";
      this.htmlElement.className = 'foodItem ' + food.foodId[0].category + ' ' + food.foodId[0].name;
      this.htmlElement.id = food.foodId[0].id;
      document.body.appendChild(this.htmlElement);
    }

    this.animate = function (speed) { // show function in FrogsAndSharksGame
      if (!this.htmlElement) {
        console.log('Create HTML element first!');
        return;
      }
      $(this.htmlElement).animate({
        top: "100vh"
      }, speed, 'linear', () => {
        this.remove();
      });
    }

    this.remove = function () {
      this.htmlElement.remove();
    }

    this.init = function () {
      this.createElement();
      this.animate(3500);
    }

    if (init !== false) {
      this.init();
    }

  }

  game = setInterval(Food, interval)

// player can run and jump
  var player = {};
  player.x = $('#container').width() / 2;
  player.y = 600;
  $(document).on('keydown', handleTyping);
  function handleTyping(e) {
    switch (e.which) {
      case 39:
        if (player.x > 730) {
          $('#character').css({
            'left': (player.x += 0) + 'px'
          });
        } else {
          $('#character').css({
            'left': (player.x += 15) + 'px'
          })
        }
        ;
        break;
      case 37:
        if (player.x < 7) {
          $('#character').css({
            'left': (player.x -= 0) + 'px'
          });
        } else {
          $('#character').css({
            'left': (player.x -= 15) + 'px'
          })
        }
        ;
        break;
      case 38:
        $('#character').animate({"top": (player.y -= 30) + 'px'}, 200);
        $('#character').animate({"top": (player.y += 30) + 'px'}, 200);
        break;
    }
  }





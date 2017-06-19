$(document).ready(function () {

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
        $('#character').animate({"top": (player.y -= 30) + 'px' }, 200);
        $('#character').animate({"top": (player.y += 30) + 'px' }, 200);
        break;
    }
  }
})





$('.green-block').animate({
    height: '365px'
}, 60000, 'linear').animate({
    height: '0px'
}, 60000, 'linear')

setTimeout(function() {
    $('.minut').html('1');
}, 60000);

setTimeout(function() {
    $('.minut').html('0');
  }, 120000);



$(function() {
    $('select').selectric();
  });

  $('select').on('selectric-open', function(event, element, selectric) {
    let optListFirstElement = $('.selectric-scroll ul').find('.form-order__select-opt')[0];
    optListFirstElement.classList.add('noactive');
  });

  $('select').on('selectric-before-close', function(event, element, selectric) {
    let optListFirstElement = $('.selectric-scroll ul').find('.form-order__select-opt')[0];
    optListFirstElement.classList.remove('noactive');
    $('.selectric-wrapper').removeClass('selectric-focus');
  });
//   .classList.remove('selectric-focus');
let clock = document.getElementById("clock-box");

function getClock(){
  let d = new Date();
  let h = String(d.getHours()).padStart(2,"0");
  let m = String(d.getMinutes()).padStart(2,"0");
  let s = String(d.getSeconds()).padStart(2,"0");
  clock.innerHTML = `${h} : ${m} : ${s}`;
}

getClock(); 
setInterval(getClock, 1000);

let morning = $('.mb');
let afternoon = $('.ab');
let evening = $('.eb');
let night = $('.nb');

let logo = $('.logoimg');

morning.on('click', function() {
  morning.addClass('on');
  afternoon.removeClass('on');
  evening.removeClass('on');
  night.removeClass('on');
  logo.attr("src", "./img/logo_b.png");
  $('#clock-box').css('color', 'black');
  $('.mt1').css('color', '#2c2c2c')
  $('.gnb-item').css('color', '#535353');
  $('.wrapper').css('background-image', 'url(./img/bg_morning.jpg)');
  $('.main-content-wrapper').css('background-image', 'url(./img/phone_morning.png)');
})

afternoon.on('click', function() {
  morning.removeClass('on');
  afternoon.addClass('on');
  evening.removeClass('on');
  night.removeClass('on');
  logo.attr("src", "./img/logo_b.png");
  $('#clock-box').css('color', 'black');
  $('.mt1').css('color', '#2c2c2c')
  $('.gnb-item').css('color', '#535353');
  $('.wrapper').css('background-image', 'url(./img/bg_afternoon.jpg)');
  $('.main-content-wrapper').css('background-image', 'url(./img/phone_afternoon.png)');
})

evening.on('click', function() {
  morning.removeClass('on');
  afternoon.removeClass('on');
  evening.addClass('on');
  night.removeClass('on');
  logo.attr("src", "./img/logo_b.png");
  $('#clock-box').css('color', 'black');
  $('.mt1').css('color', '#2c2c2c')
  $('.gnb-item').css('color', '#535353');
  $('.wrapper').css('background-image', 'url(./img/bg_evening.jpg)');
  $('.main-content-wrapper').css('background-image', 'url(./img/phone_evening.png)');
})

night.on('click', function() {
  morning.removeClass('on');
  afternoon.removeClass('on');
  evening.removeClass('on');
  night.addClass('on');
  logo.attr("src", "./img/logo_w.png");
  $('#clock-box').css('color', 'white');
  $('.mt1').css('color', 'white');
  $('.gnb-item').css('color', 'white');
  $('.wrapper').css('background-image', 'url(./img/bg_night.jpg)');
  $('.main-content-wrapper').css('background-image', 'url(./img/phone_night.png)');
})



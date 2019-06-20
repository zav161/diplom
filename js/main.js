$(function() {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },100);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});

$('form[name=contact-form]').submit(function(event){
  event.preventDefault();
  let dataArray = $(this).serializeArray();
  if (!/^[a-zA-Zа-яА-Я]*$/g.test(dataArray[0]['value'])) {
      alert("Неверное имя! Имя может содержать только буквы");
      return false;
  }

  $.ajax({
    url: "email_send.php",
    type: "post",
    data: dataArray,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(response) {
      console.log(response);
    }
  })
});
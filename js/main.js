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
  // console.log(dataArray);
  let data = {
      'name': dataArray[0]['value'],
      'email': dataArray[1]['value'],
      'subject': dataArray[2]['value'],
      'msg': dataArray[3]['value']
  };
  $.ajax({
    url: "email_send.php",
    type: "post",
    data: data,
    dataType: "json",
    success: function(response) {
      console.log(response);
      let alert = `<div class="alert alert-success" role="alert">
                      <strong>Успешно! </strong>`+response['msg']+`
                    </div>`;
      $('.card-body').prepend(alert);
      $('form *').prop('disabled', true);
      $('#submitButton').css('display','none');
      
    }
  })
});
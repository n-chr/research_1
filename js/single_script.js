(function ($) {
  var $nav = $('#navArea');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  var open = 'open';
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  $mask.on('click', function () {
    $nav.removeClass(open);
  });
})(jQuery);

$(function () {
  const $modalMask = $('#modal-mask');

  //クリックしてモーダルを開く
  $('.heading').on('click', function () {
    const targetModalId = $(this).data('modal-target');
    $(targetModalId).addClass('appear');
    $modalMask.addClass('appear');
  });

  // モーダルを閉じる関数
  function closeModal() {
    $('.modal').removeClass('appear');
    $modalMask.removeClass('appear');
  }

  // 閉じるボタン（.modal-close）をクリックしてモーダルを閉じる
  $('.modal-close').on('click', function () {
    closeModal();
  });

  // モーダル背景マスク（#modal-mask）をクリックしてモーダルを閉じる
  $modalMask.on('click', function () {
    closeModal();
  });
});
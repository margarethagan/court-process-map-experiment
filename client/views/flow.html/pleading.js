Template.pleading.onRendered(function(){
  //this codes will generate dynamic
  $('.step1').connections();
  $('.step2').connections();
  $('.step3').connections();
  $('.step4').connections();
  $('.step5').connections();
  $('.step6').connections();
  $('.step7').connections();
  $('.step8').connections();
  $( window ).resize(function() {
    $('.card').connections('remove');
    $('.step1').connections();
    $('.step2').connections();
    $('.step3').connections();
    $('.step4').connections();
    $('.step5').connections();
    $('.step6').connections();
    $('.step7').connections();
    $('.step8').connections();
});
});

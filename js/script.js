// Replichiamo lo Slider fatto insieme questa mattina, al click sulla sulle frecce rendiamo visibile 
// l'immagine successiva o precedente (in base alla freccia sulla quale ho cliccato).

$(document).ready(function(){

   $('.fa-chevron-left').click(function(){
       
    $('.show').prev().addClass('show')
    $('.show').next().removeClass('show')

    if($('.show').hasClass('first')){

        $('.last').addClass('show')
        $('.first').removeClass('show')
    }

   })

   $('.fa-chevron-right').click(function(){

    $('.show').next().addClass('show')
    $('.show').prev().removeClass('show')

    if($('.show').hasClass('last')){

        $('.first').addClass('show')
        $('.last').removeClass('show')
    }
    
   })

})
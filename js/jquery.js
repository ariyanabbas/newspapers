var height = $('#header-fixe').height();
$ (window).scroll(function(){
    if($(this).scrollTop() > height){
        $('#header-fixe') .addClass('fixed');

    }
    else{
        $('#header-fixe') .removeClass('fixed')
    }
})
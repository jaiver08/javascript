$(document).ready(function(){
    var elemento = ''

    $('.letras').click(function(){
        if(elemento){
            $(elemento).css('position','unset')
        }
        $(this).css('position','absolute')
        elemento = this
    })

    // $('.letras').click(function(){
    //     var clon = $(this).clone().appendTo('body')
    //     $(clon).css('position','absolute')
    //     elemento = clon
    // })

    $('.letras').hover(function(){
        if($(this).css('color') == 'rgb(255, 0, 0)'){
            $(this).css('color','rgb(0, 0, 0)')
        }else{
            $(this).css('color','rgb(255, 0, 0)')
        }
    })

    $(document).dblclick(function(){
        elemento = ''
    })

    $(document).mousemove(function(e){
        var x = e.pageX;
        var y = e.pageY;

        if(elemento){
            $(elemento).css('left',x)
            $(elemento).css('top',y)
        }
    })
})
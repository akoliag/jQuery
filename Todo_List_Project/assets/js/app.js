//check off specific todos by clicking
$("li").click(function () {
    //thanks to this only a clicked li will change not all of them
    $(this).toggleClass("completed");
});

//click on X to delete todo
    $("span").click(function(event){
        //parent() will remove the li not the span
        //we need to call remove as fadeOut callback otherwise remove won't wait for fadeOut and there will be no fade effect
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        })
        //stopPropagation will prevent the event from bubbling up to the parent elements so we  click on the span and li won't be fired
        event.stopPropagation();
    });
//check off specific todos by clicking
//click adds event only to exisiting elements while on to the existing and potential future ones 
//but we need to add on to the exisiting one when the event is fired for the first time - so we add it to ul
$("ul").on("click", "li", function () {
    //thanks to this only a clicked li will change not all of them
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function (event) {//on will fire only if the span is clicked
    //parent() will remove the li not the span
    //we need to call remove as fadeOut callback otherwise remove won't wait for fadeOut and there will be no fade effect
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    //stopPropagation will prevent the event from bubbling up to the parent elements so we  click on the span and li won't be fired
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //which checks the number of key that has been pressed - 13 is assigned to the enter key
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");//clearing the input text after adding
        //create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
})
$(document).ready(function(){
    let maxFieldLimit = 10;
    let add_more_button = $(".add_button");
    let fieldwrapper = $(".input_field_wrapper");
    let fieldHTML = "<div><input type='text' name='field_name[]' value=''><a href='javascript:void(0);'class='remove_button'>Remove</a></div>";
    let x =1;
    $(add_more_button).click(function(){
        if(x < maxFieldLimit){
            x++;
            $(fieldwrapper).append(fieldHTML);
        }
    });
    $(fieldwrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
})
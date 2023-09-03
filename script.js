var curr_val=""
$(document).ready(function(){
    $("button").click(function(){
        var val = $(this).attr("id");
        if(val != "equal" && val != "clear"){
            $(".screen").append(val);
            curr_val = curr_val+val;
        }
        else if(val == "equal"){
            $(".screen").text(eval(curr_val));
            curr_val="";
            $("button").click(function(){
                location.reload();
            });
        }
        else if(val == "clear"){
            curr_val="";
            location.reload();
        }
    });  
});
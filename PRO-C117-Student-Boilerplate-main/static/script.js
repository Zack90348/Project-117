var date = new Date().toLocaleDateString()
var display_date = "Date:" + date

$(document).ready(
    function(){
        $("#display_date").html(display_date)
    }
)

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        var input_data={
            text:$("#text").val()
        }
        $.ajax({
            type:"POST",
            url:"/predict",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            success:function(result){
                predicted_emotion = result.data.predicted_emotion
                predicted_emotion_url = result.data.predicted_emotion_url
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display","block")
                $("#emo_img_url").attr("src",predicted_emotion_url)
                $("#emo_img_url").css("display","block")
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
        });
    });
})


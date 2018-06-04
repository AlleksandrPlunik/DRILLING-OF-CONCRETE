var $callback = $('#callback_popup');

$(document).ready(function () {
    $callback.popup();

    $('#callback_phone').mask('+389999999999');
    $('#callback_time').mask('00:00');
    
    $('.js-callback-submit').on('click', function (e) {
        e.preventDefault();

        var inputs = {
            phone: $('#callback_phone'),
            time: $('#callback_time')
        };
        if (checkInputs(inputs)) {
            $.ajax({
                method: "POST",
                url: 'callback.php',
                data: $('.callback-form').serialize(),
                success: function (response) {
                    response = JSON.parse(response);
                    alert(response.message);
                    $('.callback_popup_close').click();
                }
            });
        }
    });
});

function checkInputs(inputs) {
   var status = true;
    
    $.each(inputs, function (index, value) {
        if (value.val() == '' || value.val() == 'undefined' || value.val() == null) {
            value.addClass('call-error');
            status = false;
        } else {
            value.removeClass('call-error');
        }
    });
    
    return status;
}
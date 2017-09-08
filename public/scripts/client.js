console.log('JS working');

$(document).ready(onReady);



function onReady(){
    //Event listeners
    $('.modeButton').on('click', setupMode );
    $('#submitButton').on('click',  );
    $('#reset').on('click',  );
    $('#playMode').hide();
}

function setupMode(){
    var $diffNumber = $(this).data('number');
    $diffNumber = Number($diffNumber);
    console.log('Its working ->', $diffNumber);
    var objectToSend = {
        mode: $diffNumber
    };
    //console.log(objectToSend);
    
    $.ajax({
        method: 'POST',
        url: '/difficulty',
        data: objectToSend,
        success: function(res){
            console.log('SetupMode from server:', res);
            $('#playMode').show();
            $('#setUpMode').toggle();        }
                

    });
    
}

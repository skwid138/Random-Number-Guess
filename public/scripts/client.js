console.log('JS working');

$(document).ready(onReady);

function onReady(){
    console.log('doc is ready, browser console');
    message();
}

function message(){
    console.log('sending info back');
    $.ajax({
        method: 'GET',
        url: '/fakeName',
        success: function (response){
            console.log('success is working', response);
            
        }        

    });
    
}
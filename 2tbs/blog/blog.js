//Load Header
$(document).ready(function (e) {

        $('#header').load('header.html', "", function(responseText, textStatus, XMLHttpRequest) {
            if(XMLHttpRequest.status === 404) {
                $('#header').load('../header.html');
                $('#footer').load('../../footer.html');
            } else {
                $('#footer').load('../footer.html');
            }
                
        });
        
});

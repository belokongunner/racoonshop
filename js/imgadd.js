WS.DOMload(function(){
    WS.Body.ondragover = function(event) {
        var types = event.dataTransfer.types;
        if (types[2] && types[2] == "Files"){ event.preventDefault(); return true; }
        return false;
    };
    function upload(file){
        var xhr = new XMLHttpRequest();
        xhr.open('POST',  "images/" + file.name, true);
        xhr.send(file);
    }
    WS.Body.ondrop = function(event) {
        var types = event.dataTransfer.types;
        var files = event.dataTransfer.files;
        if (types && types.length && (types[0] == "Files" || types[0]== "application/x-moz-file") && files && files.length > 0)
        {event.preventDefault();for (var i = 0; i < files.length; i++){upload(files[i]);}return true;}return false;
    };
});
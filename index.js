function getText() {

    var xhttp = new XMLHttpRequest();

    //defines function to be called when ready state property changes
    xhttp.onreadystatechange = function() {

        //readyState = 4 means request finished and response is ready //status = 200 means OK 
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
          }
    };

    //specifies the request : Method, url, async
    xhttp.open("GET", "text.txt", true);

    //sends request to server //used to get
    xhttp.send();
}


function getXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            tabFunc(this);
        }
    };
    xhttp.open("GET", "catalog.xml", true);
    xhttp.send();
}

function tabFunc(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Artist</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < 5; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("table").innerHTML = table;
    // var btn = document.getElementsByName(input);
    // document.removeChild(btn);
}
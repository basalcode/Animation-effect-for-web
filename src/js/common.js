function mainContent(path) {
    fetch(path).then(function(response) {
        response.text().then(function(text){
            document.querySelector('#main-content').innerHTML = text;
        })
    })
}

if (window.location.hash) {
    var fileName = window.location.hash.substr(2);
    mainContent('./src/data/' + fileName);
} else {
    mainContent('./src/data/index');
}
function bringSidebarContent(path) {
    return fetch(path).then(function(response) {
        response.text().then(function(text){
            var sidebarObj = JSON.parse(text).sidebar;
            var sidebarHtml = '';
            for (var i = 0; i < sidebarObj.length; i++) {
                sidebarHtml += `<nav class="nav-group">
                <header class="group-name">${sidebarObj[i][0]}</header>`
                for (var j = 1; j < sidebarObj[i].length; j++) {
                    sidebarHtml +=
                    `<a class="nav-item" 
                       href="#!${sidebarObj[i][j]}" 
                       onclick="bringMainContent('./src/data/${sidebarObj[i][j]}');">
                       ${sidebarObj[i][j]}
                    </a>`;
                }
                sidebarHtml += `</nav>`;
            }
            document.querySelector('#sidebar').innerHTML= sidebarHtml;
        })
    });
}

function bringMainContent(path) {
    return fetch(path).then(function(response) {
        response.text().then(function(text){
            document.querySelector('#main-content').innerHTML = text;
            var effectField = document.querySelector('#effect-field');
            var pathList = path.split('/');
            var effectName = pathList[pathList.length - 1]; // Name of content data file.
            
            // Apply effect depending on effect.
            switch (effectName) {
            case 'Typing':
                textWritingAnimation(effectField, `This is an example of how ${effectName} Effect works.`);
                break;
            case 'Rainbow':
                rainbowObj.initEvent(effectField);
                break;
            case 'Drop':
                drop.dropInit(effectField);
                break;
            case 'Filp':
                break;
            }
        })
    });
}

// If there is hash address.
if (window.location.hash) {
    var fileName = window.location.hash.substr(2);
    bringSidebarContent('./src/data/sidebar.json');
    bringMainContent('./src/data/' + fileName);
} else { // If there is no hash address.
    bringSidebarContent('./src/data/sidebar.json');
    bringMainContent('./src/data/index');
}
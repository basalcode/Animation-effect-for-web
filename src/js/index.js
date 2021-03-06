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
                       onclick="bringMainContent('${sidebarObj[i][j]}');">
                       ${sidebarObj[i][j]}
                    </a>`;
                }
                sidebarHtml += `</nav>`;
            }
            document.querySelector('#sidebar').innerHTML= sidebarHtml;
        })
    });
}

function bringMainContent(effectName, path) {    
    if(path === undefined){
        return fetch('./src/data/EffectTemplate').then(function(response) {
            response.text().then(function(text){
                document.querySelector('#main-content').innerHTML = text;
                var effectNameList = document.querySelectorAll('span');
                var effectField = document.querySelector('#effect-field');
                var codeField = document.querySelector('#code-pen')
                for (var i = 0; i < effectNameList.length; i++) {
                    effectNameList[i].innerHTML = effectName;
                }
                // Apply effect depending on effect.
                switch (effectName) {
                case 'Typing':
                    effectField.innerHTML = "";
                    textWritingAnimation(effectField, `This is an example of how ${effectName} Effect works.`);
                    break;
                case 'Rainbow':
                    rainbowObj.init(effectField);
                    break;
                case 'Drop':
                    drop.init(effectField);
                    break;
                case 'Flip':
                    flip.init(effectField);    
                    break;
                case 'FillColor':
                    effectField.innerHTML += `<link rel="stylesheet" href="./src/css/fillColor.css"></link>`
                    fillColor.init(effectField);
                    break;
                }
                embedCode(codeField, effectName);
            })
        });
    } else {
        return fetch(path).then(function(response) {
            response.text().then(function(text){
                document.querySelector('#main-content').innerHTML = text;
            })
        });
    }
}

// If there is hash address.
if (window.location.hash) {
    var effectName = window.location.hash.substr(2);
    bringSidebarContent('./src/data/sidebar.json');
    if (effectName != 'index' && effectName != 'bookmarks') {
        bringMainContent(effectName);
    } else {
        bringMainContent('', `./src/data/${effectName}`)
    }
} else { // If there is no hash address.
    bringSidebarContent('./src/data/sidebar.json');
    bringMainContent('', './src/data/index');
}

/* embed codes from codepen */
function embedCode(codeField, effectName) {
    return fetch('./src/data/' + effectName).then(function(response) {
        response.text().then(function(text){
            codeField.innerHTML = text;
        });
    })
}
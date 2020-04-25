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
                /* fectch('./src/data/Typing').then(function(response) {
                    response.text().then(function(text){

                    });
                } */
                

                // Apply effect depending on effect.
                switch (effectName) {
                case 'Typing':
                    effectField.innerHTML = "";
                    textWritingAnimation(effectField, `This is an example of how ${effectName} Effect works.`);
                    embedCode(codeField, effectName);
                    break;
                case 'Rainbow':
                    rainbowObj.initEvent(effectField);
                    embedCode(codeField, effectName);
                    break;
                case 'Drop':
                    drop.dropInit(effectField);
                    embedCode(codeField, effectName);
                    break;
                case 'Flip':
                    flip.initFlip(effectField);    
                    embedCode(codeField, effectName);
                    break;
                }
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
    bringMainContent(effectName);
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
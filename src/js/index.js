function bringSidebarContent(path) {
    return fetch(path).then(function(response) {
        response.text().then(function(text){
            var sidebarObj = JSON.parse(text).sidebar;
            var sidebarHtml = '';
            for (var i = 0; i < sidebarObj.length; i++) {
                sidebarHtml += `<nav class="nav-group">
                <header class="group-name">${sidebarObj[i][0]}</header>`
                for (var j = 1; j < sidebarObj[i].length; j++) {
                    console.log('test', sidebarObj[i][j]);
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

function bringMainContent(effectName) {    
    return fetch('./src/data/EffectTemplate').then(function(response) {
        response.text().then(function(text){
            document.querySelector('#main-content').innerHTML = text;
            var effectNameList = document.querySelectorAll('span');
            var effectField = document.querySelector('#effect-field');
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
                rainbowObj.initEvent(effectField);
                break;
            case 'Drop':
                console.log('drop');
                drop.dropInit(effectField);
                break;
            case 'Flip':
                console.log('flip');
                flip.initFlip(effectField);
                break;
            }
        })
    });
}

// If there is hash address.
if (window.location.hash) {
    var effectName = window.location.hash.substr(2);
    bringSidebarContent('./src/data/sidebar.json');
    bringMainContent(effectName);
} else { // If there is no hash address.
    bringSidebarContent('./src/data/sidebar.json');
    bringMainContent('./src/data/index');
}
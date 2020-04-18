var rainbowObj = {
    targetElement : null,
    eventStop : null,
    colorValue : 0,
    initEvent : function(_target) {
        targetElement = _target;
        targetElement.addEventListener('mouseenter', this.rainbowColorOn); 
        targetElement.addEventListener('mouseout', this.rainbowColorOff);
    },

    rainbowColorOn : function(event) {
        this.eventStop = window.setInterval(function() {
            event.target.style.color = 'hsl(' + rainbowObj.colorValue + ', 100%, 50%)';
            rainbowObj.colorValue = (rainbowObj.colorValue + 10) % 360;
        }, 30)
    },
    
    rainbowColorOff : function(event) {
        rainbowObj.colorValue = 0;
        event.target.style.color = 'black';
        clearInterval(this.eventStop);
    }
}
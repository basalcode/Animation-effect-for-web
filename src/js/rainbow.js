var rainbowObj = {
    targetElement : null,
    eventStop : null,
    colorValue : 0,
    initEvent : function (_target) {
        targetElement = _target;
        for (var i = 0 ; i < aElement.length; i++) {
            targetElement.addEventListener('mouseenter', this.rainbowColorOn); 
            targetElement.addEventListener('mouseout', this.rainbowColorOff);
        }
    },

    rainbowColorOn : function() {
        this.eventStop = window.setInterval(function() {
            this.targetElement.target.style.color = 'hsl(' + anchorObj.colorValue + ', 100%, 50%)';
            this.colorValue = (anchorObj.colorValue + 10) % 360;
        }, 30)
    },
    
    rainbowColorOff : function() {
        this.colorValue = 0;
        this.targetElement.target.style.color = 'black';
        clearInterval(this.eventStop);
    }
}
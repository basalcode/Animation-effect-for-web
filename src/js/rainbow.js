var rainbowObj = {
    targetElement : null,
    eventStop : null,
    colorValue : 0,
    init : function(_target) {
        targetElement = _target;
        targetElement.addEventListener('mouseenter', this.on); 
        targetElement.addEventListener('mouseout', this.off);
    },
    on : function(event) {
        this.eventStop = window.setInterval(function() {
            event.target.style.color = 'hsl(' + rainbowObj.colorValue + ', 100%, 50%)';
            rainbowObj.colorValue = (rainbowObj.colorValue + 10) % 360;
        }, 30)
    },
    off : function(event) {
        rainbowObj.colorValue = 0;
        event.target.style.color = 'black';
        clearInterval(this.eventStop);
    }
}
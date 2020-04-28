var fillColor = {
    target : null,
    init : function(_target) {
        this.target = _target;
        this.target.addEventListener('mouseenter', this.on);
        this.target.addEventListener('mouseout', this.off);
    },
    on : function(event) {
        event.target.style.animation = "animate-in 0.5s 1"
        event.target.style.animationFillMode = "forwards";
    },
    off : function(event) {

    }
}
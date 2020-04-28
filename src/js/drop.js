var drop = {
    target : null,
    init : function(_target) {
        this.target = _target;
        this.target.addEventListener('mouseenter', this.on);
        this.target.addEventListener('mouseout', this.off);
    },
    on : function(event) {
        event.target.style.position = "relative";
        event.target.style.top = "-50px";
    },
    off : function(event) {
        event.target.style.transition = "top 1s"
        event.target.style.top = "0px";
    }
}
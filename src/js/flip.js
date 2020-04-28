var flip = {
    target : null,
    init : function(_target) {
        this.target = _target;
        this.target.addEventListener('mouseenter', this.on);
        this.target.addEventListener('mouseout', this.off);
        this.target.style.width="380px";
        this.target.style.wrodWrap="break-word";
        this.target.style.textAlign="center";
    },
    on : function(event) {
        event.target.style.letterSpacing="-8px";
        event.target.style.transition="all 0.8s";
    },
    off : function(event) {
        event.target.style.letterSpacing="normal";
        event.target.style.transition="all 1s";
    }
}
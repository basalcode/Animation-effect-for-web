var flip = {
    target : null,
    initFlip : function(_target) {
        this.target = _target;
        this.target.addEventListener('mouseenter', this.flipOn);
        this.target.addEventListener('mouseout', this.flipOff);
        this.target.style.width="380px";
        this.target.style.wrodWrap="break-word";
        this.target.style.textAlign="center";
    },
    flipOn : function(event) {
        event.target.style.letterSpacing="-8px";
        event.target.style.transition="all 0.8s";
        console.log('in');
    },
    flipOff : function(event) {
        event.target.style.letterSpacing="normal";
        event.target.style.transition="all 1s";
    }
}
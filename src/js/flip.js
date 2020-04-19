var flip = {
    target : null,
    initFlip : function(_target) {
        this.target = _target;
        this.target.addEventListener('mouseenter', this.flipOn);
        this.target.addEventListener('mouseout', this.flipOff);
    },
    flipOn : function(event) {
        console.log('in');
        event.target.style.fontSize="0%";
        event.target.style.width="0%";
        event.target.style.transition="all 1s"
    },
    flipOff : function(event) {
        console.log('out');
        //event.target.style.width="0%";
        
    }
}
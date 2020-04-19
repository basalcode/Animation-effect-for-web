var drop = {
    target : null,
    dropInit : function(_target) {
        this.target = _target;
        this.target.addEventListener('mouseenter', this.dropOn);
        this.target.addEventListener('mouseout', this.dropOff);
    },
    dropOn : function(event) {
        console.log('in');
        event.target.style.position = "relative";
        event.target.style.top = "-50px";
    },
    dropOff : function(event) {
        console.log('off');
        event.target.style.transition = "top 1s"
        event.target.style.top = "0px";
    }
}
import anime from "animejs";

export const lineAnimation = function(id, target, delay=0) {
    const cssClass = ".lineAnimation--" + id;
    let lettersWidth = target.getBoundingClientRect().width;
    
    return anime.timeline(
        { loop: false }
        )
        .add({
            targets: `${cssClass} .line`,
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 400,
            delay: delay
        })
        .add({
            targets: `${cssClass} .line`,
            translateX: [0, lettersWidth + 20],
            easing: "easeOutExpo",
            duration: 700,
            delay: 0
        }).add({
            targets: `${cssClass} .letter`,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 400,
            offset: '-=0',
            delay: function (el, i) {
                return 36 * (i + 1)
            }
        }).add({
            targets: `${cssClass} .line`,
            scaleY: [1, 0],
            opacity: [1, 0],
            easing: "easeOutExpo",
            duration: 600
        });
}

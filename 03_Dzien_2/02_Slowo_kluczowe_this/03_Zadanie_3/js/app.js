const stairs = {
    step: 0,
    up(steps) {
        this.step += steps
    },
    down(steps) {
        this.step -= steps
    },
    printStairs() {
        console.log(this.step)
    }
}

stairs.up(5)
stairs.down(2)
stairs.printStairs()
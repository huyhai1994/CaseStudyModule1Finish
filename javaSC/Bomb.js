class Bomb {
    speed;
    Object;
    Direction;
    State;

    constructor(speed, Object, direction, State) {
        this.speed = speed;
        this.Object = Object;
        this.Direction = direction;
        this.State = State;
        this.Object.style.top = window.innerHeight - this.Object.width + 'px';
        this.Object.style.left = window.innerWidth / 2 + 'px';
        this.fuseBurningSound = new Howl({
            src: ['LevelUp.mp3']
        });
    }

    bombMove() {
        if (this.Direction === 'up') {
            this.moveUp();
            if (parseInt(this.Object.style.top) < window.innerHeight * Math.random() / 4) {
                this.Direction = 'down';
            }
            // hello
        } else if (this.Direction === 'down') {
            this.moveDown();
            if (parseInt(this.Object.style.top) > window.innerHeight) {
                this.setNewLocationAfterGetSlash();
            }
        }
    }

    getSlash() {
        let explodedSound = new Howl({
            src: ['explosion.mp3']
        });
        explodedSound.play();
        this.State = 'exploded';
    }

    moveUp() {
        this.Object.style.top = parseInt(this.Object.style.top) - this.speed + 'px';
    }

    moveDown() {
        this.Object.style.top = parseInt(this.Object.style.top) + this.speed + 'px';
    }

    setNewLocationAfterGetSlash() {
        this.fuseBurningSound.play();
        document.getElementById('Bomb').src = 'Bomb.png';
        duckHunterGame.ScoreBombDeductedCheck = false;
        this.Object.style.top = window.innerHeight - this.Object.width + 'px';
        this.Object.style.left = (window.innerWidth) * Math.random() + 'px';
        this.Direction = 'up';
    }

}
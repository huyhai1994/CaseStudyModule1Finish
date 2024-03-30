class animal {
    speed;
    name;
    Object;
    direction;
    State;
    Sound;


    constructor(inputRatio, inputName, inputSpeed, inputObject, inputDirection, inputState, inputSound) {
        this.speed = inputSpeed;
        this.name = inputName;
        this.direction = inputDirection;
        this.Object = inputObject;
        this.Object.width = inputObject.clientWidth * inputRatio;
        this.Object.style.position = "absolute";
        this.State = inputState;
        this.Object.style.top = window.innerHeight - this.Object.width + 'px';
        this.Object.style.left = window.innerWidth / 2 + 'px';
        this.Sound = new Howl({
            src: [inputSound]
        });
    }

    jump() {
        if (this.direction === 'up') {
            this.moveUp();
            if (parseInt(this.Object.style.top) < window.innerHeight * Math.random() / 4) {
                this.direction = 'down';
            }
        } else if (this.direction === 'down') {
            this.moveDown();
            if (parseInt(this.Object.style.top) > window.innerHeight) {
                this.setNewLocationAfterGetSlash();
            }
        }
    }

    getSlash() {
        this.State = 'hurt';
    }

    moveUp() {
        this.Object.style.top = parseInt(this.Object.style.top) - this.speed + 'px';
    }

    moveDown() {
        this.Object.style.top = parseInt(this.Object.style.top) + this.speed + 'px';
    }

    playSound() {
        this.Sound.play();
    }

    setNewLocationAfterGetSlash() {
        this.playSound();
        if (this.Object === htmlDuckObject) {
            document.getElementById('duck').src = 'duck.png';
            duckHunterGame.ScoreAddedCheck = false;
        } else if (this.Object === htmlDogObject) {
            document.getElementById('dog').src = 'CauVang.png';
            duckHunterGame.ScoreDogDeductedCheck = false;
        }
        this.Object.style.top = window.innerHeight - this.Object.width + 'px';
        this.Object.style.left = (window.innerWidth) * Math.random() + 'px';
        this.direction = 'up';
    }

}
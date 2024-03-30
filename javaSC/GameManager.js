class GameManager {
    /*This class used for control the flow of game */
    level;
    Difficulty;
    BombList;
    DuckList;
    DogList;
    Score;
    ScoreBombDeductedCheck;
    ScoreAddedCheck;
    ScoreDogDeductedCheck;

    constructor(inputBombList, inputDuckList, inputDoglist, inputLevel) {
        this.BombList = inputBombList;
        this.DuckList = inputDuckList;
        this.DogList = inputDoglist;
        this.level = inputLevel;
        this.Score = 0;
        this.ScoreAddedCheck = false;
        this.ScoreBombDeductedCheck = false;
        this.ScoreBombDeductedCheck = false;
        this.Difficulty = 20;
    }

    runGame() {
        this.BombList.bombMove();
        this.DuckList.jump();
        this.DogList.jump();

        if (this.DuckList.State === 'hurt' && this.ScoreAddedCheck === false) {
            this.setScore();
            this.DuckList.State = 'alive';
            this.ScoreAddedCheck = true;
            document.getElementById('duck').src = 'duckDau.png';
            this.DuckList.direction = 'down';
        } else if (this.DogList.State === 'hurt' && this.ScoreDogDeductedCheck === false) {
            this.deductScore();
            this.DogList.State = 'alive';
            document.getElementById('dog').src = 'CauVangDau.png';
            this.ScoreDogDeductedCheck = true;
            this.DogList.direction = 'down';
        } else if (this.BombList.State === 'exploded' && this.ScoreBombDeductedCheck === false) {
            this.deductScore();
            this.BombList.State = 'alive';
            this.ScoreBombDeductedCheck = true;
            document.getElementById('Bomb').src = 'explosion.png';
            this.BombList.direction = 'down';
        }
        if (this.getScore() === 15) {
            let levelUpSound = new Howl({
                src: ['levelUp.mp3']
            })
            levelUpSound.play();
            this.setLevel();
            this.Score = 0;
        }
        if (this.getScore() < 0) {
            document.body.style.backgroundImage = "url('BackGround_GameOVer.png')";
            this.gameOver();
        }
        if (this.getLevel() === 2) {
            document.body.style.backgroundImage = "url('BackGround_level2.png')";
        } else if (this.getLevel() === 3) {
            document.body.style.backgroundImage = "url('BackGround_level3.png')";
        }
    }

    gameOver() {
        let GameOverSound = new Howl({
            src: ['GameOver.mp3']
        });
        GameOverSound.play();
        document.getElementById('gameOverText1').innerHTML = 'GAME';
        document.getElementById('gameOverText2').innerHTML = 'OVER';
        document.getElementById('gameScore').innerHTML = ' ';
        document.getElementById('gameLevel').innerHTML = ' ';
        clearInterval(rungame);
    }

    setScore() {
        this.Score++;
        document.getElementById('gameScore').innerHTML = this.getScore() + " ";
    }

    deductScore() {
        this.Score--;
        document.getElementById('gameScore').innerHTML = this.getScore() + " ";
    }

    getScore() {
        return this.Score;
    }

    getLevel() {
        return this.level;
    }

    setLevel() {
        this.level++;
        document.getElementById("gameLevel").innerHTML = this.getLevel() + " ";
        this.DogList.speed += this.Difficulty;
        this.DuckList.speed += this.Difficulty;
        this.BombList.speed += this.Difficulty;
    }
}
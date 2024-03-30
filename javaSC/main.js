let initialSpeed = 10;
let duckSpeed = initialSpeed;
let htmlDuckObject = document.getElementById('duck');
let dogSpeed = initialSpeed;
let bombSpeed = initialSpeed;
let htmlDogObject = document.getElementById('dog');
let htmlBombObject = document.getElementById('Bomb');
let duck = new animal(2, 'VitCoi', duckSpeed, htmlDuckObject, 'up', 'alive','duckFlyingSound.mp3');
let dog = new animal(2, 'CauVang', dogSpeed, htmlDogObject, 'up', 'alive','dog.mp3')
let bomb = new Bomb(bombSpeed, htmlBombObject, 'up', 'alive');
let duckHunterGame = new GameManager(bomb, duck, dog, 1);
let secondinMiliseccond = 10;
let themeSong = new Howl({
    src: ['themeSong.mp3'],
    autoplay : true
});
themeSong.play();
let rungame = setInterval(() => {
    duckHunterGame.runGame();

}, secondinMiliseccond);


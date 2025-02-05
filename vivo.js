var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene:{
              preload: preload,
              create: create,
              update: update

       }
};

var game = new Phaser.Game(config);

var movimento;


function preload() {  
    this.load.image('pl','assets/person.png');
    this.load.image('fun','assets/fundo.png');

    
}

function create() {
    
    this.add.image(400, 300, 'fun').setOrigin (0.5, 0.5);

    movimento = this.add.image(100, 50, 'pl').setScale(0.3, 0.3)


    movimento.setFlip(true, false);
    
}

function update() {  

   
    
              }
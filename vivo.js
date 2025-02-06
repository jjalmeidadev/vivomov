var config = {
    type: Phaser.AUTO,
    parent: "phase-example",
    width: 800,
    height: 600,
    physics: {
default: 'arcade',
arcade: {
    gravity: {y:0},
    debug:false

}
    },

    scene:{
              preload: preload,
              create: create,
              update: update,

       }
};

var game = new Phaser.Game(config);


function preload() {  
    this.load.image("pl",'assets/person.png');
    this.load.image('fun','assets/fundo.png');

    
}

function create() {
    
    this.add.image(400, 300, 'fun').setOrigin (0.5, 0.5);

    this.pl = this.physics.add.sprite(400, 150, "pl").setScale(0.4,0.4);

    this.cursors = this.input.keyboard.createCursorKeys();

   
    
}

function update() {  
    if(this.cursors.left.isDown){
        console.log("esquerda");
        this.pl.setVelocityX(-100);
      }else if(this.cursors.right.isDown){
        console.log("direita");
        this.pl.setVelocityX(100);
      }else if(this.cursors.up.isDown){
        console.log("subir");
        this.pl.setVelocityY(-100);
      }else if(this.cursors.down.isDown){
        console.log("descer");
        this.pl.setVelocityY(100);
      }else{
        this.pl.setVelocityX(0);
        this.pl.setVelocityY(0);
      }
      }
   
    
              
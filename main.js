var block = document.getElementById("block")
var hole = document.getElementById("hole")
var character = document.getElementById("character")
var jumping=0;
var counter=0;

hole.addEventListener('animationiteration', () => { 
    var random = (Math.random() * 300);
    hole.style.top = random + "px";
    counter++
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    if(jumping==0){
       character.style.top = (characterTop+2) + "px"
    }
    if (characterTop > 470 || (blockLeft < 20 && blockLeft > -50 && (characterTop < holeTop || characterTop > holeTop + 120))) {
        alert("Game Over !!!!!!!!!!\nScore: " + counter);
        character.style.top = "100px";
        block.style.animation = "none";
        hole.style.animation = "none";
        block.style.left = "400px";
        hole.style.left = "400px";
        counter = 0;
        setTimeout(() => {
            block.style.animation = "block 2s linear infinite";
            hole.style.animation = "block 2s linear infinite";
        }, 10);
    }
    
    
},10)

function jump() {
    jumping = 1;
    jumpCount = 0;
    
    var jumpInterval = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
        if ((characterTop > 6) && (jumpCount < 15)) { 
            character.style.top = (characterTop - 3) + "px";
        }  
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }  
        jumpCount++;
    }, 1);
}

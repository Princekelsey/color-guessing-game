
// naming variables
let numOfBoxes,colors,boxes,displayColor,scoreBoard,h1,refreshButton,levelSelect,info;

numOfBoxes = 6;
colors = [];
boxes = document.querySelectorAll('.box');
displayColor = document.querySelector('.displayColor');
scoreBoard = document.getElementById('score');
h1 = document.getElementsByTagName('h1')[0];
refreshButton = document.querySelector('#reset');
levelSelect = document.querySelectorAll('.levelbtn');
info = document.querySelector('.help');
let loadColor;


loadGame();

// function to start the game
function loadGame() {
    gameLevel();
    for (let i = 0; i < boxes.length; i++) {  
         // Adding Event Listener to the boxes
         boxes[i].addEventListener('click', eventListener);
        }
    resetColor();
}

// Setting the color for the boxes
 function changeColor(color) {
     for (let i = 0; i < boxes.length; i++) {   
        boxes[i].style.backgroundColor = color;
     }
 }

 // change the load color to be displayed (the color to be guessed)
 function changeLoadColor() {
     let colorPicker = Math.floor(Math.random()* colors.length);
     return colors[colorPicker];
 }

 // Setting a random color
 function ran_Color() {
     // random red value
     let red = Math.floor(Math.random() * 256);
     // random green value
     let green = Math.floor(Math.random() * 256);
     // random blue value
     let blue = Math.floor(Math.random() * 256);
     // Adding them together to create an RGB color
     let rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
     return rgbColor;

 }

 // Generating different color for each box at every load
 function colorGenareator(num) {
     let arr = [];
     for (let i = 0; i < num; i++) {
     arr.push(ran_Color());       
     }
     return arr; 
 }

 // Game operations
 function eventListener() {
    let selectedColor = this.style.backgroundColor;
    if (selectedColor === loadColor) {
       scoreBoard.textContent = 'Correct!!';
       refreshButton.textContent = 'Play Again';
       changeColor(selectedColor);
       h1.style.backgroundColor = selectedColor;
       
    } else {
        this.style.backgroundColor = 'rgb(19, 19, 20)';
        scoreBoard.textContent = 'Try Again';

    }
 }

 // resetting the game color and display
 function resetColor() {
     // create random color
     colors = colorGenareator(numOfBoxes);
     // set new load color
     loadColor = changeLoadColor();
     // set new box colors
     for (let i = 0; i < boxes.length; i++) { 
        if (colors[i]) {
            boxes[i].style.display = 'block';
            boxes[i].style.backgroundColor = colors[i]
        } else {
            boxes[i].style.display = 'none';
        }
    }
    displayColor.textContent = loadColor;
    h1.style.backgroundColor = 'rgb(155, 9, 77)';
    refreshButton.classList.add('level');
    scoreBoard.textContent = '';
    refreshButton.textContent = 'Change Color'
}

    // Event listener to refresh the game when the change color is clicked
    refreshButton.addEventListener('click', resetColor);
    // Event listener to get hint on how the game works when hint button is clicked
    info.addEventListener('click', function () {
      alert('Guess the correct colour with the RGB number')
    });


    //  game level control
    function gameLevel() {
        for(let i = 0; i < levelSelect.length; i++){
            levelSelect[i].addEventListener('click', function() {
                levelSelect[0].classList.remove('level');
                levelSelect[1].classList.remove('level');
                this.classList.add('level');
                if (this.textContent === 'Easy') {
                    numOfBoxes = 3;
                } else {
                    numOfBoxes = 6;
    
                }
                resetColor();
                 refreshButton.classList.remove('level');
            })
        }
    }
    


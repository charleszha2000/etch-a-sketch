const main = document.querySelector("#main");
let numBoxes = 32;
makeBoxes(numBoxes);


const draw = document.querySelector("#draw");

draw.addEventListener('click', () => {
    boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => box.addEventListener('mouseover', function(e) {
        if(e.buttons == 1) {
            box.classList.add('filled-in');
        }
    }));
})

const erase = document.querySelector("#erase");

erase.addEventListener('click', () => {
    boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => box.addEventListener('mouseover', function(e) {
        if(e.buttons == 1) {
            box.classList.remove('filled-in');
        } 
    }));
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    makeBoxes(numBoxes);
})

const size = document.querySelector("select");
size.addEventListener('change', () => {
    numBoxes = size.value;
    makeBoxes(numBoxes);
} );

/*  Pre: amount is some positive number, such that 960 / amount is an
*   integer greater than or equal to 3.
*   Modifies: Deletes and creates children of the main container element
*/
function makeBoxes(amount) {
    const main = document.querySelector("#main");
    main.innerHTML = '';
    for(i = 0; i < amount; i++){
        for(j = 0; j < amount; j++){
            const box = document.createElement('div');
            box.draggable = false;
            box.clickable = false;
            box.classList.add('grid-box');
            const size = (960 / amount) - 2;
            box.style.width = size + "px";
            box.style.height = size + "px";
            main.style.gridTemplateColumns = "repeat(" + amount + ", auto)";
            main.style.gridTemplateRows = "repeat(" + amount + ", auto)";
            main.appendChild(box);
        }
    }
}

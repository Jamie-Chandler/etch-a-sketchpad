//A Variable that looks for the container div on the HTML file
const container = document.querySelector("#container");

//Function to create the number of cells in the grid.
//If the number of cells is not a number or is greater than 100 then they get an alert.
function createGrid(num = prompt('pick a number between 1-100')) {
    if (num <= 100) {
        for(let x=0; x< num**2; x++) {
            let div = document.createElement('div');
            div.className = "grid_block";
            div.style.cssText = 'border: 1px solid black';
            container.appendChild(div);
            }
        } else {
            alert('That is either not a number, or its above 100. Reload this page.')
        }
        container.style.cssText = `grid-template-columns: repeat(${num}, auto);`
    }

//Function to change colour on 'hover' of the cell to black.
function colorChange(){
    const gridBlock = document.querySelectorAll('.grid_block');
    gridBlock.forEach((div) =>{
        div.addEventListener('mouseenter', function (e) {
        e.target.style.background = 'black';
    });
});
}


createGrid();
colorChange();
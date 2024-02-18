var gridContainer = document.querySelector('.grid-container');

// Create the grid items
function createnewgrid(){
    var squaresPerSide = prompt("Enter the number of squares per side for the new grid (max: 100):");
    if(isNaN(squaresPerSide)||squaresPerSide<=0||squaresPerSide>100){
        alert("Please enter a valid number");
        return;
    }
    //Removing current grid
    var gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    //Generate new grid
    var gridSize = 960; // Total width of the grid
    var squareSize = gridSize / squaresPerSide;
    for (var i = 0; i < squareSize * squareSize; i++) {
        var gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = squareSize + 'px';
        gridItem.style.height = squareSize + 'px';
      
        gridContainer.appendChild(gridItem);
    }
}


for (var i = 0; i < 16 * 16; i++) {
  var gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.addEventListener('mouseover',function(){
    this.style.backgroundColor='ff0000';})
    
  gridItem.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ccc'; // Reset background color on mouseout
    });

  gridContainer.appendChild(gridItem);
}

interface Cell {
    element: HTMLDivElement;
    state: string;
}

function createGrid(x, y, container) {
    const grid = [];

    for (let row = 0; row < y; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        const rowCells = [];

        for (let col = 0; col < x; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            rowDiv.appendChild(cell);
            rowCells.push({ element: cell, state: 'water' });
        }

        grid.push(rowCells);
        container.appendChild(rowDiv);
    }

    return grid;
}

// Get the container elements
const tablePlayer1 = document.getElementById('tablePlayer1');
const tablePlayer2 = document.getElementById('tablePlayer2');

// Create grids and store the grid data
const player1Grid = createGrid(10, 10, tablePlayer1);
const player2Grid = createGrid(10, 10, tablePlayer2);

const water = 'water';
const ship = 'ship';

// Function to place a ship on the grid
function placeShip(grid, length, orientation) {
    let row, col;
    let validPlacement = false;

    while (!validPlacement) {
        validPlacement = true;

        // Get random starting position
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);

        // Determine placement based on orientation
        if (orientation === 'horizontal') {
            if (col + length - 1 > 9) {
                validPlacement = false;
                continue;
            }
            for (let i = 0; i < length; i++) {
                if (grid[row][col + i].state !== 'water') {
                    validPlacement = false;
                    break;
                }
            }
        } else if (orientation === 'vertical') {
            if (row + length - 1 > 9) {
                validPlacement = false;
                continue;
            }
            for (let i = 0; i < length; i++) {
                if (grid[row + i][col].state !== 'water') {
                    validPlacement = false;
                    break;
                }
            }
        }

        // Place the ship
        if (validPlacement) {
            if (orientation === 'horizontal') {
                for (let i = 0; i < length; i++) {
                    grid[row][col + i].state = ship;
                }
            } else if (orientation === 'vertical') {
                for (let i = 0; i < length; i++) {
                    grid[row + i][col].state = ship;
                }
            }
        }
    }
}


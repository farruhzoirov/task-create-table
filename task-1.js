'use strict'

const columnInput = document.getElementById('column-input');
const rowInput = document.getElementById('row-input');
const colorInput = document.getElementById('color-input');
const tBody = document.querySelector('tbody');
const table = document.querySelector('table');
const numbersForm = document.getElementById('form-submit');
const tableContainer = document.querySelector('.table-container');

let numbersList = [];

function drawingMatchTable (list) {
    tBody.innerHTML = '';
    table.innerHTML = '';

    list.forEach((item) => {
        for (let i = 0; i < +item.rowNumber; i++) {
            let row = table.insertRow(i);

            list.forEach((item) => {
                for (let j = 0; j < +item.colNumber; j++) {
                    let col = row.insertCell(j)
                    col.textContent = `Click - ${j + 1}`;

                    col.addEventListener('click',function () {
                        if (item.colorValue) {
                            col.style.backgroundColor = item.colorValue;
                        }
                        if(item.colorValue === "#000000") {
                            col.style.color = '#ffffff';
                        }
                    })

                }
            })
        }
        tableContainer.appendChild(table);
 })
}



function numbersAddingHandler (e) {
    e.preventDefault();
    const getNumbers = {
        colNumber:columnInput.value,
        rowNumber:rowInput.value,
        colorValue:colorInput.value
    };

    if (+getNumbers.colNumber > 0 && +getNumbers.rowNumber > 0) {
        numbersList.push(getNumbers);
    }
    else {
        alert('Please Enter positive number!')
    }

    drawingMatchTable(numbersList);
}


numbersForm.addEventListener('submit', numbersAddingHandler);





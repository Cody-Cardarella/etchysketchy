// Add etch sketch container div to the body and style it
let container = document.createElement('div');
let body = document.querySelector('body');
body.appendChild(container);
container.classList.add('container');

// Add the clear button
let clearBtn = document.createElement('button')
body.appendChild(clearBtn);
clearBtn.textContent = 'Clear';
clearBtn.style.cssText = "margin: 50px;"

// Style the body
body.style.cssText = 'display:flex; align-items: center;justify-content: center;flex-direction: column; margin-top: 50px;'

//Style the first container
container.style.cssText = 'border: 1px solid black; display: inline-grid;grid-template-columns: repeat(8, 1fr);grid-template-rows: repeat(8, 1fr);height: 400px; width: 400px;'

// Add 16 divs under container div
for (i = 1; i <= 64; i ++){
    let subDiv = document.createElement('div');
    container.appendChild(subDiv);
    subDiv.classList.add('colorThisDiv')
    subDiv.style.cssText = 'border: 1px solid black; width: auto; height: auto;'
}

// Grab all divs
let colorDivs = document.querySelectorAll('.colorThisDiv');

// Change color of divs on mouseover
colorDivs.forEach((divs) => {
    divs.addEventListener('mouseover', function(event){
        event.target.style.background = rainbowColor();
    })

});

// Clear screen on clear button
colorDivs.forEach((divs) => {
    clearBtn.addEventListener('click', function(event){
        divs.style.background = null;
    })
});


function rainbowColor(){
    let x = Math.floor(Math.random()*265)
    let y = Math.floor(Math.random()*256)
    let z = Math.floor(Math.random()*256)
    let color = "rgb(" + x + "," + y + "," + z + ")"; 
    return color;
}

console.log(rainbowColor());
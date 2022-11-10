// Add first container div to the body and style it
let container = document.createElement('div');
let body = document.querySelector('body');
body.appendChild(container);
container.classList.add('container');
body.style.cssText = 'display:flex; align-items: center;justify-content: center; margin-top: 50px;'
container.style.cssText = 'border: 1px solid black; display: inline-grid;grid-template-columns: repeat(8, 1fr);grid-template-rows: repeat(8, 1fr);height: 400px; width: 400px;'

// Add 16 divs under container div
for (i = 1; i <= 64; i ++){
    let subDiv = document.createElement('div');
    container.appendChild(subDiv);
    subDiv.classList.add('colorThisDiv')
}

// 
let colorDivs = document.querySelectorAll('.colorThisDiv');

colorDivs.forEach((divs) => {
    divs.addEventListener('mouseover', function(event){
        event.target.style.background = 'black';
    })
    divs.addEventListener('mouseout', function(event){
        event.target.style.background = null;
    })
});
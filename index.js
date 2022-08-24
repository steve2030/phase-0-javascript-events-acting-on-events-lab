const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#000000';
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '100px';
dodger.style.bottom = '0';


// moves the dodger to the left relative to its position
function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left-1}px`;

    }

}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {

        moveDodgerLeft();
    }
});


// moves the dodger to the right rleative to its position
function moveDodgerRight() {
    const rightNumber = dodger.style.left.replace('px', '');
    const right = parseInt(rightNumber, 10);
    if (right >= 0 && right <= 360) {
        dodger.style.left = `${right + 1}px`;
    }
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});


function moveDodgerUp() {
    const upNumber = dodger.style.bottom.replace('px', '');
    const up = parseInt(upNumber, 10);

    if ( moveDodgerLeft && up <= 380 && up >= 0) {
        dodger.style.bottom = `${up + 1}px`;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        moveDodgerUp();
    }
})

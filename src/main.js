document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img');
    const eggPartBtns = document.querySelectorAll('.egg-part-btn');
    const eggParts = document.querySelectorAll('.egg-part');
    let selectedTexture = null;

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            selectedTexture = image.getAttribute('src');
            images.forEach(function(img) {
                img.classList.remove('flag');
            });
            image.classList.add('flag');
            console.log(selectedTexture);
        });
    });

    eggPartBtns.forEach(function(eggPartBtn, index) {
        eggPartBtn.addEventListener('click', function() {
            if (selectedTexture) {
                eggParts[index].setAttribute('src', selectedTexture);
            } else {
                console.log('Nie wybrano tekstury.');
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.img')) {
            images.forEach(function(img) {
                img.classList.remove('flag');
            });
            selectedTexture = null;
        }
    });
});


// =========================================================================



const inputs = document.querySelectorAll('input[type="color"]');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        const color = this.value;
        const label = this.parentElement;
        label.style.setProperty('--bg', color);
    });
});


document.getElementById('kolor1').addEventListener('input', function() {
    const eggPart = document.getElementById('part-btn-1');
    const color = this.value;
    if(color !== '#ffffff') {
        eggPart.style.setProperty('--borderTop', color);
    } else {
        eggPart.style.setProperty('--borderTop', 'transparent');
    }
});

document.getElementById('kolor2').addEventListener('input', function() {
    const eggPart = document.getElementById('part-btn-1');
    const color = this.value;
    if(color !== '#ffffff') {
        eggPart.style.setProperty('--borderBottom', color);
    } else {
        eggPart.style.setProperty('--borderBottom', 'transparent');
    }
});

document.getElementById('kolor3').addEventListener('input', function() {
    const eggPart = document.getElementById('part-btn-3');
    const color = this.value;
    if(color !== '#ffffff') {
        eggPart.style.setProperty('--borderTop', color);
    } else {
        eggPart.style.setProperty('--borderTop', 'transparent');
    }
});

document.getElementById('kolor4').addEventListener('input', function() {
    const eggPart = document.getElementById('part-btn-3');
    const color = this.value;
    if(color !== '#ffffff') {
        eggPart.style.setProperty('--borderBottom', color);
    } else {
        eggPart.style.setProperty('--borderBottom', 'transparent');
    }
});
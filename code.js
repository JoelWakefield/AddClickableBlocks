const root = document.documentElement;

let lightMode = true;

const button = document.querySelector('#addButton');
const themeButton = document.querySelector('#theme');
const blocks = document.querySelector('#blocks');

button.addEventListener('click', ()=> {
    let addNumber = Math.floor(Math.random() * 6);
    
    do {
        const block = document.createElement('div');
        block.classList.add('block');
        block.textContent = Math.floor(Math.random() * 1000);
        blocks.appendChild(block);
    } while (addNumber-- > 0);
});

blocks.addEventListener('click', (evt)=> {
    if (evt.target !== evt.currentTarget)
    evt.target.classList.toggle('selected');
});

themeButton.addEventListener('click', () => {
    lightMode = !lightMode;

    themeButton.textContent = `${lightMode ? 'Light' : 'Dark'} Mode`

    root.style.setProperty('--primary', lightMode ?  'var(--light-color)' : 'var(--dark-color)');
    root.style.setProperty('--secondary', lightMode ? 'var(--dark-color)' : 'var(--light-color)');
})
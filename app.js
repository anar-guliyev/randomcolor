const numberGenerator = () => { return (Math.random() * 1000000).toFixed() };



const windowClickHandler = event => {
    const circle = document.createElement('div');
    let color = `#${numberGenerator()}`
    let size = numberGenerator() / 10000;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.top = `${parseInt(event.offsetY) - size/2}px`;
    circle.style.left = `${parseInt(event.offsetX) - size/2}px`;
    circle.style.backgroundColor = color;
    document.body.append(circle);
}


window.addEventListener('click', windowClickHandler);
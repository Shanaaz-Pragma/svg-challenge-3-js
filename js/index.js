const nameSpace = "http://www.w3.org/2000/svg";

function createElement(type, options) {
    const elem = document.createElementNS(nameSpace, type);
    const attributes = Object.keys(options);

    for(const attribute of attributes) {
        elem.setAttribute(attribute, options[attribute]);
    }

    return elem;

}

const svg = createElement("svg", {width: 1000, height: 500})
svg.appendChild(createElement("rect", {x: 10, y: 10, width: 100, height: 100}));
svg.appendChild(createElement("circle", {cx: 300, cy: 50, r: 45}));
svg.appendChild(createElement("line", {x1: 500, y1: 50, x2: 800, y2: 50}));
svg.appendChild(createElement("polyline", {points: '10,300 100,300 10,400 100,400'}));
svg.appendChild(createElement("rect", {x: 250, y: 300, rx: 10, ry: 10, width: 100, height: 100}));
svg.appendChild(createElement("polygon", {points: '500,200 620,200 650,100 680,200 800,200 700,280 750,400 650,320 550,400 600,280'}));
document.body.prepend(svg);

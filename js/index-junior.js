function draw() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svgNS = svg.namespaceURI;
    const rect = document.createElementNS(svgNS,'rect');
    const circle = document.createElementNS(svgNS,'circle');
    const line = document.createElementNS(svgNS,'line');
    const polyline = document.createElementNS(svgNS,'polyline');
    const roundedRect = document.createElementNS(svgNS,'rect');
    const polygon = document.createElementNS(svgNS,'polygon');

    svg.setAttribute('width','1000');
    svg.setAttribute('height','500');

    rect.setAttribute('x','10');
    rect.setAttribute('y','10');
    rect.setAttribute('width','100');
    rect.setAttribute('height','100');
    rect.setAttribute('fill','purple');

    circle.setAttribute('cx','300');
    circle.setAttribute('cy','50');
    circle.setAttribute('r','45');
    circle.setAttribute('stroke','pink');
    circle.setAttribute('stroke-width','4');
    circle.setAttribute('fill','purple');

    line.setAttribute('x1','500');
    line.setAttribute('y1','50');
    line.setAttribute('x2','800');
    line.setAttribute('y2','50');
    line.setAttribute('stroke', 'pink');
    line.setAttribute('stroke-width','10');

    polyline.setAttribute('points','10,300 100,300 10,400 100,400');
    polyline.setAttribute('stroke', 'purple');
    polyline.setAttribute('stroke-width','10');
    polyline.setAttribute('fill','none');

    roundedRect.setAttribute('x','250');
    roundedRect.setAttribute('y','300');
    roundedRect.setAttribute('rx','10');
    roundedRect.setAttribute('ry','10');
    roundedRect.setAttribute('width','100');
    roundedRect.setAttribute('height','100');
    roundedRect.setAttribute('fill','pink');

    polygon.setAttribute('points','500,200 620,200 650,100 680,200 800,200 700,280 750,400 650,320 550,400 600,280');
    polygon.setAttribute('stroke', 'purple');
    polygon.setAttribute('stroke-width','5');
    polygon.setAttribute('fill','none');

    svg.appendChild(rect);
    svg.appendChild(circle);
    svg.appendChild(line);
    svg.appendChild(polyline);
    svg.appendChild(roundedRect);
    svg.appendChild(polygon);
    document.body.prepend(svg);
}

draw();
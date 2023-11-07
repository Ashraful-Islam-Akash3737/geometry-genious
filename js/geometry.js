function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const input = parseFloat(inputValueText);
    return input;

}
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function addToCalculationEntry(documentId, areaType , area){
    const calculationEntry = document.getElementById(documentId);
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('style');
    console.log(p);
    p.innerHTML = `
    ${count + 1}. ${areaType} ${area} cm<sup>2</sup>
    `;
    calculationEntry.appendChild(p);
}

// Triangle
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert("please, provide me a number");
        return;
    }
    const area = 0.5 * base * height;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('triangle-area', areaToDecimal);

    addToCalculationEntry("calculation-entry", "Triangle" , areaToDecimal);
}

// Rectangle
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert("please, provide me a number");
        return;
    }
    const area = width * length;
    setElementInnerText('rectangle-area',area);
    addToCalculationEntry("calculation-entry", "Rectangle" , area);
}

// Parallelogram
function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    if(isNaN(base) || isNaN(height)){
        alert("please, provide me a number");
        return;
    }
    const area = base * height;
    setElementInnerText("parallelogram-area", area);
    addToCalculationEntry("calculation-entry", "Parallelogram" , area);
}

// Ellipse
function calculateEllipseArea(){
    const majorRadious = getInputValue('ellipse-major-radious');
    const minorRadious = getInputValue('ellipse-minor-radious');
    if(isNaN(majorRadious) || isNaN(minorRadious)){
        alert("please, provide me a number");
        return;
    }
    const area = 3.14 * majorRadious * minorRadious;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area", areaToDecimal);
    addToCalculationEntry("calculation-entry", "Ellipse" , areaToDecimal);
}

// Rhombus
function calculateRhombusArea(){
    const majorHand = getInputValue('rhombus-major-hand');
    const minorHand = getInputValue('rhombus-minor-hand');
    if(isNaN(majorHand) || isNaN(minorHand)){
        alert("please, provide me a number");
        return;
    }
    const area = 0.5 * majorHand * minorHand;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText("rhombus-area", areaToDecimal);
    addToCalculationEntry("calculation-entry", "Rhombus" , areaToDecimal);
}

// Pentagon
function calculatePentagonArea(){
    const majorHand = getInputValue('pentagon-major-hand');
    const minorHand = getInputValue('pentagon-minor-hand');
    if(isNaN(majorHand) || isNaN(minorHand)){
        alert("please, provide me a number");
        return;
    }
    const area = 0.5 * majorHand * minorHand;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText("pentagon-area", areaToDecimal);
    addToCalculationEntry("calculation-entry", "Pentagon" , areaToDecimal);
}

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


function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightValueFeild = heightField.value;
    const height = parseFloat(heightValueFeild);
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    // console.log(areaSpan.innerText);
}
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');

    const length = getInputValue('rectangle-length');

    const area = width * length;
    setElementInnerText('rectangle-area',area);
}

function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    const area = base * height;
    setElementInnerText("parallelogram-area", area);
    
}

function calculateEllipseArea(){
    const majorRadious = getInputValue('ellipse-major-radious');
    const minorRadious = getInputValue('ellipse-minor-radious');
    const area = 3.14 * majorRadious * minorRadious;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area", areaToDecimal);
}


function calculateRhombusArea(){
    const majorHand = getInputValue('rhombus-major-hand');
    const minorHand = getInputValue('rhombus-minor-hand');
    const area = 0.5 * majorHand * minorHand;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText("rhombus-area", areaToDecimal);
}


function calculatePentagonArea(){
    const majorHand = getInputValue('pentagon-major-hand');
    const minorHand = getInputValue('pentagon-minor-hand');
    const area = 0.5 * majorHand * minorHand;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText("pentagon-area", areaToDecimal);
}

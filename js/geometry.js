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
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    const area = width * length;
    // console.log(area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    // console.log(areaSpan.innerText);
}
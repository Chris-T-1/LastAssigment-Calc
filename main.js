function calculateTriangle() {
    const base = +document.getElementById('base').value;
    const height = +document.getElementById('height').value;

    const area = (base > 0 && height > 0) ? (base * height) / 2 : "Invalid input";
    document.getElementById('result').textContent = `Area: ${area}`;
}

function calculateSquare() {
    const base = +document.getElementById('base').value;
    const height = +document.getElementById('height').value;

    const area = (base > 0 && height > 0) ? (base * height) : "Invalid input";
    document.getElementById('result').textContent = `Area: ${area}`;
}

function calculateCircle() {
    const radius = +document.getElementById('radius').value;
    const diameter = +document.getElementById('diameter').value;

    // Om radie är angiven, använd den. Annars beräkna radien från diametern.
    const r = radius > 0 ? radius : diameter > 0 ? diameter / 2 : null;

    if (r) {
        const area = Math.PI * r * r;
        document.getElementById('result').textContent = `Area: ${area.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid radius or diameter.";
    }
}

function calculateVoltage() {
    const resistance = +document.getElementById('resistance').value;
    const current = +document.getElementById('current').value;

    const voltage = (resistance > 0 && current > 0) ? resistance * current : "Invalid input";
    document.getElementById('result').textContent = `Voltage: ${voltage} V`;
}

function calculateResistance() {
    const voltage = +document.getElementById('voltage').value;
    const current = +document.getElementById('current').value;

    const resistance = (voltage > 0 && current > 0) ? voltage / current : "Invalid input";
    document.getElementById('result').textContent = `Resistance: ${resistance} Ω`;
}

function calculateCurrent() {
    const voltage = +document.getElementById('voltage').value;
    const resistance = +document.getElementById('resistance').value;

    const current = (voltage > 0 && resistance > 0) ? voltage / resistance : "Invalid input";
    document.getElementById('result').textContent = `Current: ${current} A`;
}


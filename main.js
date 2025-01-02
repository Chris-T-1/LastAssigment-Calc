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

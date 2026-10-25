
function getNumbers() {
    const text = document.getElementById("numbers").value;
    const values = text.split(",").map(x => Number(x.trim()));

    if (!text.trim() || values.some(x => !Number.isFinite(x))) {
        alert("Please enter valid numbers separated by commas.");
        return null;
    }

    if (values.length > 20) {
        alert("Please enter 20 numbers or fewer.");
        return null;
    }

    return values;
}

function showBars(values) {
    const area = document.getElementById("bars");
    area.innerHTML = "";

    const max = Math.max(...values.map(x => Math.abs(x)), 1);

    values.forEach(value => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height =
            Math.max(25, Math.abs(value) / max * 240) + "px";
        bar.textContent = value;
        area.appendChild(bar);
    });
}

function generateBars() {
    const values = getNumbers();
    if (values !== null) showBars(values);
}

function bubbleSort() {
    const values = getNumbers();
    if (values === null) return;

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                [values[j], values[j + 1]] =
                    [values[j + 1], values[j]];
            }
        }
    }

    showBars(values);
    document.getElementById("message").textContent =
        "Bubble Sort completed!";
}

function selectionSort() {
    const values = getNumbers();
    if (values === null) return;

    for (let i = 0; i < values.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < values.length; j++) {
            if (values[j] < values[min]) min = j;
        }

        [values[i], values[min]] = [values[min], values[i]];
    }

    showBars(values);
    document.getElementById("message").textContent =
        "Selection Sort completed!";
}

generateBars();

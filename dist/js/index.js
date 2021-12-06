window.addEventListener('DOMContentLoaded', () => {
    let range = document.getElementById('range');
    let output = document.getElementById('change');
    let calcValue = document.getElementById('calcValue');
    output.textContent = range.value;
    range.oninput = function() {
        output.textContent = this.value;
        calcValue.value = this.value;
    }
    output.textContent.onchange = function() {
        range.value = this.textContent
    }
    calcValue.addEventListener('input', function() {
        output.textContent = calcValue.value;
        range.value = calcValue.value;
    })
})
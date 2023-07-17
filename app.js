const heightValue = document.getElementById('height');
const weightValue = document.getElementById('weight');

const clearButton = document.querySelector('.clear-btn');
const calculateButton = document.querySelector('.calculate-btn');

const resultContainer = document.querySelector('.result-container');
const bmiDisplay = document.querySelector('.bmi-display');


clearButton.addEventListener('click', () => {
    heightValue.value = '';
    weightValue.value = '';

    resultContainer.classList.remove('show-result');
});


calculateButton.addEventListener('click', () => {
    let height = heightValue.value;
    let weight = weightValue.value;

    const bmi = weight / ((height/100)*(height/100));
    
    bmiDisplay.textContent = bmi.toString();
    resultContainer.classList.add('show-result');
});

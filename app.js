const heightValue = document.getElementById('height');
const weightValue = document.getElementById('weight');

const clearButton = document.querySelector('.clear-btn');
const calculateButton = document.querySelector('.calculate-btn');

const resultContainer = document.querySelector('.result-container');
const bmiDisplay = document.querySelector('.bmi-display');
const bmiCategory = document.querySelector('.bmi-category');

const bmiCategories = ['Underweight', 'Normal', 'Overweight', 
'Obesity Class-I', 'Obesity Class-II', 'Obesity Class-III'];

const bmiColors = ['#4e70f6', '#1bcd41', '#c1db2c', '#e4a839', '#e14432', '#b325d3']


function getCategoryIndex (bmiVal) {
    if (bmiVal < 18.5)
        return 0;
    else if (bmiVal <= 24.9)
        return 1;
    else if (bmiVal <= 29.9)
        return 2;
    else if (bmiVal <= 34.9)
        return 3;
    else if (bmiVal <= 39.9)
        return 4;
    else
        return 5;
}

function getBMI(height, weight) {
    let bmi = weight / ((height/100)*(height/100));
    bmi = Math.round(bmi * 100) / 100
    return bmi;
}

function checkInputs(height, weight) {
    if (height === '' || weight === '') {
        alert("Provide Values for Height or Weight!");
        return false;
    }

    else if (height <= 0 || weight <= 0) {
        alert("Negative Values not allowed!");
        return false;
    }

    return true;
}


clearButton.addEventListener('click', () => {
    heightValue.value = '';
    weightValue.value = '';

    bmiDisplay.textContent = '';
    bmiCategory.textContent = '';

    resultContainer.classList.remove('show-result');
});

calculateButton.addEventListener('click', () => {
    let height = heightValue.value;
    let weight = weightValue.value;

    if (!checkInputs(height, weight)) {
        return;
    }

    const bmiVal = getBMI(height, weight);
    
    bmiDisplay.textContent = "BMI: " + bmiVal;
    bmiCategory.textContent = bmiCategories[getCategoryIndex(bmiVal)];
    bmiCategory.style.color = bmiColors[getCategoryIndex(bmiVal)];

    resultContainer.classList.add('show-result');
});



const userWeight = document.querySelector('.num1');
const userHeight = document.querySelector('.num2');
const calculateButton = document.querySelector('.calculateButton');
const result = document.querySelector('.result');



const calculateBMI = () => {
    const weight = userWeight.value;
    const height = userHeight.value;
    const bodyMassIndex = weight / Math.pow(height, 2);
    const bodyMassIndexRounded = Math.round(bodyMassIndex).toFixed(2);
    result.textContent = "Индекс массы тела (ИМТ): " + bodyMassIndexRounded;
};

calculateButton.addEventListener('click', calculateBMI);

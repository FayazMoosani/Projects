class BMICalculator {
    weight;
    height;
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    calculateBMI() {
        return this.weight / (this.height ** 2);
    }
    categorizeBMI(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        }
        else if (bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        }
        else {
            return "Obesity";
        }
    }
}
// Example usage:
let weight = 70; // weight in kg
let height = 1.75; // height in meters
let bmiCalculator = new BMICalculator(weight, height);
let bmi = bmiCalculator.calculateBMI();
let category = bmiCalculator.categorizeBMI(bmi);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);
console.log(`Category: ${category}`);
export {};

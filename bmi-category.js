function getBMICategory(bmi) {
    if (isNaN(bmi)) {
        return NaN;
    }
    else if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        return "Healthy weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
module.exports = getBMICategory;
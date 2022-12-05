function calculateWaistToHipRatio(waistInCM, hipInCM) {
    return waistInCM / hipInCM;
}

function getWaistToHipCategory(gender, ratio) {
    if ("Male" == gender) {
        if (ratio < 0.9) {
            return "normal weight";
        }
        else if (ratio >= 0.9 && ratio < 1) {
            return "over weight";
        }
        else {
            return "obese";
        }
    } else {
        if (ratio < 0.8) {
            return "normal weight";
        }
        else if (ratio >= 0.8 && ratio < 0.85) {
            return "over weight";
        }
        else {
            return "obese";
        }
    }
}

module.exports = {
    calculateWaistToHipRatio: calculateWaistToHipRatio,
    getWaistToHipCategory: getWaistToHipCategory
};
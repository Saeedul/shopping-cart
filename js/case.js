/*
1. add event listener to the case button
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field

internal
*/

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateCaseNumber(true)
})

document.getElementById('button-case-minus').addEventListener('click', function () {
    updateCaseNumber(false)
})
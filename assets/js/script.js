function colorRow(rowNum){
    let currentMoment = moment();
    let currentHour = currentMoment.hour();
    var className = "past";
    if (currentHour == rowNum) {
        className = "present"
    } else if (currentHour < rowNum) {
        className = "future"
    }
    let inputField = $("#input-" + rowNum);
    inputField.addClass(className);
    let inputBackground = $("#input-background-" + rowNum);
    inputBackground.addClass(className);
}

function handleRow(rowNum){
    let inputField = $("#input-" + rowNum);
    let saveButton = $("#save-button-" + rowNum);
    saveButton.click(function() {
        localStorage.setItem("row-contents-" + rowNum, inputField.val());
    });
    inputField.val(localStorage.getItem("row-contents-" + rowNum));
}

for (var i = 9; i <= 17; i++) {
    colorRow(i);
    handleRow(i);
}

$("#currentDay").text(moment().format("dddd, MMMM Do"));

function colorRow(rowNum){
    let currentMoment = moment();
    let currentHour = currentMoment.hour();
    var className = "past-row";
    if (currentHour == rowNum) {
        className = "current-row"
    } else if (currentHour < rowNum) {
        className = "future-row"
    }
    let inputField = $("#input-" + rowNum);
    inputField.addClass(className);
    let inputBackground = $("#input-background-" + rowNum);
    inputBackground.addClass(className);
}

for (var i = 9; i <= 17; i++) {
    colorRow(i);
}

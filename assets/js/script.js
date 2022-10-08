function colorRow(rowNum){
    let inputField = $("#input-" + rowNum);
    inputField.addClass("current-row");
    let inputBackground = $("#input-background-" + rowNum);
    inputBackground.addClass("current-row");
}

for (var i = 9; i <= 17; i++) {
    colorRow(i);
}

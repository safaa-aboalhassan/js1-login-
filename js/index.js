var yearSelector = document.getElementById('Year');
var monthSelector = document.getElementById('Month');
var daySelector = document.getElementById('Days');
var  optionYear = '';
    for(var y=1900; y<=2024; y++) {
        optionYear += `<option value="${y}">${y}</option>`
}

yearSelector . innerHTML = optionYear;


var  optionMonth  = '';
    for(var m=1; m<=12; m++) {
        optionMonth += `<option value="${m}">${m}</option>`
}

monthSelector . innerHTML = optionMonth;


var  optionDay = '';
    for(var d=1; d<=31; d++) {
        optionDay += `<option value="${d}">${d}</option>`
}

daySelector . innerHTML = optionDay;

// Task №4
function search() {
    var  a, i, txtValue;
    let text = document.getElementById("searchText");
    let filter = text.value.toUpperCase();
    let citiesList = document.getElementById("towns");
    let li = citiesList.getElementsByTagName("li");

    var count = 0;

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a.style.fontWeight = "bold";
            a.style.textDecoration = "underline";
            count++;
        }
        else {
            a.style.fontWeight = "normal";
            a.style.textDecoration = "none";
        }
    }

    document.getElementById("result").innerHTML = count + " matches found";
}

let dt = new Date();


function renderDate() {

    document.querySelector("#date-str").innerHTML = dt.toDateString();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

    let currentMonth = months[dt.getMonth()];
    let currentYear = dt.getFullYear();
    document.querySelector("#month").innerHTML = `${currentMonth} ${currentYear}`;

    // find the last date of current month
    let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
    endDate = endDate.getDate();
    // console.log(endDate);

    // find the day name of starting month date
    dt.setDate(1);
    let day = dt.getDay();

    // find the previous months date 
    let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0);
    prevDate = prevDate.getDate();
    // console.log(prevDate);

    // find the today date
    let today = new Date();
    // console.log(today);

    let cells = "";

    for (x = day; x > 0; x--) {
        cells += `<div class="prev-date">${prevDate - x + 1}</div>`;
    }

    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() == today.getFullYear()) {
            cells += `<div class="today">${i}</div>`;
            document.querySelector(".reset").style.display = "none";

        }
        else {
            cells += `<div>${i}</div>`;
        }
    }

    document.querySelector(".days").innerHTML = cells;

}
renderDate();
document.querySelector(".reset").addEventListener("click", () => {
    // dt = new Date(dt.getFullYear(),dt.getMonth(),0);
    // console.log(dt);
    location.reload();
    // renderDate();
})

document.querySelector(".prev").addEventListener("click", () => {
    dt.setMonth(dt.getMonth() - 1);
    document.querySelector(".reset").style.display = "flex";
    document.querySelector("#date-str").style.display = "none"
    renderDate();
})
document.querySelector(".next").addEventListener("click", () => {
    dt.setMonth(dt.getMonth() + 1);
    document.querySelector(".reset").style.display = "flex";
    document.querySelector("#date-str").style.display = "none"
    renderDate();
})




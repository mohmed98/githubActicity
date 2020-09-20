const today = new Date();
const currentDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
);
let firstDay = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
);


while (!comapreDates(firstDay, currentDay)) {
    firstDay.setDate(firstDay.getDate() + 1)
    console.log(`${firstDay.getFullYear()}/${firstDay.getMonth()}/${firstDay.getDate()}`)
}
function comapreDates(firstDay, lastDay) {
    // console.log(firstDay.getFullYear() + firstDay.getMonth() + firstDay.getDate());
    // console.log(lastDay.getFullYear() + lastDay.getMonth() + lastDay.getDate());



    if (
        firstDay.getFullYear() == lastDay.getFullYear()
        &&
        firstDay.getMonth() == lastDay.getMonth()
        &&
        firstDay.getDate() == lastDay.getDate()
    ) {
        return true;
    } else {
        return false;
    }
}
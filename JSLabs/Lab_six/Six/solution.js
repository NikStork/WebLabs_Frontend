
function attachEventsListeners() {
    const daysBtn = document.querySelector('#daysBtn');
    const hoursBtn = document.querySelector('#hoursBtn');
    const minutesBtn = document.querySelector('#minutesBtn');
    const secondsBtn = document.querySelector('#secondsBtn');

    daysBtn.addEventListener('click', () => convertByIn('days'));
    hoursBtn.addEventListener('click', () => convertByIn('hours'));
    minutesBtn.addEventListener('click', () => convertByIn('minutes'));
    secondsBtn.addEventListener('click', () => convertByIn('seconds'));
}

function convertByIn(inp) {
    const input = parseInt(document.querySelector(`#${inp}`).value);

    const days = input;
    const hours = input * 24;
    const minutes = input * 1440;
    const seconds = input * 86400;

    document.querySelector('#days').value = days;
    document.querySelector('#hours').value = hours;
    document.querySelector('#minutes').value = minutes;
    document.querySelector('#seconds').value = seconds;
}
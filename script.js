let rate = 0;
let selected = false;
let btns = document.getElementsByClassName('btn');
let rateScore = document.getElementById('ratescore');
Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e => {
        rate = e.target.value;
        selected = true;
        rateScore.innerHTML = `You selected ${rate} out of 5`;
    })
});
function getRate() {
    let container = document.getElementsByClassName('container')[0];
    let containerty = document.getElementsByClassName('container-ty')[0];


    if (selected) {
        container.style.display = 'none';
        containerty.style.display = 'flex';
    } else if (selected === false) {
        alert('you must select a score')
    }
}
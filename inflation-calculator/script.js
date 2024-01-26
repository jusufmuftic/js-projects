function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    let worth = money + (money * (inflationRate / 100));

    for(let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Today's ${money}$ is worth as same as ${worth}$ in ${years} years.`;

    document.querySelector('.container').appendChild(newElement);

}
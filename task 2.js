let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 },
];
function interestCalculator(data) {
    let interestData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3) {
            data[i].rate = 3;
        }
        if (data[i].principal >= 2500 && data[i].time >= 3) {
            data[i].rate = 4;
        }
        if (data[i].principal < 2500 || data[i].time <= 1) {
            data[i].rate = 2;
        }
        if (!data[i].rate) {
            data[i].rate = 1;
        }
        data[i].interest = (data[i].principal * data[i].time * data[i].rate) / 100;
        interestData.push(data[i]);
    }
    console.log(interestData);
    return interestData;
}
interestCalculator(data);
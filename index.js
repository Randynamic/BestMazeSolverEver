let calls = 0;
let inter;
let shifter = 0;
let shifter2 = 200;
let begin = true;

function createRandomInt() {
    return Math.floor(Math.random() * 10);
}

function createLongStringOfNumbers() {
    calls++;

    if (calls > 500) {

        clearInterval(inter);
        console.log( ' ');
        console.log( ' ');
        console.log( ' ');
        console.log( ' ');
        console.log('____________________________________________________________________________________________________________________');
        console.log('____________________________________________________________________________________________________________________');
        console.log('____________________________________________________________________________________________________________________');
        console.log('____________________________________________________________________________________________________________________');
        console.log('                                               SUCCESS')
        console.log('____________________________________________________________________________________________________________________');
        console.log('____________________________________________________________________________________________________________________');
        console.log('____________________________________________________________________________________________________________________');

        return;
    }
    let string = '';
    for (let i = 0; i < 200; i++) {
        string += createRandomInt();
        if(shifter === i) {
            string += ' + '
        }

        if(i === 100 && shifter !== 100) {

            string += ' - '
        }

        if(shifter2 === i) {
            string += ' + '
        }
        if(i%2) {
            string += '_'
        }
    }
    if(shifter === 200) {
        shifter = 0
    }
    if(shifter2 === 0) {
        shifter2 = 200
    }

    shifter++;
    shifter2--;

    console.log(string);
    return string;
}

function startInterval() {
    inter = setInterval(createLongStringOfNumbers, 100);
}

console.log('loading image.....')
setTimeout(startInterval,3000);


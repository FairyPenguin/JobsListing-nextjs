
export default function printTo100() {


    let value = Number(0)

    // from 0 to 12 ==> ++1

    let valueOf_0_125 = 0.125
    let valueOf_1 = value += 1
    let valueOf_2 = value += 2
    let valueOf_4 = value += 4
    let valueOf_8 = value += 8

    for (let i = 0.125; i <= 1; i += 0.125) {
        console.log(`--var${i.toFixed(3)}: ${i.toFixed(3)}rem /* px */`);
    }

    for (let i = 0; i <= 12; i += 0.5) {

        // console.log(i);
        if (i <= 3.5) {

            value += 0.125;
            console.log(`
            --var${i + 0.5}: ${value.toFixed(3)}rem /*  px */
            `)
        } else if (i === 12) {
            console.log(`--var${i}: rem /*  px */`)
        } else {
            console.log(`--var${i}: rem /*  px */`)

        }
    }

    // from 14 to 20 ==> ++2


    for (let i = 14; i <= 20; i += 2) {

        console.log(`--var${i}: rem /*  px */`)

    }

    // from 24 to 64 ==> ++4 


    for (let i = 24; i <= 64; i += 4) {
        console.log(`--var${i}: ${0}rem /*  px */`)


    }


    // from 72 to 69 ==> ++8


    for (let i = 64; i < 100; i += 8) {



        // if (i === 96) {
        //     console.log(`--var${i}: ${valueOf16 += 2}rem /*  px */`)

        // }

        console.log(`--var${i}: ${0 + 2}rem /*  px */`)

    }



}
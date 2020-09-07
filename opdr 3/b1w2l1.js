function simpleMath(tafel){
    
    document.write(`Tafel van ${tafel}<br>`);
    for (let step = 1; step <= 10; step++) {
        // Wordt 10 keer uitgevoerd, met waarden van 1 tot en met 10.
         document.write(`${step}x${tafel} = ${step*tafel}<br>`);
    }
    document.write(`<br>`);
}

function advancedMath(tafel){
    document.write(`Sommen reeks met ${tafel}<br>`)
        var sum = 0;
        sum = tafel;
    document.write(`${sum}+6 = ${sum+6}<br>`);
    sum = tafel+6;
    document.write(`${sum}x10 = ${sum*10}<br>`)
    sum = sum*10;
    document.write(`${sum}/5 = ${sum/5}<br>`)
    sum = sum/5;
    document.write(`${sum}-12 = ${sum-12}<br>`)
    sum = sum-12;
    document.write(`<br>`);
}

simpleMath(6);
simpleMath(12);
advancedMath(12)


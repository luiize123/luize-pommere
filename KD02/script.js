function balsošanasKontrole() {
    let vards = "Jānis";
    let vecums = 20;       
    let irPilsonis = true;  

    console.log("Vārds: " + vards);
    console.log("Vecums: " + vecums);
    console.log("Pilsonība: " + irPilsonis);

    if (vecums >= 18 && irPilsonis) {
        console.log("Drīkst balsot.");
    } else if (vecums >= 18 && !irPilsonis) {
        console.log("Personai ir 18 gadi, bet viņa nav pilsonis.");
    } else if (vecums < 18 && irPilsonis) {
        console.log("Personai nav 18 gadi, bet viņa ir pilsonis.");
    } else {
        console.log("Personai nav 18 gadi un viņa nav pilsonis.");
    }
}

function izvaditAtzimi() {
    let atzime = parseInt(document.getElementById("atzime").value);

    if (atzime >= 90 && atzime <= 100) {
        console.log("Izcili");
    } else if (atzime >= 70 && atzime <= 89) {
        console.log("Labi");
    } else if (atzime >= 50 && atzime <= 69) {
        console.log("Vidēji");
    } else if (atzime >= 0 && atzime < 50) {
        console.log("Slikti");
    } else {
        console.log("Nepareiza atzīme.");
    }
}

function izvaditSarakstu() {
    let saraksts = [10, 20, 30, 40, 50]; 


    for (let i = 0; i < saraksts.length; i++) {
        console.log(saraksts[i]);
    }
}

function izvaditSarakstuApgriezti() {
    let saraksts = [10, 20, 30, 40, 50];
    for (let i = saraksts.length - 1; i >= 0; i--) {
        console.log(saraksts[i]);
    }
}

function veiktDarbibu() {
    let operand1 = parseFloat(document.getElementById("operand1").value);
    let operand2 = parseFloat(document.getElementById("operand2").value);
    let operator = document.getElementById("operator").value;

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById("rezultats").textContent = "Lūdzu ievadiet derīgus skaitļus.";
        return;
    }

    let rezultats;

    switch (operator) {
        case "+":
            rezultats = operand1 + operand2;
            break;
        case "-":
            rezultats = operand1 - operand2;
            break;
        case "*":
            rezultats = operand1 * operand2;
            break;
        case "/":
            if (operand2 === 0) {
                document.getElementById("rezultats").textContent = "Dalīšana ar 0 nav atļauta.";
                return;
            }
            rezultats = operand1 / operand2;
            break;
        default:
            document.getElementById("rezultats").textContent = "Nepareizs operators.";
            return;
    }


    document.getElementById("rezultats").textContent = "Rezultāts: " + rezultats;
}
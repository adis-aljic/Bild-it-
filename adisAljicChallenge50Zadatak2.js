/*2. Napisati
funkciju koja prima neki broj te provjerava da li je isti prosti broj.
Napisati test program koji poziva ovu metodu i ispisuje sve proste
brojeve u rasponu od 0 do 10.000. (VAŽNO: Zadatak nije ispisati prvih 10.000 prostih brojeva nego sve proste brojeve izmedju 0 i 10.000)*/

const primarniBrojeviDo10000 = () =>{
let brojevi = [];
for (let i = 1; i <= 10000; i++) {
brojevi.push(i);
}
let prostiBrojevi = [];

for (i = 1; i < brojevi.length; i++) {
    let faktoriBroja = [];
    for (j = i; j > 0; j--) {
        if (i % j === 0) {
            faktoriBroja.push(j);
        }
    }
    if (faktoriBroja.length <= 2) {
        prostiBrojevi.push(i);
    }
}
return console.log("Prosti brojevi do " + brojevi.length + " su: "+ prostiBrojevi.join(","))
}


primarniBrojeviDo10000();

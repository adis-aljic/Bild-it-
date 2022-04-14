/*3.  Palindrome
prime je prosti broj koji je također i palindrom. Na primjer, 131 je
palindrome prime, kao i brojevi 313 i 757. Napisati metodu koja ispisuje
prvih 100 palindrome prime brojeva, 10 brojeva po liniji.
*/

let prostiBroj = (broj) => {
    for (let i = 2; i < broj; i++) {
        if (broj % i == 0) return false
        else return true

    }
}

// console.log(prostiBroj(17))

let palindrom = (broj) => {
    let obrnutiBroj = 0;
    let remainder;

    let orginalniBroj = broj;

    while (broj > 0) {
        ostatak = broj % 10;
        broj = Math.trunc(broj / 10);
        obrnutiBroj = obrnutiBroj * 10 + ostatak;
    }
    if (orginalniBroj == obrnutiBroj)
        return true
}
// console.log(palindrom())

let prostiBrojPalindromi = (brojBrojevaZaIspis) => {
    let prostiBrojP = [];
    let brojac = 0;
    for (let i = 1; brojac < brojBrojevaZaIspis; i++) {

        if (palindrom(i) == true && prostiBroj(i) == true) {
            ++brojac;
            prostiBrojP.push(i);
        }
    }
    return console.log(prostiBrojP, prostiBrojP.length);


}
prostiBrojPalindromi(100)


// svaki jednocifren broj je i palinodrom pa samim tim svi primarni jednocifreni brojevi su palinodrom. Broj 1 nije primarni broj
// skontat za prvih 100 kako, neki brojac vjv, cita jedan broj
// pokusat sa ++br pa da e povecava stalno 
/* 4. Napisati funkciju koja vraća ukupan broj riječi u rečenici.

Primjer poziva funkcije: brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
Primjer ispisa programa: Unijeta rečenica se sastoji od 8 riječi. */

let ispisRijeciUStringu = (string) =>
{
 let brojRijeci=1;

for (let i = 0; i < string.length; i++) {

    if (string[i]==" ") brojRijeci++;


}

    return console.log("U stringu ",string," ima ukupno ", brojRijeci," rijeci.")
}
ispisRijeciUStringu("Ja mrzim primarne brojeve najvise na svijetu.")
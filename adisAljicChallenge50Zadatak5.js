/* 5. Napisati funkciju koja pronalazi broj pronavljanja određenog karaktera u stringu.
Primjer poziva funckije: brojacKaraktera("Dobrodosli", "o")
Primjer ispisa: Karakter o se ponavlja 3 puta u stringu "Dobrodosli". */

let brojacKaraktera = (string, karakter) => {
    let brojKaraktera = 0;

    for (let i = 0; i < string.length; i++) {

        if (string[i] == karakter) brojKaraktera++;
    }
    let string1 = "U stringu " + "'" + string + "'";
    let brojKaraktera1 = " karakter " + "'" + karakter + "'" + " se ponavlja " + brojKaraktera + " puta";
    
    return console.log("U stringu " + "'" + string + "' karakter "+ "'" +karakter + "' se ponavlja " + brojKaraktera + " puta." )

}
brojacKaraktera("oaoa aa ooa", "o")


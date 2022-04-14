/*
 1.
Napisati funkciju koja prima 2 argumenta, string i karakter koji treba
ukloniti iz datog stringa. Nakon poziva, funkcija treba da vrati novi
string koji predstavlja orginalni string sa izuzetkom prosljedjenog
karaktera.
Primjer poziva funkcije: ukloniKarakter("Dobrodosli", "o");
Primjer ispisa programa: Dbrdsli */

let ukloniKaraktere = (string, karakter) => {
    let string1 = [];
    let string2 = [];
    let orginalniString = string;
    for (let j = 0; j < string.length; j++) {
        string1.push(string[j]);

    }

    for (let i = 0; i < string1.length; i++) {

        if (string1[i] == karakter) string2 += string1.splice(i, 1);
    }
    let noviString = "";
    for (let k = 0; k < string1.length; k++) {
        const element = string1[k];
        noviString += element;

    }
    return console.log("Orginalni string ", "'", orginalniString, "'", "sa uklonjenim karakterom ", "'", karakter, "'", " glasi: ", noviString, ".")

}
ukloniKaraktere("pozdrav od adisa", "a")
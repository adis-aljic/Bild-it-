/* 
4.  Napisati funkciju koja
broji karaktere u nekom stringu te vraća korisniku isti kao i broj
suglasnika i samoglasnika u datom stringu.
Primjer poziva funkcije: stringPodaci("Dobrodosli");
Primjer ispisa: String "Dobrodosli" se sastoji od 10 karaktera od cega su 4 samoglasnici i 6 suglasnici.
*/
// ubaciti da broji znakove i ostalo i da razliku sta je broj sta je slovo razmak itd
//preraviti output

// let samoglasnici = ["a","e","i","o","u"];
let sastavStringa = (string) => {

    const samoglasnici = "aeiouAEIOU";
    let brojSamoglasnika = 0;
    let brojSuglasnika = 0
    let brojkaraktera = string.length;


    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < samoglasnici.length; j++) {
            if (string[i] == samoglasnici[j])
                brojSamoglasnika++;
            else brojSuglasnika = string.length - brojSamoglasnika;

        }
    }
    return  console.log("String " + "'" + string + "'" +  " se sastoji od " + brojkaraktera + " karaktera, od cega su: " + brojSamoglasnika+ " samoglasnika i "+
       brojSuglasnika + " suglasnika" + ".")

}
sastavStringa("Ja sam Adis Aljic")
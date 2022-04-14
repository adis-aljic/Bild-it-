/* 
2.
Twin prime brojevi su par prostih brojeva koji se razlikuju za 2. Na
primjer, brojevi 3 i 5 su twin primes, brojevi 5 i 7 i 11 i 13 su
također twin primes. Napisati funkciju koja ispisuje sve twin prime
brojeve manje od 10.000, 10 parova po liniji. (Ne prvi 10.000 twin prime
brojeva, sve twin prime brojeve u rasponu od 0 do 10.000) */

//  ucita sve clanove, ali ima duplih clanova i ima undefined vrijednosti 
// pokusat izbaciti ?  vidit sa t i f kao i 3z
const twinPrimeNumber = () => {
    
    let prostiBrojevi = [];
    let brojevi = [];
    let twinBroj = [];
    let matrica = [];

    for (let i = 1; i <= 10000; i++) {
        brojevi.push(i);
    }

    for (i = 1; i < brojevi.length; i++) {
        let faktoriBroja = [];
        
        for (j = i; j > 0; j--)  if (i % j === 0)  faktoriBroja.push(j);    
        if (faktoriBroja.length <= 2)  prostiBrojevi.push(i);
    }

    for (let i = 0; i < prostiBrojevi.length; i++) {
 if (prostiBrojevi[i]==prostiBrojevi[i+1]-2)
        {let element = prostiBrojevi.splice(i, 2);
        twinBroj.push(element);}
    }
    // console.table(twinBroj.length)

    for (let i = 0; i < twinBroj.length; i++) {  // problem je u popunjavanju matrice
        matrica[i] = [];
        for (let j = 0; j < 10; j++) //broj kolona
        // if(matrica.includes(matrica[i][j])==false) // pokusao izbaciti iste elemnte jer ih uporno ponavlja
        matrica[i][j] = twinBroj[j+i];   
    }

//     let finalnaMatrica = []; // pokusam i na ovaj nacin da izbacim iste elemente ali nisam uspio
// for (let i = 0; i < matrica.length; i++) {
//     for (let j = 0; j < matrica.length; j++) {
        
//         if (matrica[i] == matrica[j]) {
//             finalnaMatrica.push(matrica[i+j]);
//         }
//    }
// }
//     return console.table(finalnaMatrica);

// let arr = [];
// for (let i = 0; i < matrica.length; i++) {
// for (let j = 0; j < matrica.length; j++) {
//    if (matrica[i][j] == undefined)

    
//     arr = matrica.splice(i+j,2);  // pokusao izbaciti undefined
// }}
    return console.table(matrica); 
} 


// console.log(matrica)
twinPrimeNumber();

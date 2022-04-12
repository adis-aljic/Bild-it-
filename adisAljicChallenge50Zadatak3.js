/* 3.  Napisati funkciju koja generiše te ispisuje 100 nasumičnih brojeva, 10 brojeva
po liniji. Ispis programa treba da izgleda kao 10x10 matrica nasumičnih
brojeva. */


const matrica10x10 = () => {
    let niz = [];

    for (let i = 0; i < 10; i++) {
        niz[i] = [];
        for (let j = 0; j < 10; j++) {
            niz[i][j] = Math.trunc(Math.random() * 1000);
        }
    }
    return console.table(niz);
}

matrica10x10();


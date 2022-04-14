/* 5. Napisati funkciju koja prima kao argument godinu te vraća da li je ta godina prestupna ili ne.

Primjer poziva funkcije: isPrestupnaGodina(2000);
Primjer ispisa programa: Godina 2000 je prestupna godina. */

const prestupnaGodina = (godina) => {

     if ((godina%4==0)&&(godina%100!=0) || (godina%400==0))
    {
        return console.log(godina," godina je prestupna godina.")
    }
    else 
    return console.log(godina," godina nije prestupna godina.")
}
prestupnaGodina(2020)

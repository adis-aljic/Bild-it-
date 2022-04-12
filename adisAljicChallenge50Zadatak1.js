/* 1. Napisati funkciju koja prima tri broja kao parametre te ispisuje ta ista tri broja u rastućem redosljedu.
Primjer poziva funkcije: ispisiSortiraneBrojeve(17, 3, 42);
Primjer ispisa: Sortirani brojevi: 3, 17, 42. */

let sortiraniBrojevi = (broj1, broj2, broj3) => {
    if (broj1 < broj2 && broj1 < broj3 && broj2 < broj3)
        return console.log("Orginalni redoslijed brojeva je: ", broj1, ",", broj2, ",", broj3, ". Sortirani brojevi su: " + broj1, ", ", broj2, " , ", broj3, ".");
    if (broj1 < broj2 && broj1 < broj3 && broj2 > broj3)
        return console.log("Orginalni redoslijed brojeva je: ", broj1, ",", broj2 + ",", broj3, ". Sortirani brojevi su: " + broj1, ", ", broj3, " , ", broj2, ".");

    if (broj1 > broj2 && broj1 > broj3 && broj2 < broj3)
        return console.log("Orginalni redoslijed brojeva je: ", broj1 + ",", broj2, ",", broj3, ". Sortirani brojevi su: ", broj2, ", ", broj3, " , ", broj1, ".");
    if (broj1 > broj2 && broj1 < broj3 && broj2 < broj3)
        return console.log("Orginalni redoslijed brojeva je: ", broj1, ",", broj2, ",", broj3, ". Sortirani brojevi su: ", broj2, ", ", broj1, " , ", broj3, ".");

    if (broj1 < broj2 && broj1 > broj3 && broj2 > broj3)
        return console.log("Orginalni redoslijed brojeva je: ", broj1, ",", broj2, ",", broj3, ". Sortirani brojevi su: ", broj3, ", ", broj1, " , ", broj2, ".");
    if (broj1 > broj2 && broj1 > broj3 && broj2 > broj3)
        return console.log("Orginalni redoslijed brojeva je: ", broj1, ",", broj2, ",", broj3, ". Sortirani brojevi su: ", broj3, ", ", broj2, " , ", broj1, ".");

};
sortiraniBrojevi(17, 12, 4);
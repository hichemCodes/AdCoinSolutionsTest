<?php

function sum_array($no1, $no2) {
    //notre tableau
    $array = [10,20,30,40,50,60,70,80,90,100];

    //la somme initiale
    $sum = 0;

    //les deux entiers sont  posififs 
    if($no1 > 0 && $no2 > 0) {

        //le premier entier est inférieur au deuxième entier.
        if($no1 < $no2) {

            for($i = 0;$i < count($array); $i++) {
                // ici on ajoute $array[$i] à la somme si est seulement si il apartient à la plage donnée 
                if($array[$i] >= $no1 && $array[$i] <= $no2) {
                    $sum+= $array[$i];
                }
            }
            return $sum;
        //le premier entier est sup au deuxième entier
        } else {
            return 0;
        }
    // au moins l'un des deux entires et négatif
    } else {
        return -1;
    }
   
}

//tester la fonction 

echo "".sum_array(30, 70);

?>


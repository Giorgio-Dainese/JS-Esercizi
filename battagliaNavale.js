// battaglia navale

//FE html

//il comportamento in js

//ingredienti

//FE
//2 griglie campo da gioco formati da x righe e x colonne
//implementate con div o table
//dove visualizzare i colpi effettuati 
//visualizzo:
//  bianco -> nessun colpo
//  grigio -> acqua
//  rosso  -> colpito

//due campi testo che accettano solo interi < x in cui il giocatore inserisce le coordinate di giocata
//un bottone che chiama la funzione colpisci

//codice
//gli array di posizionamento li creiamo lato codice, senza interazione
//un array tridimensionale, due elementi vhe contengono un array bidimensionale di x righe e x colonne per il posizionamento delle navi
//navi posizionate, array int (0 -> nessuna nave, 1 -> nave posizionata)
let campi = [
[
    [
        []
    ]
]//player1 
,
[
    [
        []
    ]
]//player2
]

let naviColpite = [0,0]

//funzione colpisci
//ha in input il giocatore, la riga e la colonna da colpire
//colora il campo di gioco dell'avversario discriminando il colore
//se colpisce incrementa numero navi colpite
//se numero navi colpite == massimo segnala vittoria

function getParameters(stringa){
    let arrayParametri=[];
     for (let i = 1; i < stringa.length; i+= 2){
             arrayParametri.push(stringa[i])
     }
     //Ritorna solo i parametri
     return arrayParametri;

     //Ritorna stringa concatenata con parametri
     //return "(" +arrayParametri[0]+ "," +arrayParametri[1]+ "," +arrayParametri[2]+ ")"
}

console.log(getParameters("p1r1c2"))

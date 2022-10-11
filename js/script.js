
const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
let calcoloValido = true;
let output;

const numeroKmUtente = parseInt(prompt('Quanti km vuoi percorrere?'));
const prezzoBiglietto = prezzoKm * numeroKmUtente;


if(numeroKmUtente < 1 || isNaN(numeroKmUtente)){
  alert('Inserisci un numero superiore o uguale a 1');
  
  calcoloValido = false;
}

if(calcoloValido){
  const etaUtente = parseInt(prompt('Quanti anni hai?'));

  if(etaUtente >= 18 && etaUtente < 65){
    output = (Math.round(prezzoBiglietto * 100) / 100).toFixed(2); 
  
    document.getElementById('prezzo').innerHTML =`
      Il prezzo del biglietto non è soggetto a sconti, il costo totale è di: <br> 
      <span class="bg-info fw-bold">${output} €</span>
    `; 
  }

  if(etaUtente < 18){
    const scontoTotaleMinorenni = prezzoBiglietto * scontoMinorenni;
    const prezzoBigliettoScontatoMinorenni = prezzoBiglietto - scontoTotaleMinorenni;
    output = (Math.round(prezzoBigliettoScontatoMinorenni * 100) / 100).toFixed(2);
      
    document.getElementById('prezzo').innerHTML =`
      Il prezzo del biglietto è soggetto allo sconto minorenne del ${scontoMinorenni * 100}%, il costo totale è di: <br>
      <span class="bg-info fw-bold">${output} €</span>
    `;
  }

  if (etaUtente >= 65){
    const scontoTotaleOver = prezzoBiglietto * scontoOver;
    const prezzoBigliettoScontatoOver = prezzoBiglietto - scontoTotaleOver;
    
    output = (Math.round(prezzoBigliettoScontatoOver * 100) / 100).toFixed(2);
     
    document.getElementById('prezzo').innerHTML =`
      Il prezzo del biglietto è soggetto allo sconto over 65 del ${scontoOver * 100}%, il costo totale è di: <br>
      <span class="bg-info fw-bold">${output} €</span>
    `; 
  }

  if(etaUtente < 1 || etaUtente > 122 || isNaN(etaUtente) ){
    alert('Inserisci un età valita compresa tra 1 e 122');
    calcoloValido = false;
  }
}
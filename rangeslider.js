
  var obj = [
  {
    leasingPris: 'Leasing fra 4 508,-',
    sliderLabel:'0,-',
    vilkar: 'Forskuddsleie: kr 0,-Etabl. geb: kr 5 613,-Månedsleie: kr 4 508,-og totale leiekostnader: kr 167 901,- 3 års bindingstid, kjørelengde: 30 000 km. Inkl. frakt og levering Oslo. Lokale frakt-og leveringsomkostninger kan tilkomme. Priser er inkl. mva'
  },
  {
    leasingPris: 'Leasing fra 3 772,-',
    sliderLabel:'25.000,-',
    vilkar: 'Forskuddsleie: kr 25 000,-Etabl. geb: kr 5 613,-Månedsleie: kr 3 772,-og totale leiekostnader: kr 166 405,- 3 års bindingstid, kjørelengde: 30 000 km. Inkl. frakt og levering Oslo. Lokale frakt-og leveringsomkostninger kan tilkomme. Priser er inkl. mva'
  },
  {
    leasingPris: 'Leasing fra 3 037,-',
    sliderLabel:'50.000,-',
    vilkar: 'Forskuddsleie: kr 50 000,-Etabl. geb: kr 5 613,-Månedsleie: kr 3 037,-og totale leiekostnader: kr 164 945,- 3 års bindingstid, kjørelengde: 30 000 km. Inkl. frakt og levering Oslo. Lokale frakt-og leveringsomkostninger kan tilkomme. Priser er inkl. mva'
  },
  {
    leasingPris: 'Leasing fra 1 990,-',
    sliderLabel:'85 625,-',
    vilkar: 'Forskuddsleie: kr 85 625,-Etabl. geb: kr 5 613,-Månedsleie: kr 1 990,-og totale leiekostnader: kr 162 878,- 3 års bindingstid, kjørelengde: 30 000 km. Inkl. frakt og levering Oslo. Lokale frakt-og leveringsomkostninger kan tilkomme. Priser er inkl. mva'
  }

  ];

  function rangeSlider(){
    document.querySelector('.slider-container').innerHTML = `<input class="slider" type="range" min="1" max="${obj.length}" value="1">`;
  }
  rangeSlider();


  function rangeSteps(){
    let html = '';
    for(key in obj){
      html += `<div class="label">${obj[key].sliderLabel}</div>`;
    }
    document.querySelector('.label-container').innerHTML = html;
  }
  rangeSteps();


  document.querySelector('.slider').addEventListener('change', function(e){
    let i =  e.target.value - 1;
    document.querySelector('.leasingPrice').innerHTML = obj[i].leasingPris;
    document.querySelector('.leasingText').innerHTML = obj[i].vilkar;
  })

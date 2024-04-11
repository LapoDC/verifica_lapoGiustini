var map = L.map('map').setView([42.833333,12.833333], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
for (let i =0; i < comuni.length; i++) {
    
    let coordinate=comuni[i].coordinate;
    let nome =comuni[i].nome;
    let abitanti=comuni[i].abitanti;
    let latitudine=coordinate.lat;
    let longitudine=coordinate.lon;
    var marker = L.marker([latitudine,longitudine]).addTo(map);

    

}

function caricadati() {
    let nomi=[];
    let abitanti=[];
    for (let index = 0; index <comuni.length; index++) {
        let comune=comuni[index];
        nomi.push(comune.nome);
        abitanti.push(comune.abitanti);
    }
const ctx = document.getElementById('myChart');
      
        new Chart (ctx, {
          type: 'bar',
          data: {
            labels: nomi,
            datasets: [{
              label: 'abitanti',
              data: abitanti,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
    

   

        
    }
    caricadati();

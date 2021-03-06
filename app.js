function getTable() {

    const columnDefs = [
        { field: "county_code", maxWidth: 110, sortable: true },
        { field: "county", maxWidth: 120, sortable: true },
        { field: "total_case", maxWidth: 180, sortable: true },
        { field: "total_dead", maxWidth: 100, sortable: true },
        { field: "total_healed", maxWidth: 100, sortable: true }

    ];


    const gridOptions = {
        columnDefs: columnDefs,
        rowSelection: 'multiple'
    };

    // lookup the container we want the Grid to use
    const eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    // fetch the row data to use and one ready provide it to the Grid via the Grid API
    agGrid.simpleHttpRequest({ url: 'https://covid19.geo-spatial.org/api/dashboard/v2/getCasesByCounty' })
        .then(data => {
            console.log(data)
            gridOptions.api.setRowData(data.data.data);
        });
    var makeCol = gridOptions.columnApi.getColumn("county_code")
    makeCol.colDef.headerName = "Cod Judet";
    var makeCol = gridOptions.columnApi.getColumn("county")
    makeCol.colDef.headerName = "Judet";

    var makeCol = gridOptions.columnApi.getColumn("total_case")
    makeCol.colDef.headerName = "Numar total de cazuri";

    var makeCol = gridOptions.columnApi.getColumn("total_dead")
    makeCol.colDef.headerName = "Vindecati";

    var makeCol = gridOptions.columnApi.getColumn("total_healed")
    makeCol.colDef.headerName = "Decedati";
    gridOptions.api.refreshHeader();

}



getTable()


function getCases() {

    const api = `https://covid19.geo-spatial.org/api/dashboard/getDailyCases`;


    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let vectorCazuri = data.data.data
            let ultimaZi = vectorCazuri.length - 1 // iei automat ultima zi adica dimensiunea vectorului -1

            document.getElementById("demo7").innerHTML = "Data: " + `${vectorCazuri[ultimaZi].Data ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo").innerHTML = "Cazuri ??nregistrate: " + `${vectorCazuri[ultimaZi].Cazuri ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo8").innerHTML = "Cazuri active:  " + `${vectorCazuri[ultimaZi]['Cazuri active'] ?? 'Nu exista cazuri raportate astazi'}`;

            document.getElementById("demo6").innerHTML = "Num??r total cazuri: " + `${vectorCazuri[ultimaZi].Total ?? 'Nu exista cazuri raportate astazi'}`;
            
            document.getElementById("demo9").innerHTML = "Persoane decedate: " + `${vectorCazuri[ultimaZi].Morti ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo10").innerHTML = "Teste efectuate: " + `${vectorCazuri[ultimaZi]["Nr de teste pe zi"] ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo11").innerHTML = "Procent teste pozitive: " + vectorCazuri[ultimaZi]["Procentaj de teste pozitive"] + "%";
            document.getElementById("demo12").innerHTML = "Persoane vindecate: " + vectorCazuri[ultimaZi]["Vindecati pe zi"];
            document.getElementById("demo13").innerHTML = "Total persoane vindecate: " + `${vectorCazuri[ultimaZi].Vindecati ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo14").innerHTML = "Persoane carantinate: " + `${vectorCazuri[ultimaZi].Carantina ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo15").innerHTML = "Persoane izolate: " + `${vectorCazuri[ultimaZi].Izolare ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo16").innerHTML = "Persoane aflate in stare grava: " + `${vectorCazuri[ultimaZi]['Stare grava'] ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo17").innerHTML = "Persoane la terapie intensiv??: " + `${vectorCazuri[ultimaZi]['Terapie intensiva'] ?? 'Nu exista cazuri raportate astazi'}`;
            document.getElementById("demo18").innerHTML = "Total teste efectuate: " + `${vectorCazuri[ultimaZi]['Nr de teste'] ?? 'Nu exista cazuri raportate astazi'}`;
            
    
            document.getElementById("demo21").innerHTML = "Rata de crestere a cazurilor: " + vectorCazuri[ultimaZi]["Rata de crestere (caz activ)"] + "%";
        

            
        })

}

getCases()

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* var kidsLabel = [], femininLabel = [], menLabel=[], dataLabel =[]

async function  dataChart (){
await getData()
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataLabel,
        datasets: [{
            label: 'Numar de copii afecta??i',
            data: kidsLabel,
            backgroundColor:'blue',
            borderColor:'rgba(255, 99, 132, 1)',
        },
        {
            label: 'Numar de b??rba??i afecta??i',
            data: menLabel,
            backgroundColor:'pink',
            borderColor:'rgba(255, 99, 132, 1)',
        },
        {
            label: 'Numar de femei afectate',
            data: femininLabel,
            backgroundColor:'pink',
            borderColor:'rgba(255, 99, 132, 1)',
        }
    ]

    },


    options: {
       tooltips: {
           mode: 'index'
       }
    }
});
}

dataChart()
 */

/* //fetch Data from API

async function getData(){
const apiUrl = `https://covid19.geo-spatial.org/api/dashboard/getPercentageByGender`;


const response = await fetch(apiUrl)
const barChartData = await response.json()
console.log(barChartData)


const kids = barChartData.data.copii
const feminin = barChartData.data.feminin
const men = barChartData.data.masculin
const data = barChartData.data.timestamp
console.log(men,kids, feminin)

kidsLabel = kids
femininLabel = feminin
masculinLabel = men
dataLabel = data
} */


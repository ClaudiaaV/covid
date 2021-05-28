function getTable() {

    const columnDefs = [
        { field: "county_code", maxWidth: 110 },
        { field: "county", maxWidth: 120 },
        { field: "total_county", maxWidth: 180 },
        { field: "total_healed", maxWidth: 100 },
        { field: "total_dead", maxWidth: 100 }

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
    agGrid.simpleHttpRequest({ url: 'https://covid19.geo-spatial.org/api/dashboard/getCasesByCounty' })
        .then(data => {
            console.log(data)
            gridOptions.api.setRowData(data.data.data);
        });
    var makeCol = gridOptions.columnApi.getColumn("county_code")
    makeCol.colDef.headerName = "Cod Judet";
    var makeCol = gridOptions.columnApi.getColumn("county")
    makeCol.colDef.headerName = "Judet";

    var makeCol = gridOptions.columnApi.getColumn("total_county")
    makeCol.colDef.headerName = "Numar total de cazuri";

    var makeCol = gridOptions.columnApi.getColumn("total_healed")
    makeCol.colDef.headerName = "Vindecati";

    var makeCol = gridOptions.columnApi.getColumn("total_dead")
    makeCol.colDef.headerName = "Decedati";
    gridOptions.api.refreshHeader();

}


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

            document.getElementById("demo7").innerHTML = "Data: " + vectorCazuri[ultimaZi].Data;
            document.getElementById("demo").innerHTML = "Cazuri înregistrate: " + vectorCazuri[ultimaZi].Cazuri;
            document.getElementById("demo8").innerHTML = "Cazuri active:  " + vectorCazuri[ultimaZi]["Cazuri active"];

            document.getElementById("demo6").innerHTML = "Număr total cazuri: " + vectorCazuri[ultimaZi].Total;
            document.getElementById("demo4").innerHTML = "Pacienți la terapie intensivă: " + vectorCazuri[ultimaZi]["Terapie intensiva"];
            document.getElementById("demo9").innerHTML = "Număr persoane decedate: " + vectorCazuri[ultimaZi].Morti;
            document.getElementById("demo10").innerHTML = "Număr teste efectuate: " + vectorCazuri[ultimaZi]["Nr de teste pe zi"];
            document.getElementById("demo11").innerHTML = "Procent teste pozitive: " + vectorCazuri[ultimaZi]["Procentaj de teste pozitive"] + "%";
            document.getElementById("demo12").innerHTML = "Persoane vindecate: " + vectorCazuri[ultimaZi]["Vindecati pe zi"];
            document.getElementById("demo13").innerHTML = "Total persoane vindecate: " + vectorCazuri[ultimaZi].Vindecati;

        })

}

getCases()







/* var kidsLabel = [], femininLabel = [], menLabel=[], dataLabel =[]

async function  dataChart (){
await getData()
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataLabel,
        datasets: [{
            label: 'Numar de copii afectați',
            data: kidsLabel,
            backgroundColor:'blue',
            borderColor:'rgba(255, 99, 132, 1)',
        },
        {
            label: 'Numar de bărbați afectați',
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


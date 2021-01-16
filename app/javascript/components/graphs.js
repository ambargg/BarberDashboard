import Chart from 'chart.js';

const initPieChart = () => {
    var colors = ['#F7CC50','#78D8CD','#262E37','#B8C7CE','#FFFFFF'];
    Chart.defaults.global.defaultFontColor = 'white';
    /* donut charts */
    var donutOptions = {
      cutoutPercentage: 55, 
      legend: {position:'left', align: 'end', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
    };
  
    // donut 
    var chDonutData1 = {
        labels: ['Earnings', 'Tips', 'Remaining'],
        datasets: [
          {
            backgroundColor: colors.slice(0,3),
            borderWidth: 0,
            data: [74, 11, 40]
          }
        ]
    };
  
    var chDonut1 = document.getElementById("chDonut1");
    if (chDonut1) {
      new Chart(chDonut1, {
          type: 'pie',
          data: chDonutData1,
          options: donutOptions
      });
    }
    console.log("donut");
  }

  export { initPieChart };

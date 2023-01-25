# Lecture Code  

Today's lecture code will be based around building a simple `Charts.js` example application.  
It is recommended that you follow chartJs docs in front of the students [https://www.chartjs.org/docs/latest/getting-started/](https://www.chartjs.org/docs/latest/getting-started/)

Start by creating your `index.html`:  

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Charts Demo</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
  </head>
  <body>
    <canvas id="chart"></canvas>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```  

Then in `style.css`:

```css
canvas {
  width: 75%;
  height: 500px;
}
```  

Add a `app.js` file:

```JavaScript
'use strict';

const ctx = document.getElementById('chart').getContext('2d');

const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: labelColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
```  

Show students that they can also change the data using `.` notation:  

```javascript
myChart.data.datasets[0].data = [100,200,300,50,10];
```

Finally ask the students if they would like to try and change anything about our chart. Try to use the docs to find and demo their suggestions.

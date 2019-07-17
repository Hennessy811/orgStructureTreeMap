var chart = am4core.create("chartdiv", am4charts.PieChart);
am4core.useTheme(am4themes_animated);

const rootSlice = DATA;
const getSlice = (root, name) => {
  return root.filter(item => item.name === name)[0];
}
chart.data = rootSlice;
let prevSlice = [];
let prevLabel = [];

var label = chart.seriesContainer.createChild(am4core.Label);
label.text = 'Эквайринг.';
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.fontSize = 17;
label.events.on('hit', (e) => {
  // Go prev slice;
  if (prevSlice.length > 0 && prevLabel.length > 0) {
    chart.data = prevSlice[prevSlice.length - 1];
    label.text = prevLabel[prevSlice.length - 1];

    prevSlice.pop();
    prevLabel.pop();
  }
});

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "size";
pieSeries.dataFields.category = "name";
pieSeries.hiddenState.transitionDuration = 5000;
pieSeries.hiddenState.transitionEase = am4core.ease.elasticInOut;
chart.innerRadius = am4core.percent(40);
pieSeries.slices.template.fillOpacity = 1;

pieSeries.slices.template.events.on('hit', (e) => {
  if (chart.data.some(item => item.children)) {
    // Store last data
    prevSlice.push(chart.data);
    prevLabel.push(label.text);

    // Update data
    chart.data = getSlice(chart.data, e.target.dataItem.category).children;
    label.text = e.target.dataItem.category;
  }
});



document.addEventListener("DOMContentLoaded", function(event) {

  var dflt = {
    min: 0,
    max: 100,
    donut: true,
    gaugeWidthScale: 0.22,
    counter: true,
    hideInnerShadow: true,
    gaugeColor: "#252F36",
    levelColors: ["#fff"],
    valueFontColor: "#999"
  }

  var gg1 = new JustGage({
    id: 'gg1',
    value: 125,
    title: 'TITLE',
    defaults: dflt
  });

  var reading = new JustGage({
    id: 'reading',
    title: '',
    defaults: dflt    
  });

  var writing = new JustGage({
    id: 'writing',
    title: '',
    defaults: dflt
  });

  var speaking = new JustGage({
    id: 'speaking',
    title: '',
    defaults: dflt
  });

});
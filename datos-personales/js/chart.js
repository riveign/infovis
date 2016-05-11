nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
	  .showValues(true)
      .duration(250)
      ;

  d3.select('#chart svg')
      .datum(exampleData())
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});


function exampleData() {
 return  [ 
    {
      key: "Cumulative Return",
      values: [
        { 
          "label" : "2009" ,
          "value" : 15
        } , 
        { 
          "label" : "2010" , 
          "value" : 50
        } , 
        { 
          "label" : "2011" , 
          "value" : 64
        } , 
        { 
          "label" : "2012" , 
          "value" : 61
        } , 
        { 
          "label" : "2013" ,
          "value" : 56
        } , 
        { 
          "label" : "2014" , 
          "value" : 30
        } , 
        { 
          "label" : "2015" , 
          "value" : 25
        } , 
        { 
          "label" : "2016" , 
          "value" : 30
        }
      ]
    }
  ]

}


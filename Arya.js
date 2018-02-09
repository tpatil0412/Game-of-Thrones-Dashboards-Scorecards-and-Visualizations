
d3.queue()
.defer(d3.xml, "gotmap.svg")
.await(ready);

function ready(error, xml) {

  //Adding our svg file to HTML document
  var importedNode = document.importNode(xml.documentElement, true);
  
}
  function Arya_click(btn){
      var button = d3.select(btn);
	  
                
      if (button.text() == "Season-1") {
		var svg = d3.select("svg");
        var path = svg.select("path#Arya1").call(transition);
        
	  }

       else if (button.text() == "Season-2") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Arya2").call(transition);
  }
		else if (button.text() == "Season-3") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Arya3").call(transition);
  }
		else if (button.text() == "Season-4") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Arya4").call(transition);
  }
  else if (button.text() == "Season-5") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Arya5").call(transition);
  }
  else if (button.text() == "Season-6") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Arya6").call(transition);
  }

		var startPoint = pathStartPoint(path);
 
      
  var marker = svg.append("circle");
  marker.attr("r", 6)
    .attr("id", "marker")
    .attr("class","arya")
    .attr("fill", "blue")
    .attr("transform", "translate(" + startPoint + ")");

 var arya = svg.append("text")
 arya.attr("id", "arya")
	 .attr("class","arya")
    .attr("delay", 5000)
    .attr("dx", 12)
    .attr("dy", ".35em")
    .style("font-size", "12px")
    .style("font-family", "Verdana")
	.attr("fill", "white")
    .text("Arya Stark")
	.attr("transform", "translate(" + startPoint + ")");


  //Get path start point for placing marker
  function pathStartPoint(path) {
    var d = path.attr("d"),
    dsplitted = d.split(" ");
    return dsplitted[1];
  }

  function transition(path) {
    path.transition()
        .duration(10000)
       
        .attrTween("stroke-dasharray", tweenDash)
        .each("end", function() { d3.select(this)});// infinite loop
  }

  function tweenDash() {
    var l = path.node().getTotalLength();
    var i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray style attr
    return function(t) {
      var marker = d3.selectAll(".arya");
      var p = path.node().getPointAtLength(t * l);
      marker.attr("transform", "translate(" + p.x + "," + p.y + ")");//move marker
      return i(t);
    }
  }
  }

  
  
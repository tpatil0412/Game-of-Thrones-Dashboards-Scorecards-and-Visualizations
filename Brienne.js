
d3.queue()
.defer(d3.xml, "gotmap.svg")
.await(ready);

function ready(error, xml) {

  //Adding our svg file to HTML document
  var importedNode = document.importNode(xml.documentElement, true);
  
}
  function Brienne_click(btn){
      var button = d3.select(btn);
	  
                
      if (button.text() == "Season-1") {
		var svg = d3.select("svg");
        var path = svg.select("path#Brienne1").call(transition);
        
	  }

       else if (button.text() == "Season-2") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Brienne2").call(transition);
  }
		else if (button.text() == "Season-3") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Brienne3").call(transition);
  }
		else if (button.text() == "Season-4") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Brienne4").call(transition);
  }
  else if (button.text() == "Season-5") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Brienne5").call(transition);
  }
  else if (button.text() == "Season-6") {
		  var svg = d3.select("svg");
        var path = svg.select("path#Brienne6").call(transition);
  }

		var startPoint = pathStartPoint(path);
 
      
  var marker_Brienne = svg.append("circle");
  marker_Brienne.attr("r", 8)
    .attr("id", "marker_Brienne")
    .attr("class","Brienne")
    .attr("fill", "Black")
    .attr("transform", "translate(" + startPoint + ")");

 var Brienne = svg.append("text")
 Brienne.attr("id", "Brienne")
	 .attr("class","Brienne")
    //.attr("delay", 5000)
    .attr("dx", 12)
    .attr("dy", ".35em")
    .style("font-size", "12px")
    .style("font-family", "Verdana")
	.attr("fill", "white")
    .text("Brienne")
	.attr("transform", "translate(" + startPoint + ")");


  //Get path start point for placing marker_Brienne
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
      var marker_Brienne = d3.selectAll(".Brienne");
      var p = path.node().getPointAtLength(t * l);
      marker_Brienne.attr("transform", "translate(" + p.x + "," + p.y + ")");//move marker_Brienne
      return i(t);
    }
  }
  }

  
  
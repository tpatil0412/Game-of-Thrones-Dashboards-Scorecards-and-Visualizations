d3.queue()
.defer(d3.xml, "gotmap.svg")
.await(ready);

function ready(error, xml) {

  //Adding our svg file to HTML document
  var importedNode = document.importNode(xml.documentElement, true);
  
}

  function Catelyn_click(btn){
      var button = d3.select(btn);
      var svg = d3.select("svg");
      
      if (button.text() == "Season-1") {

        var path = svg.select("path#Catelyn1").call(transition);
		
	  }

       else if (button.text() == "Season-2") {
       
        var path = svg.select("path#Catelyn2").call(transition);
  }
		else if (button.text() == "Season-3") {

        var path = svg.select("path#Catelyn3").call(transition);
  }
       else if (button.text() == "Season-4") {

        var path = svg.select("path#Catelyn4").call(transition);
  }
		else if (button.text() == "Season-5") {

        var path = svg.select("path#Catelyn5").call(transition);
  }
                else{
                
        var path = svg.select("path#Catelyn6").call(transition);
 }

		var startPoint = pathStartPoint(path);
 
      
  var marker_Catelyn = svg.append("circle");
  marker_Catelyn.attr("r", 10)
    .attr("id", "marker_Catelyn")
    .attr("class","CharCatelyn")
    .attr("fill", "blue")
    //.attr("text", "Catelyn")
    .attr("transform", "translate(" + startPoint + ")");
	
  var marker2 = svg.append("text");
  marker2.attr("dx", 12)
    .attr("dy",".35em")
    .style("font-size", "12px")
    .style("font-family", "Verdana")
    .attr("id", "marker_Catelyn1")
    .attr("class","CharCatelyn")
    .attr("fill", "white")
    .text("Catelyn Stark")
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
      var marker_Catelyn = d3.selectAll(".CharCatelyn");
      var p = path.node().getPointAtLength(t * l);
      marker_Catelyn.attr("transform", "translate(" + p.x + "," + p.y + ")");//move marker
      return i(t);
    }
  }
}

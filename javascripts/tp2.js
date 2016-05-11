var data = [{"text": "I felt creative", "agree": 88, "neutral": 8, "disagree": 4}, {"text":"I felt an emotional reaction", "agree":66, "neutral": 22, "disagree": 12}, {"text":"I learned something new about the text", "agree":63, "neutral": 24, "disagree": 13}, {"text":"It confirmed my understanding of the text", "agree":57, "neutral": 33, "disagree": 10}, {"text":"It jogged my memory", "agree":50, "neutral": 35, "disagree": 15}, {"text":"The Wordle confused me", "agree":5, "neutral": 9, "disagree": 86}];

d3.select("body").append("svg")
	.attr("width", 1000)
    .attr("height", 600);

var div = d3.select("svg").selectAll("text").data(data).enter();
div.append("text")
	.attr("x",50)
	.attr("y", function(d,i) { return (40 + i * 40);})
	.text(function(d,i) { return d[0];});	

for (element of data) {
	div.append("rect").attr("x", 10).attr("y", 10).attr("width", 50).attr("height", 100);	
}



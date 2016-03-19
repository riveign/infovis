var data = [["I felt creative",88,8,4],["I felt an emotional reaction",66,22,12],["I learned something new about the text",63,24,13],["It confirmed my understanding of the text",57,33,10],["It jogged my memory",50,35,15],["The Wordle confused me",5,9,86]]

d3.select("body").append("svg");

for (da of data){
	d3.select("svg").selectAll("text")
		.data(data)
		.enter()
		.append("text")
		.attr("x",50)
		.attr("y", function(d,i) { return (10 + i * 20);})
		.text(da[0]);
}


var a = document.querySelectorAll("tbody");
var i = 0;
var j = 0;
var len1 = a.length;
var sum = 0;
for(i;i<len1;i++)
{
	var w = a[i].querySelectorAll("td");
	var num = parseFloat(w[2].querySelector("span").innerText.replaceAll(",",""));
	sum += num;
}
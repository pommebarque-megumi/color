const img = ["images/hokuoMain.jpg","images/marine.jpg","images/cute_SB.jpg","images/leaf.jpg","images/color_cute.jpg"];
let count = 1;
picChange();
function picChange(){
	count++;
	const pic = document.getElementById("pic");
	if(count == img.length) count = 0;
	pic.style.backgroundImage = 'url(' + img[count] + ')';
	setTimeout("picChange()",3990);
}

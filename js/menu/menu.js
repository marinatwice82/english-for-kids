
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


document.querySelector('.stat').addEventListener('click',makeTableStat);
document.querySelector('.mainPage').addEventListener('click',menuInit);

let menuLink = document.querySelectorAll('.menu-link');
menuLink.forEach((b)=>b.addEventListener('click', activLink));

function activLink(){
		menuLink.forEach((a)=>{
			a.style.color = '#FFF';
		});
		this.style.color = '#3D3D3D';

		}

let burgerMenu = document.querySelectorAll('.topic');
burgerMenu.forEach((a)=>a.addEventListener('click',choiceMenu));

function choiceMenu(){
	document.querySelector('.statistic').innerHTML = "";
	let tag = this.getAttribute("topic");
	
	fillGameArr(tag);
}



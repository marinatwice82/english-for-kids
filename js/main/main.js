const topicsArr = [
	{ name: 'Action (set A)',
	  image: 'img/jump.jpg'
	},
	{
	  name:'Action (set B)',
	  image: 'img/hug.jpg'
	},
	{
	  name: 'Animal (set A)',
	  image: 'img/bird.jpg'
	},
	{
	  name: 'Animal (set B)',
	  image: 'img/rabbit.jpg'
	},
	{
		name: 'Clothes',
		image: 'img/dress.jpg'
	},
	{
		name:'Emotions',
		image: 'img/tired.jpg'
	},
	{
		name:'Toys',
		image: 'img/clown.jpg'
	},
	{
		name:'Food',
		image: 'img/bread.jpg'
	}
]; 

let isTrain = true;
let train = document.querySelector('.train');
let play = document.querySelector('.play');
let frontMenu;
let slideNav = document.querySelector('.sidenav');
let footerLink = document.querySelector ('.footer-link');

document.getElementsByClassName("switch-btn")[0].addEventListener('click', ()=>{
let cardSectionPlay = document.getElementById('cardSectionPlay');
let cardSectionTrain = document.getElementById('cardSectionTrain');


let btn = document.getElementsByClassName("switch-btn")[0];
    if(!btn.classList.contains("switch-on")) {
    	btn.classList.add("switch-on");  
    	play.style.color = ' #FF56B5';
    	train.style.color = '#8392a3';
    	slideNav.style.background ='#FF56B5';
    	footerLink.style.borderTop ='2px solid #FF56B5';
    	isTrain = false;
    	cardSectionTrain.style.display = 'none';
    	cardSectionPlay.style.display = 'block';
    		frontMenu.forEach((a)=>{
    			a.style.boxShadow = "1px 2px 3px rgba(165, 20, 180, 0.6)";
    		});
document.querySelector('.navbar-brand').children[0].style.color = "#FF56B5";
let icon =  document.querySelector('.icon1').children;
    for(let i=0; i<icon.length; i++){
    	icon[i].style.background = "#FF56B5";
    }
  }
  	else {
   		btn.classList.remove("switch-on");  
    	train.style.color = '#0381FD';
    	play.style.color = '#8392a3';
    	slideNav.style.background ='#0381FD';
    	footerLink.style.borderTop ='2px solid #0381FD';
    	isTrain = true;
    	cardSectionTrain.style.display = 'block';
    	cardSectionPlay.style.display = 'none';
      	frontMenu.forEach((a)=>{
    	a.style.boxShadow = "1px 2px 3px rgba(14,17,236, 0.8)";
    });
    document.querySelector('.navbar-brand').children[0].style.color = "#0381FD";
    let icon =  document.querySelector('.icon1').children;
     	for(let i=0; i<icon.length; i++){
    		icon[i].style.background = "#0381FD";
     }
  }
});

function menuInit(){
	document.getElementById("cardSectionTrain").innerHTML = "";
	document.getElementById("cardSectionPlay").innerHTML = "";
	document.querySelector('.statistic').innerHTML = "";
	let menu = document.querySelector('.menu');
	menu.innerHTML = "";


	let div = document.createElement('div');
		div.classList.add('container');
		menu.append(div);

	let divCatalogCards = document.createElement('div');
		divCatalogCards.classList.add('row', 'catalog-cards');
		div.append(divCatalogCards);

		for (let i = 1; i<=topicsArr.length; i++){
			let divCards = document.createElement('div');
				divCards.classList.add('cards');
				divCatalogCards.append(divCards);

			let divFrontMenu = document.createElement('div');
				divFrontMenu.classList.add('front-menu');
				divFrontMenu.setAttribute("topic",	`${i}`);
				divCards.append(divFrontMenu);

			let imgCards = document.createElement('img');
				imgCards.classList.add('card-img');
				imgCards.setAttribute("src",`${topicsArr[i-1].image}`);
				imgCards.setAttribute("alt","img");
				divFrontMenu.append(imgCards);

			let divDescription = document.createElement('div');
				divDescription.classList.add('description');
				divFrontMenu.append(divDescription);

			let divCardTitleMenu = document.createElement('div');
				divCardTitleMenu.classList.add('card-title-menu');
				divDescription.append(divCardTitleMenu);

			let pCard = document.createElement('p');
				pCard.innerHTML = `${topicsArr[i-1].name}`;
				divCardTitleMenu.append(pCard);
		
		}

frontMenu = document.querySelectorAll('.front-menu');
frontMenu.forEach((a)=>a.addEventListener('click', choiceMenu));

	function choiceMenu(){
		let tag = this.getAttribute("topic");
		
		let nameTopic = this.querySelector('.card-title-menu').children[0].innerHTML;
		let menuLink = document.querySelectorAll('.menu-link');
		menuLink.forEach((a)=>{
			if(a.innerHTML == nameTopic) {
				a.style.color = '#3D3D3D';
			} else {
				a.style.color = '#FFF';
			}
		});

			fillGameArr(tag);
	};	

}

menuInit();


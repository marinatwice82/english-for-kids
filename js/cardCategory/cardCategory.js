
let containerItem ;
let rotate ;
let rotateBack;
let front;
let mistakes = 0;
let topicName = "";
let currentTopic = [];
let playArr = [];
let stars;

let smilesFunny = document.querySelector ('.smile-funny');
let smilesSed = document.querySelector ('.smile-sed');

let btn;
let onbtn;

var tagsArr = ['actionsArr_A','actionsArr_B','animalsArr','animalsArr_B','clothesArr','emotionsArr','toys', 'food'];
if (localStorage.getItem('animalsArr')==null){
	localStorage.setItem('animalsArr', JSON.stringify(animalsArr));
}; 
if (localStorage.getItem('actionsArr_A')==null) {
	localStorage.setItem('actionsArr_A', JSON.stringify(actionsArr_A));
};
if (localStorage.getItem('actionsArr_B')==null) {
	localStorage.setItem('actionsArr_B', JSON.stringify(actionsArr_B));
};
if (localStorage.getItem('animalsArr_B')==null){
	localStorage.setItem('animalsArr_B', JSON.stringify(animalsArr_B));
};
if (localStorage.getItem('clothesArr')==null){
	localStorage.setItem('clothesArr', JSON.stringify(clothesArr));
};
if (localStorage.getItem('emotionsArr')==null){
	localStorage.setItem('emotionsArr', JSON.stringify(emotionsArr));
};
if (localStorage.getItem('toys')==null){
	localStorage.setItem('toys', JSON.stringify(toys));
};
if (localStorage.getItem('food')==null){
	localStorage.setItem('food', JSON.stringify(food));
};

function fillGameArr(topic) {
	switch (topic) {
		case '1':topicName = 'actionsArr_A';
				currentTopic = JSON.parse(localStorage.getItem('actionsArr_A'));
				break;
		case '2':topicName = 'actionsArr_B';
				currentTopic = JSON.parse(localStorage.getItem('actionsArr_B'));
				break;
		case '3':topicName = 'animalsArr';
				currentTopic = JSON.parse(localStorage.getItem('animalsArr'));
				break;
		case '4':topicName = 'animalsArr_B';
				currentTopic = JSON.parse(localStorage.getItem('animalsArr_B'));
				break;
		case '5':topicName = 'clothesArr';
				currentTopic = JSON.parse(localStorage.getItem('clothesArr'));
				break;
		case '6':topicName = 'emotionsArr';
				currentTopic = JSON.parse(localStorage.getItem('emotionsArr'));
				break;
		case '7':topicName = 'toys';
				currentTopic = JSON.parse(localStorage.getItem('toys'));
				break;
		case '8':topicName = 'food';
				currentTopic = JSON.parse(localStorage.getItem('food'));
				break;
		case 0: topicName = 'difficultWords';
				currentTopic = arguments[1];
				document.querySelector('.statistic').innerHTML = "";
				break;
	}

	playArr = [];
	for(let i=0; i<currentTopic.length; i++){
		playArr.push(currentTopic[i]);
	} 

	playArr.sort(function(){return Math.random()-0.5});
		document.querySelector('.menu').innerHTML='';
		
		let cardTrain = document.getElementById("cardSectionTrain");
			cardTrain.innerHTML="";

		let divTrain = document.createElement('div');
			divTrain.classList.add('container');
			cardTrain.append(divTrain);

		let divCatalogTrain = document.createElement('div');
			divCatalogTrain.classList.add('row','catalog-cards');
			divTrain.append(divCatalogTrain);

			for (let i = 0; i<currentTopic.length; i++){

				let divCards = document.createElement('div');
					divCards.classList.add('cards');
					divCards.setAttribute("index",`${i}`);
					divCatalogTrain.append(divCards);

				let divFront = document.createElement('div');
					divFront.classList.add('front');
					divCards.append(divFront);

				let imgCards = document.createElement('img');
					imgCards.classList.add('card-img');
					imgCards.setAttribute("src",`${currentTopic[i].image}`);
					imgCards.setAttribute("alt","img");
					divFront.append(imgCards);

				let divDescription = document.createElement('div');
					divDescription.classList.add('description');
					divFront.append(divDescription);

				let divCardTitle = document.createElement('div');
					divCardTitle.classList.add('card-title');
					divDescription.append(divCardTitle);

				let pCard = document.createElement('p');
					pCard.innerHTML = `${currentTopic[i].word}`;
					divCardTitle.append(pCard);

				let divCardRoll = document.createElement('div');
					divCardRoll.classList.add('card-roll');
					divDescription.append(divCardRoll);

				let imgRollSecond = document.createElement('img');
					imgRollSecond.classList.add('second');
					imgRollSecond.setAttribute("src","img/arrow-repeat.png");
					divCardRoll.append(imgRollSecond);

				let imgRollFirst = document.createElement('img');
					imgRollFirst.classList.add('first');
					imgRollFirst.setAttribute("src","img/arrow-repeat-hover.png");
					divCardRoll.append(imgRollFirst);

				let divBack = document.createElement('div');
					divBack.classList.add('back');
					divCards.append(divBack);

				let imgCard = document.createElement('img');
					imgCard.classList.add('card-img');
					imgCard.setAttribute("src",`${currentTopic[i].image}`);
					imgCard.setAttribute("alt","img");
					divBack.append(imgCard);

				let divDescriptionBack = document.createElement('div');
					divDescriptionBack.classList.add('description');
					divBack.append(divDescriptionBack);

				let divCardTitleBack = document.createElement('div');
					divCardTitleBack.classList.add('card-title');
					divDescriptionBack.append(divCardTitleBack);

				let pCardBack = document.createElement('p');
					pCardBack.textContent = `${currentTopic[i].translation}`;
					divCardTitleBack.append(pCardBack);
			}
	
		containerItem = document.querySelectorAll('.cards');
    	rotate = document.querySelectorAll('.card-roll');
    	rotateBack = document.querySelectorAll('.back');

		let n = 0;
			rotate.forEach((a) => {
		let src = currentTopic[n].audioSrc;
			a.addEventListener('click', function(){flipCard(a, src);}, false);
	
		n++;
		});

		front = document.querySelectorAll('.front');
		n = 0;
 		front.forEach((b)=>{
			let src = currentTopic[n].audioSrc;
			b.addEventListener('click', function(){ soundPlay(src);}, false);
			n++;
		});

			rotateBack.forEach((b) => b.addEventListener('mouseout', flipCardBack));

			let cardPlay = document.getElementById ('cardSectionPlay');
				cardPlay.innerHTML="";

			let divPlay = document.createElement('div');
				divPlay.classList.add('container');
				cardPlay.append(divPlay);

			let divCatalogPlay = document.createElement('div');
				divCatalogPlay.classList.add('row','catalog-cards');
				divPlay.append(divCatalogPlay);


		for (let i=0; i<currentTopic.length;i++){
				let divCards = document.createElement('div');
					divCards.classList.add('cards');
					divCards.setAttribute("data-word",`${currentTopic[i].word}`);
					divCards.setAttribute("index",`${i}`);
					divCatalogPlay.append(divCards);

				let divFrontImg = document.createElement('div');
					divFrontImg.classList.add('front-img');
					divCards.append(divFrontImg);

				let imgCards = document.createElement('img');
					imgCards.classList.add('card-img');
					imgCards.setAttribute("src",`${currentTopic[i].image}`);
					imgCards.setAttribute("alt","img");
					divFrontImg.append(imgCards);
		}
			let divContainerFooter = document.createElement('div');
				divContainerFooter.classList.add('container','footer');
				divContainerFooter.setAttribute('id','footer')
				cardPlay.append(divContainerFooter);

			let divRollButton = document.createElement('div');
				divRollButton.classList.add('row-button');
				divContainerFooter.append(divRollButton);

			let bubblyButton = document.createElement('button');
				bubblyButton.classList.add('bubbly-button');
				bubblyButton.textContent = 'Start game!';
				divRollButton.append(bubblyButton);

			let onbubblyButton = document.createElement('button');
				onbubblyButton.classList.add('onbubbly-button');
				divRollButton.append(onbubblyButton);

			let imgButton = document.createElement('img');
				imgButton.setAttribute('src','img/game-play.png');
				imgButton.setAttribute('alt','img');
				onbubblyButton.append(imgButton);

	btn = document.querySelector('.bubbly-button');
	onbtn = document.querySelector('.onbubbly-button');

	btn.addEventListener('click', function() {
 	   	btn.style.display = 'none';
 	   	onbtn.style.display = 'block';
	});

	onbtn.addEventListener('click', function() {
 		soundPlay(playArr[0].audioSrc);
	});

	let cardSectionPlay = document.getElementById('cardSectionPlay');
	let cardSectionTrain = document.getElementById('cardSectionTrain');
	let playCards = cardSectionPlay.querySelectorAll('.cards');

	stars = document.getElementById('stars');
	stars.innerHTML = "";

	playCards.forEach((a)=>{a.addEventListener('click', choice)});
}

function flipCard(a, src) {
	audio = new Audio();
	audio.src = src;
	audio.autoplay = true;

	let card = a.parentElement.parentElement.parentElement;

    card.children[0].style.transform = 'rotateY(180deg)';
 	card.querySelector('.back').style.transform = 'rotateY(360deg)';
 	
 	currentTopic[card.getAttribute("index")].clicks++;	
 	localStorage.setItem(topicName, JSON.stringify(currentTopic));
}

function flipCardBack(e){
	this.style.transform = 'rotateY(180deg)';
	this.parentElement.querySelector('.front').style.transform = 'rotateY(360deg)';
}

function choice(){
	let tag = this.getAttribute("data-word");
	index = this.getAttribute("index");

	if (tag==playArr[0].word) {
		currentTopic[index].hit++;		
		this.style.opacity = 0.3;
		audio = new Audio();
     	audio.src = 'audio/correct.mp3';
     	audio.autoplay = true;

		playArr.shift();

		let stars = document.getElementById('stars');
		let stat = document.createElement('div');
			stat.classList.add('start');
			stars.append(stat);
		let imgStat = document.createElement('img');
			imgStat.setAttribute('src','img/star-win.svg');
			imgStat.setAttribute('alt','img');
			stat.append(imgStat);

		if(playArr.length == 0) {

			if(mistakes==0) {
				smilesFunny.style.display = 'block';
				cardSectionPlay.style.display = 'none';
		
				stars.innerHTML = "";
				onbtn.style.display = 'none';

				audio = new Audio();
     			audio.src = 'audio/success.mp3';
     			audio.autoplay = true;

     			setTimeout(() => {
     				smilesFunny.style.display = 'none';
     				cardSectionPlay.style.display = 'block';
     				menuInit();
     			}, 3000);
			}
			else {
				smilesSed.style.display = 'block';
				cardSectionPlay.style.display = 'none';
			
				stars.innerHTML = "";
				onbtn.style.display = 'none';

				let smileSed = document.querySelector('.smile-sed');

				let smileContainer = document.createElement('div');
					smileContainer.classList.add('container');
					smileSed.append(smileContainer);

				let rowSmiley = document.createElement('div');
					rowSmiley.classList.add('row','smiley');
					smileContainer.append(rowSmiley);

				let divMistake = document.createElement('div');
					divMistake.classList.add('mistake');

					if (mistakes == 1) {
						divMistake.textContent = 'Mistake: '+mistakes ;
					} else {
						divMistake.textContent = 'Mistakes: '+mistakes;
					}
     				rowSmiley.append(divMistake);

     			let divSmileySed = document.createElement('div');
     				divSmileySed.classList.add('smiley-sed');
     				rowSmiley.append(divSmileySed);

     			let imgSmileySed = document.createElement('img');
     				imgSmileySed.setAttribute('src','img/failure.jpg');
     				imgSmileySed.setAttribute('alt','img');
     				divSmileySed.append(imgSmileySed);

				audio = new Audio();
     			audio.src = 'audio/failure.mp3';
     			audio.autoplay = true;

     			setTimeout(() => {
     				smilesSed.innerHTML = "";
     				smilesSed.style.display = 'none';
     				cardSectionPlay.style.display = 'block';
     				menuInit();
     			}, 3000);
			}
			mistakes = 0;
		}
		else {soundPlay(playArr[0].audioSrc);}
		
	} else if (tag!=playArr[0].word && this.style.opacity != 0.3) {
		currentTopic.forEach((key)=>{
			if (key.word == playArr[0].word){
				key.mis++;
			}
		});

		mistakes++;
		audio = new Audio();
     	audio.src = 'audio/error.mp3';
     	audio.autoplay = true;

		let statGrey = document.createElement('div');
			statGrey.classList.add('start-grey');
			stars.append(statGrey);

		let imgStartGrey = document.createElement('img');
			imgStartGrey.setAttribute('src','img/start-grey.png');
			imgStartGrey.setAttribute('alt','img');
			statGrey.append(imgStartGrey);
	}
	localStorage.setItem(topicName, JSON.stringify(currentTopic));
}

function  soundPlay(src) {
	var audio = new Audio();
	audio.src = src; 
	audio.autoplay = true; 
};





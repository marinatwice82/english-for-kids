
let arr = [];
let sortSense = {
	name: "",
	sense: 1
};

function makeTableStat(){
	
	document.querySelector('.menu').innerHTML = "";
	document.getElementById("cardSectionTrain").innerHTML = "";
	document.getElementById("cardSectionPlay").innerHTML = "";
	document.getElementById('stars').innerHTML = "";
		arr = [];
		for(let i=0; i<tagsArr.length; i++){
			arr.push(JSON.parse(localStorage.getItem(tagsArr[i])));
		}

		arr.forEach((a)=>{
			a.forEach((b)=>{
				b.asked = b.hit+b.mis;
				if(b.asked==0) {b.wrong =0;}
				else {b.wrong = Math.round((b.mis*100)/b.asked);}
			});
		});
	showTable(arr);
}

function showTable(arr){

	let statistic = document.querySelector('.statistic');
		statistic.innerHTML="";

	let divContainerStatistics = document.createElement('div');
		divContainerStatistics.classList.add('container','statistics');
		statistic.append(divContainerStatistics);

	let divBtnsStatistics = document.createElement('div');
		divBtnsStatistics.classList.add('mb-3','mt-3','buttons-statistics');
		divContainerStatistics.append(divBtnsStatistics);

	let btnBtnStatisticWord = document.createElement('button');
		btnBtnStatisticWord.classList.add('button-statistic-word');
		btnBtnStatisticWord.textContent = 'Repeat difficult words';
		divBtnsStatistics.append(btnBtnStatisticWord);

	let btnButtonStatistic = document.createElement('button');
		btnButtonStatistic.classList.add('button-statistic');
		btnButtonStatistic.textContent = 'Reset';
		divBtnsStatistics.append(btnButtonStatistic);

	let divRowTable = document.createElement('div');
		divRowTable.classList.add('row-table');
		divContainerStatistics.append(divRowTable);

	let table = document.createElement('table');
		divRowTable.append(table);

	let thead = document.createElement('thead');
		table.append(thead);

	let trHeaderTable = document.createElement('tr');
		trHeaderTable.classList.add('header-table');
		thead.append(trHeaderTable);

	let tdHeadCategory = document.createElement('td');
		tdHeadCategory.setAttribute('type','word');
		tdHeadCategory.textContent = 'Category';
		trHeaderTable.append(tdHeadCategory);

	let tdHeadTranslate = document.createElement('td');	
		tdHeadTranslate.setAttribute('type','translation');
		tdHeadTranslate.textContent = 'Translate';
		trHeaderTable.append(tdHeadTranslate);

	let tdHeadAsked = document.createElement('td');	
		tdHeadAsked.setAttribute('type','asked');
		tdHeadAsked.textContent = 'Asked';
		trHeaderTable.append(tdHeadAsked);

	let tdHeadHit = document.createElement('td');	
		tdHeadHit.setAttribute('type','hit');
		tdHeadHit.textContent = 'Hit';
		trHeaderTable.append(tdHeadHit);

	let tdHeadMistake = document.createElement('td');	
		tdHeadMistake.setAttribute('type','mis');
		tdHeadMistake.textContent = 'Mistake';
		trHeaderTable.append(tdHeadMistake);

	let tdHeadWrong = document.createElement('td');	
		tdHeadWrong.setAttribute('type','wrong');
		tdHeadWrong.textContent = '%';
		trHeaderTable.append(tdHeadWrong);

	let tdHeadTrain = document.createElement('td');	
		tdHeadTrain.setAttribute('type','clicks');
		tdHeadTrain.textContent = 'Train';
		trHeaderTable.append(tdHeadTrain);

	let tBody = document.createElement('tbody');
		table.append(tBody);

	
	for (let i=0; i<arr.length; i++){
	
		let trBodytable = document.createElement('tr');
			trBodytable.classList.add('colspan-table');
			tBody.append(trBodytable);

		let tdColspan  = document.createElement('td');
			tdColspan.setAttribute('colspan','7');
			tdColspan.classList.add('category-table');
			tdColspan.textContent = `${topicsArr[i].name}`;
			trBodytable.append(tdColspan);

			for(let key of arr[i]) {

				let tr = document.createElement('tr');

				let td1 = document.createElement('td');
					td1.innerHTML = key.word;
					tr.appendChild(td1);

				let td2 = document.createElement('td');
					td2.innerHTML = key.translation;
					tr.appendChild(td2);

				let td3 = document.createElement('td');
					td3.innerHTML = key.asked;
					tr.appendChild(td3);

				let td4 = document.createElement('td');
					td4.innerHTML = key.hit;
					tr.appendChild(td4);

				let td5 = document.createElement('td');
					td5.innerHTML = key.mis;
					tr.appendChild(td5);

				let td6 = document.createElement('td');
					td6.innerHTML = key.wrong;
					tr.appendChild(td6);

				let td7 = document.createElement('td');
					td7.innerHTML = key.clicks;
					tr.appendChild(td7);	

					tBody.appendChild(tr);
			}		
	}

let headTable = document.querySelector('.header-table').children;
	
	for(let k=0; k<headTable.length; k++) {
		headTable[k].addEventListener('click', sortStat);
	}
	
	document.querySelector('.button-statistic-word').addEventListener('click', ()=>{
		let difficultArr=[];
		arr.forEach((a)=>{
			a.forEach((b)=>{
			if(b.mis!=0) {difficultArr.push(b);}
			});
		});
		fillGameArr(0, difficultArr);
	});

	document.querySelector('.button-statistic').addEventListener('click', ()=>{
		localStorage.setItem('animalsArr', JSON.stringify(animalsArr));
		localStorage.setItem('actionsArr_A', JSON.stringify(actionsArr_A));
		localStorage.setItem('actionsArr_B', JSON.stringify(actionsArr_B));
		localStorage.setItem('animalsArr_B', JSON.stringify(animalsArr_B));
		localStorage.setItem('clothesArr', JSON.stringify(clothesArr));
		localStorage.setItem('emotionsArr', JSON.stringify(emotionsArr));
		localStorage.setItem('toys', JSON.stringify(toys));
		localStorage.setItem('food', JSON.stringify(food));
		makeTableStat();
	});
}

function sortStat(){
		let tag = this.getAttribute("type");

		if (sortSense.name!=tag) {
			sortSense.name = tag;
			sortSense.sense = 1;
		} else {
			sortSense.sense *= -1;
		}
		arr.forEach((key)=>{
			key.sort(function(a,b){
			switch (tag){
				case 'word':if(a.word<b.word) {	return -1*sortSense.sense;}
							else {return 1*sortSense.sense;}
				            break;
				case 'clicks':if(a.clicks<b.clicks) {return -1*sortSense.sense;}
							else {return 1*sortSense.sense;}
				            break;
				case 'hit':if(a.hit<b.hit) {return -1*sortSense.sense;}
				            else {return 1*sortSense.sense;}
				            break;
				case 'mis':if(a.mis<b.mis) {return -1*sortSense.sense;}
						    else {return 1*sortSense.sense;}	
				            break;  
				case 'asked':if(a.asked<b.asked) {return -1*sortSense.sense;}
							else {return 1*sortSense.sense;}
				            break;    
				case 'wrong':if(a.wrong<b.wrong) {return -1*sortSense.sense;}
				            else {return 1*sortSense.sense;}
				            break;  
				case 'translation':if(a.wrong<b.wrong) {return -1*sortSense.sense;}
				            else {return 1*sortSense.sense;}
				            break;  
			}
			
			});
		});
		
		showTable(arr);
	}


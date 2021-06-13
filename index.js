// Паралелограм
let calculateParallelogram = function () {
	// вхідні дані 
	let inputA = document.querySelector('[name=prlA]'); 			
	let a = inputA.value;

	let inputB = document.querySelector('[name=prlB]'); 			
	let b = inputB.value;

	let inputAngle = document.querySelector('[name=prlAngle]');		
	let angle = inputAngle.value;

	// вихідні дані
	let outputArea = document.querySelector('#prlArea');			
	let area = null;
	
	let outputH = document.querySelector('#prlH');					
	let h = null;


	// Виконуємо розрахунки
	// Площа
	area = a * b * Math.sin(angle * (Math.PI/180));

	// Висота
	h = area / b;

	// Виводимо дані
	outputArea.innerHTML = Math.floor(area);
	outputH.innerHTML = Math.floor(h);


	// Змінюємо зовнішній вигляд фігури
	let container = document.querySelector('.block.parallelogram > .object > div');
	container.style.height = a + "mm";
	container.style.width = b + "mm";
	container.style.transform = "skew(-" + angle + "deg)";
} 


// Коло
let calculateCircle = function () {
	// вхідні дані 
	let inputR = document.querySelector('[name=crclR]'); 			
	let r = inputR.value;

	// вихідні дані
	let outputArea = document.querySelector('#crclArea');			
	let area = null;
	let outputL = document.querySelector('#crclL');					
	let l = null;


	// Виконуємо розрахунки
	// Площа
	area = Math.PI * r * r;

	// Довжина
	l = 2 * Math.PI * r;

	// Виводимо дані
	outputArea.innerHTML = Math.floor(area);
	outputL.innerHTML = Math.floor(l);


	// Змінюємо зовнішній вигляд фігури
	let container = document.querySelector('.block.circle > .object > div');
	container.style.height = container.style.width = r * 2 + "mm";
	container.style.borderRadius = r * 4 + "mm";
} 


// Овал
// Коло
let calculateOval = function () {
	// вхідні дані 
	let inputHR = document.querySelector('[name=ovalHR]'); 			
	let hR = inputHR.value;
	let inputVR = document.querySelector('[name=ovalVR]'); 			
	let vR = inputVR.value;

	// вихідні дані
	let outputArea = document.querySelector('#ovalArea');			
	let area = null;
	let outputL = document.querySelector('#ovalL');					
	let l = null;


	// Виконуємо розрахунки
	// Площа
	area = Math.PI * hR * vR;

	// Довжина
	l = Math.PI * (hR + vR);

	// Виводимо дані
	outputArea.innerHTML = Math.floor(area);
	outputL.innerHTML = Math.floor(l);


	// Змінюємо зовнішній вигляд фігури
	let container = document.querySelector('.block.oval > .object > div');
	container.style.width = hR * 2 + "mm";
	container.style.height = vR * 2 + "mm";
	container.style.borderRadius = (hR * 4) + "mm / " + (vR * 4.5) + "mm";
} 


// Квадрат
let calculateSquare = function () {
	// вхідні дані 
	let inputA = document.querySelector('[name=sqrA]'); 			
	let a = inputA.value;

	// вихідні дані
	let outputArea = document.querySelector('#sqrArea');			
	let area = null;
	let outputD = document.querySelector('#sqrD');					
	let d = null;


	// Виконуємо розрахунки
	// Площа
	area = a * a;

	// Діагональ
	d = Math.sqrt(2 * area);

	// Виводимо дані
	outputArea.innerHTML = Math.floor(area);
	outputD.innerHTML = Math.floor(d);


	// Змінюємо зовнішній вигляд фігури
	let container = document.querySelector('.block.square > .object > div');
	container.style.height = a + "mm";
	container.style.width = a + "mm";
} 


// Квадрат
let calculateRectangle = function () {
	// вхідні дані 
	let inputA = document.querySelector('[name=rctA]'); 			
	let a = inputA.value;
	let inputB = document.querySelector('[name=rctB]'); 			
	let b = inputB.value;

	// вихідні дані
	let outputArea = document.querySelector('#rctArea');			
	let area = null;
	let outputD = document.querySelector('#rctD');					
	let d = null;


	// Виконуємо розрахунки
	// Площа
	area = a * b;

	// Діагональ
	d = Math.sqrt(a*a + b*b);

	// Виводимо дані
	outputArea.innerHTML = Math.floor(area);
	outputD.innerHTML = Math.floor(d);


	// Змінюємо зовнішній вигляд фігури
	let container = document.querySelector('.block.rectangle > .object > div');
	container.style.width = a + "mm";
	container.style.height = b + "mm";
} 


// Трикутник
let calculateTriangle = function () {
	// вхідні дані 
	let inputA = document.querySelector('[name=trnglA]'); 			
	let a = inputA.value;
	let inputB = document.querySelector('[name=trnglB]'); 			
	let b = inputB.value;

	// вихідні дані
	let outputC = document.querySelector('#trnglC');				
	let c = null;
	let outputH = document.querySelector('#trnglH');				
	let h = null;
	let outputArea = document.querySelector('#trnglArea');			
	let area = null;

	let outputAngleA = document.querySelector('#trnglAngleA');		
	let angleA = null;
	let outputAngleB = document.querySelector('#trnglAngleB');		
	let angleB = null;


	// Виконуємо розрахунки
	// Площа
	area = a * b / 2;

	// Сторона C
	c = Math.sqrt(a*a + b*b);

	// Висота
	h = a * b / c;

	// Кути
	angleA = Math.asin(a / c) * (180/Math.PI);
	angleB = Math.asin(b / c) * (180/Math.PI);

	// Виводимо дані
	outputC.innerHTML = Math.floor(c);
	outputH.innerHTML = Math.floor(h);
	outputArea.innerHTML = Math.floor(area);

	outputAngleA.innerHTML = Math.floor(angleA);
	outputAngleB.innerHTML = Math.floor(angleB);


	// Змінюємо зовнішній вигляд фігури
	let container = document.querySelector('.block.triangle > .object > div');
	container.style.borderBottomWidth = a + "mm";
	container.style.borderRightWidth = b + "mm";
} 



// Обраховуємо всі фігури
let calc = function () {
	calculateParallelogram();
	calculateCircle();
	calculateOval();
	calculateSquare();
	calculateRectangle();
	calculateTriangle();
}
calc();
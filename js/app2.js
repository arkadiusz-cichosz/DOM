let button = document.getElementById('addElement');

function clickButton(idOfList) {
	let list = document.getElementById(idOfList);
	let item = document.createElement('li');
	let items = document.getElementsByTagName('li');
	item.innerHTML = 'item ' + (items.length);
	list.appendChild(item);
}

button.addEventListener('click', function(e) {
	clickButton('list');
});


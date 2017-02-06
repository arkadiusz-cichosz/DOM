let buttons, text;
buttons = document.getElementsByClassName('button');
for (let i = 0; i < buttons.length; i++) {
	text = buttons[i].innerText;
	window.alert(text);
}

function alertButtonValue(event) {
  var buttons = event.target;
  var text = buttons.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.buttons'), function(element){
  element.addEventListener('click', alertButtonValue);
}, false);

var ouputList = []
console.log

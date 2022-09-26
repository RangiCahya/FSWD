//select node where to display the information
var elementNode = document.getElementById('displayChosen');


//HTML EVENT
function fromHtmlEvent() {
  elementNode.innerHTML = "I'm an HTML Event Handler";
}

//DOM EVENT
var domEvent = document.getElementById('domEvent');
domEvent.onclick = fromDomEvent;

function fromDomEvent() {
  elementNode.innerHTML = "I'm a Traditional DOM Event Handler";
};


//DOM LEVEL2 EVENT
var dom2 = document.getElementById('domLevel2Event');
dom2.addEventListener('click', fromDomLevel2, false);

function fromDomLevel2() {
  elementNode.innerHTML = "I'm an DOM Level 2 Event Listener";
};
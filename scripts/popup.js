
let text = 'STOP! NO WATCHING YOUTUBE. GO DO WORK!!!';
let goButtonText = 'open anyways';
let closeButtonText = 'Yes Sir!';


const textBox = document.createElement('div');
const goButton = document.createElement('button');
const closeButton = document.createElement('button');
const popup = document.createElement('div');
const popupContent = document.createElement('div');


textBox.innerHTML = text;
textBox.classList.add('stop-go-back_text');

//Setup go button.
goButton.innerHTML = goButtonText;
goButton.classList.add('stop-go-back_gobutton');
goButton.onclick = () => {
    popup.classList.add('stop-go-back_popup_hide');
}

//Setup close button.
closeButton.innerHTML = closeButtonText
closeButton.classList.add('stop-go-back_closebutton');
closeButton.onclick = () => {
    // chrome.tabs.getCurrent(function(tab) {
    //     chrome.tabs.remove(tab.id, function() { });
    // });
}

popupContent.appendChild(textBox);
popupContent.appendChild(closeButton);
popupContent.classList.add('stop-go-back_content');

popup.appendChild(popupContent);
popup.appendChild(goButton);
popup.classList.add('stop-go-back_popup');


const body = document.querySelector('body');
body.appendChild(popup);


console.log("Stop go back: Added popup");
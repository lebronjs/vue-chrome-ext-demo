const $ = require('jquery');

function injectedFunction(color) {
  document.body.style.backgroundColor = color;
}
chrome.runtime.onMessage.addListener((message, callback) => {
  if (message == 'changeColor') {
    chrome.scripting.executeScript({
      function: injectedFunction,
      arguments: ['orange'],
    });
  }
});

function changeHupuDom(ele) {
  const $ele = $(ele);
  $ele.find('.news-area').before(`<h3>666</h3>`);
  console.log($ele.find('.news-area'));
}

changeHupuDom(document.body);

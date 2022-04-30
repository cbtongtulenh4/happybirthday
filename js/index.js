(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    var actions = document.getElementsByClassName("check");
    for(var i=0; i < actions.length; i++){
      actions[i].classList.add("action");
    }

    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', async function () {
    var actions = document.querySelectorAll(".check");
    card.setAttribute('class', 'close-half');
    //await sleep(1000);
    actions.forEach( element =>{
        element.classList.remove("action");
    });

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());

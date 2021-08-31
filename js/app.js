(() => {
  let func = document.getElementsByName('func');
  let textIn = document.getElementById('textIn');
  let textOut = document.getElementById('textOut');

  textOut.addEventListener('click', ()=>{
    let oldText = textOut.innerHTML;
    navigator.clipboard.writeText(oldText.replace(/<br>/g, ' ').trim());
    textOut.innerHTML = "<h1>Copiado!</h1>"
    setTimeout(() => {
      textOut.innerHTML = oldText;
    }, 1000);
  });

  textIn.addEventListener('input', () => {
    updateOut();
  });
  
  func.forEach(radio => {
    radio.addEventListener('change', () => {
      updateOut();
    });
  });

  function updateOut(){
    let value = textIn.value;
    value = value.trim();
    switch (true) {
      case func[0].checked:
        textOut.innerText = value.split('').reverse().join('');
        break;
      case func[1].checked:
        textOut.innerText = value.toUpperCase();
        break;
      case func[2].checked:
        textOut.innerText = value.toLowerCase();
        break;
      default:
        console.log("Nenhuma opção selecionada");
        break;
    }

    if (textOut.innerText.length == 0) {
      textOut.innerText = "[...]"
    }
  }
})()
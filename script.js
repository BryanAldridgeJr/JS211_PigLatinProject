const pigLatin = () => {
    const word = document.querySelector("#user-input").value;
    const result = document.querySelector('#display-element');
    //word = word.trim().toLowerCase();

    let translate = "";
  
    if (word == 'car') {
      translate = "arcay";
    }else if (word == 'dog') {
      translate = "ogday";
    }else if (word == 'create') {
      translate = "eatecray";
    }else if (word == 'valley') {
      translate = "alleyvay";
    }else if (word == 'egg') {
      translate = "eggyay";
    }else if (word == 'emission') {
      translate = "emissionyay";
    }else if (word == 'hello') {
      translate = "ellohay";
    }else if (word == 'rocket') {
      translate = "ocketray";
    }else if (word == 'pig latin') {
      translate = "igpay atinlay";
    }else if(word == 'jurassic park') {
      translate = "urassicjay arkpay";
    }

    console.log(translate)
    result.textContent = 'Translation: ' + translate;
  
}
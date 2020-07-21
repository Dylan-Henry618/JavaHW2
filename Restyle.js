function Restyle(){
  let Previous;
  if (document.getElementById('style').getAttribute('href') == 'style.css'){
    Previous = 4;
  }
  else if (document.getElementById('style').getAttribute('href') == 'style2.css'){
    Previous = 1;
  }
  else if (document.getElementById('style').getAttribute('href') == 'style3.css'){
    Previous = 2;
  }
  else if (document.getElementById('style').getAttribute('href') == 'style4.css'){
    Previous = 3;
  }

  Change = Math.floor(Math.random() * 4 + 1);
    while (Change == Previous){
      Change = Math.floor(Math.random() * 4 + 1);
    }
//  console.log(Previous);
  //console.log(Change);


  if (Change == 1){
    document.getElementById('style').setAttribute('href', 'style2.css');
  }
  else if (Change == 2){
    document.getElementById('style').setAttribute('href', 'style3.css');
  }
  else if (Change == 3){
    document.getElementById('style').setAttribute('href', 'style4.css');
  }
  else if (Change >= 4){
    document.getElementById('style').setAttribute('href', 'style.css');
  }

}

const keypad = document.querySelector('.keypad');
const screen = document.querySelector('.screen');
for(let i=0;i<18;i++){
  const btn = document.createElement('button');
  btn.setAttribute('id',`btn${i}`);
  keypad.appendChild(btn);
}

const buttons = document.querySelectorAll('.keypad button');

buttons[0].innerText = `AC`;
buttons[1].innerText = `DEL`;
buttons[2].innerText = `/`;

for(let i = 3;i<6;i++){
  buttons[i].innerText = `${i-2}`; 
}

buttons[6].innerText = `*`;

for(let i = 7;i<10;i++){
  buttons[i].innerText = `${i-3}`; 
}

buttons[10].innerText = `+`;

for(let i = 11;i<14;i++){
  buttons[i].innerText = `${i-4}`; 
}

buttons[14].innerText = `-`;
buttons[15].innerText = `.`;
buttons[16].innerText = `0`;
buttons[17].innerText = `=`;

ops = ['/','*','+','-','.'];
nums = ['1','2','3',
        '4','5','6',
        '6','7','8',
        '9','0'];
buttons.forEach(el=>el.addEventListener('click',func));

function func(e){
  if(screen.innerText==='0') {
    screen.innerText='';
  }
  const latestKey = e.target.innerText;
  let lastDigit = '';
  // console.log('latest key =',latestKey);
  if(ops.includes(latestKey)||nums.includes(latestKey)){
    let display = screen.innerText;
    screen.innerText = display + latestKey;
    lastDigit = display.substring(display.length-1);
    // console.log('last digit =',lastDigit);
  }
  if(latestKey==='AC'){
    screen.innerText = '0';
  }else if(latestKey==='DEL'){
    let temp = screen.innerText;
    console.log(temp);
    if((''+temp).length<=1){
      screen.innerText='0';
    }else{
      screen.innerText= temp.slice(0,temp.length-1);
    }
  }else if(latestKey==='='){
    if(ops.includes(lastDigit)){
      let temp = screen.innerText;
      let newScreen = temp.slice(temp.length-1);
      screen.innerText= eval(newScreen);
    }
    else{
      screen.innerText = eval(screen.innerText);
    }
  }else if(ops.includes(latestKey)){
      if(ops.includes(lastDigit)){
        let temp = screen.innerText;
        let newScreen = temp.slice(0,temp.length-2);
        // console.log(newScreen);
        newScreen = newScreen + latestKey;
        console.log(newScreen);
        screen.innerText = newScreen;
      }
      
  }


}
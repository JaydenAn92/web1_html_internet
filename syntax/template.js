//template Literal 구문법 \n 역슬래시는 기호 원(돈표시)
let name = 'Janden'
let letter = 'lorem ipsum'+name+'\n\ndolor sit amet, consectetur adipisicsing '+name+' elti, sed do sisumod tempor incididunt '+name+' ut labore et amet dolore magna aliqua Ut';
console.log(letter);
//template Literal 최신문법
let letter2 = `lorem ipsum ${name}

dolor sit amet, consectetur adipisicsing ${name} elti, sed do sisumod ${4+5} tempor incididunt ${name} ut labore et amet dolore magna aliqua Ut`;
console.log(letter2);
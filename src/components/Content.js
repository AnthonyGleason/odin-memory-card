import React from 'react';
import Card from './Card.js';

//import images for cards
import arch from '../assets/img/arch.png';
import debian from '../assets/img/debian.png';
import fedora from '../assets/img/fedora.png';
import freeBSD from '../assets/img/freeBSD.png';
import gentoo from '../assets/img/gentoo.png';
import gnu from '../assets/img/gnu.png';
import linux from '../assets/img/linux.png';
import openBSD from '../assets/img/openBSD.png';
import openSUSE from '../assets/img/openSUSE.svg';
import redhat from '../assets/img/redhat.png';
import slackware from '../assets/img/slackware.png';
import ubuntu from '../assets/img/ubuntu.png';

//import css
import '../styles/content.css';

let cardArray= new Array(12);

class CardItem{
  constructor(img,name){
    this.img = img;
    this.name = name;
    this.pressed = false;
  };
};

let resetGame = function(){
  cardArray=new Array(12);
  cardArray[0]=new CardItem(arch,'Arch');
  cardArray[1]=new CardItem(debian,'Debian');
  cardArray[2]=new CardItem(fedora,'Fedora');
  cardArray[3]=new CardItem(freeBSD,'FreeBSD');
  cardArray[4]=new CardItem(gentoo,'Gentoo');
  cardArray[5]=new CardItem(linux,'Linux');
  cardArray[6]=new CardItem(gnu,'Gnu');
  cardArray[7]=new CardItem(openBSD,'OpenBSD');
  cardArray[8]=new CardItem(openSUSE,'OpenSUSE');
  cardArray[9]=new CardItem(redhat,'Redhat');
  cardArray[10]=new CardItem(slackware,'Slackware');
  cardArray[11]=new CardItem(ubuntu,'Ubuntu');
};

let gameOver = function(setBestScore, score, bestScore, setScore){
  if (score>bestScore){
    setBestScore(score);
  };
  resetGame();
  setScore(0);
};

let checkGameOver = function(item){
  if( item.pressed===true){
    return true;
  }else{
    return false;
  }
};

let playTurn = function(item,setScore,setBestScore,score,bestScore){
  if (checkGameOver(item)){
    gameOver(setBestScore, score, bestScore,setScore);
  }else if (!checkGameOver(item)&&score===11){
    gameOver(setBestScore, 12, bestScore,setScore);
  }else{
    item.pressed=true;
    setScore(score+1);
  }
}

let shuffleCards = function(props){
  //mirror cardArray
  let shuffledArray = cardArray;
  //randomize the shuffled array
  for (let i=0; i<=20; i++){
    let num1 = Math.floor(Math.random()*(11-0+1)+0);
    let num2 = Math.floor(Math.random()*(11-0+1)+0);
    //swap array indexes
    let temp = cardArray[num1];
    cardArray[num1]=shuffledArray[num2];
    shuffledArray[num2]=temp;
  };
  //return the shuffled array
  return shuffledArray.map((item)=>{
    return(
      <div onClick={()=>{playTurn(item,props.setScore,props.setBestScore,props.score,props.bestScore)}} key={cardArray.indexOf(item)} className='card-item'>
        <img src={item.img} alt={item.name}></img>
        <div className='card-item-text'>{item.name}</div>
      </div>
    )
  })
}


export default function Content(props){
  return(
    <div className='content'>
      {shuffleCards(props)}
    </div>
  )
}
//initalize game
resetGame();
const general_pinctuation=document.querySelector('.general_pinctuation');
const currency=document.querySelector('.currency');
const letterlike=document.querySelector('.letterlike');
const arrows=document.querySelector('.arrows');
const math=document.querySelector('.math');
const box=document.querySelector('.box');
const block=document.querySelector('.block');
const geometric=document.querySelector('.geometric');
const misc=document.querySelector('.misc');
const dingbats=document.querySelector('.dingbats');
const emoji=document.querySelector('.emoji');
const emoji_smileys=document.querySelector('.emoji_smileys');
const emoji_skin_tons=document.querySelector('.emoji_skin_tons');

for(let a=8192; a<8303; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');

    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    general_pinctuation.appendChild(newEle);
}

for(let a=8352; a<8399; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    currency.appendChild(newEle);
}
for(let a=8448; a<8527; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    letterlike.appendChild(newEle);
}
for(let a=8592; a<8703; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    arrows.appendChild(newEle);
}
for(let a=8704; a<8959; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    math.appendChild(newEle);
}
for(let a=9472; a<9599; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    box.appendChild(newEle);
}
for(let a=9600; a<9631; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    block.appendChild(newEle);
}
for(let a=9632; a<9727; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    geometric.appendChild(newEle);
}
for(let a=9728; a<9983; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    misc.appendChild(newEle);
}
for(let a=9984; a<10175; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    dingbats.appendChild(newEle);
}
for(let a=127744; a<129510; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    emoji.appendChild(newEle);
}
for(let a=128512; a<129488; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    emoji_smileys.appendChild(newEle);
}
for(let a=1280; a<1327; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    emoji_skin_tons.appendChild(newEle);
}
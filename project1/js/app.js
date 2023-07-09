const latin_basic=document.querySelector('.latin_basic');
const latin_supplement=document.querySelector('.latin_supplement');
const latin_extended_a=document.querySelector('.latin_extended_a');
const latin_extended_b=document.querySelector('.latin_extended_b');
const modifier_letter=document.querySelector('.modifier_letter');
const diacritical_marks=document.querySelector('.diacritical_marks');
const greek_and_coptic=document.querySelector('.greek_and_coptic');
const cyrillic_basic=document.querySelector('.cyrillic_basic');
const cyrillic_suppliment=document.querySelector('.cyrillic_suppliment');
// ---------------symbols----------



// ----------------utf-8----------------------------------------------
for(let a=0; a<127; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    latin_basic.appendChild(newEle);
}

for(let a=128; a<255; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    latin_supplement.appendChild(newEle);
}
for(let a=256; a<383; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    latin_extended_a.appendChild(newEle);
}
for(let a=384; a<591; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    latin_extended_b.appendChild(newEle);
}
for(let a=688; a<767; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    modifier_letter.appendChild(newEle);
}
for(let a=768; a<879; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    diacritical_marks.appendChild(newEle);
}
for(let a=880; a<1023; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    greek_and_coptic.appendChild(newEle);
}
for(let a=1024; a<1279; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    cyrillic_basic.appendChild(newEle);
}
for(let a=1280; a<1327; a++){
    let newEle=document.createElement('p');
    let newsubEle=document.createElement('span');
    newsubEle.innerHTML=a;
    newEle.innerHTML='&#'+a;
    newEle.appendChild(newsubEle);
    cyrillic_suppliment.appendChild(newEle);
}

//-------------------------------- symbols------------





const entree = document.getElementById('entree');
const sortie = document.getElementById('sortie');
if (entree && sortie) {
	entree.addEventListener('input', () => sortie.value = entree.value);
}


//Exercice 2
const texte = document.getElementById('texte');
const nombre = document.getElementById('nombre');
const carre = document.getElementById('carre');
const cubeNum = document.getElementById('cubeNum');
if (texte) {
    texte.addEventListener('input', () => {
        const value = Number(texte.value) || 0;
        nombre.value = value;
        carre.value = value * value;
        cubeNum.value = value * value * value;
    });
}

//Exercice 3
const moving = document.getElementById('cube');
const btnStep = document.getElementById('step');
if (moving && btnStep) {
    const perimeter = [ {r:2,c:1}, {r:2,c:2}, {r:1,c:2}, {r:1,c:1} ];
    let idx = 0;
    const show = i => {
        const p = perimeter[i];
        moving.style.gridRowStart = p.r;
        moving.style.gridColumnStart = p.c;
    };
    btnStep.addEventListener('click', () => { idx = (idx + 1) % perimeter.length; show(idx); });
    show(idx);
}

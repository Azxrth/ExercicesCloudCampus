const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const op = e.target.operateur.value;
    const chiffre1 = Number(e.target.chiffre1.value);
    const chiffre2 = Number(e.target.chiffre2.value);
    if (op === '+') {
        window.alert(chiffre1 + op+ chiffre2 + "=" + (chiffre1 + chiffre2));
    } else if (op === '-') {
        window.alert(chiffre1 + op + chiffre2 + "=" + (chiffre1 - chiffre2));
    } else if (op === '*') {
        window.alert(chiffre1 + op + chiffre2 + "=" + (chiffre1 * chiffre2));
    }   else if (op === '/') {
        window.alert(chiffre1 + op + chiffre2 + "=" + (chiffre1 / chiffre2));
    }
});


document.getElementById('visible').addEventListener('click', () => {
    document.getElementById('formulaire').style.display = 'block';
});
document.getElementById('invisible').addEventListener('click', () => {
    document.getElementById('formulaire').style.display = 'none';
});





const info = document.getElementById('info');

document.getElementById('chiffre1').addEventListener('mouseenter', () => {
  info.textContent = "Saisir un premier chiffre";
  info.style.display = "block";
});

document.getElementById('operateur').addEventListener('mouseenter', () => {
  info.textContent = "Saisir un opérateur";
  info.style.display = "block";
});

document.getElementById('chiffre2').addEventListener('mouseenter', () => {
  info.textContent = "Saisir un deuxième chiffre";
  info.style.display = "block";
});
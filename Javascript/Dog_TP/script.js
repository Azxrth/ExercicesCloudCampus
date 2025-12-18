
const btn = document.getElementById('montrer-chien');
const img = document.getElementById('chien-img');
const race = document.getElementById('race-select');
let last = '';

btn.addEventListener('click', function () {
	const b = this;
	b.disabled = true;
    const raceValue = race.value;
    if (raceValue === 'all') {
        urlAPI = 'https://dog.ceo/api/breeds/image/random';
    } else {
        urlAPI = 'https://dog.ceo/api/breed/'+ raceValue + '/images/random';
    }
	fetch(urlAPI)
		.then(r => r.json())
		.then(data => {
			const url = data.message;
			if (url !== last) {
				img.src = url;
				img.style.display = 'block';
				last = url;
			}
		})
		.catch(() => alert('Erreur de récupération'))
		.finally(() => b.disabled = false);
});


const API_BASE = 'https://swapi.py4e.com/api';

async function fetchAll(resource) {
    let items = [];
    let url = `${API_BASE}/${resource}/`;
    while (url) {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Erreur réseau');
        const data = await res.json();
        if (data.results) items.push(...data.results);
        url = data.next;
    }
    return items;
}
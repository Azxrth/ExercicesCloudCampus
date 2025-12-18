/*document.addEventListener('DOMContentLoaded', function(){
    const API_BASE = 'https://swapi.py4e.com/api';

    async function setCount(elId, resource){
        try{
            const el = document.getElementById(elId);
            if(!el) return;
            const res = await fetch(`${API_BASE}/${resource}/`);
            if(!res.ok) return;
            const data = await res.json();
            el.textContent = data.count;
        }catch(e){ console.warn('Count error', e) }
    }

    setCount('count-people','people');
    setCount('count-vehicles','vehicles');
    setCount('count-planets','planets');

    async function fetchAll(resource){
        const items = [];
        let url = `${API_BASE}/${resource}/`;
        while(url){
            const res = await fetch(url);
            if(!res.ok) throw new Error('Network error '+res.status);
            const data = await res.json();
            if(data.results) items.push(...data.results);
            url = data.next;
        }
        return items;
    }

    // PLANETE page behaviour
    const locationPath = (location.pathname || '').toLowerCase();
    if(locationPath.endsWith('planete.html') || location.href.toLowerCase().includes('planete.html')){
        const tbody = document.querySelector('#planets-table tbody');
        const searchInput = document.getElementById('search-input');
        const sortSelect = document.getElementById('sort-select');
        const clearBtn = document.getElementById('search-clear');
        const resultsCount = document.getElementById('results-count');
        const selectionPanel = document.querySelector('.selection-panel');

        let allItems = [];

        function parsePop(v){
            if(!v || v === 'unknown') return -1;
            return parseInt(String(v).replace(/,/g,'')) || -1;
        }

        function renderTable(items){
            if(!tbody) return;
            tbody.innerHTML = '';
            if(items.length === 0){
                const tr = document.createElement('tr');
                tr.innerHTML = '<td colspan="2" class="muted">Aucun résultat</td>';
                tbody.appendChild(tr);
                return;
            }
            items.forEach(it => {
                const tr = document.createElement('tr');
                const tdName = document.createElement('td'); tdName.textContent = it.name || '—';
                const tdTerrain = document.createElement('td'); tdTerrain.textContent = it.terrain || '—';
                tr.appendChild(tdName);
                tr.appendChild(tdTerrain);
                tr.addEventListener('click', ()=> showDetails(it));
                tbody.appendChild(tr);
            });
        }

        function showDetails(it){
            if(!selectionPanel) return;
            selectionPanel.innerHTML = `\n                <div class="panel">\n                    <h3>${it.name}</h3>\n                    <p><strong>Climat:</strong> ${it.climate}</p>\n                    <p><strong>Terrain:</strong> ${it.terrain}</p>\n                    <p><strong>Population:</strong> ${it.population}</p>\n                    <p><strong>Diamètre:</strong> ${it.diameter}</p>\n                </div>`;
        }

        function applyFilters(){
            const q = (searchInput && searchInput.value || '').trim().toLowerCase();
            let filtered = allItems.filter(it => {
                return (!q) || (it.name && it.name.toLowerCase().includes(q)) || (it.terrain && it.terrain.toLowerCase().includes(q));
            });
            const sort = (sortSelect && sortSelect.value) || 'population_desc';
            if(sort === 'population_desc'){
                filtered.sort((a,b)=> parsePop(b.population) - parsePop(a.population));
            } else if(sort === 'population_asc'){
                filtered.sort((a,b)=> parsePop(a.population) - parsePop(b.population));
            } else if(sort === 'name_asc'){
                filtered.sort((a,b)=> (a.name||'').localeCompare(b.name||''));
            }
            renderTable(filtered);
            if(resultsCount) resultsCount.textContent = `${filtered.length} résultat(s)`;
        }

        (async function loadPlanets(){
            try{
                if(resultsCount) resultsCount.textContent = 'Chargement…';
                allItems = await fetchAll('planets');
                applyFilters();
                if(resultsCount) resultsCount.textContent = `${allItems.length} résultat(s)`;
            }catch(err){
                console.error('Planets load error', err);
                if(resultsCount) resultsCount.textContent = 'Erreur de chargement';
            }
        })();

        if(searchInput) searchInput.addEventListener('input', applyFilters);
        if(sortSelect) sortSelect.addEventListener('change', applyFilters);
        if(clearBtn) clearBtn.addEventListener('click', ()=>{ if(searchInput) searchInput.value=''; applyFilters(); });
    }

});*/
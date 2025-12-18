let allPlanets = []; 

async function initPage() {
    try {
        const resultsCount = document.getElementById('results-count');
        const searchInput = document.getElementById('search-input');
        const sortSelect = document.getElementById('sort-select');
        allPlanets = await fetchAll('planets'); 
        function applyAllFilters() {
            const query = (searchInput.value || '').toLowerCase();
            const sortMode = sortSelect ? sortSelect.value : 'name_asc';
            let filtered = allPlanets.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.terrain.toLowerCase().includes(query)
            );
            if (sortMode === 'population_desc') {
                filtered.sort((a, b) => parsePop(b.population) - parsePop(a.population));
            } else if (sortMode === 'population_asc') {
                filtered.sort((a, b) => parsePop(a.population) - parsePop(b.population));
            } else if (sortMode === 'name_asc') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            }
            renderPlanetTable(filtered, 'planets-table');
            if (resultsCount) resultsCount.textContent = `${filtered.length} résultat(s)`;
        }
        if (searchInput) searchInput.addEventListener('input', applyAllFilters);
        if (sortSelect) sortSelect.addEventListener('change', applyAllFilters);
        applyAllFilters();
    } catch (err) {
        console.error("Erreur :", err);
    }
}


function parsePop(v) {
    if (!v || v === 'unknown') return -1;
    return parseInt(String(v).replace(/,/g, '')) || -1;
}

function showDetails(planetName) {
    const found = allPlanets.find(p => p.name === planetName);
    if (found) displayPlanetDetails(found);
}
initPage();
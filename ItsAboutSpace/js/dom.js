
function displayCount(idElement, count) {
    const element = document.getElementById(idElement);
    if (element) {
        element.textContent = count;
    }
}


function renderPlanetTable(planets, tbodyId) {
    const tbody = document.querySelector(`#${tbodyId} tbody`);
    if (!tbody) return;

    if (planets.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" class="muted">Aucun résultat trouvé</td></tr>';
        return;
    }
    tbody.innerHTML = planets.map(p => {
        const safeName = p.name.replace(/'/g, "\\'");
        return `
            <tr style="cursor:pointer" onclick="showDetails('${safeName}')">
                <td>${p.name}</td>
                <td>${p.terrain}</td>
            </tr>
        `;
    }).join('');
}


function displayPlanetDetails(planet) {
    const panel = document.querySelector('.selection-panel');
    if (!panel) return;

    panel.innerHTML = `
        <div class="panel-details">
            <h3>${planet.name}</h3>
            <hr>
            <p><strong>Climat :</strong> ${planet.climate}</p>
            <p><strong>Terrain :</strong> ${planet.terrain}</p>
            <p><strong>Population :</strong> ${planet.population}</p>
            <p><strong>Diamètre :</strong> ${planet.diameter}</p>
        </div>`;
}
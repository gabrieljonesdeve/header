// Simulazione di dati per i risultati della ricerca
const data = [
    { id: 1, title: 'Risultato 1' },
    { id: 2, title: 'Risultato 2' },
    { id: 3, title: 'Risultato 3' },
];

// Funzione per mostrare i risultati della ricerca
function showResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Pulisce i risultati precedenti

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>Nessun risultato trovato.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result');
            resultElement.textContent = result.title;
            resultsContainer.appendChild(resultElement);
        });
    }
}

// Funzione per gestire l'evento di ricerca
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchTerm === '') {
        showResults([]); // Se la ricerca è vuota, mostra un messaggio vuoto
        return;
    }

    const filteredResults = data.filter(result => result.title.toLowerCase().includes(searchTerm));
    showResults(filteredResults);
}

// Aggiunge l'evento click al pulsante di ricerca
document.getElementById('searchButton').addEventListener('click', handleSearch);

// Opzionale: Aggiungi la gestione della ricerca anche alla pressione del tasto "Enter" nell'input
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

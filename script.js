// Simulazione di dati per i risultati della ricerca
const data = [
    { id: 1, title: '1', url: 'https://www.example.com/risultato1' },
    { id: 2, title: '2', url: 'https://www.example.com/risultato2' },
    { id: 3, title: '3', url: 'https://www.example.com/risultato3' },
];

// Funzione per mostrare i risultati della ricerca
function showResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Pulisce i risultati precedenti

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>Nessun risultato trovato.</p>';
    } else {
        results.forEach(result => {
            const resultLink = document.createElement('a');
            resultLink.classList.add('result');
            resultLink.textContent = result.title;
            resultLink.href = result.url;
            resultLink.target = '_blank'; // Apri il link in una nuova scheda
            resultsContainer.appendChild(resultLink);
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

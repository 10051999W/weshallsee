function selectCity(city) {
  if (city === 'duesseldorf') {
    document.getElementById('category-select').style.display = 'block';
    window.scrollTo({ top: document.getElementById('category-select').offsetTop, behavior: 'smooth' });
  }
}

function chooseCategory(category) {
  alert('Du hast die Kategorie ausgewählt: ' + category);
  // Hier kann später die Weiterleitung zu den Unterkategorien oder Vorschlägen erfolgen
}
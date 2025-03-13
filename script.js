function searchPlantes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const plantItems = document.querySelectorAll('.plant-item');
    
    plantItems.forEach(item => {
        const plantName = item.querySelector('h2').textContent.toLowerCase();
        
        if (plantName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

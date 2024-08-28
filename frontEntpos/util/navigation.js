document.addEventListener('DOMContentLoaded', function () {
    const customerSection = document.getElementById('CustomerSection');
    const itemSection = document.getElementById('ItemSection');

    // Initially show only the customer section
    showSection('CustomerSection');

    // Event listeners for navigation buttons
    document.getElementById('customerBtn').addEventListener('click', function () {
        showSection('CustomerSection');
    });

    document.getElementById('itemBtn').addEventListener('click', function () {
        showSection('ItemSection');
    });

    function showSection(sectionId) {
        if (sectionId === 'CustomerSection') {
            customerSection.style.display = 'block';
            itemSection.style.display = 'none';
        } else if (sectionId === 'ItemSection') {
            customerSection.style.display = 'none';
            itemSection.style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');
    const transactionForm = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const db = {
      categories: [
        { id: 1, name: 'Groceries' },
        { id: 2, name: 'Utilities' },
        { id: 3, name: 'Transportation' },
        { id: 4, name: 'Entertainment' }
      ],
      transactions: [
        { id: 1, category_id: 1, description: 'Grocery shopping', amount: 5000, date: '2023-07-01' },
        { id: 2, category_id: 2, description: 'Electricity bill', amount: 7500, date: '2023-07-02' },
        { id: 3, category_id: 3, description: 'Fuel', amount: 3000, date: '2023-07-03' },
        { id: 4, category_id: 4, description: 'Movie tickets', amount: 2000, date: '2023-07-04' }
      ]
    };
  
    // Populate categories
    db.categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });
  
    // Handle form submission
    transactionForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const category = categorySelect.value;
      const description = document.getElementById('description').value;
      const amount = document.getElementById('amount').value;
  
      if (category && description && amount) {
        // Create a new transaction item
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
          <div class="transaction-info">
            <span>${description}</span>
          </div>
          <div class="transaction-amount">
            Ksh ${amount}
          </div>
          <div class="transaction-delete">
            <button class="btn btn-link">Delete</button>
          </div>
        `;
  
        transactionList.appendChild(transactionItem);
  
        // Reset form values
        categorySelect.value = '';
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
      }
    });
  
    // Handle transaction deletion
    transactionList.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn')) {
        const transactionItem = event.target.closest('.transaction-item');
        transactionItem.remove();
      }
    });
  });
  
const categorySelect = document.getElementById('category');
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');

//  Populate categories
db.categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });
  
  //  Handle form submission
transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const category = categorySelect.value;
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
  
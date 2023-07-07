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
  
    //  Retrieve form values
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
  
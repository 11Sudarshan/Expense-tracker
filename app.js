// Selectors
const incomeInput = document.getElementById('income');
const addIncomeBtn = document.getElementById('add-income-btn');
const expenseDescInput = document.getElementById('expense-desc');
const expenseAmtInput = document.getElementById('expense-amt');
const addExpenseBtn = document.getElementById('add-expense-btn');
const incomeAmount = document.getElementById('income-amount');
const expenseAmount = document.getElementById('expense-amount');
const totalBalance = document.getElementById('total-balance');
const expenseTableBody = document.getElementById('expense-table-body');

// Variables
let income = 0;
let expenses = [];

// Functions
function addIncome() {
  const incomeValue = parseInt(incomeInput.value);
  if (incomeValue) {
    income += incomeValue;
    updateBalance();
    incomeAmount.innerText = income;
    incomeInput.value = '';
  } else {
    alert('Please enter a valid income amount!');
  }
}

function addExpense() {
  const expenseDesc = expenseDescInput.value;
  const expenseAmt = parseInt(expenseAmtInput.value);
  if (expenseDesc && expenseAmt) {
    const expense = { date: new Date(), desc: expenseDesc, amt: expenseAmt };
    expenses.push(expense);
    updateBalance();
    updateExpenseTable();
    expenseDescInput.value = '';
    expenseAmtInput.value = '';
  } else {
    alert('Please enter a valid expense description and amount!');
  }
}


function updateBalance() {
  let totalExpense = 0;
  for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i].amt;
  }
  expenseAmount.innerText = totalExpense;
  totalBalance.innerText = income - totalExpense;
}


function updateExpenseTable() {
  let tableHtml = '';
  for (let i = 0; i < expenses.length; i++) {
    tableHtml += `
      <tr>
        <td>${expenses[i].date.toLocaleDateString()}</td>
        <td>${expenses[i].desc}</td>
        <td>${expenses[i].amt}</td>
        <td class="action-icons">
          <button onclick="editExpense(${i})">
            <i class="fas fa-edit"></i>
          </button>
        </td>
        <td>
          <button onclick="deleteExpense(${i})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }
  tableHtml +='</tbody>';
  expenseTableBody.innerHTML = tableHtml;
}


function editExpense(index) {
  const expense = expenses[index];
  const newDesc = prompt('Enter new description:', expense.desc);
  const newAmt = parseInt(prompt('Enter new amount:', expense.amt));
  if (newDesc && newAmt) {
    expense.desc = newDesc;
    expense.amt = newAmt;
    updateBalance();
    updateExpenseTable();
  } else {
    alert('Please enter a valid expense description and amount!');
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  updateBalance();
  updateExpenseTable();
}

// Event listeners
addIncomeBtn.addEventListener('click', addIncome);
addExpenseBtn.addEventListener('click', addExpense);








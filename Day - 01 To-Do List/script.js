const inputBox = document.getElementById('input-box');
const AddBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');

AddBtn.addEventListener('click', () => {
  if (inputBox.value === '') {
    alert('Add text in the input box');
  } else {
    const li = document.createElement('li');
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = '';

    let span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);
    saveData();
  }
});

listContainer.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function renderList() {
  listContainer.innerHTML = localStorage.getItem('data');
}

renderList();

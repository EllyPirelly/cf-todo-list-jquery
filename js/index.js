// old javascript

function newItem() {
  // add item to list of items
  let li = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let text = document.createTextNode(inputValue);

  li.appendChild(text);

  // only append li element to list when content present
  if (inputValue === '') {
    alert('Please write something!');
  } else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  };

  // cross item off of list
  function crossOut() {
    li.classList.toggle('strike');
  };

  li.addEventListener('dblclick', crossOut);

  // add delete button
  let crossOutButton = document.createElement('crossOutButton');
  crossOutButton.appendChild(document.createTextNode('X'));
  li.appendChild(crossOutButton);
  crossOutButton.addEventListener('click', deleteListItem);

  // "delete" list item in the sense of display none
  function deleteListItem() {
    li.classList.add('delete');
  };

  // reorder items
  $('#list').sortable();
};
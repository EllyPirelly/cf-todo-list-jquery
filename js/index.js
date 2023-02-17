function newItem() {

  // add item to list of items
  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  // only append li element to list when content present
  if (inputValue === '') {
    alert('Please add a ToDo first!');
  } else {
    list.append(li);
  };

  // cross item off of list
  function crossOut() {
    li.toggleClass('strike');
  };

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  // add delete button
  let crossOutButton = $('<button></button>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete');
  };

  // reorder items
  $('#list').sortable();
};

// vanilla JavaScript
// function newItem() {

//   // add item to list of items
//   let li = document.createElement('li');
//   let inputValue = document.getElementById('input').value;
//   let text = document.createTextNode(inputValue);
//   li.appendChild(text);

//   // only append li element to list when content present
//   if (inputValue === '') {
//     alert('Please write something!');
//   } else {
//     let list = document.querySelector('#list');
//     list.appendChild(li);
//   };

//   // cross item off of list
//   function crossOut() {
//     li.classList.toggle('strike');
//   };
//   li.addEventListener('dblclick', crossOut);

//   // add delete button
//   let crossOutButton = document.createElement('crossOutButton');
//   crossOutButton.appendChild(document.createTextNode('X'));
//   li.appendChild(crossOutButton);
//   crossOutButton.addEventListener('click', deleteListItem);

//   function deleteListItem() {
//     li.classList.add('delete');
//   };

//   // reorder items - not provided in vanilla JS
//   $('#list').sortable();
// };

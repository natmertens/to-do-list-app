function newItem() {

  //Adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  }

  else {
    let list = $('#list');
    list.append(li);
  }

  //crossing an item out
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  //Adding the delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete');
  }

  //Reordering the items
  $('#list').sortable();
}

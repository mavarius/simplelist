$(document).ready(init)

function init() {
  $('#add').click(addButtonClicked);
}

function addButtonClicked() {
  var $input = $('#name');
  var color = $('#color').val();

  var name = $input.val();
  $input.val('');

  var $li = $('<li>');
  $li.text(name).css('color', color);

  $li.text(name);

  var $list = $('#list');

  $list.append($li);
}

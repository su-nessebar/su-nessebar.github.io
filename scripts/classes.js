let input = document.getElementById('search-input');
      
input.addEventListener('input', filterClasses);

function filterClasses() {
  let filter = input.value.toLowerCase(),
      block = document.getElementById('wrap-classes'),
      elements = block.getElementsByTagName('div'),
      textSearch = document.getElementsByClassName('subhead'),
      txtValue;
  for (let i = 0; i < elements.length; i++) {
    txtValue = textSearch[i].textContent || textSearch[i].innerText;

    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      elements[i].style.display = 'inline';
    } else {
      elements[i].style.display = 'none';
    }
  }
}
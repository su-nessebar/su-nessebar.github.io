let input = document.getElementById('search-input');
      
input.addEventListener('input', filterDocuments);

function filterDocuments() {
  let filter = input.value.toLowerCase(),
      block = document.getElementById('wrap-documents'),
      elements = block.getElementsByClassName('parent-search-el'),
      textSearch = document.getElementsByClassName('search-el'),
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
let input = document.getElementById('search-input');
      

input.addEventListener('keyup', filterClasses);

function filterClasses() {
  let filter = input.value.toLowerCase(),
      block = document.getElementsByClassName('wrap-classes')[0],
      elements = block.getElementsByTagName('div'),
      textSeacrh = document.getElementsByClassName('subhead'),
      txtValue;
  for (let i = 0; i < elements.length; i++) {
    txtValue = textSeacrh[i].textContent || textSeacrh[i].innerText;

    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      elements[i].style.display = 'inline';
    } else {
      elements[i].style.display = 'none';
    }
  }
}
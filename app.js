const colorPicker = document.querySelector('#color-picker');
const text = document.querySelector('.text');
const h1 = document.querySelector('h1');

colorPicker.addEventListener('input', function() {
  text.style.color = this.value;
  h1.style.color = this.value;
});

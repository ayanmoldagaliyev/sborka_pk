const buttons = document.querySelectorAll('.button')
const popup = document.getElementById('popup')
const formSubmit = document.getElementById('form-submit')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'block'
  })
})

formSubmit.addEventListener('click', () => {
  popup.style.display = 'none'
})
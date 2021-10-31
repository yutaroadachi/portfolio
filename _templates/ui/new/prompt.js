const inputValidator = (input) => {
  if (input !== '') {
    return true
  }
}

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネントの名前を指定してください。ex) Layout',
    validate: inputValidator,
  },
]

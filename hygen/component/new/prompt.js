const inputValidator = (input) => {
  if (input !== '') {
    return true
  }
}

module.exports = [
  {
    type: 'select',
    name: 'kind',
    message: 'コンポーネントの種類を選択してください。',
    choices: ['domain', 'ui'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネントの名前を指定してください。ex)Hoge',
    validate: inputValidator,
  },
]

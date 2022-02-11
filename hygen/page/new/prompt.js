const inputValidator = (input) => {
  if (input !== '') {
    return true
  }
}

module.exports = [
  {
    type: 'input',
    name: 'path',
    message: 'pages/以下のパスを入力してください。ex)hoge/huga',
    validate: inputValidator,
  },
  {
    type: 'select',
    name: 'getProps',
    message: 'SSG または SSR を使用しますか？',
    choices: ['いいえ', 'SSG', 'SSR'],
  },
]

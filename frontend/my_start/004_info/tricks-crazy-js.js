// start
// пример валидации с выводом результата (успешный, ошибка)
;(function() {
  const inputs = [... document.querySelectorAll('input')]
  const isRightAnswer = values => {
    const hasEmptyValue = values.some(v => v === '')
    if (hasEmptyValue) return 'Некоторые значения пустые'

    const isSingleChars = values.every(v => v.length === 1)
    if (!isSingleChars) return 'Некоторые значения более 1 символа'

    const numbers = values.map(v => +v)
    const isNumbers = numbers.every(i => !isNaN(i))
    if (!isNumbers) return 'Некоторые значения не являются числами'

    const isNumbersNotInRange = numbers.some(n => n > 9 || n < 1)
    if (isNumbersNotInRange) return 'Значения должны быть в диапазоне от 1 .. 9'

    const isDifferentNumbers = new Set(numbers).size === numbers.length
    if (!isDifferentNumbers) return 'Все числа должны быть разными'
  }

  const textUpdater = el => text => el.textContent = text
  const dangerUpdater = textUpdater(danger)
  const successUpdater = textUpdater(success)
  const clearLabels = () => [dangerUpdater, successUpdater].forEach(f => f(''))

  const checkGameConditions = () => {
    clearLabels()
    const values = inputs.map(input => input.value.trim())
    const error = isRightAnswer(values)

    if (error) return dangerUpdater(error)
    successUpdater('Победа!!!')
  }

  inputs.forEach(input => input.oninput = checkGameConditions)
  checkGameConditions()
});
// end

// start
// пример изменения текста
(function() {
  const inputs = [... document.querySelectorAll('input')]
  const words = someText.textContent.trim().split(/\s+/g)
  const updateTextResults = () => {
    result.innerHTML = ''

    const hasInputValue = inputs.some(input => input.checkValidity())
    if (!hasInputValue) return

    let wordsResult = words
    if (upperCase.checked) {
        /*
        const upperCaseWords = []
        for (let i = 0; i < wordsResult.length; i++) {
            const word = wordsResult[i]
            upperCaseWords[i] = word.toLocaleUpperCase()
        }
        wordsResult = upperCaseWords
        */
        wordsResult = wordsResult.map(word => word.toLocaleUpperCase())
    }

    if (onlyLetters.checked) {
        /*
        const onlyLettersWords = []
        for (let i = 0; i < wordsResult.length; i++) {
            const word = wordsResult[i]
            onlyLettersWords[i] = word.replace(/[^а-я\w]/ig, '')
        }
        wordsResult = onlyLettersWords
        */
        wordsResult = wordsResult.map(word => word.replace(/[^а-я\w]/ig, ''))
    }

    if (+minLetters.value) {
        /*const minLettersWords = []
        for (let i = 0; i < wordsResult.length; i++) {
            const word = wordsResult[i]
            if (word.length >= +minLetters.value) {
                minLettersWords.push(word)
            }
        }*/
        wordsResult = wordsResult.filter(word => word.length >= +minLetters.value);
    }

    if (searchText.value) {
        /*
        const foundText = []
        for (let i = 0; i < wordsResult.length; i++) {
            const word = wordsResult[i]
            if (word.match(new RegExp(searchText.value, 'ig'))) {
                foundText.push(word)
            }
        }
        wordsResult = foundText
        */
        wordsResult = wordsResult.filter(word => word.match(new RegExp(searchText.value, 'ig')))
    }

    result.innerHTML = wordsResult.join(' ')
  }

  /*
  for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i]
      input.oninput = updateTextResults
  }
  */
  inputs.forEach(input => input.oninput = updateTextResults)
  updateTextResults()
});
// end
// start
// пример деструктаризации
$alert = document.createElement('div')
const styles = {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(-50%, -50%)',
}
Object.entries(styles).forEach(([key, value]) => $alert.style[key] = value)
// end

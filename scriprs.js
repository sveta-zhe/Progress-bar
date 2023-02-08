const createElements = () => {
  const root = document.createElement('div')
  const text = document.createElement('div')
  const container = document.createElement('div')
  const load = document.createElement('div')

  return {root, text, container, load}
}

const setAttribute = ({root, text, container, load}) => {
root.setAttribute('class', 'root')
text.setAttribute('class', 'text')
container.setAttribute('class', 'container')
load.setAttribute('class', 'load')
}

const startCounting = ({width, text, load, interval}) => {
  let count = 0
  let intervalID
  
  const func = () => {
if (count === width ) {
  clearInterval(intervalID)
  return
}

text.textContent = `${count}%`
load.style.width = `${count}%`
count++
  }
  setInterval(func, interval)
}

const init = () => {
const {root, text, container, load} = createElements()
setAttribute({root, text, container, load})

document.body.appendChild(root)
root.appendChild(text)
root.appendChild(container)
container.appendChild(load)
startCounting({width: 85, text, load, interval: 20})
}

init()
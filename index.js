function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  let div = document.querySelector('div#grand-node')
  let next = div.querySelector('div')
  while (next !== null) {
    div = next
    next = div.querySelector('div')
  }
  return div
}

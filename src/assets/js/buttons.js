// First button

const docStyle = document.documentElement.style;
const aElem = document.querySelector('.cta-main')

const FirstboundingClientRect = aElem.getBoundingClientRect()





aElem.onmousemove = function (e) {



  const x = e.clientX - FirstboundingClientRect.left
  const y = e.clientY - FirstboundingClientRect.top

  const xc = FirstboundingClientRect.width / 2
  const yc = FirstboundingClientRect.height / 2

  const dx = x - xc
  const dy = y - yc

  docStyle.setProperty('--rx', `${ dy/-1 }deg`)
  docStyle.setProperty('--ry', `${ dx/10 }deg`)



}

aElem.onmouseleave = function (e) {
  docStyle.setProperty('--ty', '0')
  docStyle.setProperty('--rx', '0')
  docStyle.setProperty('--ry', '0')
}

aElem.onmousedown = function (e) {

  docStyle.setProperty('--tz', '-25px')

}

// Second button

const bElem = document.querySelector('.cta-blog')
const SecondboundingClientRect = bElem.getBoundingClientRect()

bElem.onmousemove = function (b) {

  const x1 = b.clientX - SecondboundingClientRect.left
  const y1 = b.clientY - SecondboundingClientRect.top

  const xc1 = SecondboundingClientRect.width / 2
  const yc1 = SecondboundingClientRect.height / 2

  const dx1 = x1 - xc1
  const dy1 = y1 - yc1

  docStyle.setProperty('--rxx', `${ dy1/-1 }deg`)
  docStyle.setProperty('--ryy', `${ dx1/10 }deg`)

}

bElem.onmouseleave = function (b) {
  docStyle.setProperty('--tyy', '0')
  docStyle.setProperty('--rxx', '0')
  docStyle.setProperty('--ryy', '0')
}

bElem.onmousedown = function (b) {

  docStyle.setProperty('--tzz', '-25px')

}
bElem.onmouseup = function (b) {

  docStyle.setProperty('--tzz', '-10px')

}

document.body.onmouseup = function (b) {
  docStyle.setProperty('--tzz', '-12px')
}

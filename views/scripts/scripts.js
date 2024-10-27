const keys = { Q:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', W:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', E:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', A:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3', S:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', D:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', Z:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', X:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
C:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
}

const generateButtons = () => {
  const buttons = Object.keys(keys).map(item => {
    const button = document.createElement('button')
    button.innerText = item
    button.classList.add('item', 'drum-pad', 'button-element')
    button.addEventListener('click',event => {
      const audio = new Audio(keys[item])
      audio.play()
    })
    return button
  })
  const content = document.querySelector('.content')
  content.append(...buttons)
}
const generateDisplay = () => {
  const display = document.createElement('div')
  display.classList.add('display')
  display.innerHTML = '<span class="signature">By James2Kim <i class="fas fa-code"></i></span>'
  const container = document.querySelector('.drum-container')
  container.append(display)
}

const handleKeyPress = () => {
  document.addEventListener('keypress', event => {
    const audio = new Audio(keys[event.key.toUpperCase()])
   audio.play()
  })
}

const icon='<i class="fas fa-drum icon-position "></i>'; 
generateButtons()
generateDisplay()
handleKeyPress()


  

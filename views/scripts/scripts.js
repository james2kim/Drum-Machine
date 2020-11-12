const DOMstrings={
    audioQ:document.querySelector("#Q"),
    audioW:document.querySelector("#W"),
    audioE:document.querySelector("#E"),
    audioA:document.querySelector("#A"),
    audioS:document.querySelector("#S"),
    audioD:document.querySelector("#D"),
    audioZ:document.querySelector("#Z"),
    audioX:document.querySelector("#X"),
    audioC:document.querySelector("#C"), 
    buttonQ:document.querySelector("#Chord-1"),
    buttonW:document.querySelector("#Chord-2"),
    buttonE:document.querySelector("#Chord-3"),
    buttonA:document.querySelector("#Shaker"),
    buttonS:document.querySelector("#Open-HH"),
    buttonD:document.querySelector("#Closed-HH"),
    buttonZ:document.querySelector("#Punchy-Kick"),
    buttonX:document.querySelector("#Side-Stick"),
    buttonC:document.querySelector("#Snare"),
    display:document.querySelector("#display")
  };
  const icon='<i class="fas fa-drum icon-position "></i>'; 
  const signature='<span class="signature">By James2Kim <i class="fas fa-code"></i></span>';
  
  const audioPlayer={
    playQ:function() {
       DOMstrings['audioQ'].play()        
       DOMstrings['display'].innerHTML=`${signature} Chord-1 ${icon}` 
    },
    playW:function() {
      DOMstrings['audioW'].play()
      DOMstrings['display'].innerHTML=`${signature} Chord-2 ${icon}`
    },
    playE:function() {
      DOMstrings['audioE'].play()
      DOMstrings['display'].innerHTML=`${signature} Chord-3 ${icon}`
    },
    playA:function() {
      DOMstrings['audioA'].play()
      DOMstrings['display'].innerHTML=`${signature} Shaker ${icon}`
    },
    playS:function() {
      DOMstrings['audioS'].play()
      DOMstrings['display'].innerHTML=`${signature} Open-HH ${icon}`
    },
    playD:function() {
      DOMstrings['audioD'].play()
      DOMstrings['display'].innerHTML=`${signature} Closed-HH ${icon}`
    },
    playZ:function() {
      DOMstrings['audioZ'].play()
      DOMstrings['display'].innerHTML=`${signature} Punchy-Click ${icon}`
    },
    playX:function() {
      DOMstrings['audioX'].play()
      DOMstrings['display'].innerHTML=`${signature} Side-Stick ${icon}`
    },
    playC:function() {
      DOMstrings['audioC'].play()
      DOMstrings['display'].innerHTML=`${signature} Snare ${icon}`
    } 
  };
  
  
  const onClickEvent=()=>{
    DOMstrings.buttonQ.addEventListener("click",audioPlayer.playQ)
     DOMstrings.buttonW.addEventListener("click",audioPlayer.playW)
     DOMstrings.buttonE.addEventListener("click",audioPlayer.playE)
     DOMstrings.buttonA.addEventListener("click",audioPlayer.playA)
     DOMstrings.buttonS.addEventListener("click",audioPlayer.playS)
     DOMstrings.buttonD.addEventListener("click",audioPlayer.playD)
     DOMstrings.buttonZ.addEventListener("click",audioPlayer.playZ)
     DOMstrings.buttonX.addEventListener("click",audioPlayer.playX)
     DOMstrings.buttonC.addEventListener("click",audioPlayer.playC)
  }
  const onKeypressEvent=()=>{
  document.addEventListener("keydown", (event) =>{
      event.preventDefault();
      if (event.keyCode === 81){
        audioPlayer.playQ()
      } else if(event.keyCode===87){
        audioPlayer.playW()
      } else if(event.keyCode===69){
        audioPlayer.playE()
      } else if(event.keyCode===65){
        audioPlayer.playA()
      } else if(event.keyCode===83){
        audioPlayer.playS()
      } else if(event.keyCode===68){
        audioPlayer.playD()
      } else if(event.keyCode===90){
        audioPlayer.playZ()
      } else if(event.keyCode===88){
        audioPlayer.playX()
      } else if(event.keyCode===67){
        audioPlayer.playC()
      }
     });
    }
  onKeypressEvent();
  onClickEvent();
  
  
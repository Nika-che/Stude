//const title = document.querySelector('.javascript h2')

//window.addEventListener('scroll', () => {
   // console.log('scroll')
    //const size = title.getBoundingClientRect ()
    //if (size.top < window.innerHeight/3) {
      //  title.style.background = 'red'
  //  }
//})

// const controller = new ScrollMagic.Controller()

// const scene = new ScrollMagic.scene({
//     triggerElment: '.git',
//     triggerHook: 0.5,
// }) 

// .addIndecatiors()
// .setClassToggle('git','active')
// .addTo(controller) 

const controller = new ScrollMagic.Controller()
const slides = document.querySelectorAll('.slide')

slides.forEach((slide)=> {
    const revealImg = slide.querySelector('.slide-img-reveal')
    const img = slide.querySelector('img')
    const revealTrxt = slide.querySelector('.slide-text-reveal')

    
})

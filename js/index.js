/**
 * ANIMATIONS
 */

const animationRobot = lottie.loadAnimation({
   container: document.getElementById('animation-revertrobot'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/revert_robot.json' // path to your JSON animation file
});

animationRobot.play();

const animationMonitoring = lottie.loadAnimation({
   container: document.getElementById('animation-247monitoring'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/247monitor.json' // path to your JSON animation file
});

animationMonitoring.play();
/**
 * MODAL HANDLE
 */
const connectModal = document.getElementById('modal-connectwallet')
function openModal() {
   connectModal.style.display = 'block'
   document.body.classList.add('overflowHidden')

}
function closeModal() {
   connectModal.style.display = 'none'
   document.body.classList.remove('overflowHidden')
}



/**
 * ACCORDIONS
 */
const acc = document.getElementsByClassName("accordion");
const featureImg = document.getElementById('feature-img')
for (let i = 0; i < acc.length; i++) {
   acc[i].firstElementChild.addEventListener("click", function () {
      switch (i) {
         case 0:
            if (!acc[0].classList.contains('active')) {
               acc[0].classList.add('active')
            }
            featureImg.src = '../assets/images/mobile_1.png'


            acc[1].classList.remove('active')
            acc[2].classList.remove('active')
            break;
         case 1:
            if (!acc[1].classList.contains('active')) {
               acc[1].classList.add('active')

            }
            featureImg.src = '../assets/images/mobile_2.png'
            acc[0].classList.remove('active')
            acc[2].classList.remove('active')
            break;
         case 2:
            if (!acc[2].classList.contains('active')) {
               acc[2].classList.add('active')
            }
            featureImg.src = '../assets/images/mobile_3.png'
            acc[0].classList.remove('active')
            acc[1].classList.remove('active')
            break;
         default:
            break;
      }
   });
}

/**
 * OPEN MENU
 */
const mobileMenu = document.getElementById('mobile__menu')
function openMenu() {
   mobileMenu.style.display = 'block'
   document.body.classList.add('overflowHidden')
}
function closeMenu() {
   mobileMenu.style.display = 'none'
   document.body.classList.remove('overflowHidden')
}




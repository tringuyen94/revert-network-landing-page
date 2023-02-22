/**
 * PLAY VIDEOXS
 */
const video = document.getElementsByTagName('video')
video[0].play()
video[1].play()
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
 * ANIMATION DYNAMIC PERCENTEAGE
 */
function animate(obj, initVal, lastVal, duration) {
   let startTime = null;

   //get the current timestamp and assign it to the currentTime variable
   let currentTime = Date.now();

   //pass the current timestamp to the step function
   const step = (currentTime) => {

      //if the start time is null, assign the current time to startTime
      if (!startTime) {
         startTime = currentTime;
      }

      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);

      //calculate what to be displayed using the value gotten above
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

      //checking to make sure the counter does not exceed the last value (lastVal)
      if (progress < 1) {
         window.requestAnimationFrame(step);
      } else {
         window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
   };
   //start animating
   window.requestAnimationFrame(step);
}



const dynamics = document.getElementsByClassName("dynamic-percentages__value");
console.log(dynamics)
// animateValue(obj, 100, 0, 5000);

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
// const connectModal = document.getElementById('modal-connectwallet')
// function openModal() {
//    connectModal.style.display = 'block'
//    document.body.classList.add('overflowHidden')

// }
// function closeModal() {
//    connectModal.style.display = 'none'
//    document.body.classList.remove('overflowHidden')
// }



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
            featureImg.src = '../assets/images/feature_1.png'


            acc[1].classList.remove('active')
            acc[2].classList.remove('active')
            break;
         case 1:
            if (!acc[1].classList.contains('active')) {
               acc[1].classList.add('active')

            }
            featureImg.src = '../assets/images/feature_2.png'
            acc[0].classList.remove('active')
            acc[2].classList.remove('active')
            break;
         case 2:
            if (!acc[2].classList.contains('active')) {
               acc[2].classList.add('active')
            }
            featureImg.src = '../assets/images/feature_3.png'
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



/**
 * CREATE A CALENDAR
 * 
 */
// Set the date to 28 days ago
// Set the date to 28 days ago
const today = new Date();
const pastDate = new Date(today.getTime() - 28 * 24 * 60 * 60 * 1000);

// Create an array to hold the previous 28 days
const previous28Days = [];

// Loop through the previous 28 days and add them to the array
for (let i = 0; i < 28; i++) {
   const date = new Date(pastDate.getTime() + i * 24 * 60 * 60 * 1000);
   const element = { date: date, interest: '1.5%' };
   previous28Days.push(element);
}

// Get a reference to the table element in the HTML document
const table = document.getElementById('calendar-table');

// Loop through the array and create table rows for each week
let weekStart = 0;
while (weekStart < previous28Days.length) {
   // Create a table row for the week
   const row = document.createElement('tr');

   // Loop through the next 7 days and create table cells for each day
   for (let i = weekStart; i < weekStart + 7 && i < previous28Days.length; i++) {
      // Create a table cell for the date
      const dateCell = document.createElement('td');
      const dateString = previous28Days[i].date.toLocaleDateString();
      dateCell.textContent = dateString;
      row.appendChild(dateCell);

      // Create a table cell for the interest rate
      const interestCell = document.createElement('td');
      interestCell.textContent = previous28Days[i].interest;
      row.appendChild(interestCell);
   }

   // Add the row to the table
   table.appendChild(row);

   // Move to the next week
   weekStart += 7;
}






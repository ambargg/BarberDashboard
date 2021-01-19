
function highlightNextAppointment() {
    let timeslots = document.querySelectorAll('.timeslot')
    let currentIndex;
    
    for (let index = 0; index < timeslots.length; index++) {
        const timeslot = timeslots[index];
    
        if (timeslot.classList.contains('ongoing')) {
            currentIndex = index;
        }
        
    }
    
    let nextAppt = timeslots[currentIndex + 1]
    
    if (nextAppt) {
        timeslots[currentIndex].classList.remove('ongoing')
        timeslots[currentIndex].classList.add('previous')
        nextAppt.classList.add('ongoing')
    }

}

function initAppointmentHighlighting() {
    const nextAppointmentButton = document.getElementById('showNextAppointment')
    nextAppointmentButton.addEventListener('click', () => {
        highlightNextAppointment()
    });
}

  export { initAppointmentHighlighting };
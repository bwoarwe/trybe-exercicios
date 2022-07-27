
// Style do header
document.getElementsByTagName('header')[0].style.background = 'rgb(0,176,105)'
document.getElementsByTagName('header')[0].style.color = 'white'

// style do emergency-tasks
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255,159,132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksHeaders.length; i++) {
    emergencyTasksHeaders[i].style.backgroundColor = 'rgb(165,0,243)';
}

// Style do noemergency-tasks
const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasksHeaders.length; i++) {
    noEmergencyTasksHeaders[i].style.backgroundColor = 'rgb(35,37,37)'
}

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(249,219,94)'

// style do footer
const footer = document.getElementById('footer-container').style.backgroundColor = 'rgb(0,53,51)'
let currentStep = 1;
const totalSteps = 4; // Adjust based on the number of steps
const totalQuestions = 19; // Total number of questions across all steps
let answeredQuestions = 0;

function startProfileSetup() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('profile-form').style.display = 'block';
    document.querySelector(`.step[data-step="${currentStep}"]`).style.display = 'block';
}

function collectPersonalDetails() {
    const username = prompt("Your name:");
    updateProfile('username', username);
    updateProgress();

    const surname = prompt("Surname:");
    updateProfile('surname', surname);
    updateProgress();

    const age = prompt("Age:");
    updateProfile('age', age);
    updateProgress();

    const gender = prompt("Gender:");
    updateProfile('gender', gender);
    updateProgress();

    const privacy = confirm("Agree with privacy terms:");
    updateProfile('privacy', privacy ? 'Yes' : 'No');
    updateProgress();

    nextStep();
}

function collectVolunteeringInformation() {
    const nationality = prompt("Nationality:");
    updateProfile('nationality', nationality);
    updateProgress();

    const dob = prompt("DOB(DD/MM/YYYY):");
    updateProfile('dob', dob);
    updateProgress();

    const month = prompt("Month of availability :");
    updateProfile('month', month);
    updateProgress();

    const onsite = prompt("Agree with working On-site(If not press cancel):");
    updateProfile('onsite', onsite ? 'Yes' : 'No');
    updateProgress();

    

    nextStep();
}

function collectInterests() {
    const environment = prompt("What interests you about marine environment:");
    updateProfile('environment', environment);
    updateProgress();

    const occupation = prompt("Occupation/Field of study:");
    updateProfile('occupation', occupation);
    updateProgress();

    const cerfication = prompt("Cerfication or Training Experience:");
    updateProfile('cerfication',cerfication );
    updateProgress();

    const opinion = prompt("How do human activities affect marine eco system:");
    updateProfile('opinion',opinion );
    updateProgress();

    nextStep();
}

function collectAvailabilityAndContact() {
    const availability = prompt("Availability for volunteering (min - max hours per week):");
    updateProfile('availability', availability);
    updateProgress();

    const Residence = prompt("Residence:");
    updateProfile('Residence', Residence);
    updateProgress();

    const tel = prompt("Telephone number:");
    updateProfile('tel', tel);
    updateProgress();

    const email = prompt("Email:");
    updateProfile('email', email);
    updateProgress();

    nextStep();
}

function nextStep() {
    if (currentStep < totalSteps) {
        document.querySelector(`.step[data-step="${currentStep}"]`).style.display = 'none';
        currentStep++;
        document.querySelector(`.step[data-step="${currentStep}"]`).style.display = 'block';
    } else {
        document.getElementById('profile-form').style.display = 'none';
        document.getElementById('completion-message').style.display = 'block';
    }
}

function updateProfile(id, value) {
    document.getElementById(`display-${id}`).textContent = `${id.replace('_', ' ').charAt(0).toUpperCase() + id.replace('_', ' ').slice(1)}: ${value}`;
    answeredQuestions++;
}

function updateProgress() {
    const progress = (answeredQuestions / totalQuestions) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function restart() {
    currentStep = 1;
    answeredQuestions = 0;
    document.getElementById('profile-form').style.display = 'block';
    document.getElementById('completion-message').style.display = 'none';
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    document.querySelector('.step[data-step="1"]').style.display = 'block';
    document.getElementById('progress').style.width = '0';
    document.querySelectorAll('#profile-output p').forEach(p => p.textContent = '');
}

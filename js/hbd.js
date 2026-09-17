// ------------------ Loaded Sounds ------------------
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.on("fileload", loadHandler);
createjs.Sound.registerSound('music/bday.mp3', 'bday');

let BDAY_SOUND_INSTANCE = createjs.Sound.play('bday', { volume: 1, loop: -1 });

function loadHandler(event) { 
  console.log("createjs.Sound:", event.id, event.src); 
}

const hbd = document.getElementById('hbd');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const pop = document.getElementById('pop');
const error = document.getElementById('error');

const unlockTime = localStorage.getItem('unlockTime');

// Check if still within 2 minutes
// if (unlockTime && Date.now() - unlockTime < 2 * 60 * 1000) {
//     pop.style.display = 'none';
//     error.style.display = 'none';
//     hbd.classList.add('animate');
//     BDAY_SOUND_INSTANCE && BDAY_SOUND_INSTANCE.play();
// } else {
//     localStorage.removeItem('unlockTime');
// }

submitBtn.addEventListener('click', () => {

    if (password.value === 'kathryn') {
        pop.style.display = 'none';
        error.style.display = 'none';

        // Save unlock time
        // localStorage.setItem('unlockTime', Date.now());

        BDAY_SOUND_INSTANCE && BDAY_SOUND_INSTANCE.play();
        hbd.classList.add('animate');

    } else {
        error.style.display = 'flex';
    }

});

// const resetBtn = document.getElementById('resetBtn');
// // Reset
// resetBtn.addEventListener('click', () => {
//     localStorage.removeItem('unlockTime');

//     pop.style.display = 'flex';
//     error.style.display = 'none';
//     password.value = '';
//     BDAY_SOUND_INSTANCE && BDAY_SOUND_INSTANCE.stop();
// });

const clickme = document.getElementById('clickme');
const voucher = document.getElementById('voucher');

clickme.addEventListener('click', () => {
    voucher.classList.add('show');
});

const closeBtn = document.getElementById('voucher');
closeBtn.addEventListener('click', () => {
    voucher.classList.remove('show');
});

document.addEventListener('contextmenu', e => {
    e.preventDefault();
});

// Disable Inspect Element shortcuts
document.addEventListener('keydown', e => {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
    ) {
        e.preventDefault();
    }
});

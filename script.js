document.addEventListener("DOMContentLoaded", () => {
    
    // Animate the background leaves
    gsap.to("#leaf-container > *", {
        rotation: "random(-15, 15)",      
        transformOrigin: "center center", 
        duration: "random(1, 2)",         
        yoyo: true,                       
        repeat: -1,                       
        ease: "sine.inOut"                
    });

});

// --- Confetti Magic ---
function fireConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.8 },
        colors: ['#ff4d4d', '#7a0026', '#ffb3c6', '#ffffff']
    });
}

// --- Window Management ---
function openWindow(id) {
    document.querySelectorAll('.window').forEach(win => {
        win.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}

function closeWindow(id) {
    document.getElementById(id).classList.add('hidden');
}

// --- GOAT Logic ---
const comments = [
    "Pro Shengha Lover.",
    "Thank you for always being my biggest supporter!",
    "Your wisdom has guided me my whole life.",
    "Best grandpa in the entire world!",
    "I love listening to your stories.",
    "You have the best smile!", 
    "You are the most amazing grandparent anyone could ask for.",
    "Your peak dudeism energy is unmatched."
];

function randomizeComment() {
    const commentElement = document.getElementById('family-comment');
    const randomIndex = Math.floor(Math.random() * comments.length);
    commentElement.innerText = comments[randomIndex];
    
    gsap.fromTo(commentElement, 
        { scale: 0.9, opacity: 0.5 }, 
        { scale: 1, opacity: 1, duration: 0.3 }
    );
}

// --- Moments Toast Logic ---
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    
    gsap.fromTo(toast, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });

    setTimeout(() => {
        gsap.to(toast, { y: -20, opacity: 0, duration: 0.4, onComplete: () => toast.classList.add('hidden') });
    }, 3000);
}

// --- 3D Card Flip Logic ---
function flipCard(card) {
    // This adds the "flipped" class to trigger the 180-degree CSS spin
    card.classList.toggle('flipped');
    
    // Fire the toast notification when they reveal a photo!
    showToast();
}

// --- Taskbar Clock Logic ---
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('clock').innerText = timeString;
}

updateClock();
setInterval(updateClock, 60000);
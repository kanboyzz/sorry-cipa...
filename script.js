// Navigasi Halaman
function openLetter() {
    document.getElementById('envelope-section').classList.add('hidden');
    document.getElementById('envelope-section').classList.remove('active');
    
    document.getElementById('letter-section').classList.remove('hidden');
    document.getElementById('letter-section').classList.add('active');
}

function openBubbleWrap() {
    document.getElementById('letter-section').classList.add('hidden');
    document.getElementById('letter-section').classList.remove('active');
    
    document.getElementById('bubble-section').classList.remove('hidden');
    document.getElementById('bubble-section').classList.add('active');
    
    initBubbles();
}

// Logika Bubble Wrap
const totalBubbles = 20; // 4 baris x 5 kolom seperti di video
let poppedCount = 0;

// Kumpulan pesan rahasia di dalam bubble
const secretMessages = [
    "Sayang Kamuu", "I Always Love You So Much More Than Anything", "Your Mine", "Semangat Sayang!",
    "Senyum Dong", "Jangan Sedih-sedih Sayang", "Bangga Sama Cipa", "Miss You",
    "Jaga Kesehatan Ya Chef", "Cantik Banget!", "Istirahat ya", "Hai Chef",
    "Kamu Keren", "Manis!", "Love You!", "CIPAAAAA",
    "Be Happy", "Semangat SBH Sayang", "SAYAAAAANG", "Good Luck SBH-nya Sayang"
];

function initBubbles() {
    const grid = document.getElementById('bubble-grid');
    grid.innerHTML = '';
    poppedCount = 0;
    updateProgress();
    document.getElementById('final-message').classList.add('hidden');

    for (let i = 0; i < totalBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Buat elemen pesan tersembunyi
        const message = document.createElement('span');
        message.classList.add('bubble-message');
        // Ambil pesan acak
        message.innerText = secretMessages[Math.floor(Math.random() * secretMessages.length)];
        
        bubble.appendChild(message);

        // Event saat bubble diklik
        bubble.addEventListener('click', function() {
            if (!this.classList.contains('popped')) {
                this.classList.add('popped');
                poppedCount++;
                updateProgress();
            }
        });

        grid.appendChild(bubble);
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = (poppedCount / totalBubbles) * 100;
    progressFill.style.width = percentage + '%';

    if (poppedCount === totalBubbles) {
        setTimeout(() => {
            document.getElementById('final-message').classList.remove('hidden');
        }, 500); // Muncul setengah detik setelah bubble terakhir pecah
    }
}

function resetBubbles() {
    initBubbles();
}

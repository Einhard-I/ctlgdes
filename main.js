document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 detik
    
    // Membuat indikator
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Fungsi untuk pergi ke slide tertentu
    function goToSlide(n) {
        currentSlide = n;
        updateSlider();
        resetInterval();
    }
    
    // Fungsi untuk update tampilan slider
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indikator aktif
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Fungsi untuk slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
    
    // Fungsi untuk slide sebelumnya
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    // Fungsi untuk memulai interval otomatis
    function startInterval() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Fungsi untuk mereset interval
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    // Event listeners untuk tombol navigasi
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    // Memulai slider otomatis
    startInterval();
    
    // Pause saat hover (opsional)
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        startInterval();
    });
});


// fungsi card image
function scrollSlider(distance) {
        const slider = document.getElementById('slider');
        slider.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
    // Optional: Auto scroll every 5 seconds
    setInterval(() => {
        scrollSlider(320);
    }, 20000);
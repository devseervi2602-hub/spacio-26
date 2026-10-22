$(document).ready(function () {

    // Workspace Tab Switching
    $('.workspace-tabs button').on('click', function () {
        $('.workspace-tabs button').removeClass('active-tab');
        $(this).addClass('active-tab');

        const type = $(this).data('type');
        console.log('Selected workspace type:', type);

        // You can add logic here to filter results or change content
    });

    // Sub-nav scrolling animation (optional)
    $('.sub-nav .btn').on('click', function () {
        $('.sub-nav').animate({
            scrollLeft: "+=200px"
        }, "slow");
    });

    // Sticky header shadow on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('shadow-sm');
        } else {
            $('header').removeClass('shadow-sm');
        }
    });

    // Simple Search Button Interaction
    $('.search-box-card .btn-danger').on('click', function () {
        const query = $('.search-box-card input[type="text"]').val();
        if (query) {
            alert('Searching for workspaces in: ' + query);
        } else {
            $('.search-box-card input[type="text"]').addClass('is-invalid');
            setTimeout(() => {
                $('.search-box-card input[type="text"]').removeClass('is-invalid');
            }, 2000);
        }
    });

    // Language switch simulation
    $('.lang-login .btn-light:first-child').on('click', function () {
        const text = $(this).text().trim();
        $(this).html('<i class="fas fa-globe me-1"></i> ' + (text === 'EN' ? 'HI' : 'EN'));
    });

    // Reveal Animations on Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
});

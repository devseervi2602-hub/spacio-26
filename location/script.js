$(document).ready(function () {
    // Scroll Reveal Animation
    function reveal() {
        var reveals = document.querySelectorAll(".section-reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // Initial call
    reveal();

    // City Pill Interaction (Visual Only)
    $('.badge').click(function () {
        $('.badge').removeClass('bg-danger-subtle text-danger').addClass('bg-light text-dark border');
        $(this).removeClass('bg-light text-dark border').addClass('bg-danger-subtle text-danger');
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Filter checkbox interaction (Visual Only)
    $('.form-check-input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().find('label').addClass('fw-bold text-danger');
        } else {
            $(this).parent().find('label').removeClass('fw-bold text-danger');
        }
    });
});

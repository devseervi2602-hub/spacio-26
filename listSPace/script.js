$(document).ready(function () {
    // Scroll Reveal Animation
    function reveal() {
        var reveals = $(".reveal");
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
    reveal(); // Initial check

    // Image Preview Handling
    $('.file-input').on('change', function (e) {
        var files = e.target.files;
        $('#imagePreview').empty();

        for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.onload = function (event) {
                $('<img />', {
                    src: event.target.result,
                    class: 'preview-thumb animated fadeIn'
                }).appendTo('#imagePreview');
            }
            reader.readAsDataURL(files[i]);
        }
    });

    // Form Submission Animation
    $('#spaceListingForm').on('submit', function (e) {
        e.preventDefault();

        var $btn = $('#submitBtn');
        var originalText = $btn.html();

        // Disable button and show loader
        $btn.prop('disabled', true);
        $btn.html('<span class="spinner-border spinner-border-sm me-2"></span> Processing Your Listing...');

        // Simulate API call
        setTimeout(function () {
            $btn.removeClass('btn-danger').addClass('btn-success');
            $btn.html('<i class="fas fa-check-circle me-2"></i> Successfully Listed!');

            // Show Success UI
            setTimeout(function () {
                alert('Success! Your space has been submitted for review. Our team will contact you shortly.');
                $('#spaceListingForm')[0].reset();
                $('#imagePreview').empty();

                // Reset button
                $btn.prop('disabled', false);
                $btn.html(originalText);
                $btn.removeClass('btn-success').addClass('btn-danger');
            }, 1500);
        }, 2500);
    });

    // Smooth scroll for anchors
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
});

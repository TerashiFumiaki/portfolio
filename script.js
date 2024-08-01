$(document).ready(function() {
    // Smooth scroll for links
    $('.scroll-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Scroll animation for skill and project items
    function checkVisibility() {
        var windowScroll = $(window).scrollTop() + $(window).height();
        $('.skill-item, .project-item').each(function() {
            var elementOffset = $(this).offset().top;
            if (elementOffset < windowScroll) {
                $(this).addClass('show');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility(); // Trigger on page load
});

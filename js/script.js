$(document).ready(function() {
    // Set Year
    $('#year').text(new Date().getFullYear());

    // Scroll Animation Logic
    function revealSections() {
        $('.reveal').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop + 50) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', revealSections);
    revealSections(); // Trigger on load
});
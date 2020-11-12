$(document).ready(function () {

    function setBorder(getId) {
        $('.link' + getId).css('font-weight', '500');
        console.log("true: " + getId);
    }

    function clearBorder(getId) {
        $('.link' + getId).css('font-weight', '300');
        console.log("false: " + getId);
    }

    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                setBorder(entry.target.classList[0].charAt(4));
            } else {
                clearBorder(entry.target.classList[0].charAt(4));
            }
        })
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    })
});
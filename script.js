window.addEventListener('scroll', function() {
    var element = document.querySelector('.carousel');
    var position = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        element.style.transform = "translateY(0)"; // Thực hiện hiệu ứng khi đến vị trí mong muốn
    } else {
        element.style.transform = "translateY(100px)"; // Trở lại vị trí ban đầu khi đi qua
    }
});

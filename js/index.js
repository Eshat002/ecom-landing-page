
const menu = document.getElementById("menu")
const main_menu_links_container = document.getElementById("main-menu-links-container")


menu.onclick = function (e) {
    main_menu_links_container.classList.toggle("open")

}


const swiper = new Swiper('.swiper', {

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        767.20: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991.20: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        // 640: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        // }
    }
})
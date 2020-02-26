
eventListerners();

function eventListerners() {
    
    let ui = new UI()
    //navbar button
    document.querySelector('.nav__hamburguer').addEventListener('click', function () {
        ui.navbarClick()
    })

    const swiper = document.querySelector('.swiper-container')
    const pagination = document.querySelector('.swiper-pagination')
    const nextBtn = document.querySelector('.swiper-button-next')
    const backBtn = document.querySelector('.swiper-button-prev')
     
    let mySwiper = new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: pagination,
            clickable: true,

        },

        // Navigation arrows
        navigation: {
            nextEl: nextBtn,
            prevEl: backBtn,
        },
        breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            1181:{
                slidesPerView: 3,
              spaceBetween: 1,
            }
          }

        // And if we need scrollbar
        
    })
}


//constructor function UI 
function UI() { };
//UI methods
UI.prototype.navbarClick = function () {
    console.log('entro')

    let value = document.querySelector('.nav__hamburguer')
    let navbar = document.querySelector('.nav__list')
    let container = document.querySelector('.container')

    if (value.classList.contains("change")) {
        console.log('contiene')
        value.classList.remove("change");
        navbar.classList.remove("nav__list--show");
        container.classList.remove("container-mobile")
    } else {
        value.classList.add("change");
        navbar.classList.add("nav__list--show");
        container.classList.add("container-mobile");
    }
}
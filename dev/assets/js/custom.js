const swiperBanner = new Swiper('.swiper-banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
      delay: 6000,
    },
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  const swiperAdv = new Swiper('.swiper-adv', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperDelivery = new Swiper('.swiper-del', {
    speed: 400,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
    navigation: {
      enabled: false,
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',         
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          enabled: true,
        },
      },
      861: {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',         
        },
        
        pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
      },
      1252: {
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',         
        },

        pagination: {
        enabled: false,
        el: '.swiper-pagination',
      }
      } 
    }      
  }); 
  
const listItems =document.querySelectorAll('.list-item');
const navBar = document.querySelectorAll('.navbar');
const logo = document.querySelector('.logo');
const home = document.querySelector('.home');
const categories = document.querySelector('.categories');
const watchlist = document.querySelector('.watchlist');
const slides = document.querySelectorAll('.slide');
const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const catslider1Left = document.querySelector('.catslider1-left');
const catslider1Right = document.querySelector('.catslider1-right');
const catslider2Left = document.querySelector('.catslider2-left');
const catslider2Right = document.querySelector('.catslider2-right');
const catslider3Left = document.querySelector('.catslider3-left');
const catslider3Right = document.querySelector('.catslider3-right');
const catslider4Left = document.querySelector('.catslider4-left');
const catslider4Right = document.querySelector('.catslider4-right');
const catslider5Left = document.querySelector('.catslider5-left');
const catslider5Right = document.querySelector('.catslider5-right');
const catslider6Left = document.querySelector('.catslider6-left');
const catslider6Right = document.querySelector('.catslider6-right');
const dramas = document.querySelectorAll('.dramas');
const sitcoms = document.querySelectorAll('.sitcoms');
const dramedies = document.querySelectorAll('.dramedies');
const thrillers = document.querySelectorAll('.thrillers');
const indsitcoms = document.querySelectorAll('.indsitcoms');
const eatnwatch = document.querySelectorAll('.eatnwatch');
const categoriesCon = document.getElementById('section--1');
const bbcard = document.querySelector('.bbcard');
const gotcard = document.querySelector('.gotcard');
const hotdcard = document.querySelector('.hotdcard');
const twdcard = document.querySelector('.twdcard');
const vikingscard = document.querySelector('.vikingscard');
const darkcard = document.querySelector('.darkcard');
const sopcard = document.querySelector('.sopcard');
const wirecard = document.querySelector('.wirecard');
const theofficecard = document.querySelector('.theofficecard');
const iasipcard = document.querySelector('.iasipcard');
const modfamcard = document.querySelector('.modfamcard');
const communitycard = document.querySelector('.communitycard');
const tbbtcard = document.querySelector('.tbbtcard');
const friendscard = document.querySelector('.friendscard');
const mitmcard = document.querySelector('.mitmcard');
const pnrcard = document.querySelector('.pnrcard');
const theboyscard = document.querySelector('.theboyscard');
const omitbcard = document.querySelector('.omitbcard');
const arrdevcard = document.querySelector('.arrdevcard');
const barrycard = document.querySelector('.barrycard');
const tedlassocard = document.querySelector('.tedlassocard');
const tmkoccard = document.querySelectorAll('.tmkoccard');
const bbcaption = document.querySelector('.bbcaption');
const gotcaption = document.querySelector('.gotcaption');
const twdcaption = document.querySelector('.twdcaption');
const vikingscaption = document.querySelector('.vikingscaption');
const darkcaption = document.querySelector('.darkcaption');
const sopcaption = document.querySelector('.sopcaption');
const hotdcaption = document.querySelector('.hotdcaption');
const wirecaption = document.querySelector('.wirecaption');
const modfamcaption = document.querySelector('.modfamcaption');
const mitmcaption = document.querySelector('.mitmcaption');
const pnrcaption = document.querySelector('.pnrcaption');
const communitycaption = document.querySelector('.communitycaption');
const theofficecaption = document.querySelector('.theofficecaption');
const iasipcaption = document.querySelector('.iasipcaption');
const friendscaption = document.querySelector('.friendscaption');
const tbbtcaption = document.querySelector('.tbbtcaption');
const section1 = document.getElementById('.section--1');
const modal = document.querySelector('.wlcon');
const modalCon = document.querySelector('.wlmodal');
const modalItems = document.querySelector('.wlitems');
const closeModal = document.querySelector('.close-modal');

console.log(categoriesCon);

console.log(dramas);
console.log(navBar);

console.log(slides);

const body = document.querySelector('body');
console.log(body)
let curSlide = 0;
const maxSlide = slides.length;
console.log(maxSlide);
//slides.forEach((s, i) => (s.style.left = '25%'));
//slides.forEach((s, i) => (s.style.transform = `translateX(${103 * i}%)`)); 
const goToSilde = function(slide){
    slides.forEach((s, i) => {
        console.log(s);
        console.log(i);
        s.style.left = '25%';
        s.style.transition = '1000ms';
        s.style.transform = `translateX(${103 * (i - slide)}%)`;
        
        
        
    
    }); 
    
        
    
}
goToSilde(0);




const nextSlide = function(){
    if(curSlide === maxSlide - 1){
        curSlide = 0;

    } else{
        
        curSlide++;
        
    }
    

    goToSilde(curSlide);
    

}

const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide - 1;
    } else{
        curSlide--;
    }

    goToSilde(curSlide);
    
}
btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);
body.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){
        prevSlide();
    }

    if(e.key === 'ArrowRight'){
        nextSlide();
    }

})

catslider1Right.addEventListener('click', function(){
    dramas.forEach((s, i) => {
        s.style.transform = 'translateX(-450%)';
    })

});

catslider1Left.addEventListener('click', function(){
    dramas.forEach((s, i) => {
        s.style.transform = 'translateX(0%)';
    })

});
console.log(sitcoms);
catslider2Right.addEventListener('click', function(){
    sitcoms.forEach((s, i) => {
        s.style.transform = 'translateX(-450%)';
    })

});

catslider2Left.addEventListener('click', function(){
    sitcoms.forEach((s, i) => {
        s.style.transform = 'translateX(0%)';
    })

});

catslider3Right.addEventListener('click', function(){
    dramedies.forEach((s, i) => {
        s.style.transform = 'translateX(-240%)';
    })

});

catslider3Left.addEventListener('click', function(){
    dramedies.forEach((s, i) => {
        s.style.transform = 'translateX(0%)';
    })

});

catslider4Right.addEventListener('click', function(){
    thrillers.forEach((s, i) => {
        s.style.transform = 'translateX(-240%)';
    })

});

catslider4Left.addEventListener('click', function(){
    thrillers.forEach((s, i) => {
        s.style.transform = 'translateX(0%)';
    })

});

catslider5Right.addEventListener('click', function(){
    indsitcoms.forEach((s, i) => {
        s.style.transform = 'translateX(-350%)';
    })

});

catslider5Left.addEventListener('click', function(){
    indsitcoms.forEach((s, i) => {
        s.style.transform = 'translateX(0%)';
    })

});
catslider6Right.addEventListener('click', function(){
    eatnwatch.forEach((s, i) => {
        s.style.transform = 'translateX(-450%)';
    })

});

catslider6Left.addEventListener('click', function(){
    eatnwatch.forEach((s, i) => {
        s.style.transform = 'translateX(0%)';
    })

});





/*slides.forEach((s, i) => {
    s.style.transition = '40s';
    s.style.transform = 'translate(-400%)';
    
});
*/
/*const slideLeft = function(slides){
    
    slides.forEach(function(s, i){
        s.style.transition = '1000ms';
        s.style.transform = 'translateX(50%)';
        
    })

}*/

/*body.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === 'ArrowLeft'){
        if(slides[0] === 0)
        slideLeft(slides);

        
       

        /*slider1.style.transition = '1000ms';
        slider1.style.transform = 'translateX(50%)';

        slider2.style.transform = 'translate(50%)';
        slider2.style.transition = '1000ms';*/

        //slider3.style.transform = 'translate(50%)';
        //slider3.style.transition = '1000ms';


        

    //} else if (e.key === 'ArrowRight'){
        
        /*slider1.style.transition = '1000ms';
        slider1.style.transform = 'translateX(-50%)';

        slider2.style.transform = 'translate(-50%)';
        slider2.style.transition = '1000ms';*/

        //slider3.style.transform = 'translate(-150%)';
        //slider3.style.transition = '1000ms';


  //  }
//})

const hideActive = function(item){
    if(item.classList.contains("active")){
        item.classList.remove("active");
    }
    }

const blurNavBar = function(nav){
    nav.classList.add("blur");
    
    


}

home.addEventListener('click', function(){
    listItems.forEach(function(item){
        hideActive(item);
        
    })
    
    home.classList.add("active");
    
})

categories.addEventListener('click', function(){
    listItems.forEach(function(item){
        hideActive(item);
        
    })
    
    categories.classList.add("active");
});

watchlist.addEventListener('click', function(){
    listItems.forEach(function(item){
        hideActive(item);
        
    })
    
    watchlist.classList.add("active");
})

home.addEventListener('mouseover', function(e){
    
    logo.classList.add("blur");
    categories.classList.add("blur");
    watchlist.classList.add("blur");
})

home.addEventListener('mouseout', function(e){
    
    logo.classList.remove("blur");
    categories.classList.remove("blur");
    watchlist.classList.remove("blur");
})

categories.addEventListener('mouseover', function(e){
    
    logo.classList.add("blur");
    home.classList.add("blur");
    watchlist.classList.add("blur");
})

categories.addEventListener('mouseout', function(e){
    
    logo.classList.remove("blur");
    home.classList.remove("blur");
    watchlist.classList.remove("blur");
})

watchlist.addEventListener('mouseover', function(e){
    
    logo.classList.add("blur");
    home.classList.add("blur");
    categories.classList.add("blur");
})

watchlist.addEventListener('mouseout', function(e){
    
    logo.classList.remove("blur");
    home.classList.remove("blur");
    categories.classList.remove("blur");
})

const smoothScale = function(){
    this.style.transition = '1000ms';
    this.style.scale = '1.3';
    this.style.zindex = '1';
}

const smoothUnscale = function(){
    this.style.transition = '1000ms';
    this.style.scale = '1';
    
    
}

//bbcard.addEventListener('mouseover', smoothScale);
//bbcard.addEventListener('mouseout', smoothUnscale);

/*gotcard.addEventListener('mouseover', smoothScale);
gotcard.addEventListener('mouseout', smoothUnscale);

twdcard.addEventListener('mouseover', smoothScale);
twdcard.addEventListener('mouseout', smoothUnscale);

vikingscard.addEventListener('mouseover', smoothScale);
vikingscard.addEventListener('mouseout', smoothUnscale);

wirecard.addEventListener('mouseover', smoothScale);
wirecard.addEventListener('mouseout', smoothUnscale);

darkcard.addEventListener('mouseover', smoothScale);
darkcard.addEventListener('mouseout', smoothUnscale);

sopcard.addEventListener('mouseover', smoothScale);
sopcard.addEventListener('mouseout', smoothUnscale);

hotdcard.addEventListener('mouseover', smoothScale);
hotdcard.addEventListener('mouseout', smoothUnscale);

theofficecard.addEventListener('mouseover', smoothScale);
theofficecard.addEventListener('mouseout', smoothUnscale);



friendscard.addEventListener('mouseover', smoothScale);
friendscard.addEventListener('mouseout', smoothUnscale);

mitmcard.addEventListener('mouseover', smoothScale);
mitmcard.addEventListener('mouseout', smoothUnscale);



communitycard.addEventListener('mouseover', smoothScale);
communitycard.addEventListener('mouseout', smoothUnscale);


tbbtcard.addEventListener('mouseover', smoothScale);
tbbtcard.addEventListener('mouseout', smoothUnscale);


pnrcard.addEventListener('mouseover', smoothScale);
pnrcard.addEventListener('mouseout', smoothUnscale);

tmkoccard.addEventListener('mouseover', smoothScale);
tmkoccard.addEventListener('mouseout', smoothUnscale);

iasipcard.addEventListener('mouseover', smoothScale);
iasipcard.addEventListener('mouseout', smoothUnscale);

modfamcard.addEventListener('mouseover', smoothScale);
modfamcard.addEventListener('mouseout', smoothUnscale);

*/

categories.addEventListener('click', function(e){
    console.log(e.target);
    const s1coords = categoriesCon.getBoundingClientRect();
    console.log(s1coords);

    //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth',
    });
});

home.addEventListener('click', function(){
    window.scrollTo({
        top: window.top,
        behavior: 'smooth',
    }
        );
})

bbcard.addEventListener('mouseover', function(){
    bbcaption.style.transition = '4000ms';
    bbcaption.style.opacity = 1;

});
bbcard.addEventListener('mouseout', function(){
    bbcaption.style.transition = '1ms';
    bbcaption.style.opacity = 0;

});

bbcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="bb card.png" alt="bbposter">`
);
});

gotcard.addEventListener('mouseover', function(){
    gotcaption.style.transition = '4000ms';
    gotcaption.style.opacity = 1;
});
gotcard.addEventListener('mouseout', function(){
    gotcaption.style.transition = '1ms';
    gotcaption.style.opacity = 0;
   
});
gotcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img src="got card.png" alt="bbposter">`);
});
twdcard.addEventListener('mouseover', function(){
    twdcaption.style.transition = '4000ms';
    twdcaption.style.opacity = 1;

});
twdcard.addEventListener('mouseout', function(){
    twdcaption.style.transition = '1ms';
    twdcaption.style.opacity = 0;

});
twdcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="twd card.png" alt="bbposter">`
);
});
vikingscard.addEventListener('mouseover', function(){
    vikingscaption.style.transition = '4000ms';
    vikingscaption.style.opacity = 1;

});
vikingscard.addEventListener('mouseout', function(){
    vikingscaption.style.transition = '1ms';
    vikingscaption.style.opacity = 0;

});
vikingscaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="vikinds card.png" alt="bbposter">`
);
});

darkcard.addEventListener('mouseover', function(){
    darkcaption.style.transition = '4000ms';
    darkcaption.style.opacity = 1;

});
darkcard.addEventListener('mouseout', function(){
    darkcaption.style.transition = '1ms';
    darkcaption.style.opacity = 0;

});

darkcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="dark card.png" alt="bbposter">`
);
});

sopcard.addEventListener('mouseover', function(){
    sopcaption.style.transition = '4000ms';
    sopcaption.style.opacity = 1;

});
sopcard.addEventListener('mouseout', function(){
    sopcaption.style.transition = '1ms';
    sopcaption.style.opacity = 0;

});

sopcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="sopranos card.png" alt="bbposter">`
);
});


hotdcard.addEventListener('mouseover', function(){
    hotdcaption.style.transition = '4000ms';
    hotdcaption.style.opacity = 1;

});
hotdcard.addEventListener('mouseout', function(){
    hotdcaption.style.transition = '1ms';
    hotdcaption.style.opacity = 0;

});

hotdcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="hotd card.png" alt="bbposter">`
);
});

wirecard.addEventListener('mouseover', function(){
    wirecaption.style.transition = '4000ms';
    wirecaption.style.opacity = 1;

});
wirecard.addEventListener('mouseout', function(){
    wirecaption.style.transition = '1ms';
    wirecaption.style.opacity = 0;

});

wirecaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="thewire card.png" alt="bbposter">`
);
});

communitycard.addEventListener('mouseover', function(){
    communitycaption.style.transition = '4000ms';
    communitycaption.style.opacity = 1;

});
communitycard.addEventListener('mouseout', function(){
    communitycaption.style.transition = '1ms';
    communitycaption.style.opacity = 0;

});

communitycaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="bb card.png" alt="bbposter">`
);
});

mitmcard.addEventListener('mouseover', function(){
    mitmcaption.style.transition = '4000ms';
    mitmcaption.style.opacity = 1;
});
mitmcard.addEventListener('mouseout', function(){
    mitmcaption.style.transition = '1ms';
    mitmcaption.style.opacity = 0;
   
});
mitmcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img src="got card.png" alt="bbposter">`);
});
theofficecard.addEventListener('mouseover', function(){
    theofficecaption.style.transition = '4000ms';
    theofficecaption.style.opacity = 1;

});
theofficecard.addEventListener('mouseout', function(){
    theofficecaption.style.transition = '1ms';
    theofficecaption.style.opacity = 0;

});
theofficecaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="theoffice card.png" alt="bbposter">`
);
});
pnrcard.addEventListener('mouseover', function(){
    pnrcaption.style.transition = '4000ms';
    pnrcaption.style.opacity = 1;

});
pnrcard.addEventListener('mouseout', function(){
    pnrcaption.style.transition = '1ms';
    pnrcaption.style.opacity = 0;

});
pnrcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="pnr card.png" alt="bbposter">`
);
});

modfamcard.addEventListener('mouseover', function(){
    modfamcaption.style.transition = '4000ms';
    modfamcaption.style.opacity = 1;

});
modfamcard.addEventListener('mouseout', function(){
    modfamcaption.style.transition = '1ms';
    modfamcaption.style.opacity = 0;

});

modfamcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="modfam card.png" alt="bbposter">`
);
});

iasipcard.addEventListener('mouseover', function(){
    iasipcaption.style.transition = '4000ms';
    iasipcaption.style.opacity = 1;

});
iasipcard.addEventListener('mouseout', function(){
    iasipcaption.style.transition = '1ms';
    iasipcaption.style.opacity = 0;

});

iasipcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="iasip card.png" alt="bbposter">`
);
});


tbbtcard.addEventListener('mouseover', function(){
    tbbtcaption.style.transition = '4000ms';
    tbbtcaption.style.opacity = 1;

});
tbbtcard.addEventListener('mouseout', function(){
    tbbtcaption.style.transition = '1ms';
    tbbtcaption.style.opacity = 0;

});

tbbtcaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="tbbt card.png" alt="bbposter">`
);
});

friendscard.addEventListener('mouseover', function(){
    friendscaption.style.transition = '4000ms';
    friendscaption.style.opacity = 1;

});
friendscard.addEventListener('mouseout', function(){
    friendscaption.style.transition = '1ms';
    friendscaption.style.opacity = 0;

});

friendscaption.addEventListener('click', function(){
    this.textContent = 'In watchlist ✅';
    modalItems.insertAdjacentHTML('beforeend', `<br><br><img class="" src="friends card.png" alt="bbposter">`
);
});

watchlist.addEventListener('click', function(e){
    console.log(e.target);
    modal.classList.remove("hidden");
});
closeModal.addEventListener('click', function(e){
    modal.classList.add("hidden");
    watchlist.classList.remove("active");
    if(window.pageYOffset === 0){
    home.classList.add("active");
    }
    else {
        categories.classList.add("active");
    }
    
});

const obsCallback = function(entries){
   const [entry] = entries;
   console.log(entry); 
};

const obsOptions = {
    root: null,
    threshold: 0.4,
}

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(categoriesCon);





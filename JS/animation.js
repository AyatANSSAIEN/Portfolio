
var words = [ 'Hi!',' I am a computer science engineer!',
  ' My first "Hello world!" was in 2018, I started learning C language, and I was passionate about solving problems with this "fast" and "easy to learn" language.',
  'In 2019 I created My first web application based on HTML, CSS, JS, PHP and MySQL.','And... the result was better than expected!','Then I learned the basics of Java, that helped me develop many desktop applications using JavaFX and Java Swing...',
  'I didn\'t stop there and tried to learn more about these languages, so I tried to build projects  (Mobile/Web apps) using frameWorks.',' At this level I was working with React JS, Angular Laravel/Liveware and Spring.',
  'Even though I started my journey as a Full Stack Developer,','I still find my self in  analyzing customer needs and developing the Backend part.'
  , 'There is more! But Let\'s stop in there 😜                                         '],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
  speedOut = 10;
  called = false
var wordflick = function () {
  setInterval(function () {
    if (forwards && i<words[i].length) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
         skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset = 0;
      }
    }
    $('.word').text(part);
  }, speed);
};



function scrollToAbout(){
  if(!called){
    console.log("call me")
    wordflick();
  }
  else 
  console.log("called")
  called = true;
}
// $(document).ready(function () {
//   wordflick();
// });
window.onload = function () {
  window.onscroll = function () { 
    console.log(document.body.scrollTop)
    if (document.body.scrollTop > 250) {
      scrollToAbout();
    }
  };
};



$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });


})

//status scrolling
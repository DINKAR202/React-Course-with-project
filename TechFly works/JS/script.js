function gallery(){
    this.index=0;
    this.load=function(){
      this.rootEl = document.querySelector(".gallery");
      this.platform = this.rootEl.querySelector(".platform");
      this.frames = this.platform.querySelectorAll(".each-frame");
      this.contentArea = this.rootEl.querySelector(".content-area");      
      this.width = parseInt(this.rootEl.style.width);
      this.limit = {start:0,end:this.frames.length-1};
      this.frames.forEach(each=>{each.style.width=this.width+"px";});   
      this.goto(this.index);      
    }
    this.set_title = function(){this.rootEl.querySelector(".heading").innerText=this.frames[this.index].getAttribute("title");}
    this.next = function(){this.platform.style.right=this.width * ++this.index + "px";this.set_title();}
    this.prev = function(){this.platform.style.right=this.width * --this.index + "px";this.set_title();}
    this.goto = function(index){this.platform.style.right = this.width * index + "px";this.index=index;this.set_title();}
    this.load();
}
var G = new gallery();
  G.rootEl.addEventListener("click",function(t){
      var val = t.target.getAttribute("action");
      if(val == "next" && G.index != G.limit.end){G.next();}
      if(val == "prev" && G.index != G.limit.start){G.prev();}
      if(val == "goto"){
          let rv = t.target.getAttribute("goto");
          rv = rv == "end" ? G.limit.end:rv;
          G.goto(parseInt(rv));
      }
  });
  document.addEventListener("keyup",function(t){
      var val = t.keyCode;
      if(val == 39 && G.index != G.limit.end){G.next();}
      if(val == 37 && G.index != G.limit.start){G.prev();}
  });

//   Health Concern start

const container = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel > div');
const dots = document.querySelectorAll('.pagination > span');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const breakpoint = 768;
const slidesPerPage = 3;
const totalSlidesCount = slides.length;
// Mobile stuff
let touchStartX = 0;
let touchEndX = 0;

// Previous
prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -slides[0].offsetWidth, behavior: 'smooth' });
  const centerSlideIndex = getCenterSlideIndex() - 1;
  updateActiveDot(centerSlideIndex);
});

// Next
nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: slides[0].offsetWidth, behavior: 'smooth' });
  const centerSlideIndex = getCenterSlideIndex() + 1;
  updateActiveDot(centerSlideIndex);
});

// Mobile
container.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

container.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});

container.addEventListener('touchend', () => {
  let centerSlideIndex;
  const swipeThreshold = 50;
  
  if (touchStartX - touchEndX > swipeThreshold) {
    centerSlideIndex = getCenterSlideIndex() + 1;
  } else {
    centerSlideIndex = getCenterSlideIndex() - 1;
  }
  
  updateActiveDot(centerSlideIndex);
  touchStartX = 0;
  touchEndX = 0;
  
});

// Misc functions
function updateActiveDot(centerSlideIndex) {
  const isMobileView = container.offsetWidth <= breakpoint;
  const dotsCount = isMobileView ? dots.length : dots.length - 2;
  const slidesCount = isMobileView ? 1 : dotsCount - slidesPerPage;
  const pageIndex = centerSlideIndex - slidesCount;
  if (pageIndex >= 0 && pageIndex < dotsCount) {
    dots.forEach((dot) => dot.classList.remove('w-8'));
    dots[pageIndex].classList.add('w-8');
  }
}

function getCenterSlideIndex() {
  const slideWidth = slides[0].offsetWidth;
  const containerWidth = container.offsetWidth;
  const centerSlideIndex = Math.round((container.scrollLeft + Math.floor(containerWidth / 2)) / slideWidth);
  return centerSlideIndex;
}

//   Health Concern End

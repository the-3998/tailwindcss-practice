let dialog = document.querySelector("#nav-dialog");
function handlemenu(){
    dialog.classList.toggle('hidden')
    
}
const initialLtr = -48*4;
const initialRtl = -36*4;
function setIntersectionObserver(element, isLTR, speed){
    const intersetioncallback = (entries)=>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandlar);
        }else{
            document.removeEventListener("scroll", scrollHandlar);
            
        }
        
    }
    const intersectionObserver = new IntersectionObserver(intersetioncallback)
    intersectionObserver.observe(element);

    function scrollHandlar() {

      const translateX =
        (window.innerHeight - element.getBoundingClientRect().top) * speed;


        let totaltranslate = 0;
        if (isLTR) {
            totaltranslate = translateX + initialLtr;
        }else{
            totaltranslate = -(translateX - initialRtl)
        }
      element.style.transform = `translateX(${totaltranslate}px)`;


    }
}
const line1 = document.querySelector("#lines-1");
const line2 = document.getElementById("lines-2");
const line3 = document.getElementById("lines-3");
const line4 = document.getElementById("lines-4");


setIntersectionObserver(line1,true,0.30);
setIntersectionObserver(line2,false,0.30);
setIntersectionObserver(line3, true, 0.30);
setIntersectionObserver(line4, true, 0.7);

function arrRotate(num){
    const arrow = document.querySelector(`#arrow${num}`);
    arrow.classList.toggle("-scale-y-100");
}




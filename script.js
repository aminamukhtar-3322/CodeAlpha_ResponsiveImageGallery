const images=document.querySelectorAll(".gallery img");
const lightbox=document.querySelector(".lightbox");
const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.querySelector(".close");
const nextBtn=document.querySelector(".next");
const prevBtn=document.querySelector(".prev");
const counter=document.getElementById("counter");

const filterButtons=document.querySelectorAll(".buttons button");
const galleryItems=document.querySelectorAll(".image");

let current=0;
// Open Lightbox
function showImage(index){
    current=index;
    lightbox.style.display="flex";
    lightboxImg.src=images[current].src;
    counter.innerText=`${current+1}/${images.length}`;
} 
// Image Click
images.forEach((images,index)=>{
    images.addEventListener("click",()=>{
        showImage(index);
    });
});
// Close
closeBtn.onclick=()=>{
    lightbox.style.display="none";
};
// Next
nextBtn.onclick=()=>{
    current++;
    if(current>=images.length)
        current=0;
    showImage(current);
};
// Previous
prevBtn.onclick=()=>{
    current--;
    if(current<0)
        current=images.length-1;
    showImage(current);
};
// Keyboard Support
document.addEventListener("keydown",(e)=>{
    if(lightbox.style.display==="flex"){
        if(e.key==="ArrowRight")
            nextBtn.click();
        if(e.key==="ArrowLeft")
            prevBtn.click();
        if(e.key==="Escape")
            closeBtn.click();
    }
});
// Close Outside image
lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
});
// Filter images
filterButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");
        const filter=button.dataset.filter;
        galleryItems.forEach(item=>{
            if(filter==="all" || item.classList.contains(filter)){
                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            }
        });
    });
}); 
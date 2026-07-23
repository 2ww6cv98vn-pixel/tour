// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// ==========================
// Contact Form
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    form.reset();

});

// ==========================
// Sticky Header Shadow
// ==========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 5px 15px rgba(0,0,0,.1)";

    }

});

// ==========================
// Scroll Animation
// ==========================

const cards=document.querySelectorAll(".card,.member,.item");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="1s";

observer.observe(card);

});

// ==========================
// Scroll To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

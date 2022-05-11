import Image from 'next/image'
import { useEffect } from 'react';

export default function Atendimentos() {
  let slideIndex = 1;

  function plusSlides(n) {
    return showSlides(slideIndex += n)
  }

  function currentSlide(n){
    return showSlides(slideIndex = n)
  }

  function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  useEffect(() => {
    showSlides(slideIndex);
  })
  return (
    <main>
      <div class="slideshow-container">

        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <Image src="/banner1.jpg" width={1100} height={400}/>
          <div class="text">...</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <Image src="/banner2.jpg" width={1100} height={400}/>
          <div class="text">...</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <Image src="/banner3.jpg" width={1100} height={400}/>
          <div class="text">...</div>
        </div>

        <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br/>

      <div class="ballsSelect" /* style="text-align:center" */>
        <span class="dot" onClick={() => currentSlide(1)}></span>
        <span class="dot" onClick={() => currentSlide(2)}></span>
        <span class="dot" onClick={() => currentSlide(3)}></span>
      </div>
      </main>
  )
}
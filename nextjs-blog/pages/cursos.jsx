import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Cursos() {
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
        }
    )
  return (    
    <main class="main-curso">
        <div class="container-curso">
            <div>
            <h1>Conheça Mais dos Cursos Disponiveis:</h1>
                <div >
                    <section class="container-curso-info">
                        <div class="curso-1">
                            <h3>INFORMÁTICA</h3>
                            <h3>INGLÊS</h3>
                            <h3>EXCEL AVANÇADO</h3>
                            <h3>GESTÃO EMPRESARIAL</h3>
                            <h3>CUIDADOR DE IDOSO</h3>
                            <h3>RECEPCIONISTA EM SERVIÇO DE SAÚDE</h3>
                            <h3>AUXILIAR DE FARMÁCIA</h3>
                            <h3>RECEPCIONISTA AMBULATORIAL</h3>
                        </div>
                        <div class="slides-curso">
                            <div class="slideshow-cursos">
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
                                        <span class="dot" id="dot" onClick={() => currentSlide(1)}></span>
                                        <span class="dot" id="dot" onClick={() => currentSlide(2)}></span>
                                        <span class="dot" id="dot" onClick={() => currentSlide(3)}></span>
                                    </div>
                        </div>
                    </section>
                    <h2>Encontre os melhores cursos e se qualifique para trabalhar em nossas clicnicas ou em seu proprio negocio.</h2>
                </div>
            </div>
        </div>
    </main>
  )
}
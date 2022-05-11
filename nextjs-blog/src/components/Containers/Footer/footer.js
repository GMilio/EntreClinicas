import { Head } from "next/document"
import Image from "next/image"
import footer_javascript from "./footer_javascript"

export default function Footer({}){
    return(

        <footer class="rodape">
            <ul>
                <li>
                    <h5>Trabalhe Conosco</h5>
                </li>    
                <li>
                    <h5>Contato</h5>
                </li>
                <li>
                    <h5> Sobre Nós</h5>
                </li>

            </ul> 
            <ul>
                <li>                  
                    <h5>Voltar para o topo</h5>
                </li>
                <li>
                    <h5>Cadastro</h5>
                </li>
                <li>
                    <h5>Nossos Profissionais</h5>
                </li>
            </ul>
            <ul class="logosapp" >  
                <li>
                    <img src="fb.png" alt="Facebook Logo" /> 
                </li>
                <li>
                    <img src="ig.png" alt="Instagram Logo" />
                </li>

            </ul> 
            </ul>  
            <li>                  
            <button id="back-to-top">Voltar ao topo</button>

            </li>
            

            <li>
                <img class="logo" src="logo.png" alt="Logotipo do Site" />
            </li>
            <li>
                <h6>ENTRECLINICAS © 2022</h6>
            </li>
        </footer>
    )
}
import { Head } from "next/document"
import Image from "next/image"

export default function Footer({}){
    return(

        <footer>
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
                <li>
                    <h5>Cadastro</h5>
                </li>
                <li>
                    <h5>Nossos Profissionais</h5>
                </li>

            </ul>
            <ul>  
                <li>
                    <img src="fb.png" alt="Facebook Logo" /> 
                </li>
                <li>
                    <img src="ig.png" alt="Instagram Logo" />
                </li>
            </ul>  
            <li>                  
                 <h5>Voltar para o topo</h5>
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
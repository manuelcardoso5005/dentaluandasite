const footerArea = document.querySelector('#footer-content');

footerArea.innerHTML = `
    <div id="container">
        <div class="footer-area">
            <div class="footer-sobre">
                <p>
                    <a href="#"><img src="images/logo/logo.png" alt=""></a>
                </p>
                <p class="text">
                    Se precisar de aconselhamento médico especializado, entre em contato conosco na Denterest a qualquer momento. Nossas linhas estão abertas 24 horas por dia, 7 dias por semana.
                </p>
                <p class="adress">
                    <i class="bi bi-telephone-fill"></i>
                    <span> +244 123 456 789</span>
                </p>
                <p class="adress">
                    <i class="bi bi-envelope-fill"></i>
                    <span> suporte@dentaluanda.com</span>
                </p>
                <p>
                    <span>Siga-nos</span>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                </p>
                
            </div>
            <div class="footer-empresa">
                <h3>Empresa</h3>
                <ul>
                    <li><a href="about.html"><i class="bi bi-caret-right-fill"></i>Sobre</a></li>
                    <li><a href="contact.html"><i class="bi bi-caret-right-fill"></i>Contacto</a></li>
                    <li><a href="contact.html"><i class="bi bi-caret-right-fill"></i>Suporte</a></li>
                </ul>
            </div>
            <div class="footer-solition">
                <h3>Soluções</h3>
                <ul>
                    <li><a href="#"><i class="bi bi-caret-right-fill"></i>Termos de Serviço</a></li>
                    <li><a href="#"><i class="bi bi-caret-right-fill"></i>Política de Privacidade</a></li>
                    <li><a href="#"><i class="bi bi-caret-right-fill"></i>FAQ</a></li>
                </ul>
            </div>
            <div class="footer-newsletter">
                <h3>Newsletter</h3>
                <p class="text">Fique por dentro de ofertas especiais, dicas e muito mais.</p>
                <form action="">
                    <input type="email" name="newsemail" id="newsemail" placeholder="Digite o seu email*">
                    <button class="btn">Subscrever-se</button>
                </form>
            </div>
        </div>
        <div class="dev-area">
            <p>© 2024 Dentaluanda, todos direitos reservados</p>
        </div>
    </div>
`
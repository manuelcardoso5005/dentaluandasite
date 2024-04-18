const navMenu = document.querySelector('#nav-menu');

navMenu.innerHTML = `
    <div id="container">
        <a href="#" id="logo"><img src="images/logo/logo.png" alt="Dentaluanda Logotipo"></a>
        <div id="btn-menu"  class="">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul id="menu">
            <li><a href="index.html">Início<div></div></a></li>
            <li><a href="services.html">Serviços<div></div></a></li>
            <li><a href="schedule.html">Agendar<div></div></a></li>
            <li><a href="consult.html">Consultar<div></div></a></li>
            <li><a href="about.html">Sobre<div></div></a></li>
            <li><a href="contact.html">Contacto<div></div></a></li>
        </ul>
        <a href="#" class="cell-phone"><i class="bi bi-telephone-fill"></i><span>+244 123 456 789</span></a>
    </div>
`
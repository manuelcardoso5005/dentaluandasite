const aboutContent = document.querySelector('.about-content');

aboutContent.innerHTML = `
    <figure>
        <img src="images/hospital/banner2.jpg" alt="">
    </figure>
    <div class="about-information">
        <h1 class="title">Praticamos Odontologia Holística e Cuidamos da Saúde Bucal.</h1>
        <p class="text">Essa uma abordagem que considera a saúde bucal como parte integrante e interconectada com a saúde geral do corpo. Busca compreender e tratar os problemas dentários não apenas isoladamente, mas também considerando o impacto que podem ter no bem-estar geral do paciente.</p>
        <ul>
            <li><i class="bi bi-check-circle-fill"></i><span>Tecnologia de ponta para o tratamento oral</span></li>
            <li><i class="bi bi-check-circle-fill"></i><span>Equipa de médicos altamente qualificados</span></li>
            <li><i class="bi bi-check-circle-fill"></i><span>Serviço de emergência Dentária Disponível</span></li>
        </ul>
        <a href="schedule.html" class="btn">Serviços</a>
    </div>
`
const agendarContent = document.querySelector('.agendar-content');

agendarContent.innerHTML = `
    <figure>
        <img src="images/hospital/banner.jpg" alt="">
    </figure>
    <div class="agendar-form">
        <div class="agendar-top">
            <h1 class="title">Agendar uma consulta</h1>
            <p class="text">Digite os seus dados pessoais para agendara consulta</p>
        </div>
        <form action="">
            <div class="form-control">
                <select name="departamento" id="agendar-departamento">
                    <option value="">Escolha o departamento</option>
                    <option value="">a</option>
                    <option value="">a</option>
                    <option value="">a</option>
                    <option value="">a</option>
                </select>
                <input type="text" name="name" id="agendar-name" placeholder="Digite o seu nome">
            </div>
            <div class="form-control">
                <input type="date" name="agendar-data" id="agendar-data">
                <select name="doctor" id="agendar-doctor">
                    <option value="">Escolha o médico</option>
                    <option value="">a</option>
                    <option value="">a</option>
                    <option value="">a</option>
                    <option value="">a</option>
                </select>
            </div>
            <div class="form-control">
                <input type="email" name="email" id="agendar-email" placeholder="Seu email">
                <input type="number" name="telefone" id="agendar-telefone" placeholder="Seu telefone">
            </div>
            <button class="btn">Agendar</button>
        </form>
    </div>
`
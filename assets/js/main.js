const abaSkils = document.querySelector('.app-acordeon-skills');
let visilidadeAbaSkills = true;

abaSkils.addEventListener('click', () => {
    const divHabilidadesProfissionais = document.createElement('div');
    divHabilidadesProfissionais.className = 'app-acordeon-skills-habilidades-profissionais'
    divHabilidadesProfissionais.innerHTML += '<h2>Habilidades Profissionais</h2><br><img src="./assets/img/icons/job.svg">'
    console.log('click')
    abaSkils.appendChild(divHabilidadesProfissionais)
    
    
})
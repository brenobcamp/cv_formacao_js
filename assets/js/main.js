function updateProfileData(profileData) {
    const fotoDePerfil = document.querySelector('.app-header-photo');
    const titulo = document.querySelector('.app-header-title');
    const job = document.querySelector('.app-header-details .job');
    const profileLocation = document.querySelector('.app-header-details .loc');
    const phoneNumber = document.querySelector('.app-header-details .number');
    const email = document.querySelector('.app-header-details .email');
    fotoDePerfil.setAttribute("src", profileData.photo)
    fotoDePerfil.setAttribute("alt", `Foto de ${profileData.name}`)
    titulo.innerHTML += `${profileData.name}`
    job.textContent = profileData.job
    profileLocation.innerHTML = profileData.location
    phoneNumber.innerHTML = `<a href="tel:${profileData.phone}">${profileData.phone}</a>`
    email.innerHTML = `<a href="mailto:${profileData.email}">${profileData.email}</a>`
}

function updateSkills (profileData) {
    const listaHardSkills = profileData.skills.hardSkills
    const ulFerramentas = document.querySelector('#ul-tools')
    
    const listaSoftSkills = profileData.skills.softSkills
    const ulSkills = document.querySelector('#personal-skills')

    listaHardSkills.forEach(element => {
        const newTool = `<li><img src="${element.logo}" alt="${element.name}" title="${element.name}"></li>`
        ulFerramentas.innerHTML += newTool
    });

    listaSoftSkills.forEach(element => {
        const newSkill = `<li>${element}</li>`
        ulSkills.innerHTML += newSkill
    });

}

function updateLanguages(profileData) {
    const languages = document.querySelector('.languages');

    languages.innerHTML = profileData.languages.map(element => {
        return `<li>${element}</li>`
    }).join('')
}

function updatePortfolio (profileData) {
    const ulPortfolio = document.querySelector('.portfolio')
    profileData.portfolio.forEach(element => {
        if (element.github){
            const newItemPortfolio = `<li>
        <h3 class="title github">${element.name}</h3>
        <a href="${element.url}" target="_blank">www.google.com</a>
        </li>`
        ulPortfolio.innerHTML += newItemPortfolio
    } else {
        const newItemPortfolio = `<li>
        <h3 class="title">${element.name}</h3>
        <a href="${element.url}" target="_blank">${element.url}</a>
        </li>`
        ulPortfolio.innerHTML += newItemPortfolio
    }
    })
}

function updateExperiencia (profileData) {
    const ulExperiencia = document.querySelector(".experience");
    profileData.professionalExperience.forEach(element => {
        const newExperiencia = document.createElement("li")
        newExperiencia.innerHTML = `<h3>${element.name}</h3>
        <span class="period">${element.period}</span>
        <p>${element.description}</p>`
        ulExperiencia.appendChild(newExperiencia)

    })

}

(async () =>{
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperiencia(profileData)
    console.log(profileData)
})()
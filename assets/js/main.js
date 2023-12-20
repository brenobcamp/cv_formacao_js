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
}

(async () =>{
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSkills

})()
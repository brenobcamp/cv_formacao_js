async function fetchProfileData() {
    const urlJson = "https://raw.githubusercontent.com/brenobcamp/cv_formacao_js/main/assets/data/profile.json"
    const fetching = await fetch(urlJson)
    return await fetching.json()
}

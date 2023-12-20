async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/brenobcamp/cv_formacao_js/main/assets/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}

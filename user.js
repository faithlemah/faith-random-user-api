async function randomuser(){
    let randomuser = await fetch("https://randomuser.me/api")
    let jsonrandomuser = await randomuser.json()
    let filterrandomuser = jsonrandomuser.results
    let finalrandomuser = filterrandomuser[0]
    let finaluser = `<center><img src="${finalrandomuser.picture.large}"><br><br><strong>${finalrandomuser.name.first}<br>${finalrandomuser.name.last}</strong></center>`
    return document.body.innerHTML = finaluser

    
}


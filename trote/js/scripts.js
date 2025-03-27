function calcular(){
    let mascote, homenagem, leite, kit, suplemento, sangue
    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite"). value
    kit = document.getElementById("kit"). value
    suplemento = document.getElementById("suplemento"). value
    sangue = document.getElementById("sangue"). value
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kit)) + (15 * Number(suplemento)) + (20 * Number(sangue))
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
    }
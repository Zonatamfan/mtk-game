// play.html
let date
let date2
let angka1
let angka2
let span1 = document.getElementById("angka1")
let span2 = document.getElementById("angka2")
let opra = document.getElementById("oprator")
//alert(opra)
let jawabanDisplay = document.getElementById("jawabanDisplay")
let coverjawabanDisplay = document.getElementById("coverjawabanDisplay")
let jawabanPilihan = document.querySelectorAll(".pilihan span h1")
// console.log(jawabanPilihan[2].textContent)
const oprator = ['+', '-', 'X', '/', '%']
let level = 0
let skor = 0
let benarAtauTidak;
let waktu = 15

let jawabanFix = ""

!function play() {
    setSoal()
    let interval = setInterval(() => {
        waktu--
        document.querySelector(".waktu #waktu").innerText = `Sisa ${waktu} detik`
        //benarAtauTidak ? waktu + 10 : waktu - 5
        if (waktu == -1) {
            alert(`Waktu habis || skor mu : ${skor}`)
            //document.querySelector(".cover .habis").setAttribute("style", "width: 100%; height: 100vh;")
            clearInterval(interval)
            document.querySelector('.waktu #waktu').innerText = "Waktu habis"
            window.location.reload()
        }
    }, 1000)
    document.querySelector(".waktu #skor").innerText = `Skor : ${skor}`

}()


// let setUlangAngka = () => {
//     ANGKAUPADTE += 2 * (Math.floor(Math.random()) + parseInt(screen.width));
//     let random = Math.floor(Math.random() + ANGKAUPADTE);
// }

let setJawaban = (ket, jawaban) => {
    console.log(ket == "benar" ? `${ket} jawabannya ${jawaban}` : `${ket} jawabannya ${jawaban}`)
    //coverjawabanDisplay.classList.toggle('display')
    jawabanFix
    if (ket !== "benar") {
        jawabanDisplay.style.color = "red"
        //benarAtauTidak = false
        skor--
        if (skor < 1) {
            skor = 0
        }
        waktu - 5
    } else {
        jawabanDisplay.style.color = "black"
        //benarAtauTidak = true
        skor++
    }



    document.querySelector(".waktu #skor").innerText = `Skor : ${skor}`
    jawabanDisplay.innerText = jawabanFix

    setSoal()


}

let opratorRandom = 0
let cekJawaban = (pilihanPlayer) => {
    //console.log(opra)

    //alert(pilihanPlayer.querySelector('h1').textContent)
    return jawabanFix == pilihanPlayer.querySelector('h1').textContent ? setJawaban("benar", jawabanFix) : setJawaban("salah", jawabanFix)

}
let jawab = (a) => {

}
// akhir play.html

function setSoal() {
    date = new Date()
    date2 = date.getSeconds()
    angka1 = parseInt(Math.random() + Math.random() * (date2 + 4))
    angka2 = parseInt(Math.random() + Math.random() * date2 / 2)


    //jawabanDisplay.innerText = ""
    if (level > 4) {
        level = 0
    }
    if (level == 0) {
        opra.innerText = oprator[level]
    } else if (level == 1) {
        opra.innerText = oprator[level]
    } else if (level == 2) {
        opra.innerText = oprator[level]
    } else if (level == 3) {
        opra.innerText = oprator[level]
    } else {
        opra.innerText = oprator[level]
    }

    console.log(level)
    span1.innerHTML = angka1
    span2.innerHTML = angka2

    switch (opra.textContent) {
        case '+': jawabanFix = angka1 + angka2; break
        case '-': jawabanFix = angka1 - angka2; break
        case 'X': jawabanFix = angka1 * angka2; break
        case '/': jawabanFix = angka1 / angka2; break
        case '%': jawabanFix = angka1 % angka2; break
    }
    if (level == 0) {
        console.log("level " + level)
        jawabanPilihan[0].innerText = jawabanFix - 2
        jawabanPilihan[1].innerText = jawabanFix + 2
        jawabanPilihan[2].innerText = jawabanFix // jawaban fix
        jawabanPilihan[3].innerText = jawabanFix * 2 + 1
        jawabanPilihan[4].innerText = jawabanFix / 2
    } else if (level == 1) {
        console.log("level " + level)
        jawabanPilihan[0].innerText = jawabanFix + 2
        jawabanPilihan[1].innerText = jawabanFix * 2 + 5
        jawabanPilihan[2].innerText = jawabanFix - 2
        jawabanPilihan[3].innerText = jawabanFix // jawabanFix 
        jawabanPilihan[4].innerText = jawabanFix / 2
    } else if (level == 2) {
        console.log("level " + level)
        jawabanPilihan[0].innerText = jawabanFix / 2
        jawabanPilihan[1].innerText = jawabanFix + 2
        jawabanPilihan[2].innerText = jawabanFix - 2
        jawabanPilihan[3].innerText = jawabanFix * 2 + 4
        jawabanPilihan[4].innerText = jawabanFix // jawabanFix
    } else if (level == 3) {
        console.log("level " + level)
        jawabanPilihan[0].innerText = jawabanFix // jawabanFix
        jawabanPilihan[1].innerText = jawabanFix + 2
        jawabanPilihan[2].innerText = jawabanFix - 2
        jawabanPilihan[3].innerText = jawabanFix * 2 + 3
        jawabanPilihan[4].innerText = jawabanFix / 2
    } else if (level == 4) {
        console.log("level " + level)
        jawabanPilihan[0].innerText = jawabanFix // jawabanFix
        jawabanPilihan[1].innerText = jawabanFix + 2
        jawabanPilihan[2].innerText = jawabanFix - 2
        jawabanPilihan[3].innerText = jawabanFix / 2
        jawabanPilihan[4].innerText = jawabanFix * 2 + 3
    }

    return level++
}
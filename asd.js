let userName = prompt("Adınız : ")
let myNameDOM = document.querySelector("#myName")
let myClockDOM = document.querySelector("#myClock")
if(userName.trim()){
    myNameDOM.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`
    let days = [
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
        "Pazar"
    ]
    function showTime(){
        const today = new Date()
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        let day = today.getDay();
        myClockDOM.innerHTML = `${hour} : ${minute} : ${second} ${days[day]}`
        setTimeout(showTime,1000)
    }
    showTime()
}
else{
    alert("Lüten kullanıcı adını giriniz !")
}
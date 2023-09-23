const hour = document.querySelector('.hrs')
const minits = document.querySelector('.min')
const second = document.querySelector('.sec')
function clockRotate(){
    const time = new Date()
    const sec = time.getSeconds()/60
    const min = (sec+time.getMinutes())/60
    const hrs = (min+time.getHours())/12
    hour.style.setProperty('--rotation',hrs*360)
    minits.style.setProperty('--rotation',min*360) 
    second.style.setProperty('--rotation',sec*360)
}
setInterval(clockRotate,1000)
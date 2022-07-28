const ad=document.querySelector('#address')
const city=document.querySelector('.city')
const country=document.querySelector('.country')
const geoName=document.querySelector('.geo-name')
const timeZone=document.querySelector('.timezone')
const btn=document.querySelector('.img-container')
const val=document.querySelector('#text-id')
const isp=document.querySelector('.isp')
// const map=document.querySelector('#map')
// const map1=document.querySelector('#map1')
let map


let latitude;
let longitude;
async function getAPI(ipAddress){
    try{
        const loc=await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fVUjIiiDnf360zxtNxN280LdkBIlG&ipAddress=${ipAddress}`)
        let address=loc.data.ip
        ad.innerHTML=address
        city.innerHTML=loc.data.location.city
        country.innerHTML=loc.data.location.country
        geoName.innerHTML=loc.data.location.geonameId
        timeZone.innerHTML=loc.data.location.timezone
        isp.innerHTML=loc.data.isp
        latitude=loc.data.location.lat
        longitude=loc.data.location.lng
        innerFunc(latitude, longitude)
    }
     catch(e) {
         console.log('in catch')
         console.log(e);
     }
}

function innerFunc(latitude, longitude){
    map=L.map('map').setView([latitude,longitude],17);
 L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Ys6p1wlQaYumdP0K4z4e',
     {
         center: [51.505, -0.09],
         maxZoom: 25,
     attribution:'© OpenStreetMap'
 }).addTo(map);
 let marker=L.marker([latitude, longitude]).addTo(map);
}

async function getIp(){
    const num=await axios.get("https://api64.ipify.org")
    console.log("using default ip", num.data)
    getAPI(num.data)
    btn.addEventListener('click',evt => {
        console.log(evt);
        map.remove()
        const input = evt.path[2].children[0].value;
            console.log("using input", input)
            getAPI(input)
        }
    )
}

getIp()

function loginFormButton(){
    const loginNow = document.getElementById('contact')
    loginNow.style.display='none'
    const countryDivs = document.getElementById('containerDiv')
    countryDivs.style.display='grid'
}
fetch('https://restcountries.com/v2/all')
.then(res=>res.json())
.then(data=>displayNow(data));

const displayNow = countries=>{
    const countryDivs = document.getElementById('containerDiv')
    countryDivs.style.display='none'

     countries.forEach(country => {
                 const countryDiv=document.createElement('div')
        countryDiv.className='country';
        const countryInfo=`
        <h2 class="country-name" >${country.name}</h2>
        <p class="p" >${country.capital}</p>
        <button onclick="displayDetails('${country.name}')" >Details</button>`;
        countryDiv.innerHTML=countryInfo
        countryDivs.appendChild(countryDiv)
        
    });


}

const displayDetails = name =>{
    const url = `https://restcountries.com/v2/name/${name}`
 
    fetch(url)
    .then(res =>res.json())
    .then(data => allDataShow(data[0]))
    const container=document.getElementById('containerDiv')
    container.style.display='none'
    const allDetails = document.getElementById('allShowDetails')
    allDetails.style.display='block'


}
const allDataShow =country =>{

    const countryDiv =document.getElementById('allShowDetails')
    
     countryDiv.innerHTML =`<h2>${country.name}</h2>;
    <p>TimeZone: ${country.timezones}</p>
    <p>NativeName:${country.nativeName}</p>
    <p>population:${country.population}</p>
    <p>subregion:${country.subregion}</p>
    <img src='${country.flag}'>
    <button onclick="backNow()" >back</button>
    <p>developer sushan</p>

    `
    
    

}
function backNow(){
    const allDetails = document.getElementById('allShowDetails')
    allDetails.style.display='none'
    const container=document.getElementById('containerDiv')
    container.style.display='grid'
}
// function doSameTing(){
//     console.log(8552)
// }

// console.log(152)
// console.log(14514)
// setTimeout(doSameTing)
// console.log(15624585)
// setInterval(()=>{
//     console.log('the are not a poor man')
// },2000)

// const data = new Data()
// console.log(data)

// const start = new Date()
// console.log(start)
// sum=0;
// for (let i = 0; i <10000000; i++) {
//     sum++
    
// }
// const end =new Date()
// console.log(end-start, sum)
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>displayNow(data));

const displayNow = countries=>{
    const countryDivs = document.getElementById('containerDiv')
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv=document.createElement('div')
        // const h3=document.createElement('h3')
        // const p=document.createElement('p')
        // h3.innerHTML=country.area;
        // p.innerHTML=country.capital
        // countryDiv.appendChild(h3)
        // countryDiv.appendChild(p)
        countryDiv.className='country';
        const countryInfo=`
        <h2 class="country-name" >${country.timezones}</h2>
        <p class="p" >${country.capital}</p>
        <button>click here</button>
        
        `;
        
        countryDiv.innerHTML=countryInfo
        countryDivs.appendChild(countryDiv)

    }

}
let city_name="Bulandshahr";
let API_key='9553f088b9f7b794edb40b84ff60e6ac';




let geoCodingAPI=(city_name,API_key)=>(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`);

let getWeatherapi=(lat,lon,API_key)=>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
// let promise=fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`)
// console.log(promise);





// async await
// async function getl(city_name,API_key){
//     let data = await(await fetch(geoCodingAPI(city_name, API_key))).json();
//     console.log(data);
//     return [data[0].lat,data[0].lon];
   
    
//     // let lat=data[0].lat;
//     // let lon=data[0].lon;
//     // console.log(lat+" "+lon);
    
// }



//using by promise;

function getWeatherDetails(lat,lon,API_key){
    fetch(getWeatherapi(lat,lon,API_key))
    .then((data)=>{
        console.log(data.json());
    })
    .catch((err)=>{
        console.log(err);
    })
}





function getlocation(city_name,API_key){
    fetch(geoCodingAPI(city_name,API_key))
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
        getWeatherDetails(data[0].lat,data[0].lon,API_key);
    })
    .catch((err)=>{
        console.log(err); 
    })
}
getlocation(city_name,API_key);


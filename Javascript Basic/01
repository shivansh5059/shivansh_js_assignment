const today = new Date();


const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thrusday","Friday","Saturday"];

const dayName = days[today.getDay()];
console.log("Today is : ", dayName);

let Hour= today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const AMPM= Hour>= 12? "PM": "AM";

Hour = Hour%12;
Hour= Hour!=0 ? Hour: 12;


//pad zero in minute and seconds

const padding = (n)=>{
  

    if(n<10){
        n= "0"+n;
    }

    return n;

}
    console.log(`Current time: ${Hour}${AMPM} : ${padding(minutes)} : ${padding(seconds)}`);





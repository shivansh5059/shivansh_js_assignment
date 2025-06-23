for (let year = 2014; year <= 2050; year++) {

    let janFirst = new Date(year, 0, 1); 

    if (janFirst.getDay() === 0) {

        console.log("1st January is Sunday in:", year);
        
    }
}

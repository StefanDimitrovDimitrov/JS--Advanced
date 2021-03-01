function addDestination (){
    let inputsElements = Array.from(document.querySelectorAll('input'))
    let [city, country, summer, authum, winter, spring] = inputsElements
    let season = document.getElementById('seasons')
    let addBtn = document.querySelector('button')
    let tbodyElement = document.getElementById('destinationsList')


    
    function createElement(type, value){


        let element= document.createElement(type)
        if (value.length > 1){
            let[cityName, countryName] = value
            cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1)
            countryName=countryName.charAt(0).toUpperCase() + countryName.slice(1)
            element.innerHTML = cityName+', '+countryName
        }else if(value.length == 1){
            let [seasonName] = value
            seasonName == '' ? '' : seasonName = seasonName.charAt(0).toUpperCase() + seasonName.slice(1)
            element.innerHTML = seasonName
        }
        return element;
    }



    if(city.value == ''||country.value == ''||season.value == ''){
        return;
    }

    let tdCityCountry = createElement('td', [city.value, country.value])
    let tdSeason = createElement('td', [season.value])
    let trElement = createElement('tr',[''])
    trElement.appendChild(tdCityCountry)
    trElement.appendChild(tdSeason)
    tbodyElement.appendChild(trElement)

    season.value == 'summer' ? summer.value ++ : summer.value
    season.value == 'winter' ? winter.value ++ : winter.value
    season.value == 'spring' ? spring.value ++ : spring.value
    season.value == 'autumn' ? authum.value ++ : authum.value

    city.value = ''
    country.value = ''
        
}


// let city = $('.inputData')[0];
// let country = $('.inputData')[1];

// city.value = "Madrid";
// country.value = "Spain";
// $('#seasons').val('spring');

// result();

// city.value = "Berlin";
// country.value = "Germany";
// $('#seasons').val('spring');

// result();

// city.value = "Rome";
// country.value = "Italy";
// $('#seasons').val('summer');

// result();

// city.value = "Bansko";
// country.value = "Bulgaria";
// $('#seasons').val('winter');

// result();

// city.value = "Nea Paramos";
// country.value = "Greece";
// $('#seasons').val('autumn');

// result();

// expect($('#summer').val()).to.equal('1', 'Destinations per Summer season is not updated correctly');
// expect($('#autumn').val()).to.equal('1', 'Destinations per Autumn season is not updated correctly');
// expect($('#winter').val()).to.equal('1', 'Destinations per Winter season is not updated correctly');
// expect($('#spring').val()).to.equal('2', 'Destinations per Spring season is not updated correctly');
// // // a correct destination is successfully added to the table
// // document.body.innerHTML = `
// // <div id="wrapper">
// //         <h1>Holiday Destinations</h1>
// //         <div id="input">
// //             <label>City:</label> <input class="inputData" type="text">
// //             <label>Country:</label> <input class="inputData" type="text">
// //             <label>Season:</label>
// //             <select id="seasons" class="custom-select">
// //                     <option value="summer">Summer</option>
// //                     <option value="autumn">Autumn</option>
// //                     <option value="winter">Winter</option>
// //                     <option value="spring">Spring</option>
// //             </select>
// //             <button class="button" onclick="addDestination()">Add Destination</button>
// //         </div>
// //         <br>

// //         <table id="destinations">
// //             <thead>
// //                 <tr>
// //                     <th>Destination</th>
// //                     <th>Season</th>
// //                 </tr>
// //             </thead>
// //             <tbody id="destinationsList"></tbody>
// //         </table>
// //         <br>

// //         <h3>Destinations for 2018:</h3>
// //         <div id="summaryBox">
// //             <label>Summer:</label><input class="summary" id="summer" type="number" value="0" readonly>
// //             <label>Autumn:</label><input class="summary" id="autumn" type="number" value="0" readonly>
// //             <label>Winter:</label><input class="summary" id="winter" type="number" value="0" readonly>
// //             <label>Spring:</label><input class="summary" id="spring" type="number" value="0" readonly>
// //         </div>
// //         <br>
// //     </div>
// // `;

// // let city = $('.inputData')[0];
// // let country = $('.inputData')[1];

// // city.value = "Madrid";
// // country.value = "Spain";
// // $('#seasons').val('spring');

// // result();

// // expect($('td')[0].innerHTML).to.equal('Madrid, Spain', 'Destination is not added successfully');
// // expect($('td')[1].innerHTML).to.equal('Spring', 'Season is not added successfully');
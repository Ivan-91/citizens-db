let arrHierarchy = (inputArray, name, child) => {
  let outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    let parentName = inputArray[i].groups.find(({ type }) => type === `${name}`)
      .name;
    if (outputArray.some((el) => el.name === parentName)) {
      let idxOfArr = outputArray.findIndex(({ name }) => name === parentName);
      outputArray[idxOfArr].children.push({ child: inputArray[i] });
    } else {
      outputArray.push({
        name: parentName,
        children: [{ child: inputArray[i] }],
        groups: inputArray[i].groups,
        _id: Math.floor(Math.random() * 10000) + parentName
      });
    }
  }
  return outputArray;
};


 // can compose?
//  let streets = arrHierarchy(citizens, 'street', 'user')
//  let districts = arrHierarchy(streets, 'district', 'street')
//  let citiesHierarchy = arrHierarchy(districts, 'city', 'district')

export let inputConfig = (citizens, house, street, district, city, country) => {
  if(!!house && !!street && !!district &&!!city && !!country) {
   let houses = arrHierarchy(citizens, 'house', 'user')
   let streets = arrHierarchy(houses, 'street', 'house')
   let districts = arrHierarchy(streets, 'district', 'street')
   let citiesHierarchy = arrHierarchy(districts, 'city', 'district')
   let countries = arrHierarchy(citiesHierarchy, 'country', 'city')
   return countries
  } else if(!!house && !!street && !!district &&!!city){
   let houses = arrHierarchy(citizens, 'house', 'user')
   let streets = arrHierarchy(houses, 'street', 'house')
   let districts = arrHierarchy(streets, 'district', 'street')
   let citiesHierarchy = arrHierarchy(districts, 'city', 'district')
   return citiesHierarchy
  } else if (!!street && !!district &&!!city) {
   let streets = arrHierarchy(citizens, 'street', 'user')
   let districts = arrHierarchy(streets, 'district', 'street')
   let citiesHierarchy = arrHierarchy(districts, 'city', 'district')
   return citiesHierarchy
  } else if (!!street && !!city) {
   let streets = arrHierarchy(citizens, 'street', 'user')
   let citesStreets = arrHierarchy(streets, 'city', 'street')
   return citesStreets
  }
}
// can compose?
// let streets = arrHierarchy(inputArray, street, user)
// let districts = arrHierarchy(streets, district, street)
// let cities = arrHierarchy(districts, city, district)

// city-street
// let citesStreets = arrHierarchy(streets, city, street)

//  country-city-district-street-house
// let houses = arrHierarchy(inputArray, house, user)
// let countries = arrHierarchy(cities, country, city)

 // city-street
 // let citesStreets = arrHierarchy(streets, 'city', 'street')

 //  country-city-district-street-house
 // let houses = arrHierarchy(citizens, 'house', 'user')
 // let countries = arrHierarchy(citiesHierarchy, 'country', 'city')

export default arrHierarchy;

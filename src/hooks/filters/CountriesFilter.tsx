import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

interface State {
  domains: [],
}

export const CountriesFilter = () => {

  const domains :Array<string> = useSelector((state:State) => state.domains);
  const [countries, setCountries] = useState([] as any)
  
  useEffect(() => {
    let currentcountries = [] as any;

    for(let i = 0; i < domains.length; i++) {
        if (currentcountries.indexOf(domains[i].substring(0,2)) <= 0) {
          currentcountries.push(domains[i].substring(0,2))
        }
      }

      setCountries(currentcountries);
  }, [domains])

  

  return (
    <select name="countries" multiple>
      {countries.map((country :any) => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
  );
};


export default CountriesFilter;
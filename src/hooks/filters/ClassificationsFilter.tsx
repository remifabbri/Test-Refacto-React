import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

interface State {
  domains: [],
}

export const ClassificationsFilter = () => {

  const domains :Array<string> = useSelector((state:State) => state.domains);
  const [classifications, setClassifications] = useState([] as any)
  
  useEffect(() => {
    let currentClassifications = [] as any;

    for(let i = 0; i < domains.length; i++) {
      if (!currentClassifications.includes(domains[i].substring(3,5))) {
        currentClassifications.push(domains[i].substring(3,5));
      }
    }

    setClassifications(currentClassifications);

  }, [domains])

  

  return (
    <select name="classifications" multiple>
      {classifications.map((classification :any) => (
          <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
  );
};


export default ClassificationsFilter;
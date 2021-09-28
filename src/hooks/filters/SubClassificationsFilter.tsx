import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

interface State {
  domains: [],
}

export const SubClassificationsFilter = () => {

  const domains :Array<string> = useSelector((state:State) => state.domains);
  const [subClassifications, setSubClassifications] = useState([] as any)
  
  useEffect(() => {
    let currentSubClassifications = [] as any;

    for(let i = 0; i < domains.length; i++) {
      let flag = false;
      for(let j = 0; j < subClassifications.length; j++) {
        if (subClassifications[j] == domains[i].substring(6)) {
          flag = true
          break;
        }
      }
      if (!flag) {
        if (!currentSubClassifications.includes(domains[i].substring(6))) {
          currentSubClassifications.push(domains[i].substring(6));
        }
      }
    }

    setSubClassifications(currentSubClassifications);

  }, [domains])

  

  return (
    <select name="subClassifications" multiple>
      {subClassifications.map((subClassification: any) => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  );
};


export default SubClassificationsFilter;
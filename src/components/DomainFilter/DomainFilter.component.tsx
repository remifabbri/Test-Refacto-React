import React from 'react';
import { threadId } from 'worker_threads';
import CountriesFilter from '../../hooks/filters/CountriesFilter';
import ClassificationsFilter from '../../hooks/filters/ClassificationsFilter';
import SubClassificationsFilter from '../../hooks/filters/SubClassificationsFilter';


class DomainFilter extends React.Component {

  render() {

    return (<>
      
        <CountriesFilter/>
     
        <ClassificationsFilter/>
    
        <SubClassificationsFilter/>
   
    </>)
  }
}

export default DomainFilter

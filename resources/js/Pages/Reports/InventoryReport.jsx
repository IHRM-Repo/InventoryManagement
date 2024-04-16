import Form from "@/Components/Form";
import Layout from "@/Components/Layout";
import LineChart from "@/Components/LineChart";
import { Head } from '@inertiajs/react';
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import groupBy from 'lodash/groupBy';
import sumBy from 'lodash/sumBy';


const InventoryReport = ({issueDates}) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const newIssueDates = issueDates.map(d => ({...d, issue_amount: parseInt(d.issue_amount, 10)}))
    // console.log(newIssueDates)
    const orderedByMonths = groupBy(newIssueDates, function(element) {
        return element.issue_date.substring(0,7);
    });
    const orderedByYears =  groupBy(orderedByMonths, function(month) {
        return month[0].issue_date.substring(0,4);
    });
    const months = Object.entries(orderedByMonths).map((entry) => {
        const [key, values] = entry;
      
        return {
          name: key,
          total: sumBy(values, 'issue_amount'),
        };
      });
      const years = Object.entries(orderedByYears).map((entry) => {
        const [key, values] = entry  
        const newArray = []
        for(let i = 0; i<=Object.values(orderedByYears).length; i ++) {
          for(let j = 0; j<=values.length; j ++){
            return values[i][j]
          }
        } 

       
        
      
        // return {
        //   name: key,
        //   total: sumBy(values, 'issue_amount'),
        // };
      });

      console.log(years);
      

    
    

    return(
       
          <div className="m-2 bg-white">
            <label for="start">Start date:</label>
            <input type="date" id="start" value={startDate} onChange={e =>setStartDate(e.target.value)}/>
            <label for="end">End date:</label>
            <input type="date" id="end" value={endDate} onChange={e => setEndDate(e.target.value)}/>
            <LineChart/>
          </div>
       
    )
}

export default InventoryReport;
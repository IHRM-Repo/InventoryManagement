import { useState } from "react";
import Table from "@/Components/Table";

const InventoryReport = ({issueDates, returnDates, purchaseDates}) => {
  

  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
  const [endDate, setEndDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])

  const filteredIssueDates = issueDates.filter(d => d.issue_date >= startDate && d.issue_date <= endDate);
  
  return (
  <>
      <div className="grid grid-rows-2 grid-flow-col gap-4 m-2 p-4 ">
        <div className='grid overflow-x-auto bg-white m-2 rounded-md'>
          <h1 className="text-center m-2 text-lg">Issued Items Table</h1>
          <div className='flex flex-col md:flex-row m-2 p-4 gap-4'>
            <div className="flex flex-col gap-2">
            <label htmlFor='filterStartDate'>Start Date</label>
            <input type='date' id='filterStartDate' value={startDate} onChange={e=> setStartDate(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="filterEndDate">End Date</label>
            <input type='date' id='filterEndDate' value={endDate} onChange={e=> setEndDate(e.target.value)}/>
            </div>           
          </div>
         
        
          {filteredIssueDates.length > 0 ?
            <Table dataItems={filteredIssueDates} itemsPerPage={5}/> :
            <p className="text-center">No data to display</p>
          }
        </div>
        <div className='grid overflow-x-auto m-2 bg-white rounded-md'>
          <h1 className="text-center m-2 text-lg">Returned Items Table</h1>
        
          {returnDates.length > 0 ?
            <Table dataItems={returnDates} itemsPerPage={5}/> :
            <p>No data to display</p>
          }
        </div>
        <div className='grid overflow-x-auto m-2 bg-white rounded-md'>
          <h1 className="text-center m-2 text-lg">Purchased Items Table</h1>
        
          {purchaseDates.length > 0 ?
            <Table dataItems={purchaseDates} itemsPerPage={5}/> :
            <p>No data to display</p>
          }
        </div>
      </div>
  </>
    
  )
   
       
  
}

export default InventoryReport;
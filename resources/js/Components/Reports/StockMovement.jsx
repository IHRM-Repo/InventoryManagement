import { useState } from "react";
import Table from "../Table";

const StockMovement = ({ data, header, dateType }) => {
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
    const [endDate, setEndDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])

    const filteredIssueDates = data.filter(d => d[dateType] >= startDate && d[dateType] <= endDate);
    return (
        <div className='grid overflow-x-auto bg-white m-2 rounded-md'>
            <h1 className="text-center m-2 text-lg">{header}</h1>
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
                <p className="text-center mb-4">No data to display</p>
            }
        </div>
        
    )
}

export default StockMovement;
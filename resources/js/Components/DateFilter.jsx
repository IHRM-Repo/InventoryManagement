import { useEffect, useState } from "react";

const DateFilter = ({ data }) => {
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
    const [endDate, setEndDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
    const [data, setData] = useState(data);

    useEffect(() => {
        function filterDates () {
            const filteredDates =  data.filter(d => d.issue_date >= startDate && d.issue_date <= endDate);
            setData(filteredDates)            
        }
    }, [startDate, endDate])

    return data;

   
    return (
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
    )
}
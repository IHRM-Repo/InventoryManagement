import Layout from "@/Components/Layout";
import LineChart from "@/Components/LineChart";
import { Head } from '@inertiajs/react';
import InventoryReport from "./InventoryReport";

const Index = ({issuedStock, returnedStock, purchasedStock}) => {
    // console.log(issuedStock.map(i => i.issue_date.toLocaleString()));

    function getWeekDates() {

        let now = new Date();
        let dayOfWeek = now.getDay(); //0-6
        let numDay = now.getDate();
      
        let start = new Date(now); //copy
        start.setDate(numDay - dayOfWeek);
        start.setHours(0, 0, 0, 0);
      
      
        let end = new Date(now); //copy
        end.setDate(numDay + (7 - dayOfWeek));
        end.setHours(0, 0, 0, 0);
      
        return [start.getTime(), end.getTime()];
      }
    

    function filterDatesByCurrentWeek(dates){
        let [start, end] = getWeekDates();
        return dates.filter(d => +d >= +start && +d < +end);
     }
     const datesArray = []
     issuedStock.map(i => datesArray.push(new Date(i.issue_date).setHours(0, 0, 0)))
    //  console.log(datesArray)
     
     const data = filterDatesByCurrentWeek(datesArray);

   console.log(data.map(d => new Date(d).toLocaleDateString()));
      
    return (
        <div>
            <Head title='Reports'/>
            <Layout children={
               <InventoryReport issueDates={issuedStock}/>
            }/>
        </div>
    )
}

export default Index;
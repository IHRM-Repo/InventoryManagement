import StockMovement from "@/Components/Reports/StockMovement";
import Table from "@/Components/Table";

const InventoryReport = ({issueDates, returnDates, purchaseDates, damagedItems }) => {  
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4 m-2 p-4 ">
        <StockMovement data={issueDates} header='Issued Items Table' dateType='issue_date'/>
        <StockMovement data={returnDates} header='Returned Items Table' dateType='return_date'/>
        <StockMovement data={purchaseDates} header='Purchased Items Table' dateType='purchase_date'/>
        <div className='grid overflow-x-auto bg-white m-2 p-4 rounded-md'>
          {damagedItems.length > 0 ?
            <> 
              <h1 className="text-center m-2">Damaged Items</h1>
              <Table dataItems={damagedItems} itemsPerPage={5}/>
            </>
            :
            <p className="text-center mb-4">No data to display</p>
          }
        </div>
      </div>
    </>    
  )
   
       
  
}

export default InventoryReport;
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import Table from '../Table';

const ViewForm = ({ dates, item}) => {
    console.log(item)
    return(
        <section className='flex flex-col h-screen  w-auto sm:w-2/3 my-4 mx-2 p-2'>
            <div className="mt-3 bg-white rounded-md text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="mt-4 text-base text-center border-b mb-8 border-gray-200 font-semibold leading-6 text-gray-900">
                    View Item
                </h3>
                {item.map((asset, index) =>  
                    <form className="mt-6 space-y-6 m-4 " key={index}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <InputLabel htmlFor="serialNo" value="Serial No" />
                                <TextInput
                                    id="serialNo"
                                    className="mt-1 block w-full"
                                    value={asset.serial_no}                               
                                    disabled                        
                                />
                            </div>                       

                            <div>
                                <InputLabel htmlFor="itemName" value="Item Name" />
                                <TextInput
                                    id="itemName"
                                    className="mt-1 block w-full"
                                    value={asset.item_name}                               
                                    disabled                        
                                />                           
                            </div>                                                               
                        </div>
                    
                        <div className='grid grid-cols-2 gap-6 mt-4'>
                            <div>
                                <InputLabel htmlFor="depreciationRate" value="Depreciation Rate(%)" />
                                <TextInput
                                    id="depreciationRate"
                                    className="mt-1 block w-full"
                                    value={asset.depreciation_rate}                              
                                    disabled                                                            
                                />                          
                            </div>   
                            <div>
                                <InputLabel htmlFor="returnable" value="Returnable" />
                                <TextInput
                                    id="returnable"
                                    className="mt-1 block w-full"
                                    value={asset.returnable ? 'Returnable' : 'Non Returnable'}                              
                                    disabled                                                            
                                />                          
                            </div> 
                        </div>
                        <div className='grid grid-cols-3 gap-4 mt-4'>
                            <div>
                                <InputLabel htmlFor="unit" value="Unit" />
                                <TextInput
                                    id="unit"
                                    className="mt-1 block w-full"
                                    value={asset.unit_name}                              
                                    disabled                                                            
                                />                          
                            </div>  
                            <div>
                                <InputLabel htmlFor="unitSize" value="Unit Size" />
                                <TextInput
                                    id="unit"
                                    className="mt-1 block w-full"
                                    value={asset.unit_measure}                              
                                    disabled                                                            
                                />                          
                            </div>  
                            <div>                            
                                <InputLabel htmlFor="quantity" value="Quantity" />
                                <TextInput
                                    id="quantity"
                                    className="mt-1 block w-full"
                                    value={asset.quantity}
                                    disabled                                        
                                />                            
                            </div>      
                        </div>  
                        {dates.length > 0 ? 
                            <Table dataItems={dates} itemsPerPage={3}/>    :
                            ''
                        }                    
                                                                     
                    </form>                
                )}
               
            </div>
        </section>
    )
}

export default ViewForm;
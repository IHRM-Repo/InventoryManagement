import { useState } from 'react';
import { Transition } from '@headlessui/react'
import { useForm } from '@inertiajs/react';


import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

const EditForm = ({item, units, selectedUnit}) => {
    console.log(item);
    // const unit = selectedUnit.map(data => data.unit)

   
    // const[quantity, setQuantity] = useState('');
    // const[isSelectedVisible, setIsSelectedVisible] = useState({selected: 'default'});
    // const[unitMeasurement, setUnitMeasurement] = useState(unit[0])

    
    // const setSelected = (e) => {
    //     setIsSelectedVisible({selected: e.target.value})
    // }   
      
    // const newQty = (isSelectedVisible.selected === 'purchasing' 
    //                 || isSelectedVisible.selected === 'returning') ? 
    //                     item.quantity + Number(quantity):
    //                         (isSelectedVisible.selected === 'issuing') ?
    //                             item.quantity - Number(quantity) :
    //                             item.quantity

    // const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    //     serialNo: item.serial_no,
    //     itemName: item.item_name,
    //     action: '',
    //     unit: '',
    //     depreciationRate: item.depreciation_rate,
    //     remarks: '',
    //     deliveryDate: '',
    //     returnDate: '',
    //     issueDate: '',
    //     quantity: newQty        
    // });   
   
   
    // const submit = (e) => {
    //     e.preventDefault();
    //     patch(route('item.update', item.id));       
    // };

    return(
        <section className='flex flex-col h-screen bg-white rounded-md w-auto  sm:w-2/3 my-4 mx-2 p-2'>
            {/* <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="mt-4 text-base text-center border-b mb-8 border-gray-200 font-semibold leading-6 text-gray-900">
                    Edit Item
                </h3>
                {item.map((asset, index) =>
                    <form onSubmit={submit} className="mt-6 space-y-6 m-4" key={index}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <InputLabel htmlFor="serialNo" value="Serial No" />
                            <TextInput
                                id="serialNo"
                                className="mt-1 block w-full"
                                value={asset.serial_no}
                                onChange={(e) => setData('serialNo', e.target.value)}
                                isFocused                        
                            />
                            <InputError className="mt-2" message={errors.serialNo} />
                        </div>                       

                        <div>
                            <InputLabel htmlFor="itemName" value="Item Name" />
                            <TextInput
                                id="itemName"
                                className="mt-1 block w-full"
                                value={asset.item_name}
                                onChange={(e) => setData('itemName', e.target.value)}
                                required
                                isFocused                        
                            />
                            <InputError className="mt-2" message={errors.itemName} />
                        </div>                                                               
                    </div>
                    <div className='grid grid-cols-2 gap-6 mt-4'>                       
                        <div>
                            <InputLabel htmlFor="depreciationRate" value="Depreciation Rate(%)" />
                            <TextInput
                                id="depreciationRate"
                                className="mt-1 block w-full"
                                value={asset.depreciation_rate}
                                onChange={(e) => setData('depreciationRate', e.target.value)}
                                isFocused                                                            
                            />
                            <InputError className="mt-2" message={errors.depreciationRate} />
                        </div>   
                        // <div className='w-auto'>
                        //     <InputLabel  htmlFor="action" value="Action" />
                        //     <select className='w-[150px] block mt-2 sm:w-auto rounded-md border-gray-200' value={isSelectedVisible.selected} onChange={setSelected}>
                        //         <option value='default'>Select an Action</option>
                        //         <option value='purchasing'>Purchase</option>
                        //         <option value='issuing'>Issue</option>
                        //         {asset.returnable ? <option value='returning'>Return</option> : '' }
                        //     </select> 
                        //     <InputError className="mt-2" message={errors.category} />                    
                        // </div> 
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3'>
                        {isSelectedVisible.selected === 'returning' ? 
                            <div>
                                <InputLabel  htmlFor="returnDate" value="Return Date" />
                                <input type='date' id='returnDate'className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring mt-1 block w-full" 
                                    name='returnDate'
                                    value={data.returnDate}
                                    onChange={(e) =>setData('returnDate', e.target.value)} />
                                <InputError className="mt-2" message={errors.returnDate} />
                            </div>
                            : isSelectedVisible.selected === 'purchasing' ?
                                <div>
                                    <InputLabel  htmlFor="deliveryDate" value="Delivery Date" />
                                    <input type='date' id='deliveryDate'className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring mt-1 block w-full" 
                                        name='deliveryDate'
                                        value={data.deliveryDate}
                                        onChange={(e) =>setData('deliveryDate', e.target.value)} />
                                    <InputError className="mt-2" message={errors.deliveryDate} />
                                </div> :
                                isSelectedVisible.selected === 'issuing' ?
                                    <div>
                                        <InputLabel  htmlFor="issueDate" value="Issue Date" />
                                        <input type='date' id='issueDate'className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring mt-1 block w-full" 
                                            name='issueDate'
                                            value={data.issueDate}
                                            onChange={(e) =>setData('issueDate', e.target.value)} />
                                        <InputError className="mt-2" message={errors.issueDate} />
                                    </div> :
                                    ''
                        } 
                        {unit ?
                        <div className={`${isSelectedVisible.selected === 'default' ? 'hidden' : 'block'}`}>
                            <InputLabel  htmlFor="unit" value="Unit" />
                             
                            <select className='block sm:w-3/4 mt-2 rounded-md border-gray-200' value={unitMeasurement} onChange={(e) => setUnitMeasurement(e.target.value)}>
                                <option value=''>Select unit</option>
                                {units.map((u, index) =>                                 
                                    <option key={index} value={u.unit}>{u.unit}</option>
                                )}
                            </select>                         
                        </div>  :
                        ''
                        }                   


                        <div className={isSelectedVisible.selected === 'default' ? 'hidden' : 'block'}>                            
                            <InputLabel htmlFor="quantity" value="Quantity" />
                            <TextInput
                                id="quantity"
                                className="mt-1 block w-full"
                                value={asset.quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                                isFocused                        
                            />
                            <InputError className="mt-2" message={errors.quantity} /> 
                        </div>  
                       
                    </div>

                    <div>
                        <InputLabel className='block' htmlFor="remarks" value="Remarks" />
                        <textarea id="remarks" name='remarks' className='w-full' value={asset.remarks} onChange={(e) =>setData ('remarks', e.target.value)}/>
                        <InputError className="mt-2" message={errors.remarks} />
                    </div>   
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-between sm:px-6">
                        <button
                            type="button"
                            onClick={submit}
                            className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:ml-3 sm:w-auto"
                        >
                            Update
                        </button>                    
                    </div>
                    <div className='flex justify-end'>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Updated.</p>
                        </Transition>
                    </div>
                </form> 
                )}

       
            </div> */}
        </section>
    )
}

export default EditForm;
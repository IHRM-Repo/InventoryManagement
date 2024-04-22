import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react';

import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

const AddItemFormModal = ({ isOpen, onClose, categoryOptions, subCategoryOptions }) => {
    const cancelButtonRef = useRef(null) 

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        serialNo: '',
        itemName: '',
        category: '',
        subCategory: '',
        quantity: '',
        depreciationRate: '',
        remarks: '',
        returnable: false,
        deliveryDate: '',
        purchaseAmount: '',
        location: '',
        acquired: '',
        type: '',
        condition: '',        
    });

    const subCategoryOption = subCategoryOptions.filter(subCategory => subCategory.category_id == data.category);

    
    const submit = (e) => {
        e.preventDefault();
        post(route('item.store'));
        onClose()
    };

    return(
        <>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
        
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="px-4 pt-5 sm:p-6">
                                        <div className="sm:flex sm:items-start">                                            
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base text-center border-b mb-8 border-gray-200 font-semibold leading-6 text-gray-900">
                                                    Add New Store Item
                                                </Dialog.Title>
                                                <form onSubmit={submit} className="mt-6 space-y-6 m-4">
                                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                        <div>
                                                            <InputLabel htmlFor="serialNo" value="Serial No" />
                                                            <TextInput
                                                                id="serialNo"
                                                                className="mt-1 block w-full"
                                                                value={data.serialNo}
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
                                                                value={data.itemName}
                                                                onChange={(e) => setData('itemName', e.target.value)}
                                                                required
                                                                isFocused                        
                                                            />

                                                            <InputError className="mt-2" message={errors.itemName} />
                                                        </div>                                                               
                                                    </div>
                                                    <div className='grid grid-cols-2 gap-6 mt-4'>
                                                        <div className='mt-6 sm:mt-0'>
                                                            <InputLabel htmlFor="deliveryDate" value="Delivery Date" />
                                                            <input type='date' id='deliveryDate'className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring mt-1 block w-full" 
                                                                name='deliveryDate'
                                                                value={data.deliveryDate}
                                                                onChange={(e) =>setData('deliveryDate', e.target.value)} />
                                                            <InputError className="mt-2" message={errors.deliveryDate} />
                                                        </div>  
                                                                           
                                                        <div>
                                                            <InputLabel htmlFor="depreciationRate" value="Depreciation Rate(%)" />
                                                            <TextInput
                                                                id="depreciationRate"
                                                                className="mt-1 block w-full"
                                                                value={data.depreciationRate}
                                                                onChange={(e) => setData('depreciationRate', e.target.value)}
                                                                isFocused                                                            
                                                            />
                                                            <InputError className="mt-2" message={errors.depreciationRate} />
                                                        </div>   
                                                        <div className='w-auto mt-14 sm:mt-6'>
                                                            <select className='w-[150px] sm:w-auto rounded-md border-gray-200' value={data.category} onChange={(e) => setData('category', e.target.value)}>
                                                                <option value=''>Select a Category</option>
                                                                {categoryOptions.map((category, index) =>                                 
                                                                    <option key={index} value={category.id}>{category.category_name}</option>
                                                                )}
                                                            </select> 
                                                            <InputError className="mt-2" message={errors.category} />                    
                                                        </div>   
                                                        <div className='w-auto mt-14 sm:mt-6'>
                                                            <select className='w-[150px] sm:w-auto rounded-md border-gray-200' value={data.subCategory} onChange={(e) => setData('subCategory', e.target.value)}>
                                                                <option value=''>Select a Sub Category</option>
                                                                {subCategoryOption.map((subCategory, index) =>                                 
                                                                    <option key={index} value={subCategory.id}>{subCategory.sub_category_name}</option>
                                                                )}
                                                            </select> 
                                                            <InputError className="mt-2" message={errors.subCategory} />                    
                                                        </div>   
                                                        
                                                        
                                                       
                                                         
                                                        <div>
                                                            <InputLabel htmlFor="quantity" value="Quantity" />
                                                            <TextInput
                                                                id="quantity"
                                                                className="mt-1 block w-full"
                                                                value={data.quantity}
                                                                onChange={(e) => setData('quantity', e.target.value)}
                                                                required
                                                                isFocused                        
                                                            />
                                                            <InputError className="mt-2" message={errors.quantity} /> 
                                                        </div>   
                                                        <div className='space-x-2 mt-10'>
                                                            <input type='checkbox' checked={data.returnable} onChange={e => setData('returnable', e.target.checked)} className='border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' value={data.returnable} />
                                                            <InputLabel className='mt-4 text-xs sm:text-md' htmlFor="returnable" value="Is this item returnable?" />
                                                        </div> 
                                                    </div>
                                                    <div>
                                                        <InputLabel className='block' htmlFor="remarks" value="Remarks" />
                                                        <textarea id="remarks" name='remarks' className='w-full' value={data.remarks} onChange={(e) =>setData ('remarks', e.target.value)}/>
                                                        <InputError className="mt-2" message={errors.remarks} />
                                                    </div>   
                                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-between sm:px-6">
                                                        <button
                                                            type="button"
                                                            className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:ml-3 sm:w-auto"
                                                            onClick={submit}
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                            onClick={onClose}
                                                        >
                                                            Cancel
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
                                                            <p className="text-sm text-gray-600">Saved.</p>
                                                        </Transition>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>                                   
                                    
                                    
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
 
}

export default AddItemFormModal;

import Chart from '@/Components/Chart';
import Table from '@/Components/Table';
import InputError from '@/Components/InputError';
import AddItemFormModal from './Modals/AddItemFormModal';

import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const Dashboard = ({ store, chartData, units, message }) => { 
    const [ addNewItemBtn, setAddNewItemBtn ] = useState(false)  
    const [ isAlertVisible, setIsAlertVisible] = useState(false)
    const [ searchFilterItems, setSearchFilterItems ] = useState([store])
    const [ searchParam, setSearchParam ] = useState('')
    const [ filterParam, setFilterParam ] = useState('')


    const { data, setData, post, errors, progress } = useForm({
        file: null
    })
      

    const lowStoreItemsBtns = ['add', 'view']      
    const storeItemsBtns = ['add', 'view', 'delete']

    useEffect(() => {
        if(message) {
            setIsAlertVisible(true)
            setTimeout(() => {
                setIsAlertVisible(false)
            }, 5000)
        }

    }, [message])

    // finding sum of quantity of store items by category
    // const chartData = store.reduce((object, item) => {
    //     let category = item.category;
    //     let quantity = item.quantity;
    //     if (!object.hasOwnProperty(category)) {
    //       object[category] = 0;
    //     }
        
    //     object[category] += quantity;
    //     return object;
    // }, {});
   
    const handleAddItemModal = () => {
        setAddNewItemBtn(true)
    }

    const handleAddItemModalClose = () => {
        setAddNewItemBtn(false)
    }

    //retrieving categories of store items
    const categories = []
    store.forEach(item => {
        categories.push(item.category)       
    })

    //setting unique category options from the categories array
    const categoryOptions = [...new Set(categories)]

    const search = (items) => {
        if(filterParam !== '' && searchParam !== '') {
            return items.filter(item => item.category === filterParam && item.item_name.toLowerCase().startsWith(searchParam.trim().toLowerCase()))
        }
        else if(filterParam !== '') {
            return items.filter(item => item.category === filterParam)
        }else if(searchParam !== '') {
            const result = items.filter(item => item.item_name.toLowerCase().startsWith(searchParam.trim().toLowerCase()))
            if(result.length > 0) {
                return result
            }
            return []
        }
        return items;
    }

   

  
   
    const submit = (e) => {
        e.preventDefault();
        // console.log('uploaded')
        post(route('excel.upload'))
    }
      
    return(
        <section className='flex flex-col  my-4 mx-2 p-2 '>
            <div className={`bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3 ${isAlertVisible ? 'block' : 'hidden'}`} role="alert">
                <p className="font-bold">Informational message</p>
                <p className="text-sm">{message}</p>
            </div>

            <div className="flex flex-col bg-white rounded-md lg:flex-row gap-4">
                <Chart chartItems={chartData}/>
                <div className='mt-12 mx-8 mb-4'>
                    <h2 className='text-center'>Items Below 10</h2>
                    <hr className='mx-4 border-2 border-black  mb-4'></hr>
                   {/* <div className='grid overflow-x-auto'>
                       {lowStore.length > 0 ?
                        <Table dataItems={lowStore} actionItems={lowStoreItemsBtns} itemsPerPage={2}/> :
                        <p>No data to display</p>
                        }
                   </div>                                                       */}
                </div>
            </div>

            <div className='mt-4 bg-white rounded-md p-4'>
                <h2 className='text-center text-lg'>Items in Store</h2>
                <div className='flex flex-col gap-4 sm:flex-row justify-between mx-2'>                    
                        <div className='flex flex-row gap-2'>
                            <select 
                                className='w-1/2 rounded-md border-gray-200'
                                placeholder='filter by category'
                                onChange={e => setFilterParam(e.target.value)}
                                >
                                <option value={''}>filter by category</option>
                                {categoryOptions.map((category, index) =>
                                    <option key={index} value={category}>{category}</option>
                                )}
                            </select>
                            <input 
                                className='rounded-md border-gray-200'
                                type='search'
                                placeholder='search'
                                value={searchParam}
                                onChange={(e) => setSearchParam(e.target.value)}
                            ></input>     
                        </div>
                    
                    <button onClick={handleAddItemModal} className='bg-blue-500 text-md py-2 px-4 rounded-md text-white float-right font-semibold shadow-sm hover:bg-blue-400'>Add New Item</button>
                </div> 
                <div className='flex flex-col gap-4 justify-between my-4 mx-2 lg:flex-row'>
                    <form onSubmit={submit}  className='flex flex-col gap-2'>
                        <input type='file' onChange={e => setData('file', e.target.files[0])}/>
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <InputError className="mt-2" message={errors.file} />
                        <button 
                            className='justify-center rounded-md bg-blue-500 p-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400'
                            type='submit'
                        >
                            Upload file
                        </button>
                    </form>
                    
                </div>     
           
                <div className='grid overflow-x-auto'>
                    {store.length > 0 ? 
                        <Table dataItems={search(store)} actionItems={storeItemsBtns} itemsPerPage={10}/>
                        :<p>No data available.</p>
                    } 
                </div>
               
                {/* <AddItemFormModal isOpen={addNewItemBtn} onClose={handleAddItemModalClose} categoryOptions={categoryOptions} units={units}/> */}
            </div>

        </section>
    )
}
export default Dashboard;
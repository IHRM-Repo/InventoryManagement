import { PencilSquareIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import Pagination from '@/Components/Pagination';
import Modal from '@/Components/Modal';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const Table = ({dataItems, itemsPerPage, actionItems=null}) => { 
    const [currentPage, setCurrentPage] = useState(1)     
    const [deleteItemBtn, setDeleteItemBtn] = useState({id: '', isOpen: false})

   
    const handleDeleteItemModal = (id) => {
        setDeleteItemBtn({
            id: id,
            isOpen: true
        })
    }

    const handleDeleteItemModalClose = () => {
        setDeleteItemBtn({
            id: '',
            isOpen: false
        })
    }
    
    //Format table headers
    const formatHeaders = dataItems.length > 0 ? Object.keys(dataItems[0]).map((tableHeader) => {
        const splitWord = tableHeader.split('_')
        return splitWord.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");
      
    }) : []

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = dataItems.length > 0 ? dataItems.slice(startIndex, endIndex) : [];

    // console.log(currentItems.map(c => delete c?.id))
    // console.log(currentItems)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }  

    const pageCount = Math.ceil(dataItems.length / itemsPerPage)

    // const filteredHeaders = formatHeaders.filter(header => header !== 'Id')  
   
   
    return (       
        <>
            {dataItems.length ?
                <div className='rounded-md'>
                    <table className="table-auto overflow-x-auto">
                        <thead className='border-b mb-8 border-gray-200'>
                            <tr>
                            {formatHeaders.map((header, index) => 
                                <th key={index} className='text-left md:px-4'>{header}</th>
                            )}
                            {actionItems ? <th className='text-left px-6'>Actions</th> : '' }
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((data, index) => (
                                <tr key={index} className='odd:bg-white even:bg-slate-200'>
                                    {Object.values(data).map((item, index) => (
                                        <td className='md:px-6' key={index}>{item}</td>
                                    ))}

                                    {actionItems ? 
                                    actionItems.map((action, index) => (
                                        <td className="px-0 md:px-10" key={index}>
                                            {
                                                (action === 'add') ?
                                                    <Link  href={route('item.edit', data.id)}>
                                                        <PencilSquareIcon className="w-5"  aria-hidden="true"  />
                                                    </Link> :
                                                    (action === 'view') ?
                                                        <Link  href={route('item.show', data.id)}>
                                                            <EyeIcon className="w-5"  aria-hidden="true"  />
                                                        </Link> 
                                                        :
                                                        <TrashIcon className="w-5" aria-hidden="true" onClick={() => handleDeleteItemModal(data.id)} />
                                            }
                                        </td>

                                    ))
                                    : ''}                                                                    
                                </tr>
                            ))}               
                        </tbody>
                    </table>    
                    <Pagination onPageChange={handlePageChange} current={currentPage} pageCount={pageCount}/>  
                    <Modal isOpen={deleteItemBtn.isOpen} id={deleteItemBtn.id}  onClose={handleDeleteItemModalClose} modalType={'deleteItem'}/>
                </div>            
            
                : <p className='text-center my-4'>No data available</p>
            }
        </>
           
        
           
    )            
}

export default Table;


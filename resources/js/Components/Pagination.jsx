import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ onPageChange, current, pageCount }) => {
   
    //calculate total number of pages
    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    }
    
    return (    

        <div className="flex items-center justify-between border-t mt-8 border-gray-200 bg-white px-4 py-3 sm:px-6">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white disabled:bg-gray-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" type='button' disabled={current === 1} onClick={() => handlePageClick(current -1)}>Previous</button>
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white disabled:bg-gray-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" disabled={current === pageCount} onClick={() => handlePageClick(current + 1)}>Next</button>              
        </div>
    )
}

export default Pagination;
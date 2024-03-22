
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Dialog, Transition } from '@headlessui/react';

const DeleteItemModal = ({id, onClose}) => {
    const {  delete:destroy } = useForm();

   
   
    const submit = (e) => {
        e.preventDefault();     
        destroy(route('item.destroy', id));
        onClose();
    };

    
    return (
        <div className='m-4'>          
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">                
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Delete  Item
                </Dialog.Title>
            </div>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Are you sure you want to delete this item? This item will be permanently deleted.
                        This action cannot be undone.
                    </p>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={submit}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                   
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
        </div>
    );
}

export default DeleteItemModal;

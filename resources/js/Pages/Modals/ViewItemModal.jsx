
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Dialog, Transition } from '@headlessui/react';

const ViewItemModal = ({ className = '' }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        serialNo: ''
    });

    const submit = (e) => {
        e.preventDefault();

        // patch(route('profile.update'));
    };

    
    return (
        <>          
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">                
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    View Item
                </Dialog.Title>
            </div>
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="serialNo" value="Serial No" />

                        <TextInput
                            id="serialNo"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('serialNo', e.target.value)}
                            required
                            isFocused
                           
                        />

                        <InputError className="mt-2" message={errors.serialNo} />
                    </div>

                   

                

                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processing}>Save</PrimaryButton>

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
        </>
    );
}

export default ViewItemModal;

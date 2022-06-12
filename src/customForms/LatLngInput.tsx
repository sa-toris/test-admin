import * as React from 'react';
import { useController, useForm } from 'react-hook-form';
import {
    Edit,
    SimpleForm,
    TextInput,
    EditButton,
    SelectInput,
    AutocompleteArrayInput,
    ArrayInput,
    SimpleFormIterator,
    Labeled,
    useInput,
} from 'react-admin';

import PassengerField from './PassengerField';

const LatLngInput = () => {
    const { watch } = useForm();
    const watchAllFields = watch();
    return (
        <span>
            {/* <PassengerField />
            <PassengerField /> */}
            <div>
                {watchAllFields ? (
                    <>
                        <pre>{JSON.stringify(watchAllFields, null, 2)}</pre>
                    </>
                ) : (
                    ''
                )}
            </div>
        </span>
    );
};

export default LatLngInput;

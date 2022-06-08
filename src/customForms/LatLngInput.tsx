import * as React from 'react';
import { useController } from 'react-hook-form';
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
    return (
        <span>
            <PassengerField />
            <PassengerField />
        </span>
    );
};

export default LatLngInput;

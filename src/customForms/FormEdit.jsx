import { Stack } from '@mui/material';
import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    EditButton,
    SelectInput,
    AutocompleteArrayInput,
    AutocompleteInput,
    ArrayInput,
    SimpleFormIterator,
    FormDataConsumer,
    ReferenceInput,
    ArrayField,
    FunctionField,
    useInput,
    Form,
    SaveButton,
    Grid,
} from 'react-admin';
import LatLngInput from './LatLngInput';

const FormEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />

            <ArrayInput source="value">
                <SimpleFormIterator disableReordering>
                    {/* <LatLngInput /> */}
                    <TextInput source="passengerField" />
                    <ReferenceInput
                        label="Author"
                        source="value_id"
                        reference="value"
                    >
                        <SelectInput optionText="passengerField" />
                    </ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default FormEdit;

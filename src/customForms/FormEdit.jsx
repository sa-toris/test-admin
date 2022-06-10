import { Stack } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    ArrayInput,
    SimpleFormIterator,
    BooleanInput,
    SaveButton,
    FunctionField,
} from 'react-admin';
import { useFormState } from 'react-hook-form';

import ShowState from './ShowState';

const postSave = data => {
    alert(JSON.stringify(data));
};
// const { dirtyFields } = useFormState({
//     data,
// });

const FormEdit = () => (
    <Edit>
        <SimpleForm toolbar={false} onSubmit={postSave} id="create_form">
            <TextInput source="title" />

            <ArrayInput
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}
                source="posts"
            >
                <SimpleFormIterator disableReordering>
                    {/* Компонеты берут данные напрямую с сервера и помещают их в SelectInput */}
                    {/* <ReferenceInput
                        label="Passenger Field"
                        source="posts"
                        reference="posts"
                    >
                        <SelectInput optionText="passengerField" />
                    </ReferenceInput>
                    <ReferenceInput
                        label="transactionField"
                        source="transactionField"
                        reference="posts1"
                    >
                        <SelectInput optionText="transactionField" />
                    </ReferenceInput> */}

                    <SelectInput
                        defaultValue="firstName1"
                        optionValue="id"
                        optionText="name"
                        source="passengerField"
                        choices={[
                            { id: 'firstName', name: 'FirstName' },
                            { id: 'firstName1', name: 'FirstName1' },
                            { id: 'firstName2', name: 'FirstName2' },
                        ]}
                    />
                    <SelectInput
                        defaultValue="data1"
                        optionValue="id"
                        optionText="name"
                        source="transactionField"
                        choices={[
                            { id: 'data', name: 'Data' },
                            { id: 'data1', name: 'Data1' },
                            { id: 'data2', name: 'Data2' },
                        ]}
                    />
                </SimpleFormIterator>
            </ArrayInput>

            <BooleanInput label="Активно" source="active" />
            <SaveButton label="Сохранить" form="create_form" />
        </SimpleForm>
        &nbsp;
        <p>{postSave}</p>
        <ShowState>
            <p>{postSave}</p>
        </ShowState>
    </Edit>
);

export default FormEdit;

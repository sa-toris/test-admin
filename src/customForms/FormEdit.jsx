import * as React from 'react';

import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    ArrayInput,
    SimpleFormIterator,
    BooleanInput,
    SaveButton,
    ReferenceInput,
} from 'react-admin';
import { Button } from '@mui/material';

const postSave = data => {
    const past = document.getElementById('ciResponseText');

    past.innerHTML = JSON.stringify(data, null, 2).replace(/\n( *)/g, function (
        match,
        p1
    ) {
        return '<br>' + '&nbsp'.repeat(p1.length);
    });
};

const FormEdit = () => (
    <Edit>
        <SimpleForm toolbar={false} onSubmit={postSave} id="create_form">
            <TextInput source="title" />

            <ArrayInput source="value" label="">
                <SimpleFormIterator
                    resource="posts"
                    disableReordering
                    removeButton={
                        <Button variant="text" color="error">
                            Удалить
                        </Button>
                    }
                    addButton={<Button variant="text">Добавить правило</Button>}
                >
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
                    </ReferenceInput>
                    <SelectInput /> */}

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
                        sx={{
                            position: 'relative',
                            bottom: 84,
                            left: 200,
                        }}
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
        <pre id="ciResponseText"></pre>
    </Edit>
);

export default FormEdit;

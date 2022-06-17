import * as React from 'react';
import { useState } from 'react';
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
    AutocompleteInput,
} from 'react-admin';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
        <MySimpleForm></MySimpleForm>
        &nbsp;
        <pre id="ciResponseText"></pre>
    </Edit>
);

export default FormEdit;

const MySimpleForm = ({}) => {
    const useStyle = makeStyles(() => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& section': {
                display: 'flex',
                flexDirection: 'row !important',

                '& :nth-child(2)': {
                    marginLeft: '10px',
                },
            },
        },
    }));

    const iteratorClasses = useStyle();

    return (
        <SimpleForm toolbar={false} onSubmit={postSave} id="create_form">
            <TextInput source="title" />

            <ArrayInput source="value" label="">
                <SimpleFormIterator
                    className={iteratorClasses.root}
                    disableReordering
                    removeButton={
                        <Button variant="text" color="error">
                            Удалить
                        </Button>
                    }
                    addButton={<Button variant="text">Добавить правило</Button>}
                >
                    {/* <ReferenceInput source="passengerField" reference="posts">
                        <SelectInput
                            defaultValue="firstName1"
                            optionText="passengerField"
                            optionValue="passengerField"
                        />
                    </ReferenceInput>
                    <ReferenceInput
                        source="transactionField"
                        reference="posts1"
                    >
                        <SelectInput
                            defaultValue="data1"
                            optionText="transactionField"
                            optionValue="transactionField"
                        />
                    </ReferenceInput> */}
                    <AutocompleteInput
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
                    <AutocompleteInput
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
    );
};

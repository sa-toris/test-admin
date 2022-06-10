import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const FormList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="title" />
            <TextField source="active" />
        </Datagrid>
    </List>
);

export default FormList;

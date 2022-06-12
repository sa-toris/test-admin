import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const FormList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
        </Datagrid>
    </List>
);

export default FormList;

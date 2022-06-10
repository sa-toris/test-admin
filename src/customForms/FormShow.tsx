import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    RichTextField,
    Datagrid,
} from 'react-admin';
import { Card } from '@mui/material';

const FormShow = () => (
    <Show>
        <Card>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="posts2" />

                <TextField source="title" />
                <TextField source="active" />
            </SimpleShowLayout>
        </Card>
    </Show>
);

export default FormShow;

import * as React from 'react';
import {
    Datagrid,
    Edit,
    EditButton,
    NumberField,
    Labeled,
    ReferenceManyField,
    SimpleForm,
    TextInput,
    useTranslate,
    useRecordContext,
} from 'react-admin';
import { Card, CardContent } from '@mui/material';
import ThumbnailField from '../products/ThumbnailField';
import ProductRefField from '../products/ProductRefField';
import { Category } from '../types';

const ShowState = () => (
    <Card
        sx={{
            display: { xs: 'none', md: 'block' },
            order: -1,
            width: '15em',
            mr: 2,
            alignSelf: 'flex-start',
        }}
    >
        <CardContent sx={{ pt: 1 }}>Результат</CardContent>
    </Card>
);

export default ShowState;

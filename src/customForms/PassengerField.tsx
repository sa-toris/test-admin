import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const passenger = [
    { passengerField: 'firstName' },
    { passengerField: 'firstName1' },
    { passengerField: 'firstName2' },
];

const PassengerField = () => {
    const defaultProps = {
        options: passenger,
        getOptionLabel: (option: PassOptionType) => option.passengerField,
    };

    const [value, setValue] = React.useState<PassOptionType | null>(null);
    return (
        <Autocomplete
            {...defaultProps}
            id="controlled-demo"
            value={value}
            onChange={(event: any, newValue: PassOptionType | null) => {
                setValue(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Passenger Field"
                    variant="standard"
                />
            )}
        />
    );
};

interface PassOptionType {
    passengerField: string;
}
const transaction = [
    { transactionField: 'transactionTypeId' },
    { transactionField: 'transactionTypeId1' },
    { transactionField: 'transactionTypeId2' },
];

export default PassengerField;

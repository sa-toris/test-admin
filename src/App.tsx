import * as React from 'react';
import { Admin, CustomRoutes, Resource, ListGuesser } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Route } from 'react-router';
import fakeDataProvider from 'ra-data-fakerest';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import { lightTheme } from './layout/themes';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';
import dataProviderFactory from './dataProvider';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';

import FormEdit from './customForms/FormEdit';
import FormList from './customForms/FormList';

const dataProvider = fakeDataProvider({
    posts: [
        { id: 2 },
        // { passengerField: 'firstName' },
        // { passengerField: 'firstName1' },
        // { passengerField: 'firstName2' },
    ],
    // posts1: [
    //     { transactionField: 'data' },
    //     { transactionField: 'data111' },
    //     { transactionField: 'data2' },
    // ],
    posts2: [],
});

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// const i18nProvider = polyglotI18nProvider(locale => {
//     if (locale === 'fr') {
//         return import('./i18n/fr').then(messages => messages.default);
//     }

//     // Always fallback on english
//     return englishMessages;
// }, 'en');

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <CustomRoutes>
                {/* <Route path="/customForms" element={<CustomEdit />} /> */}
            </CustomRoutes>

            <Resource name="posts" list={FormList} edit={FormEdit} />
        </Admin>
    );
};

export default App;

{
    /* <Admin
title=""
dataProvider={
		(dataProviderFactory(process.env.REACT_APP_DATA_PROVIDER || ''),
		dataProvider)
}
authProvider={authProvider}
dashboard={Dashboard}
loginPage={Login}
layout={Layout}
i18nProvider={i18nProvider}
disableTelemetry
theme={lightTheme}
>
<CustomRoutes>
		<Route path="/configuration" element={<Configuration />} />
		<Route path="/segments" element={<Segments />} />

		<Route path="/customForms" element={<CustomEdit />} />
</CustomRoutes>
<Resource name="customers" {...visitors} />
<Resource
		name="commands"
		{...orders}
		options={{ label: 'Orders' }}
/>
<Resource name="invoices" {...invoices} />
<Resource name="products" {...products} />
<Resource name="categories" {...categories} />
<Resource name="reviews" {...reviews} />
<Resource name="users" list={CustomEdit} />
</Admin> */
}

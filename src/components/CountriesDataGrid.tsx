import React, { useEffect, useState } from 'react';
import DataGrid from 'react-data-grid';
import { ICountriesDataGridProps, ICountryDataGrid } from '../interfaces';

export const CountriesDataGrid = (props: ICountriesDataGridProps): React.ReactElement => {
    const [countriesData, setCountriesData] = useState<Map<string, ICountryDataGrid>>(props.countriesDataGridData);

    useEffect(() => {        
        props.getCountriesData();
        setCountriesData(props.countriesDataGridData);
    }, [props.countriesDataGridData]);

    const columns = [
        { key: 'country', name: 'COUNTRY' },
        { key: 'region', name: 'REGION' }
    ];

    const getCountriesDataGridRows = (): ICountryDataGrid[] => {        
        let rows: ICountryDataGrid[] = [];
        countriesData && countriesData.size > 0 &&
            countriesData.forEach((value) => {
                rows.push({ country: value.country, region: value.region });
            });
        return rows;
    }

    return (
        countriesData && <DataGrid columns={columns} rows={getCountriesDataGridRows()}></DataGrid>
    );

}
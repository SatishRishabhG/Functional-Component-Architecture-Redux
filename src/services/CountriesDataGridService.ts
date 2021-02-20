import { ICountriesDataGridService, ICountriesDataGridResponse } from '../interfaces';
import { GetCountryDataGridDataInMapFormat } from './CountryDataGridOperations';

export class CountriesDataGridService implements ICountriesDataGridService {
    public async getCountriesDataGridData(): Promise<ICountriesDataGridResponse | void> {
        return await fetch("https://api.first.org/data/v1/countries")
            .then(response => response.json())
            .then((response) => {
                return GetCountryDataGridDataInMapFormat(response.data);
            });
    }
}
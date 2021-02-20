import { ICountryDataGrid, ICountriesDataGridResponse } from "../interfaces";

export const GetCountryDataGridDataInMapFormat = (response: any): ICountriesDataGridResponse => {
    let mapCountriesResponse: Map<string, ICountryDataGrid> = new Map<string, ICountryDataGrid>();

    Object.entries(response).forEach((key: any, value: any) => {
        mapCountriesResponse.set(key[0], key[1]);
    });

    return {
        countriesDataGridData: mapCountriesResponse
    };
}
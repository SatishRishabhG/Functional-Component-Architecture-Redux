import { ICountryDataGrid } from "./ICountryDataGrid";

export interface ICountriesDataGridState {
    countriesDataGridData: Map<string, ICountryDataGrid>;
    isLoading: boolean;
    hasErrorOccured: boolean;
    failureMessage: string;
}
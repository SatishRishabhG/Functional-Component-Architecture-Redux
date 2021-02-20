import { ICountryDataGrid } from "./ICountryDataGrid";

export interface ICountriesDataGridProps {
    countriesDataGridData: Map<string, ICountryDataGrid>;
    getCountriesData: () => void;
}
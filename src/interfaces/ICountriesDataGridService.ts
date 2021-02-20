import { ICountriesDataGridResponse } from "./ICountriesDataGridResponse";

export interface ICountriesDataGridService {
    getCountriesDataGridData(): Promise<ICountriesDataGridResponse | void>;
}
import { Action } from "redux";
import { BaseAction } from "../common";
import { ICountryDataGrid } from '../interfaces';

export const COUNTRIES_DATAGRID_DATA_REQUEST = 'COUNTRIES_DATAGRID_DATA_REQUEST';
export const COUNTRIES_DATAGRID_DATA_SUCCESS = 'COUNTRIES_DATAGRID_DATA_SUCCESS';
export const COUNTRIES_DATAGRID_DATA_FAILURE = 'COUNTRIES_DATAGRID_DATA_FAILURE';

export interface ICountriesDataGridDataRequestAction extends Action<string> {
    type: string;
}
export interface ICountriesDataGridDataSuccessAction extends BaseAction<{ countriesDataGridData: Map<string, ICountryDataGrid>[] }> { };

export interface ICountriesDataGridDataFailureAction extends BaseAction<{ failureMessage: string }> { };

export const countriesDataGridDataRequestAction = (): ICountriesDataGridDataRequestAction => ({
    type: COUNTRIES_DATAGRID_DATA_REQUEST
});

export const countriesDataGridDataSuccessAction = (countriesDataGridData: Map<string, ICountryDataGrid>[]): ICountriesDataGridDataSuccessAction => ({
    type: COUNTRIES_DATAGRID_DATA_SUCCESS,
    payload: { countriesDataGridData: countriesDataGridData }
});

export const countriesDataGridDataFailureAction = (failureMessage: string): ICountriesDataGridDataFailureAction => ({
    type: COUNTRIES_DATAGRID_DATA_FAILURE,
    payload: { failureMessage: failureMessage }
});
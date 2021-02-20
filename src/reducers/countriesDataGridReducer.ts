import { BaseAction } from "../common";
import { ICountriesDataGridState } from "../interfaces";
import {
    COUNTRIES_DATAGRID_DATA_FAILURE, COUNTRIES_DATAGRID_DATA_REQUEST,
    COUNTRIES_DATAGRID_DATA_SUCCESS
} from "../actions";
import { CreateCountryDataGridState } from '../services'


export const countriesDataGridReducer = (
    state: ICountriesDataGridState = CreateCountryDataGridState(),
    action: BaseAction<any>): ICountriesDataGridState => {
    switch (action.type) {
        case COUNTRIES_DATAGRID_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                hasErrorOccured: false,
                failureMessage: ""
            };

        case COUNTRIES_DATAGRID_DATA_SUCCESS:
            return {
                countriesDataGridData: action.payload.countriesDataGridData.countriesDataGridData,
                failureMessage: "",
                hasErrorOccured: false,
                isLoading: false
            };

        case COUNTRIES_DATAGRID_DATA_FAILURE:
            return {
                ...state,
                failureMessage: action.payload.failureMessage,
                hasErrorOccured: true,
                isLoading: false
            }

        default:
            return state;
    }
}
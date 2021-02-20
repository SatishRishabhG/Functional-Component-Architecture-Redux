import { call, put } from 'redux-saga/effects';

import { countriesDataGridDataSuccessAction, countriesDataGridDataFailureAction } from "../actions";
import { ICountriesDataGridService } from "../interfaces";
import { CountriesDataGridService } from "../services/CountriesDataGridService";


export function* countriesDataGridSaga(countriesDataGridService: ICountriesDataGridService = new CountriesDataGridService()) {
    try {
        const data = yield call(countriesDataGridService.getCountriesDataGridData);
        yield put(countriesDataGridDataSuccessAction(data));
    }
    catch(error) {
        yield put(countriesDataGridDataFailureAction(error));
    }
}
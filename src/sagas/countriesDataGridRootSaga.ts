import { takeLatest } from "redux-saga/effects";

import { countriesDataGridDataRequestAction } from "../actions";
import { countriesDataGridSaga } from "./countriesDataGridSaga";

export const countriesDataGridRootSaga = [takeLatest(countriesDataGridDataRequestAction, countriesDataGridSaga)];
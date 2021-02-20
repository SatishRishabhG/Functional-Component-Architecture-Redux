import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CountriesDataGrid } from '../components';
import { ICountriesDataGridState, ICountryDataGrid } from '../interfaces';
import { countriesDataGridDataRequestAction } from '../actions';

interface IStateProps {
    countriesDataGridData: Map<string, ICountryDataGrid>;
}

interface IDispatchProps {
    getCountriesData: () => void;
}
const mapStateToProps = (state: ICountriesDataGridState): IStateProps => {
    return {
        countriesDataGridData: state.countriesDataGridData
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        getCountriesData: () => dispatch(countriesDataGridDataRequestAction())
    };
}

const ContainerCountriesDataGrid = (props: IStateProps & IDispatchProps): React.ReactElement => (
    <CountriesDataGrid {...props} />
);

export const ConnectContainerCountriesDataGrid =
    connect(mapStateToProps, mapDispatchToProps)(ContainerCountriesDataGrid);
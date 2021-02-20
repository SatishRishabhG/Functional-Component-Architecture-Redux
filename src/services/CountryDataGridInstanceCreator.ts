import { ICountriesDataGridState, ICountryDataGrid } from "../interfaces"

export const CreateCountryDataGridState = (): ICountriesDataGridState => {
    return {
        isLoading: false,
        hasErrorOccured: false,
        failureMessage: "",
        countriesDataGridData: new Map<string, ICountryDataGrid>()
    }
}
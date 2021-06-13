import { typesUi } from '../types/typesUi';

export const setError = ( err ) => ({
    type: typesUi.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: typesUi.uiRemoveError
});

export const startLoading = () => ({
    type: typesUi.uiStartLoading
})
export const finishLoading = () => ({
    type: typesUi.uiFinishLoading
})
export const setSectionName = (sectionName) => ({
    type: typesUi.uiSetSectionName,
    payload: sectionName
})

export const getLoaderState = (state: ReduxStore) => {
    return state.status.isLoading;
}
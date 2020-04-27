export const setLoaderStatus = (status: boolean): StatusActionType => ({
    type: '@@STATUS/IS_LOADING',
    payload: status
  });
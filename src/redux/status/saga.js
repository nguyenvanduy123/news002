import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* watchSamplestatus()
{

    yield takeEvery(actions.FETCH_GET_STATUS, function* (payload)
    {
        
        try {
            const response = yield call(() =>
                factories.fetchSamplestatus(payload),
            );

            yield put({
                type: actions.FETCH_GET_STATUS_SUCCESS,
                payload: response,
            });
          
        } catch (error) {

        } finally {
        }
    });
    
}


export default function* AppSaga()
{
    yield all([
        fork(watchSamplestatus),
        
    ]);
}

import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* fetchcode()
{

    yield takeEvery(actions.FETCH_GET_CODE, function* (payload)
    {
        
        try {
            const response = yield call(() =>
                factories.fetchcode(payload),
            );

            yield put({
                type: actions.FETCH_GET_CODE_SUCCESS,
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
        fork(fetchcode),
      
    ]);
}

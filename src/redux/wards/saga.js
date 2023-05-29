import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* watchWards()
{

    yield takeEvery(actions.FETCH_GET_WARDS, function* (payload)
    {
        
        try {
            const response = yield call(() =>
                factories.fetchWardsDaTa(payload),
            );

            yield put({
                type: actions.FETCH_GET_WARDS_SUCCESS,
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
        fork(watchWards),
        
       
    ]);
}

import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* watchCategory()
{

    yield takeEvery(actions.FETCH_GET_CATE, function* (payload)
    {
        
        try {
            const response = yield call(() =>
                factories.fetchgetcategory(payload),
            );

            yield put({
                type: actions.FETCH_GET_CATE_SUCCESS,
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
        fork(watchCategory),
      
        // fork(watchGetData),
    ]);
}

import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';



function* watchGetData(){
    yield takeEvery(actions.FETCH_GET_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.fetchSupplier(payload),
            );
           
            yield put({
                type: actions.FETCH_GET_DATA_SUCCESS,
                payload:response.data,
            })
        }catch(error){

        }finally{

        }
    });
}
function* watchGetUpdateData(){
    yield takeEvery(actions.FETCH_UPDATE_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.updateSupplier(payload),
                
            );
            console.log(response);
            yield put({
                type: actions.FETCH_UPDATE_DATA_SUCCESS,
                payload:response.data,
            })
        }catch(error){

        }finally{

        }
    });
}
function* watchPUTSTATUSData(){
    yield takeEvery(actions.FETCH_PUTSATUS_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.putstatussupplier(payload),
                
            );
          //  console.log(response.data);
            yield put({
                type: actions.FETCH_PUTSATUS_DATA_SUCCESS,
                payload:response.data,
            })
        }catch(error){

        }finally{

        }
    });
}
function* watchPUTDataid(){
    yield takeEvery(actions.FETCH_GET_DATA_ID, function* (payload){
        try{
            const response = yield call(()=>
                factories.putgetdataid(payload),
                
            );
           
            yield put({
                type: actions.FETCH_GET_DATA_ID_SUCCESS,
                payload:response.data,
            })
        }catch(error){

        }finally{

        }
    });
}
function* watchaddposstdata(){
    yield takeEvery(actions.FETCH_ADD_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.postaddgetdata(payload),
                
            );
            // console.log(response.data);
            yield put({
                type: actions.FETCH_ADD_DATA_SUCCESS,
                payload:response.data,
            })
        }catch(error){

        }finally{

        }
    });
}
function* watchdeleteposstdata(){
    yield takeEvery(actions.FETCH_POSTDELETE_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.postdeletegetdata(payload),
                
            );
          //  console.log(response.data);
            yield put({
                type: actions.FETCH_POSTDELETE_DATA_SUCCESS,
                payload:response.data,
            })
        }catch(error){

        }finally{

        }
    });
}
function* watchsearchpostdata(){
    yield takeEvery(actions.FETCH_GETSEARCH_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.postsearchpostdata(payload),
                
            );
            console.log(response.search);
            yield put({
                type: actions.FETCH_GETSEARCH_DATA_SUCCESS,
                payload:response.search,
            })
        }catch(error){

        }finally{

        }
    });
}
export default function* AppSupplier()
{
    yield all([
        
        fork(watchGetData),
        fork(watchGetUpdateData),
        fork(watchPUTSTATUSData),
        fork(watchPUTDataid),
        fork(watchaddposstdata),
        fork(watchdeleteposstdata),
        fork(watchsearchpostdata),
    ]);
}

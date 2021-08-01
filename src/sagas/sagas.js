import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import {api} from '../services/api'

function* getHocsinh(action) {
    try {
        console.log(action);
     } catch (e) {
        console.log(e);
    }
 }
 
 export function* WatchHocsinhDataHome() {
    yield takeEvery(actions.getDataHocsinhs, getHocsinh);
  }




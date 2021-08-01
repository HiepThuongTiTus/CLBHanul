import {all,call} from "redux-saga";
import {WatchHocsinhDataHome} from '../sagas'
export default function* rootSaga(){
    yield all(
        [
            call(WatchHocsinhDataHome)
        ]
    );
}
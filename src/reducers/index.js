import {combineReducers} from 'redux';
import photosReducer from 'reducers/photos';

const rootReducer = combineReducers({
	photos: photosReducer,
});

export default rootReducer;

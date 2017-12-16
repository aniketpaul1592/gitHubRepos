import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading,searchTerm,profileData} from './fetchApiData';

const allReducers = combineReducers({
	items,
	itemsHasErrored,
	itemsIsLoading,
	searchTerm,
	profileData,
});

export default allReducers;

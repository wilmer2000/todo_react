import * as CONSTANTS from '../constants';
import _  from 'lodash';

const INITIAL_STATE = {
	todos : [
		{
			id : 1,
			title : "Title 1",
			description : "Description 1",
			status : CONSTANTS.STATUS_TO_PULL
		},
		{
			id : 2,
			title : "Title 2",
			description : "Description 2",
			status : CONSTANTS.STATUS_DONE
		},
		{
			id : 3,
			title : "Title 3",
			description : "Description 3",
			status : CONSTANTS.STATUS_TO_PULL
		},
		{
			id : 4,
			title : "Title 4",
			description : "Description 4",
			status : CONSTANTS.STATUS_IN_PROGRESS
		},
		{
			id : 5,
			title : "Title 5",
			description : "Description 5",
			status : CONSTANTS.STATUS_DELETED
		}
	],
	nextID : 6
}

function todoApp(state = INITIAL_STATE, action) {
	let copy
	switch (action.type) {
		case CONSTANTS.CREATE_ITEM:
			const newItem = action.payload
    		const newID = state.nextID
    		newItem.id = newID
			return {
				todos : [newItem, ...state.todos],
				nextID : newID + 1
			}

		case CONSTANTS.EDIT_ITEM:
			copy = _.cloneDeep(state.todos)
			_.forEach(copy, function(value){
				if (value.id === action.payload.id) {
					for (var key in action.payload) {
						value[key] = action.payload[key]
					}
				}
			})
			return {
				todos : copy,
				nextID : state.nextID
			}

		case CONSTANTS.DELETE_ITEM:
			copy = _.cloneDeep(state.todos)
			_.forEach(copy, function(value, index){
				if (value.id === action.payload.id) {
					_.pull(copy, copy[index])
					return false
				}
			})
			return {
				todos : copy,
				nextID : state.nextID
			}

		default:
			return state;
	}
}

export default todoApp

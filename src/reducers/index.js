import { createItemToDo, editItemToDo, deleteItemToDo } from '../actions'
import { CREATE_ITEM, EDIT_ITEM, DELETE_ITEM } from '../constants'
import _  from 'lodash';

const INITIAL_STATE = {
	todos : [
		{
			id : 1,
			title : "Title 1",
			description : "Description 1"
		},
		{
			id : 2,
			title : "Title 2",
			description : "Description 2"
		}
	]
}

function todoApp(state = INITIAL_STATE, action) {
	switch (action.type) {
		case CREATE_ITEM:
			const newItem = action.payload
			return {
				todos : [newItem, ...state.todos]
			}

		case EDIT_ITEM:
			const copy = _.cloneDeep(state.todos)
			_.forEach(copy, function(value){
				if (value.id == action.payload.id) {
					for (var key in action.payload) {
						value[key] = action.payload[key]
					}
				}
			})
			return {
				todos : copy
			}

		case DELETE_ITEM:
			const copy = _.cloneDeep(state.todos)
			_.forEach(copy, function(value, index){
				if (value.id == action.payload.id) {
					copy[index].splice(copy[index], 1)
				}
			})
			return {
				todos : copy
			}

		default:
			return state;
	}
}


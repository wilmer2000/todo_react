import { CREATE_ITEM, EDIT_ITEM, DELETE_ITEM } from '../constants'

export function createItemToDo(item){
	return {
		type: CREATE_ITEM,
		payload: item
	}
}
export function editItemToDo(item){
	return {
		type: EDIT_ITEM,
		payload: item
	}
}
export function deleteItemToDo(item){
	return {
		type: DELETE_ITEM,
		payload: item
	}
}
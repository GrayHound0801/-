import { createContext, useContext, useReducer } from 'react'
const initialState = [
	{
		id: 1,
		title: '게시글',
		contsent: '반갑습니다.',
	},
]

export const todoStore = createContext()
export const useTodoStore = useContext(todoStore)

const Provider = ({ chidren }) => {
	const [todo, setTodo] = useReducer(initialState)

	return <Provider value={[todo, setTodo]}>{chidren}</Provider>
}

export default Provider

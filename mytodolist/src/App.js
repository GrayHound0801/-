import router from './router/routing'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Provider from './store'

function App() {
	return (
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App

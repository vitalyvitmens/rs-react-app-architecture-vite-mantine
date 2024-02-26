import ReactDOM from 'react-dom/client'
import { MantineProvider } from "@mantine/core"
import './index.css'
import '@mantine/core/styles.css'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MantineProvider><App /></MantineProvider>)

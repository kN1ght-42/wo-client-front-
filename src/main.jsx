import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider.jsx'
import Router from './routes/Routes.jsx'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
)

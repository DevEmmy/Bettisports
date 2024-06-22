"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const ReactQueryProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const query = new QueryClient();

  return (
    <QueryClientProvider client={query}>
        {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
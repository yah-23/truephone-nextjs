import { createContext, ReactNode, useState } from 'react'
import Router from 'next/router'

const delay = (amount = 1000) =>
  new Promise((resolve) => setTimeout(resolve, amount))

type FileContextType = {
  loading: boolean
  validateFile: () => Promise<void>
}

export const FileContext = createContext({} as FileContextType)

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)

  const validateFile = async () => {
    setLoading(true)
    await delay()
    Router.push('/file-send')
    setLoading(false)
  }
  return (
    <FileContext.Provider value={{ validateFile, loading }}>
      {children}
    </FileContext.Provider>
  )
}

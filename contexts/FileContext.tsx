import { createContext, ReactNode, useState } from 'react'
import Router from 'next/router'

import { api } from '../service/api'

const delay = (amount = 1000) =>
  new Promise((resolve) => setTimeout(resolve, amount))

type FileContextType = {
  loading: boolean
  validateFile: (file) => Promise<void>
}

export const FileContext = createContext({} as FileContextType)

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)

  const validateFile = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await api.post('/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data; boundary=xxx',
        },
      })
    } catch (error) {
      console.log('-------')
      console.log(error)
    }
    // setLoading(true)
    // await delay()
    // Router.push('/file-send')
    // setLoading(false)
  }
  return (
    <FileContext.Provider value={{ validateFile, loading }}>
      {children}
    </FileContext.Provider>
  )
}

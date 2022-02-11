import { createContext, ReactNode, useState } from 'react'
import Router from 'next/router'

import { api } from '../service/api'

const delay = (amount = 1000) =>
  new Promise((resolve) => setTimeout(resolve, amount))

type FileContextType = {
  loading: boolean
  validateFile: (files: File[]) => Promise<void>
  file: File | null
  total: number
  validatedData: ValidatedMessage[]
  handleToHome: () => void
  handleSaveFile: () => Promise<void>
}

type ValidatedMessage = {
  phone: string
  message: string
  valid: boolean
}

export const FileContext = createContext({} as FileContextType)

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [file, setFile] = useState<File | null>(null)
  const [validatedData, setValidatedData] = useState<ValidatedMessage[]>([])

  const validateFile = async (files: File[]) => {
    setLoading(true)
    await delay()
    const formData = new FormData()
    formData.append('file', files[0])
    setFile(files[0])

    const { data } = await api.post('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=xxx',
      },
    })
    setTotal(data.filter((el: ValidatedMessage) => el.valid).length)
    setValidatedData(data)
    Router.push('/file-send')
    setLoading(false)
  }

  const handleToHome = () => {
    Router.push('/')
    setLoading(false)
    setTotal(0)
    setFile(null)
    setValidatedData([])
  }

  const handleSaveFile = async () => {
    const body = {
      data: validatedData,
      file,
    }
    const { status } = await api.post('/files/save', body)
    if (status == 201) {
      Router.push('/file-save')
    }
  }
  return (
    <FileContext.Provider
      value={{
        validateFile,
        loading,
        file,
        total,
        validatedData,
        handleToHome,
        handleSaveFile,
      }}
    >
      {children}
    </FileContext.Provider>
  )
}

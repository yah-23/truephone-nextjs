import Dropzone from 'react-dropzone'
import { useCallback, ReactNode, useContext } from 'react'

import { FileContext } from '../../contexts/FileContext'
const DropzoneComponent = ({ children }: { children: ReactNode }) => {
  const { validateFile } = useContext(FileContext)
  const onDrop = useCallback(async (acceptedFile) => {
    await validateFile(acceptedFile)
  }, [])

  return (
    <Dropzone onDrop={onDrop} multiple={false}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default DropzoneComponent

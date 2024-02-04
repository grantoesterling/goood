import { useEffect, useRef } from 'react'
import useStore from '@helpers/store'
import 'twin.macro'

const DomLayout = ({ children }: any) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      ref={ref}
      tw="absolute top-0 left-0 w-[100vw] h-[100vh] z-10 overflow-y-scroll"
    >
      {children}
    </div>
  )
}

export default DomLayout

import { ReactNode } from 'react'
import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

interface CanvasLayoutProps {
  children?: ReactNode
  theme?: string
  bgColor?: string
  effects?: boolean
  special?: boolean
}

const CanvasLayout = ({ children }: CanvasLayoutProps) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        touchAction: 'none',
      }}
    >
      <Preload all />

      <ambientLight />
      {children}
    </Canvas>
  )
}

export default CanvasLayout

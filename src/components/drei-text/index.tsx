import { MeshProps } from '@react-three/fiber'
import { useRef } from 'react'
import { Text } from '@react-three/drei'
import { Mesh } from 'three'

export interface TextProps extends MeshProps {
  text: string
  color: string
}

export default function FunHeaderText(props: TextProps) {
  const ref = useRef<Mesh>()
  // Create a new geometry

  return (
    <Text
      ref={ref}
      color={props.color} // default
      outlineBlur={0.1}
    >
      {props.text}
    </Text>
  )
}

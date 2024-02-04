import {
  MeshProps,
  ReactThreeFiber,
  useFrame,
  useThree,
} from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Text } from '@react-three/drei'
import THREE, { Color, Mesh } from 'three'

export interface TextProps extends MeshProps {
  text: string
  color: string
}

export default function FunHeaderText(props: TextProps) {
  const t = useThree()
  const ref = useRef<Mesh>()
  // Create a new geometry
  useFrame((state, delta) => {
    if (!ref.current) return
    // let orig_z = (props.position as number[])[2];
    // ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, Math.max(orig_z, orig_z + data.delta * 50), 4, delta)
    if (t.size.width >= 700) {
      ref.current.rotation.x = -t.mouse.y / 3
      ref.current.rotation.y = t.mouse.x / 5
    } else {
      ref.current.rotation.x = 0
      ref.current.rotation.y = 0
    }
  })

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

"use client"
import { useThemeContext } from '@/context/theme'

const contact = () => {
  const {color, setColor} = useThemeContext()
  return (
    <>
      <h1 style={{'color': color}}> Main page</h1>
      <button onClick={() => setColor('blue')}>Set color to blue</button>
    </>
  )
}

export default contact
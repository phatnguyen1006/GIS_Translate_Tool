import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Circle: NextPage = () => {
    const [input, setInput] = useState();

    const drawCircle = () => {
      return "This is circle line";
    }

  return (
    <div className={styles.container}>
      <div>Point</div>
      <input type="text" id="point" name="point"/>
      <div>Radius</div>
      <input type="text" id="radius" name="radius"/>
      <div>{drawCircle()}</div>
    </div>
  )
}

export default Circle

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const ForwardPoint: NextPage = () => {

  return (
    <div className={styles.container}>
      <div>x</div>
      <input type="text" id='x' name='x'/>
      <div>y</div>
      <input type="text" id="y" name="y"/>

      <div>new point</div>
      <input type="text" id="result"/>
    </div>
  )
}

export default ForwardPoint

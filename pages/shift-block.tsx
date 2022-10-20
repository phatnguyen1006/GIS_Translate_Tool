import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const ShiftBlock: NextPage = () => {

  return (
    <div className={styles.container}>
      <div>Point list</div>
      <input type="text" id="point_list" name="point_list"/>
      <div>New point list</div>
      <input type="text" id="new_point_list" name="new_point_list"/>
    </div>
  )
}

export default ShiftBlock

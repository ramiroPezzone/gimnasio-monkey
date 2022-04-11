import React from 'react'
import styles from '../css/BtnHeader.module.css'

const BtnHeader = (props) => {
    return (
        <div className={styles.containerBtn}>
            <a href={`#${props.section}`}>
                {props.nameSection}
            </a>
        </div>
    )
}

export default BtnHeader

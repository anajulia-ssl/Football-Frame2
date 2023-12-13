import React from 'react';
import styles from '../src/styles/Components.module.css';

export default function Cabecalho() {
    return (
        <div className={styles.cabecalho}>
            <a href='/'>
                <p>
                    Home
                </p>
            </a>
            <h1>
                Football
            </h1>
        </div>
    )

}
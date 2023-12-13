import React from 'react';
import Cabecalho from '../../componentes/Cabecalho';
import Rodape from '../../componentes/Rodape';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
function Users({ users }) {
    return (
        <div className={styles.content2}>
            <Cabecalho />
            <div className={styles.home}>

                <h1 className={styles.title}> Futebol </h1>
                <div className={styles.objetos}>
                    {users.map((user, index) => (
                        <Link href='/profile/[id]' as={`/profile/${index}`}>
                            <div className={styles.userItem} key={user.id}>
                                <p>{user.nome}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
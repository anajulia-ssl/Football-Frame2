import Cabecalho from '../../../componentes/Cabecalho';
import Rodape from '../../../componentes/Rodape';
import styles from '../../styles/Home.module.css';
function Profile({ user = {} }) {
    return (
        <div className={styles.content}>
            <Cabecalho />
            <div className={styles.home}>
            <div className={styles.descricao}>
                <p>{user.nome}</p>
                <p>{user.usuario}</p>
                <p>{user.descricao}</p>
            </div>
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
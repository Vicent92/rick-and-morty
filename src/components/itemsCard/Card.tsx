import styles from './style.module.css'

interface Props {
    info: Array<{
        name: string
        species: string
        gender: string
        image: string
    }>
}

export const Card = ({ info }: Props) => {
    return (
        <>
            {
                info.map(res => {
                    return (
                        <div className={styles.container}>
                            <img className={styles.img} src={res.image} alt={res.name}/>

                            <div className={`${styles['texts-container']}`}>
                                <div className={`${styles['text']}`}>{res.name}</div>
                                
                                <div className={`${styles['text']}`}>{res.species}</div>

                                <div className={`${styles['text']}`}>{res.gender}</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
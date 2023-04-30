import { useState } from 'react'
import { Card } from './itemsCard/Card'
import { Search } from './Seach/Seach'
import styles from './style.module.css'

interface Props {
    result: Array<{
        name: string
        species: string
        gender: string
        image: string
    }>
}

export const Content = ({ result }: Props) => {
    const [valueItem, setValueItem] = useState('');

    const handleValue = (e: any) => {
        const value = e.target.value
        setValueItem(value.toLowerCase())
    }

    const filterResult = result.filter( el => {
            return el.name.toLowerCase().includes(valueItem)
        })
    return (
        <>
            <Search 
                    handleValue={handleValue}
            />

            <div className={`${styles['container-card']}`}>
                <Card info={filterResult}/>
            </div>
        </>
    )
}
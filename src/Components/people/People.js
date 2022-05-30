import styles from './People.module.scss';

const People = ({people}) =>{
    return(
        <div className={styles['people']}>
            <p>Name : {people}</p>
        </div>
    )
}

export default People;
import styles from './peoples.style.module.scss';
import People from '../people/People';
import useStore from '../../store';


const Peoples = () =>{
    const peoples = useStore(state => state.peoples);
    const renderPeoples = (peoples) =>{
        return peoples.map((people)=>{
            return(
                <>
                    <People people={people}/>
                </>
            )
        })
    }

    return(
        <div className={styles['peoples']}>
            {renderPeoples(peoples)}
        </div>
    )
}

export default Peoples;
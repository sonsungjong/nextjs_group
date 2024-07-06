import styles from './activities-grid.module.css';
import ActivitiesItem from './activities-item';

export default function ActivitiesGrid({activities}){
    return(
        <div>
            <ul className=''>
                {
                    activities.map((item, index)=>{
                        return(
                            <li key={item._id}>
                                <ActivitiesItem {...item}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

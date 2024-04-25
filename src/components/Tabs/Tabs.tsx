import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Tabs.module.scss'

const Tabs: React.FC = () => {
    return(
    <ul className={styles.tabs}>
        <li>
            <NavLink to='/' className={styles.tabs_link}>
                All Tasks
            </NavLink>
        </li>
        <li>
            <NavLink to='/deleted-tasks' className={styles.tabs_link}>
                Deleted Tasks
            </NavLink>
        </li>
    </ul>
    )
}

export default Tabs
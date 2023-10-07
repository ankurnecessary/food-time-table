import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './UserNavigation.module.css';
import { useState, useEffect, useRef } from 'react';

const UserNavigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const userDropdownRef = useRef();
    const userIconClickHandler = () => {
        setShowDropdown(prev => !prev);
    };

    useClickOutside(userDropdownRef, () => {
        setShowDropdown(false);
    });

    const isDropdownVisible = showDropdown ? styles['header__user-dropdown--show'] : '';

    return (<div className={styles['header__user-navigation']} ref={userDropdownRef}>
        <button
            id='user-button'
            onClick={userIconClickHandler}
            className={`button-link ${styles['header__user-link']}`}
            aria-label="User"
            title='User'
            type='button'
        >
            <FontAwesomeIcon icon={faUserCircle} size='3x' className='opacity-2' />
        </button>
        <ul className={`${styles['header__user-dropdown']} ${isDropdownVisible}`}>
            <li onClick={userIconClickHandler}>
                <Link
                    to='user-registration'
                    className={styles['header__user-dropdown-link']}
                    aria-label="User Registration"
                >User Registration</Link></li>
            <li onClick={userIconClickHandler}>
                <Link
                    to='sign-in'
                    className={styles['header__user-dropdown-link']}
                    aria-label='Sign in'
                >Sign In</Link></li>
        </ul>
    </div>)
}

export default UserNavigation;

function useClickOutside(ref, onClickOutside) {
    useEffect(() => {
        /**
         * Invoke Function onClick outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        // Bind
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // dispose
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}
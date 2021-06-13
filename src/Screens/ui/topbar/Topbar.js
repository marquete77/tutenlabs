import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faSortDown, faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../actions/auth";
import {Check} from "is-null-empty-or-undefined";
import {useHistory} from "react-router-dom";
import {MenuSidebar} from "../../../shared/menu-sidebar";
import {setSectionName} from "../../../actions/ui";
import {ProgressSpinner} from "primereact/progressspinner";


const Topbar = () => {
    const menu = MenuSidebar;
    let history = useHistory();
    const {loading} = useSelector( state => state.ui);
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();
    const {sectionName} = useSelector( state => state.ui);
    const noAuth = history.location.pathname.includes('auth');
    const {user: {email, firstName, lastName}} = useSelector( state => state.auth);

    useEffect(() => {
        const mouseClick = ({target}) => {
            if (!Check(document.querySelector('#card_logout'))) {
                if (!document.getElementById('card_logout').contains(target)) {
                    setDropdown(false);
                }
            }
        }
        if (!noAuth) {
            window.addEventListener('click', mouseClick)
        }
        return () => {
            window.removeEventListener('click', mouseClick)
        }

    }, [noAuth])

    useEffect(() => {
        for (let section of menu) {
            for (let item of section.subsection) {
                if (item.link === history.location.pathname) {
                    dispatch(setSectionName(item.name))
                }
            }
        }
    }, [dispatch, history.location.pathname, menu]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className="layout__topbar">
            {
                loading && <ProgressSpinner className="loading-spinner"/>
            }
            <div className="left__topbar">
                <span>{sectionName}</span>
            </div>
            <div id="card_logout" className="right__topbar">
                <div className="dropdown_logout_container">
                    <div
                        className="button_dropdown"
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <div>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div style={{marginTop: -5, marginLeft: 4}}>
                            <FontAwesomeIcon icon={faSortDown}/>
                        </div>
                    </div>
                    <div
                        className={`card_logout p-shadow-2 ${dropdown ? 'display-block' : 'display-none'}`}
                    >
                        <div className="card_logout_header">
                            <span>{firstName} {lastName}</span>
                            <span>{email}</span>
                        </div>
                        <hr/>
                        <div className="button_logout_container">
                            <div
                                className="button_logout"
                                onClick={handleLogout}
                            >
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                                <span>Cerrar sesión</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

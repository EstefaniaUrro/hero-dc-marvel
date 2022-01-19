import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";

const Navbar = () => {

    const {name} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch( startLogout() );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand">HEROES APP</h1>  
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav mr-auto">
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="/dc">
                        DC
                    </NavLink>
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="/marvel">
                        Marvel
                    </NavLink>
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="/search">
                        Search
                    </NavLink>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="navbar-item nav-link text-info">
                            {name}
                        </span>
                        <button className="nav-item nav-link btn"
                            onClick={handleLogout}>
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

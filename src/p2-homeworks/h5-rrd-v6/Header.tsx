import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.nawLinkWrap}>
            {/*add NavLinks*/}
            <NavLink to={'/pre-Junior'}>pre-Junior </NavLink>
            <NavLink to={'/Junior'}>Junior </NavLink>
            <NavLink to={'/Junior+'}>Junior+ </NavLink>
            <span>{'>'}</span>
        </div>
    )
}

export default Header

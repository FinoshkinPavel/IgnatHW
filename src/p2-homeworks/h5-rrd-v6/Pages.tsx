import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from '../h5/pages/PreJunior';

export const path = {
    home: '/',
    preJunior: '/pre-Junior',
    junior: '/Junior',
    multiJunior: '/Junior+',
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            {/*<Routes>*/}

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>*/}

                {/*<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>*/}
                {/*// add routes*/}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                {/*<Route path={'/*'} element={<Error404/>}/>*/}

            {/*</Routes>*/}


            <Routes>
                <Route path={path.home} element={<Navigate to={path.preJunior}/>}/>
                <Route path={path.preJunior} element={<PreJunior/>}/>
                <Route path={path.junior} element={<div>Junior</div>}/>
                <Route path={path.multiJunior} element={<div>Junior+</div>}/>
                <Route path={'/*'} element={<div>404</div>}/>
            </Routes>
        </div>
    )
}

export default Pages

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './Pages/Inicial'
import StartRecat from './Pages/StartReact'
import DragNDrop from './Pages/DragNDrop'
import PopUp from './Pages/Pop-Up/'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/primeiro-contato-react" component={StartRecat} />
                <Route path="/drag-n-drop" component={DragNDrop} />
                <Route path="/pop-up" component={PopUp} />    
            </Switch>
        </BrowserRouter>
    )
}
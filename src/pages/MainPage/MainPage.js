import React from 'react';
import {Navigation} from '../../components/Component';
import CardOption from './components/CardOption/CardOption';
import ThemeHeader from './components/ThemeHeader/ThemeHeader';

class MainPage extends React.Component{
    render(){
        return(
            <div className = 'Main' style = {{paddingBottom : "10vh"}}>
                <ThemeHeader />
                <CardOption />  
            </div>
        )
    }
} 

export default MainPage;
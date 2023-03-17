import  { Routes as Switch, Route, BrowserRouter} from 'react-router-dom'



import Home from './views/Home'
import Players from './views/Players'
import Teams from './views/Teams'
import Newsletter from './views/Newsletter'


const Routes = () => {
    return (
    
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />}/>
                <Route path="/players" element={<Players />}/>
                <Route path="/teams" element={<Teams />}/>
                <Route path="/newsletter" element={<Newsletter />}/>                
            </Switch>
        </BrowserRouter>
    
        
    )
}

export default Routes
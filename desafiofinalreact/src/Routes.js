import  { Routes as Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './views/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
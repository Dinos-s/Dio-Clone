import {Link} from 'react-router-dom'
import { Button } from '../../components/Button/index'
import { Header } from '../../components/Header'

const Home = () => {
    return(<>
        <Header/>
        <Button title="01"/>
        <Button variant='secondary' title="02"/>
        <Link to='/login'>Fazer Login</Link>
    </>)
}

export { Home }
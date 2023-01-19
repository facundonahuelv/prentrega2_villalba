import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav style = {{display:'flex', justifyContent: 'space-around', alignItems: 'center',}}>
          <h1>Ecommerce</h1>
          <div >
            <Link to='/category/pasteleria'>Tortas</link>
          </div>
        </nav>
    )
}

export default navBar
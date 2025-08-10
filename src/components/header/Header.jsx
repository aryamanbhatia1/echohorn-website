import logo from '../../assets/logo.png';
import { navLinks } from '../../Data';
import { FaCircleArrowRight } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import './header.css';
import {Link} from 'react-router-dom';





const Header = () => {
    return(
        <header className='header'>
            <nav className='nav-box'>
                <Link to='/' className='nav-logo'>
                    <div className='align-logo'>
                        <span><img src={logo} alt='echo-horn-logo' className='nav-img'/></span>
                        
                   </div>
                </Link>
                <div className='nav-menu'>
                    <ul className='nav-list'>
                        {navLinks.map((navLink, index)=>(
                            
                                <li className='nav-item' key={index}>
                                    <Link to={`/${navLink.toLowerCase()}`} className='nav-link'>
                                        {navLink} 
                                    </Link>
                                    
                                </li>
                            
                        ))}
                        
                    </ul>
                </div>
                <div className='nav-buttons'>
                    <Link to='/reservation'  className='button'>
                       Book A Trial<FaCircleArrowRight className='button-icon' />
                    </Link>
                    {<CgMenuLeft className='ham-menu'/>}
                    
                </div> 
            </nav>
        </header>
    );

};
export default Header;
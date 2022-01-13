import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className= "home-page" >
            <div className="top-banner">
                <div className="top-banner-test">
                    <h1>Welcome to my sneaker store.</h1>
           <h3>Check out my amazing catalog</h3>
           </div>
           <img src="/images/sneaker.jpg" alt="Fresh Sneakers"></img>
         </div>  

         <div className="name here">
             <div className="name here message">
                <h1 className="display-4">Dropping the latest heat for the streets.</h1>
                <p className="lead"> Take a gander at we got.</p>
                <hr className="my-4" />
                <Link className="btn btn-lg btn-primary" to="/catalog">Checkot The Heat <i class= "fa fa-cheveron-circle-right" aria-hidden="true"></i></Link>
             </div>

             <div className="main-image">
                 <img src="Image Here"></img>
             </div>
         </div>           
        </div>
    );



};

export default Home;
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="container">
		<header  className="site-header">
		<div className="site-branding">
			<h1 className="site-title"><a href="index.html" >BLOGS</a></h1>
			<h2 className="site-description">Different Blog Details</h2>
		</div>
		<nav  className="main-navigation">
		<div>
			<ul className="menu">
				<li><Link to="/">User List</Link></li>
				<li><Link to="/postsList">Post List</Link></li>
				
			</ul>
		</div>
		</nav>
		</header>
            
        </div>
    )
}

export default Home

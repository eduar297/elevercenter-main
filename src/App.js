import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from './views/index.js';
import Login from './views/login.js';
import Register from './views/register.js';
import Logout from './views/logout.js';
import Specialties from './views/specialties.js';
import Coworking from './views/coworking.js';
import Contact from './views/contacts.js';
import Blog from './views/blog.js';

import Admin from './views/admin.js';
import Validated from './views/validated.js';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="/home" component={Index} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/logout" component={Logout} />
				<Route path="/specialties" component={Specialties} />
				<Route path="/coworking" component={Coworking} />
				<Route path="/contact" component={Contact} />
				<Route path="/blog" component={Blog} />

				<Route exact path="/admin" component={Admin} />
				<Route exact path="/validated" component={Validated} />
			</Switch>
		</Router>
	);
}

export default App;
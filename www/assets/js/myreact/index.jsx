import React from 'react';
import {render} from 'react-dom';
import SomeModule from './components/someModule/someModule.jsx';


// essential for hot module replacement! ie, when re-saving jsx file, the webpage doesn't refresh, but the component does update!
if (module.hot){
  module.hot.accept();
}


class App extends React.Component {
  render () {
    return (     
	    <div class="wrapAll">
	    	<header>

	    	</header>
	    	<main>             
	        	<SomeModule pagename={this.props.pagename} /> 
	        </main>
	        <footer>

	        </footer>  
        </div>        
    );
  }
}


render(<App pagename="first component" />, document.getElementById('app'));

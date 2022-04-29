import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Topsection from './component/topSections/Topsection';
import Midsection from './component/midSection/MidSection';
import DiffStyle from './component/header/DiffStyle';
import Newmidsection from './component/midSection/Newmidsection';
import Section6 from './component/midSection/Section6';
import Footer from './component/footer/Footer';
import Iphones from './component/iPhones/Iphones';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Iphones />
				{/* <DiffStyle /> */}
				{/* <Newmidsection/> */}
				<Topsection />
				<Midsection />
				<Section6 />
				<Footer />
			</div>
		</Router>
	);
}

export default App;

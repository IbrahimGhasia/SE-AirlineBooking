import FlightCard from '../components/FlightCard';
import Layout from '../components/Layout';
import SearchFlights from '../components/SearchFlights';

export default function Home() {
	return (
		<div>
			<Layout>
				<SearchFlights />
			</Layout>
		</div>
	);
}

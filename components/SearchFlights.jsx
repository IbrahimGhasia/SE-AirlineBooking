import {
	Autocomplete,
	Box,
	Grid,
	Modal,
	useMantineTheme,
	Button,
	Center,
	NumberInput,
	Radio,
	Title,
	Divider,
	Select,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { IconCheck, IconCheckbox, IconSearch, IconX } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';
import FlightCard from './FlightCard';

const SearchFlights = (props) => {
	const [opened, setOpened] = useState(false);
	const [flight, setFlight] = useState(false);

	const [source, setSource] = useState('');
	const [destination, setDestination] = useState('');
	const [depature, setDepature] = useState(new Date());
	const [passenger, setPassenger] = useState('');
	const [passClass, setPassClass] = useState('');
	const [airlines, setAirlines] = useState([]);

	const theme = useMantineTheme();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (
			source.length === 0 ||
			destination.length === 0 ||
			depature.length === 0 ||
			passenger.length === 0 ||
			passClass.length === 0
		) {
			showNotification({
				className: 'error-notification',
				title: 'Incomplete Field',
				message: 'Please fill all the field!',
				autoClose: 5000,
				icon: <IconX />,
				color: 'red',
			});
		} else {
			if (source === destination) {
				showNotification({
					className: 'error-notification',
					title: 'Invalid Source and Destination',
					message: 'Source and Destination cannot be same!',
					autoClose: 5000,
					icon: <IconX />,
					color: 'red',
				});
			} else {
				showNotification({
					className: 'Flight Search',
					title: 'Searching Flights',
					message: 'Please Wait! This may take few seconds',
					disallowClose: true,
					loading: true,
					autoClose: 5000,
					color: 'blue',
				});

				const data = {
					source: source,
					destination: destination,
					depature: depature,
					passenger: passenger,
					passClass: passClass,
				};

				console.log(data);

				const url =
					// 'https://api.flightapi.io/roundtrip/637d0cba8cfdc6bf3586cd01/LHR/LAX/2022-11-25/2022-11-30/2/0/1/Economy/USD';
					`https://api.flightapi.io/onewaytrip/637d0cba8cfdc6bf3586cd01/${source}/${destination}/${depature}/2/0/1/${passClass}/INR`;
				const options = {
					method: 'GET',
				};

				fetch(url, options)
					.then((res) => res.json())
					.then((json) => {
						showNotification({
							className: 'flights-found',
							title: 'Flights Found',
							message: 'You can choose from the above flights',
							autoClose: 5000,
							icon: <IconCheck />,
							color: 'green',
						});
						console.log(json);
						setAirlines(json.airlines);
					})
					.catch((err) => {
						showNotification({
							className: 'flights-not-found',
							title: 'Flights not found',
							message:
								'Sorry! There are no currently flights for this route',
							autoClose: 5000,
							icon: <IconX />,
							color: 'red',
						});
						console.error('error:' + err);
					});

				setFlight(true);
			}
		}
	};

	return (
		<div>
			<Box sx={{ maxWidth: 1000 }} mx='auto'>
				<Center>
					<Title py={20}>Domestic and International Flights</Title>
				</Center>
				<form>
					<Grid>
						<Grid.Col sm={6} lg={3}>
							{/* <Autocomplete
								label='From - '
								placeholder='Pick the source'
								data={[
									{ value: 'STV' },
									{ value: 'BOM' },
									{ value: 'DEL' },
									{ value: 'BLR' },
									{ value: 'BQD' },
									{ value: 'MAA' },
									{ value: 'PNQ' },
									{ value: 'GOI' },
								]}
								onChange={(event) => {
									setSource(event);
								}}
							/> */}
							<Select
								label='From - '
								placeholder='Source'
								data={[
									{ value: 'STV', label: 'Surat' },
									{ value: 'BOM', label: 'Bombay' },
									{ value: 'DEL', label: 'Delhi' },
									{ value: 'BLR', label: 'Banglore' },
									{ value: 'BQD', label: 'Baroda' },
									{ value: 'MAA', label: 'Chennai' },
									{ value: 'PNQ', label: 'Pune' },
									{ value: 'GOI', label: 'Goa' },
									{ value: 'CCU', label: 'Kolkata' },
								]}
								onChange={(event) => {
									setSource(event);
								}}
							/>
						</Grid.Col>
						<Grid.Col sm={6} lg={3}>
							<Select
								label='To - '
								placeholder='Destination'
								data={[
									{ value: 'STV', label: 'Surat' },
									{ value: 'BOM', label: 'Bombay' },
									{ value: 'DEL', label: 'Delhi' },
									{ value: 'BLR', label: 'Banglore' },
									{ value: 'BQD', label: 'Baroda' },
									{ value: 'MAA', label: 'Chennai' },
									{ value: 'PNQ', label: 'Pune' },
									{ value: 'GOI', label: 'Goa' },
									{ value: 'CCU', label: 'Kolkata' },
								]}
								onChange={(event) => {
									setDestination(event);
								}}
							/>
						</Grid.Col>
						<Grid.Col sm={6} lg={3}>
							<DatePicker
								dropdownType='modal'
								placeholder='Pick date'
								label='Depature'
								minDate={dayjs(new Date())
									// .startOf('month')
									// .add(5, 'days')
									.toDate()}
								onChange={(event) => {
									setDepature(
										(event.value = new Date()
											.toJSON()
											.slice(0, 10))
									);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={3}>
							<Modal
								opened={opened}
								onClose={() => setOpened(false)}
								overlayColor={
									theme.colorScheme === 'dark'
										? theme.colors.dark[9]
										: theme.colors.gray[2]
								}
								overlayOpacity={0.55}
								overlayBlur={3}
							>
								<Title>Travellers & Class</Title>
								<NumberInput
									defaultValue={0}
									min={1}
									max={10}
									label='Passengers'
									withAsterisk
									mt={20}
									onChange={(event) => {
										setPassenger(event);
									}}
								/>
								<Radio.Group
									name='favoriteFramework'
									label='Travel Class'
									description='Select your travel class'
									spacing='xl'
									offset='sm'
									withAsterisk
									mt={20}
									onChange={(event) => {
										setPassClass(event);
									}}
								>
									<Radio
										value='Economy'
										label='Economy Class'
									/>
									<Radio
										value='Business'
										label='Buisness Class'
									/>
									<Radio value='First' label='First Class' />
								</Radio.Group>

								<Button
									// component='a'
									onClick={() => setOpened(false)}
									variant='outline'
									leftIcon={<IconCheckbox size={14} />}
									mt={20}
									fullWidth
								>
									Done
								</Button>
							</Modal>
							<Button
								variant='outline'
								size='sm'
								mt={23}
								onClick={() => {
									setOpened(true);
								}}
								fullWidth
							>
								Travellers & Class
							</Button>
						</Grid.Col>
					</Grid>
					<Divider
						my='xl'
						variant='dashed'
						labelPosition='center'
						label={
							<>
								<Box ml={5}>
									<Button
										color='orange'
										leftIcon={<IconSearch size={20} />}
										size='md'
										onClick={handleSubmit}
									>
										Search Flights
									</Button>
								</Box>
							</>
						}
					/>

					{airlines.map((item) => {
						let depHours = Math.floor(Math.random() * 20) + 1;
						let depMin = Math.floor(Math.random() * 50) + 1;

						let depatureTime = `${depHours}:${depMin}`;
						let arrivalTime = `${depHours + 1}:${depMin + 13}`;

						return (
							<FlightCard
								airline={item.name}
								from={source}
								depatureTime={depatureTime}
								to={destination}
								arrivalTime={arrivalTime}
								price={
									3000 + Math.floor(Math.random() * 2000) + 1
								}
							/>
						);
					})}
				</form>
			</Box>
		</div>
	);
};
export default SearchFlights;

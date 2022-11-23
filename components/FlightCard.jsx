import {
	Card,
	Image,
	Text,
	Badge,
	Button,
	Group,
	Flex,
	Title,
	Divider,
	Box,
} from '@mantine/core';
import {
	IconArrowForward,
	IconCheck,
	IconCoinRupee,
	IconPlaneArrival,
	IconPlaneDeparture,
	IconPlaneTilt,
} from '@tabler/icons';
import { showNotification } from '@mantine/notifications';

const FlightCard = (props) => {
	const handleSubmit = () => {
		showNotification({
			className: 'flightBooked',
			title: 'Flight Booked',
			message: 'Your flight has been booked!',
			autoClose: 5000,
			icon: <IconCheck />,
			color: 'green',
		});
	};

	return (
		<Card shadow='sm' p='lg' radius='md' mt={20} withBorder>
			<Group grow>
				<Flex
					gap='xs'
					justify='flex-start'
					align='flex-start'
					direction='column'
					wrap='wrap'
					ml={20}
				>
					<Title order={3} weight={500}>
						{props.airline}
					</Title>
				</Flex>
				<Flex
					justify='flex-start'
					align='flex-start'
					direction='column'
					wrap='wrap'
					ml={50}
				>
					<Text>{props.from}</Text>
					<Text>{props.depatureTime}</Text>
				</Flex>

				<Divider
					variant='dashed'
					labelPosition='center'
					label={
						<>
							<IconPlaneDeparture size={28} />
						</>
					}
				/>

				<Flex
					justify='flex-start'
					align='flex-end'
					direction='column'
					wrap='wrap'
					mr={50}
				>
					<Text>{props.to}</Text>
					<Text>{props.arrivalTime}</Text>
				</Flex>
				<Flex
					justify='flex-start'
					align='flex-end'
					direction='column'
					wrap='wrap'
					mr={50}
				>
					<Button
						leftIcon={<IconCoinRupee />}
						color='green'
						radius='xl'
						size='md'
						fullWidth
					>
						{props.price}
					</Button>
				</Flex>
			</Group>

			<Button
				variant='light'
				color='green'
				onClick={handleSubmit}
				fullWidth
				mt='md'
				radius='md'
			>
				Book Now
			</Button>
		</Card>
	);
};

export default FlightCard;

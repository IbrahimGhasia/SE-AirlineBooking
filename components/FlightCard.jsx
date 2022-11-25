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
	Modal,
	useMantineTheme,
	Stack,
	Center,
} from '@mantine/core';
import {
	IconArrowForward,
	IconCheck,
	IconCoinRupee,
	IconPlaneArrival,
	IconPlaneDeparture,
	IconPlaneTilt,
	IconCheckbox,
} from '@tabler/icons';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';

const FlightCard = (props) => {
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();

	const handleSubmit = () => {
		setOpened(false);
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
				color='teal'
				onClick={() => setOpened(true)}
				fullWidth
				mt='md'
				radius='md'
			>
				Book Now
			</Button>
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
				<Center>
					<Title color='teal'>Confirm Your Booking</Title>
				</Center>
				<Group grow mt={40}>
					<Flex
						justify='flex-start'
						align='flex-start'
						direction='column'
						wrap='wrap'
					>
						<Text fz='xl' fw={500}>
							{props.from}
						</Text>
						<Text fw={500}>{props.depatureTime}</Text>
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
					>
						<Text fz='xl' fw={500}>
							{props.to}
						</Text>
						<Text fw={500}>{props.arrivalTime}</Text>
					</Flex>
				</Group>
				<Divider mt={20} variant='dashed' labelPosition='center' />
				<Text fz='lg' mt={10}>
					Depature Date: {props.depatureDate}
				</Text>
				<Text fz='lg'>Passengers: {props.passenger}</Text>
				<Text fz='lg'>Travel Class: {props.passClass}</Text>
				<Divider mt={20} variant='dashed' labelPosition='center' />
				<Text fz='xl' fw={700} color='green'>
					Total Price: {props.price}
				</Text>
				<Button
					onClick={handleSubmit}
					variant='outline'
					leftIcon={<IconCheckbox size={14} />}
					mt={20}
					fullWidth
				>
					Confirm
				</Button>
			</Modal>
		</Card>
	);
};

export default FlightCard;

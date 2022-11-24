import {
	Title,
	Center,
	Box,
	Grid,
	TextInput,
	PasswordInput,
	Button,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import {
	IconAt,
	IconPassword,
	IconUser,
	IconPhoneCall,
	IconCalendar,
} from '@tabler/icons';
import { useState } from 'react';

const Register = () => {
	const [name, setName] = useState();
	const [contact, setContact] = useState();
	const [dob, setDob] = useState(new Date());
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		const registerUsersData = {
			Name: name,
			Contact: contact,
			DateOfBirth: dob,
			emailId: email,
			password: pass,
		};
		console.log(registerUsersData);
	};

	return (
		<div>
			<Center mt={40}>
				<Title>Welcome to Airline Booking System</Title>
			</Center>

			<Box sx={{ maxWidth: 700 }} mx='auto'>
				<form onSubmit={handleSubmit}>
					<Grid mt={20}>
						<Grid.Col sm={6} lg={12}>
							<TextInput
								icon={<IconUser />}
								label='Name'
								withAsterisk
								variant='filled'
								placeholder='John Snow'
								size='md'
								onChange={(event) => {
									setName(event.target.value);
								}}
								required
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={6}>
							<TextInput
								icon={<IconPhoneCall />}
								label='Contact'
								withAsterisk
								variant='filled'
								placeholder='Contact Number'
								size='md'
								onChange={(event) => {
									setContact(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={6}>
							<DatePicker
								dropdownType='modal'
								placeholder='Choose Date'
								label='Birth Date'
								variant='filled'
								icon={<IconCalendar />}
								withAsterisk
								size='md'
								onChange={(event) => {
									setDob(
										(event.value = new Date()
											.toJSON()
											.slice(0, 10))
									);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={12}>
							<TextInput
								label='Email address'
								placeholder='hello@gmail.com'
								size='md'
								variant='filled'
								onChange={(event) =>
									setEmail(event.target.value)
								}
								icon={<IconAt />}
								required
								withAsterisk
								type='email'
							/>
						</Grid.Col>
						<Grid.Col sm={6} lg={12}>
							<PasswordInput
								label='Password'
								placeholder='Enter a strong password'
								size='md'
								variant='filled'
								onChange={(event) =>
									setPass(event.target.value)
								}
								icon={<IconPassword />}
								required
								withAsterisk
							/>
						</Grid.Col>

						<Button fullWidth mt='xl' size='sm' type='submit'>
							Register
						</Button>
					</Grid>
				</form>
			</Box>
		</div>
	);
};
export default Register;

import {
	Paper,
	createStyles,
	TextInput,
	PasswordInput,
	Checkbox,
	Button,
	Title,
	Text,
	Anchor,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import users from '../utils/registerUsers';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconCross, IconCrossOff, IconX } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: '100vh',
		backgroundSize: 'cover',
		backgroundImage:
			'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
	},

	form: {
		borderRight: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[7]
				: theme.colors.gray[3]
		}`,
		minHeight: '100vh',
		maxWidth: 450,
		paddingTop: 80,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: '100%',
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	logo: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		width: 120,
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
}));

export function AuthenticationImage() {
	const { classes } = useStyles();
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		users.map((item) => {
			if (item.emailId === email && item.password === pass) {
				console.log('Logged In');
				console.log(item);
				router.push('/home');
			}
		});
	};

	return (
		<div className={classes.wrapper}>
			<form onSubmit={handleSubmit}>
				<Paper className={classes.form} radius={0} p={30}>
					<Title
						order={2}
						className={classes.title}
						align='center'
						mt='md'
						mb={50}
					>
						Welcome back to Airline Booking System!
					</Title>

					<TextInput
						label='Email address'
						placeholder='hello@gmail.com'
						size='md'
						onChange={(event) => setEmail(event.target.value)}
						required
						withAsterisk
						type='email'
					/>
					<PasswordInput
						label='Password'
						placeholder='Your password'
						mt='md'
						size='md'
						onChange={(event) => setPass(event.target.value)}
						required
						withAsterisk
					/>
					<Checkbox label='Keep me logged in' mt='xl' size='md' />
					<Button fullWidth mt='xl' size='md' type='submit'>
						Login
					</Button>

					<Text align='center' mt='md'>
						Don&apos;t have an account?{' '}
						<Link href='/register'>
							<Text color='blue' underline fw={700} fz='lg'>
								Register Here
							</Text>
						</Link>
					</Text>
				</Paper>
			</form>
		</div>
	);
}

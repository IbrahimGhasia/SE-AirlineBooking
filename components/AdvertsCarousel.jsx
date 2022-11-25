import { Carousel } from '@mantine/carousel';

function AdvertsCarousel() {
	return (
		<Carousel
			withIndicators
			height={300}
			slideSize='23.333333%'
			slideGap='sm'
			breakpoints={[
				{ maxWidth: 'md', slideSize: '50%' },
				{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
			]}
			loop
			align='start'
			mt={40}
			mb={40}
		>
			<Carousel.Slide>
				<img src='/adv4.jpg' />
			</Carousel.Slide>
			<Carousel.Slide>
				<img src='/adv5.jpg' />
			</Carousel.Slide>
			<Carousel.Slide>
				<img src='/adv6.jpg' />
			</Carousel.Slide>
			<Carousel.Slide>
				<img src='/adv7.jpg' />
			</Carousel.Slide>
			<Carousel.Slide>
				<img src='/adv8.jpg' />
			</Carousel.Slide>
			<Carousel.Slide>
				<img src='/adv9.jpg' />
			</Carousel.Slide>
		</Carousel>
	);
}

export default AdvertsCarousel;

import { Link } from 'react-router-dom'
import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from '@mantine/core'
import image from '../../assets/image.svg'
import classes from './NotFoundMantine.module.css'

export function NotFoundMantine() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 10 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg" bg="black" >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
          >
            <Link to="/">Перейти на главную страницу</Link>
          </Button>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  )
}

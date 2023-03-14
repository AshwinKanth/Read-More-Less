import {useState} from 'react'

import {
  AppContainer,
  BgContainer,
  Heading,
  Description,
  Image,
  HooksDescription,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, isReadMore] = useState(false)

  const onClickButton = () => isReadMore(prevState => !prevState)

  const description = readMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = readMore ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <BgContainer>
        <Heading>React Hooks</Heading>
        <Description>Hooks are a new addition to React</Description>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <HooksDescription>{description}</HooksDescription>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </BgContainer>
    </AppContainer>
  )
}

export default ReadMore

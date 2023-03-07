import {useState} from 'react'

import {
  Container,
  Con,
  Heading,
  Paragraph,
  Para,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <Container>
      <Con>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={onChangePassword} />
        <Para>
          {password.length < 8 && 'Your password must be at least 8 characters'}
        </Para>
      </Con>
    </Container>
  )
}

export default PasswordValidator

import Button from 'elements/button'
import * as Styled from './login.styled'

const LoginPage = () => {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <div>
      <Styled.Button onClick={() => {}}>click</Styled.Button>
    </div>
  )
}

export default LoginPage

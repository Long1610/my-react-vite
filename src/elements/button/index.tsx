import { Button } from './button.styled'
import { IButton } from './button.type'

const ButtonWrapper = ({ title, onClick }: IButton) => {
  return <Button onClick={onClick}>{title}</Button>
}

export default ButtonWrapper

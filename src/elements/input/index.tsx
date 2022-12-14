import { Input } from './input.styled'
import { IInput } from './input.type'

const InputWrapper = ({ onChange, ...input }: IInput) => {
  return <Input onChange={onChange} {...input}></Input>
}

export default InputWrapper

import { Box } from '@mui/material'
import Header from 'components/header'
import Button from 'elements/button'
import Input from 'elements/input'
import { useForm } from 'react-hook-form'
import styles from './login.module.scss'

const LoginPage = () => {
  const defaultValues = {
    username: '',
    password: ''
  }

  const formOptions = {
    defaultValues
  }
  const { control, handleSubmit } = useForm(formOptions)
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" name="username" control={control} placeholder="username" />
      <Input type="password" name="password" control={control} placeholder="password" />
      <Button cate="standard">Login</Button>
    </Box>
  )
}

export default LoginPage

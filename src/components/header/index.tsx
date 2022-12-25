import { Box } from '@mui/material'
import Tabs from 'components/tabs'
import Logo from 'assets/imgs/logo.png'
import styles from './header.module.scss'
import HamburgerIcon from 'assets/icons/hamburger'
import TemporaryDrawer from 'components/drawer'

const Header = () => {
  const data = [
    { title: 'a', value: 1 },
    { title: 'b', value: 2 },
    { title: 'c', value: 3 }
  ]
  return (
    <Box className={styles.header}>
      <img src={Logo} />
      <Tabs data={data} />
      <TemporaryDrawer anchor="right">
        <HamburgerIcon />
      </TemporaryDrawer>
    </Box>
  )
}

export default Header

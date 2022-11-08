import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Navbar from '../component/navbar';

function HomePage() {
    const router = useRouter()

    return (
        <Box className={styles.home_wrapp}>
            aaa
        </Box>
    )
}
export default HomePage;
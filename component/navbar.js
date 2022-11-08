import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';

function Navbar() {
    const router = useRouter();
    return (
        <Box className={styles.nav_wrapp}>
            <Box className={styles.nav}>
                <b className={styles.logo}
                    onClick={() => router.push("/")}>
                </b>
                <Box className={styles.menu} sx={{cursor:'pointer'}}>
                    <span onClick={() => router.push("/homepage")}>
                      Home
                    </span>
                    <span onClick={() => router.push("/explore")}>
                      Explore
                    </span>
                    <span onClick={() => router.push("/services")}>
                      Pet Care
                    </span>
                    <span onClick={() => router.push("/contact")}>
                      Inbox
                    </span>
                    <span onClick={() => router.push("/sign-in")}>
                        Profile
                    </span>
                    <span onClick={() => router.push("/profile")}>
                        Contact
                    </span>
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar
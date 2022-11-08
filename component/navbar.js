import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import QueueRoundedIcon from '@mui/icons-material/QueueRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Navbar() {
    const router = useRouter();
    return (
        <Box className={styles.nav_wrapp}>
            <Box className={styles.nav}>
                <b className={styles.logo}
                    onClick={() => router.push("/")}>
                </b>
                <Box className={styles.menu} sx={{cursor:'pointer'}}>
                  <li className={styles.list_item}>
                    <span className={styles.list_item_name} onClick={() => router.push("/homepage")}>
                      Home
                    </span>
                    <HomeRoundedIcon className={styles.icon}/>
                  </li>
                  <li className={styles.list_item}>
                    <span className={styles.list_item_name} onClick={() => router.push("/explore")}>
                      Explore
                    </span>
                    <ExploreRoundedIcon className={styles.icon}/>
                  </li>
                  <li className={styles.list_item}>
                    <span className={styles.list_item_name} onClick={() => router.push("/services")}>
                      Pet Care
                    </span>
                    <QueueRoundedIcon className={styles.icon}/>
                  </li>
                  <li className={styles.list_item}>
                    <span className={styles.list_item_name} onClick={() => router.push("/inbox")}>
                      Inbox
                    </span>
                    <EmailRoundedIcon className={styles.icon}/>
                  </li>
                  <li className={styles.list_item}> 
                    <span className={styles.list_item_name} onClick={() => router.push("/profile")}>
                        Profile
                    </span>
                    <AccountCircleRoundedIcon className={styles.icon}/>
                  </li> 
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar
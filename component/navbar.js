import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import QueueRoundedIcon from "@mui/icons-material/QueueRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Avatar } from "@mui/material";

function Navbar() {
  const router = useRouter();
  return (
    <Box className={styles.nav_wrapp}>
      <Box className={styles.nav}>
        <b className={styles.logo} onClick={() => router.push("/")}></b>
        <Box className={styles.menu} sx={{ cursor: "pointer" }}>
          <li className={styles.list_item} onClick={() => router.push("/")}>
            <span className={styles.list_item_name}>Home</span>
            <HomeRoundedIcon className={styles.icon} />
          </li>
          <li
            className={styles.list_item}
            onClick={() => router.push("/explore")}
          >
            <span className={styles.list_item_name}>Explore</span>
            <ExploreRoundedIcon className={styles.icon} />
          </li>
          <li
            className={styles.list_item}
            onClick={() => router.push("/addpost")}
          >
            <span className={styles.list_item_name}>Pet Care</span>
            <QueueRoundedIcon className={styles.icon} />
          </li>
          <li
            className={styles.list_item}
            onClick={() => router.push("/inbox")}
          >
            <span className={styles.list_item_name}>Inbox</span>
            <EmailRoundedIcon className={styles.icon} />
          </li>
          <li
            className={styles.list_item}
            onClick={() => router.push("/profile")}
          >
            <span className={styles.list_item_name}>Profile</span>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              sx={{
                width: "22px",
                height: "22px",
                marginTop: "1px",
                fontSize: "12px",
                border: "1px solid black",
              }}
              className={styles.icon}
            />
          </li>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;

import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import QueueRoundedIcon from "@mui/icons-material/QueueRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import { Avatar, Button } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Fragment } from "react";


function Navbar() {
  const router = useRouter();
  const { logout } = useAuth();
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
          <li className={styles.list_item}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment>
                  <span className={styles.list_item_name} {...bindTrigger(popupState)}>Profile</span>
                  <Avatar
                    {...bindTrigger(popupState)}
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

                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => router.push("/profile")}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          </li>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;

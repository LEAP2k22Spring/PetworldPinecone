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
import { Fragment } from "react";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import { useLocation } from 'react-router-dom'

function Navbar() {
  const router = useRouter();
  const { userData, logout } = useAuth();
  return (
    <Box className={styles.nav_wrapp}>
      <Box className={styles.nav}>
        <b className={styles.logo} onClick={() => router.push("/")}></b>
        <Box className={styles.menu} sx={{ cursor: "pointer" }}>
          <li className={router.pathname === "/" ? styles.list_item_active : styles.list_item} onClick={() => router.push("/")}>
            <span className={styles.list_item_name}>Home</span>
            <HomeRoundedIcon className={router.pathname === "/" ? styles.icon_active : styles.icon} />
          </li>
          <li
            className={router.pathname === "/explore" ? styles.list_item_active : styles.list_item}
            onClick={() => router.push("/explore")}
          >
            <span className={styles.list_item_name}>Explore</span>
            <ExploreRoundedIcon className={router.pathname === "/explore" ? styles.icon_active : styles.icon} />
          </li>
          <li
            className={router.pathname === "/addpost" ? styles.list_item_active : styles.list_item}
            onClick={() => router.push("/addpost")}
          >
            <span className={styles.list_item_name}>Pet Care</span>
            <QueueRoundedIcon className={router.pathname === "/addpost" ? styles.icon_active : styles.icon} />
          </li>
          <li
            className={router.pathname === "/inbox" ? styles.list_item_active : styles.list_item}
            onClick={() => router.push("/inbox")}
          >
            <span className={styles.list_item_name}>Inbox</span>
            <EmailRoundedIcon className={router.pathname === "/inbox" ? styles.icon_active : styles.icon} />
          </li>
          <li className={styles.list_item} >
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment >
                  <span className={router.pathname === "/profile" ? styles.list_item_active : styles.list_item} {...bindTrigger(popupState)} >Profile</span>
                  <Avatar
                    // {...bindTrigger(popupState)}
                    alt="Remy Sharp"
                    src={userData?.avatar}
                    sx={{
                      width: "22px",
                      height: "22px",
                      marginTop: "1px",
                      fontSize: "12px",
                      // border: "1px solid black",
                      position: "absolute",
                    }}
                    className={styles.icon_active}
                  />

                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => {router.push("/profile"); popupState.close()}}>Profile</MenuItem>
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

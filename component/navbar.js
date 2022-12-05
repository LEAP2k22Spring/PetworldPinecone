import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import QueueRoundedIcon from "@mui/icons-material/QueueRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import {
  Avatar,
  Button,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useAuth } from "../providers/AuthProvider";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useRef, useState } from "react";
// import { useLocation } from 'react-router-dom'
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const router = useRouter();
  const { logout, userData } = useAuth();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box className={styles.nav_wrapp}>
      <Box className={styles.nav}>
        <b className={styles.logo} onClick={() => router.push("/")}></b>
        <Box className={styles.menu} sx={{ cursor: "pointer" }}>
          <li
            className={
              router.pathname === "/"
                ? styles.list_item_active
                : styles.list_item
            }
            onClick={() => router.push("/")}
          >
            <span className={styles.list_item_name}>Home</span>
            <HomeRoundedIcon
              className={
                router.pathname === "/" ? styles.icon_active : styles.icon
              }
            />
          </li>
          <li
            className={
              router.pathname === "/explore"
                ? styles.list_item_active
                : styles.list_item
            }
            onClick={() => router.push("/explore")}
          >
            <span className={styles.list_item_name}>Explore</span>
            <ExploreRoundedIcon
              className={
                router.pathname === "/explore"
                  ? styles.icon_active
                  : styles.icon
              }
            />
          </li>
          <li
            className={
              router.pathname === "/addpost"
                ? styles.list_item_active
                : styles.list_item
            }
            onClick={() => router.push("/addpost")}
          >
            <span className={styles.list_item_name}>Pet Care</span>
            <QueueRoundedIcon
              className={
                router.pathname === "/addpost"
                  ? styles.icon_active
                  : styles.icon
              }
            />
          </li>
          <li
            className={
              router.pathname === "/inbox"
                ? styles.list_item_active
                : styles.list_item
            }
            onClick={() => router.push("/inbox")}
          >
            <span className={styles.list_item_name}>Inbox</span>
            <EmailRoundedIcon
              className={
                router.pathname === "/inbox" ? styles.icon_active : styles.icon
              }
            />
          </li>
          <li
            className={styles.list_item}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <span className={styles.list_item_name}>Profile</span>
            <Avatar
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
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={() => {
                            router.push("/profile");
                          }}
                        >
                          Profile
                          <AccountCircleIcon sx={{ padding: "3px" }} />
                        </MenuItem>
                        <MenuItem onClick={() => logout()}>
                          Logout
                          <LogoutIcon sx={{ padding: "3px" }} />
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </li>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;

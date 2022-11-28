import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import LimitTags from "../component/SearchAppBar";
import Stack from "@mui/material/Stack";
import RecipeReviewCard from "../component/PostCard";
import { useAuth } from "../providers/AuthProvider";
import Banner from "../component/Banner";
import { Typography } from "@mui/material";

function HomePage() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Box mt={5} className={styles.home_wrapp}>
      <Box display="flex" justifyContent="flex-end" width="80%" zIndex={20}>
        <LimitTags />
      </Box>
      <Banner />
      <Typography
        fontSize={22}
        fontWeight={500}
        justifyContent="flex-start"
        width="80%"
      >
        Categories
      </Typography>
      <Stack
        className={styles.categories_buttons}
        direction="row"
        spacing={1}
        mt={2}
        justifyContent="flex-start"
        display="flex"
        width="80%"
      >
        <button>Dog</button>
        <button>Cat</button>
        <button>Bird</button>
        <button>Fish</button>
        <button>Humster</button>
        <button>Raccoon</button>
        <button>Turtle</button>
        <button>Shimpanzee</button>
        <button>Panda</button>
      </Stack>

      <Box
        mt={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <RecipeReviewCard />
      </Box>
    </Box>
  );
}
export default HomePage;

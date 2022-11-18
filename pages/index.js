import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import LimitTags from "../component/SearchAppBar";
import Stack from "@mui/material/Stack";
import RecipeReviewCard from "../component/PostCard";
import { Button } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";
import Reel from "../component/Reel";
import Banner from "../component/Banner";

function HomePage() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Box mt={5} className={styles.home_wrapp}>
      <Reel />
      <Box display="flex" justifyContent="flex-end" width="80%" zIndex={20}>
        <LimitTags />
      </Box>
      <Button variant='contained' onClick={() => logout()}>
        Sign out
      </Button>
      <Banner />
      <Stack
        className={styles.categories_buttons}
        direction='row'
        spacing={1}
        mt={5}
        justifyContent="flex-end"
        display="flex"
        width="80%"
      >
        <button>Dog</button>
        <button>Cat</button>
        <button>Bird</button>
        <button>Fish</button>
        <button>Humster</button>
      </Stack>

      <Box
        mt={2}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <RecipeReviewCard />
      </Box>
    </Box>
  );
}
export default HomePage;

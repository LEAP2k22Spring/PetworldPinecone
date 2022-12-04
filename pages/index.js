import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import LimitTags from "../component/SearchAppBar";
import RecipeReviewCard from "../component/PostCard";
import { useAuth } from "../providers/AuthProvider";
import Banner from "../component/Banner";
import { Typography } from "@mui/material";

function HomePage() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Box mt={5} className={styles.home_wrapp}>
      <Box display="flex" justifyContent="flex-start" width="80%" maxWidth="1425px" zIndex={20}>
        <LimitTags />
      </Box>
      <Banner />


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

import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import LimitTags from "../component/SearchAppBar";
import RecipeReviewCard from "../component/PostCard";
import Banner from "../component/Banner";

function HomePage() {
  return (
    <Box mt={5} className={styles.home_wrapp}>
      <Box
        display="flex"
        justifyContent="flex-start"
        width="80%"
        maxWidth="1425px"
        zIndex={20}
      >
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

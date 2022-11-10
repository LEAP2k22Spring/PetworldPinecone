import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import LimitTags from '../component/SearchAppBar';
import TitlebarBelowImageList from '../component/PostList';
import Button from '@mui/material/Button';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';
import PestControlRodentIcon from '@mui/icons-material/PestControlRodent';
import SetMealIcon from '@mui/icons-material/SetMeal';
import RecipeReviewCard from '../component/PostCard';

function HomePage() {
    const router = useRouter()

    return (
        <Box mt={5} className={styles.home_wrapp}>
            <Box display='flex' justifyContent='flex-end' width='80%' zIndex={20}>
                <LimitTags />
            </Box>
            <Stack direction="row" spacing={2} mt={10} justifyContent="flex-end" display="flex" width="80%">
                <Button variant="contained" startIcon={<PetsIcon />}>
                    Dog
                </Button>
                <Button variant="outlined" startIcon={<FlutterDashIcon />}>
                    Bird
                </Button>
                <Button variant="outlined" startIcon={<PestControlRodentIcon />}>
                    Mouse
                </Button>
                <Button variant="outlined" startIcon={<SetMealIcon />}>
                    Fish
                </Button>
            </Stack>
            {/* <Box mt={2}>
                <TitlebarBelowImageList />
            </Box> */}
            <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <RecipeReviewCard />
            </Box>
        </Box>
    )
}
export default HomePage;
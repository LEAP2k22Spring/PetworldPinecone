import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import LimitTags from '../component/SearchAppBar';
import Stack from '@mui/material/Stack';
import RecipeReviewCard from '../component/PostCard';

function HomePage() {
    const router = useRouter()

    return (
        <Box mt={5} className={styles.home_wrapp}>
            <Box display='flex' justifyContent='flex-end' width='80%' zIndex={20}>
                <LimitTags />
            </Box>
            <Stack className={styles.categories_buttons} direction="row" spacing={1} mt={10} justifyContent="flex-end" display="flex" width="80%" overflow="scroll">
                <button>Dog</button>
                <button>Cat</button>
                <button>Bird</button>
                <button>Fish</button>
                <button>Humster</button>
            </Stack>

            <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <RecipeReviewCard />
            </Box>
        </Box>
    )
}
export default HomePage;
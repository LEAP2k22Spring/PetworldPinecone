/* eslint-disable react/jsx-key */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';


export default function RecipeReviewCard() {

  return (
    <Box display="flex" justifyContent="center" sx={{ flexGrow: 1, marginBottom: '120px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', width: '80%' }}>
        {itemData.map((item, i) => (
          <Box key={i}>
            <Card sx={{ width: '350px', borderRadius: '20px' }}>
              <CardMedia
                component="img"
                height="200"
                image={`${item.postImg}?w=248&fit=crop&auto=format`}
                alt="Paella dish"
              />
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500], width:'30px', height:'30px' }} aria-label="recipe" src={`${item.img}?w=248&fit=crop&auto=format`}>

                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardActions sx={{justifyContent:'space-between'}}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography sx={{ fontWeight:'400', fontSize:'13px'}}>Liked by</Typography>
                <AvatarGroup max={3} sx={{'& .MuiAvatar-root': { width: 20, height: 20, fontSize: 12, background:'orange' }, paddingRight:"60px"}}>
                  <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/76/ce/7f/76ce7fe848cc16930d2d3570e24850e9.jpg" />
                  <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/0f/f6/f8/0ff6f8f3a2361ae4e48e0ac6aa9bc939.jpg" />
                  <Avatar alt="Cindy Baker" src="https://i.pinimg.com/564x/0e/a6/5c/0ea65c90ce035d5df688780e551e736a.jpg" />
                  <Avatar alt="Agnes Walker" src="https://i.pinimg.com/564x/c0/8e/50/c08e50721c255c74d25964e740046ba8.jpg" />
                  <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg" />
                </AvatarGroup>
                <IconButton aria-label="add to favorites" sx={{fontSize:'16px', gap:'5px', borderRadius:'15px', bgcolor:'rgb(96 165 250)', color:'white', '&:hover': {
                backgroundColor: "rgb(0, 87, 194)"
              }} }>
                  follow
                  <PetsIcon sx={{color:'white'}} />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}


const itemData = [
  {
    kind: 'dog',
    img: 'https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg',
    postImg: 'https://i.pinimg.com/564x/a9/1a/e4/a91ae4770b72a7f7722da26e411a1dcf.jpg',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    kind: 'dog',
    img: 'https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg',
    postImg: 'https://i.pinimg.com/564x/ca/40/50/ca4050c48147c332f9cc3a426bb00649.jpg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    kind: 'dog',
    img: 'https://i.pinimg.com/736x/32/c4/c1/32c4c18960d199a0cfa2f3ed3d57d993.jpg',
    postImg: 'https://i.pinimg.com/564x/71/f6/39/71f639da247aa5777d51dc5898008376.jpg',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    kind: 'dog',
    img: 'https://i.pinimg.com/564x/c0/8e/50/c08e50721c255c74d25964e740046ba8.jpg',
    postImg: 'https://i.pinimg.com/564x/67/03/0d/67030d6e11f9e6f893299183212f2323.jpg',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    kind: 'dog',
    img: 'https://i.pinimg.com/564x/23/7d/d3/237dd355f066ba8f4d7afc20d791f0ef.jpg',
    postImg: 'https://i.pinimg.com/564x/38/6c/c5/386cc576f49af2614b3693d41e645911.jpg',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    kind: 'cat',
    img: 'https://i.pinimg.com/564x/35/0b/f2/350bf2c47c3ba4fae6165c3e8bb5b291.jpg',
    postImg: 'https://i.pinimg.com/564x/3a/cb/57/3acb57b5ce5b9603ed52f4d85040980c.jpg',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    kind: 'cat',
    img: 'https://i.pinimg.com/564x/7e/5c/f1/7e5cf18bb0fc138e693eb0a98b69e2c8.jpg',
    postImg: 'https://i.pinimg.com/564x/bb/72/d5/bb72d5b5c160d0dae76211cda8c23e34.jpg',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    kind: 'cat',
    img: 'https://i.pinimg.com/564x/0e/a6/5c/0ea65c90ce035d5df688780e551e736a.jpg',
    postImg: 'https://i.pinimg.com/564x/1f/f8/22/1ff822190343ca87a1d7b65732519bcf.jpg',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    kind: 'cat',
    img: 'https://i.pinimg.com/564x/0f/f6/f8/0ff6f8f3a2361ae4e48e0ac6aa9bc939.jpg',
    postImg: 'https://i.pinimg.com/564x/d7/c0/f5/d7c0f565e551c55f0329b81a66318f35.jpg',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    kind: 'humster',
    img: 'https://i.pinimg.com/564x/6e/ed/3d/6eed3defa0281e15647bc9e3c0fa1eaa.jpg',
    postImg: 'https://i.pinimg.com/564x/59/d6/a5/59d6a52c3f56146a96c36056aa583c2b.jpg',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    kind: 'humster',
    img: 'https://i.pinimg.com/736x/20/65/11/2065119b89c312756105f0ad0165f41f.jpg',
    postImg: 'https://i.pinimg.com/564x/e2/34/31/e234312108a82da2e20f163821e77eef.jpg',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    kind: 'fish',
    img: 'https://i.pinimg.com/564x/76/ce/7f/76ce7fe848cc16930d2d3570e24850e9.jpg',
    postImg: 'https://i.pinimg.com/564x/65/d7/9f/65d79f226c01b069d946f2d157917895.jpg',
    title: 'Bike',
    author: '@southside_customs',
  },
];
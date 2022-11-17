import { Avatar, Box, Button,  Paper,  Typography } from '@mui/material'
import { borderBottom, Container, fontFamily } from '@mui/system'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@mui/icons-material';

function Editprofile() {

  return (
    <Box
    sx={{
        width: '100%',
        height: '200vh'
    }}>
        <Typography variant='h5'
        sx={{
            width: '100%',
            display: 'flex',
            height: '70px',
            bgcolor: '#D9D9D9',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
            display:'flex',
             width:'80%', 
             display:'flex', 
             justifyContent:'center', 
             paddingLeft:'100px',
             color:'#696969'
             }}>
                Edit profile</div>
            <Button sx={{
            widht:'50px', 
            marginLeft:'100px', 
            color: '#696969',}}>
                Save</Button>
        </Typography>
        <Typography variant='h6'
        sx={{
            width: '100%',
            display: 'flex',
            height: '70px',
            justifyContent: 'space-around',
            alignItems: 'center',}}>
            <div style={{
                display:'flex', 
                justifyContent:'center',
                color: '#696969',
                fontSize: '20px',
                }}>
                    Profile picture</div>
            <Button href='/Uploadprofile' sx={{display:'flex', marginLeft:'100px', color: '#696969',}}>Upload new</Button>
        </Typography>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            borderBottom: '2px solid #D9D9D9',
            width:'100%',
            height: '140px'}}>
        <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1667795016173-3c1c7c86b1fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            sx={{width: 106, height: 106}}/>
        </Box>
        <Typography variant='h6'
        sx={{
            width: '100%',
            display: 'flex',
            height: '70px',
            justifyContent: 'space-around',
            alignItems: 'center'
            }}>
            <div style={{
                display:'flex', 
                justifyContent:'center',
                color: '#696969',
                fontSize: '20px',
                }}>
                    Background</div>
            <Button href="/Uploadbackground" sx={{display:'flex', marginLeft:'100px', color: '#696969',}}>Upload new</Button>
        </Typography>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            borderBottom: '2px solid #D9D9D9',
            width:'100%',
            height: '160px'
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    width: 344,
                    height: 126,
                    bgcolor:'#D9D9D9'
                    },
                }}>
                <Paper />
            </Box>
        </Box>

        <Box sx={{
            width:'100%',
            height:'40px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'50px'
        }}>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>Name</div>
            <div style={{
                width:'100px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end'
            }}>Munkhbold</div>
        </Box>
        <Box sx={{
            width:'100%',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'20px'
        }}>
            <div style={{
                width:'100px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>Bio</div>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end',
            }}>Hi my ...
            <Button sx={{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                color:'#696969'
            }}><AddIcon sx={{size:'medium'}}/></Button> </div>
        </Box>
        <Box sx={{
            width:'100%',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'20px'
        }}>
            <div style={{
                width:'100px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>Gender</div>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end',
            }}>Male
            <Button sx={{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                color:'#696969'
            }}><AddIcon sx={{size:'medium'}}/></Button> </div>
        </Box>
        <Box sx={{
            width:'100%',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'20px'
        }}>
            <div style={{
                width:'100px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>Date of birth</div>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end',
            }}>1999-09-09
            <Button sx={{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                color:'#696969'
            }}><AddIcon sx={{size:'medium'}}/></Button> </div>
        </Box>
        <Box sx={{
            width:'100%',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'20px'
        }}>
            <div style={{
                width:'100px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>Email adress</div>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end',
            }}>mbbold@gmail.com
            <Button sx={{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                color:'#696969'
            }}><AddIcon sx={{size:'medium'}}/></Button> </div>
        </Box>
        <Box sx={{
            width:'100%',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'20px'
        }}>
            <div style={{
                width:'100px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>City</div>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end',
            }}>Ulaanbaatar
            <Button sx={{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                color:'#696969'
            }}><AddIcon sx={{size:'medium'}}/></Button> </div>
        </Box>
        <Box sx={{
            width:'100%',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            borderBottom:'2px solid #D9D9D9',
            marginTop:'20px',
        }}>
            <div style={{
                width:'110px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-start'
            }}>Phone number</div>
            <div style={{
                width:'160px',
                height:'40px',
                display:'flex',
                justifyContent:'flex-end',
            }}>80797850 
            <Button sx={{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                color:'#696969'
            }}><AddIcon sx={{size:'medium'}}/></Button> </div>
        </Box>
        
    </Box>
  )
}

export default Editprofile



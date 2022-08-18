import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled_components from 'styled-components';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";



// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function StuffCard({stuff, id}) {
  const [expanded, setExpanded] = React.useState(false);



  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(stuff)
  return (
    <Card sx={{ maxWidth: 345}} style={{marginTop:"70px", height:"400px"}}>
      <StDiv
        component='div'>
        {/* <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" style={{ position: 'absolute', left: '20px' }}>R</Avatar> */}
        <span  style={{ marginLeft:'10px', marginRight:'-20px'}}>🙂</span><div style={{ width:'300px', marginLeft:'-30px'}}>{stuff.nickname}</div>
        <StSpan>{stuff.title}</StSpan>
      </StDiv>
      <CardMedia
        component="img"
        height="194"
        // image={stuff.image}
        // alt="Paella dish"
        style={{cursor:'pointer', backgroundImage: `url("${stuff.imageUrl}")`, backgroundSize:'230px 190px'}}
        onClick={() => {
          navigate(`/detail/${stuff.id}`)
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:'20px'}}>
          {stuff.content.length > 20 ? stuff.content.slice(0,15)+'...' :stuff.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
          <StPrice>{stuff.price} 원</StPrice>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        </CardContent>
      </Collapse>
    </Card>
  );
}

const StPrice = styled_components.div`
  margin-left:160px;
  width:120px;
  height:35px;
  border-radius:40px;
  background-color:#a0a0a0;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:600;
  color:white;
  font-size:17px;
`

const StDiv = styled_components.div`
  width:100%;
  height:70px;
  border:1px solid #ececec;
  border-bottom:none;
  display:flex;
  align-items:center;
  position:relative;
`

const StSpan = styled_components.div`
  font-weight:600;
  width: 100%;
`


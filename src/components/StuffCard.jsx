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

  return (
    <Card sx={{ maxWidth: 345}} style={{marginTop:"70px", height:"400px"}}>
      <StDiv
        component='div'>
          <Avatar sx={{ bgcolor: red[500] }}  aria-label="recipe" style={{position:'absolute', left:'20px'}}>R</Avatar>
          <StSpan>{stuff.title}</StSpan>
          </StDiv>
      <CardMedia
        component="img"
        height="194"
        // image={stuff.image}
        // alt="Paella dish"
        style={{cursor:'pointer', backgroundImage: `url("${stuff.image_url}")`, backgroundSize:'230px 190px'}}
        onClick={() => {
          navigate(`/detail/${stuff.id}`)
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {stuff.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share"> */}
          <StPrice>{stuff.price}</StPrice>
        {/* </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
          {/* <ExpandMoreIcon /> */}
        {/* </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
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
`;

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
  margin-left:180px;
`


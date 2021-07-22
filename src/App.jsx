import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import logo from '../src/img/logo.svg';
import mainImg from '../src/img/mainImg.png';
import mindMap from '../src/img/mindmap.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';  
import PersonalVideoOutlinedIcon from '@material-ui/icons/PersonalVideoOutlined';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import place1 from '../src/img/place1.png';
import place2 from '../src/img/place2.png';
import place3 from '../src/img/place3.png';
import place4 from '../src/img/place4.png';


const useStyles = makeStyles((theme) => ({
  '@global':{
    html:{
      margin: 0,
      padding: 0,
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  AppBar:{
    backgroundColor: '#fff',
    boxShadow: 'none',
    display: 'block'
  },
  header:{
    display: 'flex',
    alignItems: 'center',
  },
  toolbar:{
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 15),
  },
  Link:{
    color: '#1c313a',
    fontSize: 20,
    margin: theme.spacing(4),
    '&:hover': {
      textDecoration: 'none'
   },
  },
  logo:{
    width: 150
  },
  Icon:{
    color:'#4571FF',
    fontSize: '40px',
    margin: theme.spacing(0, 2),
  },
  main:{
    marginTop: '100px'
  },
  mainImg:{
    width: '100%',
    height: "25%",
    backgroundRepeat: 'none',
    display: 'block'
  },
  cardCont:{
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
    
  },
  card:{
    backgroundColor: '#4571FF',
    color:'white',
    borderRadius: '10px'
  },
  mindImg:{
    width: '50%',
    height: "25%",
  },
  carouselImg:{
    width: '80%'
  },
}));

const card = [
  {
    title: <PersonalVideoOutlinedIcon  style={{fontSize:'80px', color: '#fff'}}/>,
    subheader: '본인에게 맞는 전문 교육',
    description: ['- 발명반에서 하는','-프로그램들','- 적는 칸들'],
  },
  {
    title: <AssessmentOutlinedIcon style={{fontSize:'80px', color: '#fff'}} />,
    subheader: '수준급의 교육 과정 고도화',
    description: ['- 발명반에서 하는','-프로그램들','- 적는 칸들'],
  },
  {
    title: <QuestionAnswerOutlinedIcon style={{fontSize:'80px', color: '#fff'}} />,
    subheader: '수준급의 교육 과정 고도화',
    description: ['- 발명반에서 하는','-프로그램들','- 적는 칸들'],
  }
];

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar elevation={0} className={classes.AppBar}>
        <Toolbar  className={classes.toolbar}>
          <img src={logo} alt="profile" className={classes.logo}/>
          <navbar className={classes.header}>
            <Link variant="button" href="#" className={classes.Link} >
              소개
            </Link>
            <Link variant="button" href="#" className={classes.Link}>
              인재풀
            </Link>
            <Link variant="button" href="#" className={classes.Link}>
              프로젝트
            </Link>
          </navbar>
          <dev className={classes.header}>
            <NotificationsNoneOutlinedIcon className={classes.Icon} />
            <PermIdentityOutlinedIcon className={classes.Icon}/>
          </dev>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} className={classes.main}>
        <img src={mainImg} alt="profile" className={classes.mainImg}/>
      </Grid>
      <Grid item xs={12} className={classes.main}>
        <Typography align="center" style={{fontWeight: '600', fontSize:'70px', color:'#4571FF'}}>
          설립 ? 시작 ? 취지 ?
        </Typography>
        <Typography align="center" style={{color:'#4571FF', marginTop: '60px',fontSize:'30px'}}>
        이러이러해서 이 프로젝트를 시작하게 되었고,
        </Typography>
        <Typography align="center" style={{color:'#4571FF', fontSize:'30px'}}>
        현재 ~~이런 것을 진행하고 잇으며
        </Typography>
        <Typography align="center" style={{color:'#4571FF', fontSize:'30px'}}>
        ~~이런 것들을 할 것입니다. ~~마지막 한 마디
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.main}>
        <Typography align="center" style={{fontWeight: '600', fontSize:'70px', color:'#4571FF'}}>
          현재? 교육 진행 방향
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.cardCont}>
        {card.map((card) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={card.title} xs={12} md={3}>
              <Card className={classes.card}>
                <CardHeader
                  title={card.title}
                  subheader={card.subheader}
                  titleTypographyProps={{ align: 'center'}}
                  subheaderTypographyProps={{ align: 'center', variant:'h5', color:'disabled' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {card.description.map((line) => (
                      <Typography component="li" variant="h6" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12} className={classes.main}>
        <Typography align="center" style={{fontWeight: '600', fontSize:'70px', color:'#4571FF'}}>
          프로젝트 진행? 방향
        </Typography>
      </Grid>
      <Grid item xs={12} style={{textAlign:'center', marginTop:'50px'}}>
        <img src={mindMap} alt="profile" className={classes.mindImg}/>
      </Grid>
      <Grid item xs={12} className={classes.main}>
        <Typography align="center" style={{fontWeight: '600', fontSize:'70px', color:'#4571FF'}}>
          교육 시설
        </Typography>
      </Grid>
      <Example/>
    </React.Fragment>
  )
}




function Example(props)
{
    const items = [
        {
          img: place1,
          name: 'place1'
        },
        {
          img: place2,
          name: 'place2'
        },
        {
          img: place3,
          name: 'place3'
        },
        {
          img: place4,
          name: 'place4'
        }
    ]

    return (
        <Carousel style={{width: '70%'}} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    return (
        <Paper elevation={0} style={{marginTop:'50px', textAlign: 'center'}}>
            <img src={props.item.img} alt={props.item.name} className={classes.carouselImg} />
        </Paper>
    )
}


export default App
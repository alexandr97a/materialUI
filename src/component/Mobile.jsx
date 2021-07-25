import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import logo from '../img/logo.svg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';  
import PersonalVideoOutlinedIcon from '@material-ui/icons/PersonalVideoOutlined';

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
      backgroundColor: 'black',
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
      fontSize: 19,
      margin: theme.spacing(4),
      '&:hover': {
        textDecoration: 'none'
     },
    },
    logo:{
      width: 140
    },
    Icon:{
      color:'#4571FF',
      fontSize: '35px',
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
      justifyContent: 'space-evenly',
      marginTop: '40px',
      
    },
    card:{
      backgroundColor: '#4571FF',
      color:'white',
      borderRadius: '10px'
    },
    mindImg:{
      width: '40%',
      height: "25%",
    },
    carouselImg:{
      width: '100%'
    },
    footer:{
      marginTop:'50px',
      padding: theme.spacing(2, 2),
      borderTop: '1px solid #4571FF',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center'
    },
    footerLink:{
      color: '#4571FF',
      fontSize: 20,
      margin: theme.spacing(1),
      '&:hover': {
        textDecoration: 'none'
     },
    }
  }));
  


function Mobile() {

    const classes = useStyles();

    return(
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
        </React.Fragment>
    )
    
}

export default Mobile
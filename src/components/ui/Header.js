import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/anzlogo.png";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LinkIcon from '@material-ui/icons/Link';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import SearchBar from "material-ui-search-bar";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';


const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    marginTop: "70px",
  },
  logo: {
    padding: "0px",
    height: "30px",
    width: "30px",
    borderRadius: '4px'
  },
  toolbarheight: {
    height: "55px",
    backgroundColor: "white",
    boxShadow: '0.5px 0.5px 0.5px #FAF0E6'
  },
  tabContainer: {
    marginLeft: "50px",
    color: 'black'
  },
  tabContainerJobs: {
    marginLeft: "950px",
    color: 'orange',
    boxShadow: '0.5px 0.5px 0.5px #FAF0E6',
    "&:indicator": {
      backgroundColor: "blue",
      fontWeight: "bold",
    },
  },
  tabchildrenJob: {
    fontFamily: "Roboto",
    textTransform: "none",
    minWidth: "1rem",
    marginLeft: "1rem",

    color: 'orange',

  },
  tabchildren: {
    fontFamily: "Roboto",
    textTransform: "none",
    minWidth: "1rem",
    marginLeft: "1rem",
    indicatorColor: "",
    color: 'black'
  },

  tabLastchildren: {
    textTransform: "none",
    fontFamily: "san-serif",
    fontWeight: "bold",
    color: "gray",
    minWidth: "90px",
    // minWidth: "1rem",
  },
  ForumIconChange: {
    marginLeft: "auto",
    fontFamily: "Roboto",
    textTransform: "none",
    color: "black",
    fontWeight: "bold",
    borderRadius: "25px",
  },
  notificationChange: {
    marginLeft: "25px",
    fontFamily: "Roboto",
    textTransform: "none",
    color: "black",
    fontWeight: "bold",
    borderRadius: "25px",

  },
  avatarImg: {
    marginLeft: "25px",
    marginRight: "15px",
    fontFamily: "Raleway",
    textTransform: "none",
    color: "black",
    fontWeight: "bold",
    borderRadius: "25px",
  },
  logobutton: {
    marginLeft: "0px",
    padding: "0px",
    "&:hover": {
      backgroundColor: "transparent",
      fontWeight: "bold",
    },
    textTransform: 'none',
    fontFamily: "san-serif",
    color: "gray",
    minWidth: "90px"

  },
  linkbutton: {
    color: 'orange',
    marginLeft: '15px'
  },
  boxcontent: {
    marginTop: '70px',
    marginLeft: "90px",
    textDecoration: 'none',
    fontSize: '25px',
    fontWeight: 'normal'
  },
  newParacontent: {
    marginTop: '0px',
    marginLeft: "90px",
    fontSize: '11px',
    fontWeight: 'normal'
  },
  managedrop: {
    color: 'black'
  },
  searchBarIcon: {
    marginTop: '10px',
    marginLeft: "90px",
    width: '460px',
    height: '36px',
    backgroundColor: '#e4eff7',
    variant: 'outlined',
    border: '1px solid #d4d2d2',

  },
  divContainer: {
    display: 'flex'
  },
  divGrid1: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '10px'
  },
  divGridsubContainer1: {
    padding: '10px',
    marginLeft: "90px",
    marginTop: '50px',
    boxSizing: 'borderbox',
    boxShadow: '1px',
    backgroundColor: '#f0f8fc',
    borderRadius: '8px',
    width: '200px',
    height: '100px'
  },
  divGridsubContainer2: {
    padding: '10px',
    marginLeft: "90px",
    marginTop: '8px',
    boxSizing: 'borderbox',
    boxShadow: '1px',
    backgroundColor: '#f0f8fc',
    borderRadius: '8px',
    width: '200px',
    height: '70px'
  },
  divGridsubContainer3: {
    padding: '10px',
    marginLeft: "90px",
    marginTop: '8px',
    marginBotton: '30px',
    boxSizing: 'borderbox',
    boxShadow: '1px',
    backgroundColor: '#f0f8fc',
    borderRadius: '8px',
    width: '200px',
    height: '172px',
    overFlow: 'scroll'
  },
  divGridsubContainer4: {
    padding: '10px',
    marginLeft: "90px",
    marginTop: '8px',
    marginBotton: '30px',
    boxSizing: 'borderbox',
    boxShadow: '1px',
    backgroundColor: '#f0f8fc',
    borderRadius: '8px',
    width: '200px',
    height: '70px'
  },

  divGridContainer2: {
    padding: '10px',
    marginLeft: "20px",
    marginTop: '10px',
    boxSizing: 'borderbox',
    boxShadow: '0px 0.8px 2px #888888',
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '600px',
    height: '70px'
  },
  divsubAnchor1: {
    fontSize: '9px',
    color: '#04c6d6',
    textDecoration: 'none'
  },
  anchorContent: {
    marginLeft: '20px',
    fontSize: '12px',
    marginTop: '16px',
    color: 'gray'
  },
  textContainer: {
    width: '190px',
    borderRadius: '4px',
    border: '1px solid #ccd2db',
  },
  gridPara1: {
    padding: '0px',
    marginTop: '0px',
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  gridPara2: {
    fontSize: '10px',
  },
  divgridPara2: {
    fontSize: '10px',
    padding: '0px',
    margin: '0px',
    color: 'gray'
  },
  divgridPara1: {
    fontSize: '13px',
    fontWeight: '500'
  },

  gridbutton1: {
    variant: 'contained',
    marginLeft: '135px',
    color: 'orange',
    textTransform: 'uppercase',
    fontSize: '7px',
    border: '1px solid orange',
    height: '20px',
    marginTop: '10px'
  },
  gridbutton2: {
    variant: 'contained',
    color: 'orange',
    textTransform: 'uppercase',
    fontSize: '7px',
    border: '1px solid orange',
    height: '20px',
    marginTop: '10px'
  },
  griddivbutton: {
    variant: 'contained',
    color: 'orange',
    textTransform: 'uppercase',
    fontSize: '7px',
    height: '20px',
    backgroundColor: '#d7f7e2',
    width: '60px',
    marginLeft: '0'
  }

}));


export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, index) => {
    setValue(index);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/Services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/therevolution" && value !== 2) {
      setValue(2);
    }
  }, [value]);
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.toolbarheight}>
        <Toolbar disableGutters={true}>
          <LinkIcon className={classes.linkbutton} />
          <Tabs
            
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="primary"
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
          >
            <Tab
              aria-owns={anchorEl ? "home-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              label="Dashboard"
              className={classes.tabchildren}
              component={Link}
              to="/"
            />

            <Tab
              label="Jobs"
              className={classes.tabchildren}
              component={Link}
              to="/Services"
            />
            <Tab
              label="My Calender"
              className={classes.tabchildren}
              component={Link}
              to="/therevolution"
            />
            <Tab
              label="Connections"
              className={classes.tabchildren}
              component={Link}
              to="/AboutUs"
            />
          </Tabs>

          <Button
            id="home-menu"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="none"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.logobutton}
            onMouseOver={(event) => handleClick(event)}
            onChange={handleChange}

          >
            <p className={classes.managedrop}>Manage</p>
          </Button>
          <MessageOutlinedIcon className={classes.ForumIconChange} />
          <NotificationsNoneOutlinedIcon className={classes.notificationChange} />
          <Avatar alt="Remy Sharp" src={logo} className={classes.avatarImg} />
          <Menu
            id="home-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={(event) => handleClose(event)}
            MenuListProps={{ onMouseLeave: handleClose }}

          >
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(0);
              }}
              component={Link}
              to="/HOME1"
            >
              HOME1
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(0);
              }}
              component={Link}
              to="/HOME2"
            >
              HOME2
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(0);
              }}
              component={Link}
              to="/HOME3"
            >
              HOME3
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <p className={classes.boxcontent}>327 Coaching Jobs Available</p>
      <p className={classes.newParacontent}>Jobs available in Mental Fitness and Mental Health based on your profile</p>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainerJobs}
        TabIndicatorProps={{
          style: {
            backgroundColor: 'orange'

          },
        }}
      >
        <Tab
          aria-owns={anchorEl ? "home-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          label="All Jobs"
          className={classes.tabchildrenJob}
          component={Link}
          to="/"
        />

        <Tab
          label="My Applied Jobs"
          className={classes.tabchildren}
          component={Link}
          to="/Services"
        />
        <Tab
          label="My Saved Jobs"
          className={classes.tabchildren}
          component={Link}
          to="/therevolution"
        />

      </Tabs>
      <div className={classes.divContainer}>
        <SearchBar className={classes.searchBarIcon} />
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className={classes.anchorContent}>Advanced Search</a>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '40px', marginTop: '18px', padding: '0' , marginLeft:'auto', marginRight:'200px'}}>
          <p className={classes.divgridPara2}>Sort By</p>
          <Button
            id="home-menu"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="outlined"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.logobutton}
            onMouseOver={(event) => handleClick(event)}
            onChange={handleChange}
            style={{fontSize:'11px', height:'15px', width:'30px', color:'gray'}}

          >
            <p className={classes.managedrop} style={{ color:'gray'}}>Date Passed</p>
          </Button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 8fr', padding: '0px', marginLeft: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            padding: '0px',
            gridRowGap: '0px'
          }}
        >
          <div className={classes.divGridsubContainer1}>
            <p className={classes.gridPara1}>Create Job Alert</p>
            <p className={classes.gridPara2}>create a job alert now and never miss a Job</p>
            <input type="text" id="fname" name="fname" className={classes.textContainer} placeholder="Enter Keyword"></input>
            <Button className={classes.gridbutton1}>Save Alert</Button>
          </div>
          <div className={classes.divGridsubContainer2} style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
            <p className={classes.gridPara1}>My Job Feed</p>
            <a href="www.googl.com" className={classes.divsubAnchor1}>Mental fitness</a>
            <a href="www.googl.com" className={classes.divsubAnchor1} >Mental Health</a>
            <hr style={{ color: 'gray', width: '70%', marginLeft: '0px', padding: '0px' }} />
            <a href="www.googl.com" className={classes.divsubAnchor1}>Mental fitness</a>
          </div>
          <div className={classes.divGridsubContainer3} >
            <p className={classes.gridPara1}>Filter By Category</p>
            <div style={{ fontSize: '11px', WebkitOverflowScrolling: '10px' }} >
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Agile</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Tech &amp; Programming</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>UX &amp; Design</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Business</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Life</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>career</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Art &amp; craft</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Maths</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>English</label>
            </div>
          </div>
          <div className={classes.divGridsubContainer4} >
            <p className={classes.gridPara1}>Job Type</p>
            <div style={{ fontSize: '11px' }} >
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Full Time</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Part Time</label>
              <br />
              <input type="checkbox" style={{ height: '11px' }} />
              <label>Contract</label>
              <br />
            </div>
          </div>
        </div>
        <div>
          <div className={classes.divGridContainer2} style={{ marginTop: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gridGap: '40px', margin: '0', padding: '0', lineHeight: '0px' }}>
              <img
                src={logo}
                alt="Logo"
                className={classes.logo}
                component={Link}
                to="/Logo"
              />
              <div style={{ display: 'grid' }}>
                <p className={classes.divgridPara1}>Looking for Certified Course in stress Management</p>
                <p className={classes.divgridPara2}>Australia &amp; New Zealand banking Group Ltd.</p>
                <span style={{fontWeight:'600' , marginLeft:'320px'}}>$1200 - $2000</span>
                <p style={{fontSize:'7px' ,color:'gray', marginLeft:'340px', lineHeight:'0px', marginTop:'15px'}}>Session for 4 members</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px', margin: '0', padding: '0' }}>
                <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '9px' }}>New</p>
                <BookmarkBorderOutlinedIcon style={{ color: '#b8b8b8', margin: '0', padding: '0' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 85px 100px 80px 1fr', gridGap: '10px' }}>
              <Button className={classes.griddivbutton} >Full Time</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Health</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Fitness</Button>
              <p className={classes.divgridPara2} style={{ marginTop: '0px', color: 'gray', marginLeft: '0px' }}>Apply by 30 nov</p>
              <p className={classes.divgridPara2} style={{ marginTop: '0px', color: 'gray', marginLeft: 'auto' }}>Today</p>
            </div>
          </div>
          <div className={classes.divGridContainer2} >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gridGap: '40px', margin: '0', padding: '0', lineHeight: '0px' }}>
              <img
                src={logo}
                alt="Logo"
                className={classes.logo}
                component={Link}
                to="/Logo"
              />
              <div style={{ display: 'grid' }}>
                <p className={classes.divgridPara1}>Looking for Certified Course in stress Management</p>
                <p className={classes.divgridPara2}>Australia &amp; New Zealand banking Group Ltd.</p>
                <span style={{fontWeight:'600' , marginLeft:'320px'}}>$1200 - $2000</span>
                <p style={{fontSize:'7px' ,color:'gray', marginLeft:'340px', lineHeight:'0px', marginTop:'15px'}}>Session for 4 members</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px', margin: '0', padding: '0' }}>
                <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '9px' }}>New</p>
                <BookmarkBorderOutlinedIcon style={{ color: '#b8b8b8', margin: '0', padding: '0' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 85px 100px 80px 1fr', gridGap: '10px' }}>
              <Button className={classes.griddivbutton} >Full Time</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Health</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Fitness</Button>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: '0px' }}>Apply by 30 nov</p>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: 'auto' }}>Today</p>
            </div>
          </div>
          <div className={classes.divGridContainer2} >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gridGap: '40px', margin: '0', padding: '0', lineHeight: '0px' }}>
              <img
                src={logo}
                alt="Logo"
                className={classes.logo}
                component={Link}
                to="/Logo"
              />
              <div style={{ display: 'grid' }}>
                <p className={classes.divgridPara1}>Looking for Certified Course in stress Management</p>
                <p className={classes.divgridPara2}>Australia &amp; New Zealand banking Group Ltd.</p>
                <span style={{fontWeight:'600' , marginLeft:'320px'}}>$1200 - $2000</span>
                <p style={{fontSize:'7px' ,color:'gray', marginLeft:'340px', lineHeight:'0px', marginTop:'15px'}}>Session for 4 members</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px', margin: '0', padding: '0' }}>
                <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '9px' }}>New</p>
                <BookmarkBorderOutlinedIcon style={{ color: '#b8b8b8', margin: '0', padding: '0' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 85px 100px 80px 1fr', gridGap: '10px' }}>
              <Button className={classes.griddivbutton} >Full Time</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Health</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Fitness</Button>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: '0px' }}>Apply by 30 nov</p>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: 'auto' }}>Today</p>
            </div>
          </div>
          <div className={classes.divGridContainer2} >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gridGap: '40px', margin: '0', padding: '0', lineHeight: '0px' }}>
              <img
                src={logo}
                alt="Logo"
                className={classes.logo}
                component={Link}
                to="/Logo"
              />
              <div style={{ display: 'grid' }}>
                <p className={classes.divgridPara1}>Looking for Certified Course in stress Management</p>
                <p className={classes.divgridPara2}>Australia &amp; New Zealand banking Group Ltd.</p>
                <span style={{fontWeight:'600' , marginLeft:'320px'}}>$1200 - $2000</span>
                <p style={{fontSize:'7px' ,color:'gray', marginLeft:'340px', lineHeight:'0px', marginTop:'15px'}}>Session for 4 members</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px', margin: '0', padding: '0' }}>
                <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '9px' }}>New</p>
                <BookmarkBorderOutlinedIcon style={{ color: '#b8b8b8', margin: '0', padding: '0' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 85px 100px 80px 1fr', gridGap: '10px' }}>
              <Button className={classes.griddivbutton} >Full Time</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Health</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Fitness</Button>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: '0px' }}>Apply by 30 nov</p>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: 'auto' }}>Today</p>
            </div>
          </div>
          <div className={classes.divGridContainer2} >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gridGap: '40px', margin: '0', padding: '0', lineHeight: '0px' }}>
              <img
                src={logo}
                alt="Logo"
                className={classes.logo}
                component={Link}
                to="/Logo"
              />
              <div style={{ display: 'grid' }}>
                <p className={classes.divgridPara1}>Looking for Certified Course in stress Management</p>
                <p className={classes.divgridPara2}>Australia &amp; New Zealand banking Group Ltd.</p>
                <span style={{fontWeight:'600' , marginLeft:'320px'}}>$1200 - $2000</span>
                <p style={{fontSize:'7px' ,color:'gray', marginLeft:'340px', lineHeight:'0px', marginTop:'15px'}}>Session for 4 members</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px', margin: '0', padding: '0' }}>
                <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '9px' }}>New</p>
                <BookmarkBorderOutlinedIcon style={{ color: '#b8b8b8', margin: '0', padding: '0' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 85px 100px 80px 1fr', gridGap: '10px' }}>
              <Button className={classes.griddivbutton} >Full Time</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Health</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Fitness</Button>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: '0px' }}>Apply by 30 nov</p>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: 'auto' }}>Today</p>
            </div>
          </div>
          <div className={classes.divGridContainer2} >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gridGap: '40px', margin: '0', padding: '0', lineHeight: '0px' }}>
              <img
                src={logo}
                alt="Logo"
                className={classes.logo}
                component={Link}
                to="/Logo"
              />
              <div style={{ display: 'grid' }}>
                <p className={classes.divgridPara1}>Looking for Certified Course in stress Management</p>
                <p className={classes.divgridPara2}>Australia &amp; New Zealand banking Group Ltd.</p>
                <span style={{fontWeight:'600' , marginLeft:'320px'}}>$1200 - $2000</span>
                <p style={{fontSize:'7px' ,color:'gray', marginLeft:'340px', lineHeight:'0px', marginTop:'15px'}}>Session for 4 members</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px', margin: '0', padding: '0' }}>
                <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '9px' }}>New</p>
                <BookmarkBorderOutlinedIcon style={{ color: '#b8b8b8', margin: '0', padding: '0' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 85px 100px 80px 1fr', gridGap: '10px' }}>
              <Button className={classes.griddivbutton} >Full Time</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Health</Button>
              <Button className={classes.griddivbutton} style={{ width: '80px', backgroundColor: '#e8ebe9', color: 'gray' }}>Mental Fitness</Button>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: '0px' }}>Apply by 30 nov</p>
              <p className={classes.divgridPara2} style={{ marginTop: '10px', color: 'gray', marginLeft: 'auto' }}>Today</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

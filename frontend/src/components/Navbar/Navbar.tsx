import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
  ];

  const StyledAppBar = styled(AppBar)(() => ({
    background: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    minHeight: "80px",
    [theme.breakpoints.down('md')]: {
      padding: "0 16px",
    }
  }));

  const Logo = styled(Box)(() => ({
    fontSize: "24px",
    fontWeight: "900",
    background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: "-0.05em",
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }));

  const NavMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '8px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  }));

  const NavButton = styled(Button)(() => ({
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    padding: '12px 20px',
    borderRadius: '12px',
    textTransform: 'none',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '2px',
      background: 'linear-gradient(90deg, #00d4ff, #00ff94)',
      transition: 'width 0.3s ease',
    },
    
    '&:hover': {
      backgroundColor: 'rgba(0, 212, 255, 0.1)',
      color: '#00d4ff',
      transform: 'translateY(-2px)',
    },
    
    '&:hover::before': {
      width: '80%',
    }
  }));

  const MobileMenuButton = styled(IconButton)(({ theme }) => ({
    color: '#ffffff',
    padding: '12px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 212, 255, 0.1)',
      color: '#00d4ff',
      transform: 'scale(1.1)',
    }
  }));

  const StyledDrawer = styled(Drawer)(() => ({
    '& .MuiDrawer-paper': {
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      width: 300,
      border: 'none',
      borderLeft: '1px solid rgba(0, 212, 255, 0.2)',
      boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
    }
  }));

  const DrawerHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
  }));

  const StyledListItem = styled(ListItem)(() => ({
    borderRadius: '12px',
    margin: '8px 16px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(0, 212, 255, 0.1)',
      transform: 'translateX(8px)',
    }
  }));

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box>
      <DrawerHeader>
        <Logo onClick={handleLogoClick}>VS</Logo>
        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ 
            color: '#ffffff',
            '&:hover': { 
              backgroundColor: 'rgba(0, 212, 255, 0.1)',
              color: '#00d4ff' 
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <StyledListItem 
            key={item.label} 
            onClick={() => handleNavClick(item.href)}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{
                fontSize: "18px",
                fontWeight: "500",
                color: '#ffffff',
              }}
            />
          </StyledListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Logo onClick={handleLogoClick}>VS</Logo>
          
          <NavMenu>
            {menuItems.map((item) => (
              <NavButton 
                key={item.label}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </NavButton>
            ))}
          </NavMenu>
          
          <MobileMenuButton
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <MenuIcon />
          </MobileMenuButton>
        </StyledToolbar>
      </StyledAppBar>
      
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
};

export default NavBar;
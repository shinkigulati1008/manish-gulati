interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  desktopOnlySx: {
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  mobileOnlySx: {
    display: {
      sm: "none",
    },
  },
  mobileNavIcon: {
    marginRight: ".5rem",
  },
  toolbarSx: {
    width : "90%",
    margin : "0 auto"
  },
  logo: {
    alignItems: "center",
    color: "inherit",
    display: "flex",
    textDecoration: "none",    
    "&:hover": {
      cursor: "pointer",
      
    },
    "& > div": {
      position: "relative",
      marginTop: ".25rem",
    },
    "& :not(img)": {
      lineHeight: "1.25",
    }
  },
  logoSx: {
    height: {
      xs: "4rem",
      sm: "6.5rem",
    },
    width: {
      xs: "4rem",
      sm: "6.5rem",
    },
  },
  desktopNavItems: {
    marginLeft: "auto",
  },
  navItem: {
    color: "inherit",
    textDecoration: "inherit",
  },
  desktopNavItemActiveSx: {
    color: "primary.light",
  },
  mobileNavItemActiveSx: {
    color: "primary.main",
  },
  desktopNavItemButtonSx: {
    "&:hover": {
      backgroundColor: "secondary.light",
    },
  },
  drawer: {
    "& > div": {
      textAlign: "center",
    },
    "& .MuiDrawer-paper": {
      width: "15rem",
    },
  },
  mobileNavItemButton: {
    textAlign: "center",
  },
};

export default styles;

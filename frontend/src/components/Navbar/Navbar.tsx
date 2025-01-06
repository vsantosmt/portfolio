import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {

  const StyledToobar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: "space-evenly"
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>
            <a href="#sobre" style={{ color: "inherit", textDecoration: "none" }}>
              Sobre
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#skills" style={{ color: "inherit", textDecoration: "none" }}>
              Skills
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#projetos" style={{ color: "inherit", textDecoration: "none" }}>
              Projetos
            </a>
          </MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;




// import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

// const NavBar = () => {

//     const StyledToobar = styled(Toolbar)(({}) => ({
//         display: "flex",
//         justifyContent: "space-evenly"
//     }))

//     return (
//       <>
//         <AppBar position="absolute">
//             <StyledToobar>
//                 <MenuItem>Sobre</MenuItem>
//                 <MenuItem>Skills</MenuItem>
//                 <MenuItem>Projetos</MenuItem>
//             </StyledToobar>
//         </AppBar>
//       </>
//     )
//   }
  
//   export default NavBar
  
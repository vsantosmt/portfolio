import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            // backgroundColor: "red",
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            // backgroundColor: "blue",
            paddingTop: "0"
        }
    }))

    const StyledImage = styled("img")(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"100%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImage src={Avatar}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Vinicius Santos</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Sou um Analista de Infraestrutura</Typography>
                        <Grid container display="flex" justifyContent="center"spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                <DownloadIcon/>
                                <Typography>
                                    Download CV
                                </Typography> 
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                <MailOutlineIcon/>
                                <Typography>
                                Entre em contato comigo
                                </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  //
  
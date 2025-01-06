import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import NavBar from "../../../../components/Navbar/Navbar";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }
    }));

    const StyledImage = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    // Função para baixar o CV
    const handleDownloadCV = () => {
        window.open('http://144.33.28.235:5000/download_cv', '_blank'); // Mude a URL conforme necessário
    };

    // Função para o botão de contato
    const handleContactMe = () => {
        console.log("Entrar em contato clicado!");
        // Aqui você pode abrir um formulário ou modal para contato
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"100%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Vinicius Santos</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Sou um Analista de Infraestrutura</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClickAction={handleDownloadCV}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClickAction={handleContactMe}>
                                        <MailOutlineIcon />
                                        <Typography>Entre em contato comigo</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>

            <div>
                {/* Navbar */}
                <NavBar />

                {/* Seções */}
                <section id="sobre" style={{ padding: '100px 0', backgroundColor: '#f0f0f0' }}>
                    <h2>Sobre</h2>
                    <p>Esta é a seção de Sobre. Aqui você pode escrever informações sobre você ou seu projeto.</p>
                </section>

                <section id="skills" style={{ padding: '100px 0', backgroundColor: '#e0e0e0' }}>
                    <h2>Skills</h2>
                    <p>Esta seção descreve suas habilidades. Liste suas competências aqui.</p>
                </section>

                <section id="projetos" style={{ padding: '100px 0', backgroundColor: '#d0d0d0' }}>
                    <h2>Projetos</h2>
                    <p>Aqui você pode falar sobre os projetos que você desenvolveu ou está desenvolvendo.</p>
                </section>
            </div>
        </>
    );
};

export default Hero;

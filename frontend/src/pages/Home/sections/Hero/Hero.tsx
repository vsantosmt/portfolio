import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

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

    // paleta dos sections
    const Section = styled("section")(({theme}) => ({
        padding: '100px 0',
        flexDirection: "column",
        alignItems: "center",
        display: "flex"
    }));

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

         

            <Section id="sobre">
                <Typography variant="h2">Sobre</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ornare neque. Aliquam tristique urna sit amet aliquet condimentum. Curabitur ultricies turpis nec sem posuere tincidunt. Aenean non arcu ut nisl vulputate imperdiet. Nulla tellus arcu, dignissim ut elementum vel, scelerisque a dui. In vel convallis ex, vel suscipit enim. Curabitur vestibulum sem faucibus ligula vulputate, ac tempus libero condimentum. Sed at turpis hendrerit, hendrerit lorem eu, tempor augue. Phasellus pharetra nisi a sem volutpat, et pulvinar nisi interdum. Cras fermentum dui tellus, quis mattis augue fringilla sit amet. Donec vitae elit mauris. Nam efficitur nisl leo, tempus luctus augue lacinia nec. Etiam efficitur convallis pretium. Nam aliquam tellus ornare nulla accumsan, a ultricies mi consequat. Vestibulum eget nisl nec sapien eleifend lacinia et quis tortor.o.</Typography>
            </Section>

            <Section id="skills">
                <Typography variant="h2">Skills</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ornare neque. Aliquam tristique urna sit amet aliquet condimentum. Curabitur ultricies turpis nec sem posuere tincidunt. Aenean non arcu ut nisl vulputate imperdiet. Nulla tellus arcu, dignissim ut elementum vel, scelerisque a dui. In vel convallis ex, vel suscipit enim. Curabitur vestibulum sem faucibus ligula vulputate, ac tempus libero condimentum. Sed at turpis hendrerit, hendrerit lorem eu, tempor augue. Phasellus pharetra nisi a sem volutpat, et pulvinar nisi interdum. Cras fermentum dui tellus, quis mattis augue fringilla sit amet. Donec vitae elit mauris. Nam efficitur nisl leo, tempus luctus augue lacinia nec. Etiam efficitur convallis pretium. Nam aliquam tellus ornare nulla accumsan, a ultricies mi consequat. Vestibulum eget nisl nec sapien eleifend lacinia et quis tortor..</Typography>
            </Section>

            <Section id="projetos">
                <Typography variant="h2">Projetos</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ornare neque. Aliquam tristique urna sit amet aliquet condimentum. Curabitur ultricies turpis nec sem posuere tincidunt. Aenean non arcu ut nisl vulputate imperdiet. Nulla tellus arcu, dignissim ut elementum vel, scelerisque a dui. In vel convallis ex, vel suscipit enim. Curabitur vestibulum sem faucibus ligula vulputate, ac tempus libero condimentum. Sed at turpis hendrerit, hendrerit lorem eu, tempor augue. Phasellus pharetra nisi a sem volutpat, et pulvinar nisi interdum. Cras fermentum dui tellus, quis mattis augue fringilla sit amet. Donec vitae elit mauris. Nam efficitur nisl leo, tempus luctus augue lacinia nec. Etiam efficitur convallis pretium. Nam aliquam tellus ornare nulla accumsan, a ultricies mi consequat. Vestibulum eget nisl nec sapien eleifend lacinia et quis tortor..</Typography>
            </Section>
        </>
    );
};

export default Hero;


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
    const Section = styled("section")(({ }) => ({
        padding: '50px 0',
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        marginRight: 100,
        marginLeft: 100,
        textAlign: "justify",
    }));

    // paleta da section projetos
    const SectionProject = styled("section")(({ }) => ({
        backgroundColor: "#232323",
        // padding: '50px 0',
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        textAlign: "justify"
    }));

    const SectionProjectInside = styled("section")(({ }) => ({
        backgroundColor: "#232323",
        padding: '50px 0',
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        textAlign: "justify",
        marginRight: 100,
        marginLeft: 100
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

                <div className="container">
                    <div className="card">
                        <div className="icon">🏅</div>
                        <h3>Experiência</h3>
                        <p>2+ anos</p>
                        <p>Infraestrutura</p>
                    </div>
                    <div className="card">
                        <div className="icon">🎓</div>
                        <h3>Educação</h3>
                        <p>Tecnólogo</p>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                    </div>
                </div>

                <Typography variant="h6">Sou Vinícius Santos, um analista de infraestrutura com experiência em Azure Virtual Desktop e Citrix, focado na implementação e gerenciamento de soluções de virtualização de desktops e aplicações corporativas. Possuo sólido conhecimento em administração de sistemas operacionais Windows, gerenciamento de infraestrutura na nuvem e técnicas de IaC (Infrastructure as Code) utilizando Terraform.

                    Além disso, destaco minhas habilidades em automação de tarefas com PowerShell, provisionamento de infraestrutura eficiente e otimização de custos para clientes em ambientes de nuvem. Minha formação inclui cursos técnicos e superiores na área de desenvolvimento de sistemas, além de certificações como Azure Fundamentals e Oracle Cloud Infrastructure Foundations Associate.

                    Atualmente, estou aprofundando meus conhecimentos em DevOps, buscando integrar práticas de desenvolvimento e operações para entregar soluções ágeis e escaláveis.</Typography>
            </Section>

            <div className="divider"></div>

            <div id="skills">
                <Typography variant="h2">Skills</Typography>
                <div className="skills-container">
                    <div className="skill-card">
                        <h3>Infraestrutura</h3>
                        <p>Azure Virtual Desktop</p>
                        <p>Citrix Virtual Apps</p>
                        <p>Servidores Windows</p>
                        <p>Gerenciamento em Nuvem</p>
                    </div>
                    <div className="skill-card">
                        <h3>DevOps</h3>
                        <p>Terraform</p>
                        <p>Docker e Docker Compose</p>
                        <p>CI/CD com GitLab</p>
                        <p>Monitoramento com Grafana</p>
                    </div>
                    <div className="skill-card">
                        <h3>Automação</h3>
                        <p>PowerShell</p>
                        <p>Infraestrutura como Código</p>
                        <p>Otimização de Processos</p>
                    </div>
                    <div className="skill-card">
                        <h3>Outras Competências</h3>
                        <p>Resolução de Problemas</p>
                        <p>Trabalho em Equipe</p>
                        <p>Comunicação Clara</p>
                    </div>
                </div>
            </div>

            {/* <Section id="skills">
                <Typography variant="h2">Skills</Typography>
                <Typography variant="h6">Sou um profissional com sólida experiência em infraestrutura e virtualização, especializado em Azure Virtual Desktop e Citrix Virtual Apps and Desktops. Domino ferramentas de automação como PowerShell e Terraform, além de containerização com Docker e Docker Compose. Tenho conhecimento em pipelines CI/CD no GitLab, monitoramento com Grafana e Prometheus e gerenciamento de ambientes na nuvem, como Azure e OCI. Atualmente, estou expandindo minhas habilidades na área de DevOps, unindo desenvolvimento e operações para criar soluções mais eficientes e ágeis.</Typography>
            </Section> */}

            <SectionProject id="projetos">
                <SectionProjectInside>
                    <Typography color="primary.contrastText" variant="h2">Projetos</Typography>
                    <Typography color="primary.contrastText" variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ornare neque. Aliquam tristique urna sit amet aliquet condimentum. Curabitur ultricies turpis nec sem posuere tincidunt. Aenean non arcu ut nisl vulputate imperdiet. Nulla tellus arcu, dignissim ut elementum vel, scelerisque a dui. In vel convallis ex, vel suscipit enim. Curabitur vestibulum sem faucibus ligula vulputate, ac tempus libero condimentum. Sed at turpis hendrerit, hendrerit lorem eu, tempor augue. Phasellus pharetra nisi a sem volutpat, et pulvinar nisi interdum. Cras fermentum dui tellus, quis mattis augue fringilla sit amet. Donec vitae elit mauris. Nam efficitur nisl leo, tempus luctus augue lacinia nec. Etiam efficitur convallis pretium. Nam aliquam tellus ornare nulla accumsan, a ultricies mi consequat. Vestibulum eget nisl nec sapien eleifend lacinia et quis tortor..</Typography>
                </SectionProjectInside>
            </SectionProject>
        </>
    );
};

export default Hero;


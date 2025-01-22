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
        textAlign: "justify",
    }));

    const SectionProjectInside = styled("section")(({ }) => ({
        backgroundColor: "#232323",
        padding: '50px 0',
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        textAlign: "justify",
        marginRight: 100,
        marginLeft: 100,
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
                <section className="skills">
                    <div className="skill-box">
                        <h3>Infraestrutura</h3>
                        <ul>
                            <li>Azure Virtual Desktop</li>
                            <li>Citrix Virtual Apps</li>
                            <li>Windows Server e Workstation</li>
                            <li>Linux</li>
                            <li>Azure</li>
                            <li>OCI</li>
                        </ul>
                    </div>
                    <div className="skill-box">
                        <h3>DevOps</h3>
                        <ul>
                            <li>Docker e K8s</li>
                            <li>Pipeline CI/CD</li>
                            <li>Grafana e Prometheus</li>
                            <li>Nginx</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="skill-box">
                        <h3>Automação</h3>
                        <ul>
                            <li>Terraform</li>
                            <li>PowerShell</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div className="skill-box">
                        <h3>Outras Competências</h3>
                        <ul>
                            <li>Resolução de Problemas</li>
                            <li>Trabalho em Equipe</li>
                            <li>Comunicação Clara</li>
                            <li>Inglês Técnico</li>
                        </ul>
                    </div>
                    <div className="skill-box">
                        <h3>Certificações</h3>
                        <ul>
                            <li>Microsoft Certified: Fundamentals</li>
                            <li>Microsoft Certified: Security and Compliance</li>
                            <li>Azure Virtual Desktop Specialty</li>
                            <li>Oracle Cloud Infrastructure</li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className="spacer"></div>

            <SectionProject id="projetos">

                <SectionProjectInside>
                    <Typography color="primary.contrastText" variant="h2">Projetos</Typography>
                    <div className="internal-div-projects">

                        <Typography color="primary.contrastText" variant="h4">Portfólio</Typography>
                        <Typography color="primary.contrastText" variant="h6">Meu primeiro projeto foi este portfólio, no qual utilizei uma infraestrutura do Oracle Cloud Infrastructure (OCI) com Linux Ubuntu. Usei também Docker para containerização e Kubernetes para orquestração. O Git foi utilizado para controle de versão, enquanto o GitLab gerenciou o pipeline CI/CD. Nesse projeto, aprendi a automatizar completamente o processo de deploy, configurando pipelines que, ao realizar um commit em uma branch especificada, atualizam diretamente a infraestrutura no OCI, refletindo as mudanças em segundos.
                            Embora meu foco principal seja a área de infraestrutura, também desenvolvi o backend em Python e o frontend em Vite. Acesse <a href="https://vgsenterprise.online/">AQUI</a></Typography>
                        <div className="technologies">
                            <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" title="Docker" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" title="Kubernetes" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" alt="GitLab" title="GitLab" />
                            <img src="https://vitejs.dev/logo.svg" alt="Vite" title="Vite" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" title="Python" />
                        </div>

                        <div className="internal-div-escala">
                            <Typography color="primary.contrastText" variant="h4">Escala Online</Typography>
                            <Typography color="primary.contrastText" variant="h6">Projeto desenvolvido com o objetivo de melhorar a visibilidade e registrar o histórico de escalas e músicas de uma das igrejas da minha cidade. Para sua execução, utilizei a infraestrutura do OCI com Linux Ubuntu, Docker para containerização, e Kubernetes para orquestração. O controle de versão foi realizado com Git, enquanto o pipeline CI/CD foi implementado com GitHub Actions.

                                Nesse projeto, adquiri experiência na automação de processos de deploy, utilizando pipelines CI/CD no GitHub</Typography>
                            <Typography color="primary.contrastText" variant="h6">Para o desenvolvimento utilizei HTML, CSS e JS como tecnologias. Embora o frontend ainda não esteja finalizado e o banco de dados esteja em fase de implementação, toda a infraestrutura já está 100% automatizada por meio de pipelines CI/CD, permitindo a implantação completa com apenas um commit. Acesse <a href="https://admataoescala.vgsenterprise.online/">AQUI</a></Typography>

                            <div className="technologies">
                                <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" title="Docker" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" title="Kubernetes" />
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                        </div>
                    </div>
                </SectionProjectInside>
            </SectionProject >
        </>
    );
};

export default Hero;


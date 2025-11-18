import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    // Função para baixar o CV
    const handleDownloadCV = () => {
        window.open('/api/download_cv', '_blank');
    };

    // Função para o botão de contato
    const handleContactMe = () => {
        window.open('mailto:vinicius.santos@vgsenterprise.online', '_blank');
    };

    // Função para abrir GitHub
    const handleGitHub = () => {
        window.open('https://github.com/vsantosmt', '_blank');
    };

    // Função para abrir LinkedIn
    const handleLinkedIn = () => {
        window.open('https://linkedin.com/in/vinicius-santos', '_blank');
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-container">
                <div className="hero-background"></div>
                <Container maxWidth="lg" className="hero-content">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <div className="hero-image-container">
                                <Box position="absolute" width="100%" top={-50} right={0} sx={{ zIndex: 0 }}>
                                    <AnimatedBackground />
                                </Box>
                                <img 
                                    src={Avatar} 
                                    alt="Vinicius Santos" 
                                    className="hero-image"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box textAlign={{ xs: "center", md: "left" }}>
                                <div className="status-badge">
                                    <span className="status-dot"></span>
                                    Disponível para novos projetos
                                </div>
                                
                                <Typography variant="h1" className="hero-title" gutterBottom>
                                    Vinicius Santos
                                </Typography>
                                
                                <Typography variant="h3" className="hero-subtitle" gutterBottom>
                                    Analista de Infraestrutura & DevOps Engineer
                                </Typography>
                                
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: 'text.secondary',
                                        maxWidth: '600px',
                                        mb: 4,
                                        fontSize: '1.2rem',
                                        lineHeight: 1.7,
                                        mx: { xs: 'auto', md: 0 }
                                    }}
                                >
                                    Especialista em infraestrutura cloud, automação e virtualização. 
                                    Transformo ideias em soluções escaláveis usando Azure, Terraform, 
                                    Docker e Kubernetes.
                                </Typography>
                                
                                <div className="hero-buttons">
                                    <Button 
                                        className="btn btn-primary"
                                        onClick={handleDownloadCV}
                                        startIcon={<DownloadIcon />}
                                    >
                                        Download CV
                                    </Button>
                                    
                                    <Button 
                                        className="btn btn-secondary"
                                        onClick={handleContactMe}
                                        startIcon={<MailOutlineIcon />}
                                    >
                                        Entrar em Contato
                                    </Button>
                                </div>
                                
                                <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button 
                                        onClick={handleGitHub}
                                        startIcon={<GitHubIcon />}
                                        sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
                                    >
                                        GitHub
                                    </Button>
                                    <Button 
                                        onClick={handleLinkedIn}
                                        startIcon={<LinkedInIcon />}
                                        sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
                                    >
                                        LinkedIn
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/* About Section */}
            <section className="section" id="sobre">
                <Container maxWidth="lg">
                    <Typography variant="h2" className="section-title">
                        Sobre Mim
                    </Typography>
                    
                    <div className="about-cards">
                        <div className="about-card">
                            <span className="card-icon">🏅</span>
                            <h3 className="card-title">Experiência</h3>
                            <p className="card-text">3+ anos</p>
                            <p className="card-text">Infraestrutura & DevOps</p>
                        </div>
                        
                        <div className="about-card">
                            <span className="card-icon">🎓</span>
                            <h3 className="card-title">Educação</h3>
                            <p className="card-text">Tecnólogo</p>
                            <p className="card-text">Análise e Desenvolvimento de Sistemas</p>
                        </div>
                        
                        <div className="about-card">
                            <span className="card-icon">☁️</span>
                            <h3 className="card-title">Cloud Platforms</h3>
                            <p className="card-text">Azure & OCI</p>
                            <p className="card-text">Certified Professional</p>
                        </div>
                    </div>
                    
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            textAlign: 'center',
                            maxWidth: '900px', 
                            mx: 'auto',
                            color: 'text.secondary',
                            fontSize: '1.1rem',
                            lineHeight: 1.8
                        }}
                    >
                        Sou um analista de infraestrutura especializado em <strong style={{color: '#00d4ff'}}>Azure Virtual Desktop</strong> e 
                        <strong style={{color: '#00d4ff'}}> Citrix</strong>, com foco na implementação de soluções de virtualização corporativas. 
                        Possuo expertise em administração de sistemas Windows/Linux, infraestrutura cloud e 
                        <strong style={{color: '#00d4ff'}}> Infrastructure as Code (IaC)</strong> com Terraform.
                        <br/><br/>
                        Atualmente, estou expandindo conhecimentos em <strong style={{color: '#00ff94'}}>DevOps</strong>, 
                        integrando práticas de desenvolvimento e operações para criar soluções ágeis e escaláveis 
                        que impactam positivamente a experiência dos usuários.
                    </Typography>
                </Container>
            </section>

            <div className="divider"></div>

            {/* Skills Section */}
            <section className="section skills-section" id="skills">
                <Container maxWidth="lg">
                    <Typography variant="h2" className="section-title">
                        Competências Técnicas
                    </Typography>
                    
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            textAlign: 'center',
                            color: 'text.secondary',
                            mb: 6,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Tecnologias e ferramentas que domino para criar soluções robustas
                    </Typography>
                    
                    <div className="skills-grid">
                        <div className="skill-card">
                            <h3 className="skill-title">☁️ Cloud & Infraestrutura</h3>
                            <ul className="skill-list">
                                <li className="skill-item">Microsoft Azure (Virtual Desktop, AD)</li>
                                <li className="skill-item">Oracle Cloud Infrastructure (OCI)</li>
                                <li className="skill-item">Citrix Virtual Apps & Desktops</li>
                                <li className="skill-item">Windows Server & Workstation</li>
                                <li className="skill-item">Linux (Ubuntu, CentOS, RHEL)</li>
                                <li className="skill-item">Virtualização (Hyper-V, VMware)</li>
                            </ul>
                        </div>
                        
                        <div className="skill-card">
                            <h3 className="skill-title">🚀 DevOps & Automação</h3>
                            <ul className="skill-list">
                                <li className="skill-item">Docker & Kubernetes</li>
                                <li className="skill-item">Terraform (Infrastructure as Code)</li>
                                <li className="skill-item">CI/CD Pipelines (GitHub Actions, GitLab)</li>
                                <li className="skill-item">Nginx & Load Balancing</li>
                                <li className="skill-item">Monitoring (Grafana, Prometheus)</li>
                                <li className="skill-item">Git & Version Control</li>
                            </ul>
                        </div>
                        
                        <div className="skill-card">
                            <h3 className="skill-title">💻 Desenvolvimento & Scripting</h3>
                            <ul className="skill-list">
                                <li className="skill-item">PowerShell (Avançado)</li>
                                <li className="skill-item">Bash/Shell Scripting</li>
                                <li className="skill-item">Python (Automação & Backend)</li>
                                <li className="skill-item">JavaScript/TypeScript</li>
                                <li className="skill-item">React & Frontend Development</li>
                                <li className="skill-item">REST APIs & Web Services</li>
                            </ul>
                        </div>
                        
                        <div className="skill-card">
                            <h3 className="skill-title">🏆 Certificações</h3>
                            <ul className="skill-list">
                                <li className="skill-item">Microsoft Azure Fundamentals</li>
                                <li className="skill-item">Azure Virtual Desktop Specialty</li>
                                <li className="skill-item">Security & Compliance Fundamentals</li>
                                <li className="skill-item">Oracle Cloud Infrastructure Foundations</li>
                                <li className="skill-item">Citrix Virtual Apps & Desktops</li>
                                <li className="skill-item">CompTIA Security+ (Em progresso)</li>
                            </ul>
                        </div>
                        
                        <div className="skill-card">
                            <h3 className="skill-title">🎯 Soft Skills</h3>
                            <ul className="skill-list">
                                <li className="skill-item">Resolução de Problemas Complexos</li>
                                <li className="skill-item">Trabalho em Equipe Ágil</li>
                                <li className="skill-item">Comunicação Técnica Clara</li>
                                <li className="skill-item">Inglês Técnico Fluente</li>
                                <li className="skill-item">Mentoria e Treinamento</li>
                                <li className="skill-item">Gestão de Projetos</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Projects Section */}
            <section className="section projects-section" id="projetos">
                <Container maxWidth="lg">
                    <Typography variant="h2" className="section-title">
                        Projetos em Destaque
                    </Typography>
                    
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            textAlign: 'center',
                            color: 'text.secondary',
                            mb: 6,
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        Soluções que desenvolvi aplicando conhecimentos de infraestrutura, DevOps e desenvolvimento
                    </Typography>
                    
                    {/* Portfolio Project */}
                    <div className="project-card">
                        <Typography variant="h4" className="project-title">
                            🌐 Portfólio Profissional
                        </Typography>
                        
                        <Typography className="project-description">
                            Projeto completo desenvolvido com infraestrutura moderna no <strong>Oracle Cloud Infrastructure (OCI)</strong>. 
                            Implementei containerização com Docker, orquestração via Kubernetes e automação completa de CI/CD usando GitLab.
                        </Typography>
                        
                        <Typography className="project-description">
                            O diferencial está na <strong>automação total</strong>: ao realizar commit em branches específicas, 
                            o pipeline atualiza automaticamente a infraestrutura no OCI, refletindo mudanças em segundos. 
                            Backend desenvolvido em Python (FastAPI) e frontend moderno com React/TypeScript.
                        </Typography>
                        
                        <div className="tech-stack">
                            <span className="tech-tag">Oracle Cloud (OCI)</span>
                            <span className="tech-tag">Kubernetes</span>
                            <span className="tech-tag">Docker</span>
                            <span className="tech-tag">GitLab CI/CD</span>
                            <span className="tech-tag">Python/FastAPI</span>
                            <span className="tech-tag">React/TypeScript</span>
                            <span className="tech-tag">Terraform</span>
                        </div>
                        
                        <Box sx={{ textAlign: 'center', mt: 3 }}>
                            <Button 
                                className="btn btn-primary"
                                onClick={() => window.open('https://vgsenterprise.online/', '_blank')}
                                startIcon={<CodeIcon />}
                            >
                                Visualizar Projeto
                            </Button>
                        </Box>
                        
                        <div className="tech-icons">
                            <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" title="Docker" className="tech-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" title="Kubernetes" className="tech-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" alt="GitLab" title="GitLab" className="tech-icon" />
                            <img src="https://vitejs.dev/logo.svg" alt="Vite" title="Vite" className="tech-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" title="Python" className="tech-icon" />
                        </div>
                    </div>
                    
                    {/* Schedule Project */}
                    <div className="project-card">
                        <Typography variant="h4" className="project-title">
                            🎵 Sistema de Escala Online
                        </Typography>
                        
                        <Typography className="project-description">
                            Plataforma web desenvolvida para gerenciar escalas e histórico musical de uma comunidade religiosa. 
                            Infraestrutura robusta no OCI com containers Docker e orquestração Kubernetes para alta disponibilidade.
                        </Typography>
                        
                        <Typography className="project-description">
                            Implementei automação completa de deploy usando <strong>GitHub Actions</strong>, permitindo atualizações 
                            instantâneas da aplicação. Frontend em desenvolvimento com foco em performance, acessibilidade e 
                            experiência do usuário otimizada para dispositivos móveis.
                        </Typography>
                        
                        <div className="tech-stack">
                            <span className="tech-tag">Oracle Cloud (OCI)</span>
                            <span className="tech-tag">GitHub Actions</span>
                            <span className="tech-tag">Docker</span>
                            <span className="tech-tag">Kubernetes</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">HTML5/CSS3</span>
                            <span className="tech-tag">Progressive Web App</span>
                        </div>
                        
                        <Box sx={{ textAlign: 'center', mt: 3 }}>
                            <Button 
                                className="btn btn-secondary"
                                onClick={() => window.open('https://admataoescala.vgsenterprise.online/', '_blank')}
                                startIcon={<CloudIcon />}
                            >
                                Visualizar Demo
                            </Button>
                        </Box>
                        
                        <div className="tech-icons">
                            <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" title="Docker" className="tech-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" title="Kubernetes" className="tech-icon" />
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" title="GitHub" className="tech-icon" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className="tech-icon" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" className="tech-icon" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="tech-icon" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Hero;


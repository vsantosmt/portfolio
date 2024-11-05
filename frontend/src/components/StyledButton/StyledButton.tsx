import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClickAction?: () => void; // Adicionando uma propriedade para a ação de clique
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClickAction }) => {
    const StyledButtonComponent = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    }));

    return (
        <StyledButtonComponent onClick={onClickAction}>
            {children}
        </StyledButtonComponent>
    );
};

export default StyledButton;

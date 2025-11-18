import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClickAction?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
}

const StyledButton: React.FC<StyledButtonProps> = ({ 
    children, 
    onClickAction, 
    variant = 'primary',
    size = 'medium'
}) => {
    const StyledButtonComponent = styled("button")(({ theme }) => ({
        // Base styles
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: size === 'small' ? '8px' : size === 'large' ? '16px' : '12px',
        cursor: "pointer",
        border: "none",
        borderRadius: "12px",
        fontFamily: theme.typography.fontFamily,
        fontWeight: "600",
        textTransform: "none",
        textDecoration: "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        
        // Size variants
        ...(size === 'small' && {
            padding: "10px 20px",
            fontSize: "14px",
            minWidth: "120px",
        }),
        ...(size === 'medium' && {
            padding: "14px 28px",
            fontSize: "16px",
            minWidth: "160px",
        }),
        ...(size === 'large' && {
            padding: "18px 36px",
            fontSize: "18px",
            minWidth: "200px",
        }),
        
        // Variant styles
        ...(variant === 'primary' && {
            background: "linear-gradient(135deg, #00d4ff, #0099cc)",
            color: "#000000",
            boxShadow: "0 4px 16px rgba(0, 212, 255, 0.3)",
        }),
        ...(variant === 'secondary' && {
            background: "linear-gradient(135deg, #00ff94, #00cc75)",
            color: "#000000",
            boxShadow: "0 4px 16px rgba(0, 255, 148, 0.3)",
        }),
        ...(variant === 'outline' && {
            background: "transparent",
            color: "#00d4ff",
            border: "2px solid #00d4ff",
            boxShadow: "0 4px 16px rgba(0, 212, 255, 0.2)",
        }),
        
        // Shimmer effect
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: variant === 'outline' 
                ? 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            transition: 'left 0.6s ease',
        },
        
        '&:hover::before': {
            left: '100%',
        },
        
        // Hover effects
        '&:hover': {
            transform: "translateY(-3px) scale(1.02)",
            
            ...(variant === 'primary' && {
                background: "linear-gradient(135deg, #42d9ff, #00d4ff)",
                boxShadow: "0 8px 24px rgba(0, 212, 255, 0.5)",
            }),
            ...(variant === 'secondary' && {
                background: "linear-gradient(135deg, #4dffb6, #00ff94)",
                boxShadow: "0 8px 24px rgba(0, 255, 148, 0.5)",
            }),
            ...(variant === 'outline' && {
                background: "#00d4ff",
                color: "#000000",
                borderColor: "#00d4ff",
                boxShadow: "0 8px 24px rgba(0, 212, 255, 0.4)",
            }),
        },
        
        // Active state
        '&:active': {
            transform: "translateY(-1px) scale(1.01)",
            transition: "all 0.1s ease",
        },
        
        // Focus state
        '&:focus': {
            outline: "none",
            boxShadow: variant === 'outline'
                ? "0 0 0 3px rgba(0, 212, 255, 0.3)"
                : "0 0 0 3px rgba(0, 212, 255, 0.2)",
        },
        
        // Icon styling
        '& svg': {
            fontSize: size === 'small' ? '16px' : size === 'large' ? '22px' : '18px',
            transition: 'transform 0.3s ease',
        },
        
        '&:hover svg': {
            transform: 'scale(1.1)',
        },
        
        // Responsive
        [theme.breakpoints.down('md')]: {
            ...(size === 'medium' && {
                padding: "12px 24px",
                fontSize: "15px",
                minWidth: "140px",
            }),
            ...(size === 'large' && {
                padding: "16px 32px",
                fontSize: "17px",
                minWidth: "180px",
            }),
        },
        
        [theme.breakpoints.down('sm')]: {
            ...(size === 'small' && {
                padding: "8px 16px",
                fontSize: "13px",
                minWidth: "100px",
            }),
            ...(size === 'medium' && {
                padding: "10px 20px",
                fontSize: "14px",
                minWidth: "120px",
            }),
            ...(size === 'large' && {
                padding: "14px 28px",
                fontSize: "16px",
                minWidth: "160px",
            }),
        },
        
        // Disabled state
        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
            transform: 'none',
            '&:hover': {
                transform: 'none',
                boxShadow: variant === 'primary' 
                    ? "0 4px 16px rgba(0, 212, 255, 0.3)"
                    : variant === 'secondary'
                    ? "0 4px 16px rgba(0, 255, 148, 0.3)"
                    : "0 4px 16px rgba(0, 212, 255, 0.2)",
            }
        }
    }));

    return (
        <StyledButtonComponent onClick={onClickAction}>
            {children}
        </StyledButtonComponent>
    );
};

export default StyledButton;

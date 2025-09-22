import { AppBar, Toolbar, Typography, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function Nav({ onMenuClick }) {
    return (
        <AppBar 
            position="static" 
            sx={{ 
                backgroundColor: "#0f172a", 
                color: "#fff",
                borderBottom: "1px solid #888888ff"
            }}
            >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* 왼쪽 로고 */}
            <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        textDecoration: "none",
                        "&:hover": { color: "#90caf9" }
                    }}
                >
                    Safe
                </Typography>

            {/* 데스크탑 메뉴 */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button component={Link} to="/dashboard" sx={{ color: "#fff" }}>Dashboard</Button>
            <Button component={Link} to="/model" sx={{ color: "#fff" }}>Model</Button>
            </Box>

            {/* 알림 버튼 */}
            <IconButton sx={{ color: "#fff" }}>
            <NotificationsIcon />
            </IconButton>
        </Toolbar>
        </AppBar>
    );
}

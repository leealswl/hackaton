import { Box, Typography, List, ListItemButton, ListItemText, Divider, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function CCTV() {
  const [selectedCam, setSelectedCam] = useState("Camera 1");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cameras = [
    { id: 1, name: "카메라1", location: "초등학교 앞" },
    { id: 2, name: "카메라2", location: "중학교 앞" },
    { id: 3, name: "카메라3", location: "고등학교 앞" },
    { id: 4, name: "카메라4", location: "대학교 앞" },
  ];

  const alerts = [
    { id: 1, type: "납치 탐지", location: "초등학교 앞", color: "error" },
    { id: 2, type: "납치 의심", location: "초등학교 앞", color: "warning" },
  ];

  // 사이드바 내용
  const SidebarContent = (
    <Box
      sx={{
        width: 260,
        bgcolor: "#0f172a",
        color: "#fff",
        p: 2,
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Camera
      </Typography>
      <List>
  {cameras.map((cam) => (
    <ListItemButton
      key={cam.id}
      selected={selectedCam === cam.name}
      onClick={() => {
        setSelectedCam(cam.name);
        setDrawerOpen(false);
      }}
      sx={{
        borderRadius: "6px",
        mb: 1,
        "&.Mui-selected": { bgcolor: "#1e293b" },
      }}
    >
      <ListItemText
        primary={cam.name}
        secondary={cam.location}
        primaryTypographyProps={{ sx: { color: "#fff" } }}      
        secondaryTypographyProps={{ sx: { color: "#9ca3af" } }}
      />
    </ListItemButton>
  ))}
</List>

      <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.2)" }} />

    <Typography variant="h6" sx={{ mb: 1 }}>
    History
    </Typography>
    <List>
    {alerts.map((alert) => (
        <ListItemButton
        key={alert.id}
        sx={{
            borderRadius: "6px",
            mb: 1,
            "&.Mui-selected": { bgcolor: "#1e293b" }, // 선택 시 강조
            "&:hover": { bgcolor: "#949eadff" }, // hover 효과
        }}
        >
        <ListItemText
            primary={alert.type}
            secondary={alert.location}
            primaryTypographyProps={{ sx: { color: "#fff" } }}
            secondaryTypographyProps={{ sx: { color: "#9ca3af" } }}
        />
        </ListItemButton>
    ))}
    </List>
    </Box>
  );

  return (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      height: "calc(100vh - 64px)",
      overflow: "hidden",
    }}
  >
    {/* 데스크탑 사이드바 */}
    <Box sx={{ display: { xs: "none", md: "block" }, height: "100%" }}>
      {SidebarContent}
    </Box>

    {/* 모바일 Drawer 버튼 */}
    <Box sx={{ display: { xs: "flex", md: "none" }, p: 1, alignItems: "center" }}>
      <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#999999" }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ ml: 1 }}>
        Real-Time CCTV Feeds
      </Typography>
    </Box>

    <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      {SidebarContent}
    </Drawer>

    {/* CCTV 메인 화면 */}
        <Box
        sx={{
            flex: 1,
            bgcolor: "#f9fafb",
            p: 3,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
        }}
        >
        <Typography variant="h5" sx={{ mb: 2 }}>
            실시간 CCTV ({selectedCam})
        </Typography>
        <Box 
    sx={{ 
        flex: 1, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",

    }}
    >
    <img
        src="https://placehold.co/800x600"
        alt="cctv"
        style={{
        borderRadius: "8px",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        }}
    />
    </Box>
    </Box>
  </Box>
);

}

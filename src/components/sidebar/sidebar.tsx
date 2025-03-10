import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import scss from "./sidebar.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, Tooltip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NextLink from "next/link";
import { Settings } from "@mui/icons-material";
import Login from "../login";
import Dashboard from "@/pages/dashboard";
import MyApp from "../theme";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { data: session } = useSession();

  const avatarUrl = session?.user?.image as string;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    setOpen(false);
  };

  type User = {
    userId: string;
    name: string;
  };

  const menuRouteList = ["dashboard", "analytics", "profile"];
  const menuRouteList2 = ["settings", "/"];

  const menuListTranslations = ["Dashboard", "Analytics", "Profile"];
  const menuListTranslations2 = ["Settings", "Sign Out"];

  const menuRouteListUuid: User[] = menuListTranslations.map((name) => ({
    userId: uuidv4(),
    name,
  }));
  const menuRouteListUuid2: User[] = menuListTranslations2.map((name) => ({
    userId: uuidv4(),
    name,
  }));

  const menuListIcons = [<HomeIcon />, <EqualizerIcon />, <Person2Icon />];
  const menuListIcons2 = [<Settings />, <ExitToAppIcon />];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {session && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      marginRight: 1,
                    },
                    open && { display: "none" },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={[open && { display: "none" }]}
              >
                Fitz Dashboard App
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ padding: "8px", display: { xs: "none", md: "flex" } }}>
                <Typography>
                  {session ? `Welcome ${session?.user?.name}` : "Sign In"}
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={session?.user?.name as string}
                      src={avatarUrl}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link
                    href={`/dashboard/profile`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Profile
                    </Typography>
                  </Link>
                  <MenuItem
                    // onClick={handleCloseUserMenu}
                    onClick={() => (session ? signOut() : signIn())}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {session ? "Logout" : "Login"}
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {session && (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography sx={{ padding: "1rem" }}>Fitz Dashboard App</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%;",
            }}
          >
            <Box>
              <List>
                {menuRouteListUuid.map((text, index) => (
                  <ListItem
                    key={text.userId}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <NextLink
                      className={scss.link}
                      href={`/dashboard/${menuRouteList[index]}`}
                    >
                      <ListItemButton
                        onClick={() => handleListItemButtonClick(text.name)}
                        title={text.name}
                        aria-label={text.name}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {menuListIcons[index]}
                        </ListItemIcon>
                        <ListItemText
                          primary={text.name}
                          sx={{
                            color: theme.palette.text.primary,
                            opacity: open ? 1 : 0,
                          }}
                        />{" "}
                      </ListItemButton>
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Divider />
              <List>
                {menuRouteListUuid2.map((text, index) => (
                  <ListItem
                    key={text.userId}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <NextLink
                      className={scss.link}
                      href={`/dashboard/${menuRouteList2[index]}`}
                    >
                      <ListItemButton
                        onClick={() => handleListItemButtonClick(text.name)}
                        title={text.name}
                        aria-label={text.name}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {menuListIcons2[index]}
                        </ListItemIcon>
                        <ListItemText
                          primary={text.name}
                          sx={{
                            color: theme.palette.text.primary,
                            opacity: open ? 1 : 0,
                          }}
                        />{" "}
                      </ListItemButton>
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      )}
      <Box
        component="main"
        // sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />
        <></>
      </Box>
    </Box>
  );
}

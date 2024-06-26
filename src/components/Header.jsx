import { Button } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <nav className="mt-20">
        <ul className="flex flex-col space-y-4 mb-10  mx-5 capitalize text-lg font-medium ">
          <li className=" hover:text-blue-600">home</li>
          <li className=" hover:text-blue-600">about</li>
          <li className=" hover:text-blue-600">application</li>
          <li className=" hover:text-blue-600">history</li>
        </ul>
        <div className="flex flex-row items-center  space-x-2 mx-5 ">
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "20px",
              fontSize: "22px",
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "20px",
              fontSize: "22px",
            }}
          >
            signup
          </Button>
        </div>
      </nav>
    </Box>
  );
  return (
    <header className=" container mx-auto flex flex-row items-center justify-between py-4 ">
      {/* logo */}
      <h1 className="text-3xl font-bold">
        E-<span className=" text-blue-600">sheba</span>
      </h1>
      <div className=" lg:hidden">
        <MenuIcon onClick={toggleDrawer(true)} className=" text-blue-600" />
      </div>

      {/* nav */}
      {/* desktop */}
      <nav className="hidden lg:block">
        <ul className="flex flex-row space-x-4 capitalize text-lg font-medium text-">
          <li className=" hover:text-blue-600">home</li>
          <li className=" hover:text-blue-600">about</li>
          <li className=" hover:text-blue-600">application</li>
          <li className=" hover:text-blue-600">history</li>
        </ul>
      </nav>
      {/* mobile */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/* btns */}
      <div className="flex flex-row hidden lg:block space-x-4">
        <Button
          variant="outlined"
          sx={{
            textTransform: "capitalize",
            borderRadius: "20px",
            fontSize: "22px",
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            borderRadius: "20px",
            fontSize: "22px",
          }}
        >
          signup
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Hero = () => {
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState("");

  const handleDoctor = (event) => {
    setDoctor(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className="  container mx-auto lg:grid lg:grid-cols-2  mt-28">
      <div className="space-y-10">
        {/* hero text */}
        <div>
          <p className=" capitalize font-semibold text-3xl md:text-5xl lg:text-6xl">
            Find and Search Your <br />{" "}
            <span className=" text-blue-600">favourite</span> doctor
          </p>
          <p className="  text-gray-500">live yor life</p>
        </div>

        {/* search form */}
        <div className=" flex flex-row space-x-2">
          <FormControl fullWidth>
            <InputLabel id="doctor">Doctor</InputLabel>
            <Select
              labelId="doctor"
              id="doctor"
              value={doctor}
              label="doctor"
              onChange={handleDoctor}
            >
              <MenuItem value={10}>abdullah hamdy </MenuItem>
              <MenuItem value={20}>ahamd hadmid</MenuItem>
              <MenuItem value={30}>yamen amen</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="location">location</InputLabel>
            <Select
              labelId="location"
              id="location"
              value={location}
              label="location"
              onChange={handleLocation}
            >
              <MenuItem value={10}>gaza</MenuItem>
              <MenuItem value={20}>yafa</MenuItem>
              <MenuItem value={30}>rafah</MenuItem>
            </Select>
          </FormControl>
          <IconButton aria-label="delete" size="small">
            <SearchOutlinedIcon />
          </IconButton>
        </div>
        {/* statics */}
        <div className=" grid grid-cols-3 bg-blue-500 ">
          <div className=" border-r text-white tracking-wider   flex flex-col items-center justify-center ">
            <p className="text-3xl font-semibold">24/7</p>
            <p className="  capitalize text-white">online support</p>
          </div>{" "}
          <div className=" border-r   flex flex-col items-center justify-center ">
            <p className="text-3xl font-semibold text-white tracking-wider">
              100+
            </p>
            <p className="capitalize  text-gray-500 text-white">doctors</p>
          </div>{" "}
          <div className="  px-5  flex flex-col items-center justify-center ">
            <p className="text-3xl font-semibold text-white tracking-wider">
              1M+
            </p>
            <p className=" capitalize text-gray-500 text-white">
              active patients
            </p>
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default Hero;

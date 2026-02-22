import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLandingRooms from "./../../Hooks/useLandingRooms";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import placeholderImg from "../../assets/images/hotals1 (1).png";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import imgFacility1 from "../../assets/images/ic_bedroom.png";
import imgFacility2 from "../../assets/images/ic_bathroom.png";
import imgFacility3 from "../../assets/images/ic_diningroom.png";
import imgFacility4 from "../../assets/images/ic_livingroom.png";
import imgFacility5 from "../../assets/images/ic_wifi.png";
import imgFacility6 from "../../assets/images/ic_ac.png";
import imgFacility7 from "../../assets/images/ic_ref.png";
import imgFacility8 from "../../assets/images/ic_tv.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Controller, useForm } from "react-hook-form";

export default function Details() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { getRoomDetailsById, roomDetails } = useLandingRooms();
  const [loading, setLoading] = useState(true);

  // Booking state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [value, onChange] = useState([new Date(), new Date()]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      await getRoomDetailsById(roomId);
      setLoading(false);
    };
    fetchDetails();
  }, [roomId]);

  const handleBooking = () => {
    if (!startDate || !endDate) return;
    // Navigate or handle booking logic here
    alert(
      `Booking room ${roomDetails?.roomNumber} from ${startDate} to ${endDate}`,
    );
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress sx={{ color: "#152C5B" }} />
      </Box>
    );
  }

  if (!roomDetails) {
    return (
      <Box textAlign="center" py={10}>
        <Typography variant="h5" color="textSecondary">
          Room not found.
        </Typography>
      </Box>
    );
  }

  const images = roomDetails.images || [];
  const mainImage = images[0] || placeholderImg;
  const sideImages = [images[1] || placeholderImg, images[2] || placeholderImg];

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10 }}>
      <Box sx={{ px: { xs: 2, md: 10 }, pt: 4 }}>
        {/* ── Breadcrumbs ── */}
        <Breadcrumbs
          separator="/"
          aria-label="breadcrumb"
          sx={{ mb: 2, fontSize: "15px", fontFamily: "'Poppins', sans-serif" }}
        >
          <Link
            underline="hover"
            color="gray"
            href="/"
            sx={{ cursor: "pointer" }}
          >
            Home
          </Link>
          <Typography
            color="#152C5B"
            sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
          >
            Room Details
          </Typography>
        </Breadcrumbs>

        {/* ── Room Name & Location ── */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#152C5B",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Room {roomDetails.roomNumber}
          </Typography>
          {roomDetails.createdBy?.userName && (
            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: 15,
                mt: 0.5,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Hosted by {roomDetails.createdBy.userName}
            </Typography>
          )}
        </Box>

        {/* ── Photo Gallery Grid (Parent)── */}
        <Grid container spacing={2} sx={{ mb: 6 }}>
          {/* Main large image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={mainImage}
              alt={`Room ${roomDetails.roomNumber}`}
              sx={{
                width: "100%",
                height: { xs: 250, md: 420 },
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Grid>

          {/* Two side images stacked */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} height="100%">
              {sideImages.map((img, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={
                    roomDetails.images?.length > 0
                      ? roomDetails.images[idx]
                      : placeholderImg
                  }
                  alt={`Room view ${idx + 2}`}
                  sx={{
                    width: "100%",
                    height: { xs: 160, md: 200 },
                    objectFit: "cover",
                    borderRadius: "16px",
                    flex: 1,
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* ── Main Content: Details + Booking Card ── */}
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid size={8}>
            <Typography variant="body1" className="textGray">
              Minimal techno is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Minimal techno is
              thought to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell.
            </Typography>
            <Typography variant="body1" className="textGray" sx={{ my: 2 }}>
              Such trends saw the demise of the soul-infused techno that
              typified the original Detroit sound. Robert Hood has noted that he
              and Daniel Bell both realized something was missing from techno in
              the post-rave era.
            </Typography>
            <Typography variant="body1" className="textGray">
              Design is a plan or specification for the construction of an
              object or system or for the implementation of an activity or
              process, or the result of that plan or specification in the form
              of a prototype, product or process. The national agency for
              design: enabling Singapore to use design for economic growth and
              to make lives better.
            </Typography>

            <Stack direction="row" spacing={12} m={4}>
              <Stack spacing={1}>
                <Box
                  component="img"
                  src={imgFacility1}
                  sx={{ width: "50px", height: "50px" }}
                  alt="facility image"
                />
                <Typography variant="body1" className="textGray">
                  5 bedroom
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box
                  component="img"
                  src={imgFacility4}
                  sx={{ width: "50px", height: "50px" }}
                  alt="facility image"
                />
                <Typography variant="body1" className="textGray">
                  1 living room
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box
                  component="img"
                  src={imgFacility2}
                  sx={{ width: "50px", height: "50px" }}
                  alt="facility image"
                />
                <Typography variant="body1" className="textGray">
                  3 bathroom
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box
                  component="img"
                  src={imgFacility3}
                  sx={{ width: "50px", height: "50px" }}
                  alt="facility image"
                />
                <Typography variant="body1" className="textGray">
                  1 dining room
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={12} m={4}>
              <Stack spacing={1}>
                <Box
                  component="img"
                  src={imgFacility5}
                  sx={{ width: "50px", height: "50px" }}
                  alt="facility image"
                />
                <Typography variant="body1" className="textGray">
                  10 mbp/s
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box
                  component="img"
                  src={imgFacility6}
                  sx={{ width: "50px", height: "50px" }}
                  alt="facility image"
                />
                <Typography variant="body1" className="textGray">
                  7 unit ready
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={4}
            sx={{
              border: "1px solid #ccc",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h5">Start Booking</Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ my: 2 }}
            >
              <Typography variant="h4" color="primary">
                $ {roomDetails?.price}
              </Typography>
              <Typography variant="h4" color="textDisabled">
                per night
              </Typography>
            </Stack>
            <Typography variant="h6" color="error">
              {" "}
              Discount {roomDetails?.discount} % off
            </Typography>
            <Box component="form">
              <Typography className="section_title">Pick a Date</Typography>
              <Box sx={{ width: "50%", display: "flex" }}>
                <DateRangePicker
                  minDate={new Date()}
                  onChange={onChange}
                  value={value}
                />

                <Typography
                  variant="caption"
                  sx={{
                    background: "#152C5B",
                    color: "#fff",
                    display: "inline-block",
                    height: "auto",
                    padding: "8px",
                  }}
                >
                  <CalendarMonthIcon />
                </Typography>
                <Controller
                  name="dateRange"
                  control={control}
                  defaultValue={[new Date(), new Date()]}
                  rules={{
                    required: "Date range is required",
                  }}
                  render={({ field }) => (
                    <DateRangePicker
                      {...field}
                      minDate={new Date()}
                      onChange={field.onChange}
                      value={field.value}
                      className="custom_width"
                    />
                  )}
                />
                {errors.dateRange && (
                  <Typography color="error" variant="body2">
                    {errors.dateRange.message}
                  </Typography>
                )}
              </Box>
              {/* end date controller */}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "50%",
                  display: "inline-block",
                  marginBlock: "20px",
                }}
              >
                Continue Book
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

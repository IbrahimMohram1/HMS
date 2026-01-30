import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Chip,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useRooms from "../../../Hooks/useRooms";
import DeleteConfirmation from "../../../Shared/delete confirmation/delete confirmation";

export default function Rooms() {
  const { fetchRooms, deleteRoom } = useRooms();

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const openMenu = Boolean(anchorEl);

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Menu handlers
  const handleMenuClick = (event, room) => {
    setAnchorEl(event.currentTarget);
    setSelectedRoom(room);
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // ❗ ما نمسحش selectedRoom هنا
  };

  const handleView = () => {
    console.log("View:", selectedRoom);
    handleMenuClose();
  };

  const handleEdit = () => {
    console.log("Edit:", selectedRoom);
    handleMenuClose();
  };

  const handleDelete = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!selectedRoom?._id) return;

    try {
      await deleteRoom(selectedRoom._id);

      setRooms((prev) =>
        prev.filter((room) => room._id !== selectedRoom._id)
      );

      setDeleteDialogOpen(false);
      setSelectedRoom(null);
    } catch (error) {
      console.error("Failed to delete room:", error);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setSelectedRoom(null);
  };

  // Fetch rooms
  useEffect(() => {
    const getRooms = async () => {
      setLoading(true);
      try {
        const data = await fetchRooms(1, 20);
        setRooms(data.rooms || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getRooms();
  }, [fetchRooms]);

  // Search filter
  const filteredRooms = search
    ? rooms.filter((room) =>
        room.roomNumber
          .toLowerCase()
          .includes(search.toLowerCase().trim())
      )
    : rooms;

  return (
    <Box p={2}>
      {/* Header */}
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h6">Rooms Table Details</Typography>
          <Typography color="text.secondary">
            You can check all details
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: "#203FC7" }}>
            Add New Room
          </Button>
        </Grid>
      </Grid>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search by room number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Table */}
      {loading ? (
        <Box textAlign="center" py={5}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Room Number</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Capacity</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">Facilities</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRooms.length ? (
                filteredRooms.map((room) => (
                  <TableRow key={room._id}>
                    <TableCell>{room.roomNumber}</TableCell>
                    <TableCell align="right">
                      <img
                        src={room.images?.[0] || "/placeholder.png"}
                        alt=""
                        width={50}
                        height={50}
                        style={{ borderRadius: 4 }}
                      />
                    </TableCell>
                    <TableCell align="right">{room.price}</TableCell>
                    <TableCell align="right">{room.capacity}</TableCell>
                    <TableCell align="right">{room.discount}%</TableCell>
                    <TableCell align="right">
                      {room.facilities?.length
                        ? room.facilities.map((f) => (
                            <Chip
                              key={f._id}
                              label={f.name}
                              size="small"
                              sx={{ mr: 0.5 }}
                            />
                          ))
                        : "-"}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleMenuClick(e, room)}>
                        <MoreHorizIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleView}>View</MenuItem>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
              Delete
            </MenuItem>
          </Menu>
        </TableContainer>
      )}

      {/* Delete dialog */}
      <DeleteConfirmation
        open={deleteDialogOpen}
        itemName={selectedRoom?.roomNumber}
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
      />
    </Box>
  );
}

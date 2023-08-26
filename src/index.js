import io from "./socketServer.js";

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("drawing", (data) => {
    io.emit("drawing", data);
  });
});

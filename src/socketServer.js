import server from "./httpServer.js";
import { Server } from "socket.io";

// 前端開發時，會需要跨域，需要設定 CORS
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

export default io;

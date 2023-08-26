import socket from "@/utils/socket";

const sendBtn = document.getElementById("message-send-btn");
const input = document.getElementById("message-input");
const messageContainer = document.getElementById("message-container");
const nameInput = document.getElementById("name-input");

sendBtn.addEventListener("click", () => {
  if (!input.value) return;
  socket.emit("message", { msg: input.value, name: nameInput.value || "匿名" });
  input.value = "";
});

socket.on("message", (msg) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = `${msg.name}: ${msg.msg}`;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});

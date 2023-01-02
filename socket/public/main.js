const socket = io.connect();
const date = Date();
const render = (data) => {
  const html = data.map((element, index) => {
    return `<div>
    <strong style="color:blue;">${element.mail} </strong><div style="color:brown;">[${date}]</div>
    <em style="color:green;">${element.text}</em>
    </div> `;
  });
  document.getElementById("messages").innerHTML = html;
};

function addMessage(e) {
    const mensaje = {
        mail: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    document.getElementById('username').value = ''
    document.getElementById('texto').value = ''
    return false;
}


socket.on("messages", (data) => render(data));

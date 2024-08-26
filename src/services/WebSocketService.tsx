class WebSocketService {
    private socket: WebSocket;
  
    constructor(url: string) {
      this.socket = new WebSocket(url);
      this.setupListeners();
    }
  
    setupListeners() {
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);
      };
    }
  
    sendMessage(data: any) {
      this.socket.send(JSON.stringify(data));
    }
  }
  
  export default WebSocketService;

  
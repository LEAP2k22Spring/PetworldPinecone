import Sidebar from "../component/inbox/Sidebar.jsx";
import Chat from "../component/inbox/Chat.jsx";
export default function Inbox() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

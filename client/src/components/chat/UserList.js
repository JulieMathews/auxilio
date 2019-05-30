import React, { Component } from "react";
import axios from "axios";

class UserList extends Component {
    startConversation(e, otherUser) {
        console.log("Starting conversation...");
        e.preventDefault();
        axios
            .post("/api/conversations", { other: otherUser.uuid })
            .then(response => {
                if (response.status === 200) {
                    console.log("Found conversation: ");
                    console.log(response.data);
                }
                this.showConversation(response.data, "Conversation with " + otherUser.username);
            })
            .catch(error => {
                console.log("Conversation error:");
                console.log(error);
            })

    }

    showPublic() {
        this.props.onChangeRoom("observable-room", "Private Chat");
    }

    showConversation(convo, description) {
        const roomName = "observable-private-" + convo.id;
        this.props.onChangeRoom(roomName, description);
        // Somehow render new InstantMessenger:
        // <InstantMessenger roomName={roomName} />
    }

    render() {
        const users = this.props.allUsers;
        const currentUserId = this.props.currentUser.uuid;
        if (!users || !currentUserId) {
          return null;
        }
        return (
            <ul className="Users-list">
              <li className="UserList-user" key="global">
                <p onClick={e => this.showPublic()}>Global</p>
              </li>
              { users
                    .filter(u => u.uuid !== currentUserId)
                    .map(u => this.renderUser(u)) }
            </ul>
        );
    }

    renderUser(user) {
        return (
        <li className="UserList-user" key={user.uuid}>
          <p onClick={e => this.startConversation(e, user)}>{user.username}</p>
        </li>
        )
    }
}

export default UserList;

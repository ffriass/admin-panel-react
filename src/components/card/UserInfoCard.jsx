import React from "react";
import "./detail-card.scss";

const UserInfoCard = (props) => {

  return (
    <div className="card-detail">
      <div className="rightTopElements">
        <div
          className={`element ${
            props.user?.isConnected ? "connected" : "disconnected"
          } `}
        >
          {props.user?.isConnected ? "Connected" : "Disconnected"}
        </div>
        <div className="editButton">Edit</div>
      </div>
      {/* <div className="editButton">Edit</div> */}
      <h1 className="title">Information</h1>
      <div className="item">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          alt=""
          className="itemImg"
        />
        <div className="details">
          <h1 className="itemTitle">
            {props.userType == "agent"
              ? props.user?.agentName
              : props.user?.userName}
          </h1>
          <div className="detailItem">
            <span className="itemKey">Email:</span>
            <span className="itemValue">{props.user?.email}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Phone:</span>
            <span className="itemValue">{props.user?.phoneNumber}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Last Location:</span>
            <span className="itemValue">{props.user?.place?.address}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Availabilty:</span>
            <span className="itemValue">{props.user?.statusName}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Created At:</span>
            <span className="itemValue">{props.user?.createdAt}</span>
          </div>
        </div>
      </div>
      {props.userType == "agent" && (
        <div className="itemActionContainer">
          {/* <div className="payButton">Pay</div> */}
          <div className="sendButton">Notification</div>
          <div className="availableButton">Make Available</div>
        </div>
      )}
    </div>
  );
};

export default UserInfoCard;

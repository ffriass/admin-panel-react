import React from "react";
import { dateFormat } from "../../services/metadata/datatable-definitions";
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
          {props.user?.isConnected ? "Conectado" : "Desconectado"}
        </div>
        <div className="editButton">Editar</div>
      </div>
      {/* <div className="editButton">Edit</div> */}
      <h1 className="title">Informacion</h1>
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
            <span className="itemKey">Telefono:</span>
            <span className="itemValue">{props.user?.phoneNumber}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Ult. Ubicacion:</span>
            <span className="itemValue">{props.user?.place?.address}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Disponibilidad:</span>
            <span className="itemValue">{props.user?.statusName}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Creado el:</span>
            <span className="itemValue">{new Date(props.user?.createdAt).toLocaleDateString("en-US", dateFormat)}</span>
          </div>
        </div>
      </div>
      {props.userType == "agent" && (
        <div className="itemActionContainer">
          {/* <div className="payButton">Pay</div> */}
          <div className="sendButton">Notificacion</div>
          <div className="availableButton">Hacer Disponible</div>
        </div>
      )}
    </div>
  );
};

export default UserInfoCard;

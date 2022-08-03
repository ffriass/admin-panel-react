import { Grid, Input } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./configuration.scss";

const Params = () => {
  const [percentage, setPercentage] = useState(15);
  const [desconnection, setDesconnection] = useState(240);

  const handlePercentageChange = (value) => {
    if (value >= 0 && value <= 100) setPercentage(value);
  };
  return (
    <div>
      <Grid container className="centeredContainer">
        <div>Porcentaje impuesto a barberos</div>
        <Grid item xs={12}>
          <Input
            type="number"
            value={percentage}
            onChange={(e) => handlePercentageChange(e.target.value)}
            placeholder="Monto"
            className="input"
          />
          <label className="suffix">%</label>

          <Button className="item">Guardar</Button>
        </Grid>

        <div>Tiempo de desconexión automática</div>
        <Grid item xs={12}>
          <Input
            type="number"
            value={desconnection}
            onChange={(e) => setDesconnection(e.target.value)}
            placeholder="Minituos"
            className="input"
          />
          <label className="suffix">Minutos</label>

          <Button className="item">Guardar</Button>
        </Grid>

        <div>Tiempo de limite para aceptar un servicio</div>
        <Grid item xs={12}>
          <Input
            type="number"
            value={desconnection}
            onChange={(e) => setDesconnection(e.target.value)}
            placeholder="Minituos"
            className="input"
          />
          <label className="suffix">Minutos</label>

          <Button className="item">Guardar</Button>
        </Grid>
        
        <div>Distancia límite para atender servicios</div>
        <Grid item xs={12}>
          <Input
            type="number"
            value={desconnection}
            onChange={(e) => setDesconnection(e.target.value)}
            placeholder="Minituos"
            className="input"
          />
          <label className="suffix">Metros</label>

          <Button className="item">Guardar</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Params;

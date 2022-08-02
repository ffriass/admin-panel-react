import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Skeleton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useFetch from "../../core/hooks/useFetch";
import { getComparativeRevenues } from "../../services/api/actions";
import { DatePicker } from "@mui/x-date-pickers";
import {
  dateFormat,
  dateOnlyFormat,
  moneyFormatter
} from "../../services/metadata/datatable-definitions";
import { Wallpaper } from "@mui/icons-material";

const Featured = (props) => {
  const [date, setDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [response, callback, isloading] = useFetch(
    getComparativeRevenues(date)
  );
  const [accruedPercentage, setAccruedPercentage] = useState(0);

  /*const total = [{
    paymentType: 0,
    totalRevenue: response?.payload?.data?.reduce((sum, obj) => sum + obj.totalRevenue, 0),
    currentMonth: response?.payload?.data?.reduce((sum, obj) => sum + obj.currentMonth, 0),
    lastMonth: response?.payload?.data?.reduce((sum, obj) => sum + obj.lastMonth, 0),
    today: response?.payload?.data?.reduce((sum, obj) => sum + obj.today, 0)
}]*/

  const handlePeriodChange = (value) => {
    setDate(value);
    callback(getComparativeRevenues(value));
  };

  console.log(response);

  return (
    <div className="featured">
      <div className="top">
        {!props.isLoading ? (
          <h1 className="title">Ingresos totales</h1>
        ) : (
          <Skeleton width={"30%"} />
        )}
        <div style={{ display: "none" }}>
          <DatePicker
            label="Fecha"
            value={date}
            open={isDatePickerOpen}
            onChange={(newValue) => {
              setDatePickerOpen(false);
              handlePeriodChange(newValue);
            }}
            onClickOutside={() => {
              setDatePickerOpen(false);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div
          className="item"
          onClick={() => setDatePickerOpen(!isDatePickerOpen)}
        >
          <CalendarMonthIcon className="icon" fontSize="small" />
        </div>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          {!props.isLoading ? (
            <CircularProgressbar
              value={
                response?.payload?.data?.find((x) => x.paymentType === 0)
                  ?.accruedPercentage || 0 >= 100
                  ? 100
                  : response?.payload?.data?.find((x) => x.paymentType === 0)
                      ?.accruedPercentage
              }
              text={
                response?.payload?.data?.find((x) => x.paymentType === 0)
                  ?.accruedPercentage >= 1000
                  ? `${
                      response?.payload?.data?.find((x) => x.paymentType === 0)
                        ?.accruedPercentage / 1000
                    }k%`
                  : `${
                      response?.payload?.data?.find((x) => x.paymentType === 0)
                        ?.accruedPercentage
                    }%`
              }
              strokeWidth={5}
            />
          ) : (
            <Skeleton height={"100%"} widh={"100%"} variant="circular" />
          )}
        </div>
        <p className="title">
          Total en vendidos{" "}
          {!!date
            ?<strong>{`el ${new Date(date).toLocaleDateString("en-US", dateOnlyFormat)}`}</strong> 
            : "hoy"}
        </p>
        {!props.isLoading ? (
          <div>
            <p className="amount">
              {moneyFormatter.format(
                response?.payload?.data?.find((x) => x.paymentType === 0)
                  ?.today || 0
              )}
            </p>
            <p className="small-amount">
              {`${moneyFormatter.format(
                response?.payload?.data?.find((x) => x.paymentType === 0)
                  ?.currentMonth || 0
              )} este mes`}
            </p>
          </div>
        ) : (
          <Skeleton
            className="amount"
            variant="text"
            height={50}
            widh={"10%"}
          />
        )}
        <p className="desc">
          Los pagos que estan en proceso podrian no estar disponibles aun.
        </p>
        {!props.isLoading ? (
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Efectivo</div>
              <div className="itemResult">
                <div className="resultAmount">
                  {moneyFormatter.format(
                    response?.payload?.data?.find((x) => x.paymentType === 1)
                      ?.today || 0
                  )}
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Paypal</div>
              <div className="itemResult">
                <div className="resultAmount">
                  {moneyFormatter.format(
                    response?.payload?.data?.find((x) => x.paymentType === 3)
                      ?.today || 0
                  )}
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Tarjeta</div>
              <div className="itemResult">
                <div className="resultAmount">
                  {moneyFormatter.format(
                    response?.payload?.data?.find((x) => x.paymentType === 2)
                      ?.today || 0
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Box className="summary">
            <Skeleton variant="rectangular" height={80} className="widget" />
            <Skeleton variant="rectangular" height={80} className="widget" />
            <Skeleton variant="rectangular" height={80} className="widget" />
          </Box>
        )}
      </div>
    </div>
  );
};

export default Featured;

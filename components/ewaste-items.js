/* eslint-disable @next/next/no-img-element */
import { Typography, Grid, Card, CardActionArea } from "@mui/material";
import { EwasteInfo } from "../data/data";
import Swal from "sweetalert2";

/**
 * Display ewaste information by type in a responsive grid
 * @returns {React.Node} of predefined Container
 */
export default function EWasteItems({ isLink = false }) {
  return (
    <Grid container alignItems="stretch" spacing={2} my={2}>
      {Object.entries(EwasteInfo).map(([type, specificInfo]) => {
        return (
          <ItemCard
            key={type}
            title={type}
            imageURL={specificInfo.imageURL}
            data={
              isLink
                ? [type, specificInfo.description, specificInfo.link]
                : [type, specificInfo.description]
            }
          />
        );
      })}
    </Grid>
  );
}

/**
 * Item card to display information about specific type
 * @param {*} props
 * @returns {React.Node} of MUI Grid item
 */
function ItemCard(props) {
  const [type, description, link] = props.data;
  const html_string = `<div>
        <p style="text-align: justify; margin-bottom:2rem">
            ${description}
        </p>
        <link href="/button.css" rel="stylesheet">
        ${
          link
            ? `<a href=${link} target="_blank" class="btn btn-success activate">
            Learn More
        </a>`
            : ""
        }
    </div>`;
  return (
    <Grid item xs={6} md={3}>
      <Card className="cardItem" elevation={6}>
        <CardActionArea
          onClick={() => {
            Swal.fire({
              title: `${type}`,
              html: html_string,
              icon: "info",
              color: "#000",
              background: "#ECEFDA",
              backdrop: `rgba(153, 241, 118, 0.4)`,
              confirmButtonText: "Gotcha!",
              confirmButtonColor: "#3173de",
            });
          }}
        >
          <img
            src={props.imageURL}
            title={props.title}
            alt={"Image of " + props.title}
            style={{
              height: "15vh",
              width: "100%",
              filter: "brightness(40%)",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h5"
            fontWeight={500}
            sx={{
              fontSize: { md: 22, xs: 15 },
              textAlign: "center",
              position: "absolute",
              color: "white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {props.title}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

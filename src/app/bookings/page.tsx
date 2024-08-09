import SquareAppointmentsEmbed from "@/components/SquareAppointmentsEmbed";
import ContentToggle from "@/components/ContentToggle";
import NewClientForm from "@/components/NewClientForm";
import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import bookingsContent from "@/../public/content/bookings.json";

const BookingsPage: NextPage = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h1" gutterBottom align="center">
        {bookingsContent.title}
      </Typography>
      <ContentToggle labels={bookingsContent.contentToggleLabels}>
        <NewClientForm />
        <SquareAppointmentsEmbed />
      </ContentToggle>
    </Container>
  );
};

export default BookingsPage;

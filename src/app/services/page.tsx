import type { NextPage } from "next";
import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import servicesContent from "@/../public/content/services.json";

interface ServiceOption {
  name: string;
  price: string;
}

interface ServiceDetails {
  description?: string;
  options: ServiceOption[];
}

interface Services {
  [key: string]: ServiceDetails;
}

const ServicesPage: NextPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom align="center">
        Services
      </Typography>
      {Object.entries(servicesContent.services as Services).map(
        ([serviceName, serviceDetails], serviceIndex) => (
          <Accordion key={serviceName} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${serviceName}-content`}
              id={`${serviceName}-header`}
            >
              <Typography variant="h2">{serviceName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {serviceDetails.description}
              </Typography>
              <List>
                {serviceDetails.options.map((option, index) => (
                  <ListItem
                    key={index}
                    divider={index < serviceDetails.options.length - 1}
                  >
                    <ListItemText
                      primary={option.name}
                      secondary={option.price}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </Container>
  );
};

export default ServicesPage;

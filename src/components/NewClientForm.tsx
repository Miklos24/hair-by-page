"use client";

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  Modal,
} from "@mui/material";
import InputMask from "react-input-mask";
import bookingsContent from "@/../public/content/bookings.json";

enum Pronouns {
  HeHim = "He/Him",
  SheHer = "She/Her",
  TheyThem = "They/Them",
  Other = "Other",
  PreferNotToSay = "Prefer not to say",
}

enum SchedulingPreference {
  Mornings = "Mornings",
  Afternoons = "Afternoons",
  Evenings = "Evenings",
  Weekends = "Weekends",
}

interface IFormInput {
  name: string;
  pronouns: Pronouns[];
  phoneNumber: string;
  services: string;
  chemicalHistory?: string;
  schedulingPreference: SchedulingPreference[];
}

const NewClientForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      pronouns: [],
      phoneNumber: "",
      services: "",
      chemicalHistory: "",
      schedulingPreference: [],
    },
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [clientName, setClientName] = React.useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setClientName(
      data.name.split(" ")[0].replace(/^./, (str) => str.toUpperCase())
    );
    setSubmitted(true);
    reset();

    const message = `
      Potential Client: ${data.name}
      Pronouns: ${data.pronouns.join(", ") || "Not Provided"}
      Phone Number: ${data.phoneNumber}
      Services Requested: ${data.services}
      Chemical Services History: ${data.chemicalHistory || "Not Provided"}
      Scheduling Preference: ${
        data.schedulingPreference.join(", ") || "Not Provided"
      }
    `
      .trim()
      .replace(/^\s+/gm, "");

    await fetch("/api/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {bookingsContent.newClientForm.heading}
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        {bookingsContent.newClientForm.contactInfo.heading}
      </Typography>

      <Controller
        name="name"
        control={control}
        rules={{
          required: bookingsContent.newClientForm.contactInfo.name.requiredText,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label={bookingsContent.newClientForm.contactInfo.name.label}
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="pronouns"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth variant="outlined" error={!!errors.pronouns}>
            <InputLabel>
              {bookingsContent.newClientForm.contactInfo.pronouns.label}
            </InputLabel>
            <Select
              {...field}
              label={bookingsContent.newClientForm.contactInfo.pronouns.label}
              multiple
              renderValue={(selected) => (selected as string[]).join(", ")}
            >
              {Object.values(Pronouns).map((pronoun) => (
                <MenuItem key={pronoun} value={pronoun}>
                  <Checkbox checked={field.value.includes(pronoun)} />
                  {pronoun}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        rules={{
          required:
            bookingsContent.newClientForm.contactInfo.phone.requiredText,
        }}
        render={({ field }) => (
          <InputMask
            mask="(999) 999-9999"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            disabled={false}
            maskChar="_"
          >
            {
              (() => (
                <TextField
                  {...field}
                  label={bookingsContent.newClientForm.contactInfo.phone.label}
                  variant="outlined"
                  fullWidth
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              )) as unknown as React.ReactNode
            }
          </InputMask>
        )}
      />

      <Typography variant="h5" component="h2" gutterBottom>
        {bookingsContent.newClientForm.appointmentInfo.heading}
      </Typography>

      <InputLabel sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        {bookingsContent.newClientForm.appointmentInfo.services.label}
      </InputLabel>
      <Controller
        name="services"
        control={control}
        rules={{
          required:
            bookingsContent.newClientForm.appointmentInfo.services.requiredText,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={
              bookingsContent.newClientForm.appointmentInfo.services.placeholder
            }
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={!!errors.services}
            helperText={errors.services?.message}
          />
        )}
      />

      <InputLabel sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        {bookingsContent.newClientForm.appointmentInfo.chemicalHistory.label}
      </InputLabel>
      <Controller
        name="chemicalHistory"
        control={control}
        rules={{
          required:
            bookingsContent.newClientForm.appointmentInfo.chemicalHistory
              .requiredText,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={
              bookingsContent.newClientForm.appointmentInfo.chemicalHistory
                .placeholder
            }
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        )}
      />

      <Controller
        name="schedulingPreference"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth variant="outlined" error={!!errors.pronouns}>
            <InputLabel>
              {
                bookingsContent.newClientForm.appointmentInfo
                  .schedulingPreference.label
              }
            </InputLabel>
            <Select
              {...field}
              label={
                bookingsContent.newClientForm.appointmentInfo
                  .schedulingPreference.label
              }
              multiple
              renderValue={(selected) => (selected as string[]).join(", ")}
            >
              {Object.values(SchedulingPreference).map((preference) => (
                <MenuItem key={preference} value={preference}>
                  <Checkbox checked={field.value.includes(preference)} />
                  {preference}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Typography variant="body2" color="text.secondary">
        {bookingsContent.newClientForm.disclaimer.body}
        <a target="_blank" href="/policies">
          {bookingsContent.newClientForm.disclaimer.link}
        </a>
      </Typography>

      <Button
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginBottom: "30px" }}
      >
        {bookingsContent.newClientForm.submitButton}
      </Button>
      <Modal
        open={submitted}
        onClose={() => setSubmitted(false)}
        aria-labelledby="submitted-modal"
        aria-describedby="submitted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h3" gutterBottom>
            {bookingsContent.newClientForm.submitted.heading.replace(
              "{{name}}",
              clientName
            )}
          </Typography>
          <Typography variant="body1" component="p">
            {bookingsContent.newClientForm.submitted.body}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default NewClientForm;

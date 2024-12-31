import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm, useWatch } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Website`);
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    console.log(data);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });
      const json = await response.json();
      if (json.success) {
        setIsSuccess(true);
        setMessage(json.message);
        e.target.reset();
        reset();
        toast.success("Message sent successfully!");
      } else {
        setIsSuccess(false);
        setMessage(json.message);
        toast.error("Failed to send message.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Client Error. Please check the console for more info");
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    < motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
      style={{
        textAlign: "center",
        padding:"80px 6px",
        width: "100%",
        overflow: "hidden",
      }}
      id="Contact"
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Contact{" "}
        <Box
          component="span"
          sx={{
            textDecoration: "underline",
            color: "gray",
            textDecorationThickness: 2,
            textDecorationColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          With Us
        </Box>
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        paragraph
        sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
      >
        Ready to Make a Move? Let's Build Your Future Together
      </Typography>

     
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          <input
            type="hidden"
            value="a5eecb07-eaca-4cd0-8d6d-b73fc1bec8ab"
            {...register("access_key")}
          />
          <input type="hidden" {...register("subject")} />
          <input
            type="hidden"
            value="Mission Control"
            {...register("from_name")}
          />
          <input
            type="checkbox"
            id=""
            style={{ display: "none" }}
            {...register("botcheck")}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 3,
            }}
          >
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Full name is required", maxLength: 80 }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "Enter your Message" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>

      
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;

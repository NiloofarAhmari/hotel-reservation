import * as Yup from "yup"
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from "formik";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import StarIcon from '@mui/icons-material/Star';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";

interface Props { }
const HomePage: React.FC<Props> = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            ckeckin: undefined,
            checkout: undefined,
            adults: 1,
            children: 1
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name Is Required"),
            ckeckin: Yup.string().required("Ckeckin Is Required"),
            checkout: Yup.string().required("Checkout Is Required"),
            adults: Yup.number().required("Adults Count Is Required"),
            children: Yup.number().required("Children Count Is Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Box
            sx={{
                backgroundImage: `url("./images/hero.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            height='100vh'
        >
            <form onSubmit={formik.handleSubmit}>
                <Grid container >
                    <Box sx={{
                        left: "50%",
                        top: "30%",
                        position: "absolute",
                        transform: " translate(-50%, -50%)"
                    }}>
                        <Typography variant='h5' sx={{ my: 2, fontStyle: "italic", fontWeight: "bold" }}>Hotel Reservation</Typography>
                        <Typography variant='h5' sx={{ my: 2, fontStyle: "italic", fontWeight: "bold" }}>Welcome To 5 <span><StarIcon sx={{ color: "#FFD700" }} /></span>Hotel</Typography>
                        <Grid item xs={12} sx={{ mt: 1 }}>
                            <TextField
                                label="Name"
                                name="name"
                                type="text"
                                sx={{ width: "100%" }}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DemoItem>
                                        <DatePicker
                                            label="Check In"
                                            name="ckeckin"
                                            value={formik.values.ckeckin}
                                            onChange={(value) => {
                                                formik.setFieldValue('ckeckin', value);
                                            }}
                                            slotProps={{
                                                textField: {
                                                    variant: "outlined",
                                                    error: formik.touched.ckeckin && Boolean(formik.errors.ckeckin),
                                                    helperText: formik.touched.ckeckin && formik.errors.ckeckin
                                                }
                                            }}
                                        />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DemoItem>
                                        <DatePicker
                                            label="Check Out"
                                            name="checkout"
                                            value={formik.values.checkout}
                                            onChange={(value) => {
                                                formik.setFieldValue('checkout', value);
                                            }}
                                            slotProps={{
                                                textField: {
                                                    variant: "outlined",
                                                    error: formik.touched.checkout && Boolean(formik.errors.checkout),
                                                    helperText: formik.touched.checkout && formik.errors.checkout
                                                }
                                            }}
                                        />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Adults"
                                name="adults"
                                select
                                sx={{ width: "100%" }}
                                value={formik.values.adults}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    formik.setFieldValue("adults", +e.target.value)
                                }}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Children"
                                name="children"
                                select
                                sx={{ width: "100%" }}
                                value={formik.values.children}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    formik.setFieldValue("children", +e.target.value)
                                }}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ m: 2 }}>
                            <Button type='submit' variant='contained'> Check Availability
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
            </form>
        </Box>
    )
}

export default HomePage
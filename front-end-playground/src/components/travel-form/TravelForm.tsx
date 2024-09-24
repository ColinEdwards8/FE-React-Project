import { Box, Button, TextField } from "@mui/material";
import { FormProvider, useForm } from './FormContext'
import { useState } from "react";


const InfoForm = () => {
    const { state, setName, setNumber, setStartDate, setEndDate, setLocation, resetState } = useForm()
    const { name, number, startDate, endDate, location } = state

    const [ formComplete, setFormComplete ] = useState(false)

    const handleUserName = (event: any) => {
        setName(event.target.value)
    }

    const handleNumber = (event: any) => {
        if(/\D/g.test(event.target.value)){
            setNumber(event.target.value)
        }
    }

    const handleStartDate = (event: any) => {
        setStartDate(event.target.value)
    }

    const handleEndDate = (event: any) => {
        setEndDate(event.target.value)
    }

    const handleLocation = (event: any) => {
        setLocation(event.target.value)
    }

    const handleSubmit = () => {
        setFormComplete(true)
    }

    const handleReset = () => {
        resetState()
        setFormComplete(false)
    }


    return (
    <div>
        {!formComplete? (<Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
        <TextField id="outlined-basic" label="name" variant="outlined" onChange={handleUserName}/>
        <TextField id="outlined-basic" label="number" variant="outlined" type='number' onChange={handleNumber} />
        <TextField id="outlined-basic" label="start date" variant="outlined" type='date' onChange={handleStartDate} />
        <TextField id="outlined-basic" label="end date" variant="outlined" type='date' onChange={handleEndDate} />
        <TextField id="outlined-basic" label="location" variant="outlined" type='location' onChange={handleLocation} />
        <Button variant='outlined' onClick={handleSubmit}>Submit</Button>
        </Box>) : (
            <>
            <div>Form Complete</div>
            <div>{name}</div>
            <div>{number}</div>
            <div>{startDate}</div>
            <div>{endDate}</div>
            <div>{location}</div>
            <Button onClick={handleReset}>Reset form</Button>
            </>
        )}

    </div>
    )
}

export default InfoForm;

export const TravelForm = () => {
    return (
        <FormProvider>
            <InfoForm/>
        </FormProvider>
    )
}
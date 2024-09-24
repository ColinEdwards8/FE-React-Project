import { styled } from "@mui/material";

export const MainPageStyles = styled('div')(() => ({
    margin: 32,
    '& .search': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },

    '& .photos': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
    },

    '& .image': {
        width: 350,
        height: 350,
        marginLeft: 10,
        marginBottom: 20,
    },

    '& .image img': {
        width: 350,
        height: 350,
        objectFit: 'cover',
    },

    '& .hello-world': {
        padding: 32,
        width: 350,
        border: 'solid',
        borderRadius: '10px',
        borderColor: 'green',
    },
}))
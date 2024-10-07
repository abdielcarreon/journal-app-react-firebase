import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";


export const NoteView = () => {
  return (
    <Grid container 
    direction='row' 
    justifyContent='space-between' 
    alignItems='center'
    sx={{ mb: 1 }}
    >
        <Typography fontSize={ 39 } fontWeight='light'> September 16th 2024  </Typography>

        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save
            </Button>
        </Grid>

        <Grid>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Enter title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
            /> 
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What did happen today?"
                minRows={ 5 }
            /> 
        </Grid>

        <ImageGallery />
    </Grid>
  )
}


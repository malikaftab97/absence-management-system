import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function DateInput(props) {
    const {setDate} = props;
    return (
        <Grid container>
          <Grid item xs={12}>
            <TextField
                type='date'
                onChange={setDate}
                name="end_date"
                id="end_date"
                size="small"
                fullWidth
            />
          </Grid>
        </Grid>
    );
}

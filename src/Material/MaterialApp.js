import React from 'react';
import '../App.css';
import { Box, Button, Container, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

//https://material-ui.com/

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function SimpleSelect() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <form className={classes.root} autoComplete="off">

            <FormControl required variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    State of Residence
          </InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Cl'}>Cleveland</MenuItem>
                    <MenuItem value={'Ci'}>Cincinnati</MenuItem>
                    <MenuItem value={'Co'}>Columbus</MenuItem>
                </Select>
            </FormControl>

        </form>
    );
}
export class App extends React.Component {

    suggestions = [
        { label: 'Cleveland' },
        { label: 'Columbus' },
        { label: 'Cincinnati' },
        { label: 'Akron' }

    ]
    render() {

        return (
            <body>
                <Box m={1}>
                    <Button>
                        Transparent button
                    </Button>
                    <Button variant="contained" color="primary">
                        Filled button
                    </Button>
                    <Button variant="text" color="secondary">
                        colored text
                    </Button>
                    <Button variant="outlined" color="default">
                        outlines!
                    </Button>
                </Box>
                <Container fixed>
                    Help I'm trapped in a fixed width container
                    <SimpleSelect />
                </Container>
            </body>



        );
    }


}

export default App;

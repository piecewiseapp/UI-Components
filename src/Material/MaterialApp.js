import React from 'react';
import '../App.css';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Input, InputLabel, makeStyles, MenuItem, Select, Slider, Typography } from '@material-ui/core';

//https://material-ui.com/

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 400,
    },
    formControl: {
        margin: theme.spacing(3),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        width: 42,
    },
}));

function CheckboxLabel() {
    const [state, setState] = React.useState({
        checked: true
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    onChange={handleChange("checkedG")}
                />
            }
            label="Is misty a thot y/n"
        />
    );
}

function SimpleSelect() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
    });

    const inputLabel = React.useRef(null);

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

function InputSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(100000);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100000) {
            setValue(100000);
        }
    };

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Expected Salary
          </Typography>

            <Slider
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
            />

            <Input
                className={classes.input}
                value={value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                    step: 1000,
                    min: 0,
                    max: 100000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />

        </div>
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
                    <InputSlider />
                    <CheckboxLabel />
                </Container>
            </body>



        );
    }


}

export default App;

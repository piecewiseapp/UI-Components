import React from 'react';
import '../App.css';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, Input, InputLabel, makeStyles, MenuItem, Select, Slider, Typography } from '@material-ui/core';

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

function CheckboxLabel(props) {
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
            label={props.label}
        />
    );
}

function SimpleSelect(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
    });

    const inputLabel = React.useRef(null);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    const vals = props.values;
    const items = vals.map((val) =>
        <MenuItem value={val}>{val}</MenuItem>
    );

    return (
        <form className={classes.root} autoComplete="off">

            <FormControl required variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    State of Residence
                </InputLabel>
                <Select
                    value={values.name}
                    onChange={handleChange}
                    inputProps={{
                        name: 'name',
                        id: 'name',
                    }}
                >
                    {items}
                </Select>
            </FormControl>

        </form>
    );
}

function InputSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(50000);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 150000) {
            setValue(150000);
        }
    };

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                {props.title}
            </Typography>
            <Slider
                value={typeof value === 'number' ? value : 0}
                min={props.min}
                max={props.max}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
            />
            <Input
                // className={classes.input}
                value={value}
                width={100}
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                    step: 1000,
                    min: props.min,
                    max: props.max,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />
        </div>
    );
}
export class App extends React.Component {

    cities = ['Akron', 'Cleveland', 'Cincinnati', 'Columbus']
    // classes = useStyles()

    render() {

        return (
            <body>
                <Grid container spacing={2}>
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
                    <Container fixed>
                        Help I'm trapped in a fixed width container
                        <SimpleSelect values={this.cities} />
                        <InputSlider title="Expected Salary" min={0} max={150000} />
                        <CheckboxLabel label="Is misty a thot y/n" />
                    </Container>
                </Grid>

            </body>



        );
    }


}

export default App;

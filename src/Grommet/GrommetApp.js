import React from 'react';
import '../App.css';
import { Button, CheckBox, Grommet, Select, TextInput } from 'grommet';
import theme from './GrommetTheme'

//https://github.com/grommet/grommet-starter-existing-app
//https://theme-designer.grommet.io/

function Selector(props) {
    const [value, setValue] = React.useState('misty');

    return (
        <Select
            options={['misty', 'is', 'a', 'thot']}
            value={value}
            onChange={({ option }) => setValue(option)}
            margin={{
                "horizontal": "22px",
                "vertical": "10px"
            }}
        />
    )
}

function Check(props) {
    const [checked, setChecked] = React.useState(true);

    return (
        <CheckBox
            checked={checked}
            label="Is Deokjae basic y/n"
            onChange={(event) => setChecked(event.target.checked)}
        // toggle={true}
        />
    );
}

function PWButton(props) {
    return (
        <Button
            theme={theme}
            label={props.label}
            primary={props.primary}
            margin={{
                "horizontal": "22px",
                "vertical": "10px"
            }}
        />
    )
}

function PWText(props) {
    return (
        <TextInput
            onChange={() => { }}
            theme={theme}
            placeholder={props.placeholder} />
    )
}

export class App extends React.Component {

    createButton(label, primary) {
        return <PWButton label={label} primary={primary} />
    }
    createTextInput(placeholder) {
        return <PWText placeholder={placeholder} />
    }
    createSelector() {
        return <Selector />;
    }
    createCheck() {
        return <Check />;
    }

    render() {

        return (

            <Grommet theme={theme}>
                {this.createButton("I'm a button whee", true)}
                {this.createButton("I'm also a button", false)}
                {this.createTextInput("placeholder")}
                {this.createSelector()}
                {this.createCheck()}
            </Grommet>


        );
    }
}


export default App;

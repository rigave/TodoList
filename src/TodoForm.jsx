import { Create, Send } from "@mui/icons-material";
import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" 
                    label="Add New Todo" 
                    variant="outlined" 
                    onChange={handleChange} 
                    value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end" type="submit">
                                    <Send />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    )
}

{/* <OutlinedInput
    id="outlined-adornment-password"
    type={showPassword ? 'text' : 'password'}
    endAdornment={
        <InputAdornment position="end">
        <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
        >
            {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
        </InputAdornment>
    }
    label="Password"
/> */}
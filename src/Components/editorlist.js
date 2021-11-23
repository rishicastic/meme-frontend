import "./editorlist.css";
import {Button, Card, CardContent, CardMedia, Grid, Paper} from '@mui/material';
import { useContext } from "react";
import { productContext } from "../productContext";
const Editorlist =() =>{
    

    const displaytools =() =>{
        return editordata.map ( (game) => ( 
            <Grid item md={4} lg ={3} sm ={6} sx ={12}>
                <Card>
                 <CardMedia component ="img" image ={tools.img_url} height ={170}/>
                <CardContent>
                <h3>{tools.uppertext}</h3>
                <p className="text-muted">{tools.bottomtext}</p>
                <button className="btn btn-dark float-end"></button>
                <Button style ={btnStyle} variant="contained" color="primary">₹{tools.save}</Button>
                </CardContent>
                </Card>
                
            </Grid>
        ))
    }

    return(
        <Paper style={{ height:"100vh"}}>
            <div className="container">
            <h1>Editorlist</h1>
            <Grid container spacing = {5}>
            {displaytools()}
            </Grid>
        </div>
        </Paper>
        
    )
}
export default Editorlist;
import React, { useState }  from "react";
import { Typed as ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  Stack,
  Paper,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Avatar,
  IconButton,
  TextField,
  Input,
  InputLabel,
  FormControl,
  Link,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
  Badge,
  Snackbar,
  Alert,
  CircularProgress,
  LinearProgress,
  Tooltip,
  Modal,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  
} from "@mui/material";
import * as Router from "react-router-dom";

function Calculadora () {
  const BoxMotion = motion(Box);
  const ButtonMotion = motion(Button);
  const [pantalla , setPantalla] = useState("");

  const agregar = (valor) => {
    setPantalla(pantalla + valor);
  }

  const limpiar = () => {
    setPantalla("");
  }
  const Borrar = () => {
    
    setPantalla(pantalla.slice(0,-1));
  }

  const calcular = () => {
    try {
      const resultado = eval(pantalla.replace(/%/g, "/100"));
      setPantalla(eval(resultado).toString());
    } catch  {
      setPantalla("Syntax Error");
    }
  }


  return(
    <Box sx={{display:"flex" ,  height:"100vh" , width:"100vw" ,  overflowX:"hidden", backgroundColor:"#1a1a1aff"  , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , alignContent:"center" }}>

      <Box sx={{display:"flex" , flexDirection:"column" , background:"#ffffffff" , height:{md:500, xl:500 , xs:500} , width:{md:300, xl:300, xs:300} , justifyContent:"center" ,  borderRadius:5 , p:2 , gap:2 , backdropFilter:"blur(10px)",  WebkitBackdropFilter: "blur(10px)",  border: "1px solid rgba(131, 131, 131, 0.3)",}} >
         <TextField value={pantalla} disabled variant="outlined"  sx={{ mb:2 , color:"#000000ff", input : { textAlign : "right", color:"#000" }, "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "black" },
            },}}>
              </TextField>
              <Grid container spacing={1} sx={{display:"flex" , justifyContent:"center" , alignItems:"center", textAlign:"center" , alignSelf:"center"}}>
                <Grid item xs={3}>
                  <ButtonMotion variant="contained"  onClick={limpiar} sx={{height:  {xl:60 , md:55 , xs:50} , color:"#ffffffff" , background:"#747474ff"  , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}} whileHover={{scale:1.1}}>C</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={Borrar} sx={{color:"#ffffffff" , height:  {xl:60 , md:55 , xs:50} , background:"#797979ff" , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>⌫</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("%")} sx={{color:"#fff" , border:"1px solid #ffffffff", background:"#747dffff" ,  height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.5rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>%</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("*")} sx={{color:"#ffffffff", border:"1px solid #ffffffff" , background:"#747dffff" , height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.5rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>*</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("7")} sx={{color:"black", border:"1px solid #000000ff", height: {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>7</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("8")} sx={{color:"black", border:"1px solid #000000ff", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>8</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("9")} sx={{color:"black", border:"1px solid #000000ff", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>9</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("/")} sx={{color:"#fff", border:"1px solid #ffffffff" , background:"#747dffff", height: 60 , fontSize:{xl:"1.5rem" , md:"1.5rem" , xs:"0.9rem" }} }whileHover={{scale:1.1}}>/</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("4")} sx={{color:"black", border:"1px solid #000000ff", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>4</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("5")} sx={{color:"black", border:"1px solid #000000ff", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>5</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("6")} sx={{color:"black", border:"1px solid #000000ff", height: {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>6</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("-")} sx={{color:"#fff", border:"1px solid #ffffffff" , background:"#747dffff", height: {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.5rem" , md:"1.5rem" , xs:"0.9rem" }}}whileHover={{scale:1.1}}>-</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("1")} sx={{color:"black", border:"1px solid black", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" } }}whileHover={{scale:1.1}} >1</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("2")} sx={{color:"black", border:"1px solid black", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}} whileHover={{scale:1.1}}>2</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("3")} sx={{color:"black", border:"1px solid black", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}} whileHover={{scale:1.1}}>3</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar("+")} sx={{color:"#fff", border:"1px solid white" , background:"#747dffff", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.5rem" , md:"1.5rem" , xs:"0.9rem" }}} whileHover={{scale:1.1}}>+</ButtonMotion></Grid>
                  <Grid item xs={6}><ButtonMotion fullWidth onClick={() => agregar("0")} sx={{color:"black", border:"1px solid black", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}} whileHover={{scale:1.1}}>0</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion fullWidth onClick={() => agregar(".")} sx={{color:"#000000ff", border:"1px solid black", height:  {xl:60 , md:55 , xs:50} , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" }}} whileHover={{scale:1.1}}>.</ButtonMotion></Grid>
                  <Grid item xs={3}><ButtonMotion variant="contained"  onClick={calcular} sx={{  height:  {xl:60 , md:55 , xs:50} , background:"#747dffff" , color:"#fff" , fontSize:{xl:"1.1rem" , md:"1.5rem" , xs:"0.9rem" } }} whileHover={{scale:1.1}}>=</ButtonMotion></Grid>
              </Grid>
            
      </Box>
   
    </Box>
  )
}

export default Calculadora;
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {productsAPI} from '../../services/util'
import axios from 'axios';
import Header from '../Header/Header';
import ProductList from '../Shelf/ProductList';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';

class Router extends Component {
    state = {
        productos: [],
        terminoBusqueda : ''
    }

    async componentDidMount() {
    }

    componentWillMount(){
        this.setState({
            productos: []
        })
    }

    busquedaProducto = (busqueda) =>{
        if(busqueda.length > 3) {
            this.setState({
                terminoBusqueda: busqueda
            })
        } else {
            this.setState({
                terminoBusqueda : ''
            })
        }
    }
    render() { 
        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;

        if(busqueda !== ''){
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase() ) !== -1
            ))
        } else {
            resultado = productos;
        }
        return ( 
            <BrowserRouter>
                <div className="contenedor">
                <Header/>
                </div>
            </BrowserRouter>
         )
    }
}
 
export default Router;

//
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import React from "react";


const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="Logo Bookmania"/>
                </div>

                <i className="fa fa-times" id="sidebarIcon" 
                onClick={() => closeSidebar()}>
                </i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>Visita el sitio</h2>
                <div className="sidebar__link">
                    <i className="fa fa-sign-in"></i>
                    <a href="https://bookmania-eq07.herokuapp.com/login">Inicia Sesión</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-plus"></i>
                    <a href="https://bookmania-eq07.herokuapp.com/register">Regístrate</a>
                </div>

                <h2>Información</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="https://bookmania-eq07.herokuapp.com/contact">Contáctanos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-in"></i>
                    <a href="https://bookmania-eq07.herokuapp.com/">Nuestro sitio</a>
                </div>
                <h2>Formas de Pago</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Efectivo</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Seguro</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cc-visa"></i>
                    <a href="#">Tarjeta</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-credit-card"></i>
                    <a href="#">Transferencia</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="https://bookmania-eq07.herokuapp.com/">Salir</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
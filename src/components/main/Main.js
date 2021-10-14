import "./Main.css";
import hello from "../../assets/hello.png";
import libroEjemplo from "../../assets/libroEjemplo.png";
import avatar from "../../assets/user.png"
import React from "react";

const Main = ({users, books, lastUser, lastBook}) => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Bookmania Dashboard</h1>
            <p>Bienvenido al administrador de Bookmania</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de Usuarios Registrados</p>
              <span className="font-bold text-title">{ users }</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-book fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total de Libros Registrados</p>
              <span className="font-bold text-title">{ books }</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-sort-amount-asc fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Total de Categorías Registradas</p>
              <span className="font-bold text-title">12</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">
              <span className="desarrollo">Desarrolladores: <br></br> <br></br></span>
              Josué Vázquez Franco 
              Stephanie Pamela Avila 
              Daniela Hernadez Lara
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Último Producto Agregado</h1>
                <p>{lastBook}</p>
              </div>
              <i className="fa fa-book" aria-hidden="true"></i>
            </div>
            <br></br>
            <img height='208' width='208' src={libroEjemplo} alt="Libro">
            </img>
          </div>

          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Último Usuario Agregado</h1>
                <p>{lastUser}</p>
              </div>
              <i className="fa fa-book" aria-hidden="true"></i>
            </div>
            <br></br>
            <img height='208' width='208' src={avatar} alt="Libro">
            </img>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>

      <h1 className="Titulo">Productos por categoría</h1>
      <div className="charts__right__cards">
                

            <div className="card1">
                <h1>Arte</h1>
                <p>90</p>
              </div>

              <div className="card2">
                <h1>Ciencia</h1>
                <p>09</p>
              </div>

              <div className="card3">
                <h1>Deportes</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>Derecho</h1>
                <p>1881</p>
              </div>

              <div className="card1">
                <h1>Economía</h1>
                <p>90</p>
              </div>

              <div className="card2">
                <h1>Enseñanza Inglés</h1>
                <p>09</p>
              </div>

              <div className="card3">
                <h1>Ficción</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>Ingeniería</h1>
                <p>1881</p>
              </div>
              <div className="card1">
                <h1>Infantil</h1>
                <p>90</p>
              </div>
              <div className="card2">
                <h1>Informática</h1>
                <p>09</p>
              </div>


              <div className="card3">
                <h1>Literatura</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>Medicina</h1>
                <p>1881</p>
              </div>


              <div className="card2">
                <h1>Psicología</h1>
                <p>09</p>
              </div>

              <div className="card3">
                <h1>Religión</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>Romance</h1>
                <p>1881</p>
            </div>
          </div>
    </main>
  );
};

export default Main;

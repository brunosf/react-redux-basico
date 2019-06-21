import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/**
 *
 * Componente stateless recebendo o ESTADO e AÇÕES através de PROPS
 */
const Counter = props => {
  console.log("CONTEM EM PROPS:", props);

  return (
    <div>
      <div>{props.counter}</div>
      <button onClick={props.handleDecrement}>-</button>
      <button onClick={props.handleIncrement}>+</button>
    </div>
  );
};

/**
 * Faz o mapeamento dos estados que esse componente precisa enxergar
 */
const mapStateToProps = state => ({
  counter: state
});

/**
 * Faz o mapeamento das funções que disparam as ações
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    handleDecrement: () => {
      console.log("AÇÃO DECREMENT DISPARADA");
      dispatch({ type: "DECREMENT" });
    },
    handleIncrement: () => {
      console.log("AÇÃO INCREMENT DISPARADA");
      dispatch({ type: "INCREMENT" });
    }
  });

/**
 * Connecta este componente ao estado/store global
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

import React from 'react';
import { connect } from 'react-redux';
import classes from './ChangeBoilControl.module.scss';

const ChangeBoilControl = (props) => {
  return (
      <div className={classes.boilMinsContainer}>
          <label className={classes.label}>Boil Minutes</label>
          <div className={classes.boilMinsAdjustContainer}>
              <button onClick={() => props.onBoilMinutesAdjust(-10)} className={classes.iconButton}><i className='fas fa-minus'></i></button>
              <span className={classes.boilMinsCurrent}>{props.boilMins}</span>
              <button onClick={() => props.onBoilMinutesAdjust(10)} className={classes.iconButton}><i className='fas fa-plus'></i></button>
          </div>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    boilMins: state.boilMinutes
  };
}
  
const mapDispatchToProps = dispatch => {
  return {
    onBoilMinutesAdjust: (adjustment) => dispatch({type: 'BOIL_MINS_ADJUST', adjustment: adjustment})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeBoilControl);
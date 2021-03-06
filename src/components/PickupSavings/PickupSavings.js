import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import {connect} from 'react-redux';

const styles={
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};

const mapStateToProps = state=>(
    {pickupSavings: state.pickupSavings}
);

const PickupSavings = props => {
      const tooltip=(<Tooltip id='tooltip'>
      <p>Picking up your order in the store helps cut costs, and we pass the savings to you. </p>
      </Tooltip>);

    return (
        <Row className='show-grid'>
            <Col md={6}>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <div style={styles.pickupSavings}>
                        Pickup Savings
                    </div>
                </OverlayTrigger>
            </Col>
            <Col style={styles.totalSavings} md={6}>
            {`$${props.pickupSavings}`}
            </Col>
        </Row>
    )
};

export default connect(mapStateToProps)(PickupSavings);

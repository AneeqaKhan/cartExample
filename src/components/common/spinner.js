import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Modal } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Spinner extends Component {
    render() {
        const {
            loaderColor, sizeLoader = 'small', isLoading = 'false',
        } = this.props;
        const modalColor = 'rgba(0, 0, 0, 0.7)';
        return (
            <Modal
                supportedOrientations={['landscape', 'portrait']}
                transparent
                visible={isLoading}
            >
                <View style={[styles.container, { backgroundColor: modalColor }]}>
                    <View style={styles.background}>
                        <ActivityIndicator size={sizeLoader} color={loaderColor} />
                    </View>
                </View>
            </Modal>
        );
    }
}
Spinner.propTypes = {
    loaderColor: PropTypes.string.isRequired,
    sizeLoader: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
    
    const isLoading = state.Common.requestCount > 0;
    return { isLoading };
};
export default connect(mapStateToProps, [])(Spinner);
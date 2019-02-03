import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onClose() {
        console.log('close');
    }

    onConfirm() {
        console.log('confirm');
        console.log(this.props);
        //kako proslijediti id????
        // this.props.deleteUser(ID)
    }

    render() {

        // console.log('props: ', this.props);

        return(
            // style={{zIndex: (zIndex+1)*10}}
            <div className="modal-wrapper" >
            <div className="modal">
              <div className="text">dsadsada</div>
              <div className="buttons">
                <button className="modal-button" onClick={() => this.onConfirm()}>Confirm</button>
                <button className="modal-button" onClick={() => this.onClose()}>Close</button>
              </div>
            </div>
          </div>
        )
    }
}
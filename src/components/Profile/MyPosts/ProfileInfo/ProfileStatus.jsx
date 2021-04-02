import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  onStatusChenge = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  componentDidMount() {
    this.props.getStatus(this.props.userId);
  }
  componentDidUpdate() {
    this.props.getStatus(this.props.userId);
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span
              
              className={styles.profile_span}
            >
              Status: {this.props.status || "no status"}
              <button onClick={this.activateEditMode}>update status</button>
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              value={this.state.status}
              onBlur={this.deactivateEditMode}              
              autoFocus={true}
              onChange={this.onStatusChenge}
            />
            <button onClick={this.deactivateEditMode}>save</button>
          </div>         
        )}
        
      </div>
    );
  }
}

export default ProfileStatus;

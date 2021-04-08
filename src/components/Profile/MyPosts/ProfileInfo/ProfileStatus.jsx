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
  componentDidUpdate(prevProps) {
    if (prevProps.status != this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div className={styles.status}>
            <span className={styles.profile_span}>
              Status: {this.props.status || "no status"}
            </span>
            <button
              onClick={this.activateEditMode}
              className={styles.button_status}
            >
              update status
            </button>
          </div>
        )}
        {this.state.editMode && (
          <div className={styles.status}>
            <input
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              onChange={this.onStatusChenge}
            />
            <button
              onClick={this.deactivateEditMode}
              className={styles.button_status}
            >
              save
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

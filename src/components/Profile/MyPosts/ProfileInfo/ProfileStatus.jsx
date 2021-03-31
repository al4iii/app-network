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
              onDoubleClick={this.activateEditMode}
              className={styles.profile_span}
            >
              Status: {this.props.status || "no status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              onClick={this.deactivateEditMode}
              autoFocus={true}
              onChange={this.onStatusChenge}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

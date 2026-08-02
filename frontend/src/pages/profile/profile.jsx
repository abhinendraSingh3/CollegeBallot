import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Aditi Sharma",
    email: "aditi.sharma@university.edu",
    password: "",
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // TODO: connect to backend API to save changes
    console.log("Saved profile:", profile);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Your Profile</h2>
      </div>

      <div className="profile-card">
        <div className="avatar-section">
          <div className="avatar-circle">
            {avatar ? (
              <img src={avatar} alt="avatar" className="avatar-img" />
            ) : (
              <span>{profile.name.charAt(0)}</span>
            )}
            <label className="avatar-upload">
              📷
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                hidden
              />
            </label>
          </div>
          <p className="avatar-text">Editable — click the camera icon to change</p>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••••"
            value={profile.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Student ID</label>
            <input type="text" value=""  />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input type="text" value="Computer Science" disabled />
          </div>
        </div>

        <div className="form-group">
          <label>Role</label>
          <span className="role-badge">Student</span>
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
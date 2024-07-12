import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar15.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [comfirmedNewPassword, setComfirmedNewPassword] = useState("");

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={"/myposts/dsds"} className="btn">
          My Posts
        </Link>
        <div className="profile-details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avatar} alt="" />
            </div>

            <form action="" className="avatar_form">
              <input
                type="file"
                onChange={(e) => setAvatar(e.target.files[0])}
                id="avatar"
                name="avatar"
                accept="jpg , png , jpeg"
              />
              <label htmlFor="">
                {" "}
                <FaEdit />{" "}
              </label>
            </form>

            <button className="profile_avatar_btn">
              <FaCheck />
            </button>
          </div>
          <h1>Sameer Sattar</h1>
          <form action="" className="form profile_form">
            <p className="form_error_message">This is an error message</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current Password"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Passowrd"
            />
            <input
              type="password"
              value={comfirmedNewPassword}
              onChange={(e) => setComfirmedNewPassword(e.target.value)}
              placeholder="Comfirm New Password"
            />
            <button className="btn primary" type="submit">
              Update Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;

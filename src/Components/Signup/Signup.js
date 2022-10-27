import React,{useState, useContext} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [useremail, setUserEmail] = useState('')
  const [userphone, setUserPhone] = useState('')
  const [userpasswd, setUserPasswd] = useState('')
  const  { firebase } = useContext(FirebaseContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(useremail,userpasswd).then((result)=>{
      result.user.updateProfile({displayName : username })
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username : username,
        phone: userphone
      }).then(()=>{
        history.push("/login")
      })
    })
    // console.log(firebase)
    // console.log(username)
    // console.log(useremail)
    // console.log(userphone)
    // console.log(userpasswd)

  }   
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            // defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={useremail}
            onChange={(e)=>{
              setUserEmail(e.target.value)
              // console.log(e.target.value)
            }}
            id="fname"
            name="email"
            // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={userphone}
            onChange = {(e)=>{
              setUserPhone(e.target.value)
              // console.log(e.target.value)
            }}
            id="lname"
            name="phone"
            // defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={userpasswd}
            onChange = {(e)=>{
              setUserPasswd(e.target.value)
            }}
            id="lname"
            name="password"
            // defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}

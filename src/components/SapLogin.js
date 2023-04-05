import React, { useState, useEffect } from "react";

const SapLogin = () => {
  //   function checkUSerAccount() {
  //     const baseURL = "https://192.168.0.44:50000/b1s/v1/";
  //   }

  //   function loginWithAdmin() {}

  //   function checkUserAccount() {
  //     fetch(
  //       `${baseURL}view.svc/Homart_CheckUserAccount_B1SLQuery()?$filter=U_UserCode eq '${username}' and U_UserPW eq '${password}'`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });

  //     if (data) {
  //       alert("Login successfully");
  //     } else {
  //       alert("Login failed");
  //     }
  //   }

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  // const [baseURL, setBaseURL] = "https://192.168.0.44:50000/b1s/v1/";
  const [loginStatus, setLoginStatus] = useState(false);
  const [data, setData] = useState("");
  const CompanyDatabse = "Homart_TEST8";
  const AdminUserName = "SAPCreatio";
  const AdminPassword = "Bold#By68";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputUsername:", inputUsername);
    console.log("inputPassword:", inputPassword);
    if(loginWithAdminAccount()){
        console.log("loginWithAdminAccount successful");
        // if(checkUserAccount()){
        //     setLoginStatus(true);
        // }
    } else {
        console.log("loginWithAdminAccount failed");
    }
    
  };

  const handleInputChangeUsername = (event) => {
    setInputUsername(event.target.value);
  };
  const handleInputChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  function loginWithAdminAccount() {
    const requestBody = {
      CompanyDB: CompanyDatabse,
      UserName: AdminUserName,
      Password: AdminPassword,
    };

    try {
      console.log("requestBody:", requestBody);
      console.log(JSON.stringify(requestBody));
      fetch("http://192.168.0.165:3002/sap/saplogin", {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          Connection: "keep-alive",
        },
        body: JSON.stringify(requestBody),
      }).then((response) => {
        console.log("response:", response);
        return true;
      });
  }catch(error) {
    console.error("Error occurred while sending POST request:", error);
    return false;
  }
  
}

  function checkUserAccount() {}





  // function loginWithAdminAccount() {

  //   const requestBody = {
  //       CompanyDB: "Homart_TEST8",
  //       UserName: "SAPCreatio",
  //       Password: "Bold#By68"
  //   }

  //   try {
  //       console.log("requestBody:", requestBody);
  //       console.log(JSON.stringify(requestBody));
  //       fetch("https://sap01.homart.local:50000/b1s/v1/Login", {
  //           method: "post",
  //           mode: "cors",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //             "Connection"  : "keep-alive",
  //           },
  //           body: JSON.stringify(requestBody),
  //         }).then((response) => {
  //           console.log("response:", response);
  //         });
  //         return true;
  //   } catch (error) {
  //       console.log("error:", error);
  //       return false;
  //   }
  // }

  // function checkUserAccount() {
  //   try {
  //     //   fetch("http://example.com/api/endpoint/", {
  //     //     method: "post",
  //     //     headers: {
  //     //       Accept: "application/json",
  //     //       "Content-Type": "application/json",
  //     //     },

  //     //     //make sure to serialize your JSON body
  //     //     body: JSON.stringify({
  //     //       name: myName,
  //     //       password: myPassword,
  //     //     }),
  //     //   }).then((response) => {
  //     //     //do something awesome that makes the world a better place
  //     //   });

  //     fetch(
  //       `${baseURL}view.svc/Homart_CheckUserAccount_B1SLQuery()?$filter=U_UserCode eq '${inputUsername}' and U_UserPW eq '${inputPassword}'`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });

  //     if (data) {
  //       alert("Login successfully");
  //     } else {
  //       alert("Login failed");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    if (inputUsername) {
      console.log("inputUsername:", inputUsername);
    }
  }, [inputUsername]);

  useEffect(() => {
    if (inputPassword) {
      console.log("inputPassword:", inputPassword);
    }
  }, [inputPassword]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>SapLogin</h1>
        <label htmlFor="username">Username</label>
        <input type="text" onChange={handleInputChangeUsername} />
        <br></br>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleInputChangePassword} />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SapLogin;

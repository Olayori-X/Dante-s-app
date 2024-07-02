// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');
  const [statusCode, setStatusCode] = useState(null);

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMzViNi0xMDItODktMjMtNzkubmdyb2stZnJlZS5hcHAvYXBpL3NlbGxlci9zaWduLWluIiwiaWF0IjoxNzE5OTE5MDIxLCJleHAiOjE3MjI1MTEwMjEsIm5iZiI6MTcxOTkxOTAyMSwianRpIjoiR3NpWnllN0c0NHczeDlFTCIsInN1YiI6IjE0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.GY2KTuSDMxzEmF6vd42FkSn3p7dtlwSXAxX6z1u8pb0';

  // Function to refresh the token
  const refreshAuthToken = async () => {
    try {
      // Make a request to refresh the token
      const response = await fetch(token, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ }),
      });

      const result = await response.json();
      if (response.ok && result.token) {
        setAuthToken(result.token);
      } else {
        throw new Error('Failed to refresh token');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  // Refresh token periodically
  // useEffect(() => {
  //   const interval = setInterval(refreshAuthToken, 15 * 60 * 1000); // Refresh every 15 minutes
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, statusCode, setStatusCode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// import React, { createContext, useState, useContext } from 'react';

// const StatusContext = createContext();

// export const StatusProvider = ({ children }) => {
//   const [statusCode, setStatusCode] = useState(null);

//   return (
//     <StatusContext.Provider value={{ statusCode, setStatusCode }}>
//       {children}
//     </StatusContext.Provider>
//   );
// };

// export const useStatus = () => useContext(StatusContext);

import React, {useState, useEffect} from 'react'

function Auth({component}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("isUserLoggedIn")==="true") {
      setIsLoggedIn(true);
    }
  }, [])

  if(!isLoggedIn) {
    return <div className="flex-col flex h-screen justify-center items-center text-lg font-bold">
      Please Login to view the dashboard
      <a href="/" className="text-blue-400 font-bolder">Go to home</a>
    </div>
  }

  return (
    <div>
      {component}
    </div>
  )
}

export default Auth
import React from "react";

const TotalData = () => {
  

  const data = [
    {
      background: "#DDEFE0",
      image: "revenue",
      label: "Total Revenues",
      value: "$2,129,430",
    },
    {
      background: "#F4ECDD",
      image: "transactions",
      label: "Total Transactions",
      value: "1,520",
      
    },
    {
      background: "#EFDADA",
      image: "likes",
      label: "Total Likes",
      value: "9,721",
    },
    {
      background: "#DEE0EF",
      image: "users",
      label: "Total Users",
      value: "892",
    },
  ];
  return (
    <div
      className="block space-y-3 md:space-y-0 md:flex md:space-x-7 my-10">
      {data.map((userData, index) => (
        <div
          className={`rounded-2xl py-5 px-3 xl:px-6 flex-1 hover:font-extrabold`}
          style={{ backgroundColor: userData.background }}
          key={index}
        >
          <div className="flex justify-end hover:font-extrabold">
            <img src={`./assets/${userData.image}.png`} alt="revenue" />
          </div>
          <p className="text-sm">{userData.label}</p>
          <p className="text-2xl font-bold hover:font-extrabold">{userData.value}</p>
        </div>
      ))}
    </div>
  );
};

export default TotalData;


// onMouseEnter={handleMouseOver}
//       onMouseLeave={handleMouseOut}
//       style={{
//         width: size,
//         height: size,
//       }}

// const [size, setSize] = useState(200);

//   const handleMouseOver = () => {
//     setSize(300);
//   };

//   const handleMouseOut = () => {
//     setSize(200);
//   };
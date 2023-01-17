

 const Stats = () => {
  return (
    <div
      className="box"
      style={{
        border: "1px solid  #f0f0f0",
        width: "100%",
        margin: "auto",
        marginBottom: "1px",
        paddingTop: "25px",
        backgroundColor: "#C8CAD9",
        transition: " all 0.3s ease",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        My Statistics
      </h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        &nbsp;
        <img
         style={{width:"45%"}}
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=ManishGupta1908&show_icons=true&locale=en"
          alt="stats"
        />
      </p>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "50px",
          

        }}
      >
        <img
          style={{width:"45%"}}
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=ManishGupta1908&"
          alt="streak-stats"
        />
      </p>
    </div>
  );
};

export default Stats;
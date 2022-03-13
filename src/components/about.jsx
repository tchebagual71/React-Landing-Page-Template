export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/bg.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Welcome Frens</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

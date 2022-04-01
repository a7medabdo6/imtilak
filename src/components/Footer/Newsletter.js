import React from "react";

function Newsletter() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
      className="newsletter"
    >
      <h2>Subscribe To Our Newsletter</h2>

      <h4>Find more about the latest real estate offers</h4>

      <form method="post" id="subscribe_form" className="subscribe-form">

        <div
          className="input-group mb-lg-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: 'wrap',
          }}
        >
          <input
            type="text"
            className="form-control"
            name="email"
            aria-label="form subscribe"
            placeholder="Your e-mail address"
            style={{
              width: "100%",
              marginBottom: "15px",
            }}
          />
          <div className="input-group-append">

            <button className="btn subscribe-btn" type="button" id="subscribe_btn">

              <span className="subscribing d-none" style={{ fontSize: "1.2rem" }}>
                Subscribe{" "}
              </span>

            </button>

          </div>
        </div>

      </form>

    </div>
  );
}

export default Newsletter;

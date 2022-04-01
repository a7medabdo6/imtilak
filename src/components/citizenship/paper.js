import React from "react";

function Paper() {
  return (
    <section
      class="papers-section mb-5 position-relative"
      style={{ position: "relative" }}
    >
      <img
        class="note-decor"
        src="https://www.imtilak.net/assets/img/turkish-citizenship/note-decor.svg"
        alt=""
      />
      <div class="background-decor"></div>
      <h4 class="h3 color-primary text-capitalize font-weight-bold text-center mb-4 text-center px-2">
        The documents required to obtain Turkish citizenship
      </h4>
      <div class="contain">
        <div class="item">
          <div class="head font-weight-bold">1</div>
          <div class="body">
            Photocopy of the Tabu (The title deed of the purchased
            property).&lrm;
          </div>
        </div>
        <div class="item">
          <div class="head font-weight-bold">2</div>
          <div class="body">
            Valid property valuation report (report valid for three
            months).&lrm;
          </div>
        </div>
        <div class="item">
          <div class="head font-weight-bold">3</div>
          <div class="body">
            Payment receipts from the buyer's account stamped with a direct
            stamp &lrm;from the bank.&lrm;
          </div>
        </div>
        <div class="item">
          <div class="head font-weight-bold">4</div>
          <div class="body">
            Receipts from the seller's account stamped with a direct stamp of
            &lrm;the bank
          </div>
        </div>
        <div class="item">
          <div class="head font-weight-bold">5</div>
          <div class="body">
            Two copies of the special power of attorney regarding the request of
            &lrm;obtaining citizenship.&lrm;
          </div>
        </div>
        <div class="item">
          <div class="head font-weight-bold">6</div>
          <div class="body">
            Translation of the passport to Turkish language and ratifying it at
            the &lrm;Notary in Turkey for all family members (husband + wife +
            children &lrm;under 18).&lrm;
          </div>
        </div>
      </div>
    </section>
  );
}

export default Paper;

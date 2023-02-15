import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem 0;

  .label {
    color: #b8cdfe;
    font-size: 0.9rem;
    margin-right: 0.5em;
  }

  .value {
    color: #ffffff;
  }

  .ave-tempt__value {
    display: block;
    font-size: 4rem;
    font-weight: 700;
    background: -webkit-linear-gradient(#eef4fe, #c0dbff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ave-tempt__label {
    display: block;
    color: #b9ceff;
    margin-bottom: 80px;
  }

  .today-section {
    &__date {
      color: #b9ceff;
    }

    &__temperature,
    &__wind {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0;
    }
  }
`;

const WeatherToday = () => {
    return (
        <Wrapper>
            <span className="today-section__date"></span>
            <div className="today-section__weather-icon">
                <img src={`http://openweathermap.org/img/wn/02d@2x.png`} alt="" />
            </div>

            <div className="today-section__temperature">
                <div className="min-tempt">
                    <span className="label"></span>
                    <span className="value"></span>
                </div>

                <div className="ave-tempt">
                    <span className="ave-tempt__value">Weather in Zaporizhzhia</span>
                    <span className="ave-tempt__label">For today and the next days</span>
                </div>

                <div className="max-tempt">
                    <span className="label"></span>
                    <span className="value"></span>
                </div>
            </div>

            {/*<div className="today-section__wind">*/}
            {/*    <div className="wind__info">*/}
            {/*        <span className="label"></span>*/}
            {/*        <span className="value"></span>*/}
            {/*    </div>*/}
            {/*    <div className="wind__info">*/}
            {/*        <span className="label"></span>*/}
            {/*        <span className="value"></span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Wrapper>
    );
};

export default WeatherToday;

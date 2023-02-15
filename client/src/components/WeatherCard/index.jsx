import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;

  .weather-card {
    &__day {
      color: #5b72a8;
    }

    &__tempt {
      display: block;
      font-size: 2rem;
      color: #6790de;
      margin-bottom: 1rem;
    }

    &__weather {
      display: block;
      font-size: 1rem;
      color: #677db1;
      margin-bottom: 1rem;
    }

    &__max-tempt {
      color: #6790de;
      margin-right: 0.5rem;
    }

    &__min-tempt {
      color: #1336a6;
    }
  }
`;

const WeatherCard = ({ data }) => {
    const { dt_txt, main, weather } = data;
    const { temp, temp_min, temp_max } = main;
    const { icon } = weather[0];

    return (
        <Wrapper className="weather-card">
            <Moment format="LT" className="weather-card__day">
                {dt_txt}
            </Moment>
            <div className="weather-card__image">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            </div>
            <span className="weather-card__tempt">{temp}°</span>
            <span className="weather-card__weather">{weather[0].main}</span>
            <span className="weather-card__max-tempt">{temp_max}°</span>
            <span className="weather-card__min-tempt">{temp_min}°</span>
        </Wrapper>
    );
};

export default WeatherCard;

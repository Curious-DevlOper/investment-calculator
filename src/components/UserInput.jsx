import PropTypes from 'prop-types';


export default function UserInput({ onChangeInput, userEntered }) {
    return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={userEntered.initialInvestment}
              required
              onChange={(event) =>
                onChangeInput("initialInvestment", Number(event.target.value))
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userEntered.annualInvestment}
              onChange={(event) =>
                onChangeInput("annualInvestment", Number(event.target.value))
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userEntered.expectedReturn}
              onChange={(event) =>
                onChangeInput("expectedReturn", Number(event.target.value))
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userEntered.duration}
              onChange={(event) =>
                onChangeInput("duration", Number(event.target.value))
              }
            />
          </p>
        </div>
      </section>
    );
  }
  
  UserInput.propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    userEntered: PropTypes.shape({
      initialInvestment: PropTypes.number.isRequired,
      annualInvestment: PropTypes.number.isRequired,
      expectedReturn: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
    }).isRequired,
};
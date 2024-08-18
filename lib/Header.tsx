import React from "react";
import CountUp from "react-countup";

const Header = ({ title, description, amount, marks }: any) => {
  return (
    <div>
      <h1>Hey, {title}</h1>
      <p>
        Description
        {description}
      </p>
      {amount % 2 === 0 ? (
        <>
          <button>Increment: {amount}</button>
          {marks && (
            <div>
              List of marks
              {marks.map((mark, id) => (
                <ol key={id}>
                  <p style={{textDecoration: 'underline'}}>{mark?.name}</p>
                  <h2>Math Scores:  {<
                    CountUp
                    duration={2}
                    decimal="."
                    decimals={3}
                    end={mark?.math} />}</h2>
                  <h3>CSC Scrores: {<CountUp end={mark?.CSC} />}</h3>
                </ol>
              ))}
            </div>
          )}
        </>
      ) : (
        <h2>Undone</h2>
      )}
    </div>
  );
};

export default Header;

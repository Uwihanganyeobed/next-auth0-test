import React from "react";

const HeaderTest = ({ title, description, amount, marks }: any) => {
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
              {marks.map((mark,id) =>(
               <ol key={id}>
                  <p>{mark?.name}</p>
                  <p>{mark?.math}</p>
                  <p>{mark?.CSC}</p>
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

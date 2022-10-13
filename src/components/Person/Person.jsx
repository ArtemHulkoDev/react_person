import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let partner;

  if (isMarried) {
    if (sex === 'm') {
      partner = `${partnerName} is my wife`;
    } else {
      partner = `${partnerName} is my husband`;
    }
  } else {
    partner = `I am not married`;
  }

  if (!age) {
    return (
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        <p className="Person__partner">{partner}</p>
      </section>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{`I am ${age}`}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  );
};

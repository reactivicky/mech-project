const roundValue = (val) => Math.round((val + Number.EPSILON) * 100) / 100;

export default (
  power,
  speed,
  diameter_driven,
  diameter_driver,
  center_distance,
  application_category,
  belt_drive
) => {
  let ks;
  let ka;
  let ac;
  if (+application_category === 1) {
    ks = 1.2;
  } else if (+application_category === 2) {
    ks = 1.3;
  } else {
    ks = 1.5;
  }
  if (+belt_drive === 1) {
    ac =
      180 -
      ((diameter_driven - diameter_driver) / (center_distance * 1000)) * 60;
  } else {
    ac =
      180 +
      ((diameter_driven + diameter_driver) / (center_distance * 1000)) * 60;
  }
  if (ac <= 90) {
    ka = 1.68;
  } else if (ac > 90 && ac <= 120) {
    ka = 1.33;
  } else if (ac > 120 && ac <= 130) {
    ka = 1.26;
  } else if (ac > 130 && ac <= 140) {
    ka = 1.19;
  } else if (ac > 140 && ac <= 150) {
    ka = 1.13;
  } else if (ac > 150 && ac <= 160) {
    ka = 1.08;
  } else if (ac > 160 && ac <= 170) {
    ka = 1.04;
  } else if (ac > 170 && ac <= 180) {
    ka = 1.0;
  } else if (ac > 180 && ac <= 190) {
    ka = 0.97;
  } else if (ac > 190 && ac <= 200) {
    ka = 0.94;
  } else if (ac > 200 && ac <= 210) {
    ka = 0.91;
  } else if (ac > 210 && ac <= 220) {
    ka = 0.88;
  } else if (ac > 220 && ac <= 230) {
    ka = 0.86;
  } else if (ac > 230 && ac <= 240) {
    ka = 0.84;
  } else if (ac > 240 && ac <= 250) {
    ka = 0.82;
  } else {
    ka = 0.82;
  }
  const val = power * ks * ka;
  const design_power = roundValue(val);

  let belt_type;
  if (+application_category === 1 || +application_category === 2) {
    belt_type = "DUNLOP 'HI-SPEED' 878g fabric belting";
  } else {
    belt_type = "DUNLOP 'FORT'949g fabric belting";
  }

  const V = (3.14 * diameter_driver * speed) / 60 / 1000;

  let np = 0;
  if (V <= 10) {
    if (diameter_driver <= 90) {
      np = 3;
    } else if (diameter_driver > 90 && diameter_driver <= 140) {
      np = 4;
    } else if (diameter_driver > 140 && diameter_driver <= 200) {
      np = 5;
    } else if (diameter_driver > 200 && diameter_driver <= 250) {
      np = 6;
    } else {
      np = 8;
    }
  } else if (V > 10 && V <= 15) {
    if (diameter_driver <= 100) {
      np = 3;
    } else if (diameter_driver > 100 && diameter_driver <= 160) {
      np = 4;
    } else if (diameter_driver > 160 && diameter_driver <= 224) {
      np = 5;
    } else if (diameter_driver > 224 && diameter_driver <= 315) {
      np = 6;
    } else {
      np = 8;
    }
  } else if (V > 15 && V <= 20) {
    if (diameter_driver <= 112) {
      np = 3;
    } else if (diameter_driver > 112 && diameter_driver <= 180) {
      np = 4;
    } else if (diameter_driver > 180 && diameter_driver <= 250) {
      np = 5;
    } else if (diameter_driver > 250 && diameter_driver <= 355) {
      np = 6;
    } else {
      np = 8;
    }
  } else if (V > 20 && V <= 25) {
    if (diameter_driver <= 140) {
      np = 3;
    } else if (diameter_driver > 140 && diameter_driver <= 200) {
      np = 4;
    } else if (diameter_driver > 200 && diameter_driver <= 315) {
      np = 5;
    } else if (diameter_driver > 315 && diameter_driver <= 400) {
      np = 6;
    } else {
      np = 8;
    }
  } else {
    if (diameter_driver <= 180) {
      np = 3;
    } else if (diameter_driver > 180 && diameter_driver <= 250) {
      np = 4;
    } else if (diameter_driver > 250 && diameter_driver <= 355) {
      np = 5;
    } else if (diameter_driver > 355 && diameter_driver <= 450) {
      np = 6;
    } else {
      np = 8;
    }
  }

  let brs;
  if (+application_category === 1 || +application_category === 2) {
    brs = 0.023;
  } else {
    brs = 0.289;
  }

  const beltRating = brs * (V / 10) * (ac / 180) * np;

  const beltWidth = design_power / (brs * (V / 10) * (ac / 180) * np);
  let error = null
  if (beltWidth > 400) {
    error = "THE DESIGN IS NOT SAFE"
  }

  const beltLength = roundValue(
    2 * center_distance +
      ((3.14 / 2) * (diameter_driven + diameter_driver)) / 1000 +
      (diameter_driven - diameter_driver) ** 2 /
        (4 * center_distance * 1000 ** 2)
  );

  let requiredLengthOfBelt;
  let z;
  if (np === 3) {
    z = 1.5;
  } else if (np >= 4 && np <= 6) {
    z = 1;
  } else {
    z = 0.5;
  }

  requiredLengthOfBelt = (beltLength * 1000 * (100 - z)) / 100;

  let pulleyWidth;
  let C;
  if (beltWidth <= 125) {
    C = 13;
  } else if (beltWidth > 125 && beltWidth <= 375) {
    C = 25;
  } else {
    C = 50;
  }

  pulleyWidth = beltWidth + C;

  return [
    design_power,
    belt_type,
    roundValue(V),
    np,
    brs,
    beltRating,
    roundValue(beltWidth),
    beltLength,
    requiredLengthOfBelt,
    roundValue(pulleyWidth),
    error
  ];
};

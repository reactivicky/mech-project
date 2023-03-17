import {
  Button,
  NumberInput,
  NumberInputField,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
} from "@chakra-ui/react";

function Form1({
  power,
  setPower,
  speed,
  setSpeed,
  diameter_driven,
  setDiameter_driven,
  diameter_driver,
  setDiameter_driver,
  center_distance,
  setCenter_distance,
  application_category,
  setApplication_category,
  belt_drive,
  setBelt_drive,
  setShowResults,
}) {
  const handleChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "power":
        setPower(value);
        break;
      case "speed":
        setSpeed(value);
        break;
      case "diameter_driven":
        setDiameter_driven(value);
        break;
      case "diameter_driver":
        setDiameter_driver(value);
        break;
      case "center_distance":
        setCenter_distance(value);
        break;
    }
  };

  const handleSubmit = () => {
    if (
      power === null ||
      speed === null ||
      diameter_driven === null ||
      diameter_driver === null ||
      center_distance === null
    ) {
      return;
    }
    setShowResults(true);
  };

  return (
    <>
      <NumberInput>
        <Text mb="8px">Enter the power to be transmitted in KW :</Text>
        <NumberInputField
          value={power}
          onChange={(e) => handleChange(e, "power")}
          size="sm"
        />
      </NumberInput>
      <NumberInput>
        <Text mb="8px">Enter the speed of the driver in rpm :</Text>
        <NumberInputField
          value={speed}
          onChange={(e) => handleChange(e, "speed")}
          size="sm"
        />
      </NumberInput>
      <NumberInput>
        <Text mb="8px">Enter the diameter of the driven pulley in mm :</Text>
        <NumberInputField
          value={diameter_driven}
          onChange={(e) => handleChange(e, "diameter_driven")}
          size="sm"
        />
      </NumberInput>
      <NumberInput>
        <Text mb="8px">Enter the diameter of the driver pulley in mm :</Text>
        <NumberInputField
          value={diameter_driver}
          onChange={(e) => handleChange(e, "diameter_driver")}
          size="sm"
        />
      </NumberInput>
      <NumberInput>
        <Text mb="8px">Enter the centre distance in m :</Text>
        <NumberInputField
          value={center_distance}
          onChange={(e) => handleChange(e, "center_distance")}
          size="sm"
        />
      </NumberInput>
      <h2 className="sub-heading">
        Please select the application category based below category
      </h2>
      <RadioGroup
        onChange={setApplication_category}
        value={application_category}
      >
        <Stack direction="column">
          <Radio value="1">
            <Tooltip
              label="Screens/ncentrifugal pump and fans/nevaporators,agitators,belt conveyors,light machine tools,laundry machines,printing and textile machinery"
              aria-label="A tooltip"
              placement="right-end"
            >
              APPLICATION-CATEGORY-I
            </Tooltip>
          </Radio>
          <Radio value="2">
            <Tooltip
              label="Heavy duty fans and blowers,Brick work machinery,reciprocating pumps and compressors,sawmills and paper mill machineries,heavy machine tools,stokers,elevators and line shafts"
              aria-label="A tooltip"
              placement="right-end"
            >
              APPLICATION-CATEGORY-II
            </Tooltip>
          </Radio>
          <Radio value="3">
            <Tooltip
              label="Vaccum pumps,rolling mills,crushing machinery,grinders,hammmer mills,tube and ball mills"
              aria-label="A tooltip"
              placement="right-end"
            >
              APPLICATION-CATEGORY-III
            </Tooltip>
          </Radio>
        </Stack>
      </RadioGroup>

      <h2 className="sub-heading">Please select the belt type</h2>
      <RadioGroup onChange={setBelt_drive} value={belt_drive}>
        <Stack direction="column">
          <Radio value="1">Open type</Radio>
          <Radio value="2">Crossed belt drive</Radio>
        </Stack>
      </RadioGroup>

      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}

export default Form1;

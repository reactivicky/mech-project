import { useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
import "./App.css";
import Form1 from "./Form1";
import Results from "./results";

function App() {
  const [power, setPower] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [diameter_driven, setDiameter_driven] = useState(null);
  const [diameter_driver, setDiameter_driver] = useState(null);
  const [center_distance, setCenter_distance] = useState(null);
  const [application_category, setApplication_category] = useState("1");
  const [belt_drive, setBelt_drive] = useState("1");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="container">
      <h1 className="heading">DESIGNING OF FLAT BELT DRIVE</h1>
      <Form1
        power={power}
        setPower={setPower}
        speed={speed}
        setSpeed={setSpeed}
        diameter_driven={diameter_driven}
        setDiameter_driven={setDiameter_driven}
        diameter_driver={diameter_driver}
        setDiameter_driver={setDiameter_driver}
        center_distance={center_distance}
        setCenter_distance={setCenter_distance}
        application_category={application_category}
        setApplication_category={setApplication_category}
        belt_drive={belt_drive}
        setBelt_drive={setBelt_drive}
        setShowResults={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Results</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Results
              power={power}
              speed={speed}
              diameter_driven={diameter_driven}
              diameter_driver={diameter_driver}
              center_distance={center_distance}
              application_category={application_category}
              belt_drive={belt_drive}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;

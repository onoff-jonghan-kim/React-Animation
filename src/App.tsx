import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  height: 400px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: aqua;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 5%;
`;

const Button = styled(motion.button)`
  width : 100px;
  height: 50px;
  font-size: 24px;
  border-radius: 15px;
  border: 0;
  font-weight: 600;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: {backgroundColor: "rgba(0,0,0,0)"},
  visible: {backgroundColor: "rgba(0,0,0,0.7)"},
  exit: {backgroundColor: "rgba(0,0,0,0)"},
}


function App() {
  const [circle, setCircle] = useState(true);
  const moveCircle = () => setCircle((prev) => !prev);

  const [id, setId] = useState<null | string>(null);
  return (
    <>
      <Wrapper >
          <Grid>
            {["1","2","3","4"].map((n) => (
              <Box 
                // whileHover={ (n==="1") ? { scale:1.1, x:"-5%", y:"-5%" } : (n==="2") ? { scale:1.1, x:"5%", y:"-5%" } : (n==="3") ? { scale:1.1, x:"-5%", y:"5%" } : { scale:1.1, x:"5%", y:"5%" }} 
                onClick={() => setId(n)} 
                key={n} 
                layoutId={n} >
                { circle ? ((n==="2") ? <Circle layoutId="circle"></Circle>: null) : ((n==="3") ? <Circle layoutId="circle"></Circle>: null)}
              </Box>
            ))}
          </Grid>
          <Button transition={{ duration: 0.1 }} onClick={moveCircle} animate={ circle ? (  {color: "rgb(0, 208, 24)"} ): ({color: "#0007d0",scale: 1.1})} >Click</Button>
        <AnimatePresence>
          {id ? (
            <Overlay
              variants={overlay}
              onClick={() => setId(null)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Box layoutId={id} style={{width:"25vw", height:"400px", backgroundColor:"rgba(255,255,255,1)"}} exit={{transform:"translateX(0%), translateY(0%), scale(1)"}} >
                { circle ? ((id==="2") ? <Circle layoutId="circle"></Circle>: null) : ((id==="3") ? <Circle layoutId="circle"></Circle>: null)}
              </Box>
            </Overlay>
          ): null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default App;

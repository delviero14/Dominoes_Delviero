import {
  Heading,
  Box,
  Text,
  Button,
  Input,
  VStack,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  countDoubleNumber,
  randomizeDominoes,
  flipDominoes,
  removeDuplicates,
  defaultDominoes,
  removeBySum,
} from "./utils";

export default function App() {
  const [dominoes, setDominoes] = useState([]);
  const [removeDominoSum, setRemoveDominoSum] = useState("");
  const [sortedDominoes, setSortedDominoes] = useState([]);

  useEffect(() => {
    const initialDominoes = defaultDominoes();
    setDominoes(initialDominoes);
    setSortedDominoes(initialDominoes);
  }, []);

  const handleShuffle = () => {
    const shuffledDominoes = randomizeDominoes();
    setDominoes(shuffledDominoes);
    setSortedDominoes(shuffledDominoes);
  };

  const handleFlip = () => {
    const flippedDominoes = flipDominoes(dominoes);
    setDominoes(flippedDominoes);
    setSortedDominoes(flippedDominoes);
  };

  const handleRemoveDuplicates = () => {
    const uniqueDominoes = removeDuplicates(dominoes);
    setDominoes(uniqueDominoes);
    setSortedDominoes(uniqueDominoes);
  };

  const handleReset = () => {
    const resetDominoes = defaultDominoes();
    setDominoes(resetDominoes);
    setSortedDominoes(resetDominoes);
  };

  const handleRemoveDominoBySum = () => {
    const parsedSum = parseInt(removeDominoSum, 10);
    if (!isNaN(parsedSum)) {
      const updatedDominoes = removeBySum(dominoes, parsedSum);
      setDominoes(updatedDominoes);
      setSortedDominoes(updatedDominoes);
    } else {
      alert("Please enter a valid number for the sum");
    }
  };

  const handleSortAscending = () => {
    const sortedAsc = [...dominoes].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    setSortedDominoes(sortedAsc);
  };

  const handleSortDescending = () => {
    const sortedDesc = [...dominoes].sort(
      (a, b) => b[0] + b[1] - (a[0] + a[1])
    );
    setSortedDominoes(sortedDesc);
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Hello Purwadhika</Heading>

      <Text mb={5}>Double Number Count: {countDoubleNumber(dominoes)}</Text>

      {/* Tampilan Sorted Dominoes */}
      <Heading size="md" mb={5}>
        Sorted Dominoes:
      </Heading>
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        {sortedDominoes.map((domino, index) => (
          <GridItem
            key={index}
            p={3}
            border="2px"
            borderColor="gray.200"
            borderRadius="md"
            textAlign="center"
            boxShadow="lg"
            bg="white"
            height="100px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" fontWeight="bold">
              {domino[0]}
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              borderTop="1px"
              borderColor="gray.300"
              pt={1}
            >
              {domino[1]}
            </Text>
          </GridItem>
        ))}
      </Grid>

      {/* Baris Tombol */}
      <HStack mt={5} spacing={3}>
        <Button colorScheme="green" onClick={handleSortAscending}>
          Sort Ascending
        </Button>
        <Button colorScheme="green" onClick={handleSortDescending}>
          Sort Descending
        </Button>
        <Button colorScheme="pink" onClick={handleShuffle}>
          Shuffle Dominoes
        </Button>
        <Button colorScheme="yellow" onClick={handleFlip}>
          Flip Dominoes
        </Button>
        <Button colorScheme="red" onClick={handleRemoveDuplicates}>
          Remove Duplicates
        </Button>
        {/* Tombol Reset */}
        <Button colorScheme="purple" onClick={handleReset}>
          Reset
        </Button>
      </HStack>

      {/* Input dan tombol untuk remove domino berdasarkan sum */}
      <HStack mt={5}>
        <Input
          placeholder="Enter sum to remove"
          value={removeDominoSum}
          onChange={(e) => setRemoveDominoSum(e.target.value)}
          width="300px"
        />
        <Button colorScheme="orange" onClick={handleRemoveDominoBySum}>
          Remove Dominoes by Sum
        </Button>
      </HStack>
    </Box>
  );
}

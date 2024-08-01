import { Flex, Grid, GridItem, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";

const sports = [
  {
    title: "Tennis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus mi nec consectetur facilisis. Cras egestas dapibus velit, eget ultrices velit sodales at. Proin accumsan dui at dui lobortis, vel vestibulum sem ullamcorper. Cras eros justo, tincidunt sit amet sapien vitae, vulputate molestie odio. Vivamus pellentesque dui finibus tortor condimentum, at malesuada ligula semper. Nam viverra tellus et gravida dictum.",
    tempImg: "/images/landing/sports/tennis_stack.png",
  },
  {
    title: "Table Tennis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus mi nec consectetur facilisis. Cras egestas dapibus velit, eget ultrices velit sodales at. Proin accumsan dui at dui lobortis, vel vestibulum sem ullamcorper. Cras eros justo, tincidunt sit amet sapien vitae, vulputate molestie odio. Vivamus pellentesque dui finibus tortor condimentum, at malesuada ligula semper. Nam viverra tellus et gravida dictum.",
    tempImg: "/images/landing/sports/table_tennis_stack.png",
  },
  {
    title: "Basketball",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus mi nec consectetur facilisis. Cras egestas dapibus velit, eget ultrices velit sodales at. Proin accumsan dui at dui lobortis, vel vestibulum sem ullamcorper. Cras eros justo, tincidunt sit amet sapien vitae, vulputate molestie odio. Vivamus pellentesque dui finibus tortor condimentum, at malesuada ligula semper. Nam viverra tellus et gravida dictum.",
    tempImg: "/images/landing/sports/basketball_stack.png",
  },
  {
    title: "Football",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus mi nec consectetur facilisis. Cras egestas dapibus velit, eget ultrices velit sodales at. Proin accumsan dui at dui lobortis, vel vestibulum sem ullamcorper. Cras eros justo, tincidunt sit amet sapien vitae, vulputate molestie odio. Vivamus pellentesque dui finibus tortor condimentum, at malesuada ligula semper. Nam viverra tellus et gravida dictum.",
    tempImg: "/images/landing/sports/football_stack.png",
  },
  {
    title: "Volleyball",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus mi nec consectetur facilisis. Cras egestas dapibus velit, eget ultrices velit sodales at. Proin accumsan dui at dui lobortis, vel vestibulum sem ullamcorper. Cras eros justo, tincidunt sit amet sapien vitae, vulputate molestie odio. Vivamus pellentesque dui finibus tortor condimentum, at malesuada ligula semper. Nam viverra tellus et gravida dictum.",
    tempImg: "/images/landing/sports/volleyball_stack.png",
  },
];

function SportsSection() {
  return (
    <Flex mt="4rem" flexDir="column" alignItems="center" mx="auto" gap={16}>
      {sports.map(({ title, description, tempImg }, i) => (
        // <Grid key={i} maxW="75%" templateColumns={{ base: "1fr", md: "1fr 1fr" }} templateRows="1fr">
        //   <GridItem>
        //     <Text
        //       mt="5rem"
        //       fontFamily="Alfa Slab One"
        //       fontWeight={600}
        //       textTransform="uppercase"
        //       fontSize={50}
        //     >
        //       {title}
        //     </Text>
        //     <Text mt="1rem" fontSize={16}>
        //       {description}
        //     </Text>
        //     <Button
        //       mt="3rem"
        //       p={6}
        //       fontSize={16}
        //       colorScheme="yellow"
        //       color="#fff"
        //       bgColor="#F4AC17"
        //       _hover={{
        //         bgColor: "#815B0B",
        //       }}
        //     >
        //       Bookings opening soon
        //     </Button>
        //   </GridItem>
        //   <GridItem as={Flex} justifyContent="center" alignItems="center">
        //     <Image width={600} height={600} alt="" src={tempImg} />
        //   </GridItem>
        // </Grid>


        <Grid
        key={i}
        maxW="75%"
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        templateRows="1fr"
        gap={4}
      >
        <GridItem>
          <Text
            mt={{ base: "1rem", sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }  }
            fontFamily="Alfa Slab One"
            fontWeight={600}
            textTransform="uppercase"
            fontSize={{ base: "40px", sm: "42.5px", md: "45px", lg: "47.5px", xl: "50px" }}
          >
            {title}
          </Text>
          <Box display={{ base: "block", md: "none" }} mt="1rem">
            <Image width={600} height={600} alt="" src={tempImg} />
          </Box>
          <Text mt="1rem" fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "15px", xl: "16px" }}>
            {description}
          </Text>
          <Button
        mt={{ base: "1rem", sm: "2rem", md: "2.5rem", lg: "3rem", xl: "3rem" }}
        p={{ base: "2", sm: "4", md: "6", lg: "8", xl: "8" }}
        fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "15px", xl: "16px" }}
        colorScheme="yellow"
        color="#fff"
        bgColor="#F4AC17"
        _hover={{
          bgColor: "#815B0B",
        }}
      >
        Bookings opening soon
      </Button>
        </GridItem>
        <GridItem as={Flex} justifyContent="center" alignItems="center" display={{ base: "none", md: "flex" }}>
          <Image width={600} height={600} alt="" src={tempImg} />
        </GridItem>
      </Grid>
      ))}
    </Flex>
  );
}

export default SportsSection;

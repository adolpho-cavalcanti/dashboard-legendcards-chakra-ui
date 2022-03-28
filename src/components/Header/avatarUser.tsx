import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function AvatarUser() {
    const { user } = useContext(AuthContext);

    return (
        <Flex align="center" ml="auto">
            <Box mr={4} textAlign="right">
                <Text>{user?.name}</Text>
                <Text color="gray.300" fontSize="small">{user?.email}</Text>
                {/* <p>{user?.name}</p> */}
            </Box>
            <Avatar size="md" name={user?.name} />
        </Flex>
    )
}
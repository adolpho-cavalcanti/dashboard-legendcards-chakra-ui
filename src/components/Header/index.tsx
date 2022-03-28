import { Flex } from "@chakra-ui/react";
import { Logo } from "./logo";
import { AvatarUser } from "./avatarUser";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h={28}
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />
            <AvatarUser />
        </Flex>
    )
}
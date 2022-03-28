import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Legends() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Lendas</Heading>
                        <Link href="/legends/create" passHref>
                            <Button as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="yellow"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr px="6" color="gray.300" width="8">
                                <Th>Lenda</Th>
                                <Th>País</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Lionel Messi</Text>
                                        <Text fontSize="sm" color="gray.300">7 Bolas de Ouro</Text>
                                    </Box>
                                </Td>
                                <Td>Argentina</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
}